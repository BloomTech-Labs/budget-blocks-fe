import React from "react";
import PropTypes from 'prop-types';
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
 * This takes the Dialog, ModalTitle, and DialogContent components
 * and returns them with appropriate props. This is used in DialogVews,
 * and TransAction form, which require two different sets of buttons near
 * the bottom. This is handled with backContinue and dialogActions booleans,
 * which dictate which set is rendered.
 * @param {Object} props Defined in propType at bottom
 * @returns {Component} Returns a wrapper that displays children
 */
const ModalDialog = (props) => {
  return (
    <Dialog
      className="dialogModal"
      onClose={props.handleClose}
      aria-labelledby={props.ariaLabelledBy}
      open={props.open}
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
      {props.dialogActions ? (
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
            NEXT
          </Button>
        </DialogActions>
      ) : null}
    </Dialog>
  );
};

ModalDialog.propTypes = {
  handleClose: PropTypes.func,
  modalTitle: PropTypes.string,
  maxWidth: PropTypes.string,
  ariaLabelledBy: PropTypes.string,
  handleSubmit: PropTypes.func,
  backContinue: PropTypes.bool,
  dialogActions: PropTypes.bool,
  submitEdit: PropTypes.func,
  open: PropTypes.bool
}

export default ModalDialog;
