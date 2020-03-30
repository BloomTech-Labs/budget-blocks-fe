import React from "react";
import { connect } from "react-redux";
import LinkAccount from "../LinkAccount";
import plaidImg from "../../media/image/PlaidIcon.png";
import { useStyles } from "./balanceStyle";
import Card from "@material-ui/core/Card";
import environmentUrls from "../../dispatch";

export const Balance = ({ LinkedAccount }) => {
  //This component was originally meant to be used on the dashboard. If the user had a manual account and wanted to switch to using plaid: this component would allow that
  //In the current version, you cannot have a mix of plaid and manual so this component is only used in the onboarding process

  //uses styling from the balanceStlye file.
  const classes = useStyles();

  if (LinkedAccount === false) {
    //if the user's account does not use plaid then it displays component to connect bank account
    return (
      <Card className={classes.NoBalance}>
        <LinkAccount />
        <img src={plaidImg} className="plaidIcon" alt="Plaid Icon" />
      </Card>
    );
  } else {
    //if the user has already connected their bank account then display nothing
    return <p></p>;
  }
};

// axiosWithAuth()
// .post(`${environmentUrls.base_url}/dashboard/accounts/balance/get`)

function mapStateToProps(state) {
  return {
    LinkedAccount: state.loginReducer.user.LinkedAccount
  };
}

export default connect(mapStateToProps, {})(Balance);
