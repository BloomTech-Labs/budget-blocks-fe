import React from "react";
import "../style/linkAccountStyle.css";
import PlaidLink from 'react-plaid-link';
import { connect } from "react-redux";
import { sendLinkToken } from "../redux/actions/PlaidActions";

const LinkAccount = (props)=>{

    function handleOnSuccess(token, metadata) {
        props.sendLinkToken(token,props.user.id)
      }
    function handleOnExit() {
        // handle the case when your user exits Link
      }

    return(
        <div className="LinkAccount">
                <PlaidLink
                    clientName="Budget Blocks"
                    env="sandbox"
                    product={["auth", "transactions"]}
                    publicKey={process.env.REACT_APP_PUBLIC_KEY}
                    onExit={handleOnExit}
                    onSuccess={handleOnSuccess}
                    className="plaidButton">
                    Connect Bank Account
                </PlaidLink> 

        </div>
    )
}


function mapStateToProps(state){
    return {
        error:state.plaidReducer.error,
        user:state.loginReducer.user
    }
}

export default connect(mapStateToProps,{ sendLinkToken })(LinkAccount)