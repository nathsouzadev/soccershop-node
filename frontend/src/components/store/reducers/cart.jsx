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
            if(state.value === 0){
                let cart = {
                    id: action.product.id_product, 
                    name: action.product.name_product,
                    price: action.product.price,
                    image: action.product.image,
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
                        id: action.product.id_product, 
                        name: action.product.name_product,
                        price: action.product.price,
                        image: action.product.image,
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
            if(action.product.quantity > 1){
                action.product.quantity--
                return {...state, value:( action.cart_items - 1)};
            } else {
                return state
            }
        case 'ADD_ITEM':
            action.product.quantity++
            return {...state, value:( action.cart_items + 1)};
        case 'DELETE_ITEM':
            return{
                ...state,
                value: (action.cart_items - action.product.quantity),
                Carts: state.Carts.filter(item => {
                    return item.id !== action.product.id
                })
            }
        default:
            return state
    }
}
