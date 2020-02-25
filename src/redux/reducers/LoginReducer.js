
import {
    LOGIN_USER_LOADING,
    LOGIN_USER_FAILED,
    LOGIN_USER_SUCCESS, 
    } from "../actions/LoginActions";

import {
    LOGOUT_USER
} from "../actions/LogoutAction";

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
                error: null,
                navState:"I am in show logout but"

            }
        case SEND_LINK_TOKEN_SUCCESS:
            return {
                ...state,
                user: {
                    ...state.user,
                    LinkedAccount:true
                },
            }
        case LOGOUT_USER:
            return {
                ...initialState
            }
        default:
            return state;
    }
}

const initialState = {
    user:{
        id: sessionStorage.getItem("userID") || null,
        token:sessionStorage.getItem("token") || "",
        message:"",
        LinkedAccount:sessionStorage.getItem("LinkedAccount") || false
    },
    error:null,
    isFetching:false,
    navState:""
};