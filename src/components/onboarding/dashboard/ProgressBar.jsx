//Styles for these components are located in App.css

import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  displayValue: {
    color: 'white',
    marginRight: '7px',
  },
}));

const ProgressBar = (props) => {
  return (
    <div
      className="progressBar"
      style={
        props.percentfilled > 100
          ? {
              width: `${props.totalPercent}%`,
              backgroundColor: '#E4A66C',
              border: '1px dashed rgba(185, 19, 19, 0.37)',
            }
          : { width: `${props.totalPercent}%` }
      }
    >
      <Filler
        percentfilled={props.percentfilled}
        spendValue={props.spendValue}
      />
    </div>
  );
};

const Filler = (props) => {
  const classes = useStyles();

  return (
    <div
      className="filler"
      style={
        props.percentfilled > 100
          ? {
              width: '100%',
              backgroundColor: '#E4A66C',
            }
          : { width: `${props.percentfilled}%` }
      }
    >
      <Typography className={classes.displayValue}>
        ${props.spendValue}
      </Typography>
    </div>
  );
};

export default ProgressBar;
