import React, { useEffect } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { Button } from '@material-ui/core';
// import { transitions } from 'react-alert';

// SECTION Redux Imports
import { fetchTransactions } from '../redux/actions/dashboardAction';
import { userAction, notAuthenticated } from '../redux/actions/userAction';

const Dashboard = ({
  userInfo,
  transaction,
  fetchTransactions,
  userAction,
  notAuthenticated,
  location,
}) => {
  const { authState, authService } = useOktaAuth();

  const logout = async () => {
    authService.logout('/');
  };

  useEffect(() => {
    const { accessToken } = authState;

    if (!authState.isAuthenticated) {
      notAuthenticated();
    } else {
      authService.getUser().then((info) => {
        const oktaUserInfo = info;

        userAction(oktaUserInfo, accessToken);
      });
    }
  }, [authState, authService]);

  useEffect(() => {
    fetchTransactions();
  }, [location]);

  //FIXME Delete after testing
  console.log('ds transactions: ', transaction);

  return (
    <div>
      {userInfo && userInfo.onboarding_complete === false ? (
        <Redirect to="/onboarding" />
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
            {`Hi, ${userInfo && userInfo.name}. Welcome to the dashboard.`}
          </p>
          <p> USER INFO STATE: {userInfo && userInfo.email} </p>
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
          <div>
            {transaction &&
              transaction.map((data) => (
                <div key={transaction.indexOf(data)}>
                  <h3>Category: {data.budget_blocks_category}</h3>
                  <p>Value: {data.amount}</p>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    transaction: state.trans.transaction,
    isFetching: state.trans.isFetching,
    errors: state.trans.errors,
    userInfo: state.users.userInfo,
    onSuccess: state.trans.onSuccess,
  };
};

export default connect(mapStateToProps, {
  fetchTransactions,
  userAction,
  notAuthenticated,
})(Dashboard);
