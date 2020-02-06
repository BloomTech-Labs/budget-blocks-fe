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