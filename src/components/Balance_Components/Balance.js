import React,{useEffect} from "react";
import { connect } from "react-redux";
import {getUserInfo} from '../../redux/actions/ProfileActions';
import LinkAccount from "../LinkAccount";
import plaidImg from "../../media/image/PlaidIcon.png";
import { useStyles } from "./balanceStyle";
import Card from '@material-ui/core/Card';

export const Balance = ({LinkedAccount})=>{
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
            null
        )
    }
}

function mapStateToProps(state){
    return {
        LinkedAccount: state.loginReducer.user.LinkedAccount
    }
}

export default connect(mapStateToProps,{getUserInfo})(Balance)