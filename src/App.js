import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';
import { Container } from 'semantic-ui-react';
// SECTION Components
import config from './components/okta/config';
import Home from './components/Home';
import Test from './components/Test';

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
