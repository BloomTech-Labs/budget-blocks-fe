import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

const OnBoarding = () => {
  return (
    <div>
      <Link to='/dashboard'>
        <Button color='secondary' variant='contained'>
          dashboard
        </Button>
      </Link>
    </div>
  );
};

export default OnBoarding;
