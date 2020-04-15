import React, { useState } from "react";

import { connect } from "react-redux";
import { registerUser } from "../../../redux/actions/RegisterActions";
import Title from "../Title";
import RegForm from "./form";
import { default_user, default_values } from "./defaults";
import handlers from "./handlers";
import { useContext } from "react";
import CredentialsContext from "../../../contexts/CredentialsContext";

import Container from "@material-ui/core/Container";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./registerStyle.css";

/**
 * `Register` is a convenience wrapper
 * around several components that comprise
 * the new user registration form.
 * @param {Object} props React component props
 * @returns <div className="register" .../>
 */
export const Register = (props) => {
  const { updateCredentials } = useContext(CredentialsContext);
  const [state, setState] = useState({
    user: { ...default_user },
    values: { ...default_values },
    confirmPass: { confirmPassword: "" },
  });

  const canSubmit = () => {
    const vals = Object.keys(state.values).filter((key) =>
      Object.keys(state.values[key]).includes("error")
    );
    const errs = vals.filter((value) => state.values[value].error === true);
    setState({
      ...state,
      values: { ...state.values, button: { disabled: errs.length > 0 } },
    });
    updateCredentials(state.user.email, state.user.password);
  };

  const handleSubmit = (e) =>
    handlers.handleSubmit({ e, state, setState, props });
  const handleConfirm = (e) => handlers.handleConfirm({ e, state, setState });
  const handleUserChange = (e) =>
    handlers.handleUserChange({ e, state, setState, canSubmit });

  return (
    <div className="register">
      <Container maxWidth="sm">
        <div style={{ backgroundColor: "#ffffff" }}>
          <Title title="Sign Up" />
          <RegForm
            rProps={props}
            rState={state}
            rConfirm={handleConfirm}
            rSubmit={handleSubmit}
            rUserChange={handleUserChange}
          />
        </div>
      </Container>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    isFetching: state.registerReducer.isFetching,
    error: state.registerReducer.error,
  };
}

export default connect(mapStateToProps, { registerUser })(Register);
