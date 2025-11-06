import { useState } from "react";
import { useNavigate } from "react-router-dom";
 
type Props = {
  pacienteId: number; // Recebe o ID do paciente logado
};
 
// Este componente é responsável apenas pela lógica de DELETAR (desativar)
export default function BotaoDesativar({ pacienteId }: Props) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [deleteError, setDeleteError] = useState<string | null>(null);
 
  const handleDesativar = async () => {
    // Confirmação MUITO importante
    const confirmado = window.confirm(
      "TEM CERTEZA?\n\nDeseja realmente desativar sua conta?\nEsta ação não pode ser desfeita."
    );
    if (!confirmado) {
      return; // Para se o usuário clicar em "Cancelar"
    }
 
    setIsLoading(true);
    setDeleteError(null);
 
    try {
      // Endpoint: DELETE /api/pacientes/{id}
      const apiUrl = `${import.meta.env.VITE_API_URL}/api/pacientes/${pacienteId}`;
      console.log("Desativando conta via DELETE:", apiUrl);
 
      const response = await fetch(apiUrl, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          // A Chave de API é obrigatória!
          "X-API-Key": "chave_secreta_muito_segura_123456",
        },
      });