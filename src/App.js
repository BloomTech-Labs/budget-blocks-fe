import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';
import { Container } from 'semantic-ui-react';

// SECTION Components
import config from './components/okta/config';
import Home from './components/Home';
import Dashboard from './components/Dashboard';

// SECTION Onboarding Components
import Onboarding from './components/onboarding/OnBoarding';
import Welcome from './components/onboarding/Welcome';
import AccountInfo from './components/onboarding/AccountInfo';
import BankLink from './components/onboarding/BankLink';
import BudgetPreview from './components/onboarding/BudgetPreview';
import BudgetView from './components/onboarding/BudgetView';
import Income from './components/onboarding/Income';

//SECTION CSS
import './App.css';

const App = () => (
  <Router>
    <Security {...config.oidc}>
      <Container>
        <SecureRoute path="/dashboard" component={Dashboard} />
        <SecureRoute path="/onboarding" exact component={Onboarding} />
        <Route path="/" exact component={Home} />
        <Route path="/implicit/callback" component={LoginCallback} />
        <Route path="/onboarding/welcome" component={Welcome} />
        <Route path="/onboarding/accountinfo" component={AccountInfo} />
        <Route path="/onboarding/banklink" exact component={BankLink} />
        <Route
          path="/onboarding/budgetpreview"
          exact
          component={BudgetPreview}
        />
        <Route path="/onboarding/budgetview" exact component={BudgetView} />
        <Route path="/onboarding/income" exact component={Income} />
      </Container>
    </Security>
  </Router>
);

export default App;
