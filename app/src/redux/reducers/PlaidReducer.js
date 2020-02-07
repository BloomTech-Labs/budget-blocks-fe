
import {
    SEND_LINK_TOKEN_LOADING,
    SEND_LINK_TOKEN_SUCCESS,
    SEND_LINK_TOKEN_FAILED,
    GET_TRANS_LOADING,
    GET_TRANS_SUCCESS,
    GET_TRANS_FAILED
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
                isFetching: false,
                error: null
            }
        case GET_TRANS_LOADING:
            return {
                ...state,
                isFetching: true,
                error: null
            };
        case GET_TRANS_FAILED:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        case GET_TRANS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: null,
                accounts:action.payload.accounts,
                categories:action.payload.categories,
                
            }
        default:
            return state;
    }
}

const initialState = {
    error:null,
    isFetching:false,
    transactions:[],
    Balance:0.00,
    categories:[],
    accounts:[],
    
    
};