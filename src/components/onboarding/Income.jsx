import React, { useState } from 'react';
import axios from 'axios';
import { useForm, Controller } from 'react-hook-form';
import { useOktaAuth } from '@okta/okta-react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { useStyles } from '../../styles/custom_button_styles';
import { connect } from 'react-redux';

import incomeSvg from '../../media/income.svg';

// 13B9AC button primary color
const customStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    '& > *': {
      display: 'flex',
      flexDirection: 'column',
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  mainWrapper: {
    margin: '5% 7%',
  },
  incomeInput: {
    borderColor: '#13B9AC',
    marginBottom: '2%',
    marginTop: '2%',
  },
  budgetHeader: {
    display: 'flex',
    justifyContent: 'flex-end',
    color: 'rgba(0,0,0,0.52)',
    fontSize: '12px',
    lineHeight: '18px',
    marginBottom: '20%',
  },
  budgetBuildHeader: {
    color: '#13B9AC',
    fontSize: '36px',
    lineHeight: '54px',
    fontWeight: '600',
    marginBottom: '5%',
  },
  sectionDescription: {
    color: '#000000',
    fontSize: '16px',
    lineHeight: '24px',
    marginBottom: '8%',
  },
  incomeHeader: {
    color: '#000000',
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: '600',
    alignSelf: 'start',
  },
  saveButton: {
    color: '#13B9AC',
    textTransform: 'capitalize',
    fontSize: '12px',
    lineHeight: '18px',
  },
  formWrapper: {
    display: 'flex',
  },
  actualSubHeading: {
    fontSize: '14px',
    lineHeight: '21px',
    alignSelf: 'start',
    marginTop: '27px',
  },
  goalSubHeading: {
    fontSize: '14px',
    lineHeight: '21px',
    marginTop: '34px',
  },
  incomeSubHeading: {
    fontSize: '18px',
    lineHeight: '27px',
    marginLeft: '10.5px',
  },
  navButtons: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'end',
    margin: '20%',
  },
  incomeTitle: {
    display: 'flex',
    marginTop: '66px',
  },
}));

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

const Income = ({ transaction }) => {
  const { handleSubmit, control, register, errors } = useForm();
  const { authState } = useOktaAuth();
  const { accessToken } = authState;
  const [income, setIncome] = useState(null);
  const [editMode, setEditMode] = useState(true);
  const classes = customStyles();
  const buttonClasses = useStyles();
  const history = useHistory();

  const SERVER_HOST = process.env.REACT_APP_SERVER_HOST;

  const userId = localStorage.getItem('user_id');

  const formSubmit = (data) => {
    setIncome(data.income);
    axios
      .post(
        `${SERVER_HOST}/api/goals`,
        { income: data.income, user_id: userId },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        setEditMode(!editMode);
      })
      .catch((err) => console.log(err));
  };
  // going to have to filter through total/transaction to get income
  return (
    <div className={classes.mainWrapper}>
      <h1 className={classes.budgetHeader}>Skip</h1>
      <h1 className={classes.budgetBuildHeader}>Build Your Budget</h1>
      <p className={classes.sectionDescription}>
        Your income transactions are already tracked for you. Now you can set a
        goal for your income to track your progress.
      </p>
      <h2 className={classes.incomeHeader}>Set your income goal</h2>

      <div className={classes.root}>
        <div className="category">
          <div className={classes.incomeTitle}>
            <img src={incomeSvg} alt="income svg" />
            <h3 className={classes.incomeSubHeading}>Income</h3>
          </div>
          <p className={classes.actualSubHeading}>Actual: {income}</p>
          <div className={classes.formWrapper}>
            {editMode === true ? (
              <>
                <p className={classes.goalSubHeading}>Goal: </p>
                <form
                  className={classes.form}
                  onSubmit={handleSubmit(formSubmit)}
                >
                  <Controller
                    as={ValidationTextField}
                    name="income"
                    placeholder="$"
                    control={control}
                    defaultValue={income || ''}
                    inputRef={register}
                    id="outlined-basic"
                    label="Income"
                    variant="outlined"
                    className={classes.incomeInput}
                  />
                  {errors.name && <p>{errors.name.message}</p>}
                  <Button className={classes.saveButton} type="submit">
                    Save
                  </Button>
                  {/* <Button onClick={() => setEditMode(!editMode)}>Edit</Button> */}
                </form>
              </>
            ) : (
              <p className={classes.goalSubHeading}>Goal: {income}</p>
            )}
          </div>
        </div>
      </div>

      <div className={classes.navButtons}>
        <Button
          variant="contained"
          color="secondary"
          type="submit"
          className={buttonClasses.backButton}
          onClick={() => {
            history.push('/onboarding/budgetview');
          }}
        >
          {'<'} Back
        </Button>
        <Button
          variant="contained"
          type="submit"
          className={buttonClasses.nextButton}
          onClick={() => {
            history.push('/onboarding/budgetcategory');
          }}
        >
          Next {'>'}
        </Button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    transaction: state.trans.transaction,
  };
};

export default connect(mapStateToProps, {})(Income);
