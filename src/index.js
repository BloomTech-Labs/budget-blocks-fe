import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import App from './App';
import './index.css';
import dotenv from 'dotenv';
// SECTION Redux Reducers
import { blocksReducer } from './redux/reducers/BlockReducer.v2';
import { expenseReducer } from './redux/reducers/ExpenseReducer';
import { reducer as loginReducer } from './redux/reducers/LoginReducer';
import { reducer as plaidReducer } from './redux/reducers/PlaidReducer';
import { reducer as registerReducer } from './redux/reducers/RegisterReducer';
import { reducer as blockReducer } from './redux/reducers/BlockReducers';
import { reducer as addTransactionReducer } from './redux/reducers/AddTransactionReducer';

dotenv.config();

const store = createStore(
  combineReducers({
    loginReducer,
    plaidReducer,
    registerReducer,
    blockReducer,
    addTransactionReducer,
    expenses: expenseReducer,
    blocks: blocksReducer,
  }),
  applyMiddleware(thunk, logger)
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
