import {applyMiddleware , createStore} from 'redux';
import thunk from 'redux-thunk';
import allReducers from '../reducers/';
import axios from "axios";
import {fetch_quotes} from '../actions/';

const middleware = applyMiddleware(thunk);
const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


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