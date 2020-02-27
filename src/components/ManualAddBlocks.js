import React, { useState, useEffect } from "react";
import MuiDialogActions from "@material-ui/core/DialogActions";

import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogContent from "@material-ui/core/DialogContent";
import { connect } from "react-redux";

import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import Select from 'react-select';
import { addManualBlocks,editManualBlocks } from '../redux/actions/ManualActions';
import "./addBlocks.css"
import "./Blocks_Components/index.css"
const useStyles = makeStyles(theme => ({
    root: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between"
    },
    formControl: {
      width: "45%"
    }
  }));
  
  const DialogContent = withStyles(theme => ({
    root: {
      padding: theme.spacing(2)
    }
  }))(MuiDialogContent);
  const DialogActions = withStyles(theme => ({
    root: {
      margin: 0,
      padding: theme.spacing(1)
    }
  }))(MuiDialogActions);
 
export const ManualAddBlocks = (props) => {
    const [open, setOpen] = useState(false);
 const [customBlock,setCustomBlock] = useState({name:"",budget:null,total:0})
 const [editBlock,setEditBlock] = useState({name:null,budget:null,categoryid:null,total:0})
 const [failedEdit,setFailedEdit] = useState(false)
 const [failedCustom,setFailedCustom] = useState(false)
 const [edit,setEdit] = useState(true)
 const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(2012);
  React.useEffect(() => {
    setLabelWidth(100);
  }, []);
  const classes = useStyles();

  const handleClose = () => {
    setOpen(false);
  };
 const handleChange = e => {
    
        setCustomBlock({...customBlock, [e.target.name]: e.target.value});
        setEditBlock({...editBlock,name:""})
        console.log(customBlock)
        console.log(edit)
    }
    const handleEdit = e => {
        
        if (e.label === "Create Block")
        {setEdit(false)}
        else{setEdit(true)}
        setEditBlock({...editBlock,name:e.label,categoryid:e.value,budget:customBlock.budget})
        setCustomBlock({...customBlock,name:""})
        console.log(editBlock)
        console.log(edit)
        
    }
    const handleBudget = e => {
        setEditBlock({...editBlock,budget:e.target.value})
        setCustomBlock({...customBlock,budget:e.target.value})
        console.log(editBlock)
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

const options = [{label:"Create Block"}]
props.blocks.filter(i => i.budget === null).map(i => options.push({value:i.id,label:i.name})) 
const customStyles = {
    width: 10
  }
  
  return (
      
      <div>
{edit && failedEdit
    ? 

    <form onSubmit={submitEdit}>
   <p className="error-message">Select a category from the list and a budget number over 0</p>  
    <h3>Add Exsisting Blocks</h3>
     <div className="column">
        
    <Select style={customStyles}name="name" onChange={handleEdit} options={options}>
    </Select>

</div>

<DialogContent className="content">
          <FormControl className="radios" component="fieldset">
            <div className="cat1">
              <TextField
                className={classes.formControl}
                label="Name"
                value={editBlock.name}
                name="name"
                onChange={handleChange}
                variant="outlined"
              />
              <TextField
                className={classes.formControl}
                label="Amount"
                value={editBlock.name}
                name="amount"
                onChange={handleChange}
                type="number"
                variant="outlined"
              />
            </div>
            </FormControl>
           </DialogContent>
{/* <div className="column">

<input
value={customBlock.budget}
name="budget"
onChange={handleBudget}
placeholder="budget"
/>
<button>Submit</button> */}


</form>

:
edit && !failedEdit
?

<form onSubmit={submitEdit}>
 <h3>Add Exsisting Blocks</h3>
  <div className="column">
     
 <Select style={{width: '82%'}}    name="name" onChange={handleEdit} options={options}>
 </Select>

</div>


<div className="column">

<input
value={customBlock.budget}
name="budget"
onChange={handleBudget}
placeholder="budget"
/>
<button>Submit</button>
</div>

</form>
:
failedCustom && !edit 
?

    <form onSubmit={handleSubmit}>
  <p className="error-message">Create a valid name and a budget number over 0</p>
                  <h3>Add Exsisting Blocks</h3>
                   <div className="column">
                      
                  <Select style={customStyles}name="name" onChange={handleEdit} options={options}>
                  </Select>
       
       </div>
    
    <div className="column">
        
            <input
            value={customBlock.name}
            name="name"
            onChange={handleChange}
            placeholder="name"
            />
        
             <input
            value={customBlock.budget}
            name="budget"
            onChange={handleBudget}
            placeholder="budget"
            />
            <button>Submit</button>
            
            
            </div> 
            
    </form>
    :
    <form onSubmit={handleSubmit}>
  
    <h3>Add Exsisting Blocks</h3>
     <div className="column">
        
    <Select style={customStyles}name="name" onChange={handleEdit} options={options}>
    </Select>

</div>

<div className="column">

<input
value={customBlock.name}
name="name"
onChange={handleChange}
placeholder="name"
/>

<input
value={customBlock.budget}
name="budget"
onChange={handleBudget}
placeholder="budget"
/>
<button>Submit</button>


</div> 

</form>

}
{/* /* //               failedEdit 
//               ?
//               <form onSubmit={submitEdit}>
  
//               <h3>Add Exsisting Blocks</h3>
//               <div className="column">
                  
//                <p className="error-message">Select a category from the list and a budget number over 0</p>       
//               <Select name="name" onChange={(e) => setEditBlock({...editBlock,name:e.label,categoryid:e.value})} options={options}>
//               </Select>
//    <button>Edit</button>
//    </div>
//   </form>
//               :
//     <form onSubmit={submitEdit}>
  
//             <h3>Add Exsisting Blocks</h3>
//             <div className="column">
                
                    
//             <Select name="name" onChange={(e) => setEditBlock({...editBlock,name:e.label,categoryid:e.value})} options={options}>
//             </Select>
           
//  <button>Edit</button>
//  </div>
// </form>
//           }
//           { */}
{/* //               failedCustom 
//               ? 

// <form  onSubmit={handleSubmit}>
// <div className="column">
// <h3>Add a Custom Block</h3>
// <p className="error-message">Create a valid name and a budget number over 0</p>
//         <input
//         value={customBlock.name}
//         name="name"
//         onChange={handleChange}
//         placeholder="name"
//         />
//          <input
//         value={customBlock.budget}
//         name="budget"
//         onChange={handleChange}
//         placeholder="budget"
//         />
//         <button>Submit</button>
        
        
//         </div>
//         </form>
//         :
//         <form  onSubmit={handleSubmit}>
// <div className="column">
// <h3>Add a Custom Block</h3>
//         <input
//         value={customBlock.name}
//         name="name"
//         onChange={handleChange}
//         placeholder="name"
//         />
//          <input
//         value={customBlock.budget}
//         name="budget"
//         onChange={handleChange}
//         placeholder="budget"
//         />
//         <button>Submit</button>     
//         </div>
//         </form>
//           }
//         </div> */} 
</div>
  )
}

function mapStateToProps(state){
    return{
        categoryArr: state.plaidReducer.categories,
        userID: state.loginReducer.user.id,
    }
}
export default connect(mapStateToProps,{addManualBlocks,editManualBlocks})(ManualAddBlocks)
