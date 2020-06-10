import React from 'react';
import axios from 'axios';
import { PlaidLink } from 'react-plaid-link';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
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
    lineHeight: '54px',
    fontWeight: '600',
  },
  sectionDescription: {
    color: '#000000',
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: 'normal',
  },
  subSectionTitle: {
    color: '#21242C',
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: '600',
  },
  subSectionDescriptions: {
    color: '#000000',
    fontSize: '14px',
    lineHeight: '21px',
  },
  checkmark: {
    width: '10px',
  },
});

const BankLink = () => {
  const buttonClasses = useStyles();
  const classes = customStyles();
  const history = useHistory();
  const onSuccess = (publicToken, metadata) => {
    const HOST = process.env.REACT_APP_SERVER_HOST;

    console.log('public_token:', publicToken);
    console.log(metadata);

    //FIXME Make this dynamic
    axios.post(`${HOST}/plaid/token_exchange/${1}`, {
      publicToken: publicToken,
    });
  };

  return (
    <div>
      <div>
        <h1 className={classes.budgetHeader}>Budget</h1>
        <h2 className={classes.mainHeader}>Link Your Bank Accounts</h2>
        <p className={classes.sectionDescription}>
          Linking your bank accounts means no more manual data entry!
        </p>
        <img
          src={require('../../media/arrow-drodpdown.png')}
          alt="check mark"
          className={classes.checkmark}
        />
        <span> Secure</span>
        <p className={classes.subSectionDescription}>
          Your bank data transfers are encrypted end-to-end!
        </p>
        <img
          src={require('../../media/arrow-drodpdown.png')}
          alt="check mark"
          className={classes.checkmark}
        />
        <span> Private</span>
        <p className={classes.subSectionDescription}>
          Your credentials will never be shared with Budget!
        </p>
      </div>

      <PlaidLink
        clientName="Budget Blocks"
        env="sandbox"
        product={['transactions']}
        publicKey="7b47db1cfa540573d15cea302e5988"
        onSuccess={onSuccess}
      >
        <Button className={buttonClasses.nextButton} variant="contained">
          Connect a bank account
        </Button>
      </PlaidLink>
      <div>
        <Button
          variant="contained"
          type="submit"
          className={buttonClasses.backButton}
          onClick={() => {
            history.push('/onboarding/accountinfo');
          }}
        >
          <KeyboardArrowLeft /> Back
        </Button>
        <Button
          variant="contained"
          type="submit"
          className={buttonClasses.nextButton}
          onClick={() => {
            history.push('/onboarding/budget');
          }}
        >
          Next <KeyboardArrowRight />
        </Button>
      </div>
    </div>
  );
};

export default BankLink;
