import React, { useState, useEffect } from 'react';
import API from './API_Products';

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
                    <div key={row.id_product} id={row.id_categorys} className="card col-sm-12 col-md-6 col-lg-3 border-light box-item" >
                        <img src={row.image} className="card-img-top img-thumbnail" alt={row.descricao} onMouseEnter={enterPointer} onMouseLeave={outPointer} />
                        <div className="card-body">
                            <h5 className="card-title">{row.name_product}</h5>
                            {/*<p className="card-text text-danger"><strike>R$ {row.preco}</strike></p>*/}
                            <p className="card-text">R$ {row.price}</p>
                        </div>
                    </div>
                    )
                })
            }
        </>
    )
}

export default ProductsList;
