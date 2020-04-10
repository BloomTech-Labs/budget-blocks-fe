import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { connect } from "react-redux";
import { deleteBlocks } from "../../redux/actions/userBlocks";
import { deleteTrans } from "../../redux/actions/AddTransactionActions";

/**
 * @param {String} dialogTitle 'Delete Block?'
 * @param {Object} userID required!
 * @param {*} blockID required for DelBlock
 * @param {*} transID required for DelTrans
 */
const DeleteModal = ({ dialogTitle, userID, blockID, transID, ...props }) => {
  const delBlockTitle = dialogTitle ? dialogTitle : "Delete Block?";
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const whatsBeingDeleted = () => {
    if (!userID) return console.log("no user id provided.");
    if (blockID && !transID) return () => deleteBlocks(userID, blockID);
    if (transID && !blockID) return () => deleteTrans(userID, transID);
    return console.log("please specify what you want deleted.");
  };

  const deleteThat = whatsBeingDeleted();

  return (
    <div>
      <IconButton aria-label="delete" onClick={handleClickOpen} title="delete">
        <DeleteIcon />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{delBlockTitle}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure want to delete it?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={deleteThat} color="primary" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    userID: state.loginReducer.user.id,
    LinkedAccount: state.loginReducer.user.LinkedAccount,
    transactions: state.plaidReducer.transactions,
  };
}

/**
 * Delete a block. (reduxed)
 */
const DelBlock = connect(mapStateToProps, { deleteBlocks })(DeleteModal);
/**
 * Delete a transaction. (reduxed)
 */
const DelTrans = connect(mapStateToProps, { deleteTrans })(DeleteModal);

export { DelBlock, DelTrans };
