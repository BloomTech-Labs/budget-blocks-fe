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
import '../../App.css';
import { useStyles } from '../../styles/theme_provider';

export const customStyles = makeStyles({
  root: {
    marginBottom: '2%',
  },
  list: {
    listStyleType: 'none',
    margin: '6% 0',
  },
  listItem: {
    listStyleType: 'none',
    margin: '2% 0',
    padding: '2%',
  },
  link: {
    textDecoration: 'none',
  },
  body1: {
    fontFamily: 'Poppins',
    fontWeight: 'normal',
    fontSize: '1.6rem',
    lineHeight: '2.4rem',
    padding: '2%',
  },
  budgeth2Wrapper: {
    display: 'flex',
    marginBottom: '10%',
    marginTop: '10%',
    paddingLeft: '2%',
  },
  BudgetH2Style: {
    margin: '2% 0',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '3.2rem',
    lineHeight: '4.8rem',
    textAlign: 'center',
  },
  BudgetWelcomeHeaderStyle: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '3.6rem',
    lineHeight: '130.8%',
    color: '#13B9AC',
    marginBottom: '0%',
    padding: '2%',
  },
  icon: {
    marginRight: '1.5%',
    color: '#A4EAE6',
  },
  typography: {
    fontFamily: 'Poppins',
    fontSize: '1.4rem',
    lineHeight: '2.1rem',
    fontWeight: 'normal',
    color: 'rgba(0, 0, 0, 0.52)',
    '&:hover': { color: '#13B9AC' },
  },
  skipButton: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  buttonsWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20%',
  },
  nextButtonWrapper: {
    marginLeft: '2%',
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
      <div className={classes.budgeth2Wrapper}>
        <Typography className={classes.BudgetH2Style} variant="h2">
          Budget
        </Typography>
      </div>
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
      <Box className={classes.buttonsWrapper}>
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
        <div className={classes.nextButtonWrapper}>
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
        </div>
      </Box>
      <Box className={classes.skipButton}>
        <Button onClick={handleSkip}>skip</Button>
      </Box>
    </Container>
  );
};

export default Welcome;
