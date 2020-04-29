import React, { useState, useEffect } from "react";
import { Card, CardActions, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const BBCard = (props) => {
  const useStyles = makeStyles({
    blocksOwnExpense: {
      maxWidth: 300,
      maxHeight: "70px",
      "&:hover": {
        borderColor: "rgb(0, 0, 0, 0.87)",
      },
    },
    default: {
      "&:hover": {
        borderColor: "rgb(0, 0, 0, 0.87)",
      },
    },
    usersExpense: {
      width: "100%",
      maxHeight: "46px",
      backgroundColor: "#ECEFF1",
      borderRight: props.cardSelected
        ? "solid 4px #3BC14A"
        : "solid 4px #ECEFF1",
      // marginTop: '10px',
      boxShadow: "none",
      borderRadius: 0,
    },
    usersBlock: {
      width: "100%",
      maxHeight: "46px",
      backgroundColor: "#ECEFF1",
      boxShadow: "none",
      borderLeft: props.cardHovered ? "solid 4px #003FE1" : "solid 4px #ECEFF1",
      borderRadius: 0,
    },
  });

  const classes = useStyles();

  return (
    <Card
      variant="outlined"
      {...props}
      className={classes[props.role ? props.role : "default"]}
    >
      <CardContent>
        <Typography style={{ fontWeight: "bold" }} component="h2" variant="h5">
          {props.title}
        </Typography>
        <Typography component="p">{props.text}</Typography>
        <CardActions>{props.children}</CardActions>
      </CardContent>
    </Card>
  );
};

export default BBCard;
