
import { useState } from 'react';
 

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;
 
type Props = {
  pacienteId: number;
  onDesativado: () => void; 
};
 
export default function BotaoDesativar({ pacienteId, onDesativado }: Props) {
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState<string | null>(null);
 
  const handleDesativar = async () => {
    
    console.log("Tentando desativar o paciente com ID:", pacienteId);
     
   
    if (!pacienteId) {
      setErro("ID do paciente não fornecido.");
      return;
    }
 
    if (!API_KEY) {
      setErro("VITE_API_KEY não configurada no .env");
      console.error("Erro: VITE_API_KEY não está definida no .env");
      return;
    }
 
    if (!window.confirm("Tem certeza que deseja desativar esta conta?")) {
      return;
    }
 
    setLoading(true);
    setErro(null);
 
    try {

      const response = await fetch(`${API_URL}/api/pacientes/${pacienteId}`, {
        method: 'DELETE',
        headers: {
    
          'X-API-Key': API_KEY,
          'Content-Type': 'application/json',
        },
      });
 
   
      if (response.status === 204) {
        alert("Conta desativada com sucesso.");
        onDesativado();
      }
  
      else if (response.status === 404) {
        
        setErro("Paciente não encontrado ou já inativo. Não foi possível desativar.");
      } else if (response.status === 401 || response.status === 403) {
        setErro("Erro de autorização. Verifique a Chave de API.");
      }
      
      else {
        const data = await response.json();
        setErro(data.erro || "Ocorreu um erro ao desativar a conta.");
      }
 
    } catch (error) {
   
      console.error("Falha na requisição:", error);
      setErro("Falha de conexão. Verifique o console e se a API está rodando.");
    } finally {
      setLoading(false);
    }
  };
 
  return (
    <div>
      <button
        onClick={handleDesativar}
        disabled={loading}
        className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition disabled:opacity-50"
      >
        {loading ? "Desativando..." : "Desativar Conta"}
      </button>
      {erro && (
        <small className="text-red-600" style={{ display: 'block', marginTop: '8px' }}>
          {erro}
        </small>
      )}
    </div>
  );
}