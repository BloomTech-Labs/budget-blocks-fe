import React, { useEffect, useState } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import CircularProgress from '@material-ui/core/CircularProgress'
import Button from '@material-ui/core/Button';

// SECTION Redux Imports
import { userAction, notAuthenticated } from '../redux/actions/userAction';

const LoadPage = ({
  userInfo,
  userAction,
  notAuthenticated
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
            {`Hi, ${userInfo && userInfo.name}. Welcome.`}
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
          </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userInfo: state.users.userInfo,
  };
};

export default connect(mapStateToProps, {
  userAction,
  notAuthenticated,
})(LoadPage);
