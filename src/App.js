import React from 'react';
import './App.css';
import Home from './components/home';
import Login from './components/Form_Components/Login/Login';
import Register from './components/Form_Components/Register/Register';
import Profile from './components/Form_Components/Create_Profile/CreateProfile';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import AddTransaction from './components/Modal_Components/AddTransaction';
import Navbar from './components/NavBar';
import ReactGA from 'react-ga';
import SelectCategories from './components/Form_Components/Select_Categories/SelectCategories';
import FirstOnboard from './components/OnboardComponents/FirstOnboard';
import  ManualBlocks from './components/Blocks_Components/ManualBlocks';

// function initializeReactGA() {
// 	ReactGA.initialize('UA-158581736-1');
// 	ReactGA.pageview(window.location.pathname + window.location.search);
// }

function App() {
	// initializeReactGA();

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
					{/* <Route path='/budgetModal' component={BudgetGoal} /> */}
					<Route path='/onBoard/select' component={SelectCategories} />
					<Route path='/trans' component={AddTransaction} />
					<Route path='/onBoard/1' component={FirstOnboard} />
					<Route path='/manual' component={ManualBlocks} />
				</Switch>
			</div>
		</div>
	);
}

export default App;
