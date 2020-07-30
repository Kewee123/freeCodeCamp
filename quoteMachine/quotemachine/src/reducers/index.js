import {combineReducers} from 'redux';
import counterReducer from './counter';
import loggedReducer from './isLoggedIn';
import addQuoteReducer from './addQuote';

const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer,
    addQuote: addQuoteReducer
});

export default allReducers;