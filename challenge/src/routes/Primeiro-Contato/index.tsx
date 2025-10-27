import { Link } from "react-router-dom";

export default function PrimeiroContato() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#00a1e0]/10 to-[#005b96]/8 p-6">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg overflow-hidden">
        
        <div className="h-2 bg-gradient-to-r from-[#005b96] to-[#00a1e0]" />

        <div className="p-8 md:p-12 flex flex-col md:flex-row gap-8">
     
          <section className="flex-1">
            <h1 className="text-2xl md:text-3xl font-bold text-[#005b96] mb-3">
              Primeiro Contato com o Hospital das Clínicas
            </h1>

            <p className="text-gray-700 mb-4">
              Verificamos que você ainda não possuía um cadastro conosco. Seja muito
              bem-vindo ao Hospital das Clínicas!
            </p>

            <p className="text-gray-700 mb-6">
              Para começar sua jornada de cuidado conosco, vá até a nossa área de
              contato.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                to="/contato"
                className="inline-block px-6 py-3 rounded-lg text-white font-medium text-center bg-[#005b96] hover:bg-[#004b7d] transition-shadow shadow"
              >
                Fale conosco
              </Link>

              <Link
                to="/"
                className="inline-block px-6 py-3 rounded-lg text-[#005b96] font-medium text-center border border-[#00a1e0] hover:bg-[#00a1e0]/10 transition"
              >
                Retornar à Página Inicial
              </Link>
            </div>
          </section>

        
          <aside className="w-full md:w-96 bg-[#f8fafc] border border-[#e6f3fb] rounded-lg p-5">
            <h2 className="text-lg font-semibold text-[#005b96] mb-3">
              Etapas para se tornar nosso paciente
            </h2>

            <ol className="list-decimal list-inside space-y-3 text-gray-700">
              <li>
                Compareça ao hospital com seus documentos pessoais.
              </li>
              <li>
                Finalize seu cadastro presencialmente na recepção.
              </li>
              <li>
                Apresente documentos e, se houver, exames prévios solicitados.
              </li>
            </ol>

            <p className="mt-4 text-sm text-gray-600">
              Obs.: Nossa recepção conta com atendimento presencial para finalizar o
              cadastro — experiência com design inovador para facilitar o processo.
            </p>
          </aside>
        </div>

       
        <div className="bg-white/60 p-4 border-t border-gray-100 flex items-center justify-between">
          <span className="text-sm text-gray-600">Hospital das Clínicas</span>
          <div className="flex gap-3">
            <Link
              to="/contato"
              className="text-sm font-medium text-[#00a1e0] hover:underline"
            >
              Fale conosco
            </Link>
            <Link
              to="/"
              className="text-sm font-medium text-[#005b96] hover:underline"
            >
              Início
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
