import productsList from './product';

const INITIAL_STATE = {
    value: 0,
    products: productsList,
    Carts: [],
    products_cart: [],
}

export default function cart(state = INITIAL_STATE, action){
    switch(action.type){
        case 'ADD_TO_CART':
            console.log(action);
            if(state.value === 0){
                let cart = {
                    id_cart: (state.value + 1),
                    id: action.product.id_product, 
                    name: action.product.name_product,
                    price: action.product.price,
                    quantity: 1,
                }
                state.Carts.push(cart);
            } else {
                let check = false;
                state.Carts.map((item, key) => {
                    if(item.id === action.product.id_product){
                        state.Carts[key].quantity++;
                        check = true;
                    }
                });
                if (!check){
                    let cart = {
                        id_cart: (state.value + 1),
                        id: action.product.id_product, 
                        name: action.product.name_product,
                        price: action.product.price,
                        quantity: 1,
                    }
                    state.Carts.push(cart);
                }
            }
            return {
                ...state,
                value: ( state.value+1 )
            }
        case 'REMOVE_CART':
            return {...state, value:( action.cart_items - 1)};
        default:
            return state
    }
}
