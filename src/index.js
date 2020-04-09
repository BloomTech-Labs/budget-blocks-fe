import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { Provider } from "react-redux";
import { reducer as loginReducer } from "./redux/reducers/LoginReducer";
import { reducer as plaidReducer } from "./redux/reducers/PlaidReducer";
import { reducer as registerReducer } from "./redux/reducers/RegisterReducer";
import { reducer as blockReducer } from "./redux/reducers/BlockReducers";
import { reducer as addTransactionReducer } from "./redux/reducers/AddTransactionReducer";
import { BrowserRouter as Router } from "react-router-dom";
import * as Sentry from '@sentry/browser';
import dotenv from 'dotenv'
import {initGA} from './components/google_analytics/index.js'

//dotenv.config()

(function initAnalytics(){
  initGA("UA-158581736-1"); // TODO: Hard-coding this for now, need to move it to .env later
  //initGA(process.env.REACT_APP_SECRET_KEY);
})();

const store = createStore(
  combineReducers({
    loginReducer,
    plaidReducer,
    registerReducer,
    blockReducer,
    addTransactionReducer
  }),
  applyMiddleware(thunk, logger)
);
Sentry.init({
  dsn: process.env.SENTRY_DSN
});

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
