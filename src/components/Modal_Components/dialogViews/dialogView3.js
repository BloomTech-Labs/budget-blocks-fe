import React from "react";
import {
  Dialog,
  ModalTitle,
  DialogContent,
  Select,
  FormControl,
  TextField,
  DialogActions,
  Button
} from "./dialogComponents";
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
    <Dialog
      className="dialogModal"
      onClose={props.handleClose}
      aria-labelledby="customized-dialog-title"
      open={props.open}
      maxWidth="md"
    >
      <ModalTitle handleClose={props.handleClose} title="Add Category" />
      <DialogContent className="content">
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
          onClick={handleSubmit}
          variant="outlined"
          color="primary"
        >
          NEXT
        </Button>
      </DialogActions>{" "}
    </Dialog>
  );
};

export default View3;
