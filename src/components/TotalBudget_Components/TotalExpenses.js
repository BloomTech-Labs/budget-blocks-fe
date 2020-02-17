import React from 'react';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';

const TotalExpenses = props => {

	return (
		<Grid item xs={6}>
			<h2 className="totalExpenses">
				Total<br></br>Expenses
			</h2>
			<h3>
				$<span> </span>
				{Math.round(
					100 *
					props.expenses.reduce(function(a, b) {
						return a + b;
					}, 0)
				) / 100}
			</h3>
		</Grid>
	);
};
function mapStateToProps(state) {
	return {
		expenses: state.plaidReducer.categories.map(
			i => Math.round(100 * i.total) / 100
		)
	};
}

export default connect(mapStateToProps)(TotalExpenses);
