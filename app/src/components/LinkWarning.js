import React from "react";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import "../style/linkWarningStyle.css";
import { Link } from "react-router-dom";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import Button from "@material-ui/core/Button";

const LinkWarning = (props)=>{

    return(
        <div className="LinkWarning">
            <Typography variant="body1" className="WarningTitle">Budget Blocks uses Plaid to link your bank</Typography>
            <div className="confirmed">
                <CheckCircleOutlineIcon/>
                <Typography variant="body1" className="WarningInfo">Secure Transfer of your information is encrypted end-to-end </Typography>
            </div>
            <div className="confirmed">
                <CheckCircleOutlineIcon/>
                <Typography variant="body1" className="WarningInfo">Private Your credentials will never be made accessible to Budget Blocks </Typography>
            </div>

            <Link to="/login" className="links">
                <Button variant="outlined" className="signin">
                Continue
                </Button>
            </Link>
            <Link to="/login" className="links">
                <Button variant="outlined" className="signin">
                Add Manual Income
                </Button>
            </Link>

        </div>
    )
}

export default LinkWarning;