import React,{useEffect} from "react";
import { connect } from "react-redux";
import {getUserInfo} from '../redux/actions/ProfileActions';
import LinkAccount from "./LinkAccount";
import plaidImg from "../media/image/PlaidIcon.png";

export const Balance = ({balance, LinkedAccount})=>{
    useEffect(()=> {
        getUserInfo()
    },[])
    const amounts = balance.accounts.map(e => e.balances.available)
    const sum = amounts.reduce((a,b) => {return a + b},0)

    if(LinkedAccount === false){
        return(
        <div className="NoBalance">
            <LinkAccount/>
            <img src={plaidImg} className="plaidIcon" alt="Plaid Icon"/>
        </div>
        )
    }else{
        return (
        <div className="Balance">
            <h1>
                ${sum}
            </h1>
        </div>
             
        )
    }
}

function mapStateToProps(state){
    return {
        balance:state.plaidReducer,
        LinkedAccount: state.loginReducer.user.LinkedAccount
    }
}

export default connect(mapStateToProps,{getUserInfo})(Balance)