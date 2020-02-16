import React,{ useEffect } from "react"
import Grid from '@material-ui/core/Grid'
import UnlinkedBlocks from "./UnlinkedBlocks"
import LinkedBlocks from "./LinkedBlocks"
import Header from "./Header"
import { connect } from "react-redux";
import Balance from "./Balance"
import LinkedTransactions from "./LinkedTransactions"
import UnlinkedTransactions from "./UnlinkedTransactions"
import LinkedTotalBudget from "./LinkedTotalBudget"
import UnlinkedTotalBudget from "./UnlinkedTotalBudget"
import { getUserInfo } from "../redux/actions/ProfileActions";
import { getTransactions } from "../redux/actions/PlaidActions";
import "../style/dashboardStyle.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

export const Dashboard = props => {
  useEffect(() => {
    props.getTransactions(localStorage.getItem("id"));
    props.getUserInfo(localStorage.getItem("id"));
  },[props.LinkedAccount])
    console.log("I am props",props)
    return (
     <div className="container">
        <Grid container spacing={5}>
            <Grid item sm={8} xs={12}> 
                <div className="middle">
                <Grid container>
                    <Grid item xs={12} lg={12} sm={12}><Header/></Grid>
                </Grid>
                      {
                          props.plaidFetching ||props.blockFetching||props.profileFetching?
                          (
                            <Loader
                              type="ThreeDots"
                              color="#66aabc"
                              height={50}
                              width={50}
                              timeout={10000} //3 secs
                            />
                          ) : (
                            <p></p>
                          ) 
                      }
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
     </div>
   
    )
}




function mapStateToProps(state){
  return {
      userID:state.loginReducer.user.id,
      LinkedAccount:state.loginReducer.user.LinkedAccount,
      blocks:state.plaidReducer.categories,
      plaidFetching:state.plaidReducer.isFetching,
      blockFetching:state.blockReducer.isFetching,
      profileFetching:state.profileReducer.isFetching
  }
}

export default connect(mapStateToProps,{ getTransactions,getUserInfo },)(Dashboard)