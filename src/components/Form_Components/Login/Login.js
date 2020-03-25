import React, { useState, useEffect } from "react";
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

import LANG from "../Lang";
import "./loginStyle.css";
export const Login = props => {
  const [user, setUser] = useState({ email: "", password: "" });

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value.trim() });
    setValues(ChangeCheckField(e, values));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const check = CheckEmptyFields(user, values);
    if (check instanceof Object) {
      setValues({ ...check });
    } else {
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
    if (values.password.error === false && values.email.error === false) {
      setValues({ ...values, button: { disabled: false } });
    } else {
      setValues({ ...values, button: { disabled: true } });
    }
  }, [user]); // refactor?

  return (
    <div className="SignIn">
      <Container>
        <Title title={LANG.SIGN_IN} titleClass="SignInTitle" />

        <form className="SignInForm" onSubmit={handleSubmit}>
          <div className="inputText">
            <EmailField
              values={values}
              handleChange={handleChange}
              user={user}
              fullWidth={true}
            />
            <PasswordField
              name="password"
              placeholder={LANG.PASSWORD}
              label={LANG.PASSWORD}
              error={values.password.error}
              value={user.password}
              handleChange={handleChange}
              helperText={values.password.helperText}
            />
          </div>
          <Account message={LANG.NEED_AN_ACCOUNT} link="/register" />

          {props.error ? (
            <p style={{ display: "inline" }} className="errorMessage">
              {props.error}
            </p>
          ) : (
            <p className="errorMessage"></p>
          )}
          <Button
            variant="outlined"
            className="signInBtn"
            type="submit"
            disabled={values.button.disabled}
          >
            {props.isFetching ? <SpinnerLoading /> : <p>{LANG.SIGN_IN}</p>}
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
