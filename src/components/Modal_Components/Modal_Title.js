import React from "react";
import Typography from "@material-ui/core/Typography";
import DialogTitle from "./DialogTitle";

export const Modal_Title = ({handleClose, title}) => {
    // This component creates the title for modals
    return(
        <DialogTitle className="customized-dialog-title" onClose={handleClose}>
          <Typography className="customized-dialog-title">
            {title}
          </Typography>
        </DialogTitle>
    )
}