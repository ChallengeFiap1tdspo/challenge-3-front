import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
 

type CadastroForm = {
  nome: string;
  email: string;
  idade: number;
  cpf: string;
  telefone?: string; 
  tipoDeficiencia?: string; 
};

export default function Cadastro() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm<CadastroForm>();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  const onSubmit = async (data: CadastroForm) => {
    setIsLoading(true);
    setApiError(null);
    console.log("Tentando cadastrar:", data);
 
    const pacienteParaApi = {
        nome: data.nome,
        idade: Number(data.idade),
        tipoDeficiencia: data.tipoDeficiencia || null,
        telefone: data.telefone || null,
        cpf: data.cpf.replaceAll(/\D/g, ''),
        email: data.email
    };
 
    try {
        const apiUrl = import.meta.env.VITE_API_URL + "/api/pacientes";
        
        console.log("Enviando para API:", apiUrl, pacienteParaApi);
 
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json', 
               
                'X-API-Key': 'chave_secreta_muito_segura_123456'
                
            },
            body: JSON.stringify(pacienteParaApi),
        });

if (response.status === 201) {
            const pacienteCriado = await response.json();
            console.log("Cadastro realizado com sucesso:", pacienteCriado);
            alert("Cadastro realizado com sucesso!");
            reset();
            navigate("/primeiro-contato");
        } else {
           
            const errorData = await response.json();
            const errorMessage = errorData.erro || errorData.message || `Erro ${response.status}: ${response.statusText}`; // Tenta pegar a msg de erro
            console.error("Erro da API:", errorMessage);
            setApiError(errorMessage);
 
            if (response.status === 409) { 
                setError("cpf", { type: "manual", message: "CPF já cadastrado." });
            }
        }
    } catch (error) {
        console.error("Falha ao conectar com a API:", error);
        setApiError("Não foi possível conectar ao servidor. Verifique sua conexão ou tente mais tarde.");
    } finally {
        setIsLoading(false);
    }
  };
    return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#005b96]/30 to-[#00a1e0]/30 p-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-sm flex flex-col gap-4 border-t-4 border-[#00a1e0]"
      >
        <h1 className="text-2xl font-bold text-[#005b96] text-center mb-2">
          Cadastro de Novo Paciente
        </h1>
 
        {/* Campo Nome */}
        <input
          type="text"
          placeholder="Nome completo *"
          {...register("nome", { required: "Informe seu nome completo" })}
          className={`border rounded-lg p-2 focus:outline-none focus:ring-2 ${errors.nome ? 'border-red-500 ring-red-300' : 'border-[#00a1e0] focus:ring-[#005b96]'}`}
          disabled={isLoading}
        />
        {errors.nome && (
          <small className="text-red-600">{errors.nome.message}</small>
        )}
 
        {/* Campo Email */}
        <input
          type="email"
          placeholder="E-mail *"
          {...register("email", {
             required: "Informe seu e-mail",
             pattern: {
                 value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                 message: "Formato de e-mail inválido"
             }
          })}
          className={`border rounded-lg p-2 focus:outline-none focus:ring-2 ${errors.email ? 'border-red-500 ring-red-300' : 'border-[#00a1e0] focus:ring-[#005b96]'}`}
          disabled={isLoading}
        />
        {errors.email && (
          <small className="text-red-600">{errors.email.message}</small>
        )}

        {/* Campo Idade */}
        <input
          type="number"
          placeholder="Idade *"
          {...register("idade", {
             required: "Informe sua idade",
             valueAsNumber: true,
             min: { value: 1, message: "Idade deve ser maior que 0"},
             max: { value: 120, message: "Idade inválida"}
           })}
          className={`border rounded-lg p-2 focus:outline-none focus:ring-2 ${errors.idade ? 'border-red-500 ring-red-300' : 'border-[#00a1e0] focus:ring-[#005b96]'}`}
          disabled={isLoading}
        />
        {errors.idade && (
          <small className="text-red-600">{errors.idade.message}</small>
        )}
 
        {/* Campo CPF */}
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
 
        {/* Campo Telefone (Opcional) */}
        <input
          type="tel"
          placeholder="Telefone (Opcional)"
          {...register("telefone", {
             pattern: {
                 value: /^[\d\s()+-]*$/,
                 message: "Formato de telefone inválido"
             }
          })}
          className={`border rounded-lg p-2 focus:outline-none focus:ring-2 ${errors.telefone ? 'border-red-500 ring-red-300' : 'border-[#00a1e0] focus:ring-[#005b96]'}`}
          disabled={isLoading}
        />
        {errors.telefone && (
          <small className="text-red-600">{errors.telefone.message}</small>)}
 
         {/* Mostra erro geral da API */}
         {apiError && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                <span className="block sm:inline">{apiError}</span>
            </div>
         )}
 
 
        <button
          type="submit"
          className={`py-2 rounded-lg transition font-semibold shadow-md ${isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#00a1e0] text-white hover:bg-[#008ac0]'}`}
          disabled={isLoading}
        >
          {isLoading ? "Cadastrando..." : "Cadastrar"}
        </button>
 
        <Link
          to="/login"
          className="text-[#005b96] text-center hover:underline mt-2"
        >
          Já possui cadastro? Faça login
        </Link>
      </form>
    </main>
  );
}