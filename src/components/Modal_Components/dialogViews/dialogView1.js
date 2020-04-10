import React, { useEffect } from "react";
import ModalDialog from '../ModalDialog'
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
  useEffect(() => console.log('**************dialogView1 invoked***********'), [])
  return (
    <ModalDialog
      handleClose={props.handleClose}
      areaLabelledBy="customized-dialog-title"
      modalTitle="Add Transaction"
      handleOpen={props.open}
      maxWidth="md"
      backContinue={true}
      dialogActions={true}
      submitEdit={submitEdit}
    >
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
    </ModalDialog>
  );
};

export default View1;
