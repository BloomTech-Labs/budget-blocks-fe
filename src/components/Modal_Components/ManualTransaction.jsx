import React, { useState } from "react";
import { useStyles } from "./dialogViews/dialogStyles";
import {
  addManualBlocks,
  editManualBlocks,
} from "../../redux/actions/ManualActions";
import { dialogView1, dialogView2, dialogView3 } from "./dialogViews";
import { connect } from "react-redux";

import "./dialogViews/dialogComponents";
import "./modalStyle.css";

/*
... && || 
..... current_user&.admin === current_user && current_user.admin
Code is not considered more complex when it uses shorthand that the language provides for collapsing multiple statements into one

Code is considered more complex for each "break in the linear flow of the code"
loops, conditionals, try/catch, switch/case, sequence of operators like a && b && c, recursion, jumps to labels

Code is considered more complex when "flow breaking structures are nested"
*/

/**
 * ManualTransaction (Modal)
 *
 * (called from ../AddManualBlocks)
 *
 * @param {String} userID userID
 * @param {Function} open handler
 * @param {Function} handleClose handler
 * @param {Function} addTransaction handler
 *
 * @returns {*} Add Transaction Modal
 */
export const ManualTransaction = (props) => {
  const [state, setState] = useState({
    customBlock: {
      name: "",
      budget: null,
      total: 0,
    },
    editBlock: {
      name: "",
      budget: null,
      categoryid: null,
      total: 0,
    },
    edit: true,
    failedEdit: false,
    failedCustom: false,
  });
  const classes = useStyles();
  const options = [{ label: "Create Block" }];

  const handleChange = (e) => {
    setState({
      ...state,
      customBlock: { ...state.customBlock, [e.target.name]: e.target.value },
      editBlock: { ...state.editBlock, name: "" },
    });
  };

  const handleEdit = (e) => {
    setState({
      ...state,
      editBlock: {
        ...state.editBlock,
        name: cat[e.target.value][1].name,
        categoryid: e.target.value,
        budget: state.customBlock.budget,
      },
      customBlock: { ...state.customBlock, name: "" },
      edit: !(cat[e.target.value][1].name === "Create New Category"),
    });
  };
  const handleBudget = (e) => {
    setState({
      ...state,
      editBlock: { ...state.editBlock, budget: e.target.value },
      customBlock: { ...state.customBlock, budget: e.target.value },
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    /*
    Refactored this to reduce cog complexity
    const failing =
      state.customBlock.name === null || isNaN(state.customBlock.budget) || !isNaN(state.customBlock.name); // +1
      */

    let failing = false;
    if (typeof state.customBlock.name !== "string"){ // +1
      failing = true;
    } else if (isNaN(state.customBlock.budget)){ // +1
      failing = true;
    }

    setState({
      ...state,
      failedCustom: failing,
    });

    if (!failing) { // +2
      props.addManualBlocks(props.userID, state.customBlock);
      props.handleClose();
    }

  };

  const cat = Object.entries(props.blocks);

  cat.unshift(["hi", { name: "Create New Category", id: 0 }]);

  const submitEdit = (e) => {
    e.preventDefault();

    const failing =
      state.editBlock.name === null || isNaN(state.editBlock.budget);

    setState({
      ...state,
      failedEdit: failing,
    });

    if (!failing) { // +2
      props.editManualBlocks(props.userID, state.editBlock);
      props.handleClose();
    }

  };

  props.blocks
    .filter((i) => i.budget === null)
    .map((i) => options.push({ value: i.id, label: i.name }));

  return (
    <div>
      {state.edit && state.failedEdit // +2
        ? dialogView1({
            props,
            handleEdit,
            handleBudget,
            editBlock: state.editBlock,
            submitEdit,
            cat,
            classes,
          })

          : state.edit && !state.failedEdit // +3
          ? dialogView2({
              props,
              handleEdit,
              handleBudget,
              editBlock: state.editBlock,
              submitEdit,
              cat,
              classes,
            })

            : state.failedCustom && !state.edit // +4
            ? dialogView3({
                props,
                handleEdit,
                handleChange,
                handleBudget,
                handleSubmit,
                editBlock: state.editBlock,
                customBlock: state.customBlock,
                cat,
                classes,
              })
            : dialogView3({
                props,
                handleEdit,
                handleChange,
                handleBudget,
                handleSubmit,
                editBlock: state.editBlock,
                customBlock: state.customBlock,
                cat,
                classes,
                errorMessage: "Create a valid name and a budget number over 0",
          })}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    categoryArr: state.plaidReducer.categories,
    userID: state.loginReducer.user.id,
  };
}
export default connect(mapStateToProps, { addManualBlocks, editManualBlocks })(
  ManualTransaction
);
