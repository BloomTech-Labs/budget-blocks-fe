import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles, Button } from '@material-ui/core';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

// SECTION CUSTOM STYLES
import { useStyles } from '../../styles/theme_provider';

const customStyles = makeStyles({
  budgetHeader: {
    color: '#000000',
    fontSize: '18px',
    lineHeight: '27px',
    fontWeight: '700',
  },
  mainHeader: {
    color: '#13B9AC',
    fontSize: '36px',
    lineHeight: '130.8%',
    fontWeight: '600',
  },
  sectionDescription: {
    color: '#000000',
    fontSize: '18px',
    lineHeight: '27px',
    fontWeight: 'normal',
  },
  subSectionTitle: {
    color: '#21242C',
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: '600',
  },
  subSectionDescriptions: {
    color: '#959595',
    fontSize: '12px',
    lineHeight: '18px',
  },
});

const BuildYourBudget = () => {
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
          All of your linked bank account transactions are automatically sorted
          into basic categories.
        </p>
      </div>
      <div>
        <h3 className={classes.subSectionTitle}>Linked transactions</h3>
        <table>
          <tr className={classes.subSectionDescriptions}>
            <td>06/02/20</td>
            <td>
              <img
                src={require('../../media/house.png')}
                alt="A house drawing."
              />
              Whole Foods
            </td>
            <td>$68.37</td>
          </tr>
          <tr className={classes.subSectionDescriptions}>
            <td>06/02/20</td>
            <td>
              <img
                src={require('../../media/house.png')}
                alt="A house drawing."
              />
              Septa Parking Auth
            </td>
            <td>$150.25</td>
          </tr>
          <tr className={classes.subSectionDescriptions}>
            <td>06/02/20</td>
            <td>
              <img
                src={require('../../media/house.png')}
                alt="A house drawing."
              />
              Lyft ride
            </td>
            <td>$16.03</td>
          </tr>
        </table>
      </div>
      <div>
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

export default BuildYourBudget;
