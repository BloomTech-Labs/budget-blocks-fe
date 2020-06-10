import axios from 'axios';

const SERVER_HOST = process.env.REACT_APP_SERVER_HOST;

const user_id = window.localStorage.getItem('user_id');

export const FETCH_TRANS_DATA = 'FETCH_DATA';
export const FETCH_TRANS_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_TRANS_FAIL = 'FETCH_FAIL';
export const fetchTransactions = () => (dispatch) => {
  axios
    .get(`${SERVER_HOST}/plaid/userTransactions/${user_id}`)
    .then((res) => {
      console.log(res.data);
      dispatch({ type: FETCH_TRANS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: FETCH_TRANS_FAIL, payload: err });
    });
};
