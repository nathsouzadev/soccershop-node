import Store from '../components/Stores/store';

const StoresPage = () => {
        return (
            <>
                <header className="col-12 text-left mt-3">
                    <h2 className="text-light">Nossas lojas</h2>
                    <hr/>
                </header>
                <main className="container">
                    <div className="row justify-content-center">
                        <Store city="Rio de Janeiro" end="Av. Presidente Vargas, 5000" phone="(21) 11111-1111" />
                        <Store city="São Paulo" end="Av. Paulista, 985" phone="(11) 22222-2222"/>
                        <Store city="Santa Catarina" end="Av. Major Ávila, 370" phone="(47) 55555-5555"/>
                    </div>
                </main>
            </>
        );
}

export default StoresPage;
