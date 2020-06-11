import {
  FETCH_TRANS_DATA,
  FETCH_TRANS_SUCCESS,
  FETCH_TRANS_FAIL,
} from '../actions/dashboardAction';

const initialState = {
  isFetching: false,
  transaction: [],
  errors: '',
  onSuccess: false,
};

export const transactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TRANS_DATA:
      return {
        ...state,
        isFetching: true,
        errors: '',
        onSuccess: false,
      };
    case FETCH_TRANS_SUCCESS:
      return {
        ...state,
        transaction: action.payload,
        isFetching: false,
        errors: '',
        onSuccess: true,
      };
    case FETCH_TRANS_FAIL:
      return {
        ...state,
        isFetching: false,
        errors: action.payload,
        onSuccess: false,
      };
    default:
      return state;
  }
};
