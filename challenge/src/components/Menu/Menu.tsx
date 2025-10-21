import { Link } from "react-router-dom";
import logo from "../../img/logo_sem_fundo.png";

export default function Menu() {
  return (
    <nav className="bg-white text-[#005b96] py-4 flex items-center justify-start px-8 shadow-md">
    
      <div className="flex items-center gap-8">
        <img src={logo} alt="Logo" className="h-10 w-auto" />

        <div className="flex gap-6">
          <Link to="/" className="hover:text-gray-400">Home</Link>
          <Link to="/faq" className="hover:text-gray-400">FAQ</Link>
          <Link to="/contato" className="hover:text-gray-400">Contato</Link>
          <Link to="/equipe" className="hover:text-gray-400">Equipe</Link>
          <Link to="/sobre" className="hover:text-gray-400">Sobre</Link>
        </div>
      </div>
    </nav>
  );
}
