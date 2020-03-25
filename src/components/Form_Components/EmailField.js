import React from "react";
import Typography from "@material-ui/core/Typography";
import LANG from "./Lang";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";

const EmailField = ({ values, handleChange, user, fullWidth }) => {
  return (
    <FormControl variant="filled" fullWidth={fullWidth}>
      <Typography className="label">{LANG.EMAIL_ADDRESS}</Typography>
      <TextField
        error={values.email.error}
        helperText={values.email.helperText}
        placeholder={LANG.EMAIL_ADDRESS}
        type="text"
        name="email"
        onChange={handleChange}
        value={user.email}
        variant="outlined"
      />
    </FormControl>
  );
};

export default EmailField;
