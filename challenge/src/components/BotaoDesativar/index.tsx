import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  pacienteId: number;
};

export default function BotaoDesativar({ pacienteId }: Props) {
  const navigate = useNavigate();
  const [deleteError, setDeleteError] = useState("");

  async function handleDelete() {
    try {
      const response = await fetch(`http://localhost:8080/paciente/${pacienteId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        setDeleteError("Erro ao desativar paciente.");
        return;
      }

      navigate("/pacientes");
    } catch {
      setDeleteError("Falha de conexão.");
    }
  }

  return (
    <div className="flex flex-col items-end gap-2">
      <button
        onClick={handleDelete}
        className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition"
      >
        Desativar Conta
      </button>

      {deleteError && (
        <p className="text-sm text-red-600 font-semibold">{deleteError}</p>
      )}
    </div>
  );
}
