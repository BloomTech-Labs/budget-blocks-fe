import {
  LOGIN_USER_LOADING,
  LOGIN_USER_FAILED,
  LOGIN_USER_SUCCESS,
} from "../actions/LoginActions";

import { LOGOUT_USER } from "../actions/LogoutAction";

import { SEND_LINK_TOKEN_SUCCESS } from "../actions/PlaidActions";

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_LOADING:
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    case LOGIN_USER_FAILED:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isFetching: false,
        error: null,
        navState: sessionStorage.getItem('token'),
      };
    case SEND_LINK_TOKEN_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          LinkedAccount: true,
        },
      };
    case LOGOUT_USER:
      return {
        user: {
          id: null,
          token: "",
          message: "",
          LinkedAccount: false,
        },
        error: null,
        isFetching: false,
        navState: sessionStorage.removeItem("token"),
      };
    default:
      return state;
  }
};

const initialState = {
  // If the user refreshes the page, gets data from session storage if it is there
  user: {
    id: sessionStorage.getItem("userID") || null,
    token: sessionStorage.getItem("token") || "",
    message: "",
    LinkedAccount: sessionStorage.getItem("LinkedAccount") || false,
  },
  error: null,
  isFetching: false,
  navState: sessionStorage.getItem("navState") || "",
};
