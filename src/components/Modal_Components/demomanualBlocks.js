import React, { useState, useEffect } from "react";
import { Back_Continue } from "./Back_Continue";
import { Modal_Title } from "./Modal_Title";
import MuiDialogActions from "@material-ui/core/DialogActions";
import { addManualBlocks,editManualBlocks } from '../../redux/actions/ManualActions';

import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogContent from "@material-ui/core/DialogContent";
import { connect } from "react-redux";

import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import { addTransaction } from "../../redux/actions/AddTransactionActions";
import "./modalStyle.css";
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
export const AddTransaction = props => {
  const [open, setOpen] = useState(false);
  const [customBlock,setCustomBlock] = useState({name:"",budget:null,total:0})
  const [editBlock,setEditBlock] = useState({name:"",budget:null,categoryid:null,total:0})
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
    console.log(e.target.value)
    if (cat[e.target.value][1].name === "Create New Category")
    {setEdit(false)}
    else{setEdit(true)}
    setEditBlock({...editBlock,name:cat[e.target.value][1].name,categoryid:e.target.value,budget:customBlock.budget})
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

// const submitEdit = e => {
//     cat
//     e.preventDefault()
//     if (editBlock.name === null || isNaN(editBlock.budget)){
//         setFailedEdit(true)
//         console.log(editBlock)
//     }
//     else{
//         props.editManualBlocks(props.userID,editBlock)
//         setFailedEdit(false)
//         props.handleClose()
//     }       
// }
const cat = Object.entries(props.blocks);
cat.unshift(["hi",{name:"Create New Category",id:0}])
console.log(cat)
const submitEdit = e => {
  console.log(editBlock)
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

  console.log(props.blocks)
  return (
    <div>
      {edit && failedEdit 
      ?
      <Dialog
        className="dialogModal"
        onClose={props.handleClose}
        aria-labelledby="customized-dialog-title"
        open={props.open}
        
        maxWidth="md"
      >
        <Modal_Title handleClose={props.handleClose} title="Add Category" />
        <DialogContent className="content">
        <p className="error-message">Create a valid name and a budget number over 0</p>

        
          <FormControl className="radios" component="fieldset">
            <div className="cat1">
            <Select
                  native
                  onChange={handleEdit}
                  labelWidth="500px"
                  
                  inputProps={{
                    name: "category_id",
                    id: "outlined-age-native-simple"
                  }}
                >
                  <option value="" />
                  {cat.map(([key, value]) => (
                    <option key={key} value={value.id}>{value.name}</option>
                  ))}
                </Select>
              <TextField
                className={classes.formControl}
                label="Budget"
                value={editBlock.budget}
                name="budget"
                onChange={handleBudget}
                type="number"
                variant="outlined"
              />
            </div>
            
          </FormControl>
        </DialogContent>
        <DialogActions className="buttons">
          <Button
            className="backBtn"
            onClick={props.handleClose}
            variant="outlined"
            color="primary"
          >
            BACK
          </Button>
          <Button
            className="contBtn"
            onClick={submitEdit}
            variant="outlined"
            color="primary"
          >
            CONTINUE
          </Button>
        </DialogActions>{" "}
      </Dialog>
      :
      edit && !failedEdit 
      ?

      <Dialog
      className="dialogModal"
      onClose={props.handleClose}
      aria-labelledby="customized-dialog-title"
      open={props.open}
      
      maxWidth="md"
    ><Modal_Title handleClose={props.handleClose} title="Add Category" />   
      <DialogContent className="content">         
                <Select
                  native
                  onChange={handleEdit}
                  labelWidth="500px"
                  
                  inputProps={{
                    name: "category_id",
                    id: "outlined-age-native-simple"
                  }}
                >
                  <option value="" />
                  {cat.map(([key, value]) => (
                    <option key={key} value={value.id}>{value.name}</option>
                  ))}
                </Select>
                {/* </InputLabel> */}
        <FormControl className="radios" component="fieldset">
          <div className="cat1">
          
            {/* <TextField
              className={classes.formControl}
              label="Name"
              value={values.name}
              name="name"
              onChange={handleChange}
              variant="outlined"
            /> */}
            <TextField
              className={classes.formControl}
              label="Budget"
              value={editBlock.budget}
              name="budget"
              
              onChange={handleBudget}
              type="number"
              variant="outlined"
            />
          </div>
          
        </FormControl>
      </DialogContent>
      <DialogActions className="buttons">
        <Button
          className="backBtn"
          onClick={props.handleClose}
          variant="outlined"
          color="primary"
        >
          BACK
        </Button>
        <Button
          className="contBtn"
          onClick={submitEdit}
          variant="outlined"
          color="primary"
        >
          NEXT
        </Button>
      </DialogActions>{" "}
    </Dialog>
    :
    failedCustom && !edit 
          ?
          <Dialog
      className="dialogModal"
      onClose={props.handleClose}
      aria-labelledby="customized-dialog-title"
      open={props.open}
      
      maxWidth="md"
    >
     
      <Modal_Title handleClose={props.handleClose} title="Add Category" />
      <DialogContent className="content">
      
      <p className="error-message">Create a valid name and a budget number over 0</p>
      <Select
                  native
                  onChange={handleEdit}
                  labelWidth="500px"
                  
                  inputProps={{
                    name: "category_id",
                    id: "outlined-age-native-simple"
                  }}
                >
                  <option value="" />
                  {cat.map(([key, value]) => (
                    <option key={key} value={value.id}>{value.name}</option>
                  ))}
                </Select>
        <FormControl className="radios" component="fieldset">
          <div className="cat1">
        
             <TextField
              className={classes.formControl}
              label="Name"
              value={customBlock.name}
              name="name"
              onChange={handleChange}
              variant="outlined"
            /> 
            <TextField
              className={classes.formControl}
              label="Budget"
              value={editBlock.budget}
              name="budget"
              onChange={handleBudget}
              type="number"
              variant="outlined"
            />
          </div>
          
        </FormControl>
      </DialogContent>
      <DialogActions className="buttons">
        <Button
          className="backBtn"
          onClick={props.handleClose}
          variant="outlined"
          color="primary"
        >
          BACK
        </Button>
        <Button
          className="contBtn"
          onClick={handleSubmit}
          variant="outlined"
          color="primary"
        >
          NEXT
        </Button>
      </DialogActions>{" "}
    </Dialog>
    :
    <Dialog
    className="dialogModal"
    onClose={props.handleClose}
    aria-labelledby="customized-dialog-title"
    open={props.open}
    
    maxWidth="md"
  >
    
    <Modal_Title handleClose={props.handleClose} title="Add Category" />
       
    <DialogContent className="content">
    
    <Select
                  native
                  onChange={handleEdit}
                  labelWidth="500px"
                  
                  inputProps={{
                    name: "category_id",
                    id: "outlined-age-native-simple"
                  }}
                >
                  <option value="" />
                  {cat.map(([key, value]) => (
                    <option key={key} value={value.id}>{value.name}</option>
                  ))}
                </Select>
      <FormControl className="radios" component="fieldset">
        <div className="cat1">
        
          <TextField
            className={classes.formControl}
            label="Name"
            value={customBlock.name}
            name="name"
            onChange={handleChange}
            variant="outlined"
          />
          <TextField
            className={classes.formControl}
            label="Budget"
            value={editBlock.budget}
            name="budget"
            onChange={handleBudget}
            type="number"
            variant="outlined"
          />
        </div>
        
      </FormControl>
    </DialogContent>
    <DialogActions className="buttons">
      <Button
        className="backBtn"
        onClick={props.handleClose}
        variant="outlined"
        color="primary"
      >
        BACK
      </Button>
      <Button
        className="contBtn"
        onClick={handleSubmit}
        variant="outlined"
        color="primary"
      >
        NEXT
      </Button>
    </DialogActions>{" "}
  </Dialog>
      }
    </div>
  );
};

function mapStateToProps(state){
  return{
      categoryArr: state.plaidReducer.categories,
      userID: state.loginReducer.user.id,
  }
}
export default connect(mapStateToProps,{addManualBlocks,editManualBlocks})(AddTransaction)
