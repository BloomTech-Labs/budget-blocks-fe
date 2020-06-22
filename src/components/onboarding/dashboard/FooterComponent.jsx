import React, { useState, useEffect } from 'react';

import { Button, makeStyles, Grid, Box, Typography } from '@material-ui/core';

// Imports for images
import barChartIcon from '../../../media/bar-chart.svg';
import bellIcon from '../../../media/bell.svg';
import cupIcon from '../../../media/cup.svg';
import envelopeIcon from '../../../media/envelope.svg';
import userIcon from '../../../media/user.svg';

const useStyles = makeStyles((theme) => ({
  BoxContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

const FooterComponent = () => {
  const classes = useStyles();

  return (
    <div>
      <Box className={classes.BoxContainer}>
        <Button>
          <img src={envelopeIcon} alt="Category Name Icon"></img>
        </Button>
        <Button>
          <img src={barChartIcon} alt="Category Name Icon"></img>
        </Button>
        <Button>
          <img src={userIcon} alt="Category Name Icon"></img>
        </Button>
        <Button>
          <img src={bellIcon} alt="Category Name Icon"></img>
        </Button>
        <Button>
          <img src={cupIcon} alt="Category Name Icon"></img>
        </Button>
      </Box>
    </div>
  );
};

export default FooterComponent;
