import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

import BotaoEditarPerfil from "../../components/EditarPerfilButton";
import type { Paciente } from "../../types/Paciente";
import type { Step } from "../../types/Step";
import type { Tutorial } from "../../types/Tutorial";
import BotaoDesativar from "../../components/BotaoDesativar";

const steps: Step[] = [
  { order: 1, title: "Primeiro acesso", description: "Acesse o portal do Paciente HC pelo site ou aplicativo." },
  { order: 2, title: "Cadastrar Senha", description: 'Clique na opção "Cadastrar Senha".' },
  { order: 3, title: "Localizar Paciente", description: "Digite o número do CPF do paciente e clique em Localizar Paciente." },
  { order: 4, title: "Confirmar Dados", description: "Informe dados para contato e registre uma senha de acesso." },
  { order: 5, title: "Acessar Portal", description: 'Clique em "Cadastrar Senha" e depois "Acessar Agora".' },
  { order: 6, title: "Login", description: "Digite o CPF e a senha cadastrada." },
  { order: 7, title: "Teleconsultas", description: "Acesse Teleconsultas e aceite o termo de autorização." },
  { order: 8, title: "Iniciar Atendimento", description: "Habilite câmera e microfone e aguarde o profissional entrar na sala." },
];

const tutorials: Tutorial[] = [
  {
    id: 1,
    title: "Primeiro Acesso ao Portal",
    description: "Tutorial simples explicando cada passo.",
    videoUrl: "https://drive.google.com/file/d/1_0PZ1fi3FKTEP9mPQ2QC2JBMCdBslFLE/preview",
  },
  {
    id: 2,
    title: "Vídeo Explicativo",
    description: "Como acessar o portal e iniciar a consulta.",
    videoUrl: "https://drive.google.com/file/d/19GFDe1AETkPKZTzSg7ld1IKye0t4CS6-/preview",
  },
];

export default function Ajuda() {
  const { id } = useParams();
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

  if (id) {
    const tutorial = tutorials.find((t) => t.id === Number(id));

    if (!tutorial) {
      return (
        <main className="min-h-screen flex items-center justify-center text-[#003f63] p-6 relative">
          <div className="text-center space-y-4">
            <h1 className="text-2xl font-bold">Tutorial não encontrado</h1>
            <Link to="/ajuda" className="px-4 py-2 rounded-lg bg-[#0077c8] text-white">
              Voltar
            </Link>
          </div>

          <div className="fixed bottom-6 right-6 flex flex-col gap-2">
            <BotaoEditarPerfil />
            <BotaoDesativar pacienteId={paciente.id} onDesativado={() => navigate("/")} />
          </div>
        </main>
      );
    }

    return (
      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-6 relative">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl text-[#003f63] font-bold">{tutorial.title}</h1>
          <p className="mt-2 text-gray-700">{tutorial.description}</p>

          <div className="mt-6 shadow-lg rounded-xl overflow-hidden">
            <iframe src={tutorial.videoUrl} className="w-full h-80" allow="autoplay" allowFullScreen></iframe>
          </div>

          <div className="mt-8">
            <Link to="/ajuda" className="px-4 py-2 rounded-lg bg-[#0077c8] text-white">
              Voltar
            </Link>
          </div>
        </div>

        <div className="fixed bottom-6 right-6 flex flex-col gap-2">
          <BotaoEditarPerfil />
          <BotaoDesativar pacienteId={paciente.id} onDesativado={() => navigate("/")} />
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-6 relative">
      <div className="max-w-5xl mx-auto">
        <header className="rounded-2xl bg-[#005b96] text-white p-6 shadow-md mb-6">
          <h1 className="text-2xl md:text-3xl font-extrabold">Portal de Telemedicina — Hospital das Clínicas</h1>
          <p className="mt-2 text-sm md:text-base opacity-90">Guia completo para acesso aos serviços de Teleconsulta</p>
        </header>

        <main className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <section className="md:col-span-2 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-[#003f63]">Como Funciona</h2>
              <span className="text-sm text-gray-600">Passo a passo</span>
            </div>

            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
              {steps.map((s) => (
                <article key={s.order} className="flex gap-4 items-start bg-white rounded-lg p-4 shadow hover:shadow-md transition">
                  <div className="flex-none w-10 h-10 rounded-full flex items-center justify-center font-bold text-white bg-[#0077c8]">
                    {s.order}
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#003f63]">{s.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{s.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <aside className="space-y-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold text-[#003f63]">Tutoriais em vídeo</h3>
              <p className="text-sm text-gray-600">Clique em Assistir para abrir o player.</p>
            </div>

            <div className="space-y-3">
              {tutorials.map((t) => (
                <div key={t.id} className="bg-white rounded-lg shadow overflow-hidden">
                  <div className="flex items-center gap-3 p-3">
                    <div className="w-14 h-10 flex-none bg-[#e6f4ff] rounded-md flex items-center justify-center">▶</div>
                    <div className="flex-1">
                      <h4 className="font-medium text-[#003f63]">{t.title}</h4>
                      <p className="text-xs text-gray-600">{t.description}</p>
                    </div>
                  </div>

                  <div className="p-3 border-t">
                    <Link
                      to={`/ajuda/${t.id}`}
                      className="inline-block px-3 py-1 rounded-lg text-sm font-semibold bg-[#0077c8] text-white hover:bg-[#005b96] transition"
                    >
                      Assistir
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </main>

        <div className="mt-6 text-sm flex justify-between text-gray-600">
          <Link to="/">Página inicial</Link>
          <Link to="/contato" className="text-[#00a1e0]">Suporte</Link>
        </div>
      </div>

      <div className="fixed bottom-6 right-6 flex flex-col gap-2">
        <BotaoEditarPerfil />
        <BotaoDesativar pacienteId={paciente.id} onDesativado={() => navigate("/")} />
      </div>
    </main>
  );
}
