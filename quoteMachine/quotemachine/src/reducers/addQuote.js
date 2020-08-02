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
        case 'FETCH_QUOTE_PENDING': {
            return {...state, fetching:true}
            break;
        }
        case 'FETCH_QUOTE_FULFILLED': {
            console.log(action)
            let quote = [];

            action.payload.forEach((item) => {
                quote.push(item.data);
            });

            console.log(quote);

            return {
                ...state, 
                fetching: false, 
                fetched: true, 
                quote: state.quote.concat(quote)
            }
            break;
        }
        case 'FETCH_QUOTE_REJECTED' :{
            return {...state, fetching:false, error: action.payload}
            break;
        }
        default:
            return state;
    }
}

export default addQuoteReducer;