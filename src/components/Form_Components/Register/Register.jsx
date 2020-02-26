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
    setUser({ ...user, [e.target.name]: e.target.value });
    setValues(ChangeCheckField(e, values));
  };

  const handleConfirm = e => {
    setValues({
      ...values,
      password: {
        error: false,
        helperText: ``
      }
    });

    setConfirmPass({ ...confirmPass, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const check = CheckEmptyFields(user, values);
    if (check instanceof Object) {
      setValues({ ...check });
    } else if (confirmPass.confirmPassword !== user.password) {
      setValues({
        ...values,
        password: {
          error: true,
          helperText: `Password Mismatch`
        }
      });
    } else {
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
    if (values.password.error === false && values.email.error === false) {
      setValues({ ...values, button: { disabled: false } });
    } else {
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
                {props.isFetching ? (
                  <Loader
                    type="Puff"
                    color="#00BFFF"
                    height={50}
                    width={50}
                    timeout={10000} //3 secs
                  />
                ) : (
                  <p>SignUp</p>
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
