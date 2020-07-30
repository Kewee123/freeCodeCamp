const addQuoteReducer = (state={}, action) => {
    switch(action.type){
        case 'ADD_QUOTE':
            return (Object.assign({}, state, {
                author: action.author,
                quote: action.quote
            }));
        default:
            return state;
    }
}

export default addQuoteReducer;