import React from "react";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import PasswordField from "../PasswordField";
import Account from "../Account";
import SpinnerLoading from "../SpinnerLoading";
import EmailField from "../EmailField";
import GenText from "../GenText";
import LANG from "../Lang";

/**
 * `RegForm` is a convenience wrapper
 * around several components that comprise
 * the new user registration form.
 * @param {Object} rProps React component props
 * @param {Object} rState React component state
 * @param {Function} rConfirm callback => validate
 * @param {Function} rSubmit callback => validate & submit
 * @param {Function} rUserChange callback => validate & update
 * @returns <form className="RegisterForm" ... />
 */
const RegForm = ({
  rProps: props,
  rState: state,
  rConfirm: handleConfirm,
  rSubmit: handleSubmit,
  rUserChange: handleUserChange,
}) => {
  return (
    <form className="RegisterForm" onSubmit={handleSubmit}>
      <FormControl variant="outlined">
        <EmailField
          id="email"
          values={state.values}
          handleChange={handleUserChange}
          user={state.user}
          fullWidth={true}
        />
        <GenText
          id="firstName"
          langKey="FIRST_NAME"
          handleChange={handleUserChange}
          value={state.user.first_name}
          error={state.values.first_name.error}
          helperText={state.values.first_name.helperText}
        />
        <GenText
          id="lastName"
          langKey="LAST_NAME"
          handleChange={handleUserChange}
          value={state.user.last_name}
          error={state.values.last_name.error}
          helperText={state.values.last_name.helperText}
        />
        <PasswordField
          id="password"
          name="password"
          placeholder={LANG.PASSWORD}
          label={LANG.PASSWORD}
          error={state.values.password.error}
          value={state.user.password}
          handleChange={handleUserChange}
          helperText={state.values.password.helperText}
        />
        <PasswordField
          id="confirmPassword"
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
          id="formButton"
          variant="outlined"
          className="signUpBtn"
          type="submit"
          disabled={state.values.button.disabled}
        >
          {props.isFetching ? <SpinnerLoading /> : <p>{LANG.SIGN_UP}</p>}
        </Button>
      </FormControl>
    </form>
  );
};

export default RegForm;
