const Add = (cart_items, product) => {
    return{
        type: 'ADD_TO_CART',
        cart_items,
        product,
    };
};

const Remove= (cart_items, product) =>{
    return{
        type: 'REMOVE_CART',
        cart_items,
        product,
    };
}

const AddItem= (cart_items, product) =>{
    return{
        type: 'ADD_ITEM',
        cart_items,
        product,
    };
}

const DeleteItem= (cart_items, product) =>{
    return{
        type: 'DELETE_ITEM',
        cart_items,
        product,
    };
}

export default {
    Add,
    Remove,
    AddItem,
    DeleteItem
}
