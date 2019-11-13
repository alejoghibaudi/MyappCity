//bring  together all reducers
//meeting place for all reducers

import {combineReducers} from 'redux';
import itemReducer from './itemReducer';

export default combineReducers({
    item:itemReducer
    //you can add all reducer here
});