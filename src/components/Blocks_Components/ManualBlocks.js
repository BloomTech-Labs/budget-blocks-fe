import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getTransactions } from '../../redux/actions/PlaidActions';
import { selectCategories } from '../../redux/actions/ManualActions';
import { Back_Continue } from '../Modal_Components/Back_Continue';
import { TableHeads } from './TableHead';
import DisplayBlocks from './DisplayBlocks';
import './index.css';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { BudgetGoal } from '../Modal_Components/BudgetGoalModal';

const useStyles = makeStyles(theme => ({
	table: {
		minWidth: 650,
		width: '100%'
	},
	root: {
		'& > *': {
			margin: theme.spacing(1),
			width: 200
		}
	}
}));
export function ManualBlocks(props) {
	const classes = useStyles();
	const [open, setOpen] = useState(false);
	const [values, setValues] = useState({
		userId: '',
		catId: '',
		budget: 0.0
	});

	const handleClose = () => {
		setOpen(false);
	};
	const [filter, setFilter] = useState([]);
	const handleClick = e => {
		setFilter(!filter);
	};
	const handleClickOpen = (id, budget) => {
		setValues({ ...values, userId: props.userID, catId: id, budget });

		setOpen(true);
	};

	return (
		// <div className='man-blocks-container'>
		// 	<div className='man-blocks-top-content'>
		// 		<h1>Budget Goal</h1>
		// 	</div>
		// 	<div className='man-blocks-showcase'>
		// 		<p>Assign the value you want in each selected category</p>
		// 		<TableContainer component={Paper}>
		// 			<Table className={classes.table} aria-label='simple table'>
		// 				<TableHead>
		// 					<TableRow>
		// 						<TableCell>Blocks</TableCell>
		// 						<TableCell align='left' sizeSmall>
		// 							Limit
		// 						</TableCell>
		// 						<TableCell align='left' sizeSmall>
		// 							add
		// 						</TableCell>
		// 					</TableRow>
		// 				</TableHead>
		// 				<TableBody>
		// 					{/* map the blocks */}
		// 					<TableCell>{props.blocks}</TableCell>
		// 					<TableCell>blocks name</TableCell>
		// 					<TableCell>$0</TableCell>
		// 				</TableBody>
		// 			</Table>
		// 			<BudgetGoal open={open} values={values} handleClose={handleClose} />
		// 		</TableContainer>
		// 		<div className='total-amount'>
		// 			<h2>Total Budget Goal: </h2>
		// 		</div>
		// 		<div>
		// 			<Back_Continue />
		// 		</div>
		// 	</div>
		// </div>

		<div>
			<div className='man-block-container'>
				<div className='man-block-header'>
					<h1>Create Your Budget Blocks</h1>
					<p>Assign the value you want in each selected category.</p>
				</div>
				<TableContainer className='table' component={Paper}>
					<Table className='table-content'>
						<TableHeads
							CellNames={['Block', 'Total Expenses', 'Limit', '']}
							className='lightgrey'
						/>
						{/* <DisplayBlocks
							arr={filter ? props.blocks.slice(0, 5) : props.blocks}
							handleClick={handleClickOpen}
						/> */}
					</Table>
					<BudgetGoal open={open} values={values} handleClose={handleClose} />
				</TableContainer>
				<div>
					<button className='blocks-button' onClick={handleClick}>
						{filter ? 'View All' : 'View Less'}
					</button>
				</div>
				<div>
					{/* <Back_Continue BackClick={props.handleClose} ContClick={submit} /> */}
					<Back_Continue />
				</div>
			</div>
		</div>
	);
}

function mapStateToProps(state) {
	return {
		userID: state.loginReducer.user.id,
		LinkedAccount: state.loginReducer.user.LinkedAccount
		// blocks: state.plaidReducer.categories.sort((a, b) => {
		// 	return a.id - b.id;
		// })
	};
}

export default connect(mapStateToProps, { getTransactions })(ManualBlocks);
