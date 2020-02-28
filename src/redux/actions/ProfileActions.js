import axios from "axios";

export const USER_INFO_LOADING = "USER_INFO_LOADING";
export const USER_INFO_SUCCESS = "USER_INFO_SUCCESS";
export const USER_INFO_FAILED = "USER_INFO_FAILED";

export const userInfoLoading = () => ({ type: USER_INFO_LOADING });
export const userInfoSuccess = data => ({
    type: USER_INFO_SUCCESS,
    payload: data
});
export const userInfoFailure = error => ({
    type: USER_INFO_FAILED,
    payload: error
});

export function getUserInfo(id){
    return function(dispatch) {
        dispatch(userInfoLoading());
        return (
        axios.get(`https://lambda-budget-blocks.herokuapp.com/api/users/user/${id}`)
            .then(response=>{
                dispatch(userInfoSuccess(response.data.user))
            })
            .catch(error=>{
                dispatch(userInfoFailure(error)); 
            })
        )

    }
}