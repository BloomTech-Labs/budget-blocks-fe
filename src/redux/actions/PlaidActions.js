import { axiosWithAuth } from "../../components/AxiosWithAuth";

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

export function sendLinkToken(token, userID) {
  // This function is used in LinkAccount.js
  // When signing in their bank account is successful this function will run to give back end the plaid token to set up categories and transactions for the user.
  return function(dispatch) {
    dispatch(sendLinkLoading());
    return axiosWithAuth()
      .post(
        "https://cors-anywhere.herokuapp.com/https://lambda-budget-blocks.herokuapp.com/plaid/token_exchange",
        { publicToken: token, userid: userID }
      )
      .then(response => {
        dispatch(sendLinkSuccess(response.data));
        dispatch(sendLoginSuccess());
      })
      .catch(error => {
        dispatch(sendLinkFailed(error));
      });
  };
}

export function getTransactions(userID) {
  // This function is used on Dashboard.js to get categories and their transactions
  // back end may return status 300 or 330 meaning that data is not ready for use
  // if that is the case: wait 5 seconds and try calling back end again
  return function(dispatch) {
    dispatch(getTransLoading());
    return axiosWithAuth()
      .get(
        `https://cors-anywhere.herokuapp.com/https://lambda-budget-blocks.herokuapp.com/plaid/transactions/${userID}`
      )
      .then(response => {
        dispatch(getTransSuccess(response.data));
      })
      .catch(error => {
        if (error.response.status === 300 || error.response.status === 330) {
          return setTimeout(function() {
            dispatch(getTransactions(userID));
          }, 5000);
        } else {
          dispatch(getTransFailed(error));
        }
      });
  };
}
