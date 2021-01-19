const Price = (props) => {
    
    const formatedPrice = props.children.toFixed(2);
    
    return(
        <span>{formatedPrice}</span>
    )
}

export default Price;
