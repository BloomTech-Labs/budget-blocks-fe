import { useOktaAuth } from '@okta/okta-react';
import React, { useState, useEffect } from 'react';

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
    authService.login('/test');
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
        <h1>Welcome to Budget Blocks Login</h1>

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
            <button onClick={login}>Login</button>
            <button onClick={logout}>Logout</button>
          </div>
        )}
      </div>
    </div>
  );
};
export default Home;
