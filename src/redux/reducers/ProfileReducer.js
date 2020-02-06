import {
    CREATE_PROFILE_LOADING,
    CREATE_PROFILE_SUCCESS,
    CREATE_PROFILE_FAILED
    } from "../actions/ProfileActions"

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case CREATE_PROFILE_LOADING:
            return {
                ...state,
                isFetching: true,
                error: null
            };
        case CREATE_PROFILE_FAILED:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        case CREATE_PROFILE_SUCCESS:
            return {
                ...state,
                profile: action.payload,
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
    profile:{}
};