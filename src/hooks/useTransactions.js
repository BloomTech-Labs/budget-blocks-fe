import { useState, useEffect } from 'react'
import axios from 'axios';

const SERVER_HOST = process.env.REACT_APP_SERVER_HOST;

const user_id = window.localStorage.getItem('user_id');

export const useTransactions = (key, initialState) => {

    const [category, setCategory] = useState()
    const [value, setValue] = useState()

    useEffect(() => {
        axios
            .get(`${SERVER_HOST}/plaid/userTransactions/${user_id}`)
            .then(res => {
                axios
                    .post(`https://api.budgetblocks.org/transaction`, res.data)
                    .then(res => {
                        setCategory(Object.keys(res.data.totals))
                        setValue(Object.values(res.data.totals))
                    })
                    .catch(err => {
                        console.log("DS Trans", err.message)
                    })
            })
            .catch(err => {
                console.log("plaid_trans", err.message)
            })
      }, []);

      return [category, value]
}