import { combineReducers } from 'redux';
import { transactionReducer } from './transactionReducer';
import { onBoardReducer } from './onBoardReducer';

export default combineReducers({
    trans: transactionReducer,
    onBoard: onBoardReducer
})