import {
    FETCH_TRANS_DATA,
    FETCH_TRANS_SUCCESS,
    FETCH_TRANS_FAIL
} from '../actions/Dashboard';

const initialState = {
    isFetching: false,
    transaction: [],
    errors: ''
}

export const transactionReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_TRANS_DATA:
            return {
                ...state,
                isFetching: true,
                errors: ''
            }
        case FETCH_TRANS_SUCCESS:
            return {
                ...state,
                transaction: action.payload,
                isFetching: false,
                errors: ''
            }
        case FETCH_TRANS_FAIL:
            return {
                ...state,
                isFetching: false,
                errors: action.payload
            }
        default:
            return state
    }
}