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
    <div className="progressBar" style={{ width: `${props.totalPercent}%` }}>
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
      style={{
        width: `${props.percentfilled}%`,
        display: 'flex',
        justifyContent: 'flex-end',
        alignContent: 'center',
      }}
    >
      <Typography className={classes.displayValue}>
        ${props.spendValue}
      </Typography>
    </div>
  );
};

export default ProgressBar;
