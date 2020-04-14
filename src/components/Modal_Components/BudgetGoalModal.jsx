import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import BackContinue from "./BackContinue";
import ModalTitle from "./ModalTitle";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogContent from "@material-ui/core/DialogContent";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import "./modalStyle.css";
import { updateBlocks } from "../../redux/actions/userBlocks";

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

export function BudgetGoal(props) {
  // This component is used to edit blocks
  // goals is the data from the form
  // The only field that works functionally is the textfield for editing the budget
  // Slider and time increments are meant for future canvas to implement goals
  const [userID, setUserID] = useState("");
  const [goals, setGoals] = useState({
    categoryid: "",
    budget: "",
  });

  useEffect(() => {
    // whenever the block being edited changes: apply these new values
    if (props.values.budget === null) {
      props.values.budget = 0;
    }
    // console.log(props.values);
    setGoals({
      ...goals,
      categoryid: props.values.catId,
      budget: props.values.budget,
    });
    setUserID(props.values.userId);
  }, [props.values.catId]);

  const handleChange = (e) => {
    e.preventDefault();
    setGoals({ ...goals, budget: e.target.value });
  };

  const PrettoSlider = withStyles({
    root: {
      color: "#91D5FF",
      height: 8,
    },
    thumb: {
      height: 24,
      width: 24,
      backgroundColor: "#fff",
      border: "2px solid currentColor",
      marginTop: -8,
      marginLeft: -12,
      "&:focus,&:hover,&$active": {
        boxShadow: "inherit",
      },
    },
    active: {},
    valueLabel: {
      left: "calc(-50% + 4px)",
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
    // console.log(value); TO-DO bind slider to value
  }
  const submit = (e) => {
    // update using updateBlocks from redux
    e.preventDefault();
    props.updateBlocks(userID, goals);
    setGoals({ ...goals });
    props.handleClose();
  };

  return (
    <div>
      <Dialog
        className="dialogModal"
        onClose={props.handleClose}
        aria-labelledby="customized-dialog-title"
        open={props.handleOpen}
        fullWidth={true}
        maxWidth="md"
      >
        <ModalTitle handleClose={props.handleClose} title="Total Goal" />

        <DialogContent className="content">
          <Typography className="what" variant="h5">
            What is your spending goal?
          </Typography>

          <TextField
            className="goal"
            placeholder="0.00"
            type="number"
            value={goals.budget}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
          />

          <div className="divider"></div>
          <select className="plan" name="budgetTime">
            <option value="1">Daily</option>
            <option value="2">Monthly</option>
            <option value="3">Quarterly </option>
            <option value="4">Yearly</option>
          </select>
          <Typography className="valueEdit">
            This value can be edited later
          </Typography>
          <Typography className="suggest">
            It is suggested that your monthly expenses do not exceed 80% of your
            earnings, but feel free to set your own limits.
          </Typography>
          <Typography className="percent">40%</Typography>
          <div className="slider">
            <PrettoSlider
              valueLabelDisplay="off"
              aria-label="pretto slider"
              defaultValue={0}
              onChange={(event, value) => changeSlider(event, value)}
            />
            <div className="figures">
              <Typography className="spending">$0.00</Typography>
              <Typography className="budgeted">$0.00</Typography>
            </div>
          </div>
        </DialogContent>
        <BackContinue BackClick={props.handleClose} ContClick={submit} />
      </Dialog>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    values: state.values,
    updateBlocks: state.updateBlocks,
    handleClose: state.handleClose,
    handleOpen: state.handleOpen,
  };
}

export default connect(mapStateToProps, { updateBlocks })(BudgetGoal);
