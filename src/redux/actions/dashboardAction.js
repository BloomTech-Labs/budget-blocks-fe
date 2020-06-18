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
      axios
        .post(`https://api.budgetblocks.org/transaction`, res.data)
        .then((categorizedTransactions) => {
          //FIXME Delete after testing
          // console.log('ds res: ', res);
          console.log('DS API action res: ', categorizedTransactions);

          dispatch({
            type: FETCH_TRANS_SUCCESS,
            payload: categorizedTransactions.data.transactions,
          });
        })
        .catch((err) => {
          console.log('error', err);
        });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: FETCH_TRANS_FAIL, payload: err });
    });
};
