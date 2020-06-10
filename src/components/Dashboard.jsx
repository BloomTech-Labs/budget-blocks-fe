import React, { useEffect } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { Button } from '@material-ui/core';

// SECTION Redux Imports
import { fetchTransactions } from '../redux/actions/dashboardAction';
import { userAction, notAuthenticated } from '../redux/actions/userAction';

const Dashboard = (props) => {
  const { authState, authService } = useOktaAuth();
  const [userData, setUserData] = useState([]);

  const logout = async () => {
    authService.logout('/');
  };

  useEffect(() => {
    const { accessToken } = authState;

    if (!authState.isAuthenticated) {
      props.notAuthenticated();
    } else {
      authService.getUser().then((info) => {
        const oktaUserInfo = info;

        props.userAction(oktaUserInfo, accessToken);
      });
    }
  }, [authState, authService]);

  useEffect(() => {
    props.fetchTransactions();
  }, []);

  const plaid_transaction = props.transaction;

  console.log("transaction", props.transaction)
  
  useEffect(() => {
<<<<<<< HEAD
    axios.post(`https://api.budgetblocks.org/transaction`, plaid_transaction)
    .then(res => {
      console.log("response", res)
    })
    .catch(err => {
      console.log("error", err)
    })
  }, [])
=======
    axios
      .post(`https://api.budgetblocks.org/transaction`, plaid_transaction)
      .then((res) => {
        console.log('response', res);
      })
      .catch((err) => {
        console.log('error', err);
      });
  });
>>>>>>> 42f4cfe766b2474742ddb9bb0b15b0404172e7bc

  return (
    <div>
      {props.userInfo && props.userInfo.onboarding_complete === false ? (
        <Redirect to="/onboarding" />
<<<<<<< HEAD
      ) : null}
      <h1> DASHBOARD </h1>
      <p>
        If you landed here, then you have successfully logged in with Okta!!
      </p>
      <p
        style={{
          color: 'blue',
          fontSize: '32px',
        }}
      >
        Message:
        {`Hi, ${
          props.userInfo && props.userInfo.name
        }. Welcome to the dashboard.`}
      </p>
      <p> USER INFO STATE: {props.userInfo && props.userInfo.email} </p>
      <Link to="/onboarding">
        <Button color="primary" variant="contained">
          Onboarding
        </Button>
        <br />
        <br />
      </Link>
      <Button color="secondary" variant="contained" onClick={logout}>
        Logout
      </Button>
      {/* <div>
        {userData.transactions.map((data) => (
          <div>
            <h3>{data.budget_blocks_category}</h3>
          </div>
        ))}
      </div> */}
=======
      ) : (
        <div>
          <h1> DASHBOARD </h1>
          <p>
            If you landed here, then you have successfully logged in with Okta!!
          </p>
          <p
            style={{
              color: 'blue',
              fontSize: '32px',
            }}
          >
            Message:
            {`Hi, ${
              props.userInfo && props.userInfo.name
            }. Welcome to the dashboard.`}
          </p>
          <p> USER INFO STATE: {props.userInfo && props.userInfo.email} </p>
          <Link to="/onboarding">
            <Button color="primary" variant="contained">
              Onboarding
            </Button>
            <br />
            <br />
          </Link>
          <Button color="secondary" variant="contained" onClick={logout}>
            Logout
          </Button>
        </div>
      )}
>>>>>>> 42f4cfe766b2474742ddb9bb0b15b0404172e7bc
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    transaction: state.trans.transaction,
    isFetching: state.trans.isFetching,
    errors: state.trans.errors,
    userInfo: state.users.userInfo,
  };
};

export default connect(mapStateToProps, {
  fetchTransactions,
  userAction,
  notAuthenticated,
})(Dashboard);
