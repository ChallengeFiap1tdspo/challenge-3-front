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
 
 