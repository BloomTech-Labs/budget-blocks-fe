import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
import { registerUser } from "../../../redux/actions/RegisterActions";
import Title from "../Title";
import RegForm from "./form";
import { default_user, default_values } from "./defaults";
import handlers from "./handlers";

import Container from "@material-ui/core/Container";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./registerStyle.css";

export const Register = props => {
  const [state, setState] = useState({
    user: { ...default_user },
    values: { ...default_values },
    confirmPass: { confirmPassword: "" }
  });
  const canSubmit = () => {
    const isDisabled = !(
      state.values.password.error === false &&
      state.values.email.error === false
    );
    setState({
      ...state,
      values: { ...state.values, button: { disabled: isDisabled } }
    });
  };
  const handleSubmit = e =>
    handlers.handleSubmit({ e, state, setState, props });
  const handleConfirm = e => handlers.handleConfirm({ e, state, setState });
  const handleUserChange = e =>
    handlers.handleUserChange({ e, state, setState });
  useEffect(() => {
    canSubmit();
  }, [state.user]);

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
    error: state.registerReducer.error
  };
}

export default connect(mapStateToProps, { registerUser })(Register);
