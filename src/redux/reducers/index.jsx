import { combineReducers } from 'redux';
import { DashboardReducer } from './DashboardReducer';
import { onBoardReducer } from './onBoardReducer';

export default combineReducers({
    dash: DashboardReducer,
    onBoard: onBoardReducer
})