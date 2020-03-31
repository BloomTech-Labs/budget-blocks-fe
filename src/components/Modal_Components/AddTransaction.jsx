import React, { useState, useEffect } from "react";
import { BackContinue } from "./BackContinue";
import ModalTitle from "./ModalTitle";
// import MuiDialogActions from "@material-ui/core/DialogActions";

import { withStyles, makeStyles } from "@material-ui/core/styles";
// import Button from "@material-ui/core/Button";
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
// const DialogActions = withStyles(theme => ({
//   root: {
//     margin: 0,
//     padding: theme.spacing(1)
//   }
// }))(MuiDialogActions);
export const AddTransaction = props => {
  // This component displays the Add Transaction Modal
  // categories is an array of the categories from redux. It is used to populate the select field.
  // values is an object that stores all the data for the form
  // At this moment, All fields are required but there is no errors or button disableing to prevent the user from adding a transaction if one or more fields are empty.
  const [categories, setCategories] = useState("");
  const [values, setValues] = useState({
    name: "",
    amount: "",
    payment_date: createCurrentDate(),
    category_id: ""
  });
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(2012);
  React.useEffect(() => {
    // Whenever the modal is opened: set these variables
    setLabelWidth(100);
    setValues({
      name: "",
      amount: "",
      payment_date: createCurrentDate(), // This creates a current date for material-ui date picker. createCurrentDate function is at the bottom of file.
      category_id: ""
    });
  }, [props.open]);
  const classes = useStyles();

  const handleChange = event => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  useEffect(() => {
    setCategories(props.categories);
  }, [props.categories]);
  const cat = Object.entries(categories);
  const userID = props.userID;
  const submit = e => {
    // On submit: call addTransaction action from redux, clear data in variables, close the modal
    e.preventDefault();
    props.addTransaction(values, userID);
    setCategories({
      name: "",
      amount: "",
      payment_date: createCurrentDate(),
      category_id: ""
    });
    props.handleClose();
  };
  return (
    <div>
      <Dialog
        className="dialogModal"
        onClose={props.handleClose}
        aria-labelledby="customized-dialog-title"
        open={props.open}
        fullWidth={true}
        maxWidth="md"
      >
        <ModalTitle handleClose={props.handleClose} title="Add Transaction" />
        <DialogContent className="content">
          <FormControl className="radios" component="fieldset">
            <div className="cat1">
              <TextField
                className={classes.formControl}
                label="Name"
                value={values.name}
                name="name"
                onChange={handleChange}
                variant="outlined"
              />
              <TextField
                className={classes.formControl}
                label="Amount"
                value={values.amount}
                name="amount"
                onChange={handleChange}
                type="number"
                variant="outlined"
              />
            </div>
            <div className="cat2">
              <FormControl
                variant="outlined"
                fullWidth
                className={classes.formControl}
              >
                <InputLabel
                  ref={inputLabel}
                  htmlFor="outlined-age-native-simple"
                >
                  Category
                </InputLabel>
                <Select
                  native
                  value={values.category_id}
                  onChange={handleChange}
                  labelWidth={labelWidth}
                  inputProps={{
                    name: "category_id",
                    id: "outlined-age-native-simple"
                  }}
                >
                  <option value="" />
                  {/* maps through the categories and make them an option for the selector */}
                  {cat.map(([key, value]) => (
                    <option key={key} value={value.id}>
                      {value.name}
                    </option>
                  ))}
                </Select>
              </FormControl>
              <TextField
                className={classes.formControl}
                label="Select Date"
                type="date"
                value={values.payment_date}
                name="payment_date"
                onChange={handleChange}
                InputLabelProps={{
                  shrink: true
                }}
                variant="outlined"
              />
            </div>
          </FormControl>
        </DialogContent>
        {/* Creates Back and Continue buttons. Takes in functions to close modal and submit to add transaction*/}
        <BackContinue BackClick={props.handleClose} ContClick={submit} />
      </Dialog>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    categories: state.plaidReducer.categories,
    userID: state.loginReducer.user.id
  };
}

function createCurrentDate() {
  // This function creates a new date in the format of YYYY-MM-DD
  const date = new Date();
  function month() {
    // Checks if the month is double or single digit
    if (date.getMonth() + 1 < 10) {
      // If it is single digit: add a 0 on the front
      return `0${date.getMonth() + 1}`;
    } else {
      // If it is double digit: return the month
      return date.getMonth() + 1;
    }
  }
  function day() {
    // Checks if the day is double digit or single digit
    if (date.getDate() < 10) {
      // If it is single digit: add a 0 on the front
      return `0${date.getDate()}`;
    } else {
      // If it is double digit: return the day
      return date.getDate();
    }
  }
  // Create the date in a string with the format YYYY-MM-DD and return it
  const dateValue = `${date.getFullYear()}-${month()}-${day()}`;
  return dateValue;
}

export default connect(mapStateToProps, { addTransaction })(AddTransaction);
