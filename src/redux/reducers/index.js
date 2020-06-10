import { combineReducers } from 'redux';
import { transactionReducer } from './transactionReducer';
import { onBoardReducer } from './onBoardReducer';
import { userReducer } from './userReducer';

export default combineReducers({
  trans: transactionReducer,
  onBoard: onBoardReducer,
  users: userReducer,
});
