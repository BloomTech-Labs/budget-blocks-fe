import React, { useState, useEffect } from "react";
import { Back_Continue } from "./Back_Continue";
import { Modal_Title } from "./Modal_Title";
import MuiDialogActions from "@material-ui/core/DialogActions";

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
  const [categories, setCategories] = useState("");
  const [values, setValues] = useState({
    name: "",
    amount: "",
    payment_date: "",
    category_id: ""
  });
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(2012);
  React.useEffect(() => {
    setLabelWidth(100);
  }, []);
  const classes = useStyles();

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = event => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  useEffect(() => {
    setCategories(props.categories);
  });
  const cat = Object.entries(categories);
  const userID= props.userID;
  const submit = e => {
    e.preventDefault();
     props.addTransaction(values, userID);
    setCategories({  name: "",
    amount: "",
    payment_date: "",
    category_id: "" });
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
        <Modal_Title handleClose={props.handleClose} title="Add Transaction" />
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
                  {cat.map(([key, value]) => (
                    <option key={key} value={value.id}>{value.name}</option>
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
            onClick={submit}
            variant="outlined"
            color="primary"
          >
            CONTINUE
          </Button>
        </DialogActions>{" "}
      </Dialog>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    categories: state.plaidReducer.categories,
    userID: state.loginReducer.user.id,

  };
}

export default connect(mapStateToProps, { addTransaction })(AddTransaction);
