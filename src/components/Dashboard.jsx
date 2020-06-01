import React, { useEffect, useState } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

// Components
import BankAccountsPage from './BankAccountsPage';

const Dashboard = () => {
  const { authState, authService } = useOktaAuth();
  const [userInfo, setUserInfo] = useState(null);

  const logout = async () => {
    authService.logout('/');
  };

  useEffect(() => {
    const { accessToken } = authState;

    if (!authState.isAuthenticated) {
      setUserInfo(null);
    } else {
      authService.getUser().then((info) => {
        const oktaUserInfo = info;
        console.log('info', info);
        axios
          .post(
            'https://budget-blocks-production-new.herokuapp.com/api/users',
            oktaUserInfo,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          )
          .then((res) => {
            setUserInfo(res.data.data);
          })
          .catch((err) => err.message);
      });
    }
  }, [authState, authService]);

  return (
    <div>
      {/* //NOTE RENDER ONBOARDING IF ACCESS TOKEN DOESN'T EXISTS */}
      {/* {userInfo && userInfo.token === undefined || null ? <OnBoarding /> : null} */}
      <h1> DASHBOARD </h1>
      <p>
        If you landed here, then you have successfully logged in with
        Okta!!
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
      <BankAccountsPage />
      <Link to='/onboarding'>
        <Button color='primary' variant='contained'>
          Onboarding
        </Button>
        <br />
        <br />
      </Link>
      <Button color='secondary' variant='contained' onClick={logout}>
        Logout
      </Button>
    </div>
  );
};

export default Dashboard;
