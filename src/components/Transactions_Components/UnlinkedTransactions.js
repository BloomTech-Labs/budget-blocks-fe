import React from 'react';
import { getTransactions } from '../../redux/actions/PlaidActions';
import { connect } from 'react-redux';

import './index.css';

function preventDefault(event) {
	event.preventDefault();
}

const Transactions = props => {
	let transactions = [];
	props.transactions.map(i => i.transactions.map(i => transactions.push(i)));
	console.log(transactions);
	transactions = transactions.sort(function(a, b) {
		return new Date(b.payment_date) - new Date(a.payment_date);
	});
	return (
		<React.Fragment>
			<div className='trans-container'>
				<div className='trans-top-content'>
					<h3>Recent Transactions: </h3>
					<button className='add-trans-button'>Add Transactions</button>
				</div>
				<p>Nothing yet</p>
			</div>
		</React.Fragment>
	);
};
function mapStateToProps(state) {
	return {
		userID: state.loginReducer.user.id,
		LinkedAccount: state.loginReducer.user.LinkedAccount,
		transactions: state.plaidReducer.categories.filter(
			i => i.transactions.length > 0
		)
	};
}

export default connect(mapStateToProps, { getTransactions })(Transactions);
