import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import logo from '../media/images/Background.png';
import head from '../media/images/budget_blocks.png';
import { Link } from 'react-router-dom';
import './main.css';

import { logoutUser } from '../redux/actions/LogoutAction';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		background: 'red'
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	title: {
		flexGrow: 1
	}
}));

export function NavBar({navState,logoutUser}) {
	return (

		<div className='nav-bar'>
			<div className='nav-logo'>
				<img className='image' src={logo} />
				<img className='heading' src={head} />
			</div>
			<div className='nav-action'>
				{ (navState==="")?
				"":<Link onClick={logoutUser} to='/login'>
					Log Out
				</Link>

					
				}
			</div>
		</div>
	);
}

function mapStateToProps(state) {
	return {
		navState:state.loginReducer.navState,
		


	};
}

export default connect(mapStateToProps, { logoutUser })(NavBar);
