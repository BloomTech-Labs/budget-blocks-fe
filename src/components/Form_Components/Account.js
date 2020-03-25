import React from "react";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const Account =({ message, link }) =>{
    // This components returns a message and link to wherever need be (this component is used in Login and Register at the moment)
    // message and link are both strings
    return(
        <div className="account">
            <Typography className="account">{message}</Typography>
            <Link to={link} className="links">Click <strong> here!</strong></Link>
        </div>
    )
}

export default Account