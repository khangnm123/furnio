const initState = {
    listProduct: [],
    searchValue: '',
}

 const rootReducer= (state = initState, action) => {
    console.log(state)
    switch(action.type){
        case 'add_to_cart':
            return {
                ...state,
                listProduct: [...state.listProduct, action.payload]
            }
        case 'search_value':
            return {
                ...state,
                searchValue: action.payload
            }
        default:
            return state
    }
}
export default rootReducer