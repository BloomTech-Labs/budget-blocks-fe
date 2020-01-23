import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { applyMiddleware,createStore} from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { Provider } from "react-redux";
import {reducer} from "./reducers"

const store = createStore(reducer, applyMiddleware(thunk,logger));

ReactDOM.render(<Provider store = {store}><App /></Provider>, document.getElementById('root'));
