import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Security, SecureRoute, LoginCallback } from "@okta/okta-react";
import { Container } from "semantic-ui-react";
// SECTION Components

import config from './components/okta/config';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Onboarding from './components/onboarding/OnBoarding';
<<<<<<< HEAD
import BankLink from './components/onboarding/BankLink'
=======
import Income from './components/onboarding/Income';
import AccountInfo from './components/onboarding/AccountInfo';
//SECTION CSS
import './App.css';
>>>>>>> 3a957a083982b1c53e22881d1fc95d088ddcd55e

const App = () => (
  <Router>
    <Security {...config.oidc}>
<<<<<<< HEAD
      <Container text style={{ marginTop: '7em' }}>
        <SecureRoute path='/dashboard' component={Dashboard} />
        <SecureRoute path='/onboarding' exact component={Onboarding} />
        <SecureRoute path='/banklink' exact component={BankLink} />
        <Route path='/' exact component={Home} />
        <Route path='/implicit/callback' component={LoginCallback} />
=======
      <Container>
        <SecureRoute path="/dashboard" component={Dashboard} />
        <SecureRoute path="/onboarding" exact component={Onboarding} />
        <Route path="/income" exact component={Income} />
        <Route path="/" exact component={Home} />
        <Route path="/implicit/callback" component={LoginCallback} />
        <Route path="/accountinfo" component={AccountInfo} />
>>>>>>> 3a957a083982b1c53e22881d1fc95d088ddcd55e
      </Container>
    </Security>
  </Router>
);

export default App;
