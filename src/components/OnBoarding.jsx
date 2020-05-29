import React from 'react';
import axios from 'axios';
import { PlaidLink } from 'react-plaid-link';

const OnBoarding = () => {

  const onSuccess = (publicToken, metadata) => {
    console.log("public_token:", publicToken)
    console.log(metadata)
    axios.post(`https://budget-blocks-production-new.herokuapp.com/plaid/token_exchange/${1}`, {
      publicToken: publicToken,
    });
  };

  return (
    <PlaidLink
      clientName="Budget Blocks"
      env="sandbox"
      product={['transactions']}
      publicKey="7b47db1cfa540573d15cea302e5988"
      onSuccess={onSuccess}
    >
      Connect a bank account
    </PlaidLink>
  );
};

export default OnBoarding;
