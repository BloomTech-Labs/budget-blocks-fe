import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import UnlinkedBlocks from './Blocks_Components/UnlinkedBlocks';
import LinkedBlocks from './Blocks_Components/LinkedBlocks';
import Header from './Header';
import { connect } from 'react-redux';
import Balance from './Balance_Components/Balance';
import LinkedTransactions from './Transactions_Components/LinkedTransactions';
import UnlinkedTransactions from './Transactions_Components/UnlinkedTransactions';
import TotalBudget from './TotalBudget_Components/TotalBudget';
import { getUserInfo } from '../redux/actions/ProfileActions';
import { getTransactions } from '../redux/actions/PlaidActions';
import './dashboardStyle.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import '../App.css';

export const Dashboard = props => {
	useEffect(() => {
		props.getTransactions(props.userID);
		props.getUserInfo(props.userID);
	}, [props.LinkedAccount]);
	return (
		<div className='container'>
			<Grid container spacing={3}>
				<Grid item xs={12} sm={12} md={6} lg={8}>
					<div className='middle'>
						<Grid container>
							<Grid item xs={12} lg={12} sm={12}>
								<Header />
							</Grid>
						</Grid>
						{props.plaidFetching ||
						props.blockFetching ||
						props.profileFetching ? (
							<Loader
								type='ThreeDots'
								color='#66aabc'
								height={50}
								width={50}
								timeout={10000} //3 secs
							/>
						) : (
							<p></p>
						)}
						<Grid container>
							<Grid item xs={12} sm={12} md={12} lg={12}>
								{props.blocks.length > 0 ? (
									<LinkedBlocks />
								) : (
									<UnlinkedBlocks />
								)}
							</Grid>
						</Grid>
						<Grid container>
							<Grid item xs={12} sm={12} md={12} lg={12}>
								{props.blocks.length ? (
									<LinkedTransactions />
								) : (
									<UnlinkedTransactions />
								)}
							</Grid>
						</Grid>
					</div>
				</Grid>

				{/* right component */}
				<Grid item xs={12} sm={12} md={4} lg={4}>
					<Grid container>
						<Grid item sm={12} xs={12} md={12} lg={12}>
							<TotalBudget />
						</Grid>
					</Grid>
					<Grid container>
						<Grid item sm={8} xs={12}>
							<Balance />
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
};

function mapStateToProps(state) {
	return {
		userID: state.loginReducer.user.id,
		LinkedAccount: state.loginReducer.user.LinkedAccount,
		blocks: state.plaidReducer.categories,
		plaidFetching: state.plaidReducer.isFetching,
		blockFetching: state.blockReducer.isFetching,
		profileFetching: state.profileReducer.isFetching
	};
}

export default connect(mapStateToProps, { getTransactions, getUserInfo })(
	Dashboard
);
