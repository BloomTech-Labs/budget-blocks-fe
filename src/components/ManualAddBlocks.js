import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import CheckboxItem from "./Form_Components/Select_Categories/CheckboxItem";
import { selectCategories } from "../redux/actions/ManualActions";
import { axiosWithAuth } from "./AxiosWithAuth"
import {Link} from "react-router-dom"
import { addManualBlocks } from '../redux/actions/ManualActions';
import "./addBlocks.css"
export const ManualAddBlocks = (props) => {
  
 const [customBlock,setCustomBlock] = useState({name:null,budget:null,total:0})
 const handleChange = e => {
        setCustomBlock({...customBlock, [e.target.name]: e.target.value});

    }
    const handleSubmit = e => {
        e.preventDefault()
       props.addManualBlocks(props.userID,customBlock)
        props.handleClose()
    }


  
  return (
    <form onSubmit={handleSubmit}>
        <div className="inputContainer">
            <h3>Add Custom Manual Blocks</h3>
        <input
        value={customBlock.name}
        name="name"
        onChange={handleChange}
        placeholder="name"
        />
         <input
        value={customBlock.budget}
        name="budget"
        onChange={handleChange}
        placeholder="budget"
        />
        <button>Submit</button>
        </div>
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
