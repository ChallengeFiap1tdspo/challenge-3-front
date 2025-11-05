import ImagemIdosoNaTeleConsulta from "../../img/ImagemIdosoNaTeleConsulta.jpg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl gap-10">
        
        <section className="text-center md:text-left space-y-4 max-w-xl px-2">
          <h1 className="text-2xl md:text-3xl font-bold text-[#005b96]">
            Seja bem-vindo à Teleconsulta do Hospital das Clínicas
          </h1>
          <p className="text-gray-700 text-base md:text-lg">
            Estamos aqui para oferecer o suporte que você precisa para sua
            consulta online.
          </p>

          <div className="flex flex-col items-center md:items-start gap-4 mt-6 w-full">
            <Link
              to="/login"
              className="w-3/4 sm:w-2/3 md:w-56 bg-[#005b96] text-white text-base md:text-lg py-3 rounded-lg text-center hover:bg-[#004b7d] transition"
            >
              Caso seja nosso paciente, clique aqui para obter ajuda
            </Link>

            <Link
              to="/cadastro"
              className="w-3/4 sm:w-2/3 md:w-56 bg-[#00a1e0] text-white text-base md:text-lg py-3 rounded-lg text-center hover:bg-[#008ac0] transition"
            >
              Novo paciente? Cadastre-se aqui
            </Link>
          </div>
        </section>

        <section className="flex justify-center w-full md:w-auto">
          <img
            src={ImagemIdosoNaTeleConsulta}
            alt="Paciente usando tablet para consulta online"
            className="w-full max-w-sm sm:max-w-md md:max-w-lg rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          />
        </section>
      </div>
    </main>
  );
}
