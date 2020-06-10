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

    //FIXME Make this dynamic
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
