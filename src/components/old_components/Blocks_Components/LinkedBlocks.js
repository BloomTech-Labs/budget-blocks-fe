import React, { useState, useEffect } from 'react';
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
import BudgetGoalModal from '../Modal_Components/BudgetGoalModal';

import PropTypes from 'prop-types'

/**
 * Blocks (Modal)
 * (called from '../Dashboard.js)
 * Displays the a user's blocks for editing
 * @param {Object} props 
 */
export function Blocks(props) {
	
	useEffect(()=> console.log('linkedBLocksProps', props), [props])
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
		setValues({ ...values, userId: props.userID, catId: id, budget});
		setOpen(true)
	};

	const handleClose = () => {
		setOpen(false);
	};
	return (
		<div id='table-showcase'>
			<TableContainer className='table' component={Paper}>
				<Table className='table-content'>
					<TableHeads
						CellNames={['Block', 'Total Expenses', 'Limit', ""]}
						className='lightgrey'
					/>
					<DisplayBlocks
						arr={filter ? props.blocks.slice(0, 5) : props.blocks}
						handleClick={handleClickOpen}
					/>
				</Table>
				{open ? <BudgetGoalModal open={open} {...values} handleClose={handleClose} /> : null}
			</TableContainer>
			<div>
				<button className='blocks-button' onClick={handleClick}>
					{filter ? 'View All' : 'View Less'}
				</button>
				<AddManualBlocks />
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

Blocks.propTypes = {
	blocks: PropTypes.array,
	getTransactions: PropTypes.func,
	userID: PropTypes.string
}

export default connect(mapStateToProps, { getTransactions })(Blocks);
