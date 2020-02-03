import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

// Generate Order Data
function createData(id, date, description, category, paymentMethod, amount) {
	return { id, date, description, category, paymentMethod, amount };
}

const useStyles = makeStyles(theme => ({
	root: {
		'& > *': {
			margin: theme.spacing(1)
		}
	},
	topcontent: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	card: {
		display: 'flex',
		border: 'black',
		flexDirection: 'row',
		margin: '1%',
		background: 'lightgrey',
		justifyContent: 'space-between'
	},
	details: {
		display: 'flex'
	},
	content: {
		flex: '1 0 auto',
		alignItems: 'flex-start',
		textAlign: 'left',
		paddingLeft: theme.spacing(5)
	},
	controls: {
		display: 'flex',
		alignItems: 'center',
		textAlign: 'right',
		alignContent: 'flex-end',
		paddingRight: theme.spacing(5)
	},
	text: {
		textAlign: 'left',
		paddingLeft: theme.spacing(5)
	}
}));

//dummy data
const rows = [
	createData(
		0,
		'Jan 20, 2020',
		'Puchase Authorized on 01/01 Storage Company For USER 6A7BC81524XY1524',
		'Grocery',
		'VISA ⠀•••• 1234',
		312.44
	),
	createData(
		1,
		'Jan 21, 2020',
		'LA fitness',
		'Utility',
		'VISA ⠀•••• 1234',
		866.99
	),
	createData(
		2,
		'Jan 22, 2020',
		'APPPLE.COM/BILL',
		'Entertainment',
		'VISA ⠀•••• 1234',
		100.81
	),
	createData(
		3,
		'Jan 23, 2020',
		'Target',
		'Shopping',
		'Visa ⠀•••• 1234',
		654.39
	),
	createData(
		4,
		'Jan 24, 2020',
		'Nordstrom #0123',
		'Shopping',
		'VISA ⠀•••• 1234',
		212.79
	)
];

function preventDefault(event) {
	event.preventDefault();
}

export default function Transactions() {
	const classes = useStyles();
	const theme = useTheme();

	return (
		<React.Fragment className='transaction'>
			<div className={classes.topcontent}>
				<b className={classes.text}>Recent Transactions:</b>
				<div className={classes.root}>
					<Button variant='contained'>
						<AddIcon />
						Add Transactions
					</Button>
					<Button variant='contained' color='primary'>
						<AddIcon />
						Add Income
					</Button>
				</div>
			</div>

			{rows.map(row => (
				<Card className={classes.card} key={row.id}>
					<div className={classes.details}>
						<CardContent className={classes.content}>
							<Typography component='p' variant='p'>
								{row.description}
							</Typography>
							<Typography variant='subtitle1' color='textSecondary'>
								{row.date}
							</Typography>
							<Typography variant='subtitle1' color='textSecondary'>
								Category: {row.category}
							</Typography>
						</CardContent>
					</div>
					<div className={classes.controls}>$ {row.amount}</div>
				</Card>
			))}
		</React.Fragment>
	);
}
