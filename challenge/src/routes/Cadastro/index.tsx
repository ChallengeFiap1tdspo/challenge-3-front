import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import type { CadastroForm } from "../../types/CadastroForm";

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
  const [success, setSuccess] = useState(false);

  const onSubmit = async (data: CadastroForm) => {
    setIsLoading(true);
    setApiError(null);

    const pacienteParaApi = {
      nome: data.nome,
      idade: Number(data.idade),
      tipoDeficiencia: data.tipoDeficiencia || null,
      telefone: data.telefone || null,
      cpf: data.cpf.replaceAll(/\D/g, ""),
      email: data.email,
    };

    try {
      const apiUrl = import.meta.env.VITE_API_URL + "/api/pacientes";

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "X-API-Key": "chave_secreta_muito_segura_123456",
        },
        body: JSON.stringify(pacienteParaApi),
      });

      if (response.status === 201) {
        reset();
        setSuccess(true);
        setTimeout(() => navigate("/primeiro-contato"), 1600);
      } else {
        const errorData = await response.json();
        setApiError(errorData.erro || errorData.message || `Erro ${response.status}`);
        if (response.status === 409) {
          setError("cpf", { type: "manual", message: "CPF já cadastrado." });
        }
      }
    } catch {
      setApiError("Falha de conexão.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#005b96]/30 to-[#00a1e0]/30 p-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-sm flex flex-col gap-4 border-t-4 border-[#00a1e0]"
      >
        <h1 className="text-2xl font-bold text-[#005b96] text-center mb-2">
          Cadastro de Novo Paciente
        </h1>

        <input
          type="text"
          placeholder="Nome completo *"
          {...register("nome", { required: "Informe seu nome completo" })}
          className="border rounded-lg p-2"
        />
        {errors.nome && <small className="text-red-600">{errors.nome.message}</small>}

        <input
          type="email"
          placeholder="E-mail *"
          {...register("email", { required: "Informe seu e-mail" })}
          className="border rounded-lg p-2"
        />
        {errors.email && <small className="text-red-600">{errors.email?.message}</small>}

        <input
          type="number"
          placeholder="Idade *"
          {...register("idade", { required: "Informe sua idade" })}
          className="border rounded-lg p-2"
        />
        {errors.idade && <small className="text-red-600">{errors.idade.message}</small>}

        <input
          type="text"
          placeholder="CPF (somente números) *"
          {...register("cpf", { required: "Informe seu CPF" })}
          className="border rounded-lg p-2"
        />
        {errors.cpf && <small className="text-red-600">{errors.cpf.message}</small>}

        <input
          type="tel"
          placeholder="Telefone (Opcional)"
          {...register("telefone")}
          className="border rounded-lg p-2"
        />

        {apiError && (
          <div className="bg-red-100 border border-red-400 text-red-700 p-3 rounded">
            {apiError}
          </div>
        )}
        {success && (
          <div className="bg-green-100 border border-green-400 text-green-700 p-3 rounded animate-pulse">
            Cadastro realizado com sucesso!
          </div>
        )}

        <button
          type="submit"
          className={`py-2 rounded-lg ${
            isLoading ? "bg-gray-400" : "bg-[#00a1e0]"
          } text-white font-semibold shadow-md`}
          disabled={isLoading}
        >
          {isLoading ? "Cadastrando..." : "Cadastrar"}
        </button>

        <Link to="/login" className="text-[#005b96] text-center hover:underline">
          Já possui cadastro? Faça login
        </Link>
      </form>
    </main>
  );
}
