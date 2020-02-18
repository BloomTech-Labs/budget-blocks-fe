import React, { useState } from 'react';
import { TableHeads } from './TableHead';
import DisplayBlocks from './DisplayBlocks';

import { getTransactions } from '../../redux/actions/PlaidActions';
import { connect } from 'react-redux';
import '../table.css';
import '../../index.css';

import BudgetGoal from '../Modal_Components/BudgetGoalModal';

export function Blocks(props) {
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
		setValues({ ...values, userId: localStorage.id, catId: id, budget });
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};
	return (
		// <div>
		// 	<TableContainer className='table' component={Paper}>
		// 		<Table className={classes.table} aria-label='simple table'>
		// 			<TableHeads
		// 				CellNames={['Block', 'Total Expenses', 'Limit', '']}
		// 				className='lightgrey'
		// 			/>
		// 			<DisplayBlocks
		// 				arr={filter ? props.blocks.slice(0, 5) : props.blocks}
		// 				handleClick={handleClickOpen}
		// 			/>
		// 		</Table>
		// 		<BudgetGoal open={open} values={values} handleClose={handleClose} />
		// 	</TableContainer>
		// 	<button onClick={handleClick}>{filter ? 'View All' : 'View Less'}</button>
		// </div>
		<div className='table-container'>
			<table id='table-showcase'>
				<tr>
					<TableHeads
						CellNames={['Block', 'Total Expenses', 'Limit', '']}
						className='lightgrey'
					/>
				</tr>
				<tr>
					<DisplayBlocks
						arr={filter ? props.blocks.slice(0, 5) : props.blocks}
						handleClick={handleClickOpen}
					/>
				</tr>
			</table>
		</div>
	);
}

function mapStateToProps(state) {
	return {
		userID: state.loginReducer.user.id,
		LinkedAccount: state.loginReducer.user.LinkedAccount,
		blocks: state.plaidReducer.categories.sort((a, b) => {
			return a.id - b.id;
		})
	};
}

export default connect(mapStateToProps, { getTransactions })(Blocks);
