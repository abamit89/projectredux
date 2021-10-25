export const addToCart = (data) => {
    //console.log('Action: ',data)
    return {
        type:'ADD_TO_CART',
        data: data
    }
}

export const removeToCart = () => {
    console.log("action")
    return {
        type:'REMOVE_TO_CART',
    }
}