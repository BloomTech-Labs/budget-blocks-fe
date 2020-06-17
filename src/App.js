import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';
import { Container } from 'semantic-ui-react';

// SECTION Components
import config from './components/okta/config';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Clickthrough from './components/Clickthrough';
import Totals from './components/Totals'

// SECTION Onboarding Components
import Onboarding from './components/onboarding/OnBoarding';
import Welcome from './components/onboarding/Welcome';
import AccountInfo from './components/onboarding/AccountInfo';
import BankLink from './components/onboarding/BankLink';
import BuildYourBudget from './components/onboarding/BuildYourBudget';
import BudgetView from './components/onboarding/BudgetView';
import Income from './components/onboarding/Income';
import AnalyzerDashboard from './components/onboarding/dashboard/AnalyzerDashboard'
import BudgetCategory from './components/onboarding/BudgetCatergory'

//SECTION CSS
import './App.css';

const App = () => (
  <Router>
    <Security {...config.oidc}>
      <Container>
        <SecureRoute path="/dashboard" component={Dashboard} />
        <SecureRoute path="/onboarding" exact component={Onboarding} />
        <Route path="/" exact component={Home} />
        <Route path="/clickthrough" component={Clickthrough} />
        <Route path="/implicit/callback" component={LoginCallback} />
        <Route path="/onboarding/welcome" component={Welcome} />
        <Route path="/onboarding/accountinfo" component={AccountInfo} />
        <Route path="/onboarding/banklink" exact component={BankLink} />
        <Route path="/onboarding/budget" exact component={BuildYourBudget} />
        <Route path="/onboarding/budgetview" exact component={BudgetView} />
        <Route path="/onboarding/income" exact component={Income} />
        <Route path="/onboarding/analyzerview" exact component={AnalyzerDashboard} />
        <Route path="/onboarding/budgetcategory" exact component={BudgetCategory} />
        <Route path="/totals" exact component={Totals} />
      </Container>
    </Security>
  </Router>
);

export default App;
