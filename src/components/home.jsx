import { useOktaAuth } from '@okta/okta-react';
import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';

const Home = () => {
  const { authState, authService } = useOktaAuth();
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    if (!authState.isAuthenticated) {
      // When user isn't authenticated, forget any user info
      setUserInfo(null);
    } else {
      authService.getUser().then((info) => {
        setUserInfo(info);
      });
    }
  }, [authState, authService]); // Update if authState changes

  // NOTE Change this to wherever we want the user to be redirected to after login
  const login = async () => {
    authService.login('/dashboard');
  };

  const logout = async () => {
    authService.logout('/');
  };

  if (authState.isPending) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>
        <h1>Welcome to Budget Blocks Home Page</h1>

        {authState.isAuthenticated && !userInfo && (
          <div>Loading user information...</div>
        )}
        {/* //NOTE When successfully logged in.. this displays */}
        {authState.isAuthenticated && userInfo && (
          <div>
            <p></p>
          </div>
        )}
        {/* //NOTE This is what is displayed prior to logging in */}
        {/* //NOTE Potentially display the LOGIN button and home page related things */}
        {!authState.isAuthenticated && (
          <div>
            <Button color='primary' variant='contained' onClick={login}>
              Login
            </Button>
            <br />
            <br />
            <Button color='secondary' variant='contained' onClick={logout}>
              Logout
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
export default Home;
