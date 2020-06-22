import React from 'react';

import { Button, makeStyles, Box } from '@material-ui/core';

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
          <img src={envelopeIcon} alt="envelope icon"></img>
        </Button>
        <Button>
          <img src={barChartIcon} alt="bar chart icon"></img>
        </Button>
        <Button>
          <img src={userIcon} alt="user icon"></img>
        </Button>
        <Button>
          <img src={bellIcon} alt="bell icon"></img>
        </Button>
        <Button>
          <img src={cupIcon} alt="cup icon"></img>
        </Button>
      </Box>
    </div>
  );
};

export default FooterComponent;
