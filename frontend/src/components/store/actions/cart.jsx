export function Add(cart_items, product){
    return{
        type: 'ADD_TO_CART',
        cart_items,
        product,
    };
};

export function Remove(cart_items){
    return{
        type: 'REMOVE_CART',
        cart_items,
    };
}
