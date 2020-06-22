import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { useOktaAuth } from '@okta/okta-react';

import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { useStyles } from '../../../styles/theme_provider';

const SERVER_HOST = process.env.REACT_APP_SERVER_HOST;

const user_id = window.localStorage.getItem('user_id');

const customStyles = makeStyles({
    budgetContainer: {
        display: "flex",
        justifyContent: "right",
        margin: "5% 0% 12%"
    },
    skipButton: {
        fontSize: "1rem",
        fontFamily: "Poppins",
        fontWeight: "normal",
        lineHeight: "1.5",
        letterSpacing: "0.00938em",
        color: "rgba(0, 0, 0, 0.52)",
        margin: "1% 0% 0%"
    },
    mainHeader: {
        color: '#13B9AC',
        fontSize: '36px',
        lineHeight: '130.8%',
        fontWeight: '600',
    },
    sectionDescription: {
        color: '#000000',
        fontSize: '1.8rem',
        lineHeight: '2.7rem',
        fontWeight: 'normal',
    },
    subSectionTitle: {
        color: '#21242C',
        fontSize: '1.6rem',
        lineHeight: '2.4rem',
        fontWeight: '600',
    },
    categoriesContainer: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        margin: "12% 0% 0%"
    },
    backNextButtonWrapper: {
        display: "flex",
        justifyContent: "center",
        margin: "29% 0% 0%"
    },
    goalHeader: {
        display: "flex",
        flexDirection: "column",
        margin: "12% 17% 4%",
        fontFamily: "Poppins"
    },
    goalTitle: {
        margin: "0% 0% 9%",
        fontSize: "1.5rem",
        color: "#333333"
    },
    totalPreview: {
        color: "#333333",
        fontSize: "1.2rem"
    },
    goalInputContainer: {
        display: "flex",
        margin: "0% 0% 0% 17%"
    },
    goalText: {
        margin: "13% 4% 0% 0%",
        fontSize: "1.2rem",
        color: "#333333"
    },
    goalForm: {
        display: "flex",
        flexDirection: "column"
    },
    saveButton: {
        justifyContent: "left",
        margin: "29% 0% 0% -93%",
        fontSize: "1.2rem",
        color: "#13B9AC"
    },
});

const ValidationTextField = withStyles({
    root: {
      '& input:valid + fieldset': {
        borderColor: '#13B9AC',
        borderWidth: 1,
      },
      '& input:invalid + fieldset': {
        borderColor: 'red',
        borderWidth: 2,
      },
      '& input:valid:focus + fieldset': {
        borderColor: '#13B9AC',
        borderWidth: 1,
      },
    },
  })(TextField);

const PersonalGoal = 
({
    transaction,
    fetchTransactions,
    location
}) => {

    const classes = customStyles();
    const buttonClasses = useStyles();
    const history = useHistory()
    const { handleSubmit, control, register, errors } = useForm();
    const { authState } = useOktaAuth();
    const { accessToken } = authState;
    const [categories, setCategories] = useState([])
    const [values, setValues] = useState([])
    const [goalsValue, setGoalsValue] = useState([])
    const [personal, setPersonal] = useState(null);
    const [editMode, setEditMode] = useState(true);

    useEffect(() => {
        axios
            .get(`${SERVER_HOST}/plaid/userTransactions/${user_id}`)
            .then(res => {
                axios
                .post(`https://api.budgetblocks.org/transaction`, res.data)
                .then(res => {
                    setCategories(Object.keys(res.data.totals))
                    setValues(Object.values(res.data.totals))
                })
                .catch(err => {
                    console.log("DS Trans", err.message)
                })
        })
        .catch(err => {
            console.log("plaid_trans", err.message)
        })
    }, []);

    useEffect(() => {
        axios
            .get(`${SERVER_HOST}/api/goals/${user_id}`,
                {
                    headers: {
                    Authorization: `Bearer ${accessToken}`,
                    },
                }
            )
            .then(res => {
                setGoalsValue(Object.values(res.data))
        })
        .catch(err => {
            console.log("goals", err.message)
        })
    }, []);

    const formSubmit = (data) => {
        setPersonal(data.personal);
        axios
          .put(
            `${SERVER_HOST}/api/goals/${user_id}`,
            { personal: data.personal },
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          )
          .then((res) => {
            console.log(res);
            setEditMode(!editMode);
            history.push('/onboarding/budgetcategory')
          })
          .catch((err) => console.log(err));
      };
    
    return (
        <Container>
            <div className={classes.budgetContainer}>
            <Typography className={classes.skipButton}>Skip</Typography>
            </div>
            <div style={{ margin: "0% 0% 7%" }}>
                <Typography className={classes.mainHeader}>Build Your Budget</Typography>
            </div>
            <div style={{ margin: "0% 0% 10%" }}>
                <Typography className={classes.sectionDescription}>Your income transactions are already tracked for you. Now you can set a goal for your income to track your progress.</Typography>
            </div>
            <div>
                <Typography className={classes.subSectionTitle}>Set your Personal budget goal</Typography>
            </div>
            <div className={classes.goalHeader}>
                <Typography className={classes.goalTitle}>{categories[0]}</Typography>
                <Typography className={classes.totalPreview}>Actual: ${values[0]}</Typography>
            </div>
            <div className={classes.goalInputContainer}>
              <>
                <p className={classes.goalText}>Goal: </p>
                <form
                  className={classes.form}
                  onSubmit={handleSubmit(formSubmit)}
                >
                  <Controller
                    as={ValidationTextField}
                    name="personal"
                    placeholder="$"
                    control={control}
                    defaultValue={personal || ''}
                    inputRef={register}
                    id="outlined-basic"
                    label="$"
                    variant="outlined"
                    className={classes.housingInput}
                  />
                  {errors.name && <p>{errors.name.message}</p>}
                  <Button className={classes.saveButton} type="submit">
                    Save
                  </Button>
                </form>
              </>
            </div>
            <div className={classes.backNextButtonWrapper}>
                <Button
                variant="contained"
                type="submit"
                className={buttonClasses.backButton}
                onClick={() => {
                    history.push('/onboarding/budgetcategory');
                }}
                >
                <KeyboardArrowLeft /> Back
                </Button>
                <Button
                variant="contained"
                type="submit"
                className={buttonClasses.nextButton}
                onClick={() => {
                    history.push('/onboarding/budgetcategory');
                  }}
                >
                Next <KeyboardArrowRight />
                </Button>
            </div>
        </Container>
    )
};

export default PersonalGoal