import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import CheckboxItem from "./Form_Components/Select_Categories/CheckboxItem";
import { selectCategories } from "../redux/actions/ManualActions";
import { axiosWithAuth } from "./AxiosWithAuth"
import {Link} from "react-router-dom"
import { addManualBlocks } from '../redux/actions/ManualActions';

export const ManualAddBlocks = (props) => {
  
 const [customBlock,setCustomBlock] = useState({name:null,budget:null,total:0})
 console.log(customBlock.name)
const handleClick = (e,obj) => {
   
    console.log(obj)
    const object = {
       name:obj.name,
       budget:1.00,
       total:0
    }
}
    const handleChange = e => {
       
        setCustomBlock({...customBlock, [e.target.name]: e.target.value});

console.log(customBlock)
    }
    const handleSubmit = e => {
        e.preventDefault()
       props.addManualBlocks(props.userID,customBlock)

   
    }


  
  return (
    <form onSubmit={handleSubmit}>
        <input
        value={customBlock.name}
        name="name"
        onChange={handleChange}/>
         <input
        value={customBlock.budget}
        name="budget"
        onChange={handleChange}/>
        <button>Submit</button>
        </form>
  );
}

function mapStateToProps(state){
    return{
        categoryArr: state.plaidReducer.categories,
        userID: state.loginReducer.user.id,
    }
}





export default connect(mapStateToProps,{addManualBlocks})(ManualAddBlocks)
