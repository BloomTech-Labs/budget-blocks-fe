import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import CheckboxItem from "./Form_Components/Select_Categories/CheckboxItem";
import { selectCategories } from "../redux/actions/ManualActions";
import { axiosWithAuth } from "./AxiosWithAuth"
import {Link} from "react-router-dom"
import Select from 'react-select';
import { addManualBlocks,editManualBlocks } from '../redux/actions/ManualActions';
import "./addBlocks.css"
import "./Blocks_Components/index.css"
export const ManualAddBlocks = (props) => {
 const [customBlock,setCustomBlock] = useState({name:null,budget:null,total:0})
 const [editBlock,setEditBlock] = useState({name:null,budget:null,categoryid:null,total:0})
 const [failedEdit,setFailedEdit] = useState(false)
 const [failedCustom,setFailedCustom] = useState(false)

 const handleChange = e => {
        setCustomBlock({...customBlock, [e.target.name]: e.target.value});
        console.log(customBlock)
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (customBlock.name === null || isNaN(customBlock.budget) || !isNaN(customBlock.name)){
            setFailedCustom(true)
            console.log(customBlock)
        }
        else{
            setFailedCustom(false)
            props.addManualBlocks(props.userID,customBlock)
            props.handleClose()

        }
    }

    const submitEdit = e => {
        e.preventDefault()
        if (editBlock.name === null || isNaN(editBlock.budget)){
            setFailedEdit(true)
            console.log(editBlock)
        }
        else{
            props.editManualBlocks(props.userID,editBlock)
            setFailedEdit(false)
            props.handleClose()
        }       
    }

const options = []
props.blocks.filter(i => i.budget === null).map(i => options.push({value:i.id,label:i.name})) 
  return (
      <div>
          {
              failedEdit 
              ?
              <form onSubmit={submitEdit}>
  
              <h3>Add Exsisting Blocks</h3>
              <div className="column">
                  
               <p className="error-message">Select a category from the list and a budget number over 0</p>       
              <Select name="name" onChange={(e) => setEditBlock({...editBlock,name:e.label,categoryid:e.value})} options={options}>
              </Select>
              <input
          value={editBlock.budget}
          name="budget"
          onChange={(e) => setEditBlock({...editBlock,budget:e.target.value})}
          placeholder="budget"
          />
   <button>Edit</button>
   </div>
  </form>
              :
    <form onSubmit={submitEdit}>
  
            <h3>Add Exsisting Blocks</h3>
            <div className="column">
                
                    
            <Select name="name" onChange={(e) => setEditBlock({...editBlock,name:e.label,categoryid:e.value})} options={options}>
            </Select>
            <input
        value={editBlock.budget}
        name="budget"
        onChange={(e) => setEditBlock({...editBlock,budget:e.target.value})}
        placeholder="budget"
        />
 <button>Edit</button>
 </div>
</form>
          }
          {
              failedCustom 
              ? 

<form  onSubmit={handleSubmit}>
<div className="column">
<h3>Add a Custom Block</h3>
<p className="error-message">Create a valid name and a budget number over 0</p>
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
        :
        <form  onSubmit={handleSubmit}>
<div className="column">
<h3>Add a Custom Block</h3>
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
          }
        </div>
  );
}

function mapStateToProps(state){
    return{
        categoryArr: state.plaidReducer.categories,
        userID: state.loginReducer.user.id,
    }
}
export default connect(mapStateToProps,{addManualBlocks,editManualBlocks})(ManualAddBlocks)
