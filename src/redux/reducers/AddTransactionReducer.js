import {
	ADD_TRANSACTION_LOADING,
	ADD_TRANSACTION_FAILED,
	ADD_TRANSACTION_SUCCESS,
	CATEGORIES_LOADING,
	CATEGORIES_SUCCESS,
	CATEGORIES_FAILED,
	DELETE_TRANS_FAIL,
	DELETE_TRANS_LOADING,
	DELETE_TRANS_SUCCESS
} from '../actions/AddTransactionActions';

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TRANSACTION_LOADING:
			return {
				...state,
				isFetching: true,
				error: null
			};
		case ADD_TRANSACTION_FAILED:
			return {
				...state,
				isFetching: false,
				error: action.payload
			};
		case ADD_TRANSACTION_SUCCESS:
			return {
				...state,
				transaction: action.payload,
				isFetching: false,
				error: null
			};
		///
		case CATEGORIES_LOADING:
			return {
				...state,
				isFetching: true,
				error: null
			};
		case CATEGORIES_FAILED:
			return {
				...state,
				isFetching: false,
				error: action.payload
			};
		case CATEGORIES_SUCCESS:
			return {
				...state,
				categories: action.payload,
				isFetching: false,
				error: null
			};

		//delete trans
		case DELETE_TRANS_LOADING:
			return {
				...state,
				transaction: action.payload,
				isFetching: true,
				error: ''
			};
		case DELETE_TRANS_SUCCESS:
			return {
				...state,
				transaction: action.payload,
				isFetching: false,
				error: ''
			};
		case DELETE_TRANS_FAIL:
			return {
				...state,
				isFetching: false,
				error: `${action.payload.status}`
			};

		default:
			return state;
	}
};

const initialState = {
	categories: '',
	transaction: '',
	error: null,
	isFetching: false
};
