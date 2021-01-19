const MsgCard = (props) => {
    
    return(
        <>
            <div className="card msg">
                <div className="card-body">
                    <h5 className="card-title">{props.author}</h5>
                    <p className="card-text">{props.children}</p>
                    <p className="card-text"><small className="text-muted">{props.date}</small></p>
                </div>
            </div>
        </>
    )
}

export default MsgCard;