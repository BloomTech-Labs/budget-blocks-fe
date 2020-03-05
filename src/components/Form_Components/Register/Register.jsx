import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { registerUser } from "../../../redux/actions/RegisterActions";
import Title from "../Title";
import PasswordField from "../PasswordField";
import Account from "../Account";
import { CheckEmptyFields } from "../CheckEmpyFields";
import { ChangeCheckField } from "../ChangeCheckField";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import "./registerStyle.css";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Loader from "react-loader-spinner";

export const Register = props => {
  // This Component creates the register form. Five Fields: email, first name, last name, password, and confirm password
  // user is used to save form data for submission.

  // values is an object that has objects for each part of the form
  // each object in values are just details for the field such as making email and password error with a message or the submit button disable 
  const [user, setUser] = useState({ email: "", password: "",first_name:"",last_name:"" });
  const [confirmPass, setConfirmPass] = useState({ confirmPassword: "" });
  const [values, setValues] = useState({
    password: {
      error: false,
      helperText: ""
    },
    email: {
      error: false,
      helperText: ""
    },
    first_name: {
      error: false,
      helperText: ""
    },
    last_name: {
      error: false,
      helperText: ""
    },
    button: {
      disabled: false
    }
  });

  const handleChange = e => {
    // updates for data with new entry. removes any spaces at the begining and end of the string. 
    setUser({ ...user, [e.target.name]: e.target.value });
    // updates form field with error and message accordingly
    setValues(ChangeCheckField(e, values));
  };

  const handleConfirm = e => {
    // This function is called everytime the confirm password fields has changed

    // Remove error and message from the field
    setValues({
      ...values,
      password: {
        error: false,
        helperText: ``
      }
    });
    // update field
    setConfirmPass({ ...confirmPass, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // calls function to see if fields are empty. 
    // if fields are empty: it returns an object with new values.
    // if there are no empty fields: it returns boolean of false
    const check = CheckEmptyFields(user, values);
    // check for returned object
    if (check instanceof Object) {
      // if object returned: setValues with that object
      setValues({ ...check });
      // check to see if confirm password and password fields match
    } else if (confirmPass.confirmPassword !== user.password) {
      // if they are not the same: error password
      setValues({
        ...values,
        password: {
          error: true,
          helperText: `Password Mismatch`
        }
      });
    } else {
      // if there are no errors: call registerUser action from redux to register new account
      props.registerUser(user, props.history);
      setUser({ email: "", password: "",first_name:"",last_name:"" });
      setConfirmPass({ confirmPassword: "" });
      setValues({
        ...values,
        password: {
          error: false,
          helperText: ``
        }
      });
    }
  };

  useEffect(() => {
    // Everytime a change is made to the form it will check for any errors in any of the given fields
    if (values.password.error === false && values.email.error === false) {
      // if there are no errors: user can click submit button to login
      setValues({ ...values, button: { disabled: false } });
    } else {
      // if there is an error: disable the button 
      setValues({ ...values, button: { disabled: true } });
    }
  }, [user]);
  return (
    <div className="register">
      <Container maxWidth="sm">
        <div style={{ backgroundColor: "#ffffff" }}>
          <Title title="Sign Up" />

          <form className="RegisterForm" onSubmit={handleSubmit}>
            <FormControl variant="outlined">
              <Typography className="label">Email Address</Typography>
              <TextField
                id="outlined-basic"
                placeholder="Email Address"
                variant="outlined"
                type="email"
                name="email"
                helperText={values.email.helperText}
                onChange={handleChange}
                value={user.email}
                error={values.email.error}
              />
              <Typography className="label">First Name</Typography>

              <TextField
                id="outlined-basic"
                placeholder="First Name"
                variant="outlined"
                type="text"
                name="first_name"
                helperText={values.first_name.helperText}
                onChange={handleChange}
                value={user.first_name}
                error={values.first_name.error}
              />
              <Typography className="label">Last Name</Typography>

              <TextField
                id="outlined-basic"
                placeholder="Last Name"
                variant="outlined"
                type="text"
                name="last_name"
                helperText={values.last_name.helperText}
                onChange={handleChange}
                value={user.last_name}
                error={values.last_name.error}
              />
              <PasswordField
                name="password"
                placeholder="Password"
                label="Password"
                error={values.password.error}
                value={user.password}
                handleChange={handleChange}
                helperText={values.password.helperText}
              />

              <PasswordField
                name="confirmPassword"
                placeholder="Confirm Password"
                label="Confirm Password"
                error={values.password.error}
                value={confirmPass.confirmPassword}
                handleChange={handleConfirm}
              />
              <Account message="Already have an account?" link="/login" />
              {props.error ? (
                <p style={{ display: "inline" }} className="errorMessage">
                  {props.error}
                </p>
              ) : (
                <p className="errorMessage"></p>
              )}
              <Button
                variant="outlined"
                className="signUpBtn"
                type="submit"
                disabled={values.button.disabled}
              >
                {/* If the form is submitting data for register, the button will change from 'Sign Up' to a loading animation */}
                {props.isFetching ? (
                  <Loader
                    type="Puff"
                    color="#00BFFF"
                    height={50}
                    width={50}
                    timeout={10000} //3 secs
                  />
                ) : (
                  <p>Sign Up</p>
                )}
              </Button>
            </FormControl>
          </form>
        </div>
      </Container>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    isFetching: state.registerReducer.isFetching,
    error: state.registerReducer.error
  };
}

export default connect(mapStateToProps, { registerUser })(Register);
