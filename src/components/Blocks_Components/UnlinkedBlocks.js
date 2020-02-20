import React, { useEffect } from 'react';
import { TableHeads } from './TableHead';
import { getTransactions } from '../../redux/actions/PlaidActions';
import { connect } from 'react-redux';
import '../../index.css';

export function UnlinkedBlocks(props) {
	useEffect(() => {
		props.getTransactions(props.userID);
	}, [props.LinkedAccount]);

	return (

		<div className='blocks-container'>
			<h5 id='blocks-title'>Budget Blocks</h5>
			<table id='blocks-table'>
			  <TableHeads CellNames={["Block", "Total Expenses", "Limit", "Action"]}/>
				<tr>
					<td>Blocks Name</td>
					<td>$ 0</td>
					<td>$ 0</td>
					<td>
						<button>Edit</button>
					</td>
				</tr>
			</table>
			<button>View All Blocks</button>
		</div>
	);
}

function mapStateToProps(state) {
	return {
		userID: state.loginReducer.user.id,
		LinkedAccount: state.loginReducer.user.LinkedAccount,
		blocks: state.plaidReducer.categories
	};
}

export default connect(mapStateToProps, { getTransactions })(UnlinkedBlocks);
