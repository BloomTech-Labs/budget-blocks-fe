import React from 'react';
import Grid from '@material-ui/core/Grid';
import BudgetGoal from "./BudgetGoal";
import TotalExpenses from "./TotalExpenses";

import '../table.css';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
	card: {

		minWidth: 350,

		background: '#F0F0F0'
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

const TotalBudget = () => {
	const classes = useStyles();
	return (
		<Card className={classes.card}>
			<CardContent>
				<Typography variant='subtitle1' gutterBottom></Typography>
				<Grid container spacing={3}>
					<TotalExpenses/>
					<BudgetGoal/>
				</Grid>
			</CardContent>
		</Card>
	);
};

export default TotalBudget;
