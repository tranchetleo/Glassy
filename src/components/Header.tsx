import logo from '../assets/images/logo.png';

const Header = () => {
    return (
        <header className="glassy">
            <a href="/">
                <img src={logo} alt="Logo Glassy" className="logo"/>
            </a>
            <nav>
                <ul>
                    <li>
                        <a href="/">
                            Accueil
                        </a>
                    </li>
                    <li>
                        <a href="/produits">
                            Produits
                        </a>
                    </li>
                    <li>
                        <a href="/contact">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;