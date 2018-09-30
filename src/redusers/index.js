import { combineReducers } from 'redux';

import allPeople from './clients';
import filterPeople from './filterPeople';

export default combineReducers({
    filterPeople,
    allPeople
})