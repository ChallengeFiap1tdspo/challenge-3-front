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
        }
      catch (error) {
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