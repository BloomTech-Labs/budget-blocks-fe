import React from 'react';
import { TextField } from '@material-ui/core';


const BBTextField = (props) => {
  return (
    <TextField
    inputProps={{
        style: {
          height: "5px",
        }
      }}
      variant="outlined"
      id={props.id}
      name={props.name}
      type="text"
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      />
)
}

export default BBTextField