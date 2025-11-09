import { useNavigate } from "react-router-dom";

export default function BotaoEditarPerfil() {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => navigate("/editar-perfil")}
      className="px-4 py-2 bg-[#005b96] hover:bg-[#004673] text-white rounded-lg transition"
    >
      Editar Perfil
    </button>
  );
}
