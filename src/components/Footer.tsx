import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <p>2024 © <Link to="/">Glassy</Link> | tous droits réservés</p>
            <p>Une création <Link to="https://sani-web.com" target="blank">Sani-web</Link></p>
        </footer>
    );
}

export default Footer;