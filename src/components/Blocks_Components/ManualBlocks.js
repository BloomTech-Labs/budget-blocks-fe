import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
	selectCategories,
} from '../../redux/actions/ManualActions';
import { Back_Continue } from '../Modal_Components/Back_Continue';
import { TableHeads } from './TableHead';
import DisplayBlocks from './DisplayBlocks';
import './index.css';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';

import  BudgetGoal  from '../Modal_Components/BudgetGoalModal';

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
	const [open, setOpen] = useState(false);
	const [values, setValues] = useState({
		userId: '',
		catId: '',
		budget: 0.0
	});
	console.log(props);

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
		<div>
			<div className='man-block-container'>
				<div className='man-block-header'>
					<h1>Create Your Budget Blocks</h1>
					<p>Assign the value you want in each selected category.</p>
				</div>
				<TableContainer className='table' component={Paper}>
					<Table className='table-content'>
						
						<TableHeads
							CellNames={['Block', 'Total Expenses', 'Limit', '',""]}
							className='lightgrey'
						/>

						<DisplayBlocks
							arr={props.categoryArr}
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
				</div>
				<div>
					{/* <Back_Continue BackClick={props.handleClose} ContClick={submit} /> */}
					<Back_Continue 
					BackClick={()=>props.history.push("/onBoard/select")}
					ContClick={()=>props.history.push("/dashboard")}
					/>
				</div>
			</div>
		</div>
	);
}

function mapStateToProps(state) {
	return {
		userID: state.loginReducer.user.id,
		LinkedAccount: state.loginReducer.user.LinkedAccount,
		// blocks: state.plaidReducer.categories.sort((a, b) => {
		// 	return a.id - b.id;
		// })
		categoryArr: state.plaidReducer.categories
		// categoryArr: state.plaidReducer.categories.sort((a, b) => {
		// 	return a.id - b.id;
		// })
	};
}

// export default connect(mapStateToProps, { getTransactions })(ManualBlocks);

export default connect(mapStateToProps, { selectCategories })(ManualBlocks);
