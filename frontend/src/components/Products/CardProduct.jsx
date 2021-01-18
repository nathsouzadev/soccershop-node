import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CartActions from '../store/actions/cart';

const Card = ({ id_category, image, descricao, name_product, price, onMouseEnter, onMouseLeave, cart_items, product, Add, Remove }) => {

    return(
        <div id={id_category} className="card col-sm-12 col-md-6 col-lg-3 border-light box-item" >
            <img src={image} className="card-img-top img-thumbnail" alt={descricao} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
            <div className="card-body">
                <h5 className="card-title">{name_product}</h5>
                <p className="card-text">R$ {price}</p>
            </div>
            <button className="btn btn-primary" onClick={()=>Add(cart_items, product)}>Add</button>
        </div>
    )
}

const mapStateToProps = state => ({
    cart_items: state.cart.value,
})

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Card);
