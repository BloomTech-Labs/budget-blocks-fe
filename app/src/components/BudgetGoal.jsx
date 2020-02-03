import React from "react";
import { withStyles,makeStyles 
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import Slider from '@material-ui/core/Slider';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles(theme => ({
    root: {
      width: 300 + theme.spacing(3) * 2,
    },
    margin: {
      height: theme.spacing(3),
    },
  }));
  
const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2)
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: "#00000"
  }
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1)
  }
}))(MuiDialogActions);

export default function BudgetGoal() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const PrettoSlider = withStyles({
    root: {
      color: '#52af77',
      height: 8,
    },
    thumb: {
      height: 24,
      width: 24,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      marginTop: -8,
      marginLeft: -12,
      '&:focus,&:hover,&$active': {
        boxShadow: 'inherit',
      },
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 4px)',
    },
    track: {
      height: 8,
      borderRadius: 4,
    },
    rail: {
      height: 8,
      borderRadius: 4,
    },
  })(Slider);
 function changeSlider(event, value) {
    console.log(value);
  }
  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open dialog
      </Button>
      <Dialog className="dialogModal"
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Total goal
        </DialogTitle>
        <DialogContent>
          <Typography variant="h5">What is your spending goal?</Typography>
          <Typography variant="h4">$0.00</Typography>
          <div className="divider">Divider here</div>
          <select name="budgetTime">
            <option value="1" selected="selected">
              Daily
            </option>
            <option value="2">Monthly</option>
            <option value="3">Quarterly </option>
            <option value="4">Yearly</option>
          </select>
          <Typography className="valueEdit">
            This value can be edited later
          </Typography>
          <Typography gutterBottom>
            It is suggested that your monthly expenses do not exceed 80% of your
            earnings, but feel free to set your own limits.
          </Typography>
          <Typography gutterBottom>40%</Typography>
          <div className ="slider">
      <PrettoSlider valueLabelDisplay="off" aria-label="pretto slider" defaultValue={0}   onChange={(event, value) => changeSlider(event, value)}/>
<Typography className="spendind">$0.00</Typography>
<Typography className="budgeted">$0.00</Typography>
          </div>
        </DialogContent>
        <DialogActions>
        <Button className="backBtn" onClick={handleClose} variant="outlined" color="primary">
            BACK
          </Button>
          <Button  className=contBtn onClick={handleClose} variant="outlined"color="primary">
            CONTINUE
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
