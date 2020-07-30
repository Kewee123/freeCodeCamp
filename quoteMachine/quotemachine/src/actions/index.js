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

export const add_quote = () =>{
    return {
        type: 'ADD_QUOTE',
    };
}