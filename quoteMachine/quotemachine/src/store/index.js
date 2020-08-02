import {applyMiddleware , createStore, compose} from 'redux';
import thunk from 'redux-thunk';
import allReducers from '../reducers/';
import axios from "axios";
import {fetch_quotes} from '../actions/';

const middleware = applyMiddleware(thunk);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    allReducers,
    composeEnhancers(applyMiddleware(...middleware))
);


store.dispatch((dispatch)=>{
    dispatch({type: "FETCH_QUOTE"})
    axios.get("http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote")
    .then((response)=>{
        dispatch({type: "RECEIVE_QUOTE", quote: response.data})
    })
    .catch((err)=>{
        dispatch({type: "FETCH_QUOTE_ERROR", quote: err})
    })
})
export default store;