const initialState = {
    quotes: [],
    authors: []
}

const addQuoteReducer = (state=initialState, action) => {
    switch(action.type){
        case 'ADD_QUOTE':
            return (Object.assign({}, state, {
                authors: state.authors.concat(action.author),
                quotes: state.quotes.concat(action.quote)
            }));
        default:
            return state;
    }
}

export default addQuoteReducer;