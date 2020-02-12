import React, { useState, useEffect} from "react";
import { Back_Continue } from "./Modal_Components/Back_Continue";
import { Modal_Title } from "./Modal_Components/Modal_Title";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogContent from "@material-ui/core/DialogContent";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import "../style/modalStyle.css";
import axios from "axios";
const useStyles = makeStyles(theme => ({
  root: {
    width: 300 + theme.spacing(3) * 2
  },
  margin: {
    height: theme.spacing(3)
  }
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

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiDialogContent);

export default function BudgetGoal(props) {
  const [userID, setUserID]=useState("")
  const [goals, setGoals] = useState({
    categoryid: "",
    budget: ""
  });
  useEffect(()=>{
    setGoals({...goals, categoryid:props.values.catId})
    setUserID(props.values.userId);
  },[props.values.catId])
  const handleChange = e => {
    e.preventDefault();
    setGoals({ ...goals,budget: e.target.value });
  };
  const PrettoSlider = withStyles({
    root: {
      color: "#91D5FF",
      height: 8
    },
    thumb: {
      height: 24,
      width: 24,
      backgroundColor: "#fff",
      border: "2px solid currentColor",
      marginTop: -8,
      marginLeft: -12,
      "&:focus,&:hover,&$active": {
        boxShadow: "inherit"
      }
    },
    active: {},
    valueLabel: {
      left: "calc(-50% + 4px)"
    },
    track: {
      height: 8,
      borderRadius: 4
    },
    rail: {
      height: 8,
      borderRadius: 4
    }
  })(Slider);
  function changeSlider(event, value) {
    console.log(value);
  }
  const submit = e => {
    e.preventDefault();

    axios
      .put(
        `https://lambda-budget-blocks.herokuapp.com/api/users/categories/${userID}`,goals
      )
      .then(response => {
        setGoals({ ...goals,budget:"" });
        props.handleClose()

        
      })
      .catch(error => {
        console.log(error.response);
      });
  };
 
  return (
    <div>
      <Dialog
        className="dialogModal"
        onClose={props.handleClose}
        aria-labelledby="customized-dialog-title"
        open={props.open}
        fullWidth={true}
        maxWidth="md"
      >
        <Modal_Title handleClose={props.handleClose} title="Total Goal"/>
  
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
              )
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
        <Back_Continue BackClick={props.handleClose} ContClick={submit}/>
      </Dialog>
    </div>
  );
}
