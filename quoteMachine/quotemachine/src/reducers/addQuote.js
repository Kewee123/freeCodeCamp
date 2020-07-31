const initialState = {
    quotes: [{"quote":"This is not the Jedi Way", "author": "Anakin Skywalker"}],
}

const addQuoteReducer = (state=initialState, action) => {
    switch(action.type){
        case 'ADD_QUOTE':
            return (Object.assign({}, state, {
                quotes: state.quotes.concat({"quote": action.quote, "author": action.author})
            }));
        default:
            return state;
    }
}

export default addQuoteReducer;