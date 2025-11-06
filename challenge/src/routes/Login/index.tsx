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
 