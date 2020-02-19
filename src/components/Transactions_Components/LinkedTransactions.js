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
		// <div className='trans-container'>
		// 	{filter ? (
		// 		<React.Fragment>
		// 			<div className='trans-top-content'>
		// 				<h3>Recent Transactions: </h3>
		// 				<button className='add-trans-button'>Add Transactions</button>
		// 			</div>
		// 			{selected.map(i => {
		// 				const category = i.name;
		// 				return (
		// 					<div className='trans-card' key={i.id}>
		// 						<div className='trans-info'>
		// 							<h5>{`Purchase Authorized from ${i.transactions[0].name} `}</h5>
		// 							<p>{i.transactions[0].payment.date}</p>
		// 							<p>Category: {category}</p>
		// 						</div>
		// 						<div className='trans-amount'>
		// 							<p
		// 								className={
		// 									i.transactions[0].amount < 0
		// 										? 'red bottom-content'
		// 										: 'green bottom-content'
		// 								}
		// 							>
		// 								$ <span></span>
		// 								{(Math.round(10 * i.transactions[0].amount) / 100).toFixed(
		// 									2
		// 								)}
		// 							</p>
		// 						</div>
		// 					</div>
		// 				);
		// 			})}
		// 			<button onClick={handleClick}>View all transactions</button>
		// 		</React.Fragment>
		// 	) : (
		// 		<React.Fragment>
		// 			<div className='trans-top-content'>
		// 				<h3>Recent Transactions: </h3>
		// 				<button className='add-trans-button'>Add Transactions</button>
		// 			</div>
		// 			{props.transactions.map(i => {
		// 				const category = i.name;
		// 				return i.transactions.map(i => (
		// 					<div className='trans-card' key={i.id}>
		// 						<div className='trans-info'>
		// 							<h5>{`Purchase Authorized from ${i.transactions[0].name} `}</h5>
		// 							<p>{i.transactions[0].payment.date}</p>
		// 							<p>Category: {category}</p>
		// 						</div>
		// 						<div className='trans-amount'>
		// 							<p
		// 								className={
		// 									i.transactions[0].amount < 0
		// 										? 'red bottom-content'
		// 										: 'green bottom-content'
		// 								}
		// 							>
		// 								$ <span></span>
		// 								{(Math.round(10 * i.transactions[0].amount) / 100).toFixed(
		// 									2
		// 								)}
		// 							</p>
		// 						</div>
		// 						<button onClick={handleClick}>View Less</button>
		// 					</div>
		// 				));
		// 			})}
		// 		</React.Fragment>
		// 	)}
		// </div>
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

