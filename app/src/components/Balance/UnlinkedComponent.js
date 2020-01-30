import React from "react";
import LinkAccount from "../LinkAccount";
import plaidImg from "../../media/image/PlaidIcon.png";
const UnlinkedComponent = (props)=>{

    return(
        <div className="NoBalance">
            <LinkAccount/>
            <img src={plaidImg} className="plaidIcon" alt="Plaid Icon"/>
        </div>
    )
}

export default UnlinkedComponent