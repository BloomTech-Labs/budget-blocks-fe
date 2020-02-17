import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DisplayTrans from "./DisplayTrans";

import { getTransactions } from '../../redux/actions/PlaidActions';
import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
	root: {
		'& > *': {
			margin: theme.spacing(1)
		}
	},
	topcontent: {
		display: 'flex'
	},
	card: {
		width: '100%',
		marginBottom: '1rem',
		height: '70%',
		background: '#F0F0F0'
	},
	details: {
		display: 'flex'
	},
	content: {
		flex: '1 0 auto',
		alignItems: 'flex-start',
		textAlign: 'left'
	},
	controls: {
		display: 'flex',
		alignItems: 'center',
		textAlign: 'right',
		alignContent: 'flex-end'
	},
	text: {
		textAlign: 'left',
		paddingLeft: theme.spacing(5)
	}
}));


const Transactions = props => {
	const classes = useStyles();
	const [filter, setFilter] = useState(true);
	const handleClick = e => {
		setFilter(!filter);
	};

	var selected = props.transactions.slice(0, 3);
	
	return (
		<div>
			{filter ? (
				<React.Fragment>
					<div className={classes.topcontent}>
						<h3 className={classes.text}>Recent Transactions:</h3>
					</div>
					<DisplayTrans arr={selected} classes={classes}/>
					
					<button onClick={handleClick}>View All</button>
				</React.Fragment>
			) : (
				<React.Fragment>
					<div className={classes.topcontent}>
						<h3 className={classes.text}>Recent Transactions:</h3>
					</div>
					<DisplayTrans arr={props.transactions} classes={classes}/>
					
					<button onClick={handleClick}>View Less</button>
				</React.Fragment>
			)}
		</div>
	);
};
function mapStateToProps(state) {
	return {
		userID: state.loginReducer.user.id,
		LinkedAccount: state.loginReducer.user.LinkedAccount,
		transactions: state.plaidReducer.transactions
	};
}

export default connect(mapStateToProps, { getTransactions })(Transactions);

