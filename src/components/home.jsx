import React, { useEffect, useState } from "react";
import logo from "../media/image/Logo.svg";
import budgetImg from "../media/image/budget_blocks.png";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { PageView, GAevent } from "./google_analytics/index.js";
import { Redirect } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    PageView();
  });

  const [initial, setinitial] = useState(sessionStorage.getItem("token"));

  let trackSignUp = () => {
    GAevent(
      "Landing Page Buttons",
      "User clicked sign-up button",
      "New User Flow"
    );
  };

  return (
    <div className="home">
      {!initial ? (
        <Container maxWidth="sm">
          <div style={{ backgroundColor: "#ffffff", height: "100vh" }}>
            <img src={logo} className="App-logo" alt="logo" />
            <img src={budgetImg} className="budget_img" alt="budget_blocks" />
            <div className="buttons">
              <Link to="/register" className="links">
                <Button
                  variant="outlined"
                  className="signin"
                  onClick={trackSignUp}
                >
                  Register
                </Button>
              </Link>
              <Link to="/login" className="links">
                <Button variant="outlined" className="signin">
                  Login
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      ) : (
        <Redirect to="/dashboard" />
      )}
    </div>
  );
};

export default Home;
