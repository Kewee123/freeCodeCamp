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