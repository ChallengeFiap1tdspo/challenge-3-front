import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
 
import type { LoginForm } from "../../types/LoginForm";
 
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
 
    const cpfLimpo = data.cpf.replaceAll(/\D/g, "");
 
    try {
     
      const apiUrl = `${import.meta.env.VITE_API_URL}/api/pacientes/cpf/${cpfLimpo}`;
      console.log("Chamando API (GET):", apiUrl);
 
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          Accept: "application/json",
       
          "X-API-Key": "chave_secreta_muito_segura_123456",
        },
      });
 
      if (response.ok) {
        const pacienteEncontrado = await response.json();
        console.log("Login realizado com sucesso:", pacienteEncontrado);
 
        sessionStorage.setItem('pacienteLogado', JSON.stringify(pacienteEncontrado));
 
        setApiError(null);
        navigate("/ajuda");
 
      } else if (response.status === 404) {
       
        console.error("Erro no login: CPF não encontrado.");
        setApiError("CPF não encontrado ou cadastro inativo.");
      } else if (response.status === 401) {
         console.error("Erro no login: Chave de API errada ou faltando.");
         setApiError("Erro de autenticação. Contate o suporte.");
      } else {
     
        const errorData = await response.json();
        const errorMessage = errorData.erro || `Erro ${response.status}: ${response.statusText}`;
        console.error("Erro da API no login:", errorMessage);
        setApiError(errorMessage);
      }
 
    } catch (error) {
   
      console.error("Falha ao conectar com a API:", error);
      setApiError("Não foi possível conectar ao servidor. Tente novamente mais tarde.");
    } finally {
      setIsLoading(false);
    }
  };
 
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#00a1e0]/30 to-[#005b96]/30 p-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-sm flex flex-col gap-4 border-t-4 border-[#005b96]"
      >
        <h1 className="text-2xl font-bold text-[#005b96] text-center mb-2">
          Acesso do Paciente
        </h1>
 
     
     
        <input
          type="text"
          placeholder="CPF (somente números) *"
          {...register("cpf", {
            required: "Informe seu CPF",
            pattern: {
                value: /^\d{11}$/,
                message: "CPF deve conter 11 números"
            }
          })}
          className={`border rounded-lg p-2 focus:outline-none focus:ring-2 ${errors.cpf ? 'border-red-500 ring-red-300' : 'border-[#00a1e0] focus:ring-[#005b96]'}`}
          disabled={isLoading}
        />
        {errors.cpf && (
          <small className="text-red-600">{errors.cpf.message}</small>
        )}
 
       
        {apiError && (
          <div className="bg-red-100 border border-red-400 text-red-700 p-3 rounded">
            {apiError}
          </div>
        )}
 
        <button
          type="submit"
          className={`py-2 rounded-lg transition font-semibold shadow-md ${isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#005b96] text-white hover:bg-[#004b7d]'}`}
          disabled={isLoading}
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