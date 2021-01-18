export function Add(cart_items, product){
    return{
        type: 'ADD_TO_CART',
        cart_items,
        product,
    };
};

export function Remove(cart_items, product){
    return{
        type: 'REMOVE_CART',
        cart_items,
        product,
    };
}

export function AddItem(cart_items, product){
    return{
        type: 'ADD_ITEM',
        cart_items,
        product,
    };
}

export function DeleteItem(cart_items, product){
    return{
        type: 'DELETE_ITEM',
        cart_items,
        product,
    };
}
