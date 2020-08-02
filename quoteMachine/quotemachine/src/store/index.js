import {applyMiddleware , createStore, compose} from 'redux';
import thunk from 'redux-thunk';
import allReducers from '../reducers/';
import axios from "axios";
import {fetch_quotes, receive_quote, fetch_quote_error} from '../actions/';

const middleware = applyMiddleware(thunk);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    allReducers,
    composeEnhancers(middleware)
);


store.dispatch((dispatch)=>{
    for(let i = 0; i < 100; i++){
        dispatch(fetch_quotes())
        axios.get("http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote")
        .then((response)=>{
            dispatch(receive_quote(response))
        })
        .catch((err)=>{
            dispatch(fetch_quote_error(err))
        })
    }
})
export default store;