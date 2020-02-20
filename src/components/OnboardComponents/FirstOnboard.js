import React,{useEffect,useState} from "react"
import Balance from "../Balance_Components/Balance"
import {loginUser} from "../../redux/actions/LoginActions"
import "./onboard.css"
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const FirstOnboard = props => {
    useEffect(() => {
props.loginUser({email:localStorage.getItem("user_email"),password:localStorage.getItem("user_password")})
    },[])
    return (
        
       <div>
            {!props.isFetching && !props.linkedAccount
            ?
            <div className="main">
        <div className="manualBudgetButton"> <Link to="/onboard/budget">Manually set your budget goals here</Link></div>
        <Balance /> 
        </div>
        :
      props.isFetching 
      ?
      <div>...</div>
      :
      props.linkedAccount === true
      ?
      props.history.push("/dashboard")
      :
      "..."
            }

        </div>
    )
}
function mapStateToProps(state) {
    return {
      isFetching: state.plaidReducer.isFetching,
        linkedAccount: state.loginReducer.user.LinkedAccount
    };
  }
  
  export default connect(mapStateToProps, { loginUser })(FirstOnboard);