import React from 'react';

const Stores = () => {
        return (
            <>
                <header className="col-12 text-left mt-3">
                    <h2 className="text-light">Nossas lojas</h2>
                    <hr/>
                </header>
                <main className="container">
                    <div className="row justify-content-center">
                        <div className="card col-sm-12 col-lg-3 m-1">
                            <div className="card-body">
                                <h5 className="card-title">Rio de Janeiro</h5>
                                <p className="card-text">Av. Presidente Vargas, 5000</p>
                                <p className="card-text">10º andar</p>
                                <p className="card-text">Centro</p>
                                <p className="card-text">(21) 11111-1111</p>
                            </div>
                        </div>

                        <div className="card col-sm-12 col-lg-3 m-1">
                            <div className="card-body">
                                <h5 className="card-title">São Paulo</h5>
                                <p className="card-text">Avenida Paulista, 985</p>
                                <p className="card-text">3º andar</p>
                                <p className="card-text">Jardins</p>
                                <p className="card-text">(11) 22222-2222</p>
                            </div>
                        </div>

                        <div className="card col-sm-12 col-lg-3 m-1">
                            <div className="card-body">
                                <h5 className="card-title">Santa Catarina</h5>
                                <p className="card-text">Avenida Major Ávila, 370</p>
                    <           p className="card-text">Vila Mariana</p>
                                <p className="card-text">(47) 55555-5555</p>
                            </div>
                        </div>
                    </div>
                </main>
            </>
        );
}

export default Stores;