import React from "react";
import PlaidLink from 'react-plaid-link';


const LinkAccount = (props)=>{
    function handleOnSuccess(token, metadata) {
        // send token to client server
      }
    function handleOnExit() {
        // handle the case when your user exits Link
      }

    return(
        <div className="LinkAccount">
            <PlaidLink
                clientName="Budget Blocks"
                env="sandbox"
                product={["auth", "transactions"]}
                publicKey={process.env.REACT_APP_PUBLIC_KEY}
                onExit={handleOnExit}
                onSuccess={handleOnSuccess}>
                Open Link and connect your bank!
            </PlaidLink> 
        </div>
    )
}

export default LinkAccount;