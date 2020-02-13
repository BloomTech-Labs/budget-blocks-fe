import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { getTransactions } from '../redux/actions/PlaidActions';
import { connect } from 'react-redux';

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

function preventDefault(event) {
	event.preventDefault();
}

const Transactions = props => {
	const classes = useStyles();
	const theme = useTheme();

	let transactions = [];
	props.transactions.map(i => i.transactions.map(i => transactions.push(i)));
	console.log(transactions);
	transactions = transactions.sort(function(a, b) {
		return new Date(b.payment_date) - new Date(a.payment_date);
	});
	return (
		<React.Fragment>
			<div className={classes.topcontent}>
				<h2 className={classes.text}>Recent Transactions:</h2>
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

			{transactions.map(i => (
				<Card className={classes.card} key={i.id}>
					<div className={classes.details}>
						<CardContent className={classes.content}>
							<Typography component='p' variant='body1'>
								{i.name}
							</Typography>
							<Typography variant='subtitle1' color='textSecondary'>
								{i.payment_date}
							</Typography>
						</CardContent>
					</div>
					<div className={classes.controls}>
						${Math.round(10 * i.amount) / 100}
					</div>
				</Card>
			))}
		</React.Fragment>
	);
};
function mapStateToProps(state) {
	return {
		userID: state.loginReducer.user.id,
		LinkedAccount: state.loginReducer.user.LinkedAccount,
		transactions: state.plaidReducer.categories.filter(
			i => i.transactions.length > 0
		)
	};
}

export default connect(mapStateToProps, { getTransactions })(Transactions);

// export const Tran = props => { }
//const mapStateToProps = state =>{return{ }}
//export default connect(mapStateToProps, {}(trans  ))
