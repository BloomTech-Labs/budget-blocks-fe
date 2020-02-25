import React, { useEffect, useState } from 'react';
import { TableHeads } from './TableHead';
import { getTransactions } from '../../redux/actions/PlaidActions';
import { connect } from 'react-redux';
import '../../index.css';

import DisplayBlocks from './DisplayBlocks';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import { withStyles, makeStyles } from '@material-ui/core/styles';

import BudgetGoal from '../Modal_Components/BudgetGoalModal';

export function UnlinkedBlocks(props) {

	const useStyles = makeStyles({
		table: {
			minWidth: 700
		}
	});
	const classes = useStyles();
	const [filter, setFilter] = useState([]);
	const [open, setOpen] = useState(false);
	const handleClick = e => {
		setFilter(!filter);
	};
	const [values, setValues] = useState({
		userId: '',
		catId: '',
		budget: 0.0
	});
	const handleClickOpen = (id, budget) => {
		setValues({ ...values, userId: props.userID, catId: id, budget });

		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};
	const addMore = () => {

	}
	return (
		// <div className='blocks-container'>

		// 	<table id='blocks-table'>
		// 	  <TableHeads CellNames={["Block", "Total Expenses", "Limit", "Action"]}/>
		// 		<tr>
		// 			<td>Blocks Name</td>
		// 			<td>$ 0</td>
		// 			<td>$ 0</td>
		// 			<td>
		// 				<button>Edit</button>
		// 			</td>
		// 		</tr>
		// 	</table>
		// 	<button>View All Blocks</button>
		// </div>

		<div>
			<div id='table-showcase'>
				<TableContainer className='table' component={Paper}>
					<Table className='table-content'>
						
						<TableHeads
							CellNames={['Block', 'Total Expenses', 'Limit', '',""]}
							className='lightgrey'
						/>
						<DisplayBlocks
							arr={filter ? props.blocks.slice(0, 5) : props.blocks}
							handleClick={handleClickOpen}
							LinkedAccount={props.LinkedAccount}
						/>
					</Table>
					<BudgetGoal open={open} values={values} handleClose={handleClose} />
				</TableContainer>
				<div>
					<button className='blocks-button' onClick={handleClick}>
						{filter ? 'View All' : 'View Less'}
						</button>
						<button className='blocks-button' onClick={addMore}>
						Add more 
					</button>
				</div>
			</div>
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
