import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import logo from "../media/image/Logo_113x83.svg";
import head from '../media/images/budget_blocks.png';
import { Link } from "react-router-dom";
import "./main.css";
import { logoutUser } from "../redux/actions/LogoutAction";
import { Redirect} from "react-router-dom";
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Avatar from '@material-ui/core/Avatar';


export function NavBar({ navState, logoutUser }) {

  const [anchorEl, setAnchorEl] = useState(null);

  const removeSessionStorage  = () => {
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('navState')
    sessionStorage.removeItem('userID')
    sessionStorage.removeItem('LinkedAccount')
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    
    <div className="nav-bar">
      <div className="nav-logo">
        <img className="image" src={logo} />
        <img className="heading" src={head} />
      </div>
      {sessionStorage.getItem('token')  ? (
        <div className="nav-action">
          <div className="dropdown-menu">
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
              <Avatar alt="User Name" src="/static/images/avatar/1.jpg" />
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Accounts</MenuItem>
              <MenuItem onClick={handleClose}>Settings</MenuItem>
              <MenuItem onClick={handleClose}>Share</MenuItem>

              {/* The logout button doesnt talk to Redux, it works locally */}
              <MenuItem onClick={handleClose}>
                <Link onClick={removeSessionStorage} >
                  Log Out
                </Link>
              </MenuItem>
            </Menu>
          </div>
        </div>
      ) : (
        <Redirect to="/" />
      )}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    
    navState: state.loginReducer.navState
  };
}
export default connect(mapStateToProps, { logoutUser })(NavBar);