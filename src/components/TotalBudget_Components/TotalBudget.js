import React from 'react';
import BudgetGoal from './BudgetGoal';
import TotalExpenses from './TotalExpenses';
import ProgressBar from './ProgressBar';

import { connect } from 'react-redux';

import './index.css';

const TotalBudget = props => {
	const down =
		Math.round(
			100 *
				props.budget.reduce(function(a, b) {
					return a + b;
				}, 0)
		) / 100;

	const up =
		Math.round(
			100 *
				props.expenses.reduce(function(a, b) {
					return a + b;
				}, 0)
		) / 100;
	const percent = 100;
	return (
		<div className='budget-container'>
			<h5>Budget Summary</h5>
			<div className='budget-showcase'>
				<TotalExpenses />
				<BudgetGoal />
			</div>
			<div className='bar-showcase'>
				<ProgressBar done={(up / down) * 100} />
			</div>
		</div>
	);
};

function mapStateToProps(state) {
	return {
		budget: state.plaidReducer.categories.map(
			i => Math.round(100 * i.budget) / 100
		),
		expenses: state.plaidReducer.categories.map(
			i => Math.round(100 * i.total) / 100
		)
	};
}
export default connect(mapStateToProps)(TotalBudget);
