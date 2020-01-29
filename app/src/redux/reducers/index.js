
import {
    REGISTER_USER_LOADING,
    REGISTER_USER_FAILED,
    REGISTER_USER_SUCCESS,
    LOGIN_USER_LOADING,
    LOGIN_USER_FAILED,
    LOGIN_USER_SUCCESS, 
    SEND_LINK_TOKEN_LOADING,
    SEND_LINK_TOKEN_SUCCESS,
    SEND_LINK_TOKEN_FAILED
    } from "../actions"
export const reducer = (state = initialState, action) => {
    switch(action.type){
        case REGISTER_USER_LOADING:
            return {
                ...state,
                isFetching: true,
                error: null
            };
        case REGISTER_USER_FAILED:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        case REGISTER_USER_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: null
            }
        case LOGIN_USER_LOADING:
            return {
                ...state,
                isFetching: true,
                error: null
            };
        case LOGIN_USER_FAILED:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                user: action.payload,
                isFetching: false,
                error: null
            }
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
    user:{},
    error:null,
    isFetching:false,
    transactions:[],
};