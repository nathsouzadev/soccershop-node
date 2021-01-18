import logo from '../assets/favicon_soccershop.png';
import { Link } from 'react-router-dom';
import CartButton from './Cart/CartButton';

const Header = () => {
        return (
            <>
             <header>
                    <nav className="navbar navbar-expand-lg navbar-light bg-success">
                        <Link className="navbar-brand" to="/">
                            <img
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="Soccershop"
                            loading="lazy"
                            />
                            <span className="ml-1 text-light">SoccerShop</span>
                        </Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to="/produtos">Produtos</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to="/nossaslojas">Nossas lojas</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to="/contato">Contato</Link>
                                </li>
                                <li>
                                    <CartButton/>
                                </li>
                            </ul>
                        </div>
                    </nav>
             </header>
            </>
        );
}

export default Header;
