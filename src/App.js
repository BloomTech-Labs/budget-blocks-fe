import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';
import { Container } from 'semantic-ui-react';

// SECTION Components
import config from './components/okta/config';
import Home from './components/Home';
import LoadPage from './components/LoadPage';
import Clickthrough from './components/Clickthrough';

// SECTION Onboarding Components
import Onboarding from './components/onboarding/OnBoarding';
import Welcome from './components/onboarding/Welcome';
import AccountInfo from './components/onboarding/AccountInfo';
import BankLink from './components/onboarding/BankLink';
import BudgetPreview from './components/onboarding/BudgetPreview';
import BudgetView from './components/onboarding/BudgetView';
import Income from './components/onboarding/Income';
import AnalyzerDashboard from './components/onboarding/dashboard/AnalyzerDashboard'
import BudgetCategory from './components/onboarding/BudgetCatergory'

// SECTION Goals Components
import HomeGoal from './components/onboarding/goals/HouseGoal'
import FoodGoal from './components/onboarding/goals/FoodGoal'
import TransportGoal from './components/onboarding/goals/TransportGoal'
import PersonalGoal from './components/onboarding/goals/PersonalGoal'

//SECTION CSS
import './App.css';

const App = () => (
  <Router>
    <Security {...config.oidc}>
      <Container>
        <SecureRoute path="/loadingpage" component={LoadPage} />
        <SecureRoute path="/onboarding" exact component={Onboarding} />
        <Route exact path="/" exact component={Clickthrough} />
        <Route path="/implicit/callback" component={LoginCallback} />
        <SecureRoute path="/onboarding/welcome" component={Welcome} />
        <SecureRoute path="/onboarding/accountinfo" component={AccountInfo} />
        <SecureRoute path="/onboarding/banklink" exact component={BankLink} />
        <SecureRoute
          path="/onboarding/budgetpreview"
          exact
          component={BudgetPreview}
        />
        <SecureRoute path="/onboarding/budgetview" exact component={BudgetView} />
        <SecureRoute path="/onboarding/income" exact component={Income} />
        <SecureRoute path="/onboarding/budgetcategory" exact component={BudgetCategory} />
        <SecureRoute path="/goal/house" exact component={HomeGoal} />
        <SecureRoute path="/goal/food" exact component={FoodGoal} />
        <SecureRoute path="/goal/transport" exact component={TransportGoal} />
        <SecureRoute path="/goal/personal" exact component={PersonalGoal} />
        <SecureRoute exact path="/dashboard" exact component={AnalyzerDashboard} />
      </Container>
    </Security>
  </Router>
);

export default App;
