import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { loginUser } from "../../../redux/actions/LoginActions";
import Title from "../Title";
import PasswordField from "../PasswordField";
import Account from "../Account";
import { CheckEmptyFields } from "../CheckEmpyFields";
import { ChangeCheckField } from "../ChangeCheckField";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import "./loginStyle.css";
import Container from "@material-ui/core/Container";
import Loader from "react-loader-spinner";

export const Login = props => {
  // This Component creates the login form. Two Fields: email and password
  // user is used to save form data for submission.

  // values is an object that has objects for each part of the form
  // each object in values are just details for the field such as making email and password error with a message or the submit button disable 
  const [user, setUser] = useState({ email: "", password: "" });

  const handleChange = e => {
    // updates for data with new entry. removes any spaces at the begining and end of the string. 
    setUser({ ...user, [e.target.name]: e.target.value.trim() });
    // updates form field with error and message accordingly
    setValues(ChangeCheckField(e, values));
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
    } else {
      // if no object returned: call loginUser action from redux to login
      props.loginUser(user, props.history);
      setUser({ email: "", password: "" });
    }
  };

  const [values, setValues] = useState({
    showPassword: false,
    password: {
      error: false,
      helperText: ""
    },
    email: {
      error: false,
      helperText: ""
    },
    button: {
      disabled: false
    }
  });

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
      
    <div className="SignIn">
      <Container maxWidth="sm">
        <Title title="Sign In" />

        <form className="SignInForm" onSubmit={handleSubmit}>
          <FormControl variant="filled">
            <Typography className="label">E-Mail Address</Typography>
            <TextField
              error={values.email.error}
              helperText={values.email.helperText}
              placeholder="E-Mail Address"
              type="text"
              name="email"
              onChange={handleChange}
              value={user.email}
              variant="outlined"
            />
          </FormControl>

          <PasswordField
            name="password"
            placeholder="Password"
            label="Password"
            error={values.password.error}
            value={user.password}
            handleChange={handleChange}
            helperText={values.password.helperText}
          />
          <Account message="Need an account?" link="/register" />
          {
                props.error?<p style={{display: "inline"}} className="errorMessage">{props.error}</p>:<p className="errorMessage"></p>
              }
          <Button
            variant="outlined"
            className="signInBtn"
            type="submit"
            disabled={values.button.disabled}
          >
            {/* If the form is submitting data for login, the button will change from 'Sign In' to a loading animation */}
            {props.isFetching ? (
              <Loader
                type="Puff"
                color="#00BFFF"
                height={50}
                width={50}
                timeout={10000} //3 secs
              />
            ) : (
              <p>Sign In</p>
            )}
          </Button>
        </form>
      </Container>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    isFetching: state.loginReducer.isFetching,
    error: state.loginReducer.error
  };
}

export default connect(mapStateToProps, { loginUser })(Login);
