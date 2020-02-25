import React from 'react';
import BudgetGoal from './BudgetGoal';
import TotalExpenses from './TotalExpenses';

import './index.css';

const TotalBudget = () => {
	return (
		<div className='budget-container'>
			<h5>Budget Summary</h5>
			<div className='budget-showcase'>
				<TotalExpenses />
				<BudgetGoal />
			</div>
		</div>
	);
};

export default TotalBudget;
