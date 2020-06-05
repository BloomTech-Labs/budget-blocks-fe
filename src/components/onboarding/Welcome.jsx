import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LensIcon from "@material-ui/icons/Lens";

import { Link } from "react-router-dom";

export const useStyles = makeStyles({
  BudgetH2Style: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "32px",
    lineHeight: "48px",
    textAlign: "center",
  },
  BudgetWelcomeHeaderStyle: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "600px",
    fontSize: "36px",
    lineHeight: "130.8%",
    color: "#13B9AC",
  },
});

const Welcome = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    "Complete your profile",
    "Link your bank accounts",
    "Build a budget",
  ];

  const links = [
    "/accountinfo",
    "/onboaring/banklink",
    "/onboarding/budgetgoals",
  ];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Container>
      <Typography className={classes.BudgetH2Style} variant="h2">
        Budget
      </Typography>
      <Typography className={classes.BudgetWelcomeHeaderStyle} variant="h1">
        Welcome to Budget Blocks
      </Typography>
      <Typography variant="body1">
        Let us do the work for you! Budget blocks automatically links to your
        accounts and displays your cash flow at a glance. Start budgeting your
        way to financial freedom today.
      </Typography>
      <List>
        {steps.map((toDo, index) => (
          <ListItem>
            <LensIcon />
            <Link to={links[index]}>
              <Typography>{toDo}</Typography>
            </Link>
          </ListItem>
        ))}
      </List>
      <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
        Back
      </Button>
      <Button size="small" onClick={handleNext} disabled={activeStep === 3}>
        Next
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </Button>
    </Container>
  );
};

export default Welcome;
