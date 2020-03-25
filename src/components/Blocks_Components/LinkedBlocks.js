import React, { useState } from 'react';
import { TableHeads } from './TableHead';
import DisplayBlocks from './DisplayBlocks';

import { getTransactions } from '../../redux/actions/PlaidActions';
import { connect } from 'react-redux';
import '../../index.css';
import './index.css';

import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import AddManualBlocks from "../AddManualBlocks"
import BudgetGoal from '../Modal_Components/BudgetGoalModal';

export function Blocks(props) {
	// This component displays the blocks table. 
	// filter determines the amount of blocks that are displayed. (True = 5 blocks, false = all blocks)
	// handleClick toggles the filter
	// open is used to display the edit block modal
	// handleClickOpen is used to populate the edit block modal with the data from the selected block (passed down to DiplayBlocks component)
	// values is an object to populate the modal (passed down to the edit block modal)
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
	return (
		<div id='table-showcase'>
			<TableContainer className='table' component={Paper}>
				<Table className='table-content'>
					<TableHeads
						CellNames={['Block', 'Total Expenses', 'Limit',""]}
						className='lightgrey'
					/>
					<DisplayBlocks
						arr={filter ? props.blocks.slice(0, 5) : props.blocks}
						handleClick={handleClickOpen}
					/>
				</Table>
				<BudgetGoal open={open} values={values} handleClose={handleClose} />
			</TableContainer>
			<div>
				<button className='blocks-button' onClick={handleClick}>
					{filter ? 'View All' : 'View Less'}
					</button>	
					<AddManualBlocks/>
			</div>
		</div>
	);
}

function mapStateToProps(state) {
	return {
		userID: state.loginReducer.user.id,
		blocks: state.plaidReducer.categories.sort((a, b) => {
			return a.id - b.id;
		})
	};
}

export default connect(mapStateToProps, { getTransactions })(Blocks);
