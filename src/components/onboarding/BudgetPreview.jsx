import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
  makeStyles,
  Button,
  Grid,
  Paper,
  CircularProgress,
} from '@material-ui/core';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

//SECTION REDUX
import { connect } from 'react-redux';
import { fetchTransactions } from '../../redux/actions/dashboardAction';

// SECTION CUSTOM STYLES
import { useStyles } from '../../styles/custom_button_styles';

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
    marginBottom: '10%',
  },
  subSectionTitle: {
    color: '#21242C',
    fontSize: '1.6rem',
    lineHeight: '2.4rem',
    fontWeight: '600',
    marginBottom: '6%',
  },
  subSectionDescriptions: {
    color: '#959595',
    fontSize: '1.2rem',
    lineHeight: '1.8rem',
  },
  tableSection: {
    boxShadow: '0 0 0 0',
    fontSize: '1.2rem',
    lineHeight: '1.8rem',
    color: '#959595',
  },
  tableHouseImgWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  transactionName: {
    marginLeft: '3%',
  },
  buttonWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '40%',
  },
  loadingSection: {
    display: 'flex',
    justifyContent: 'center',
    fontSize: '1.2rem',
    marginTop: '37%',
  },
  spinnerWrapper: {
    display: 'flex',
    justifyContent: 'center',
  },
  spinner: {
    color: '#13B9AC',
  },
});

// SECTION COMPONENT
const BudgetPreview = ({ transaction, fetchTransactions }) => {
  const classes = customStyles();
  const buttonClasses = useStyles();
  const history = useHistory();

  const skipPage = (e) => {
    history.push('/onboarding/budgetview');
  };

  // FIXME This useEffect needs to watch something so that it displays the transactions once you transition from the banklink component to this component. We were having trouble getting the useEffect to fire. It only fires and updates the transactions on refresh.
  useEffect(() => {
    fetchTransactions();
  }, []);

  // console.log('budget preview transactions:', transaction);

  return (
    <div className={classes.mainWrapper}>
      <div>
        <h1 className={classes.budgetHeader}>Budget</h1>
        <p className={classes.skipButton} onClick={skipPage}>
          skip
        </p>
        <h2 className={classes.mainHeader}>Build Your Budget</h2>
        <p className={classes.sectionDescription}>
          All of your linked bank account transactions are automatically sorted
          into basic categories.
        </p>
      </div>
      <div>
        <h3 className={classes.subSectionTitle}>Linked transactions</h3>
      </div>
      <div>
        {transaction.length === 0 ? (
          <div className={classes.loadingSection}>
            <div>
              <div className={classes.spinnerWrapper}>
                <CircularProgress className={classes.spinner} />
              </div>
              <p>Loading...</p>
            </div>
          </div>
        ) : (
          transaction.transactions.slice(1, 4).map((item) => (
            <>
              <Grid container spacing={3}>
                <Grid item xs={3}>
                  <Paper className={classes.tableSection}>{item.date}</Paper>
                </Grid>
                <Grid item xs={6}>
                  <Paper className={classes.tableSection}>
                    <div className={classes.tableHouseImgWrapper}>
                      <img
                        src={require('../../media/house.png')}
                        alt="A house drawing."
                      />
                      <p className={classes.transactionName}>{item.name}</p>
                    </div>
                  </Paper>
                </Grid>
                <Grid item xs={3}>
                  <Paper className={classes.tableSection}>
                    {'$ '}
                    {`${item.amount}`}
                  </Paper>
                </Grid>
              </Grid>
            </>
          ))
        )}
      </div>
      <div className={classes.buttonWrapper}>
        <Button
          variant="contained"
          type="submit"
          className={buttonClasses.backButton}
          onClick={() => {
            history.push('/onboarding/banklink');
          }}
        >
          <KeyboardArrowLeft /> Back
        </Button>
        <Button
          variant="contained"
          type="submit"
          className={buttonClasses.nextButton}
          onClick={() => {
            history.push('/onboarding/budgetview');
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

export default connect(mapStateToProps, { fetchTransactions })(BudgetPreview);
