import logo from '../assets/images/logo.png';

const Header = () => {
    return (
        <header className="glassy">
            <img src={logo} alt="Logo Glassy" className="logo"/>
            <nav>
                <ul>
                    <li>
                        Accueil
                    </li>
                    <li>
                        Prduits
                    </li>
                    <li>
                        Contact
                    </li>
                </ul>
            </nav>

        </header>
    );
}

export default Header;