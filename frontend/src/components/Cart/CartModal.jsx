import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CartActions from '../store/actions/cart';
import Price from './Price'

const CartModal = ({cart_items, products, Remove, AddItem, DeleteItem}) => {
    
    let totalPrice = 0;
    for (let i = 0; i < products.length; i++) {
        totalPrice += (products[i].price * products[i].quantity)
    }
    
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
                <div className="modal-body table-responsive">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                            <th scope="col"></th>
                            <th scope="col">Produto</th>
                            <th scope="col">Qtd</th>
                            <th scope="col">Preço</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map(product =>{            
                                return(
                                    <tr key={product.id_cart}>
                                        <th><button className="badge badge-danger" onClick={()=>DeleteItem(cart_items, product)}><i className="fas fa-window-close"></i></button></th>
                                        <th><img className="img-fluid img-thumbnail" src={product.image} alt={product.name} width="50px"/></th>
                                        <th><span className="badge badge-pill badge-warning">{product.quantity}</span></th>
                                        <th>R$ <Price>{product.price}</Price></th>
                                        <th><button className="badge badge-pill badge-primary" onClick={()=>AddItem(cart_items, product)}><i className="fas fa-plus"></i></button></th>
                                        <th><button className="badge badge-pill badge-danger" onClick={()=>Remove(cart_items, product)}><i className="fas fa-minus"></i></button></th>
                                        <th>R$ {((product.quantity)*(product.price)).toFixed(2)}</th>
                                    </tr>
                                )
                            })}
                            <tr>
                                <th colSpan="2" scope="col">Total</th>
                                <th colSpan="3">{cart_items} itens</th>
                                <th colSpan="2">R$ {totalPrice.toFixed(2)}</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
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
