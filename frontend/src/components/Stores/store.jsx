const Store = (props) => {
    return(
        <div className="card col-sm-12 col-lg-3 m-1">
            <div className="card-body">
                <h5 className="card-title">{props.city}</h5>
                <p className="card-text">{props.end}</p>
                <p className="card-text">{props.phone}</p>
            </div>
        </div>
    )
}

export default Store;
