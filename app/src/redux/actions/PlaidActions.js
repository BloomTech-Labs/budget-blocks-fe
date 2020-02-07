import axios from "axios";
import {axiosWithAuth} from "../../components/AxiosWithAuth";

export const SEND_LINK_TOKEN_LOADING = "SEND_LINK_TOKEN_LOADING";
export const SEND_LINK_TOKEN_SUCCESS = "SEND_LINK_TOKEN_SUCCESS";
export const SEND_LINK_TOKEN_FAILED = "SEND_LINK_TOKEN_FAILED";

export const sendLinkLoading = () => ({ type: SEND_LINK_TOKEN_LOADING });
export const sendLinkSuccess = data => ({
    type: SEND_LINK_TOKEN_SUCCESS,
    payload: data
  });
export const sendLoginSuccess = () => ({
    type: SEND_LINK_TOKEN_SUCCESS
});
export const sendLinkFailed = error => ({
    type: SEND_LINK_TOKEN_FAILED,
    payload: error
});

export const GET_TRANS_LOADING = "GET_TRANS_LOADING";
export const GET_TRANS_SUCCESS = "GET_TRANS_SUCCESS";
export const GET_TRANS_FAILED = "GET_TRANS_FAILED";

export const getTransLoading = () => ({ type: GET_TRANS_LOADING });
export const getTransSuccess = data => ({
    type: GET_TRANS_SUCCESS,
    payload: data
  });
export const getTransFailed = error => ({
    type: GET_TRANS_FAILED,
    payload: error
});

export function sendLinkToken(token,userID){
    return function(dispatch) {
        dispatch(sendLinkLoading());
        return axiosWithAuth().post('https://cors-anywhere.herokuapp.com/https://lambda-budget-blocks.herokuapp.com/plaid/token_exchange',{publicToken:token, userid:userID})
            .then(response=>{
                console.log(response.data);
                dispatch(sendLinkSuccess(response.data))
                dispatch(sendLoginSuccess());
            })
            .catch(error=>{
                dispatch(sendLinkFailed(error)); 
            })
    
    }
}

export function getTransactions(userID){
    return function(dispatch) {
        dispatch(getTransLoading());
        // return axios.get(`https://lambda-budget-blocks.herokuapp.com/plaid/transactions/${userID}`,
        // )
        //     .then(response=>{
        //         dispatch(getTransSuccess(response.data))
        //     })
        //     .catch(error=>{
        //         if(error.response.status === 300 || error.response.status === 330){
        //              return setTimeout(function(){
        //                  dispatch(getTransactions(userID));
        //              },5000);
        //         }else{
        //             dispatch(getTransFailed(error)); 
        //         }
        //     })
        // }}

        return (
            dispatch(getTransSuccess({
                "categories": [
                    {
                        "id": 1,
                        "name": "Bank Fees",
                        "email": "test@gmail.com",
                        "budget": null,
                        "transactions": [],
                        "total": null
                    },
                    {
                        "id": 2,
                        "name": "Cash Advance",
                        "email": "test@gmail.com",
                        "budget": null,
                        "transactions": [],
                        "total": null
                    },
                    {
                        "id": 3,
                        "name": "Community",
                        "email": "test@gmail.com",
                        "budget": null,
                        "transactions": [],
                        "total": null
                    },
                    {
                        "id": 4,
                        "name": "Education",
                        "email": "test@gmail.com",
                        "budget": null,
                        "transactions": [],
                        "total": null
                    },
                    {
                        "id": 5,
                        "name": "Law Enforcement",
                        "email": "test@gmail.com",
                        "budget": null,
                        "transactions": [],
                        "total": null
                    },
                    {
                        "id": 6,
                        "name": "Religious",
                        "email": "test@gmail.com",
                        "budget": null,
                        "transactions": [],
                        "total": null
                    },
                    {
                        "id": 7,
                        "name": "Food and Drink",
                        "email": "test@gmail.com",
                        "budget": null,
                        "transactions": [
                            {
                                "id": 1,
                                "name": "Tectra Inc",
                                "amount": 500,
                                "payment_date": "2019-01-31",
                                "category_id": 7,
                                "user_id": 1
                            },
                            {
                                "id": 3,
                                "name": "KFC",
                                "amount": 500,
                                "payment_date": "2019-01-30",
                                "category_id": 7,
                                "user_id": 1
                            },
                            {
                                "id": 11,
                                "name": "McDonald's",
                                "amount": 12,
                                "payment_date": "2019-01-18",
                                "category_id": 7,
                                "user_id": 1
                            },
                            {
                                "id": 12,
                                "name": "Starbucks",
                                "amount": 4.33,
                                "payment_date": "2019-01-18",
                                "category_id": 7,
                                "user_id": 1
                            },
                            {
                                "id": 13,
                                "name": "SparkFun",
                                "amount": 89.4,
                                "payment_date": "2019-01-17",
                                "category_id": 7,
                                "user_id": 1
                            },
                            {
                                "id": 17,
                                "name": "Tectra Inc",
                                "amount": 500,
                                "payment_date": "2019-01-01",
                                "category_id": 7,
                                "user_id": 1
                            }
                        ],
                        "total": 1605.73
                    },
                    {
                        "id": 8,
                        "name": "Healthcare",
                        "email": "test@gmail.com",
                        "budget": null,
                        "transactions": [],
                        "total": null
                    },
                    {
                        "id": 9,
                        "name": "Interest",
                        "email": "test@gmail.com",
                        "budget": null,
                        "transactions": [],
                        "total": null
                    },
                    {
                        "id": 10,
                        "name": "Payment",
                        "email": "test@gmail.com",
                        "budget": null,
                        "transactions": [
                            {
                                "id": 2,
                                "name": "AUTOMATIC PAYMENT - THANK",
                                "amount": 2078.5,
                                "payment_date": "2019-01-30",
                                "category_id": 10,
                                "user_id": 1
                            },
                            {
                                "id": 5,
                                "name": "CREDIT CARD 3333 PAYMENT *//",
                                "amount": 25,
                                "payment_date": "2019-01-21",
                                "category_id": 10,
                                "user_id": 1
                            }
                        ],
                        "total": 2103.5
                    },
                    {
                        "id": 11,
                        "name": "Recreation",
                        "email": "test@gmail.com",
                        "budget": null,
                        "transactions": [
                            {
                                "id": 9,
                                "name": "Touchstone Climbing",
                                "amount": 78.5,
                                "payment_date": "2019-01-19",
                                "category_id": 11,
                                "user_id": 1
                            }
                        ],
                        "total": 78.5
                    },
                    {
                        "id": 12,
                        "name": "Service",
                        "email": "test@gmail.com",
                        "budget": null,
                        "transactions": [],
                        "total": null
                    },
                    {
                        "id": 13,
                        "name": "Automotive",
                        "email": "test@gmail.com",
                        "budget": null,
                        "transactions": [],
                        "total": null
                    },
                    {
                        "id": 14,
                        "name": "Cable",
                        "email": "test@gmail.com",
                        "budget": null,
                        "transactions": [],
                        "total": null
                    },
                    {
                        "id": 15,
                        "name": "Construction",
                        "email": "test@gmail.com",
                        "budget": null,
                        "transactions": [],
                        "total": null
                    },
                    {
                        "id": 16,
                        "name": "Financial",
                        "email": "test@gmail.com",
                        "budget": null,
                        "transactions": [],
                        "total": null
                    },
                    {
                        "id": 17,
                        "name": "Home Improvement",
                        "email": "test@gmail.com",
                        "budget": null,
                        "transactions": [],
                        "total": null
                    },
                    {
                        "id": 18,
                        "name": "Internet Services",
                        "email": "test@gmail.com",
                        "budget": null,
                        "transactions": [],
                        "total": null
                    },
                    {
                        "id": 19,
                        "name": "Utilities",
                        "email": "test@gmail.com",
                        "budget": null,
                        "transactions": [],
                        "total": null
                    },
                    {
                        "id": 20,
                        "name": "Shops",
                        "email": "test@gmail.com",
                        "budget": null,
                        "transactions": [
                            {
                                "id": 4,
                                "name": "Madison Bicycle Shop",
                                "amount": 500,
                                "payment_date": "2019-01-30",
                                "category_id": 20,
                                "user_id": 1
                            }
                        ],
                        "total": 500
                    },
                    {
                        "id": 21,
                        "name": "Tax",
                        "email": "test@gmail.com",
                        "budget": null,
                        "transactions": [],
                        "total": null
                    },
                    {
                        "id": 22,
                        "name": "Transfer",
                        "email": "test@gmail.com",
                        "budget": null,
                        "transactions": [
                            {
                                "id": 7,
                                "name": "ACH Electronic CreditGUSTO PAY 123456",
                                "amount": 5850,
                                "payment_date": "2019-01-20",
                                "category_id": 22,
                                "user_id": 1
                            },
                            {
                                "id": 8,
                                "name": "CD DEPOSIT .INITIAL.",
                                "amount": 1000,
                                "payment_date": "2019-01-20",
                                "category_id": 22,
                                "user_id": 1
                            },
                            {
                                "id": 14,
                                "name": "INTRST PYMNT",
                                "amount": -4.22,
                                "payment_date": "2019-01-16",
                                "category_id": 22,
                                "user_id": 1
                            }
                        ],
                        "total": 6845.78
                    },
                    {
                        "id": 23,
                        "name": "Travel",
                        "email": "test@gmail.com",
                        "budget": null,
                        "transactions": [
                            {
                                "id": 6,
                                "name": "Uber",
                                "amount": 5.4,
                                "payment_date": "2019-01-21",
                                "category_id": 23,
                                "user_id": 1
                            },
                            {
                                "id": 10,
                                "name": "United Airlines",
                                "amount": -500,
                                "payment_date": "2019-01-19",
                                "category_id": 23,
                                "user_id": 1
                            },
                            {
                                "id": 15,
                                "name": "United Airlines",
                                "amount": 500,
                                "payment_date": "2019-01-06",
                                "category_id": 23,
                                "user_id": 1
                            },
                            {
                                "id": 16,
                                "name": "Uber",
                                "amount": 6.33,
                                "payment_date": "2019-01-04",
                                "category_id": 23,
                                "user_id": 1
                            }
                        ],
                        "total": 11.729999999999977
                    },
                    {
                        "id": 24,
                        "name": "Real Estate",
                        "email": "test@gmail.com",
                        "budget": null,
                        "transactions": [],
                        "total": null
                    }
                ],
                "accounts": [
                    {
                        "account_id": "KbZedGV8bLfeZ5d89yBoix6V7PDeW1FVpnG4o",
                        "balances": {
                            "available": 100,
                            "current": 110,
                            "iso_currency_code": "USD",
                            "limit": null,
                            "unofficial_currency_code": null
                        },
                        "mask": "0000",
                        "name": "Plaid Checking",
                        "official_name": "Plaid Gold Standard 0% Interest Checking",
                        "subtype": "checking",
                        "type": "depository"
                    },
                    {
                        "account_id": "rr9LDA58r6f4L35pWdx6UgQ317E9qjslJoa39",
                        "balances": {
                            "available": 200,
                            "current": 210,
                            "iso_currency_code": "USD",
                            "limit": null,
                            "unofficial_currency_code": null
                        },
                        "mask": "1111",
                        "name": "Plaid Saving",
                        "official_name": "Plaid Silver Standard 0.1% Interest Saving",
                        "subtype": "savings",
                        "type": "depository"
                    },
                    {
                        "account_id": "zN94rR5yN6uvrkA1GxW5sn9RrgAdoJCoNqw4N",
                        "balances": {
                            "available": null,
                            "current": 1000,
                            "iso_currency_code": "USD",
                            "limit": null,
                            "unofficial_currency_code": null
                        },
                        "mask": "2222",
                        "name": "Plaid CD",
                        "official_name": "Plaid Bronze Standard 0.2% Interest CD",
                        "subtype": "cd",
                        "type": "depository"
                    },
                    {
                        "account_id": "Bp9qZ15epofJeERkXymbHMbkvGNxwPiwMZADo",
                        "balances": {
                            "available": null,
                            "current": 410,
                            "iso_currency_code": "USD",
                            "limit": 2000,
                            "unofficial_currency_code": null
                        },
                        "mask": "3333",
                        "name": "Plaid Credit Card",
                        "official_name": "Plaid Diamond 12.5% APR Interest Credit Card",
                        "subtype": "credit card",
                        "type": "credit"
                    },
                    {
                        "account_id": "33dWbzvl3ZtPMR9lp4KqiEJ9ePwBd5fqlPMdD",
                        "balances": {
                            "available": 43200,
                            "current": 43200,
                            "iso_currency_code": "USD",
                            "limit": null,
                            "unofficial_currency_code": null
                        },
                        "mask": "4444",
                        "name": "Plaid Money Market",
                        "official_name": "Plaid Platinum Standard 1.85% Interest Money Market",
                        "subtype": "money market",
                        "type": "depository"
                    },
                    {
                        "account_id": "xa5dq9Xba6IlKPg9kLa7fDn8PmexQwCn4NJdE",
                        "balances": {
                            "available": null,
                            "current": 320.76,
                            "iso_currency_code": "USD",
                            "limit": null,
                            "unofficial_currency_code": null
                        },
                        "mask": "5555",
                        "name": "Plaid IRA",
                        "official_name": null,
                        "subtype": "ira",
                        "type": "investment"
                    },
                    {
                        "account_id": "y45aKvbm46u1kj5VJ3QACKVDREGZQdCy65W7J",
                        "balances": {
                            "available": null,
                            "current": 23631.9805,
                            "iso_currency_code": "USD",
                            "limit": null,
                            "unofficial_currency_code": null
                        },
                        "mask": "6666",
                        "name": "Plaid 401k",
                        "official_name": null,
                        "subtype": "401k",
                        "type": "investment"
                    },
                    {
                        "account_id": "9PKv74w3Pou9QaD6XoMmckpEDbxjwLtRxnVXX",
                        "balances": {
                            "available": null,
                            "current": 65262,
                            "iso_currency_code": "USD",
                            "limit": null,
                            "unofficial_currency_code": null
                        },
                        "mask": "7777",
                        "name": "Plaid Student Loan",
                        "official_name": null,
                        "subtype": "student",
                        "type": "loan"
                    }
                ]})))}}
        
   

