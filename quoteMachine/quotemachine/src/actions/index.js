export const increment = (number) => {
    return {
        type: 'INCREMENT',
        payload: number
    };
}

export const decrement = () => {
    return {
        type: 'DECREMENT'
    };
}

export const add_quote = (author, quote) =>{
    return {
        type: 'ADD_QUOTE',
        author: author,
        quote: quote
    };
}

export const remove_quote = (author, quote) =>{
    return{
        type: 'REMOVE_QUOTE',
        author: author,
        quote: quote
    };
}

export const random_quote = () =>{
    return{
        type: 'RANDOM_QUOTE'
    };
}

export const fetch_quotes = () =>{
    return{
        type: 'FETCH_QUOTES',
    };
}

export const fetch_quotes_fulfilled = (response) =>{
    return{
        type: "RECEIVE_QUOTE", 
        quote: response.data
    };
}

export const fetch_quote_error = (err) =>{
    return{
        type: "FETCH_QUOTE_ERROR", 
        quote: err
    };
}