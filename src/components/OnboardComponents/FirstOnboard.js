import React, { useEffect, useContext } from "react";
import { connect } from "react-redux";
import { addDefault } from "../../redux/actions/ManualActions";
import { loginUser } from "../../redux/actions/LoginActions";
import { renderSpinner, pushToDashboard, renderManualBtn } from "./views";
import "./onboard.css";
import Balance from "../../components/Balance_Components/Balance";
import CredentialsContext from "../../contexts/CredentialsContext";

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
  userId,
}) => {
  const { email, password } = useContext(CredentialsContext);
  useEffect(() => {
    loginUser(
      {
        email,
        password,
      },
      history
    );
  }, [history]);
  const handleClick = (e) => {
    e.preventDefault();
    addDefault(userId, history);
  };
  const waitingOnLink = localStorage.length !== 0 || isFetching;
  const haveLink = linkedAccount === true;
  const View = waitingOnLink ? (
    renderSpinner()
  ) : !isFetching && !linkedAccount && error === null ? (
    <div className="main">
      {/* <div className="manualBudgetButton">
        {" "}
        <button onClick={handleClick}>
          Manually create/add Transactions here
        </button>
      </div> */}
      <div className="manualBudgetButton">
        {" "}
        <button onClick={handleClick}>
          Manually set your budget goals here
        </button>
      </div>
      <Balance />
    </div>
  ) : haveLink ? (
    pushToDashboard(history)
  ) : (
    renderManualBtn({ handleClick, error })
  );
  return <div>{View}</div>;
};

function mapStateToProps(state) {
  return {
    isFetching: state.plaidReducer.isFetching,
    error: state.plaidReducer.error,
    linkedAccount: state.loginReducer.user.LinkedAccount,
    userId: state.loginReducer.user.id,
  };
}

export default connect(mapStateToProps, { addDefault, loginUser })(
  FirstOnboard
);
