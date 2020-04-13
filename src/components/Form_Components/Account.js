import React from "react";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const Account = ({ message, link }) => {
  return (
    <div className="account">
      <Link to={link} className="links">
        <Typography className="account">{message}</Typography>
      </Link>
    </div>
  );
};

export default Account;
