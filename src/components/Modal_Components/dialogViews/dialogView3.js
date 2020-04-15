import React from "react";
import {
  Select,
  FormControl,
  TextField,

} from "./dialogComponents";

import ModalDialog from '../ModalDialog'
const View3 = ({
  props,
  handleEdit,
  handleChange,
  handleBudget,
  handleSubmit,
  editBlock,
  customBlock,
  cat,
  classes,
  errorMessage
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
      handleSubmit={handleSubmit}
    >
      {errorMessage ? (
        <p className="error-message">
          Create a valid name and a budget number over 0
          </p>
      ) : (
          ""
        )}
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
            label="Name"
            value={customBlock.name}
            name="name"
            onChange={handleChange}
            variant="outlined"
          />
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

export default View3;
