import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useOktaAuth } from '@okta/okta-react';

const customStyles = makeStyles((theme) => ({
    topBar: {
      display: 'flex',
      justifyContent : 'space-between',
    },
    topBarRight: {
        display: 'flex',
        justifyContent : 'flex-end',
        paddingTop: '5%',
        paddingRight: '5%',
        width:'200px',
      },
    topBarLearn: {
        
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '12px',
        lineHeight: '18px',
        color: '#13B9AC',
    },
    topBarContact: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '12px',
        lineHeight: '18px',
        color: '#13B9AC',
        paddingLeft: '5%',
    },
    CTA: {
        width: '339px',
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        fontSize: '24px',
        display: 'flex',
        alignItems: 'center',
        color: '#13B9AC',
        paddingTop: '5%',
        paddingLeft: '5%',
    },
    Description: {
        width: '339px',
        height: '156px',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '16px',
        lineHeight: '24px',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '5%',
        color: 'rgba(33, 36, 44, 0.8)',
    },
    ImgHolder: {
        width: '293px',
        height: '137px',
        border: '5px solid #13B9AC',
        marginLeft: '41px',
        marginTop: '5%',
    },
    LoginContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '4%',
    },
    Login: {
        
        background: '#13B9AC',
        borderRadius: '3px',
        color:'white',
        width: '273px',
        height: '39px',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '15px',
        lineHeight: '18px',  
        textAlign: 'center',
    },
    CustomSpan: {
        paddingLeft:'5px',
        color:'#13B9AC',
        '&:hover': {
            cursor:'pointer',
         },
        
    },
    CustomP: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '12px',
        lineHeight: '18px',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        color: '#21242C',
    },

  }));



const Clickthrough = () => {
  const { authState, authService } = useOktaAuth();
  const [userInfo, setUserInfo] = useState(null);
  const classes = customStyles();

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
  const signup = async () => {
    authService.login('/onboarding/welcome');
  };

  const login = async () => {
    authService.login('/dashboard');
  };

  if (authState.isPending) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className={classes.topBar}>
        <h1>Budget Blocks logo</h1>
        <div className={classes.topBarRight}>
            <div className={classes.topBarLearn}>Learn more</div>
            <div className={classes.topBarContact}>Contact us</div>
        </div>
      </div>
      <p className={classes.ImgHolder}>Image placeholder</p>
      <h2 className={classes.CTA}>Financial freedom in a snap with Budget Blocks.</h2>
      <p className={classes.Description}>Automatically link your bank accounts and organize your spending into four basic spending blocks. 
      Check your cash flow and spending habits with a simple dashboard. We put financial freedom at your fingertips.</p>
      <div className={classes.LoginContainer}>
        <Button className={classes.Login} onClick={signup}>Create your budget!</Button>
      </div>
      
      <div className={classes.LoginContainer}> 
          <p className={classes.CustomP}>Already have an account? <span className={classes.CustomSpan} onClick={login}>Sign in</span></p>
      </div>
    </div>
  );
};
export default Clickthrough;
