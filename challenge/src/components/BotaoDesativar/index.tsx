import { useState } from "react";
import { useNavigate } from "react-router-dom";
 
type Props = {
  pacienteId: number; 
};
 

export default function BotaoDesativar({ pacienteId }: Props) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [deleteError, setDeleteError] = useState<string | null>(null);
 
  const handleDesativar = async () => {
    
    const confirmado = window.confirm(
      "TEM CERTEZA?\n\nDeseja realmente desativar sua conta?\nEsta ação não pode ser desfeita."
    );
    if (!confirmado) {
      return; 
    }
 
    setIsLoading(true);
    setDeleteError(null);
 
    try {
    
      const apiUrl = `${import.meta.env.VITE_API_URL}/api/pacientes/${pacienteId}`;
      console.log("Desativando conta via DELETE:", apiUrl);
 
      const response = await fetch(apiUrl, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
      
          "X-API-Key": "chave_secreta_muito_segura_123456",
        },
      });
       
      if (response.status === 204) {
        alert("Conta desativada com sucesso.");
     
        sessionStorage.removeItem("pacienteLogado");
        navigate("/");
      } else {
        
        const errorData = await response.json();
        const errorMessage = errorData.erro || `Erro ${response.status}`;
        console.error("Erro ao desativar:", errorMessage);
        setDeleteError(errorMessage);
      }
    } catch (error) {
      console.error("Falha de conexão ao desativar:", error);
      setDeleteError("Falha de conexão.");
    } finally {
      setIsLoading(false);
    }
  };