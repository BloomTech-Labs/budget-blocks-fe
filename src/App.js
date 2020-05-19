import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';
import { Container } from 'semantic-ui-react';
import config from './components/Form_Components/OktaLogin/config';

import Test from './components/test';
import Home from './components/home';

const App = () => (
  <Router>
    <Security {...config.oidc}>
      <Container text style={{ marginTop: '7em' }}>
        <SecureRoute path='/test' component={Test} />
        <Route path='/' exact component={Home} />
        <Route path='/implicit/callback' component={LoginCallback} />
      </Container>
    </Security>
  </Router>
);

export default App;

////////////////////////////////////////////////////////////////////////// OLD
// import React from 'react';
// import { Route, useHistory } from 'react-router-dom';
// import Home from './components/home';
// import Register from './components/Form_Components/Register/Register';
// import Dashboard from './components/Dashboard';
// import Navbar from './components/NavBar';
// import SelectCategories from './components/Form_Components/Select_Categories/SelectCategories';
// import FirstOnboard from './components/OnboardComponents/FirstOnboard';
// import ManualBlocks from './components/Blocks_Components/ManualBlocks';
// import './App.css';

// //SECTION Component Imports 5/18/20
// import Login from './components/Form_Components/OktaLogin/Login';
// import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';
// // import OktaConfig from './components/Form_Components/OktaLogin/OktaConfig';
// import Test from '../src/components/test';

// const App = () => {
//   const history = useHistory();

//   const customAuthHandler = () => {
//     // FIXME This is not pushing to login page when a unauthorized user attempts to access a SecureRoute. It instead pushes to '/'
//     history.push('/login');
//   };

//   const config = {
//     issuer: 'https://dev-985629.okta.com/oauth2/default',
//     redirectUri: 'http://localhost:3000/implicit/callback',
//     clientId: '0oac54xygvhDyr4eg4x6',
//     pkce: true,
//   };

//   return (
//     <div className='App'>
//       <Security {...config}>
//         <Navbar />
//         <Route exact path='/' component={Home} />
//         <Route exact path='/test' component={Test} />
//         <Route path='/implicit/callback' component={LoginCallback} />
//         <Route path='/login' component={Login} />
//         <Route path='/register' component={Register} />
//         <Route path='/onBoard/1' component={FirstOnboard} />
//         <SecureRoute path='/dashboard' component={Dashboard} />
//         <SecureRoute path='/manual' component={ManualBlocks} />
//         <SecureRoute path='/onBoard/select' component={SelectCategories} />
//       </Security>
//     </div>
//   );
// };
