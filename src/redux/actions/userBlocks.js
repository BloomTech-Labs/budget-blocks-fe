import { getTransactions } from "./PlaidActions";
import { axiosWithAuth } from "../../components/AxiosWithAuth";

export const BLOCKS_CATEGORY_LOADING = "BLOCKS_CATEGORY_LOADING";
export const BLOCKS_CATEGORY_SUCCESS = "BLOCKS_CATEGORY_SUCCESS";
export const BLOCKS_CATEGORY_FAILED = "BLOCKS_CATEGORY_FAILED";

export const CATEGORY_UPDATE_LOADING = "CATEGORY_UPDATE_LOADING";
export const CATEGORY_UPDATE_SUCCESS = "CATEGORY_UPDATE_SUCCESS";
export const CATEGORY_UPDATE_FAILED = "CATEGORY_UPDATE_FAILED";



export const blocksLoading = () => ({ type: BLOCKS_CATEGORY_LOADING });
export const blocksSuccess = data => ({
    type: BLOCKS_CATEGORY_SUCCESS,
    payload: data
});
export const blocksFailure = error => ({
    type: BLOCKS_CATEGORY_FAILED,
    payload: error
});

export const updateLoading = () => ({ type: CATEGORY_UPDATE_LOADING });
export const updateSuccess = data => ({ type: CATEGORY_UPDATE_SUCCESS, payload: data });
export const updateFailed = error => ({
    type: CATEGORY_UPDATE_FAILED,
    payload: error
});

export function updateBlocks(userID, goals){
    return function(dispatch) {
        dispatch(updateLoading());
        return axiosWithAuth().put(`https://lambda-budget-blocks.herokuapp.com/api/users/categories/${userID}`,goals)
            .then(response => {
                dispatch(updateSuccess(response.data));
            })
            .catch(error => {
                dispatch(updateFailed(error));
            });
        }
}