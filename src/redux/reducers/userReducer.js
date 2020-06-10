import {
  FETCH_USER,
  USER_FAILURE,
  USER_SUCCESS,
  NOT_AUTHENTICATED,
} from '../actions/userAction';

const initialState = {
  userInfo: {},
  isFetching: false,
  errors: '',
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return {
        ...state,
        isFetching: true,
      };
    case USER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        userInfo: action.payload,
      };
    case USER_FAILURE:
      return {
        ...state,
        isFetching: false,
        errors: action.payload,
      };
    case NOT_AUTHENTICATED:
      return {
        ...state,
        userInfo: {},
        isFetching: false,
      };
    default:
      return state;
  }
};
