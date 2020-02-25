import React, { useState } from 'react';
import { TableHeads } from './TableHead';
import DisplayBlocks from './DisplayBlocks';

import { getTransactions } from '../../redux/actions/PlaidActions';
import { connect } from 'react-redux';
// import '../table.css';
import '../../index.css';
import './index.css';

import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import { withStyles, makeStyles } from '@material-ui/core/styles';

import BudgetGoal from '../Modal_Components/BudgetGoalModal';

const useStyles = makeStyles({
	table: {
		minWidth: 700
	}
});
export function Blocks(props) {
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
	return (
		<div id='table-showcase'>
			<TableContainer className='table' component={Paper}>
				<Table className='table-content'>
					<TableHeads
						CellNames={['Block', 'Total Expenses', 'Limit', '']}
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
			</div>
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
