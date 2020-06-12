import React, { useState } from 'react';
import axios from 'axios';
import { PlaidLink } from 'react-plaid-link';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { useOktaAuth } from '@okta/okta-react';
import { useAlert } from 'react-alert';

//SECTION REDUX
import { connect } from 'react-redux';
import { updateUser } from '../../redux/actions/userAction';

// SECTION CUSTOM STYLES
import { useStyles } from '../../styles/theme_provider';

const customStyles = makeStyles({
  mainWrapper: {
    margin: '5% 7%',
  },
  budgetHeader: {
    color: '#000000',
    fontSize: '1.8rem',
    lineHeight: '2.7rem',
    fontWeight: '700',
    marginBottom: '20%',
  },
  mainHeader: {
    color: '#13B9AC',
    fontSize: '3.6rem',
    lineHeight: '5.4rem',
    fontWeight: '600',
    marginBottom: '10%',
  },
  sectionDescription: {
    color: '#000000',
    fontSize: '1.6rem',
    lineHeight: '2.4rem',
    fontWeight: 'normal',
    marginBottom: '5%',
  },
  securePrivateWrapper: {
    display: 'flex',
    marginBottom: '3%',
  },
  checkmark: {
    height: '1rem',
    marginTop: '2%',
  },
  listHeading: {
    fontSize: '1.6rem',
    lineHeight: '2.4rem',
    fontWeight: '600',
    color: '#21242C',
    marginLeft: '3%',
  },
  subSectionDescription: {
    color: '#000000',
    fontSize: '1.4rem',
    lineHeight: '2.1rem',
    marginLeft: '6%',
  },
  plaidLinkWrapper: {
    margin: '10% 0%',
    display: 'flex',
    justifyContent: 'center',
  },
  plainLinkButton: {
    fontSize: '14px',
    lineHeight: '21px',
    fontWeight: '600',
    textTransform: 'capitalize',
    color: 'white',
    background: '#13B9AC',
    width: '25rem',
    // marginLeft: '10%',
    '&:hover': {
      background: '#13B9AC',
      textDecoration: 'underline',
    },
  },
  backNextButtonWrapper: {
    marginTop: '25%',
    marginLeft: '12%',
  },
});

const BankLink = (props) => {
  const { authState } = useOktaAuth();
  const { accessToken } = authState;
  const buttonClasses = useStyles();
  const classes = customStyles();
  const history = useHistory();
  const userId = localStorage.getItem('user_id');
  const alert = useAlert();

  const [bankCreated, setBackCreated] = useState(false);

  const onSuccess = (publicToken, metadata) => {
    const HOST = process.env.REACT_APP_SERVER_HOST;

    console.log('public_token:', publicToken);
    console.log(metadata);

    axios
      .post(`${HOST}/plaid/token_exchange/${userId}`, {
        publicToken: publicToken,
      })
      .then((res) => {
        if (publicToken) {
          setBackCreated(true);
        }
      })
      .catch((err) => {
        setBackCreated(false);
      });
  };

  console.log(props.userInfo);

  const onSubmit = () => {
    const changes = { ...props.userInfo, onboarding_complete: true };
    console.log('on submit: ', props.userInfo);
    if (bankCreated === true) {
      props.updateUser(userId, changes, accessToken);
      setTimeout(() => history.push('/dashboard'), 1000);
    } else {
      alert.show('You did not connect your bank account!');
    }
  };

  return (
    <div className={classes.mainWrapper}>
      <div>
        <h1 className={classes.budgetHeader}>Budget</h1>
        <h2 className={classes.mainHeader}>Link Your Bank Accounts</h2>
        <p className={classes.sectionDescription}>
          Linking your bank accounts means no more manual data entry!
        </p>
        <div className={classes.securePrivateWrapper}>
          <img
            src={require('../../media/arrow-drodpdown.png')}
            alt="check mark"
            className={classes.checkmark}
          />

          <p className={classes.listHeading}> Secure</p>
          <p className={classes.subSectionDescription}>
            Your bank data transfers are <br /> encrypted end-to-end!
          </p>
        </div>
        <div className={classes.securePrivateWrapper}>
          <img
            src={require('../../media/arrow-drodpdown.png')}
            alt="check mark"
            className={classes.checkmark}
          />
          <p className={classes.listHeading}> Private</p>
          <p className={classes.subSectionDescription}>
            Your credentials will never be <br /> shared with Budget!
          </p>
        </div>
      </div>

      <div className={classes.plaidLinkWrapper}>
        <PlaidLink
          clientName="Budget Blocks"
          env="sandbox"
          product={['transactions']}
          publicKey="7b47db1cfa540573d15cea302e5988"
          onSuccess={onSuccess}
        >
          <Button className={classes.plainLinkButton} variant="contained">
            Connect a bank account
          </Button>
        </PlaidLink>
      </div>
      <div className={classes.backNextButtonWrapper}>
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
          onClick={onSubmit}
        >
          Next <KeyboardArrowRight />
        </Button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userInfo: state.users.userInfo,
  };
};

export default connect(mapStateToProps, { updateUser })(BankLink);
