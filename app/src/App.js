import React from 'react';

import './App.css';
import { Switch, Route } from 'react-router-dom';

import Transactions from '../src/components/transactions';

function App() {
	return (
		<div className='App'>
			<Transactions />
		</div>
	);
}

export default App;
