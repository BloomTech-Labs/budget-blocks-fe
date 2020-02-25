import React, { useEffect } from 'react';
import UnlinkedBlocks from './Blocks_Components/UnlinkedBlocks';
import LinkedBlocks from './Blocks_Components/LinkedBlocks';
import Header from './Header';
import { connect } from 'react-redux';
import LinkedTransactions from './Transactions_Components/LinkedTransactions';
import UnlinkedTransactions from './Transactions_Components/UnlinkedTransactions';
import TotalBudget from './TotalBudget_Components/TotalBudget';
import { getTransactions } from '../redux/actions/PlaidActions';
import './dashboardStyle.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import '../App.css';
import './main.css';
import { getManualTrans } from "../redux/actions/ManualActions";

export const Dashboard = props => {
	useEffect(() => {
        console.log(props.LinkedAccount)
        if (props.LinkedAccount == true){
            console.log("Linked Account!")
            props.getTransactions(props.userID);
        } else {
            console.log("Manual Account!")
            props.getManualTrans(props.userID);
        }
	}, []);
	return (
		<div className='app-container'>
			<div className='app-nav'>
				<Header />
			</div>

			<div id='loading'>
				{props.plaidFetching || props.blockFetching || props.profileFetching ? (
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
			</div>
			<div className='showcase'>
				<div className='right-showcase'>
					<div>
						<TotalBudget />
					</div>
				</div>
				<div className='left-showcase'>
					<div>
						{props.blocks.length > 0 ? <LinkedBlocks /> : <UnlinkedBlocks />}
					</div>
					<div>
						{props.blocks.length ? (
							<LinkedTransactions />
						) : (
							<UnlinkedTransactions />
						)}
							
					</div>
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
