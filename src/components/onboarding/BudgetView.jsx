import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles, Button, ButtonGroup } from '@material-ui/core';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

// SECTION CUSTOM STYLES
import { useStyles } from '../../styles/theme_provider';

const customStyles = makeStyles({
  budgetHeader: {
    color: '#000000',
    fontSize: '1.8rem',
    lineHeight: '2.7rem',
    fontWeight: '700',
  },
  mainHeader: {
    color: '#13B9AC',
    fontSize: '3.6rem',
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
  subSectionDescriptions: {
    color: '#959595',
    fontSize: '1.2rem',
    lineHeight: '1.8rem',
  },
  goalExampleWrapper: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  goalExample: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    border: '1px solid rgba(200, 216, 215, 0.46)',
    borderRadius: '3px',
    background: 'rgba(200, 216, 215, 0.1)',
    width: '155px',
    height: '111px',
  },
  houseIncomeWrapper: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    marginBottom: '5%',
  },
  goalExampleImg: {
    height: '2.2rem',
    width: '3.1rem',
  },
  valueWrapper: {
    display: 'flex',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: '1.2rem',
    lineHeight: '1.8rem',
  },
  incomeWrapper: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '4%',
  },
});

const BudgetView = () => {
  const classes = customStyles();
  const buttonClasses = useStyles();
  const history = useHistory();

  return (
    <div>
      <div>
        <h1 className={classes.budgetHeader}>Budget</h1>
      </div>
      <div>
        <h2 className={classes.mainHeader}>Build Your Budget</h2>
        <p className={classes.sectionDescription}>
          Your income transactions are already tracked for you. Now you can set
          a goal for your income to track your progress!
        </p>
        <p>Start setting goals</p>
      </div>
      <div>
        <h2>View goals by month</h2>
        <ButtonGroup variant="outlined">
          <Button>Month</Button>
          <Button>Week</Button>
        </ButtonGroup>
      </div>
      <div className={classes.goalExampleWrapper}>
        <div className={classes.goalExample}>
          <div className={classes.houseIncomeWrapper}>
            <img
              className={classes.goalExampleImg}
              src={require('../../media/house2.png')}
              alt="A house drawing."
            />
            <div className={classes.incomeWrapper}>
              <p>Income</p>
            </div>
          </div>
          <div className={classes.valueWrapper}>
            <p>$600</p>
          </div>
        </div>
      </div>
      <div>
        <Button
          variant="contained"
          type="submit"
          className={buttonClasses.backButton}
          onClick={() => {
            history.push('/onboarding/budget');
          }}
        >
          <KeyboardArrowLeft /> Back
        </Button>
        <Button
          variant="contained"
          type="submit"
          className={buttonClasses.nextButton}
          onClick={() => {
            history.push('/onboarding/income');
          }}
        >
          Next <KeyboardArrowRight />
        </Button>
      </div>
    </div>
  );
};

export default BudgetView;
