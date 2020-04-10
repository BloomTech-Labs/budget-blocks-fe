import React from "react";
import {
  Dialog,
  ModalTitle,
  DialogContent,
  Button,
  DialogActions
} from "./dialogViews/dialogComponents";
import BackContinue from "./BackContinue";

/**
 * ModalDialog (wrapper for modals)
 *
 * props: {
 *  handleOpen: function,
 *  handleClose: function,
 *  modalTitle: string,
 *  maxWidth: string,
 *  ariaLabelledBy: string,
 *  handleSubmit: function,
 *  backContinue: boolean,
 *  dialogActions: boolean,
 *  submitEdit: function
 *  ...default
 * }
 */
const ModalDialog = (props) => {
  return (
    <Dialog
      className="dialogModal"
      onClose={props.handleClose}
      aria-labelledby={props.ariaLabelledBy}
      open={props.handleOpen}
      maxWidth={props.maxWidth}
    >
      <ModalTitle handleClose={props.handleClose} title={props.modalTitle} />
      <DialogContent className="content">{props.children}</DialogContent>
      {props.backContinue ? (
        <BackContinue
          BackClick={props.handleClose}
          ContClick={props.handleSubmit}
        />
      ) : null}
      {props.dialogActions > (
        <DialogActions
          className="buttons"
          >
          <Button
           className="backBtn"
            onClick={props.handleClose}
            variant="outlined"
            color="primary"
           >
            BACK
            </Button>
          <Button
            className="contBtn"
            onClick={props.submitEdit}
            variant="outlined"
            color="primary"
          >
            CONTINUE
          </Button>
        </DialogActions>
      )}
    </Dialog>
  );
};

export default ModalDialog;
