

import React from "react";
type Step = {
  order: number;
  title: string;
  description: string;
};

type Tutorial = {
  id: number;
  title: string;
  description: string;
  videoUrl?: string;
};

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
    description: "Assista a um tutorial simples mostrando cada passo do login.",
    videoUrl: "https://drive.google.com/file/d/1_0PZ1fi3FKTEP9mPQ2QC2JBMCdBslFLE/view?usp=sharing",
  },
  {
    id: 2,
    title: "Vídeo Explicativo",
    description: "Tutorial completo mostrando como acessar o portal e iniciar a consulta.",
    videoUrl: "https://drive.google.com/file/d/19GFDe1AETkPKZTzSg7ld1IKye0t4CS6-/view?usp=sharing",
  },
];

export default function AjudaHC() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-6">
      <div className="max-w-5xl mx-auto">
        <header className="rounded-2xl bg-[#005b96] text-white p-6 shadow-md mb-6">
          <h1 className="text-2xl md:text-3xl font-extrabold">Portal de Telemedicina — Hospital das Clínicas</h1>
          <p className="mt-2 text-sm md:text-base opacity-90">Guia completo para acesso aos serviços de Teleconsulta e recursos digitais</p>
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

            <div className="mt-4 p-4 bg-white rounded-lg border-l-4 border-[#0073b3] shadow-sm">
              <p className="text-sm text-gray-700">Esta tela é funcional sem backend: os tutoriais abrem os links que você forneceu.</p>
            </div>
          </section>

       
          <aside className="space-y-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold text-[#003f63]">Tutoriais em vídeo</h3>
              <p className="text-sm text-gray-600">Clique em Assistir para abrir o vídeo em nova aba (Drive).</p>
            </div>

            <div className="space-y-3">
              {tutorials.map((t) => (
                <div key={t.id} className="bg-white rounded-lg shadow overflow-hidden">
                  <div className="flex items-center gap-3 p-3">
                    <div className="w-14 h-10 flex-none bg-[#e6f4ff] rounded-md flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 5v14l11-7L8 5z" fill="#0077c8" />
                      </svg>
                    </div>

                    <div className="flex-1">
                      <h4 className="font-medium text-[#003f63]">{t.title}</h4>
                      <p className="text-xs text-gray-600">{t.description}</p>
                    </div>
                  </div>

                  <div className="p-3 border-t">
                    <a
                      href={t.videoUrl || "#"}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block px-3 py-1 rounded-lg text-sm font-semibold bg-[#0077c8] text-white hover:bg-[#005b96] transition"
                    >
                      Assistir
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </main>

        <footer className="mt-8 text-center text-xs text-gray-500">Feito como exercício — versão sem API, funcional sozinho.</footer>
      </div>
    </div>
  );
}
