import React, { useState, useEffect } from 'react';
import { TableHeads } from './Blocks_Components/TableHead';
import  DisplayBlocks  from "./Blocks_Components/DisplayBlocks";

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import { getTransactions } from '../redux/actions/PlaidActions';
import { connect } from 'react-redux';
import './table.css';
const useStyles = makeStyles({
	table: {
		minWidth: 649
	}
});

export function Blocks(props) {
	const classes = useStyles();
	const [filter, setFilter] = useState([]);
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

	var selected = shuffled.slice(0, 5);
	console.log(selected);
	return (
		<div>
			{filter ? (
				<div>
					<TableContainer className='table' component={Paper}>
						<Table className={classes.table} aria-label='simple table'>
							<TableHeads
								CellNames={[
									'Block',
									'Total Expenses',
									'Limit',
									''
								]}
								className='lightgrey'
							/>
							<DisplayBlocks arr={selected}/>
						</Table>
					</TableContainer>
					<button onClick={handleClick}>View All</button>
				</div>
			) : (
				<div>
					<TableContainer className='table' component={Paper}>
						<Table className={classes.table} aria-label='simple table'>
							<TableHeads
								CellNames={[
									'Block',
									'Total Expenses',
									'Limit',
									''
								]}
								className='lightgrey'
							/>
							<DisplayBlocks arr={props.blocks}/>
						</Table>
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
