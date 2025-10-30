import { useEffect } from "react";
export default function Sobre() {
  useEffect(() => {
    document.title = "Sobre - FIAP";
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 flex items-start justify-center py-12 px-4">
      <section className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-8">
     
        <h1 className="text-2xl md:text-3xl font-bold text-[#005b96] mb-3">
          Sobre o Projeto
        </h1>


        <p className="text-gray-700 leading-relaxed mb-6">
          Estamos desenvolvendo uma plataforma de teleconsulta voltada para pessoas
          idosas, com foco em usabilidade, acessibilidade e simplicidade. A ideia é
          garantir que qualquer pessoa, mesmo com pouca experiência em tecnologia,
          consiga marcar e participar de consultas online.
        </p>

        
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Objetivo</h2>
            <p className="text-gray-600 mb-4">
              Democratizar o acesso à saúde digital, oferecendo uma interface limpa,
              instruções claras e um fluxo reduzido de passos para realizar agendamentos
              e consultas.
            </p>

            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Interface clara com textos legíveis.</li>
              <li>Navegação simples e poucos cliques para agendar.</li>
              <li>Compatível com celulares e computadores (navegadores modernos).</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Acessibilidade & Segurança
            </h2>
            <p className="text-gray-600 mb-4">
              Adotamos práticas de acessibilidade e medidas básicas de segurança, como conexões via HTTPS
              e validação mínima dos dados.
            </p>
          </div>
        </div>

      
        <p className="mt-6 text-sm text-gray-500">
          Projeto realizado por alunos da turma <span className="font-medium">1TDSPO</span>.
        </p>
      </section>
    </main>
  );
}
