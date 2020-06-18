import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import BudgetCard from './BudgetCategoryCard'


const customStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    maxWidth: '400px',
    

  },
  title: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '12px',
    lineHeight: '18px',
    color: '#13B9AC',
  },
  description: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '12px',
    lineHeight: '27px',
    paddingLeft: '5%'
  },
  CTA:{
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '16px',
    lineHeight: '24px',
    paddingLeft: '5%'
  }
  
 
}));

const Totals = () => {
    const [totals, setTotals] = useState([]);
    const [trans, setTrans] = useState([]);
    const classes = customStyles();
    
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

          setTotals(Object.entries(res.data.totals))
          setTrans(res.data.transactions)
      })

    }, []); 

    console.log(trans)
    
    return(

        <div className={classes.root}>
            <h1 className={classes.title}>Build Your Budget</h1>
            <p className={classes.description}>All of your linked bank account transactions are automatically sorted into basic categories.</p>
            <p className={classes.CTA}>Set your budget goals for basic exspenses</p>
            <div className={classes.root}>
              {totals.map((arr) => (
                <BudgetCard
                  catName={arr[0]}
                  catValue={arr[1]}
                />

              ))}
            </div>
        </div>
    )


}

export default Totals;