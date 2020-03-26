import React from "react";
import logo from "../media/image/Logo.svg";
import budgetImg from "../media/image/budget_blocks.png";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const Home = () => {
<<<<<<< HEAD
  // This component created the landing page
=======
>>>>>>> cf24e3b4c0b687d23bb5d29ee5e77e91084dc542
  return (
    <div className="home">
      <Container maxWidth="sm">
        <div style={{ backgroundColor: "#ffffff", height: "100vh" }}>
          <img src={logo} className="App-logo" alt="logo" />
          <img src={budgetImg} className="budget_img" alt="budget_blocks" />

          <div className="buttons">
            <Link to="/register" className="links">
              <Button variant="outlined" className="signup">
                Sign Up
              </Button>
            </Link>
            <Link to="/login" className="links">
              <Button variant="outlined" className="signin">
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
