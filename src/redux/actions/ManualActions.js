import { axiosWithAuth } from "../../components/AxiosWithAuth";

export const ADD_DEFAULT_CATEGORIES_LOADING = "ADD_DEFAULT_CATEGORIES_LOADING";
export const ADD_DEFAULT_CATEGORIES_SUCCESS = "ADD_DEFAULT_CATEGORIES_SUCCESS";
export const ADD_DEFAULT_CATEGORIES_FAILED = "ADD_DEFAULT_CATEGORIES_FAILED";

export const SELECT_CATEGORIES_SUCCESS = "SELECT_CATEGORIES_SUCCESS"

export const addDefaultLoading = () => ({ type: ADD_DEFAULT_CATEGORIES_LOADING });
export const addDefaultSuccess = data => ({
    type: ADD_DEFAULT_CATEGORIES_SUCCESS,
    payload: data
  });
export const addDefaulFailed = error => ({
    type: ADD_DEFAULT_CATEGORIES_FAILED,
    payload: error
});

export const selectCategoriesSuccess = data => ({
    type: SELECT_CATEGORIES_SUCCESS,
    payload: data
  });



// export const GET_TRANS_LOADING = "GET_TRANS_LOADING";
// export const GET_TRANS_SUCCESS = "GET_TRANS_SUCCESS";
// export const GET_TRANS_FAILED = "GET_TRANS_FAILED";

// export const getTransLoading = () => ({ type: GET_TRANS_LOADING });
// export const getTransSuccess = data => ({
//     type: GET_TRANS_SUCCESS,
//     payload: data
//   });
// export const getTransFailed = error => ({
//     type: GET_TRANS_FAILED,
//     payload: error
// });

export function addDefault(userID, history){
    return function(dispatch) {
        dispatch(addDefaultLoading());
        return axiosWithAuth().get(`https://lambda-budget-blocks.herokuapp.com/manual/onboard/${userID}`)
            .then(response=>{
                return axiosWithAuth().get(`https://lambda-budget-blocks.herokuapp.com/api/users/categories/${userID}`)
                    .then(response=>{
                        dispatch(addDefaultSuccess(response.data));
                        history.push("/onBoard/select");
                    })
            })
            .catch(error=>{
                dispatch(addDefaulFailed(error)); 
            })
    
    }
}

export function selectCategories(arr,history){
    return function(dispatch){
        dispatch(selectCategoriesSuccess(arr));
        history.push("/");
    }
}

// export function getTransactions(userID){
//     return function(dispatch) {
//         dispatch(getTransLoading());
//         return axiosWithAuth().get(`https://cors-anywhere.herokuapp.com/https://lambda-budget-blocks.herokuapp.com/plaid/transactions/${userID}`)
//             .then(response=>{
//                 dispatch(getTransSuccess(response.data))
//             })
//             .catch(error=>{
//                 if(error.response.status === 300 || error.response.status === 330){
//                      return setTimeout(function(){
//                          dispatch(getTransactions(userID));
//                      },5000);
//                 }else{
//                     dispatch(getTransFailed(error)); 
//                 }
//             })
//         }}



   

