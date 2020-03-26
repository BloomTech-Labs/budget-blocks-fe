import React, { useState, useEffect } from "react";

import { connect } from "react-redux";

import { registerUser } from "../../../redux/actions/RegisterActions";

import PasswordField from "../PasswordField";
import Account from "../Account";
import SpinnerLoading from "../SpinnerLoading";
import Title from "../Title";

import { CheckEmptyFields } from "../CheckEmpyFields";
import { ChangeCheckField } from "../ChangeCheckField";

import FormControl from "@material-ui/core/FormControl";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

import EmailField from "../EmailField";
import GenText from "../GenText";
import LANG from "../Lang";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./registerStyle.css";

const default_values = {
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
};
const default_user = { email: "", password: "", first_name: "", last_name: "" };

export const Register = props => {
  const [state, setState] = useState({
    user: { ...default_user },
    confirmPass: { confirmPassword: "" },
    values: { ...default_values }
  });

  const handleUserChange = e => {
    setState({
      ...state,
      user: { ...state.user, [e.target.name]: e.target.value },
      values: ChangeCheckField(e, state.values)
    });
  };

  const handleConfirm = e => {
    setState({
      ...state,
      values: {
        ...state.values,
        password: {
          error: false,
          helperText: ""
        }
      },
      confirmPass: { ...state.confirmPass, [e.target.name]: e.target.value }
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const check = CheckEmptyFields(state.user, state.values);
    if (check instanceof Object) {
      setState({ ...state, values: { ...check } });
    } else if (state.confirmPass.confirmPassword !== state.user.password) {
      setState({
        ...state,
        values: {
          ...state.values,
          password: {
            error: true,
            helperText: LANG.PW_MISMATCH
          }
        }
      });
    } else {
      props.registerUser(state.user, props.history);
      setState({
        ...state,
        user: { ...default_user },
        values: { ...default_values },
        confirmPass: { confirmPassword: "" }
      });
    }
  };

  useEffect(() => {
    if (
      state.values.password.error === false &&
      state.values.email.error === false
    ) {
      setState({
        ...state,
        values: { ...state.values, button: { disabled: false } }
      });
    } else {
      setState({
        ...state,
        values: { ...state.values, button: { disabled: true } }
      });
    }
  }, [state.user]);

  return (
    <div className="register">
      <Container maxWidth="sm">
        <div style={{ backgroundColor: "#ffffff" }}>
          <Title title="Sign Up" />

          <form className="RegisterForm" onSubmit={handleSubmit}>
            <FormControl variant="outlined">
              <EmailField
                values={state.values}
                handleChange={handleUserChange}
                user={state.user}
                fullWidth={true}
              />
              <GenText
                langKey="FIRST_NAME"
                handleChange={handleUserChange}
                value={state.user.first_name}
                error={state.values.first_name.error}
                helperText={state.values.first_name.helperText}
              />
              <GenText
                langKey="LAST_NAME"
                handleChange={handleUserChange}
                value={state.user.last_name}
                error={state.values.last_name.error}
                helperText={state.values.last_name.helperText}
              />
              <PasswordField
                name="password"
                placeholder={LANG.PASSWORD}
                label={LANG.PASSWORD}
                error={state.values.password.error}
                value={state.user.password}
                handleChange={handleUserChange}
                helperText={state.values.password.helperText}
              />
              <PasswordField
                name="confirmPassword"
                placeholder={LANG.CONFIRM_PW}
                label={LANG.CONFIRM_PW}
                error={state.values.password.error}
                value={state.confirmPass.confirmPassword}
                handleChange={handleConfirm}
              />
              <Account message={LANG.ALREADY_HAVE_ACCOUNT} link="/login" />
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
                disabled={state.values.button.disabled}
              >
                {props.isFetching ? <SpinnerLoading /> : <p>{LANG.SIGN_UP}</p>}
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
