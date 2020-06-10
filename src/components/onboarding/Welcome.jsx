import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LensIcon from '@material-ui/icons/Lens';
import Box from '@material-ui/core/Box';

import { Link, useHistory } from 'react-router-dom';

// SECTION CUSTOM STYLES
import { useStyles } from '../../styles/theme_provider';

export const customStyles = makeStyles({
  root: {
    marginBottom: '2%',
  },
  list: {
    listStyleType: 'none',
    margin: '5% 0',
    padding: '0',
  },
  listItem: {
    listStyleType: 'none',
    margin: '2% 0',
    padding: '0',
  },
  link: {
    textDecoration: 'none',
  },
  body1: {
    fontWeight: 'bold',
  },
  BudgetH2Style: {
    margin: '2% 0',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '3.2rem',
    lineHeight: '48px',
    textAlign: 'center',
  },
  BudgetWelcomeHeaderStyle: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '600px',
    fontSize: '3.6rem',
    lineHeight: '130.8%',
    color: '#13B9AC',
  },
  icon: {
    marginRight: '1.5%',
    color: '#A4EAE6',
  },
  typography: {
    fontSize: '1rem',
    '&:hover': { color: '#13B9AC' },
  },
  skipButton: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
});

const Welcome = () => {
  const history = useHistory();
  const classes = customStyles();
  const buttonClasses = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    'Complete your profile',
    'Link your bank accounts',
    'Build a budget',
  ];

  const links = [
    '/accountinfo',
    '/onboarding/banklink',
    '/onboarding/budgetgoals',
  ];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    history.push('/onboarding/accountinfo');
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {};

  return (
    <Container className={classes.root}>
      <Typography className={classes.BudgetH2Style} variant="h2">
        Budget
      </Typography>
      <Typography className={classes.BudgetWelcomeHeaderStyle} variant="h1">
        Welcome to Budget Blocks
      </Typography>
      <Typography className={classes.body1} variant="body1">
        Let us do the work for you! Budget blocks automatically links to your
        accounts and displays your cash flow at a glance. Start budgeting your
        way to financial freedom today.
      </Typography>
      <List className={classes.list}>
        {steps.map((toDo, index) => (
          <ListItem key={index} className={classes.listItem}>
            <LensIcon className={classes.icon} />
            <Link className={classes.link} to={links[index]}>
              <Typography className={classes.typography} variant="h3">
                {toDo}
              </Typography>
            </Link>
          </ListItem>
        ))}
      </List>
      <Box>
        <Button
          size="small"
          onClick={handleBack}
          className={buttonClasses.backButton}
          disabled={activeStep === 0}
        >
          {theme.direction === 'rtl' ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
          Back
        </Button>
        <Button
          size="small"
          className={buttonClasses.nextButton}
          onClick={handleNext}
          disabled={activeStep === 3}
        >
          Next
          {theme.direction === 'rtl' ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </Button>
      </Box>
      <Box className={classes.skipButton}>
        <Button onClick={handleSkip}>skip</Button>
      </Box>
    </Container>
  );
};

export default Welcome;
