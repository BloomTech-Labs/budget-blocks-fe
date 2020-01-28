import axios from "axios";

export const REGISTER_USER_LOADING = "REGISTER_USER_LOADING";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_FAILED = "REGISTER_USER_FAILED";

export const registerUserLoading = () => ({ type: REGISTER_USER_LOADING });
export const registerUserSuccess = data => ({
    type: REGISTER_USER_SUCCESS,
    payload: data
  });
export const registerUserFailure = error => ({
    type: REGISTER_USER_FAILED,
    payload: error
});

export const LOGIN_USER_LOADING = "LOGIN_USER_LOADING";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAILED = "LOGIN_USER_FAILED";

export const loginUserLoading = () => ({ type: LOGIN_USER_LOADING });
export const loginUserSuccess = data => ({
    type: LOGIN_USER_SUCCESS,
    payload: data
  });
export const loginUserFailure = error => ({
    type: LOGIN_USER_FAILED,
    payload: error
});

export function loginUser(user){
    return function(dispatch) {
        dispatch(loginUserLoading());
        return axios.post('https://lambda-budget-blocks.herokuapp.com/api/auth/login',user)
            .then(response=>{
                dispatch(loginUserSuccess(response))
            })
            .catch(error=>{
                dispatch(loginUserFailure(error)); 
            })
    }
}
export function registerUser(data){
    return function(dispatch) {
        dispatch(registerUserLoading());
        return axios.post('https://lambda-budget-blocks.herokuapp.com/api/auth/register',data)
            .then(response=>{
                dispatch(registerUserSuccess(response))
            })
            .catch(error=>{
                dispatch(registerUserFailure(error)); 
            })
    }
}