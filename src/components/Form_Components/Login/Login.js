import React, { useState, useEffect } from "react";
import { Redirect} from "react-router-dom";

import { connect } from "react-redux";
import { loginUser } from "../../../redux/actions/LoginActions";
import Title from "../Title";
import EmailField from "../EmailField";
import PasswordField from "../PasswordField";
import SpinnerLoading from "../SpinnerLoading";
import Account from "../Account";
import { CheckEmptyFields } from "../CheckEmpyFields";
import { ChangeCheckField } from "../ChangeCheckField";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import {PageView} from "../../google_analytics/index.js"

import LANG from "../Lang";
import "./loginStyle.css";



const default_values = {
  showPassword: false,
  password: {
    error: false,
    helperText: "",
  },
  email: {
    error: false,
    helperText: "",
  },
  button: {
    disabled: false,
  },
};
const default_user = { email: "", password: "" };

/**
 * Login (React Component)
 * @param {*} props
 * @renders login page
 */
export const Login = (props) => {
  const [state, setState] = useState({
    values: { ...default_values },
    user: { ...default_user },
  });

  const [initial, setinitial] = useState(sessionStorage.getItem('token'));

  useEffect(() =>{
    PageView()
  })
  useEffect(() => {
    if (
      state.values.password.error === false &&
      state.values.email.error === false
    ) {
      setState({
        ...state,
        values: { ...state.values, button: { disabled: false } },
      });
    } else {
      setState({
        ...state,
        values: { ...state.values, button: { disabled: true } },
      });
    }
  }, [state.user]); // refactor this useEffect?

  const handleChange = (e) => {
    setState({
      user: { ...state.user, [e.target.name]: e.target.value.trim() },
      values: ChangeCheckField(e, state.values),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const check = CheckEmptyFields(state.user, state.values);
    if (check instanceof Object) {
      setState({ ...state, values: { ...check } });
    } else {
      props.loginUser(state.user, props.history);
      setState({ ...state, user: { email: "", password: "" } });
    }
  };

  return (
    <div className="SignIn">
      {initial ? (<Redirect to="/onBoard/1" />) : (
      <Container maxWidth="sm">
        <Title title={LANG.SIGN_IN} titleClass="SignInTitle" />

        <form className="SignInForm" onSubmit={handleSubmit}>
          <div className="inputText">
            <EmailField
              values={state.values}
              handleChange={handleChange}
              user={state.user}
              fullWidth={true}
            />
            <PasswordField
              name="password"
              placeholder={LANG.PASSWORD}
              label={LANG.PASSWORD}
              error={state.values.password.error}
              value={state.user.password}
              handleChange={handleChange}
              helperText={state.values.password.helperText}
            />
          </div>
          <Account message={LANG.NEED_AN_ACCOUNT} link="/register" />

          {props.error ? (
            <p style={{ display: "inline" }} className="errorMessage">
              {/*props.error*/}
            </p>
          ) : (
            <p className="errorMessage"></p>
          )}
          <Button
            variant="outlined"
            className="signInBtn"
            type="submit"
            fullWidth={true}
            small="small"
            disabled={state.values.button.disabled}
          >
            {props.isFetching ? <SpinnerLoading /> : <p>{LANG.SIGN_IN}</p>}
          </Button>
        </form>
      </Container>
       )}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    isFetching: state.loginReducer.isFetching,
    error: state.loginReducer.error,
  };
}

export default connect(mapStateToProps, { loginUser })(Login);
