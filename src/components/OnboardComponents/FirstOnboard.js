import React, { useEffect } from "react";
import { connect } from "react-redux";
import { addDefault } from "../../redux/actions/ManualActions";
import { loginUser } from "../../redux/actions/LoginActions";
import { renderSpinner, pushToDashboard, renderManualBtn } from "./views";
import "./onboard.css";

/**
 * FirstOnboard
 *
 * after logging in & prior to the dashboard;
 * a virtual "waiting room" for the end-user.
 *
 * @param {Object} history React component props.history
 * @param {Boolean} isFetching are we waiting for a reply?
 * @param {String} error contains inforation about error when applicable
 * @param {Object} linkedAccount returned by Plaid-API after logging in
 * @param {Object} userId current user Id
 */
const FirstOnboard = ({
  history,
  isFetching,
  error,
  linkedAccount,
  userId
}) => {
  useEffect(() => {
    loginUser(
      {
        email: localStorage.getItem("email"),
        password: localStorage.getItem("password")
      },
      history
    );
  }, [history]);
  const handleClick = e => {
    e.preventDefault();
    addDefault(userId, history);
  };
  const waitingOnLink = localStorage.length !== 0 || isFetching;
  const haveLink = linkedAccount === true;
  const View = waitingOnLink
    ? renderSpinner()
    : haveLink
    ? pushToDashboard(history)
    : renderManualBtn({ handleClick, error });
  return <div>{View}</div>;
};

function mapStateToProps(state) {
  return {
    isFetching: state.plaidReducer.isFetching,
    error: state.plaidReducer.error,
    linkedAccount: state.loginReducer.user.LinkedAccount,
    userId: state.loginReducer.user.id
  };
}

export default connect(mapStateToProps, { addDefault, loginUser })(
  FirstOnboard
);
