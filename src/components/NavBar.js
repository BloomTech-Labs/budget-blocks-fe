import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import logo from "../media/image/Logo_113x83.svg";
import head from '../media/images/budget_blocks.png';
import { Link } from "react-router-dom";
import "./main.css";
import { logoutUser } from "../redux/actions/LogoutAction";
import { Redirect} from "react-router-dom";
export function NavBar({ navState, logoutUser }) {
  


  const [initialClass, setClass] = useState(!!(sessionStorage.getItem('token')));

  const changeClass  = () => {
    sessionStorage.removeItem('token')
    setClass(false)
  };

  useEffect(() =>{
    sessionStorage.getItem('token')
  })
  return (
    
    <div className="nav-bar">
      <div className="nav-logo">
        <img className="image" src={logo} />
        <img className="heading" src={head} />
      </div>
      <div className="nav-action">
        {initialClass === true ? (
          <Link   onClick={changeClass} className={initialClass ? '' : 'hiddenClass'}>
          Log Out
        </Link>
        ) : (
          <Redirect to="/login" />
        )}
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    
    navState: state.loginReducer.navState
  };
}
export default connect(mapStateToProps, { logoutUser })(NavBar);
