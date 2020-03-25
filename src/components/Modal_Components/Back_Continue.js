import React from "react";
import MuiDialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

export const Back_Continue = ({BackClick, ContClick}) =>{
    // This component makes a Back and Continue button: mostly used for modals
    // BackClick and ContClick are functions for onClick for both buttons
    
    const DialogActions = withStyles(theme => ({
        root: {
          margin: 0,
          padding: theme.spacing(1)
        }
      }))(MuiDialogActions);
    
    return(
        <DialogActions className="buttons">
          <Button
            className="backBtn"
            onClick={BackClick}
            variant="outlined"
            color="primary"
          >
            BACK
          </Button>
          
          <Button
            className="contBtn"
            onClick={ContClick}
            variant="outlined"
            color="primary"
          >
            CONTINUE
          </Button>
        </DialogActions>
    )
}