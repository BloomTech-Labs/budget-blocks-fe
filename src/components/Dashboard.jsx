import React, { useEffect, useState } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

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
    localStorage.clear();
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
          <div style={{textAlign: "center"}}>
            {transaction &&
              transaction.map((data) => (
                <Card key={data.account_id}>
                  <CardContent>
                  <Typography style={{fontSize: "3rem"}}>{data.budget_blocks_category}</Typography>
                  <Typography style={{fontSize: "2rem"}}>{data.amount}</Typography>
                  </CardContent>
                </Card>
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
  };
};

export default connect(mapStateToProps, {
  fetchTransactions,
  userAction,
  notAuthenticated,
})(Dashboard);
