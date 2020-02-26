import React from 'react';
import { connect } from 'react-redux';

const BudgetGoal = props => {
	const BudgetGoal = (
		Math.round(
			100 *
				props.budget.reduce(function(a, b) {
					return a + b;
				}, 0)
		) / 100
	).toLocaleString('en-US', {
		style: 'currency',
		currency: 'USD'
	});
	return (
		<div className='budget-goal'>
			<h4>Budget Goal</h4>
			<p>{BudgetGoal}</p>
		</div>
	);
};
function mapStateToProps(state) {
	return {
		budget: state.plaidReducer.categories.map(
			i => Math.round(100 * i.budget) / 100
		)
	};
}

export default connect(mapStateToProps)(BudgetGoal);
