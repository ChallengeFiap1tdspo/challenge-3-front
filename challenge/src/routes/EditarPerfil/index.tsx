import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import type { Paciente } from "../../types/Paciente";
import BotaoDesativar from "../../components/BotaoDesativar";
 
 
 
type PerfilForm = Omit<Paciente, "id" | "ativo">;
 
export default function EditarPerfil() {
  const navigate = useNavigate();
  const [paciente, setPaciente] = useState<Paciente | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
 
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<PerfilForm>();
 
 
  useEffect(() => {
   
    const pacienteLogadoString = sessionStorage.getItem("pacienteLogado");
 
    if (!pacienteLogadoString) {
     
      alert("Você precisa estar logado para editar seu perfil.");
      navigate("/login");
      return;
    }
 
 
    const pacienteLogado: Paciente = JSON.parse(pacienteLogadoString);
    setPaciente(pacienteLogado);
   
    reset(pacienteLogado);
  }, [navigate, reset]);
 
 
  const onSubmit = async (data: PerfilForm) => {
    if (!paciente) return;
 
    setIsLoading(true);
    setApiError(null);
    setSuccess(null);
 
   
    const pacienteParaApi: Paciente = {
        id: paciente.id,
        ativo: paciente.ativo,
        nome: data.nome,
        idade: Number(data.idade),
        tipoDeficiencia: data.tipoDeficiencia || null,
        telefone: data.telefone || null,
        cpf: paciente.cpf,
        email: paciente.email,
    };
 
    try {
        const apiUrl = `${import.meta.env.VITE_API_URL}/api/pacientes/${paciente.id}`;
      console.log("Enviando PUT para API:", apiUrl, pacienteParaApi);
 
      const response = await fetch(apiUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
       
          "X-API-Key": "chave_secreta_muito_segura_123456",
        },
        body: JSON.stringify(pacienteParaApi),
      });
 
      if (response.ok) {
        const pacienteAtualizado = await response.json();
        console.log("Perfil atualizado com sucesso:", pacienteAtualizado);
       
       
        sessionStorage.setItem("pacienteLogado", JSON.stringify(pacienteAtualizado));
        setPaciente(pacienteAtualizado);
       
        setSuccess("Dados atualizados com sucesso!");
        setTimeout(() => setSuccess(null), 3000);
      } else {
        const errorData = await response.json();
        const errorMessage = errorData.erro || `Erro ${response.status}`;
        console.error("Erro da API (PUT):", errorMessage);
        setApiError(errorMessage);
      }
    } catch (error) {
      console.error("Falha de conexão (PUT):", error);
      setApiError("Falha de conexão.");
    } finally {
      setIsLoading(false);
    }
  };
 
 
  if (!paciente) {
      return <main className="min-h-screen p-4">Carregando dados do perfil...</main>
  }
 
 
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#005b96]/10 to-[#00a1e0]/10 p-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-sm flex flex-col gap-4 border-t-4 border-[#005b96]"
      >
        <h1 className="text-2xl font-bold text-[#005b96] text-center mb-2">
          Editar Perfil
        </h1>
 