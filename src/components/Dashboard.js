import React,{ useEffect } from "react"
import Grid from '@material-ui/core/Grid'
import UnlinkedBlocks from "./UnlinkedBlocks"
import LinkedBlocks from "./LinkedBlocks"
import SavingsGoal from "./SavingsGoal"
import Header from "./Header"
import { connect } from "react-redux";
import Balance from "./Balance"
import LinkedTransactions from "./LinkedTransactions"
import UnlinkedTransactions from "./UnlinkedTransactions"
import LinkedTotalBudget from "./LinkedTotalBudget"
import UnlinkedTotalBudget from "./UnlinkedTotalBudget"
import { getUserInfo } from "../redux/actions/ProfileActions";
import { getTransactions } from "../redux/actions/PlaidActions";
import { Progress } from 'semantic-ui-react'

export const Dashboard = props => {
  useEffect(() => {
    props.getTransactions(localStorage.getItem("id"));
    props.getUserInfo(localStorage.getItem("id"));
  },[props.LinkedAccount])
    console.log(props)
    return (
     
    <Grid container spacing={5}>
       
        
     

        <Grid item sm={8} xs={12}> 
            <div className="middle">
            <Grid container>
                <Grid item xs={12} lg={12} sm={12}><Header/></Grid>
            </Grid>
            <Grid container>
        <Grid item xs={12} sm={12}>{props.blocks.length > 0 ? <LinkedBlocks /> : <UnlinkedBlocks />}</Grid>  
            </Grid>
            <Grid container>
                <Grid item xs={12} sm={12}>{props.blocks.length ? <LinkedTransactions /> : <UnlinkedTransactions />}</Grid> 
            </Grid>
            </div>
        </Grid>
        <Grid item sm={4} xs={12}>
          
        <Grid container>
                <Grid item sm={8} xs={12}>{props.blocks.length ? <LinkedTotalBudget /> : <UnlinkedTotalBudget />}</Grid>
            </Grid>
            <Grid container>
                <Grid item sm={8} xs={12}><Balance/></Grid>
            </Grid>
        </Grid>
    </Grid>
   
    )
}




function mapStateToProps(state){
  return {
      userID:state.loginReducer.user.id,
      LinkedAccount:state.loginReducer.user.LinkedAccount,
      blocks:state.plaidReducer.categories
  }
}

export default connect(mapStateToProps,{ getTransactions,getUserInfo },)(Dashboard)