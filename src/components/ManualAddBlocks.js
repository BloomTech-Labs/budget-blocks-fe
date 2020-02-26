import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import CheckboxItem from "./Form_Components/Select_Categories/CheckboxItem";
import { selectCategories } from "../redux/actions/ManualActions";
import { axiosWithAuth } from "./AxiosWithAuth"
import {Link} from "react-router-dom"
import { addManualBlocks } from '../redux/actions/ManualActions';
import "./addBlocks.css"
import "./Blocks_Components/index.css"
export const ManualAddBlocks = (props) => {
  
 const [customBlock,setCustomBlock] = useState({name:null,budget:null,total:0})
 const [failed,setFailed] = useState(false)
 const handleChange = e => {
        setCustomBlock({...customBlock, [e.target.name]: e.target.value});
console.log(customBlock)
    }
    const handleSubmit = e => {
        e.preventDefault()
        if(customBlock.name !== null && !isNaN(customBlock.budget)){
       props.addManualBlocks(props.userID,customBlock)
       setFailed(false)
       props.handleClose()
        }
        else{
            setFailed(true)
        }
       
    }


  
  return (
    <form onSubmit={handleSubmit}>
        {
            failed
            ?
            <div>
            <div className="inputContainer">
            <h3>Add Custom Manual Blocks</h3>
            <p className="error-message">Enter a valid name and budget must be a number</p>
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
       
        </div>
         <button>Submit</button>
         </div>
        :
        <div>
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
       
        </div>
        <button>Submit</button>
        </div>
        }
        
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
