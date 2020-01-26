import React, { useState } from "react"
import { connect } from "react-redux"
import { registerUser } from "../redux/actions"

const Register = (props)=>{
    const [user,setUser] = useState({ email: "" , password: "" });

    const handleChange= (e) =>{
        setUser({...user, [e.target.name]:e.target.value })
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        props.registerUser(user)
        setUser({ email: "" , password: "" })
    }

    return(

    <div className="login" onSubmit={handleSubmit}>
        <h2>Register</h2>
        <form className="LoginForm">
        <input type= "text" 
            name="email" 
            onChange={handleChange} 
            value={user.email} 
            placeholder="Enter email"
        />
        <input type= "text" 
            name="password" 
            onChange={handleChange} 
            value={user.password} 
            placeholder="Enter Password"
        />
        <button>SignUp</button>
        </form>
    </div>

    )
}

function mapStateToProps(state){
    return {

    }
}

export default connect(mapStateToProps,{ registerUser })(Register)