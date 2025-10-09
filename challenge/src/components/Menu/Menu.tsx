import { Link } from "react-router-dom";

export default function Menu(){
    return(
        <nav>
            <Link to="/">Home</Link> |
            <Link to="/faq">FAQ</Link> |
            <Link to="/contato">Contato</Link> |
            <Link to="/equipe">Equipe</Link> |
        </nav>
    );
}
