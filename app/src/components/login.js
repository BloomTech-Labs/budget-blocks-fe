import React, { useState } from "react";
import { connect } from "react-redux";
import { loginUser } from "../redux/actions";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";

const Login = (props)=>{
    const [user,setUser] = useState({ email: "" , password: "" });

    const handleChange= (e) =>{
        setUser({...user, [e.target.name]:e.target.value })
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        props.loginUser(user)
        setUser({ email: "" , password: "" })
    }

    const [values, setValues] = useState({
        showPassword: false,
        showConfirmPassword: false
      });

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };
    const handleMouseDownPassword = event => {
        event.preventDefault();
    };

    return(

    <div className="SignIn" onSubmit={handleSubmit}>
        <h2>Sign In</h2>
        <form className="SignInForm">
        
            <FormControl variant="filled">
                <Typography className="label">E-Mail Address</Typography>
                <TextField
                    placeholder="E-Mail Address"
                    type="text"
                    name="email" 
                    onChange={handleChange} 
                    value={user.email} 
                    variant="outlined"
                />
            </FormControl>

            <FormControl variant="filled">
                <Typography className="label">Password</Typography>
                <TextField
                    placeholder="Password"
                    type={values.showPassword ? "text" : "password"}
                    onChange={handleChange}
                    value={user.password}
                    name="password"
                    variant="outlined"
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
            </FormControl>

            <button>Sign In</button>
        </form>
    </div>

    )
}

function mapStateToProps(state){
    return {

    }
}

export default connect(mapStateToProps,{ loginUser })(Login)