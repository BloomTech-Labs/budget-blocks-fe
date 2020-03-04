import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
	selectCategories,
} from '../../redux/actions/ManualActions';
import { Back_Continue } from '../Modal_Components/Back_Continue';
import { TableHeads } from './TableHead';
import DisplayBlocks from './DisplayBlocks';
import './index.css';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';

import  BudgetGoal  from '../Modal_Components/BudgetGoalModal';

export function ManualBlocks(props) {
	// This components displays the table of blocks for the Onboarding process.
	// functions very similarly to LinkedBlocks
	// known bug: if the user does not edit a block's budget and presses continue, it will not appear on the dashboard because the value is still null
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
		categoryArr: state.plaidReducer.categories
	};
}

export default connect(mapStateToProps, { selectCategories })(ManualBlocks);
