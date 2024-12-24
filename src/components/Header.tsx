import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Header = () => {
    return (
        <header className="glassy">
            <Link to="/">
                <img src={logo} alt="Logo Glassy" className="logo"/>
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link to="/">
                            Accueil
                        </Link>
                    </li>
                    <li>
                        <Link to="/produits">
                            Produits
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact">
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;