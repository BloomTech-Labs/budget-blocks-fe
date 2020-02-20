import React, { useState, useEffect } from "react";
import { Back_Continue } from "./Back_Continue";
import { Modal_Title } from "./Modal_Title";

import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogContent from "@material-ui/core/DialogContent";
import Typography from "@material-ui/core/Typography";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

import "./modalStyle.css";
const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between"
  },
  formControl:{
    width: "45%"
  }
}));

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiDialogContent);

export default function AddTransaction() {
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState({
    tName: "",
    tDate: "",
    tCategory: "",
    tAmount: ""
  });
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(2012);
  React.useEffect(() => {
    setLabelWidth(100);
  }, []);
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = event => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  useEffect(() => {
    axios
      .get("https://lambda-budget-blocks.herokuapp.com/api/users/categories/6")
      .then(response => {
        console.log(response)
        // setValues({ ...values, categories: response.data });
      })
      .catch(error => {
        console.log(error.response);
      });
  }, []);
  //const cat = Object.entries(values.categories);

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open dialog
      </Button>
      <Dialog
        className="dialogModal"
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullWidth={true}
        maxWidth="md"
      >
        <Modal_Title handleClose={handleClose} title="Add Transaction" />
        <DialogContent className="content">
          <FormControl className="radios" component="fieldset">
            <div className="cat1">
              <TextField
              className={classes.formControl}
                label="Name"
                value={values.tName}
                name="tName"
                onChange={handleChange}
      
                variant="outlined"
              />
              <TextField
              className={classes.formControl}
                label="Amount"
                value={values.tAmount}
                name="tAmount"
                onChange={handleChange}
      type="number"
                variant="outlined"
              />
            </div>
            <div className="cat2">
            <FormControl variant="outlined" fullWidth className={classes.formControl}>
        <InputLabel ref={inputLabel} htmlFor="outlined-age-native-simple">
         Category
        </InputLabel>
        <Select
          native
          value={values.tCategory}
          onChange={handleChange}
          labelWidth={labelWidth}
          inputProps={{
            name: 'tCategory',
            id: 'outlined-age-native-simple',
          }}
        >
          <option value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
      </FormControl>
            <TextField
            className={classes.formControl}
                label="Select Date"
                type="date"
                value={values.tDate}
                name="tDate"
                onChange={handleChange}
                InputLabelProps={{
                  shrink: true
                }}
                variant="outlined"
              />
            </div>
          </FormControl>
        </DialogContent>
        <Back_Continue BackClick={handleClose} ContClick={handleClose} />
      </Dialog>
    </div>
  );
}
