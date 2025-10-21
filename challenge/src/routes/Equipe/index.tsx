import { useEffect } from "react";
import fotoEmanuel from "../../img/FotoEmanuel.jpg";
import fotoPaulo from "../../img/FotoPaulo.jpg";
import fotoAlef from "../../img/FotoAlef.jpg";
import logoLinkedin from "../../img/LogoLinkedlin.png";
import logoGithub from "../../img/GitHub-logo.png";

type IntegranteType = {
  nome: string;
  rm: string;
  turma: string;
  foto: string;
  linkedin: string;
  github: string;
};

export default function Integrantes() {
  useEffect(() => {
    document.title = "Equipe - FIAP";
  }, []);

  const integrantes: IntegranteType[] = [
    {
      nome: "Emanuel Italo",
      rm: "RM561337",
      turma: "1TDSPO",
      foto: fotoEmanuel,
      linkedin: "https://www.linkedin.com/in/emanuel-italo-b7865b184/",
      github: "https://github.com/Emanuel-Italo",
    },
    {
      nome: "Paulo Estalise",
      rm: "RM563811",
      turma: "1TDSPO",
      foto: fotoPaulo,
      linkedin: "https://www.linkedin.com/in/paulo-henrique-estalise-a2324a271/",
      github: "https://github.com/Paulo-Estalise",
    },
    {
      nome: "Alef Rodrigues",
      rm: "RM563272",
      turma: "1TDSPO",
      foto: fotoAlef,
      linkedin: "https://www.linkedin.com/in/alef-rodrigues-985203271/",
      github: "https://github.com/AlefRodrigues94",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 flex flex-col items-center py-12 px-4">
      <h1 className="text-3xl font-bold text-[#005b96] mb-3">Conheça Nossa Equipe</h1>
      <p className="text-gray-600 mb-10 text-center max-w-md">
        Uma equipe dedicada e comprometida com a excelência acadêmica e profissional.
      </p>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 w-full max-w-5xl">
        {integrantes.map((membro, i) => (
          <article
            key={i}
            className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center transition-transform hover:scale-105"
          >
            <img
              src={membro.foto}
              alt={`Foto de ${membro.nome}`}
              loading="lazy"
              className="w-32 h-32 object-cover rounded-full mb-4"
            />
            <h3 className="text-lg font-semibold">{membro.nome}</h3>
            <p className="text-gray-500">{membro.rm}</p>
            <p className="text-gray-400 text-sm mb-4">{membro.turma}</p>

            <div className="flex gap-4">
              <a href={membro.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${membro.nome} LinkedIn`}>
                <img src={logoLinkedin} alt="LinkedIn" className="w-6 h-6 hover:opacity-80" />
              </a>
              <a href={membro.github} target="_blank" rel="noopener noreferrer" aria-label={`${membro.nome} GitHub`}>
                <img src={logoGithub} alt="GitHub" className="w-6 h-6 hover:opacity-80" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
