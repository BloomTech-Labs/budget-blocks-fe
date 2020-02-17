import React from 'react';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import '../table.css';

const BudgetGoal = props => {
	return (
					<Grid item xs={6}>
						<h2>
							Budget
							<br /> Goal
						</h2>
						<h3>
							$<span> </span>
							{Math.round(
								100 *
									props.budget.reduce(function(a, b) {
										return a + b;
									}, 0)
							) / 100}
						</h3>
					</Grid>
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
