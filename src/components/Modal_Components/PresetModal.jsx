import React, { useState, useEffect } from "react";
import { Back_Continue } from "./Back_Continue";
import { Modal_Title } from "./Modal_Title";

import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogContent from "@material-ui/core/DialogContent";
import Typography from "@material-ui/core/Typography";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import icon from "../../media/image/icon.png";
import axios from "axios";

import "./modalStyle.css";
const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between"
  }
}));


const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiDialogContent);

export default function PresetModal() {
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState({
    categories: "",
    selectedCategory: ""
  });

  const classes = useStyles();

  useEffect(() => {
    axios
      .get("https://lambda-budget-blocks.herokuapp.com/api/users/categories/2")
      .then(response => {
        setValues({ ...values, categories: response.data });
      })
      .catch(error => {
        console.log(error.response);
      });
  }, []);

  const handleClickOpen = () => {
    setOpen(true);

  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = event => {
    setValues({...values,selectedCategory:event.target.value});
  };
  const cat = Object.entries(values.categories);

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open dialog
      </Button>
      <Dialog
        className="dialogModal"
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullWidth={true}
        maxWidth="md"
      >
        <Modal_Title handleClose={handleClose} title="Choose spending blocks"/>
        <DialogContent className="content">
          <Typography className="what" variant="h6">
            Choose which category you would like to set budget for
          </Typography>

          <div className="divider"></div>
          <div className="cat-select">
            <FormControl className="radios" component="fieldset">
              <RadioGroup
                aria-label="position"
                name="position"
                value={values.selectedCategory}
                onChange={handleChange}
                row
              >
                {cat.map(([key, value]) => (
                  <div className="select" key={key}>
                    <div>
                      <img src={icon} alt="icon"></img>
                    </div>
                    <div className="radios">
                      <FormControlLabel
                        value={value.name}
                        control={<Radio color="primary" />}
                        label={value.name}
                        labelPlacement="start"
                        classes={classes}
                      />
                    </div>
                  </div>
                ))}
              </RadioGroup>
            </FormControl>
          </div>
        </DialogContent>
        <Back_Continue BackClick={handleClose} ContClick={handleClose}/>
      </Dialog>
    </div>
  );
}
