import React from "react";
import {
  Dialog,
  ModalTitle,
  DialogContent,
  FormControl,
  Select,
  TextField,
  DialogActions,
  Button
} from "./dialogComponents";
const View1 = ({
  props,
  handleEdit,
  handleBudget,
  editBlock,
  submitEdit,
  cat,
  classes
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
        <p className="error-message">
          Create a valid name and a budget number over 0
        </p>

        <FormControl className="radios" component="fieldset">
          <div className="cat1">
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
          onClick={submitEdit}
          variant="outlined"
          color="primary"
        >
          CONTINUE
        </Button>
      </DialogActions>{" "}
    </Dialog>
  );
};

export default View1;
