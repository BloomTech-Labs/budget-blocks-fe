import React, { useState } from "react"
import { connect } from "react-redux"

const Login = (props)=>{
    const [user,setUser] = useState({ username: "" , password: "" });

    const handleChange= (e) =>{
        setUser({...user, [e.target.name]:e.target.value })
    }

    return(

    <div className="login" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <form className="LoginForm">
        <input type= "text" 
            name="username" 
            onChange={handleChange} 
            value={user.username} 
            placeholder="Enter Username"
        />
        <input type= "text" 
            name="password" 
            onChange={handleChange} 
            value={user.password} 
            placeholder="Enter Password"
        />
        <button>Login</button>
        </form>
    </div>

    )
}

function mapStateToProps(state){
    return {

    }
}

export default connect(mapStateToProps,{})(Login)