import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';
import dotenv from 'dotenv';

dotenv.config();

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
