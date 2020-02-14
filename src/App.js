import React from 'react';
import './App.css';
import Home from './components/home';
import Login from './components/login';
import Register from './components/register';
import Profile from './components/CreateProfile';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import BudgetGoal from './components/PresetModal';
import Navbar from './components/NavBar';
import ReactGA from 'react-ga';

function initializeReactGA() {
	ReactGA.initialize('UA-158581736-1');
	ReactGA.pageview('/homepage');
}

function App() {
	initializeReactGA();
	return (
		<div>
			<Navbar />
			<div className='App'>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/login' component={Login} />
					<Route path='/register' component={Register} />
					<PrivateRoute path='/profile' component={Profile} />
					<PrivateRoute path='/dashboard' component={Dashboard} />
					<Route path='/budgetModal' component={BudgetGoal} />
				</Switch>
			</div>
		</div>
	);
}

export default App;
