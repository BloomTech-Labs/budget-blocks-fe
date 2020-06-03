import React from 'react';
import axios from 'axios';
import { PlaidLink } from 'react-plaid-link';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

const BankLink = () => {
  const onSuccess = (publicToken, metadata) => {
    const HOST = process.env.REACT_APP_SERVER_HOST;

    console.log('public_token:', publicToken);
    console.log(metadata);

    axios.post(`${HOST}/plaid/token_exchange/${1}`, {
      publicToken: publicToken,
    });
  };

  return (
    <div>
      <Link to='/dashboard'>
        <Button color='secondary' variant='contained'>
          dashboard
        </Button>
      </Link>
      <PlaidLink
        clientName='Budget Blocks'
        env='sandbox'
        product={['transactions']}
        publicKey='7b47db1cfa540573d15cea302e5988'
        onSuccess={onSuccess}
      >
        <Button color='primary' variant='contained'>
          Connect a bank account
        </Button>
      </PlaidLink>
    </div>
  );
};

export default BankLink;
