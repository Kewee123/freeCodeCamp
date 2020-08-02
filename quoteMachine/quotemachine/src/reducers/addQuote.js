const initialState = {
    fetching: false,
    fetched: false,
    quote: [],
    quotes: [{"quote":"This is not the Jedi Way", "author": "Anakin Skywalker"}],
}

const addQuoteReducer = (state=initialState, action) => {
    switch(action.type){
        case 'ADD_QUOTE':
            return (Object.assign({}, state, {
                quotes: state.quotes.concat({"quote": action.quote, "author": action.author})
            }));
        case 'REMOVE_QUOTE':
            return (Object.assign({}, state, {
                quotes: state.quotes.filter(item=> {
                    return(item.quote !== action.quote)
                })
            }));
        case 'FETCH_QUOTE': {
            break;
        }
        case 'RECEIVE_QUOTE': {
            break;
        }
        case 'FETCH_QUOTE_ERROR'{
            break;
        }
        default:
            return state;
    }
}

export default addQuoteReducer;