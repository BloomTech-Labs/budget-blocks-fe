import React,{useEffect} from "react";
import { connect } from "react-redux";
import {getUserInfo} from '../redux/actions/ProfileActions';
import LinkAccount from "./LinkAccount";
import plaidImg from "../media/image/PlaidIcon.png";
import "../style/balanceStyle.js";
import { useStyles } from "../style/balanceStyle";
import Card from '@material-ui/core/Card';

export const Balance = ({balance, LinkedAccount})=>{

    useEffect(()=> {
        getUserInfo()
    },[])

    const amounts = balance.accounts.map(e => e.balances.available)
    const sum = amounts.reduce((a,b) => {return a + b},0)
    const classes = useStyles();

    if(LinkedAccount === false){
        return(
        <Card className={classes.NoBalance}>
            <LinkAccount/>
            <img src={plaidImg} className="plaidIcon" alt="Plaid Icon"/>
        </Card>
        )
    }else{
        return (
        <Card className="Balance">
            <h1>
                ${sum}
            </h1>
        </Card>
             
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