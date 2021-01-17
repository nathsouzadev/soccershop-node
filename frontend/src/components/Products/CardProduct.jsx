const Card = (props) => {

    return(
        <div id={props.id} className="card col-sm-12 col-md-6 col-lg-3 border-light box-item" >
            <img src={props.image} className="card-img-top img-thumbnail" alt={props.descricao} onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave} />
            <div className="card-body">
                <h5 className="card-title">{props.children}</h5>
                {/*<p className="card-text text-danger"><strike>R$ {row.preco}</strike></p>*/}
                <p className="card-text">R$ {props.price}</p>
            </div>
        </div>
    )
}

export default Card;
