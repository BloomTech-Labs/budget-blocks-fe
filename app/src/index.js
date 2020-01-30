import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { Provider } from "react-redux";
import { loginReducer } from "./redux/reducers/LoginReducer";
import { plaidReducer } from "./redux/reducers/PlaidReducer";
import { registerReducer } from "./redux/reducers/RegisterReducer";
import { profileReducer } from "./redux/reducers/ProfileReducer";
import { BrowserRouter as Router } from "react-router-dom";

const store = createStore(combineReducers(loginReducer,plaidReducer,registerReducer,profileReducer), applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
      <Router>
    <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
