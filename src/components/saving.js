import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

const useStyles = makeStyles({
	card: {
		minWidth: 275,
		background: '#FAFAFA',
		margin: '1%'
	},

	textContent: {
		display: 'flex',
		justifyContent: 'space-between',
		margin: '2%'
	}
});

function createData(id, date, description, amount) {
	return { id, date, description, amount };
}
const savingData = [
	createData(0, 'Jan 20, 2020', 'Vacation', 500.0),
	createData(1, 'Jan 21, 2020', 'Emergency Fund', 1000.0)
];

export default function Saving() {
	const classes = useStyles();
	const bull = <span className={classes.bullet}>•</span>;

	return (
		<Card className={classes.card} variant='outlined'>
			<div className={classes.textContent}>
				<h1>Saving Goals</h1>
				<Fab color='primary' aria-label='add'>
					<AddIcon />
				</Fab>
			</div>
			{savingData.map(row => (
				<div className={classes.content}>
					<div className={classes.contentItem}>
						<Typography component='p' variant='p'>
							{row.description}
						</Typography>
						<Typography variant='subtitle1' color='textSecondary'>
							{row.date}
						</Typography>
					</div>
				</div>
			))}

			<CardActions>
				<Button size='small'>View More</Button>
			</CardActions>
		</Card>
	);
}
