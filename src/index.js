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
import { reducer as profileReducer } from "./redux/reducers/ProfileReducer";
import {reducer as blockReducer} from "./redux/reducers/BlockReducers"
import {reducer as addTransactionReducer} from "./redux/reducers/AddTransactionReducer"
import { BrowserRouter as Router } from "react-router-dom";

const store = createStore(combineReducers({loginReducer,plaidReducer,registerReducer,profileReducer,blockReducer,addTransactionReducer}), applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
      <Router>
    <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

