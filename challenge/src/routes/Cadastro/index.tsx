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