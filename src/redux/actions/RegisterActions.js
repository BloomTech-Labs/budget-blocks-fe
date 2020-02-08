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

export function registerUser(data, history){
    return function(dispatch) {
        dispatch(registerUserLoading());
        return axios.post('https://lambda-budget-blocks.herokuapp.com/api/auth/register',data)
            .then(response=>{
                dispatch(registerUserSuccess(response.data))
                history.push("/login");
            })
            .catch(error=>{
                dispatch(registerUserFailure(error)); 
            })
    }
}