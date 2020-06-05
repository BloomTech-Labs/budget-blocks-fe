import { combineReducers } from 'redux';
import { transactionReducer } from './transactionReducer';
import { onBoardReducer } from './onBoardReducer';

export default combineReducers({
    dash: transactionReducer,
    onBoard: onBoardReducer
})