import { useSelector, useDispatch } from 'react-redux';
import cartActions from '../store/actions/cart';

const Card = (props) => {

    const cart_items = useSelector(state => state.cart.value)
    const dispatch = useDispatch();    
    const formatPrice = props.price.toFixed(2);

    return(
        <div id={props.id_category} className="card col-sm-12 col-md-6 col-lg-3 border-light box-item" >
            <img src={props.image} className="card-img-top img-thumbnail" alt={props.descricao} onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave} />
            <div className="card-body">
                <h5 className="card-title">{props.name_product}</h5>
                <p className="card-text">R$ {formatPrice}</p>
            </div>
            <button className="btn btn-primary" onClick={()=>dispatch(cartActions.Add(cart_items, props.product))}>Add</button>
        </div>
    )
}

export default Card;
