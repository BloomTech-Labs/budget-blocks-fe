import React,{useEffect} from "react";
import LinkAccount from "./LinkAccount";
import plaidImg from "../media/image/PlaidIcon.png";
import { connect } from "react-redux";
import {getUserInfo} from '../redux/actions/ProfileActions'

export const Balance = ({balance})=>{
    useEffect(()=> {
        getUserInfo()
    },[])
    const amounts = balance.accounts.map(e => e.balances.available)
    const sum = amounts.reduce((a,b) => {return a + b},0)

    return (
        
        <h1>
            ${sum}
        </h1>
         
    )
    // if(props.LinkedAccount ===true ){
    //     return(
    //         <div className="Balance">
    //             <div className="myBalance">
    //                 <p>My Balance</p>
    //                 <h3>{`$${props.balance}`}</h3>
    //             </div>
    //         </div>
    //     )
    // }else{
    //     return(
    //         <div className="NoBalance">
    //             <LinkAccount/>
    //             <img src={plaidImg} className="plaidIcon" alt="Plaid Icon"/>
    //         </div>
    //     )
    // }
}

function mapStateToProps(state){
    return {
        balance:state.plaidReducer,
        LinkedAccount: state.loginReducer.user.LinkedAccount
    }
}

export default connect(mapStateToProps,{getUserInfo})(Balance)