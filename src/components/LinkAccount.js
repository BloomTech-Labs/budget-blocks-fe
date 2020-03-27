import React from "react";
import "./linkAccountStyle.css";
import PlaidLink from "react-plaid-link";
import { connect } from "react-redux";
import { sendLinkToken } from "../redux/actions/PlaidActions";
import "../index.css";
import environmentUrls from "../dispatch";

const LinkAccount = props => {
  // This component creates the button that brings up the modal for the user to enter banking information to connect via plaid
  function handleOnSuccess(token, metadata) {
    props.sendLinkToken(token, props.user.id);
  }
  function handleOnExit() {
    console.log("Plaid Component has exited");
  }

  return (
    <div className="plaid-container">
      <div className="LinkAccount">
        <PlaidLink
          clientName="Budget Blocks"
          env="sandbox"
          product={["auth", "transactions", "identity"]}
          publicKey={process.env.REACT_APP_PUBLIC_KEY}
          onExit={handleOnExit}
          onSuccess={handleOnSuccess}
          webhook={`${environmentUrls.base_url}/plaid/webhook`}
          className="plaidButton"
        >
          Connect Bank Account
        </PlaidLink>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    error: state.plaidReducer.error,
    user: state.loginReducer.user
  };
}

export default connect(mapStateToProps, { sendLinkToken })(LinkAccount);
