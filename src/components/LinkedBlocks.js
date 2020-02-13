import React, { useState, useEffect } from 'react';
import { TableHeads } from './Blocks_Components/TableHead';
import DisplayBlocks from './Blocks_Components/DisplayBlocks';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import { getTransactions } from '../redux/actions/PlaidActions';
import { connect } from 'react-redux';
import './table.css';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import BudgetGoal from '../components/BudgetGoalModal';

const useStyles = makeStyles({
	table: {
		minWidth: 649
	}
});

export function Blocks(props) {
	const classes = useStyles();
	const [filter, setFilter] = useState([]);
	const [open, setOpen] = useState(false);

	useEffect(() => {
		props.getTransactions(props.userID);
	}, [props.LinkedAccount]);
	const handleClick = e => {
		setFilter(!filter);
	};

	// [0,10,20,30,...,490]
	var shuffled = props.blocks.sort(function() {
		return 0.5 - Math.random();
	});

	const [values, setValues] = useState({
		userId: '',
		catId: ''
	});
	useEffect(() => {}, []);
	var selected = shuffled.slice(0, 5);
	const handleClickOpen = id => {
		setValues({ ...values, userId: localStorage.id, catId: id });
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};
	return (
		<div>
			{filter ? (
				<div>
					<TableContainer className='table' component={Paper}>
						<Table className={classes.table} aria-label='simple table'>
							<TableHeads
								CellNames={['Block', 'Total Expenses', 'Limit', '']}
								className='lightgrey'
							/>

							<TableBody>
								{selected.map(i => (
									<TableRow key={i.id}>
										<TableCell>{i.name}</TableCell>
										<TableCell>
											${i.total === null ? 0 : (Math.round(100 * i.total) / 100).toFixed(2)}
										</TableCell>
										<TableCell>
											$
											{i.budget === null ? 0 : (Math.round(100 * i.budget) / 100).toFixed(2)}
										</TableCell>
										<TableCell onClick={() => handleClickOpen(i.id)}>
											Edit
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
						<BudgetGoal open={open} values={values} handleClose={handleClose} />
					</TableContainer>
					<button onClick={handleClick}>View All</button>
				</div>
			) : (
				<div>
					<TableContainer className='table' component={Paper}>
						<Table className={classes.table} aria-label='simple table'>
							<TableHeads
								CellNames={['Block', 'Total Expenses', 'Limit', '']}
								className='lightgrey'
							/>

							<TableBody>
								{props.blocks.map(i => (
									<TableRow key={i.id}>
										<TableCell>{i.name}</TableCell>
										<TableCell>
											${i.total === null ? 0 : (Math.round(100 * i.total) / 100).toFixed(2)}
										</TableCell>
										<TableCell>
											$
											{i.budget === null ? 0 : (Math.round(100 * i.budget) / 100).toFixed(2)}
										</TableCell>
										<TableCell onClick={() => handleClickOpen(i.id)}>
											Edit
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
						<BudgetGoal open={open} values={values} handleClose={handleClose} />
					</TableContainer>
					<button onClick={handleClick}>View Less</button>
				</div>
			)}
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

export default connect(mapStateToProps, { getTransactions })(Blocks);
