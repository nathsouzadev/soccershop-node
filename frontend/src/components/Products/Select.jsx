import { useState, useEffect } from 'react';
import API from './API_Products';

const SelectItems = () =>{
    const [categorys, setCategorys] = useState([]);

    useEffect(async () => {
        const res = await fetch(API);
        setCategorys(await res.json());
    }, [])

    //create array with category and id 
    const category = categorys.map(category => {
        const container = { };
        container ['id'] = category.id_categorys; //get id_category
        container ['name'] = category.name_categorys; //get name_category
        return container;
    });
    
    //removing duplicates values from container 
    const category_simple = category.map(JSON.stringify).reverse()
	    .filter(function(item, index, arr){ return arr.indexOf(item, index + 1) === -1; })
        .reverse().map(JSON.parse);

    //count number of values
    let categorysArray = category.map( category => category.name);
    let counts = {};

    for(var i=0;i< categorysArray.length;i++)
        {
            let key = categorysArray[i];
            counts[key] = (counts[key])? counts[key] + 1 : 1 ;
        }
    
    //filter from select
    let prod = document.getElementsByClassName('box-item');

    function showCategories(event) {
        let item = event.target.id;
        for (let i = 0; i < prod.length; i++) {
            if (item === prod[i].id) {
                    prod[i].style.display = "block";
            }
                else{
                    prod[i].style.display = "none";
            }
        }
    }
    
    function allCategories() {
        for (let i = 0; i < prod.length; i++) {
            prod[i].style.display = "block";
        }
    }
    


    return (
        <>
            <button className="dropdown-item list-group-item d-flex justify-content-between align-items-center"
                onClick={allCategories} type="button">
                Todas as categorias
                <span className="badge badge-success badge-pill">{category.length}</span>
            </button>
            {/** map for show categorys from category_simple  renderizando*/}
            {   category_simple.map ( category => {
                    return (
                        <button key={category.id} className="dropdown-item list-group-item d-flex justify-content-between align-items-center"
                                id={category.id} onClick={showCategories} type="button">
                            {category.name}
                            <span className="badge badge-success badge-pill">{counts[category.name]}</span>
                        </button>
                    )
                })
            }
        </>
    );
}

export default SelectItems;