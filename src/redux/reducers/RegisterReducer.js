
import {
    REGISTER_USER_LOADING,
    REGISTER_USER_FAILED,
    REGISTER_USER_SUCCESS
    } from "../actions/RegisterActions"
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
        default:
            return state;
    }
}

const initialState = {
    error:null,
    isFetching:false,

};