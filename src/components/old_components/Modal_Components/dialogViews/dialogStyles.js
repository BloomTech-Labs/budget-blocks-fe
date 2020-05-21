import MuiDialogActions from "@material-ui/core/DialogActions";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import MuiDialogContent from "@material-ui/core/DialogContent";

// extracted from demomanualBlocks.js
export const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between"
  },
  formControl: {
    width: "45%"
  }
}));

export const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiDialogContent);

export const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1)
  }
}))(MuiDialogActions);
