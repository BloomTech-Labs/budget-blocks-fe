import React,{useEffect} from "react";
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
}

function mapStateToProps(state){
    return {
        balance:state.plaidReducer,
        LinkedAccount: state.loginReducer.user.LinkedAccount
    }
}

export default connect(mapStateToProps,{getUserInfo})(Balance)