import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DisplayTrans from './DisplayTrans';

import { getTransactions } from '../../redux/actions/PlaidActions';
import { connect } from 'react-redux';
import './index.css';

import { getCategories } from '../../redux/actions/AddTransactionActions';

import AddTransactionModal, {
	AddTransaction
} from '../Modal_Components/AddTransaction';
const useStyles = makeStyles(theme => ({
	root: {
		'& > *': {
			margin: theme.spacing(1)
		}
	},
	container: {
		// display: 'grid',
		// gridTemplateColumns: 'repeat(12, 1fr)'
		display: 'flex',
		width: '100%'
	},
	topcontent: {
		display: 'flex'
	},
	card: {
		width: '100%',
		marginBottom: '1rem',
		height: '70%',
		background: '#f7f7f7',
		textAlign: 'left',
		paddingLeft: '10px',
		display: 'flex',

		fontSize: '12px'
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
	},
	rightInfo: {
		width: '85%'
	},
	leftInfo: {
		width: '15%',
		// paddingTop: '5%',
		alignItems: 'center'
	}
}));

const Transactions = props => {
	const classes = useStyles();
	const [filter, setFilter] = useState(true);
	const handleClick = e => {
		setFilter(!filter);
	};
	const [category, setCategory] = useState('');

	var selected = props.transactions.slice(0, 3);
	const transSelect = props.transactions.slice(0, 3);

	return (
		<div>
			{filter ? (
				<React.Fragment>
					<div className='trans-container'>
						<div className='trans-top-content'>
							<h3 className={classes.text}>Recent Transactions:</h3>
							<button className='add-trans-button' component={AddTransaction}>
								Add Transactions
							</button>
						</div>

						<div className='trans-item'>
							<DisplayTrans arr={selected} classes={classes} />
						</div>

						<button id='view-button' onClick={handleClick}>
							View all transactions
						</button>
					</div>
				</React.Fragment>
			) : (
				<React.Fragment>
					<div className='trans-container'>
						<div className='trans-top-content'>
							<h3 className={classes.text}>Recent Transactions:</h3>
							<button className='add-trans-button'>Add Transactions</button>
						</div>
						<div className='trans-item'>
							<DisplayTrans arr={props.transactions} classes={classes} />
						</div>
						<button id='view-button' onClick={handleClick}>
							View less
						</button>
					</div>
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
		// 							<p>
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
		// 							<p>
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
