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

export function sendLinkToken(token,userID){
    return function(dispatch) {
        dispatch(sendLinkLoading());
        return axiosWithAuth().post('https://cors-anywhere.herokuapp.com/https://lambda-budget-blocks.herokuapp.com/plaid/token_exchange',{publicToken:token, userid:userID})
            .then(response=>{
                dispatch(sendLinkSuccess(response.data))
                dispatch(sendLoginSuccess());
            })
            .catch(error=>{
                dispatch(sendLinkFailed(error)); 
            })
    
    }
}
