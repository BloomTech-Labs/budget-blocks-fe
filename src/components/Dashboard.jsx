import React, { useEffect, useState } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import axios from 'axios';
import { connect } from "react-redux"
import { Link, Redirect } from 'react-router-dom';
import { Button } from '@material-ui/core';

import { fetchTransactions } from '../Redux/actions/Dashboard'

const Dashboard = props => {
  const { authState, authService } = useOktaAuth();
  const [userInfo, setUserInfo] = useState({});

  const logout = async () => {
    authService.logout('/');
  };

  useEffect(() => {
    const { accessToken } = authState;

    if (!authState.isAuthenticated) {
      setUserInfo({});
    } else {
      authService.getUser().then((info) => {
        const oktaUserInfo = info;
        const SERVER_HOST = process.env.REACT_APP_SERVER_HOST;

        console.log('info', info);

        axios
          .post(`${SERVER_HOST}/api/users`, oktaUserInfo, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          })
          .then((res) => {
            setUserInfo(res.data.data);
            window.localStorage.setItem('user_id', res.data.data.id)
          })
          .catch((err) => err.message);
      });
    }
  }, [authState, authService]);

  useEffect(() => {
    props.fetchTransactions()
}, [])

  // useEffect(() => {
  //   const SERVER_HOST = process.env.REACT_APP_SERVER_HOST

  //   axios.get(`${SERVER_HOST}/plaid/userTransactions/${1}`)
  //     .then(res => {
  //       setTransactions({ transactions: res.data })
  //       console.log(res.data)
  //     })

  //   axios.post(`https://api.budgetblocks.org/transaction`, setTransactions, {
  //     headers: {
  //       AccessControlAllowOrigin: 'http://localhost:3000/dashboard'
  //     }
  //   })
  //   .then(res => {
  //     console.log(res)
  //   })
  //   .catch(err => {
  //     console.log(err)
  //   })
  // }, [])

  console.log("user", userInfo);

  return (
    <div>
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

const mapStateToProps = state => {
  return {
      transaction: state.trans.transaction,
      isFetching: state.trans.isFetching,
      errors: state.trans.errors
  }
}

export default connect(
  mapStateToProps,
  { fetchTransactions }
)(Dashboard);
