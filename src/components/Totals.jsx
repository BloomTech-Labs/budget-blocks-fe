import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';

const customStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
  },
  values: {
    paddingLeft: '5%',
  }

}));

const Totals = () => {
    const [totalNames, setTotalNames] = useState([]);
    const [totalValues, setTotalValues] = useState([])
    const classes = customStyles();
    const [transactions, setTransactions] = useState([]);
    
    useEffect(() => {

      axios.post('https://api.budgetblocks.org/transaction',
    {
        "transactions": [
          {
            "account_id": "k9VvjL1Eq3Cnk8gaQXDXt3aRVe7DaGiWekXgz",
            "account_owner": 0,
            "amount": 25,
            "authorized_date": 0,
            "category": [
              "Payment",
              "Credit Card"
            ],
            "category_id": "16001000",
            "date": "2020-05-15",
            "iso_currency_code": "USD",
            "location": {
              "address": 0,
              "city": 0,
              "country": 0,
              "lat": 0,
              "lon": 0,
              "postal_code": 0,
              "region": 0,
              "store_number": 0
            },
            "name": "CREDIT CARD",
            "payment_channel": "other",
            "payment_meta": {
              "by_order_of": 0,
              "payee": 0,
              "payer": 0,
              "payment_method": 0,
              "payment_processor": 0,
              "ppd_id": 0,
              "reason": 0,
              "reference_number": 0
            },
            "pending": false,
            "pending_transaction_id": 0,
            "transaction_code": 0,
            "transaction_id": "47E1jBQLoNhA6ajvnLeLCX4NwvKQmnFd7wQ8K",
            "transaction_type": "special",
            "unofficial_currency_code": 0
          },
          {
            "account_id": "k9VvjL1Eq3Cnk8gaQXDXt3aRVe7DaGiWekXgz",
            "account_owner": 0,
            "amount": 125,
            "authorized_date": 0,
            "category": [
              "Payment",
              "Credit Card"
            ],
            "category_id": "16001000",
            "date": "2020-05-15",
            "iso_currency_code": "USD",
            "location": {
              "address": 0,
              "city": 0,
              "country": 0,
              "lat": 0,
              "lon": 0,
              "postal_code": 0,
              "region": 0,
              "store_number": 0
            },
            "name": "DEBIT",
            "payment_channel": "other",
            "payment_meta": {
              "by_order_of": 0,
              "payee": 0,
              "payer": 0,
              "payment_method": 0,
              "payment_processor": 0,
              "ppd_id": 0,
              "reason": 0,
              "reference_number": 0
            },
            "pending": false,
            "pending_transaction_id": 0,
            "transaction_code": 0,
            "transaction_id": "47E1jBQLoNhA6ajvnLeLCX4NwvKQmnFd7wQ8K",
            "transaction_type": "special",
            "unofficial_currency_code": 0
          },
          {
            "account_id": "k9VvjL1Eq3Cnk8gaQXDXt3aRVe7DaGiWekXgz",
            "account_owner": 0,
            "amount": 225,
            "authorized_date": 0,
            "category": [
              "Payment",
              "Credit Card"
            ],
            "category_id": "16001000",
            "date": "2020-05-15",
            "iso_currency_code": "USD",
            "location": {
              "address": 0,
              "city": 0,
              "country": 0,
              "lat": 0,
              "lon": 0,
              "postal_code": 0,
              "region": 0,
              "store_number": 0
            },
            "name": "CREDIT CARD 3333",
            "payment_channel": "other",
            "payment_meta": {
              "by_order_of": 0,
              "payee": 0,
              "payer": 0,
              "payment_method": 0,
              "payment_processor": 0,
              "ppd_id": 0,
              "reason": 0,
              "reference_number": 0
            },
            "pending": false,
            "pending_transaction_id": 0,
            "transaction_code": 0,
            "transaction_id": "47E1jBQLoNhA6ajvnLeLCX4NwvKQmnFd7wQ8K",
            "transaction_type": "special",
            "unofficial_currency_code": 0
          },
          {
            "account_id": "k9VvjL1Eq3Cnk8gaQXDXt3aRVe7DaGiWekXgz",
            "account_owner": 0,
            "amount": 25,
            "authorized_date": 0,
            "category": [
              "Payment",
              "Credit Card"
            ],
            "category_id": "16001000",
            "date": "2020-05-15",
            "iso_currency_code": "USD",
            "location": {
              "address": 0,
              "city": 0,
              "country": 0,
              "lat": 0,
              "lon": 0,
              "postal_code": 0,
              "region": 0,
              "store_number": 0
            },
            "name": "CREDIT CARD 3388",
            "payment_channel": "other",
            "payment_meta": {
              "by_order_of": 0,
              "payee": 0,
              "payer": 0,
              "payment_method": 0,
              "payment_processor": 0,
              "ppd_id": 0,
              "reason": 0,
              "reference_number": 0
            },
            "pending": false,
            "pending_transaction_id": 0,
            "transaction_code": 0,
            "transaction_id": "47E1jBQLoNhA6ajvnLeLCX4NwvKQmnFd7wQ8K",
            "transaction_type": "special",
            "unofficial_currency_code": 0
          }
        ],
        "user_id": 1
      }
    
    )
    .then((res) => {

        console.log(res.data.transactions)
        console.log('totals', res.data.totals)
        console.log('here are the keys', Object.keys(res.data.totals))
        console.log('here are the values', Object.values(res.data.totals))
        console.log('entries', Object.entries(res.data.totals))
        setTotalNames(Object.keys(res.data.totals))
        console.log(res.data.totals.Income)
        setTotalValues(res.data.totals.Income)
        setTransactions(res.data.transactions)
        
    })

    


    }, []); 

    
    return(

        <div>
            <h1>Displaying totals from DS</h1>
            <br></br>
            <br></br>
            <div className={classes.root}>
              <div>
                  Here are the total names:
                  {
                      totalNames.map((value, index) => 
                          <p key={index}>{value}</p>
                      )
                  }
              </div>
              
            </div>
            <br></br>
            <div>
              <h2>Transactions List:</h2>
              {
                transactions.map((value, index) =>
                  <p>
                    Transaction Name: {value.name}
                    <br></br>
                    Transaction Amount: {value.amount}
                  
                  </p> 
                  
                )

        

              }
              <br>
              </br>
              <p>Income: {totalValues}</p>
            </div>
            

        </div>
    )


}

export default Totals;