import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { registerUser } from "../redux/actions/RegisterActions";
import Title from "./Form_Components/Title";
import PasswordField from "./Form_Components/PasswordField";
import Account from "./Form_Components/Account"

import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import "../style/registerStyle.css";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";


export const Register = props => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [confirmPass, setConfirmPass] = useState({ confirmPassword: "" });
  const [values, setValues] = useState({
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
      props.registerUser(user, props.history);
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
          
          <Title title="Sign Up"/>

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

              <PasswordField 
                name="password" 
                placeholder="Password" 
                label="Password" 
                error={values.password.error}
                value={user.password}
                handleChange={handleChange}
                />

              <PasswordField 
                name="confirmPassword" 
                placeholder="Confirm Password" 
                label="Confirm Password" 
                error={values.password.error}
                value={confirmPass.confirmPassword}
                handleChange={handleConfirm}
                />

              <Account message="Already have an account?" link="/login"/>
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
