import React from 'react';
import './index.css';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';

const DisplayTrans = ({ arr, classes }) => {
	return (
		<div className='transactions'>
			{arr.map(i => {
				const category = i.name;
				return (
					<Card className={classes.card} key={i.id}>
						<Grid container spacing={1}>
							<Grid item xs={12} sm={12} md={6} lg={8}>
								<p className='cardheader'>
									{`Purchase Authorized from ${i.name}`}
								</p>
								<p>{i.payment_date}</p>
								<p>Category: {category}</p>
							</Grid>
						</Grid>
						<Grid container spacing={1}>
							<Grid item xs={12} sm={12} md={4} lg={4}>
								<p
									id='trans-amount'
									className={
										i.amount < 0 ? 'red bottom-content' : 'green bottom-content'
									}
								>
									${(Math.round(10 * i.amount) / 100).toFixed(2)}
								</p>
							</Grid>
						</Grid>
					</Card>
				);
			})}
		</div>

		// <div className='trans-card'>
		// 	{arr.map(i => {
		// 		const category = i.name;
		// 		return (
		// 			<div>
		// 				<div id='trans-info' key={i.id}>
		// 					<p>{`Purchase Authorized from ${i.name}`}</p>
		// 					<p>{i.payment_date}</p>
		// 					<p>Category: {category}</p>
		// 				</div>
		// 				<div id='trans-amount'>
		// 					<h5>${(Math.round(10 * i.amount) / 100).toFixed(2)}</h5>
		// 				</div>
		// 			</div>
		// 		);
		// 	})}
		// </div>
	);
};

export default DisplayTrans;
