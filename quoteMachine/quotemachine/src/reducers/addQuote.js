const addQuoteReducer = (state={}, action) => {
    switch(action.type){
        case 'ADD_QUOTE':
            return {"quote": state.quote, "author": state.author};
        default:
            return state;
    }
}

export default addQuoteReducer;