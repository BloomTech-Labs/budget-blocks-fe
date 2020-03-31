import React, { useState } from "react";
import { useStyles } from "./dialogViews/dialogStyles";
import {
  addManualBlocks,
  editManualBlocks
} from "../../redux/actions/ManualActions";
import {
  dialogView1,
  dialogView2,
  dialogView3,
  dialogView4
} from "./dialogViews";

import { connect } from "react-redux";
import "./dialogViews/dialogComponents";
import "./modalStyle.css";

export const AddTransaction = props => {
  const [customBlock, setCustomBlock] = useState({
    name: "",
    budget: null,
    total: 0
  });
  const [editBlock, setEditBlock] = useState({
    name: "",
    budget: null,
    categoryid: null,
    total: 0
  });
  const [failedEdit, setFailedEdit] = useState(false);
  const [failedCustom, setFailedCustom] = useState(false);
  const [edit, setEdit] = useState(true);
  const classes = useStyles();

  const handleChange = e => {
    setCustomBlock({ ...customBlock, [e.target.name]: e.target.value });
    setEditBlock({ ...editBlock, name: "" });
  };
  const handleEdit = e => {
    if (cat[e.target.value][1].name === "Create New Category") {
      setEdit(false);
    } else {
      setEdit(true);
    }
    setEditBlock({
      ...editBlock,
      name: cat[e.target.value][1].name,
      categoryid: e.target.value,
      budget: customBlock.budget
    });
    setCustomBlock({ ...customBlock, name: "" });
  };
  const handleBudget = e => {
    setEditBlock({ ...editBlock, budget: e.target.value });
    setCustomBlock({ ...customBlock, budget: e.target.value });
    console.log(editBlock);
    console.log(customBlock);
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (
      customBlock.name === null ||
      isNaN(customBlock.budget) ||
      !isNaN(customBlock.name)
    ) {
      setFailedCustom(true);
    } else {
      setFailedCustom(false);
      props.addManualBlocks(props.userID, customBlock);
      props.handleClose();
    }
  };
  const cat = Object.entries(props.blocks);
  cat.unshift(["hi", { name: "Create New Category", id: 0 }]);
  const submitEdit = e => {
    e.preventDefault();

    if (editBlock.name === null || isNaN(editBlock.budget)) {
      setFailedEdit(true);
    } else {
      props.editManualBlocks(props.userID, editBlock);
      setFailedEdit(false);
      props.handleClose();
    }
  };
  const options = [{ label: "Create Block" }];
  props.blocks
    .filter(i => i.budget === null)
    .map(i => options.push({ value: i.id, label: i.name }));

  console.log(props.blocks);
  return (
    <div>
      {edit && failedEdit
        ? dialogView1({
            props,
            handleEdit,
            handleBudget,
            editBlock,
            submitEdit,
            cat,
            classes
          })
        : edit && !failedEdit
        ? dialogView2({
            props,
            handleEdit,
            handleBudget,
            editBlock,
            submitEdit,
            cat,
            classes
          })
        : failedCustom && !edit
        ? dialogView3({
            props,
            handleEdit,
            handleChange,
            handleBudget,
            handleSubmit,
            editBlock,
            customBlock,
            cat,
            classes
          })
        : dialogView4({
            props,
            handleEdit,
            handleChange,
            handleBudget,
            handleSubmit,
            editBlock,
            customBlock,
            cat,
            classes
          })}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    categoryArr: state.plaidReducer.categories,
    userID: state.loginReducer.user.id
  };
}
export default connect(mapStateToProps, { addManualBlocks, editManualBlocks })(
  AddTransaction
);
