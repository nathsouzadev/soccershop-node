import { useState, useEffect } from 'react';
import API from './API_Products';
import Card from './CardProduct';

const ProductsList = () => {
    const [prods, setProds] = useState([]);

    useEffect(async() => {
        const res = await fetch(API);
        setProds(await res.json());
    }, [])

     
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
                    <Card key={row.id_product} id={row.id_categorys} image={row.image} price={row.price}
                        descricao={row.descricao} onMouseEnter={enterPointer} onMouseLeave={outPointer}>
                            {row.name_product}
                    </Card>
                    )
                })
            }
        </>
    )
}

export default ProductsList;
