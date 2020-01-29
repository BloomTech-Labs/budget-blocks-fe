import React from 'react';
import NavBar from '../src/components/navbar';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import CenteredTabs from '../src/components/navbar';
import Transactions from '../src/components/transactions';

function App() {
	return (
		<div className='App'>
			<CenteredTabs />
			<Transactions />
		</div>
	);
}

export default App;
