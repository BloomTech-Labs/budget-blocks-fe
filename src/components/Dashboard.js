import React, { useEffect } from "react";
import LinkedBlocks from "./Blocks_Components/LinkedBlocks";
import { connect } from "react-redux";
import LinkedTransactions from "./Transactions_Components/LinkedTransactions";
import TotalBudget from "./TotalBudget_Components/TotalBudget";
import { getTransactions } from "../redux/actions/PlaidActions";
import "./dashboardStyle.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "../App.css";
import "./main.css";
import { getManualTrans } from "../redux/actions/ManualActions";
import Loading from "./Loading";
import { PageView } from "./google_analytics/index.js";
import { getExpenses, deleteExpense, addExpense } from '../redux/actions/ExpenseActions'
import { getBlocks, deleteBlock, addBlock } from '../redux/actions/BlockActions'

import ExpenseList from './no-bank/ExpenseList'


export const Dashboard = (props) => {
  // This component displays the dashboard: Blocks, transactions, and budget
  // useEffect(() => {
  //   props.LinkedAccount == true
  //     ? props.getTransactions(props.userID)
  //     : props.getManualTrans(props.userID, props.history);
  // }, [props.LinkedAccount]);

  useEffect(() => {
    // get all of a user's expeses
    // pass expenses to expenseList
    props.getExpenses(props.userID)
    props.getBlocks(props.userID)
  }, [])



  // useEffect(() => {
  //   PageView();
  // });
  // <ExpensList expenses={props.expenses} />
  return (
    <div className="app-container">
      <Loading />
      <div className="showcase">
        {/* <div className="right-showcase">
          <TotalBudget />
        </div>
        <div className="left-showcase">
          <LinkedBlocks />
          <LinkedTransactions />
        </div> */}
        <ExpenseList
          userID={props.userID}
          handleDeleteExpense={props.deleteExpense}
          expenses={props.expenses}
          handleAddExpense={props.addExpense} 
          handleAddBlock={props.addBlock}
          blocks={props.blocks}/>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    userID: state.loginReducer.user.id,
    expenses: state.expenses.expenses,
    blocks: state.blocks.blocks,
    // LinkedAccount: state.loginReducer.user.LinkedAccount,
    // blocks: state.plaidReducer.categories,
    // plaidFetching: state.plaidReducer.isFetching,
    // blockFetching: state.blockReducer.isFetching,
  };
}

export default connect(mapStateToProps, { getExpenses, deleteExpense, addExpense, getBlocks, addBlock })(
  Dashboard
);
