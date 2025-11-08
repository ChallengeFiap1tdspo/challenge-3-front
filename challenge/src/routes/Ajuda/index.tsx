import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import BotaoDesativar from "../../components/BotaoDesativar";
import BotaoEditarPerfil from "../../components/EditarPerfilButton";
import type { Paciente } from "../../types/Paciente";

export default function Ajuda() {
  const navigate = useNavigate();
  const [paciente, setPaciente] = useState<Paciente | null>(null);

  useEffect(() => {
    const pacienteLogadoString = sessionStorage.getItem("pacienteLogado");

    if (!pacienteLogadoString) {
      alert("Você precisa estar logado para acessar a área de ajuda.");
      navigate("/login");
      return;
    }

    const pacienteLogado: Paciente = JSON.parse(pacienteLogadoString);
    setPaciente(pacienteLogado);
  }, [navigate]);

  if (!paciente) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-100">
        Carregando...
      </main>
    );
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#005b96]/10 to-[#00a1e0]/10 p-6">
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-lg overflow-hidden">

        <div className="h-2 bg-gradient-to-r from-[#005b96] to-[#00a1e0]" />

        <div className="p-8">
          <h1 className="text-2xl font-bold text-[#005b96] mb-3">
            Central de Ajuda
          </h1>

          <p className="text-gray-700 mb-4">
            Aqui você encontra informações essenciais para o uso do sistema
            Hospital das Clínicas.
          </p>

          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li>Esclareça dúvidas frequentes</li>
            <li>Gerencie seu perfil</li>
            <li>Desative sua conta, se necessário</li>
          </ul>

          <div className="flex flex-col sm:flex-row justify-end gap-3 mb-8">
            <BotaoEditarPerfil />
            <BotaoDesativar pacienteId={paciente.id} />
          </div>

          <div className="flex items-center justify-between border-t pt-4 text-sm text-gray-600">
            <Link to="/" className="hover:underline">
              Página inicial
            </Link>
            <Link to="/contato" className="hover:underline text-[#00a1e0]">
              Suporte
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}
