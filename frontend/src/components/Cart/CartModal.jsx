import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CartActions from '../store/actions/cart';

const CartModal = ({cart_items, products, Remove, AddItem, DeleteItem}) => {
    
    return(
        <div className="modal fade" id="CartModal" tabIndex="-1" aria-labelledby="CartModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="CartModalLabel">Meu Carrinho</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <ul>
                    {products.map(product =>{
                        return(
                            <li key={product.id_cart}>
                                <button className="badge badge-danger" onClick={()=>DeleteItem(cart_items, product)}><i className="fas fa-window-close"></i></button>
                                {product.name}
                                <span className="badge badge-pill badge-warning">{product.quantity}</span>
                                <button className="badge badge-pill badge-primary" onClick={()=>AddItem(cart_items, product)}><i className="fas fa-plus"></i></button>
                                <button className="badge badge-pill badge-danger" onClick={()=>Remove(cart_items, product)}><i className="fas fa-minus"></i></button>
                            </li>
                        )
                    })}
                    </ul>
                    Quantidade: {cart_items}
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Save changes</button>
                </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    cart_items: state.cart.value,
    products: state.cart.Carts,
})

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CartModal);
