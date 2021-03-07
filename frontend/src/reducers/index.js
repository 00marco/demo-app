import setSearchInputReducer from './searchInput.js';
import setSearchResultsReducer from './searchResults';
import {combineReducers} from 'redux'

const reducers = combineReducers({
    searchInput: setSearchInputReducer,
    searchResults: setSearchResultsReducer
})

export default reducers;
