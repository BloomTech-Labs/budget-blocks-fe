var cov_h81su2ju7 = function () {
  var path = "/Users/Cha/Desktop/Lambda/budget-blocks-fe/src/index.js";
  var hash = "f37d42591c4e2cd086c5cb372c5199ff4eb23b10";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/Cha/Desktop/Lambda/budget-blocks-fe/src/index.js",
    statementMap: {
      "0": {
        start: {
          line: 17,
          column: 14
        },
        end: {
          line: 17,
          column: 154
        }
      },
      "1": {
        start: {
          line: 18,
          column: 0
        },
        end: {
          line: 18,
          column: 81
        }
      },
      "2": {
        start: {
          line: 20,
          column: 0
        },
        end: {
          line: 27,
          column: 2
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {},
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "f37d42591c4e2cd086c5cb372c5199ff4eb23b10"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

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
const store = (cov_h81su2ju7.s[0]++, createStore(combineReducers({
  loginReducer,
  plaidReducer,
  registerReducer,
  blockReducer,
  addTransactionReducer
}), applyMiddleware(thunk, logger)));
cov_h81su2ju7.s[1]++;
Sentry.init({
  dsn: "https://d1c8f54ec01c4a3bb2697ec305242356@sentry.io/5172263"
});
cov_h81su2ju7.s[2]++;
ReactDOM.render(<Provider store={store}>
      <Router>
    <App />
    </Router>
  </Provider>, document.getElementById("root"));