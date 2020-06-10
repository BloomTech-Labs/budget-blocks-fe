import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import Welcome from "./Welcome";

const OnBoarding = () => {
  return (
    <div>
      <Welcome />
      <Link to="/dashboard">
        <Button color="secondary" variant="contained">
          dashboard
        </Button>
      </Link>
    </div>
  );
};

export default OnBoarding;
