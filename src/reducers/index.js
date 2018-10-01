import { combineReducers } from 'redux';

import allUsers from './allUsers';
import filterUsers from './filterUsers';

export default combineReducers({
    filterUsers,
    allUsers
})