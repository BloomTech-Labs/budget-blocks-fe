import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles, Button, ButtonGroup } from '@material-ui/core';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

// SECTION REDUX
import { connect } from 'react-redux';

// SECTION CUSTOM STYLES
import { useStyles } from '../../styles/theme_provider';

const customStyles = makeStyles({
  mainWrapper: {
    margin: '5% 6%',
  },
  budgetHeader: {
    color: '#000000',
    fontSize: '1.8rem',
    lineHeight: '2.7rem',
    fontWeight: '700',
    marginBottom: '14%',
  },
  skipButton: {
    position: 'relative',
    left: '30rem',
    top: '-7rem',
    width: '6%',
    color: 'rgba(0, 0, 0, 0.52)',
    fontSize: '1.2rem',
    lineHeight: '1.8rem',
  },
  mainHeader: {
    color: '#13B9AC',
    fontSize: '3.6rem',
    lineHeight: '130.8%',
    fontWeight: '600',
    marginBottom: '3%',
  },
  sectionDescription: {
    color: '#000000',
    fontSize: '1.8rem',
    lineHeight: '2.7rem',
    fontWeight: 'normal',
  },
  subHeader1: {
    color: '#21242C',
    fontSize: '1.6rem',
    lineHeight: '2.4rem',
    fontWeight: '600',
    marginTop: '5%',
    marginBottom: '5%',
  },
  subHeader2: {
    color: '#21242C',
    fontSize: '1.8rem',
    lineHeight: '2.7rem',
    fontWeight: 'normal',
    marginBottom: '5%',
  },
  subSectionDescriptions: {
    color: '#959595',
    fontSize: '1.2rem',
    lineHeight: '1.8rem',
  },
  monthWeekWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '2%',
  },
  goalExampleWrapper: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    marginTop: '13%',
    marginBottom: '17%',
  },
  goalExample: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    border: '1px solid rgba(200, 216, 215, 0.46)',
    borderRadius: '3px',
    background: 'rgba(200, 216, 215, 0.1)',
    width: '15.5rem',
    height: '11.1rem',
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
  buttonWrapper: {
    display: 'flex',
    justifyContent: 'center',
  },
  toggleOn: {
    background: '#13B9AC !important',
    color: 'white !important',
  },

  toggleOff: {
    background: 'white !important',
    color: '#959595 !important',
  },
  monthButton: {
    width: '17rem',
    height: '3rem',
    textTransform: 'capitalize',
    fontSize: '1.4rem',
    lineHeight: '2.1rem',
    // color: 'white',
    // background: '#13B9AC',
    border: '1px solid #13B9AC',
    '&:hover': {
      background: '#13B9AC',
    },
  },
  weekButton: {
    width: '17rem',
    height: '3rem',
    textTransform: 'capitalize',
    fontSize: '1.4rem',
    lineHeight: '2.1rem',
    // color: '#959595',
    border: '1px solid #13B9AC',
  },
});

const BudgetView = () => {
  const classes = customStyles();
  const buttonClasses = useStyles();
  const history = useHistory();

  const skipPage = (e) => {
    history.push('/onboarding/income');
  };

  const [view, setView] = useState(false);

  const toggle = () => {
    const month = document.querySelector('#month');
    const week = document.querySelector('#week');

    week.classList.toggle(`${classes.toggleOn}`);

    if (view === false) {
    }
  };

  return (
    <div className={classes.mainWrapper}>
      <div>
        <h1 className={classes.budgetHeader}>Budget</h1>
        <p className={classes.skipButton} onClick={skipPage}>
          skip
        </p>
        <h2 className={classes.mainHeader}>Build Your Budget</h2>
        <p className={classes.sectionDescription}>
          Your income transactions are already tracked for you. Now you can set
          a goal for your income to track your progress!
        </p>
        <h2 className={classes.subHeader1}>Start setting goals</h2>
        <h2 className={classes.subHeader2}>View goals by month</h2>
      </div>
      <ButtonGroup className={classes.monthWeekWrapper}>
        <Button
          className={[classes.monthButton, classes.toggleOn].join(' ')}
          id="month"
          onClick={() => {}}
          value="month"
        >
          Month
        </Button>
        <Button
          className={classes.weekButton}
          id="week"
          onClick={null}
          value="week"
        >
          Week
        </Button>
      </ButtonGroup>
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
      <div className={classes.buttonWrapper}>
        <Button
          variant="contained"
          type="submit"
          className={buttonClasses.backButton}
          onClick={() => {
            history.push('/onboarding/budgetpreview');
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

const mapStateToProps = (state) => {
  return {
    transaction: state.trans.transaction,
  };
};

export default connect(mapStateToProps, {})(BudgetView);
