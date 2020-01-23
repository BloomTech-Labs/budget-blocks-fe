import React from "react"
import { connect } from "react-redux"

const Login = (props)=>{
    return(

    <div className="login">
        <h2>Login</h2>

    </div>

    )
}

function mapStateToProps(state){
    return {

    }
}

export default connect(mapStateToProps,{})(Login)