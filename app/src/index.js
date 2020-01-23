import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { applyMiddleware,createStore} from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { Provider } from "react-redux";
import {reducer} from "./reducers"


ReactDOM.render(<App />, document.getElementById('root'));
