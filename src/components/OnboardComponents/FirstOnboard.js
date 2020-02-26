import React, { useEffect,useState } from "react"
import axios from "axios";
import Balance from "../Balance_Components/Balance"
import "./onboard.css"
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addDefault } from "../../redux/actions/ManualActions";
import Loader from 'react-loader-spinner'
import { loginUser } from "../../redux/actions/LoginActions";

const FirstOnboard = props => {
    
    const handleClick = (e) =>{
        e.preventDefault();
        props.addDefault(props.userId, props.history);
    }
    useEffect(() => {
        
props.loginUser({email:localStorage.getItem("email"),password:localStorage.getItem("password")},props.history)
    },[])
    return (
        
       <div>
            {!props.isFetching && !props.linkedAccount && props.error === null
            ?
            <div className="main">
        <div className="manualBudgetButton"> <button onClick={handleClick}>Manually set your budget goals here</button></div>
        <Balance /> 
        </div>
        :
      props.isFetching 
      ?
      <div><Loader
      type="Puff"
      color="#00BFFF"
      height={100}
      width={100} //3 secs

   /></div>
      :
      props.linkedAccount === true
      ?
      props.history.push("/dashboard")
      :
      <div className="main">
      <p className="error">Sorry Please Try Again</p>
  <div className="manualBudgetButton"> <button onClick={handleClick}>Manually set your budget goals here</button></div>
  <Balance /> 
  </div>

            }

        </div>
    )
}
function mapStateToProps(state) {
    return {
      isFetching: state.plaidReducer.isFetching,
      error: state.plaidReducer.error,
      linkedAccount: state.loginReducer.user.LinkedAccount,     
      userId: state.loginReducer.user.id

    };
  }
  
  export default connect(mapStateToProps, { addDefault,loginUser })(FirstOnboard);