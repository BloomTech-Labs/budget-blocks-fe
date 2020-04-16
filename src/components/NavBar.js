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

  const removeSessionStorage  = () => {
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('navState')
    sessionStorage.removeItem('userID')
    sessionStorage.removeItem('LinkedAccount')
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
        {initialClass  ? (
          <Link   onClick={removeSessionStorage} >
          Log Out
        </Link>
        ) : (
          <Redirect to="/" />
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
