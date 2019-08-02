import playerReducer from './players';
import show from './showInfo';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    players: playerReducer,
    showInfo: show
});

export default rootReducer;