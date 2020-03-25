import React from 'react';
import './index.css';

import Card from '@material-ui/core/Card';
import DeleteTranModal from './DeleteTranModal';

const DisplayTrans = ({ arr, classes }) => {
	// This component maps through the transactions array and displays them
	return (
		<div className='transactions'>
			{arr.map(i => {
				return (
					<Card className={classes.card} key={i.id}>
						<div className={classes.rightInfo}>
							<p>{`Purchase Authorized from ${i.name}`}</p>
							<p>{i.payment_date}</p>
							<p>Category: {i.category}</p>
						</div>
						<div className={classes.leftInfo}>
							<div>
								<DeleteTranModal transID={i.id} />
							</div>
							<div>
								<p
									id='trans-amount'
									className={
										i.amount < 0 ? 'red bottom-content' : 'green bottom-content'
									}
								>
									{(Math.round(10 * i.amount) / 100).toLocaleString('en-US', {
										style: 'currency',
										currency: 'USD'
									})}
								</p>
							</div>
						</div>
					</Card>
				);
			})}
		</div>
	);
};

export default DisplayTrans;
