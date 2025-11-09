import { Link } from "react-router-dom";

export default function MinhaAjuda() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#00a1e0]/10 to-[#005b96]/8 p-6 relative">
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="h-2 bg-gradient-to-r from-[#005b96] to-[#00a1e0]" />

        <div className="p-8 md:p-12">
          <h1 className="text-2xl md:text-3xl font-bold text-[#005b96] mb-4">
            Área de Primeiro Contato Com Paciente
          </h1>

          <p className="text-gray-700 mb-4">
            Aqui você encontra informações essenciais para acompanhar sua jornada
            no Hospital das Clínicas.
          </p>

          <ul className="space-y-3 text-gray-700">
            <li>1 - Finalize seu cadastro presencialmente</li>
            <li>2 - Faça o login e acesse a área de ajuda</li>
          </ul>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <Link
              to="/login"
              className="inline-block px-6 py-3 rounded-lg text-white font-medium text-center bg-[#005b96] hover:bg-[#004b7d] transition-shadow shadow"
            >
              Login
            </Link>

            <Link
              to="/"
              className="inline-block px-6 py-3 rounded-lg text-[#005b96] font-medium text-center border border-[#00a1e0] hover:bg-[#00a1e0]/10 transition"
            >
              Página Inicial
            </Link>
          </div>
        </div>

        <div className="bg-white/60 p-4 border-t border-gray-100 flex items-center justify-between">
          <span className="text-sm text-gray-600">Hospital das Clínicas</span>
          <Link
            to="/contato"
            className="text-sm font-medium text-[#00a1e0] hover:underline"
          >
            Falar com Atendimento
          </Link>
        </div>
      </div>
    </main>
  );
}
