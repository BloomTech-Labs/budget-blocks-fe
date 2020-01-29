import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
	return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
	createData(
		0,
		'Jan 20, 2020',
		'Walmart',
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

const useStyles = makeStyles(theme => ({
	seeMore: {
		marginTop: theme.spacing(3)
	}
}));

export default function Transactions() {
	const classes = useStyles();
	return (
		<React.Fragment>
			<h1>Recent Transactions</h1>
			<Table size='small'>
				<TableHead>
					<TableRow>
						<TableCell>Date</TableCell>
						<TableCell>Description</TableCell>
						<TableCell>Category</TableCell>
						<TableCell>Payment Method</TableCell>
						<TableCell align='right'>Amount</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map(row => (
						<TableRow key={row.id}>
							<TableCell>{row.date}</TableCell>
							<TableCell>{row.name}</TableCell>
							<TableCell>{row.shipTo}</TableCell>
							<TableCell>{row.paymentMethod}</TableCell>
							<TableCell align='right'>$ {row.amount}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
			<div className={classes.seeMore}>
				<Link color='primary' href='#' onClick={preventDefault}>
					See more orders
				</Link>
			</div>
		</React.Fragment>
	);
}
