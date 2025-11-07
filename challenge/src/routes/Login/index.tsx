import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";

type LoginForm = {

  idade: number; 
  cpf: string;
};


const API_URL = import.meta.env.VITE_API_URL="https://challenge-4-java.onrender.com/api";
const API_KEY = import.meta.env.VITE_API_KEY="chave_secreta_muito_segura_123456";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  const onSubmit = async (data: LoginForm) => {
    setIsLoading(true);
    setApiError(null);

    try {
      const response = await fetch(`${API_URL}/pacientes/cpf/${data.cpf}`, {
        method: "GET",
        headers: {
          "X-API-Key": API_KEY, // Chave de API obrigatória
        },
      });

      setIsLoading(false);

      if (response.ok) {
        
        const paciente = await response.json();
        console.log("Login realizado:", paciente);
        
        navigate("/ajuda");
      } else if (response.status === 404) {
      
        setApiError("CPF não encontrado. Verifique os dados ou cadastre-se.");
      } else {
        
        const errorData = await response.json();
        console.error("Erro no login:", errorData);
        setApiError(errorData.erro || "Falha ao tentar login. Tente novamente.");
      }
    } catch (error) {
      setIsLoading(false);
      console.error("Erro de rede:", error);
      setApiError("Não foi possível conectar à API. Verifique sua rede.");
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#00a1e0]/30 to-[#005b96]/30">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-lg rounded-2xl p-8 w-80 flex flex-col gap-4 border-t-4 border-[#005b96]"
      >
        <h1 className="text-2xl font-bold text-[#005b96] text-center mb-2">
          Acesso do Paciente
        </h1>

        <input
          type="number"
          placeholder="Idade"
          {...register("idade", { required: "Informe sua idade" })}
          className="border border-[#00a1e0] rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#005b96]"
        />
        {errors.idade && (
          <small className="text-red-600">{errors.idade.message}</small>
        )}

        <input
          type="text"
          placeholder="CPF"
          {...register("cpf", { required: "Informe seu CPF" })}
          className="border border-[#00a1e0] rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#005b96]"
        />
        {errors.cpf && (
          <small className="text-red-600">{errors.cpf.message}</small>
        )}

                {apiError && <small className="text-red-600">{apiError}</small>}

        <button
          type="submit"
          disabled={isLoading}
          className="bg-[#005b96] text-white py-2 rounded-lg hover:bg-[#004b7d] transition font-semibold shadow-md disabled:bg-gray-400"
        >
          {isLoading ? "Entrando..." : "Entrar"}
        </button>

        <Link
          to="/cadastro"
          className="text-[#00a1e0] text-center hover:underline mt-2"
        >
          Novo paciente? Cadastre-se aqui
        </Link>
      </form>
    </main>
  );
}