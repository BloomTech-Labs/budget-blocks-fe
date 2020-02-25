import React from 'react';
import BudgetGoal from './BudgetGoal';
import TotalExpenses from './TotalExpenses';
import ProgressBar from './ProgressBar';

import { connect } from 'react-redux';

import './index.css';

const TotalBudget = props => {
	const sumBudget =
		Math.round(
			100 *
				props.budget.reduce(function(a, b) {
					return a + b;
				}, 0)
		) / 100;

	const sumExpenses =
		Math.round(
			100 *
				props.expenses.reduce(function(a, b) {
					return a + b;
				}, 0)
		) / 100;
	const percent = ((sumExpenses / sumBudget) * 100).toFixed(2);
	return (
		<div className='budget-container'>
			<h5>Budget Summary</h5>
			<div className='budget-showcase'>
				<TotalExpenses />
				<BudgetGoal />
			</div>
			<div className='bar-showcase'>
				<ProgressBar done={percent} />
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
