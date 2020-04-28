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
import { updateExpense, setBlockHover,selectExpense, getExpenses, deleteExpense, addExpense, assignBlock, unassignExpense } from '../redux/actions/ExpenseActions'
import { getBlocks, deleteBlock, updateBlock, addBlock, addOwnExpense, deleteAndSave } from '../redux/actions/BlockActions'

import ExpenseList from './no-bank/ExpenseList'


export const Dashboard = (props) => {
  // This component displays the dashboard: Blocks, transactions
 
  useEffect(() => {
    // get all of a user's expeses
    // pass expenses to expenseList
    props.getExpenses(props.userID)
    props.getBlocks(props.userID)
  }, [])


  return (
    <div className="app-container">
      <Loading />
      <div className="showcase">
        <ExpenseList
          userID={props.userID}
          handleDeleteExpense={props.deleteExpense}
          expenses={props.expenses}
          handleAddExpense={props.addExpense}
          handleAddBlock={props.addBlock}
          blocks={props.blocks}
          handleAssignBlock={props.assignBlock}
          handleAddOwnExpense={props.addOwnExpense}
          blockExpenses={props.blockExpenses}
          handleUnassignExpense={props.unassignExpense}
          handleDeleteAndSave={props.deleteAndSave}
          handleDeleteBlock={props.deleteBlock}
          handleUpdateBlock={props.updateBlock}
          handleUpdateExpense={props.updateExpense}
          handleSelectExpense={props.selectExpense}
          selectedExpense={props.selectedExpense}
          blockHover={props.blockHover}
          handleSetBlockHover={props.setBlockHover}
        />
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    userID: state.loginReducer.user.id,
    expenses: state.expenses.expenses,
    blocks: state.blocks.blocks,
    blockExpenses: state.blocks.blockExpenses,
    selectedExpense: state.expenses.selectedExpense,
    blockHover: state.expenses.blockHover
  };
}

export default connect(mapStateToProps, {
  getExpenses,
  deleteExpense,
  addExpense,
  getBlocks,
  addBlock,
  assignBlock,
  addOwnExpense,
  unassignExpense,
  deleteAndSave,
  deleteBlock, 
  updateBlock,
  updateExpense,
  selectExpense,
  setBlockHover
})(
  Dashboard
);
