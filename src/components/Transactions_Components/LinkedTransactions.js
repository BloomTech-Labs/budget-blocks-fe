import React, { useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import DisplayTrans from "./DisplayTrans";

import { getTransactions } from "../../redux/actions/PlaidActions";
import { connect } from "react-redux";
import "./index.css";

import LinkedTransaction from "../Modal_Components/LinkedTransaction";
import useStyles from "./LinkedTransactionStyles"

/**
 * @param {*} props
 * @returns {*} Transactions Component
 * 
 * This component displays the transactions table.
 * filter determines the amount of transactions that are displayed. (True = 3 transactions, false = all transactions)
 * handleClick toggles the filter
 * open is used to display the add transaction modal
 */
const Transactions = (props) => {
  const classes = useStyles();
  const [filter, setFilter] = useState(true);
  const handleClick = (e) => {
    setFilter(!filter);
  };



  var selected = props.transactions.slice(0, 3);
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };


  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <div className="trans-container">
        <div className="trans-top-content">
          <h3 className={classes.text}>Recent Transactions:</h3>
          <button className="add-trans-button" onClick={handleClickOpen}>
            Add Transactions
          </button>
          <LinkedTransaction open={open} handleClose={handleClose} />
        </div>
        <div className="trans-item">
          <DisplayTrans
            arr={filter ? selected : props.transactions}
            classes={classes}
          />
        </div>

        <button id="view-button" onClick={handleClick}>
          {filter ? "View all transactions" : "View less"}
        </button>
      </div>
    </React.Fragment>
  );
};
function mapStateToProps(state) {
  return {
    userID: state.loginReducer.user.id,
    LinkedAccount: state.loginReducer.user.LinkedAccount,
    transactions: state.plaidReducer.transactions,
  };
}

export default connect(mapStateToProps, { getTransactions })(Transactions);
