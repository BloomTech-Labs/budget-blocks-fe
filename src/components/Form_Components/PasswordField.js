import React, { useState } from "react";
import FormControl from "@material-ui/core/FormControl";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

/**
 * `PasswordField` is a convenience wrapper around several components.
 * @param {String} name (internal)
 * @param {String} placeholder visible when field is empty
 * @param {String} label user-friendly label of this field
 * @param {String} value current value of this field
 * @param {Function} handleChange called when `value` changes
 * @param {Boolean} error when true, the label will be displayed in an error state.
 * @param {String} helperText insight about this field & it's current state
 */
const PasswordField = ({
  name,
  placeholder,
  label,
  value,
  handleChange,
  error,
  helperText
}) => {
  const [viewPass, setViewPass] = useState(false);

  const handleClickShowPassword = () => {
    setViewPass(!viewPass);
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (
    <FormControl variant="filled">
      <Typography className="label"> {label} </Typography>
      <TextField
        error={error}
        helperText={helperText}
        placeholder={placeholder}
        type={viewPass ? "text" : "password"}
        onChange={handleChange}
        value={value}
        name={name}
        variant="outlined"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {viewPass ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          )
        }}
      />
    </FormControl>
  );
};

export default PasswordField;
