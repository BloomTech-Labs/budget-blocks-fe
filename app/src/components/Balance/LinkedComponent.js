import React from "react";
import { connect } from "react-redux";

const LinkedComponent = (props)=>{

    return(
        <div className="Balance">
            <div className="myBalance">
                <p>My Balance</p>
                <h3>{`$${props.balance}`}</h3>
            </div>
        </div>
    )
}

function mapStateToProps(state){
    return {
        balance:state.plaidReducer.Balance
    }
}

export default connect(mapStateToProps,{})(LinkedComponent)