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