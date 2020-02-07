import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { registerUser } from "../redux/actions/RegisterActions";
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

export const Register = props => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [confirmPass, setConfirmPass] = useState({ confirmPassword: "" });
  const [values, setValues] = useState({
    showPassword: false,
    showConfirmPassword: false,
    password:{
      error:false,
      helperText:''
    },
    email:{
      error:false,
      helperText:''  
    },
    button:{
      disabled:false
    }
  });

  const handleChange = e => {

    setUser({ ...user, [e.target.name]: e.target.value });
    if(e.target.value.trim() === ""){
      setValues({...values, [e.target.name]:{
              error:true,
              helperText:`${e.target.name} is required`
          } 
      });
    }else{
      setValues({...values, [e.target.name]:{
              error:false,
              helperText:``
          } 
      });
    }
  };

  const handleConfirm = e => {
    setValues({...values, password:{
      error:false,
      helperText:``
      } 
    });

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
    if(user.email.trim() === "" && user.password.trim() === ""){
      setValues({...values, 
          email:{
              error:true,
              helperText:`email is required`
          },
          password:{
              error:true,
              helperText:`password is required`
          },
          button:{
              disabled:true
          }
      }); 
    }else if(user.email.trim() === ""){
      setValues({...values, 
          email:{
              error:true,
              helperText:`email is required`
          },
          button:{
              disabled:true
          }
      }); 
    }else if(user.password.trim()===""){
      setValues({...values, 
          password:{
              error:true,
              helperText:`password is required`
          },
          button:{
              disabled:true
          }
      }); 
    }else if (confirmPass.confirmPassword !== user.password) {
      setValues({...values, password:{
          error:true,
          helperText:`Password Mismatch`
        } 
      });
    } else {
      props.registerUser(user);
      setUser({ email: "", password: "" });
      setConfirmPass({ confirmPassword: "" });
      setValues({...values, password:{
          error:false,
          helperText:``
        } 
      });
    }
  };

  useEffect(()=>{
    if(values.password.error === false && values.email.error === false){
        setValues({...values, button:{disabled:false}})
    }else{
        setValues({...values, button:{disabled:true}})
    }
},[user]);

  return (
    <div className="register">
      <Container maxWidth="sm">
        <div style={{ backgroundColor: "#ffffff" }}>
          <div className="logo_name">
            <img src={logo} className="logo-reg" alt="logo" />
            <img src={budgetImg} className="name-reg" alt="budget_blocks" />
            <Typography variant="h2" className="sign">
              Sign Up
            </Typography>
          </div>

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
                helperText={values.password.helperText}
                error={values.password.error}
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
                error={values.password.error}
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
                helperText={values.password.helperText}
              />
              <div className="account">
                <Typography className="account">Already have an account?</Typography>
                <Link to="/login" className="links">Click <strong> here!</strong></Link>
              </div>
              <Button variant="outlined" className="signUpBtn" type="submit" disabled={values.button.disabled}>
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
