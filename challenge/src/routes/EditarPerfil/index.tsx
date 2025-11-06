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