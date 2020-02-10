
import {
    LOGIN_USER_LOADING,
    LOGIN_USER_FAILED,
    LOGIN_USER_SUCCESS, 
    } from "../actions/LoginActions"

import { SEND_LINK_TOKEN_SUCCESS } from "../actions/PlaidActions"

export const reducer = (state = initialState, action) => {
    switch(action.type){
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
        case SEND_LINK_TOKEN_SUCCESS:
            return {
                ...state,
                user: {
                    ...state.user,
                    LinkedAccount:true
                },
            }
        default:
            return state;
    }
}

const initialState = {
    user:{
        id:null,
        token:"",
        message:"",
        LinkedAccount:false
    },
    error:null,
    isFetching:false
};