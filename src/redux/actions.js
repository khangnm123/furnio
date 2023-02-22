


export const addTocart = product => {
    return {
        type: 'add_to_cart',
        payload: product
    }
    
}

export const searchValue = content => {
    return {
        type: 'search_value',
        payload: content,
    }
}