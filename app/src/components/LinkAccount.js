import React from "react";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import "../style/linkAccountStyle.css";
import { Link } from "react-router-dom";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import Button from "@material-ui/core/Button";
import PlaidLink from 'react-plaid-link';
import { connect } from "react-redux";
import { sendLinkToken } from "../redux/actions";

const LinkWarning = (props)=>{

    function handleOnSuccess(token, metadata) {
        props.sendLinkToken(token,props.user.id)
      }
    function handleOnExit() {
        // handle the case when your user exits Link
      }

      console.log(props.user)

    return(
        <div className="LinkWarning">
            <div className="info">
                <Typography variant="body1" className="WarningTitle">Budget Blocks uses Plaid to link your bank</Typography>
                <div className="confirmed">
                    <CheckCircleOutlineIcon/>
                    <Typography variant="body1" className="WarningInfo">Secure Transfer of your information is encrypted end-to-end </Typography>
                </div>
                <div className="confirmed">
                    <CheckCircleOutlineIcon/>
                    <Typography variant="body1" className="WarningInfo">Private Your credentials will never be made accessible to Budget Blocks </Typography>
                </div>
            </div>
            <div className="buttons">
                <PlaidLink
                    clientName="Budget Blocks"
                    env="sandbox"
                    product={["auth", "transactions"]}
                    publicKey={process.env.REACT_APP_PUBLIC_KEY}
                    onExit={handleOnExit}
                    onSuccess={handleOnSuccess}
                    className="plaidButton">
                    Connect
                </PlaidLink> 

                <Link to="/link" className="links">
                    <Button variant="outlined" className="signin">
                    Add Manual Income
                    </Button>
                </Link>
            </div>

        </div>
    )
}


function mapStateToProps(state){
    return {
        error:state.error,
        user:state.user
    }
}

export default connect(mapStateToProps,{ sendLinkToken })(LinkWarning)