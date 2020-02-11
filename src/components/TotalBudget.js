import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import { Progress, Container } from 'reactstrap';
import { blocksData } from '../redux/actions/userBlocks';
import { connect } from 'react-redux';
// npm install --save-dev @iconify/react @iconify/icons-fa
import { Icon, InlineIcon } from '@iconify/react';
import chevronCircleUp from '@iconify/icons-fa/chevron-circle-up';
import chevronCircleDown from '@iconify/icons-fa/chevron-circle-down';

import './table.css';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles({
	card: {
		minWidth: 275,
		background: 'lightgrey'
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)'
	},
	title: {
		fontSize: 14
	},
	pos: {
		marginBottom: 12
	}
});

const TotalBudget = props => {
	const classes = useStyles();
	const bull = <span className={classes.bullet}>•</span>;
	const [categories, setCategories] = useState([]);

	const P = styled.p`
		color: green;
	`;
	const Button = styled.button`
		background: lightgrey;
		border: lightgrey;
	`;
	console.log('total budget');
	console.log(
		props.expenses.reduce(function(a, b) {
			return a + b;
		}, 0)
	);
	return (
		<Card className={classes.card} variant='outlined'>
			<CardContent>
				<Typography variant='subtitle1' gutterBottom></Typography>
				<Grid container spacing={3}>
					<Grid item xs={12}>
						Total Budget
					</Grid>
					<Grid item xs={12}>
						<h3>
							$ <span></span>
							{Math.round(
								100 *
									props.budget.reduce(function(a, b) {
										return a + b;
									}, 0)
							) / 100}
						</h3>
					</Grid>

					<Grid item xs={12}>
						<Progress
							color='success'
							className='progress'
							value={
								(props.expenses.reduce(function(a, b) {
									return a + b;
								}, 0) /
									props.budget.reduce(function(a, b) {
										return a + b;
									}, 0)) *
								100
							}
						/>
					</Grid>
					<Grid item xs={6}>
						<p>Income</p>
						<p>+ $200.00</p>
						<Icon className='icons green' icon={chevronCircleUp} />
					</Grid>
					<Grid item xs={6}>
						<p>Expenses</p>
						<p>
							- $
							{Math.round(
								100 *
									props.expenses.reduce(function(a, b) {
										return a + b;
									}, 0)
							) / 100}
						</p>
						<Icon className='icons red' icon={chevronCircleDown} />
					</Grid>
				</Grid>
			</CardContent>
		</Card>
	);
};
function mapStateToProps(state) {
	return {
		budget: state.plaidReducer.categories.map(
			i => Math.round(100 * i.budget) / 100
		),
		expenses: state.plaidReducer.categories.map(
			i => Math.round(100 * i.total) / 100
		)
	};
}

export default connect(mapStateToProps)(TotalBudget);
