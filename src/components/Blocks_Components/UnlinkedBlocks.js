import React, { useEffect } from 'react';
import { TableHeads } from './TableHead';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Progress } from 'reactstrap';
import { getTransactions } from '../../redux/actions/PlaidActions';
import { connect } from 'react-redux';
import '../../index.css';

const useStyles = makeStyles({
	table: {
		minWidth: 649
	}
});

export function UnlinkedBlocks(props) {
	const classes = useStyles();
	useEffect(() => {
		props.getTransactions(props.userID);
	}, [props.LinkedAccount]);

	return (
		// <TableContainer component={Paper}>
		//   <Table className={classes.table} aria-label="simple table">
		//     <TableHeads CellNames={["Block", "Total Expenses", "Limit", "Action"]}/>
		//     <TableBody>

		//         <TableRow >
		//           <TableCell >title</TableCell>
		//           <TableCell >${0.00}</TableCell>
		//           <TableCell >${0.00}</TableCell>
		//           <TableCell >Edit</TableCell>
		//         </TableRow>

		//     </TableBody>
		//   </Table>
		// </TableContainer>

		<div className='blocks-container'>
			<h5 id='blocks-title'>Budget Blocks</h5>
			<table id='blocks-table'>
				<tr>
					<th>Blocks</th>
					<th>Total Expenses</th>
					<th>Budget Limit </th>
					<th></th>
				</tr>

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
