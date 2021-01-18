import {connect} from 'react-redux';
import Card from './CardProduct';

const ProductsList = ({prods}) => {

    function enterPointer(event) {
        const img = event.target
        img.className = "card-img-top rounded-circle border border-success";
    }

    function outPointer(event) {
        const img = event.target
        img.className = "card-img-top img-thumbnail";
    } 

    return (
        <>
            { prods.map(row =>{
                return (
                    <Card key={row.id_product} id_category={row.id_categorys} id_product={row.id_product} image={row.image} price={row.price} product={row}
                        descricao={row.descricao} onMouseEnter={enterPointer} onMouseLeave={outPointer} name_product={row.name_product}>
                    </Card>
                    )
                })
            }
        </>    
    )
}

const mapStateToProps = state => ({
    prods: state.products
})

export default connect(mapStateToProps)(ProductsList);
