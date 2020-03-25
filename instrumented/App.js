var cov_16tqakb4t6 = function () {
  var path = "/Users/Cha/Desktop/Lambda/budget-blocks-fe/src/App.js";
  var hash = "d01e026cf00d8f845f334c99677f5dc2d16d2ef8";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/Cha/Desktop/Lambda/budget-blocks-fe/src/App.js",
    statementMap: {
      "0": {
        start: {
          line: 16,
          column: 1
        },
        end: {
          line: 32,
          column: 3
        }
      }
    },
    fnMap: {
      "0": {
        name: "App",
        decl: {
          start: {
            line: 14,
            column: 9
          },
          end: {
            line: 14,
            column: 12
          }
        },
        loc: {
          start: {
            line: 14,
            column: 15
          },
          end: {
            line: 33,
            column: 1
          }
        },
        line: 14
      }
    },
    branchMap: {},
    s: {
      "0": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "43e27e138ebf9cfc5966b082cf9a028302ed4184",
    hash: "d01e026cf00d8f845f334c99677f5dc2d16d2ef8"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  return coverage[path] = coverageData;
}();

import React from 'react';
import './App.css';
import Home from './components/home';
import Login from './components/Form_Components/Login/Login';
import Register from './components/Form_Components/Register/Register';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import Navbar from './components/NavBar';
import SelectCategories from './components/Form_Components/Select_Categories/SelectCategories';
import FirstOnboard from './components/OnboardComponents/FirstOnboard';
import ManualBlocks from './components/Blocks_Components/ManualBlocks';

function App() {
  cov_16tqakb4t6.f[0]++;
  cov_16tqakb4t6.s[0]++;
  return <div>
			<Navbar />
			return <button>Break the world</button>;
			<div className='App'>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/login' component={Login} />
					<Route path='/register' component={Register} />
					<PrivateRoute path='/dashboard' component={Dashboard} />
					<Route path='/onBoard/select' component={SelectCategories} />
					<Route path='/onBoard/1' component={FirstOnboard} />
					<Route path='/manual' component={ManualBlocks} />
				</Switch>
			</div>
		</div>;
}

export default App;