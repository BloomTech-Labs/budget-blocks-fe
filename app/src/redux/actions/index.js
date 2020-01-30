import axios from "axios";

export const CREATE_PROFILE_LOADING = "CREATE_PROFILE_LOADING";
export const CREATE_PROFILE_SUCCESS = "CREATE_PROFILE_SUCCESS";
export const CREATE_PROFILE_FAILED = "CREATE_PROFILE_FAILED";

export const createProfileLoading = () => ({ type: CREATE_PROFILE_LOADING });
export const createProfileSuccess = data => ({
    type: CREATE_PROFILE_SUCCESS,
    payload: data
});
export const createProfileFailure = error => ({
    type: CREATE_PROFILE_FAILED,
    payload: error
});


export const SEND_LINK_TOKEN_LOADING = "SEND_LINK_TOKEN_LOADING";
export const SEND_LINK_TOKEN_SUCCESS = "SEND_LINK_TOKEN_SUCCESS";
export const SEND_LINK_TOKEN_FAILED = "SEND_LINK_TOKEN_FAILED";

export const sendLinkLoading = () => ({ type: SEND_LINK_TOKEN_LOADING });
export const sendLinkSuccess = data => ({
    type: SEND_LINK_TOKEN_SUCCESS,
    payload: data
  });
export const sendLinkFailed = error => ({
    type: SEND_LINK_TOKEN_FAILED,
    payload: error
});


export function sendLinkToken(token,userID){
    return function(dispatch) {
        dispatch(sendLinkLoading());
        console.log({publicToken:token, user_id:userID});
        return axios.post('https://lambda-budget-blocks.herokuapp.com/plaid/token_exchange',{publicToken:token, userid:userID})
            .then(response=>{
                console.log(response);
                dispatch(sendLinkSuccess(response.data))
            })
            .catch(error=>{
                dispatch(sendLinkFailed(error)); 
            })
    
    }
}
      
export function createProfile(data){
    return function(dispatch) {
        dispatch(createProfileLoading());
        return "Hello"
        // axios.post('https://lambda-budget-blocks.herokuapp.com/api/auth/register',data)
            // .then(response=>{
            //     dispatch(createProfileSuccess(response))
            // })
            // .catch(error=>{
            //     dispatch(createProfileFailure(error)); 
            // })

    }
}