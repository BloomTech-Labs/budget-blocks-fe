import React from "react";
// import { connect } from "react-redux"
// import { loginUser } from "../redux/actions"
import { makeStyles } from '@material-ui/core/styles';

import logo from "../media/image/logo.jpg";
import budgetImg from "../media/image/budget_blocks.png";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  }
 
}));
const Home = props => {
    const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <div style={{ backgroundColor: "#ffffff", height: "100vh" }}>
          <img src={logo} className="App-logo" alt="logo" />
          <img src={budgetImg} className="budget_img" alt="budget_blocks" />
          <div className="buttons">
            <Button variant="outlined" className="signup">
              Sign Up
            </Button>
            <Button variant="outlined" className="signin">
              Sign In
            </Button>{" "}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
