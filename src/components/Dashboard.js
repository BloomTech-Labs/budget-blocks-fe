import React, { useEffect } from 'react';
import LinkedBlocks from './Blocks_Components/LinkedBlocks';
import Header from './Header';
import { connect } from 'react-redux';
import LinkedTransactions from './Transactions_Components/LinkedTransactions';
import TotalBudget from './TotalBudget_Components/TotalBudget';
import { getTransactions } from '../redux/actions/PlaidActions';
import './dashboardStyle.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import '../App.css';
import './main.css';
import { getManualTrans } from "../redux/actions/ManualActions";
import Loading from "./Loading";

export const Dashboard = props => {
	useEffect(() => {
        props.LinkedAccount == true 
            ? props.getTransactions(props.userID) 
            : props.getManualTrans(props.userID,props.history);
	}, [props.LinkedAccount]);
	return (
		<div className='app-container'>
			<div className='app-nav'>
				<Header />
			</div>
			<Loading/>
			<div className='showcase'>
				<div className='right-showcase'>
						<TotalBudget />
				</div>
				<div className='left-showcase'>
						<LinkedBlocks /> 
						<LinkedTransactions />		
				</div>
			</div>
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

export default connect(mapStateToProps, { getTransactions, getManualTrans })(
	Dashboard
);
