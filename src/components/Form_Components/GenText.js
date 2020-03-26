import React from "react";
import Typography from "@material-ui/core/Typography";
import LANG from "./Lang";
import TextField from "@material-ui/core/TextField";

/**
 * TextField with Label
 * @param {String} langKey LANGUAGE_TEXT
 * @param {Function} handleChange event handler
 * @param {String} value state.value
 * @param {String} error state.error
 * @param {String} helperText state.helperText
 * @param {Boolean} fullWidth If true, the input will take up the full width of its container.
 * @param {String} variant default 'outline-basic'
 * @param {String} id default 'outlined'
 */
const GenText = ({
  langKey,
  id,
  value,
  error,
  handleChange,
  helperText,
  fullWidth,
  variant
}) => {
  const textFieldName = langKey.toLowerCase();
  const placeHolder = LANG[langKey];
  return (
    <>
      <Typography className="label">{LANG[langKey]}</Typography>
      <TextField
        id={id || "outlined-basic"}
        placeholder={placeHolder}
        variant={variant || "outlined"}
        type="text"
        name={textFieldName}
        helperText={helperText}
        onChange={handleChange}
        value={value}
        error={error}
        fullWidth={fullWidth || false}
      />
    </>
  );
};

export default GenText;

/*
              <Typography className="label">First Name</Typography>
              <TextField
                id="outlined-basic"
                placeholder="First Name"
                variant="outlined"
                type="text"
                name="first_name"
                helperText={state.values.first_name.helperText}
                onChange={handleChange}
                value={state.user.first_name}
                error={state.values.first_name.error}
              />

*/
