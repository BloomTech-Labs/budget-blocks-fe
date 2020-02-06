import React from "react";
import LinkAccount from "./LinkAccount";
import plaidImg from "../media/image/PlaidIcon.png";
import { connect } from "react-redux";

export const Balance = (props)=>{
    if(props.LinkedAccount ===true ){
        return(
            <div className="Balance">
                <div className="myBalance">
                    <p>My Balance</p>
                    <h3>{`$${props.balance}`}</h3>
                </div>
            </div>
        )
    }else{
        return(
            <div className="NoBalance">
                <LinkAccount/>
                <img src={plaidImg} className="plaidIcon" alt="Plaid Icon"/>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        balance:state.plaidReducer.Balance,
        LinkedAccount: state.loginReducer.user.LinkedAccount
    }
}

export default connect(mapStateToProps,{})(Balance)