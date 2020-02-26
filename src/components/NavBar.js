import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import logo from '../media/images/Background.png';
import head from '../media/images/budget_blocks.png';
// import './table.css';
import Grid from '@material-ui/core/Grid';
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
	console.log("I am navState", {navState})
	const classes = useStyles();
	return (
		// <div className="navbar">

		//    <Grid container spacing={3}>

		//       <Grid item={8}><div className="images-container">
		//    <img className="image" src={logo}/> <img className="heading" src={head}/>
		//    </div>
		//    </Grid>
		//    <Grid item={3}><div className="left"><Link onClick={logoutUser} to="/login">Log Out</Link></div></Grid>
		//    </Grid>
		// </div>

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
