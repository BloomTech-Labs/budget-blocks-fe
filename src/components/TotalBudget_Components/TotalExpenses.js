import React from 'react';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';

const TotalExpenses = props => {
    
    const TotalExpenses = (
		Math.round(
			100 *
				props.expenses.reduce(function(a, b) {
					return a + b;
				}, 0)
		) / 100
	).toLocaleString('en-US', {
		style: 'currency',
		currency: 'USD'
    });
    
	return (
        <div className='budget-expenses'>
            <h4>Total Expenses</h4>
            <p>{TotalExpenses}</p>
        </div>
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
