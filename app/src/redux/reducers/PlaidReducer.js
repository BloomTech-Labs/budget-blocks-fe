
import {
    SEND_LINK_TOKEN_LOADING,
    SEND_LINK_TOKEN_SUCCESS,
    SEND_LINK_TOKEN_FAILED
    } from "../actions/PlaidActions"
export const reducer = (state = initialState, action) => {
    switch(action.type){
        case SEND_LINK_TOKEN_LOADING:
            return {
                ...state,
                isFetching: true,
                error: null
            };
        case SEND_LINK_TOKEN_FAILED:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        case SEND_LINK_TOKEN_SUCCESS:
            return {
                ...state,
                transactions: action.payload.TransactionsInserted,
                isFetching: false,
                error: null
            }
        default:
            return state;
    }
}

const initialState = {
    error:null,
    isFetching:false,
    transactions:[],
};