import React from 'react';
import ProductsList from './ProductsList';
import SelectItems from './Select';

const Products = () => {

    return(
            <>
                <main className="container row m-auto">
                    <div className="col-sm-12 col-lg-3 mt-1">
                        <div className="dropdown mt-1">
                            <button className="col-sm-12 btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Categorias
                            </button>
                            <div className="dropdown-menu col-sm-12" aria-labelledby="dropdownMenu2">
                                <ul className="list-group">
                                    <SelectItems/>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9 mt-1">
                        <div className="row">
                            <ProductsList/>
                        </div>
                    </div>
                </main>  
                
               
            </>
        );
}

export default Products;