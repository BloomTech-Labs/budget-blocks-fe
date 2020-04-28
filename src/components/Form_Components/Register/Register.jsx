import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
import { registerUser } from "../../../redux/actions/RegisterActions";
import Title from "../Title";
import RegForm from "./form";
import { default_user, default_values } from "./defaults";
import handlers from "./handlers";
import { useContext } from "react";
import CredentialsContext from "../../../contexts/CredentialsContext";

import { PageView } from "../../google_analytics/index.js";

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
  // const { updateCredentials } = useContext(CredentialsContext);

  const [state, setState] = useState({
    user: { ...default_user },
    values: { ...default_values },
    confirmPass: { confirmPassword: "" },
  });

  useEffect(() => {
    PageView();
  }, []);

  const canSubmit = () => {
    const vals = Object.keys(state.values).filter((key) =>
      Object.keys(state.values[key]).includes("error")
    );
    const errs = vals.filter((value) => state.values[value].error === true);
  };

  const handleSubmit = (e) =>
    handlers.handleSubmit({ e, state, setState, props });
  const handleConfirm = (e) => handlers.handleConfirm({ e, state, setState });
  const handleUserChange = (e) =>
    handlers.handleUserChange({ e, state, setState, canSubmit });

  return (
    <div>
      <Container maxWidth="sm">
        <div className="register" style={{ backgroundColor: "#ffffff" }}>
          <Title title="Create Profile" />
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
