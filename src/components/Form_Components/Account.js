import React from "react";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import LANG from "./Lang";

const Account = ({ message, link }) => {
  return (
    <div className="account">
      <Typography className="account">{message} </Typography>
      <Link to={link} className="links">
        ...<strong>{LANG.CLICK_HERE}</strong>
      </Link>
    </div>
  );
};

export default Account;
