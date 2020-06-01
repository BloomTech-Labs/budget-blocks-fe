import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BankAccountsPage = () => {
  const [bankAccounts, setBankAccounts] = useState(null);

  useEffect(() => {
    const userId = 1;
    axios
      .get(
        `https://budget-blocks-production-new.herokuapp.com/plaid/accessToken/${userId}`
      )
      .then((res) => {
        setBankAccounts(res.data);
      });
  }, []);

  return (
    <div>
      {!bankAccounts && <p>Loading...</p>}
      {bankAccounts &&
        bankAccounts.data.map((item) => (
          <p>
            {item.id}
            <br />
            {item.access_token}
          </p>
        ))}
    </div>
  );
};

export default BankAccountsPage;
