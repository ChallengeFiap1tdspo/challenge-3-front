import { useEffect } from "react";
import FaqItem from "../../components/Faq/FaqItem"; 

type FaqItemType = {
  q: string;
  a: string;
};

const faqData: FaqItemType[] = [
  {
    q: "1. Qual é o objetivo principal do projeto?",
    a: "Desenvolver um site para facilitar o acesso à teleconsulta, pensado especialmente para pessoas idosas ou com pouca familiaridade com tecnologia. Queremos democratizar o acesso à saúde digital.",
  },
  {
    q: "2. A plataforma será gratuita?",
    a: "Sim. Haverá uma versão totalmente gratuita com os serviços essenciais de telemedicina.",
  },
  {
    q: "3. É seguro usar meus dados no aplicativo?",
    a: "Sim. Utilizamos criptografia e seguimos normas de proteção de dados para proteger suas informações.",
  },
  {
    q: "4. Quais são os requisitos técnicos para usar a plataforma?",
    a: "Nenhum requisito especial. O site funciona em celulares e computadores, em navegadores modernos.",
  },
  {
    q: "5. Quando a plataforma estará disponível ao público?",
    a: "Estamos na fase final de desenvolvimento e testes. Previsão de lançamento: final de 2025.",
  },
];

export default function Faq() {
  useEffect(() => {
    document.title = "FAQ";
  }, []);

  return (
    <main className="min-h-screen bg-gray-100 p-6 flex items-start justify-center">
      <section className="w-full max-w-2xl">
        <h1 className="text-center text-2xl font-bold mb-4 text-[#005b96]">Perguntas Frequentes</h1>

        <ul className="space-y-3">
          {faqData.map((item, i) => (
            <FaqItem key={i} index={i + 1} q={item.q} a={item.a} />
          ))}
        </ul>
      </section>
    </main>
  );
}
