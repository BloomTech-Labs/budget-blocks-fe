import React from "react";
import {
  Select,
  FormControl,
  TextField,
} from "./dialogComponents";
import ModalDialog from '../ModalDialog'

/**
 * View2 
 * @param {Object} props props
 * @returns {Component} component
 */
const View2 = ({
  props,
  handleEdit,
  handleBudget,
  editBlock,
  submitEdit,
  cat,
  classes
}) => {
  return (
    <ModalDialog
      handleClose={props.handleClose}
      ariaLabelledBy="customized-dialog-title"
      modalTitle="Add Transaction"
      open={props.open}
      maxWidth="md"
      backContinue={false}
      dialogActions={true}
      submitEdit={submitEdit}
    >
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
          <option key={key} value={value.id}>
            {value.name}
          </option>
        ))}
      </Select>
      <FormControl className="radios" component="fieldset">
        <div className="cat1">
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
    </ModalDialog>
  );
};

export default View2;
