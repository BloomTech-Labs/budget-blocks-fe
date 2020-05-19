import { useOktaAuth } from '@okta/okta-react';
import React, { useState, useEffect } from 'react';
import { Button, Header } from 'semantic-ui-react';

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

  const resourceServerExamples = [
    {
      label: 'Node/Express Resource Server Example',
      url:
        'https://github.com/okta/samples-nodejs-express-4/tree/master/resource-server',
    },
    {
      label: 'Java/Spring MVC Resource Server Example',
      url:
        'https://github.com/okta/samples-java-spring-mvc/tree/master/resource-server',
    },
  ];

  if (authState.isPending) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>
        <Header as='h1'>PKCE Flow w/ Okta Hosted Login Page</Header>

        {authState.isAuthenticated && !userInfo && (
          <div>Loading user information...</div>
        )}
        {/* //NOTE When successfully logged in.. this displays */}
        {authState.isAuthenticated && userInfo && (
          <div>
            <p>
              Welcome back,
              {userInfo.name}!
            </p>
            <p>
              You have successfully authenticated against your Okta org,
              and have been redirected back to this application. You now
              have an ID token and access token in local storage. Visit the
              <a href='/profile'>My Profile</a>
              page to take a look inside the ID token.
            </p>
            <h3>Next Steps</h3>
            <p>
              Currently this application is a stand-alone front end
              application. At this point you can use the access token to
              authenticate yourself against resource servers that you
              control.
            </p>
            <p>
              This sample is designed to work with one of our resource
              server examples. To see access token authentication in
              action, please download one of these resource server
              examples:
            </p>
            <ul>
              {resourceServerExamples.map((example) => (
                <li key={example.url}>
                  <a href={example.url}>{example.label}</a>
                </li>
              ))}
            </ul>
            <p>
              Once you have downloaded and started the example resource
              server, you can visit the
              <a href='/messages'>My Messages</a>
              page to see the authentication process in action.
            </p>
          </div>
        )}
        {/* //NOTE This is what is displayed prior to logging in */}
        {/* //NOTE Potentially display the LOGIN button and home page related things */}
        {!authState.isAuthenticated && (
          <div>
            <p>
              If you&lsquo;re viewing this page then you have successfully
              started this React application.
            </p>
            <p>
              <span>This example shows you how to use the </span>
              <a href='https://github.com/okta/okta-oidc-js/tree/master/packages/okta-react'>
                Okta React Library
              </a>
              <span> to add the </span>
              <a href='https://developer.okta.com/docs/guides/implement-auth-code-pkce'>
                PKCE Flow
              </a>
              <span> to your application.</span>
            </p>
            <p>
              When you click the login button below, you will be redirected
              to the login page on your Okta org. After you authenticate,
              you will be returned to this application with an ID token and
              access token. These tokens will be stored in local storage
              and can be retrieved at a later time.
            </p>
            <Button id='login-button' primary onClick={login}>
              Login
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
export default Home;

// if (authState.isPending) {
//   return <div> Loading Authentication</div>;
// } else if (!authState.isAuthenticated) {
//   return (
//     <div className='home'>
//       {!initial ? (
//         <Container maxWidth='sm'>
//           <div
//             style={{
//               backgroundColor: '#ffffff',
//               height: '75vh',
//             }}
//           >
//             <img src={logo} className='App-logo' alt='logo' />
//             <img
//               src={budgetImg}
//               className='budget_img'
//               alt='budget_blocks'
//             />
//             <div className='buttons'>
//               <Link to='/register' className='links'>
//                 <Button variant='outlined' className='signin'>
//                   Register
//                 </Button>
//               </Link>
//               <Button
//                 variant='outlined'
//                 className='signin'
//                 onClick={login}
//               >
//                 Login
//               </Button>
//             </div>
//           </div>
//           <a
//             href='https://testflight.apple.com/join/pUS0UdsD'
//             target='_blank'
//           >
//             <div>
//               <IconButton size='medium'>
//                 <PhoneIphoneIcon />
//               </IconButton>
//               <br />
//               Get Budget Blocks for iPhone <br />
//               On TestFlight
//             </div>
//           </a>
//         </Container>
//       ) : (
//         <Redirect to='/dashboard' />
//       )}
//     </div>
//   );
// }

// SECTION Original Code
// return (
//   <div className='home'>
//     {!initial ? (
//       <Container maxWidth='sm'>
//         <div
//           style={{
//             backgroundColor: '#ffffff',
//             height: '75vh',
//           }}
//         >
//           <img src={logo} className='App-logo' alt='logo' />
//           <img
//             src={budgetImg}
//             className='budget_img'
//             alt='budget_blocks'
//           />
//           <div className='buttons'>
//             <Link to='/register' className='links'>
//               <Button variant='outlined' className='signin'>
//                 Register
//               </Button>
//             </Link>
//               <Button variant='outlined' className='signin'>
//                 Login
//               </Button>
//           </div>
//         </div>
//         <a
//           href='https://testflight.apple.com/join/pUS0UdsD'
//           target='_blank'
//         >
//           <div>
//             <IconButton size='medium'>
//               <PhoneIphoneIcon />
//             </IconButton>
//             <br />
//             Get Budget Blocks for iPhone <br />
//             On TestFlight
//           </div>
//         </a>
//       </Container>
//     ) : (
//       <Redirect to='/dashboard' />
//     )}
//   </div>
// );

///////////////////////////////////////////////////////////////////////////// old
// import React, { useEffect, useState } from 'react';
// import logo from '../media/image/Logo.svg';
// import budgetImg from '../media/image/budget_blocks.png';
// import Container from '@material-ui/core/Container';
// import Button from '@material-ui/core/Button';
// import { Link } from 'react-router-dom';
// import { Redirect } from 'react-router-dom';
// import IconButton from '@material-ui/core/IconButton';
// import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';

// //SECTION New Imports 5/19/20
// import { useOktaAuth } from '@okta/okta-react';
// import Login from './Form_Components/OktaLogin/Login';

// const Home = () => {
//   const [initial, setinitial] = useState(sessionStorage.getItem('token'));

//   //SECTION Okta Related
//   const { authService, authState } = useOktaAuth();
//   // const [userInfo, setUserInfo] = useState(null);

//   // useEffect(() => {
//   //   if (!authState.isAuthenticated)
//   //     authService.getUser().then((info) => {
//   //       // setUserInfo(info);
//   //     });
//   // }, [authState, authService]);

//   // Redirect to '/' after login
//   const login = async () => {
//     authService.login('/test');
//   };

//   // Redirect to '/' after logout
//   const logout = async () => {
//     authService.logout('/');
//   };

//   return (
//     <div className='home'>
//       <Container maxWidth='sm'>
//         <div
//           style={{
//             backgroundColor: '#ffffff',
//             height: '75vh',
//           }}
//         >
//           <img src={logo} className='App-logo' alt='logo' />
//           <img
//             src={budgetImg}
//             className='budget_img'
//             alt='budget_blocks'
//           />
//           <div className='buttons'>
//             <Link to='/register' className='links'>
//               <Button variant='outlined' className='signin'>
//                 Register
//               </Button>
//             </Link>
//             <Button variant='outlined' className='signin' onClick={login}>
//               Login
//             </Button>
//             {/* <Link to='/test'>Test</Link> */}
//           </div>
//         </div>
//         <a
//           href='https://testflight.apple.com/join/pUS0UdsD'
//           target='_blank'
//         >
//           <div>
//             <IconButton size='medium'>
//               <PhoneIphoneIcon />
//             </IconButton>
//             <br />
//             Get Budget Blocks for iPhone <br />
//             On TestFlight
//           </div>
//         </a>
//       </Container>
//     </div>
//   );
// };

// export default Home;
