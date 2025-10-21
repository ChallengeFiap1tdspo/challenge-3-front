import ImagemIdosoNaTeleConsulta from "../../img/ImagemIdosoNaTeleConsulta.jpg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="flex flex-col md:flex-row items-center justify-center w-4/5 gap-10">
        <section className="text-center md:text-left space-y-4 max-w-lg">
          <h1 className="text-2xl md:text-3xl font-bold text-[#005b96]">
            Seja bem-vindo à Teleconsulta do Hospital das Clínicas
          </h1>
          <p className="text-gray-700">
            Estamos aqui para oferecer o suporte que você precisa para sua
            consulta online.
          </p>

          <div className="flex flex-col items-center md:items-start gap-4 mt-6">

            <Link
              to="/login"
              className="w-3/4 md:w-2/3 bg-[#005b96] text-white text-lg py-3 rounded-lg text-center hover:bg-[#004b7d] transition"
            >
              Caso seja nosso paciente, clique aqui para obter ajuda
            </Link>

            <Link
              to="/cadastro"
              className="w-3/4 md:w-2/3 bg-[#00a1e0] text-white text-lg py-3 rounded-lg text-center hover:bg-[#008ac0] transition"
            >
              Novo paciente? Cadastre-se aqui
            </Link>
          </div>
        </section>

        <section>
          <img
            src={ImagemIdosoNaTeleConsulta}
            alt="Paciente usando tablet para consulta online"
            className="w-full max-w-[600px] rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          />
        </section>
      </div>
    </main>
  );
}
