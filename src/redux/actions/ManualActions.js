import { axiosWithAuth } from '../../components/AxiosWithAuth';

export const ADD_DEFAULT_CATEGORIES_LOADING = 'ADD_DEFAULT_CATEGORIES_LOADING';
export const ADD_DEFAULT_CATEGORIES_SUCCESS = 'ADD_DEFAULT_CATEGORIES_SUCCESS';
export const ADD_DEFAULT_CATEGORIES_FAILED = 'ADD_DEFAULT_CATEGORIES_FAILED';
export const ADD_MANUAL_BLOCKS_FAILED = "ADD_MANUAL_BLOCKS_FAILED"
export const SELECT_CATEGORIES_SUCCESS = 'SELECT_CATEGORIES_SUCCESS';
export const ADD_MANUAL_BLOCKS_SUCCESS = "ADD_MANUAL_BLOCKS_SUCCESS"
export const EDIT_MANUAL_BLOCKS_SUCCESS = "EDIT_MANUAL_BLOCKS_SUCCESS"
export const EDIT_MANUAL_BLOCKS_FAILED = "EDIT_MANUAL_BLOCKS_FAILED"
export const addDefaultLoading = () => ({
	type: ADD_DEFAULT_CATEGORIES_LOADING
});
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

export const addManualBlockSuccess = (obj) => ({ type: ADD_MANUAL_BLOCKS_SUCCESS,payload:obj });

export const addManualBlocksFailed = error => ({
    type: ADD_MANUAL_BLOCKS_FAILED,
    payload: error
});
export const editManualBlockSuccess = (obj) => ({ type: EDIT_MANUAL_BLOCKS_SUCCESS,payload:obj });

export const editManualBlocksFailed = error => ({
    type: EDIT_MANUAL_BLOCKS_FAILED,
    payload: error
});

export function addDefault(userID, history) {
	// This function is used during the onboarding process when the user chooses they want to go manual
	return function(dispatch) {
		dispatch(addDefaultLoading());
		return axiosWithAuth()
			// Calls endpoint to let back end know they need to create default categories for this user (returns nothing)
			.get(
				`https://lambda-budget-blocks.herokuapp.com/manual/onboard/${userID}`
			)
			.then(response => {
				// After back end creates the default categories: get all the categories from back end
				return axiosWithAuth()
					.get(
						`https://lambda-budget-blocks.herokuapp.com/api/users/categories/${userID}`
					)
					.then(response => {
						// save categories to state and then take them to select their preset categories
						dispatch(addDefaultSuccess(response.data));
						history.push('/onBoard/select');
					});
			})
			.catch(error => {
				dispatch(addDefaulFailed(error));
			});
	};
}
export function addManualBlocks(userId,obj){
	// This function is used to add a new block (manual users only)
	return  function(dispatch) {
		
		axiosWithAuth().post(`https://lambda-budget-blocks.herokuapp.com/manual/categories/${userId}`,obj)
	.then( i => {
		dispatch(addManualBlockSuccess(obj))
	})
	.catch(err => {
		dispatch(addManualBlocksFailed(err))
	})

}
}
export function editManualBlocks(userId,obj){
	// This function is used to edit a block (manual users only)
	return  function(dispatch) {
		
		axiosWithAuth().put(`https://lambda-budget-blocks.herokuapp.com/api/users/categories/${userId}`,obj)
	.then( i => {
dispatch(editManualBlockSuccess(obj))
	})
	.catch(err => {
		dispatch(addManualBlocksFailed(err))
	})

}
}

export function selectCategories(arr, history) {
	// This function is used in SelectCategories.js. takes newly filtered array and saves to redux
	return function(dispatch) {
		dispatch(selectCategoriesSuccess(arr));
		// sends user to set budget for their chosen categories
		history.push("/manual");
	};
}

export function getManualTrans(userID,history){
	// This function is used on Dashboard.js. Gets categories and their transactions
    return function(dispatch) {
        dispatch(getTransLoading());
        return axiosWithAuth().get(`https://lambda-budget-blocks.herokuapp.com/manual/transaction/${userID}`)
            .then(response=>{
				// if there are no categories returned: send them to onboarding process
                if (response.data.list.length === 0){
                    history.push("/onBoard/1");
				}
				// reformat data to be saved in redux
                const data = {
                    accounts:[],
                    Categories:response.data.list.filter((cat)=> cat.budget !== null)
                }
                dispatch(getTransSuccess(data));
            })
            .catch(error=>{
                    dispatch(getTransFailed(error)); 
            })
		}}

		



   

