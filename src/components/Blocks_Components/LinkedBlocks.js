import React, { useState, useEffect } from 'react';
import { TableHeads } from './TableHead';
import DisplayBlocks from './DisplayBlocks';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import { getTransactions } from '../../redux/actions/PlaidActions';
import { connect } from 'react-redux';
import '../table.css';

import BudgetGoal from '../Modal_Components/BudgetGoalModal';

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
	var shuffled = props.blocks.sort(function(a,b) {
		return a-b;
	});


	const [values,setValues]=useState({
		userId:"",
		catId:"",
		budget:0.00
	})
	useEffect(()=>{
	},[])
	var selected = shuffled.slice(0, 5);
	const handleClickOpen = (id, budget) => {
		setValues({...values,userId:localStorage.id, catId:id, budget});

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

							<DisplayBlocks arr={selected} handleClick={handleClickOpen}/>


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

							<DisplayBlocks arr={props.blocks} handleClick={handleClickOpen}/>

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
