import {applyMiddleware , createStore, compose} from 'redux';
import thunk from 'redux-thunk';
import allReducers from '../reducers/';
import axios from "axios";
import {fetch_quotes, receive_quote, fetch_quote_error} from '../actions/';
import promise from "redux-promise-middleware";

const middleware = applyMiddleware(promise,thunk);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    allReducers,
    composeEnhancers(middleware)
);


const requests = () =>{
    let requestsArray = []
    for(let i = 0; i < 25; i++){
        requestsArray.push(axios.get("http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote"))
    }
    return requestsArray;
}

store.dispatch({
    type: "FETCH_QUOTE",
    payload: Promise.all(requests()).then(values=> values)
})

export default store;