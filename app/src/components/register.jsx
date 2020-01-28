import React, { useState } from "react";
import { connect } from "react-redux";
import { registerUser } from "../redux/actions";
import logo from "../media/image/logo.jpg";
import budgetImg from "../media/image/budget_blocks.png";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import "../style/registerStyle.css";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";

const Register = props => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [confirmPass, setConfirmPass] = useState({ confirmPassword: "" });
  const [mismatch, setMismatch] = useState({ errorText: "", change: false });
  const [values, setValues] = useState({
    showPassword: false,
    showConfirmPassword: false
  });

  const handleChange = e => {
    setMismatch({ errorText: "", change: false });

    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleConfirm = e => {
    setMismatch({ errorText: "", change: false });
    setConfirmPass({ ...confirmPass, [e.target.name]: e.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handleClickShowConfirm = () => {
    setValues({ ...values, showConfirmPassword: !values.showConfirmPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (confirmPass.confirmPassword !== user.password) {
      setMismatch({ errorText: "Password Mismatch", change: true });
    } else {
      props.registerUser(user);
      setUser({ email: "", password: "" });
      setConfirmPass({ confirmPassword: "" });
      setMismatch({ errorText: "", change: false });
      //TODO work on this part for proper redirection if account successfully created
      // props.history.push("/login")
    }
  };

  return (
    <div className="register" onSubmit={handleSubmit}>
      <Container maxWidth="sm">
        <div style={{ backgroundColor: "#ffffff" }}>
          <div className="logo_name">
            <img src={logo} className="logo-reg" alt="logo" />
            <img src={budgetImg} className="name-reg" alt="budget_blocks" />
            <Typography variant="h2" className="sign">
              Sign Up
            </Typography>
          </div>

          <form className="RegisterForm">
            <FormControl variant="outlined">
              <Typography className="label">Email Address</Typography>
              <TextField
                id="outlined-basic"
                placeholder="Email Address"
                variant="outlined"
                type="email"
                name="email"
                onChange={handleChange}
                value={user.email}
              />
              <div className="password">
                <Typography className="label">Password</Typography>
              </div>

              <TextField
                placeholder="password"
                type={values.showPassword ? "text" : "password"}
                onChange={handleChange}
                value={user.password}
                name="password"
                variant="outlined"
                helperText={mismatch.errorText}
                error={mismatch.change}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
              <div className="confirmPassword">
                <Typography className="label">Confirm Password</Typography>
              </div>

              <TextField
                variant="outlined"
                placeholder=" Confirm password"
                type={values.showConfirmPassword ? "text" : "password"}
                onChange={handleConfirm}
                value={confirmPass.confirmPassword}
                name="confirmPassword"
                error={mismatch.change}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowConfirm}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showConfirmPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
                helperText={mismatch.errorText}
              />
              <div className="account">
                <Typography className="account">Already have an account?</Typography>
                <Link to="/login" className="links">Click <strong> here!</strong></Link>
              </div>
              <Button variant="outlined" className="signUpBtn" type="submit">
                Sign Up
              </Button>
            </FormControl>
          </form>
        </div>
      </Container>
    </div>
  );
};

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, { registerUser })(Register);
