<<<<<<< HEAD
import React from 'react';
import { connect } from 'react-redux';
import logo from '../media/images/Background.png';
import head from '../media/images/budget_blocks.png';
import { Link } from 'react-router-dom';
import './main.css';

import { logoutUser } from '../redux/actions/LogoutAction';

export function NavBar({navState,logoutUser}) {
	// This component creates the Navbar at the top. has logout functionality and displays logo
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
=======
import React from "react";
import { connect } from "react-redux";
// import logo from "../media/image/Logo_113x83.svg";
// import head from '../media/images/budget_blocks.png';
import { Link } from "react-router-dom";
import "./main.css";

import { logoutUser } from "../redux/actions/LogoutAction";

export function NavBar({ navState, logoutUser }) {
  return (
    <div className="nav-bar">
      <div className="nav-logo">
        {/* <img className="image" src={logo} /> */}
        {/* <img className="heading" src={head} /> */}
      </div>
      <div className="nav-action">
        {navState === "" ? (
          ""
        ) : (
          <Link onClick={logoutUser} to="/login">
            Log Out
          </Link>
        )}
      </div>
    </div>
  );
>>>>>>> cf24e3b4c0b687d23bb5d29ee5e77e91084dc542
}

function mapStateToProps(state) {
  return {
    navState: state.loginReducer.navState
  };
}

export default connect(mapStateToProps, { logoutUser })(NavBar);
