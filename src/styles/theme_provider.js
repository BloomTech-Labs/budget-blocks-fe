import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  nextButton: {
    fontSize: '14px',
    lineHeight: '21px',
    fontWeight: '600',
    textTransform: 'capitalize',
    color: 'white',
    background: '#13B9AC',
    '&:hover': {
      background: '#13B9AC',
      textDecoration: 'underline',
    },
  },
  backButton: {
    fontSize: '14px',
    lineHeight: '21px',
    fontWeight: '600',
    textTransform: 'capitalize',
    color: '#13B9AC',
    background: 'transparent',
    boxShadow: '0 0 0 0',
    '&:hover': {
      background: 'white',
      boxShadow: '0 0 0 0',
      textDecoration: 'underline',
    },
  },
}));
