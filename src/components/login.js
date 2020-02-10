import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { loginUser } from "../redux/actions/LoginActions";
import Title from "./Form_Components/Title";
import PasswordField from "./Form_Components/PasswordField";
import Account from "./Form_Components/Account";

import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import "../style/loginStyle.css";

import { Link } from "react-router-dom";

export const Login = (props)=>{
    const [user,setUser] = useState({ email: "" , password: "" });

    const handleChange= (e) =>{
        setUser({...user, [e.target.name]:e.target.value.trim() });
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
    }

    const handleSubmit = (e) =>{
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
        }else{
            props.loginUser(user, props.history)
            setUser({ email: "" , password: "" });
        }
    }

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

    useEffect(()=>{
        if(values.password.error === false && values.email.error === false){
            setValues({...values, button:{disabled:false}})
        }else{
            setValues({...values, button:{disabled:true}})
        }
    },[user]);


    return(

    <div className="SignIn" >

        <Title title="Sign In"/>

        <form className="SignInForm" onSubmit={handleSubmit}>
        
            <FormControl variant="filled">
                <Typography className="label">E-Mail Address</Typography>
                <TextField
                    error={values.email.error}
                    helperText={values.email.helperText}
                    placeholder="E-Mail Address"
                    type="text"
                    name="email" 
                    onChange={handleChange} 
                    value={user.email} 
                    variant="outlined"
                />
            </FormControl>

            <PasswordField 
                name="password" 
                placeholder="Password" 
                label="Password" 
                error={values.password.error}
                value={user.password}
                handleChange={handleChange}
                />
            <Account message="Need an account?" link="/register"/>
            <Button variant="outlined" className="signInBtn" type="submit" disabled={values.button.disabled}>
                Sign In
            </Button>
        </form>
    </div>

    )
}

function mapStateToProps(state){
    return {
        error:state.error
    }
}

export default connect(mapStateToProps,{ loginUser })(Login)