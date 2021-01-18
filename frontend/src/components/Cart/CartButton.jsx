import { connect } from 'react-redux';
import CartModal from './CartModal';

const Cart = ({cart_items}) => {
    
    console.log(cart_items);

    return(
        <>
            <button type="button" className="btn btn-info" data-toggle="modal" data-target="#CartModal">
                <span><i className="fas fa-shopping-cart"></i></span>
                <span className="badge rounded-pill bg-info text-dark">{cart_items}</span>
            </button>
            <CartModal/>
        </>
    )
}

export default connect(state => ({ cart_items: state.cart.value }))(Cart);
