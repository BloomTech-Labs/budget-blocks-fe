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
import {reducer as blockReducer} from "./redux/reducers/BlockReducers"
import {reducer as addTransactionReducer} from "./redux/reducers/AddTransactionReducer"
import { BrowserRouter as Router } from "react-router-dom";
import * as Sentry from '@sentry/browser';

const store = createStore(combineReducers({loginReducer,plaidReducer,registerReducer,blockReducer,addTransactionReducer}), applyMiddleware(thunk, logger));
Sentry.init({dsn: "https://d1c8f54ec01c4a3bb2697ec305242356@sentry.io/5172263"});

ReactDOM.render(
  <Provider store={store}>
      <Router>
    <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

