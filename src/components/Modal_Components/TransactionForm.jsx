import React from "react";

import BackContinue from "./BackContinue";
import ModalTitle from "./ModalTitle";

import Dialog from "@material-ui/core/Dialog";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import { DialogContent } from "./dialogViews/dialogStyles";
import ModalDialog from './ModalDialog'

/**
 * TransactionForm is used when adding a transaction
 *
 * @param {Object} values name, amount, date, & category
 * @param {Object} classes MUI theme
 * @param {Array} cat enumerated list of categories
 * @param {Object} inputLabel React.ref
 * @param {Number} labelWidth width of <Select>.option,
 * @param {Function} handleOpen event handler
 * @param {Function} handleClose event handler
 * @param {Function} handleChange event handler
 * @param {Function} handleSubmit event handler
 */
const TransactionForm = ({
  values,
  classes,
  cat,
  labelWidth,
  inputLabel,
  handleOpen,
  handleClose,
  handleChange,
  handleSubmit
}) => {
  
  return (
    <div>
      
        <ModalDialog
          handleClose={handleClose}
          areaLabelledBy="customized-dialog-title"
          modalTitle="Add Transaction"
          handleOpen={handleOpen}
          maxWidth="md"
          handleSubmit={handleSubmit}
          backContinue={true}
          >
          <FormControl className="radios" component="fieldset">
            <div className="cat1">
              <TextField
                className={classes.formControl}
                label="Name"
                value={values.name}
                name="name"
                onChange={handleChange}
                variant="outlined"
              />
              <TextField
                className={classes.formControl}
                label="Amount"
                value={values.amount}
                name="amount"
                onChange={handleChange}
                type="number"
                variant="outlined"
              />
            </div>
            <div className="cat2">
              <FormControl
                variant="outlined"
                fullWidth
                className={classes.formControl}
              >
                <InputLabel
                  ref={inputLabel}
                  htmlFor="outlined-age-native-simple"
                >
                  Category
                </InputLabel>
                <Select
                  native
                  value={values.category_id}
                  onChange={handleChange}
                  labelWidth={labelWidth}
                  inputProps={{
                    name: "category_id",
                    id: "outlined-age-native-simple"
                  }}
                >
                  <option value="" />
                  {/* maps through the categories and make them an option for the selector */}
                  {cat.map(([key, value]) => (
                    <option key={key} value={value.id}>
                      {value.name}
                    </option>
                  ))}
                </Select>
              </FormControl>
              <TextField
                className={classes.formControl}
                label="Select Date"
                type="date"
                value={values.payment_date}
                name="payment_date"
                onChange={handleChange}
                InputLabelProps={{
                  shrink: true
                }}
                variant="outlined"
              />
            </div>
          </FormControl>
          </ModalDialog>
    </div>
  );
};

export default TransactionForm;
