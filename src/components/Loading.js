import React from "react";
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

export const Loading = props => {
	// This component displays a loading animation if there is something loading in redux
	return (
		<div id='loading'>
			{props.plaidFetching || props.blockFetching || props.profileFetching ? (
				<Loader
					type='ThreeDots'
					color='#66aabc'
					height={50}
					width={50}
					timeout={10000} //3 secs
				/>
			) : ( <p></p> )}
		</div>
	);
};

function mapStateToProps(state) {
	return {
		plaidFetching: state.plaidReducer.isFetching,
		blockFetching: state.blockReducer.isFetching
	};
}

export default connect(mapStateToProps, {})(
	Loading
);