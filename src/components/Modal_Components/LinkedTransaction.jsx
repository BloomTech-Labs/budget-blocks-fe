import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { ymdNow } from "../../helpers";
import { addTransaction } from "../../redux/actions/AddTransactionActions";
import { useStyles } from "./dialogViews/dialogStyles";
import TransactionForm from "./TransactionForm";
import "./modalStyle.css";

/**
 * LinkedTransaction (Modal)
 *
 * this modal relies on a 3rd party API.
 *
 * (called from ../Transaction_Components/LinkedTransactions)
 * @param {String} userID userID
 * @param {Function} open handler
 * @param {Function} handleClose handler
 * @param {Function} addTransaction handler
 *
 * @returns {*} Add Transaction Modal
 */
export const LinkedTransaction = ({
  open,
  userID,
  handleClose,
  addTransaction,
  categories: cats
}) => {
  const [categories, setCategories] = useState("");
  const [values, setValues] = useState({
    name: "",
    amount: "",
    payment_date: ymdNow(),
    category_id: ""
  });
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = useState(2012);
  const classes = useStyles();
  const cat = Object.entries(categories);
  useEffect(() => {
    // Whenever the modal is opened: set these variables
    setLabelWidth(100);
    setValues({
      name: "",
      amount: "",
      payment_date: ymdNow(), // current date for material-ui date picker.
      category_id: ""
    });
  }, [open]);
  useEffect(() => {
    setCategories(cats);
  }, [cats]);
  const handleChange = event => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    addTransaction(values, userID); // action
    setCategories({
      name: "",
      amount: "",
      payment_date: ymdNow(),
      category_id: ""
    }); // clear
    handleClose(); // close
  };
  return TransactionForm({
    values,
    classes,
    cat,
    labelWidth,
    inputLabel,
    open,
    handleClose,
    handleChange,
    handleSubmit
  });
};

function mapStateToProps(state) {
  return {
    categories: state.plaidReducer.categories,
    userID: state.loginReducer.user.id
  };
}

export default connect(mapStateToProps, { addTransaction })(LinkedTransaction);
