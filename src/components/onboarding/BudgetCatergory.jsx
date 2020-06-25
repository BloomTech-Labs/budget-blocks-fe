import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';

import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { useStyles } from '../../styles/custom_button_styles';

import carFade from '../../media/carFade.svg';
import foodFade from '../../media/foodFade.svg';
import houseFade from '../../media/houseFade.svg';
import personalFade from '../../media/personalFade.svg';
import editPencil from '../../media/pencil.svg';
import car from '../../media/car.svg';
import food from '../../media/food.svg';
import house from '../../media/house.svg';
import personal from '../../media/personal.svg';

import { fetchTransactions } from '../../redux/actions/dashboardAction';

const SERVER_HOST = process.env.REACT_APP_SERVER_HOST;

const user_id = window.localStorage.getItem('user_id');

const customStyles = makeStyles({
  budgetContainer: {
    display: 'flex',
    justifyContent: 'right',
    margin: '5% 0% 12%',
  },
  skipButton: {
    fontSize: '1rem',
    fontFamily: 'Poppins',
    fontWeight: 'normal',
    lineHeight: '1.5',
    letterSpacing: '0.00938em',
    color: 'rgba(0, 0, 0, 0.52)',
    margin: '1% 0% 0%',
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
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: '12% 0% 0%',
  },
  backNextButtonWrapper: {
    display: 'flex',
    justifyContent: 'center',
    margin: '12% 0%',
  },
  cardContainer: {
    width: '48%',
    background: 'rgba(200, 216, 215, 0.1)',
    border: '0px solid rgba(200, 216, 215, 0.46)',
    boxSizing: 'border-box',
    borderRadius: '3px',
    margin: '3% 0%',
    height: '17vh',
    fontFamily: 'Poppins',
  },
  goalSetContainer: {
    width: '48%',
    background: '#34D1C8',
    border: '0px solid rgba(200, 216, 215, 0.46)',
    boxSizing: 'border-box',
    borderRadius: '3px',
    margin: '3% 0%',
    height: '17vh',
    fontFamily: 'Poppins',
  },
  cardHeader: {
    display: 'flex',
  },
  cardTitle: {
    margin: '4% 0% 0%',
    fontSize: '1.5rem',
    fontWeight: 'lighter',
    color: 'rgba(33, 36, 44, 0.5)',
  },
  goalSetTitle: {
    margin: '4% 0% 0%',
    fontSize: '1.5rem',
    fontWeight: 'lighter',
    color: '#FFFFFF',
  },
  editIcon: {
    display: 'flex',
    justifyContent: 'right',
    margin: '-15% -22% 0% 0%',
  },
  cardContent1: {
    fontSize: '1.1rem',
    color: '#959595',
    margin: '3% 3% 0%',
  },
  goalContent1: {
    fontSize: '1.1rem',
    color: '#FFFFFF',
    margin: '3% 3% 0%',
  },
  cardContent2: {
    fontSize: '1.2rem',
    margin: '7% 3% 0%',
    color: '#13B9AC',
  },
  goalContent2: {
    fontSize: '1.4rem',
    margin: '7% 3% 0%',
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

const BudgetCategory = ({ transaction, fetchTransactions, location }) => {
  const classes = customStyles();
  const buttonClasses = useStyles();
  const history = useHistory();
  const { authState } = useOktaAuth();
  const { accessToken } = authState;
  const [categories, setCategories] = useState([]);
  const [values, setValues] = useState([]);
  const [goalsValue, setGoalsValue] = useState([]);

  useEffect(() => {
    axios
      .get(`${SERVER_HOST}/plaid/userTransactions/${user_id}`)
      .then((res) => {
        axios
          .post(`https://api.budgetblocks.org/transaction`, res.data)
          .then((res) => {
            setCategories(Object.keys(res.data.totals));
            setValues(Object.values(res.data.totals));
          })
          .catch((err) => {
            console.log('DS Trans', err.message);
          });
      })
      .catch((err) => {
        console.log('plaid_trans', err.message);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${SERVER_HOST}/api/goals/${user_id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        setGoalsValue(Object.values(res.data));
      })
      .catch((err) => {
        console.log('goals', err.message);
      });
  }, []);

  console.log(categories);
  console.log(values);
  console.log(goalsValue);

  return (
    <Container>
      <div className={classes.budgetContainer}>
        <Typography className={classes.skipButton}>Skip</Typography>
      </div>
      <div style={{ margin: '0% 0% 7%' }}>
        <Typography className={classes.mainHeader}>
          Build Your Budget
        </Typography>
      </div>
      <div style={{ margin: '0% 0% 10%' }}>
        <Typography className={classes.sectionDescription}>
          All of your linked bank account transactions are automatically sorted
          into basic categories
        </Typography>
      </div>
      <div>
        <Typography className={classes.subSectionTitle}>
          Set your budget goals for basic expenses
        </Typography>
      </div>
      <Grid className={classes.categoriesContainer}>
        {/* 1 */}
        {goalsValue[2] === null ? (
          <Card className={classes.cardContainer}>
            <CardContent>
              <div className={classes.editIcon}>
                <Button
                  style={{ padding: '-1px' }}
                  onClick={() => {
                    history.push('/goal/house');
                  }}
                >
                  <img src={editPencil} alt="Edit Pencil"></img>
                </Button>
              </div>
              <div className={classes.cardHeader}>
                <img src={houseFade} alt="Category Name Icon"></img>
                <Typography className={classes.cardTitle}>
                  {categories[5]}
                </Typography>
              </div>
              <Typography className={classes.cardContent1}>
                Actual{' '}
                <span style={{ margin: '0% 0% 0% 5%' }}>${values[5]}</span>
              </Typography>
              <Typography className={classes.cardContent2}>Set Goal</Typography>
            </CardContent>
          </Card>
        ) : (
          <Card className={classes.goalSetContainer}>
            <CardContent>
              <div className={classes.editIcon}>
                <Button
                  style={{ padding: '-1px' }}
                  onClick={() => {
                    history.push('/goal/house');
                  }}
                >
                  <img src={editPencil} alt="Edit Pencil"></img>
                </Button>
              </div>
              <div className={classes.cardHeader}>
                <img src={house} alt="Category Name Icon"></img>
                <Typography className={classes.goalSetTitle}>
                  {categories[5]}
                </Typography>
              </div>
              <Typography className={classes.goalContent1}>
                Actual{' '}
                <span style={{ margin: '0% 0% 0% 5%' }}>${values[5]}</span>
              </Typography>
              <Typography className={classes.goalContent2}>
                Goal{' '}
                <span style={{ margin: '0% 0% 0% 4%' }}>${goalsValue[2]}</span>
              </Typography>
            </CardContent>
          </Card>
        )}
        {/* 2 */}
        {goalsValue[1] === null ? (
          <Card className={classes.cardContainer}>
            <CardContent>
              <div className={classes.editIcon}>
                <Button
                  style={{ padding: '-1px' }}
                  onClick={() => {
                    history.push('/goal/food');
                  }}
                >
                  <img src={editPencil} alt="Edit Pencil"></img>
                </Button>
              </div>
              <div className={classes.cardHeader}>
                <img src={foodFade} alt="Category Name Icon"></img>
                <Typography className={classes.cardTitle}>
                  {categories[1]}
                </Typography>
              </div>
              <Typography className={classes.cardContent1}>
                Actual{' '}
                <span style={{ margin: '0% 0% 0% 5%' }}>${values[1]}</span>
              </Typography>
              <Typography className={classes.cardContent2}>Set Goal</Typography>
            </CardContent>
          </Card>
        ) : (
          <Card className={classes.goalSetContainer}>
            <CardContent>
              <div className={classes.editIcon}>
                <Button
                  style={{ padding: '-1px' }}
                  onClick={() => {
                    history.push('/goal/food');
                  }}
                >
                  <img src={editPencil} alt="Edit Pencil"></img>
                </Button>
              </div>
              <div className={classes.cardHeader}>
                <img src={food} alt="Category Name Icon"></img>
                <Typography className={classes.goalSetTitle}>
                  {categories[1]}
                </Typography>
              </div>
              <Typography className={classes.goalContent1}>
                Actual{' '}
                <span style={{ margin: '0% 0% 0% 5%' }}>${values[1]}</span>
              </Typography>
              <Typography className={classes.goalContent2}>
                Goal{' '}
                <span style={{ margin: '0% 0% 0% 4%' }}>${goalsValue[1]}</span>
              </Typography>
            </CardContent>
          </Card>
        )}
        {/* 3 */}
        {goalsValue[9] === null ? (
          <Card className={classes.cardContainer}>
            <CardContent>
              <div className={classes.editIcon}>
                <Button
                  style={{ padding: '-1px' }}
                  onClick={() => {
                    history.push('/goal/transport');
                  }}
                >
                  <img src={editPencil} alt="Edit Pencil"></img>
                </Button>
              </div>
              <div className={classes.cardHeader}>
                <img src={carFade} alt="Category Name Icon"></img>
                <Typography className={classes.cardTitle}>
                  {categories[6]}
                </Typography>
              </div>
              <Typography className={classes.cardContent1}>
                Actual{' '}
                <span style={{ margin: '0% 0% 0% 5%' }}>${values[6]}</span>
              </Typography>
              <Typography className={classes.cardContent2}>Set Goal</Typography>
            </CardContent>
          </Card>
        ) : (
          <Card className={classes.goalSetContainer}>
            <CardContent>
              <div className={classes.editIcon}>
                <Button
                  style={{ padding: '-1px' }}
                  onClick={() => {
                    history.push('/goal/transport');
                  }}
                >
                  <img src={editPencil} alt="Edit Pencil"></img>
                </Button>
              </div>
              <div className={classes.cardHeader}>
                <img src={car} alt="Category Name Icon"></img>
                <Typography className={classes.goalSetTitle}>
                  {categories[6]}
                </Typography>
              </div>
              <Typography className={classes.goalContent1}>
                Actual{' '}
                <span style={{ margin: '0% 0% 0% 5%' }}>${values[6]}</span>
              </Typography>
              <Typography className={classes.goalContent2}>
                Goal{' '}
                <span style={{ margin: '0% 0% 0% 4%' }}>${goalsValue[9]}</span>
              </Typography>
            </CardContent>
          </Card>
        )}
        {/* 4 */}
        {goalsValue[3] === null ? (
          <Card className={classes.cardContainer}>
            <CardContent>
              <div className={classes.editIcon}>
                <Button
                  style={{ padding: '-1px' }}
                  onClick={() => {
                    history.push('/goal/personal');
                  }}
                >
                  <img src={editPencil} alt="Edit Pencil"></img>
                </Button>
              </div>
              <div className={classes.cardHeader}>
                <img src={personalFade} alt="Category Name Icon"></img>
                <Typography className={classes.cardTitle}>
                  {categories[0]}
                </Typography>
              </div>
              <Typography className={classes.cardContent1}>
                Actual{' '}
                <span style={{ margin: '0% 0% 0% 5%' }}>${values[0]}</span>
              </Typography>
              <Typography className={classes.cardContent2}>Set Goal</Typography>
            </CardContent>
          </Card>
        ) : (
          <Card className={classes.goalSetContainer}>
            <CardContent>
              <div className={classes.editIcon}>
                <Button
                  style={{ padding: '-1px' }}
                  onClick={() => {
                    history.push('/goal/personal');
                  }}
                >
                  <img src={editPencil} alt="Edit Pencil"></img>
                </Button>
              </div>
              <div className={classes.cardHeader}>
                <img src={personal} alt="Category Name Icon"></img>
                <Typography className={classes.goalSetTitle}>
                  {categories[0]}
                </Typography>
              </div>
              <Typography className={classes.goalContent1}>
                Actual{' '}
                <span style={{ margin: '0% 0% 0% 5%' }}>${values[0]}</span>
              </Typography>
              <Typography className={classes.goalContent2}>
                Goal{' '}
                <span style={{ margin: '0% 0% 0% 4%' }}>${goalsValue[3]}</span>
              </Typography>
            </CardContent>
          </Card>
        )}
      </Grid>
      <div className={classes.backNextButtonWrapper}>
        <Button
          variant="contained"
          type="submit"
          className={buttonClasses.backButton}
          onClick={() => {
            history.push('/onboarding/income');
          }}
        >
          <KeyboardArrowLeft /> Back
        </Button>
        <Button
          variant="contained"
          type="submit"
          className={buttonClasses.nextButton}
          onClick={() => {
            history.push('/dashboard/analyzerview');
          }}
        >
          Next <KeyboardArrowRight />
        </Button>
      </div>
    </Container>
  );
};

export default BudgetCategory;
