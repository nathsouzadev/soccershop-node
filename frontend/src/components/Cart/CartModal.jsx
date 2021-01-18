import { connect } from 'react-redux';

const CartModal = ({cart_items, products_cart}) => {
    
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
                    {products_cart.map(product =>{
                        return(
                            <li key={product.id_cart}>
                                <span className="badge badge-danger"><i className="fas fa-window-close"></i></span>
                                {product.name}
                                <span className="badge badge-pill badge-warning">{product.quantity}</span>
                                <span className="badge badge-pill badge-primary"><i className="fas fa-plus"></i></span>
                                <span className="badge badge-pill badge-danger"><i className="fas fa-minus"></i></span>
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
    products_cart: state.cart.Carts,
})

export default connect(mapStateToProps)(CartModal);
