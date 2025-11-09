import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import type { CadastroForm } from "../../types/CadastroForm";

const API_URL = import.meta.env.VITE_API_URL || "https://challenge-4-java.onrender.com/api";
const API_KEY = import.meta.env.VITE_API_KEY || "chave_secreta_muito_segura_123456";

export default function Cadastro() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CadastroForm>();

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  const onSubmit = async (data: CadastroForm) => {
    setIsLoading(true);
    setApiError(null);

    const pacienteData = {
      nome: data.nome,
      email: data.email,
      idade: Number(data.idade),
      cpf: data.cpf,
      tipoDeficiencia: data.tipoDeficiencia || null,
      telefone: data.telefone || null,
    };

    try {
      const response = await fetch(`${API_URL}/pacientes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": API_KEY,
        },
        body: JSON.stringify(pacienteData),
      });

      setIsLoading(false);

      if (response.ok) {
        navigate("/primeiro-contato");
      } else if (response.status === 409) {
        setApiError("Este CPF já está cadastrado.");
      } else {
        const errorData = await response.json();
        setApiError(errorData.erro || "Falha ao cadastrar. Tente novamente.");
      }
    } catch (error: unknown) {
      setIsLoading(false);
      if (error instanceof Error) {
        setApiError("Não foi possível conectar à API. Verifique sua rede.");
      } else {
        setApiError("Erro inesperado.");
      }
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#005b96]/30 to-[#00a1e0]/30">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-lg rounded-2xl p-8 w-80 flex flex-col gap-4 border-t-4 border-[#00a1e0]"
      >
        <h1 className="text-2xl font-bold text-[#005b96] text-center mb-2">
          Cadastro de Novo Paciente
        </h1>

        <input
          type="text"
          placeholder="Nome completo"
          {...register("nome", { required: "Informe seu nome" })}
          className="border border-[#00a1e0] rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#005b96]"
        />
        {errors.nome && <small className="text-red-600">{errors.nome.message}</small>}

        <input
          type="email"
          placeholder="E-mail"
          {...register("email", { required: "Informe seu e-mail" })}
          className="border border-[#00a1e0] rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#005b96]"
        />
        {errors.email && <small className="text-red-600">{errors.email.message}</small>}

        <input
          type="number"
          placeholder="Idade"
          {...register("idade", { required: "Informe sua idade" })}
          className="border border-[#00a1e0] rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#005b96]"
        />
        {errors.idade && <small className="text-red-600">{errors.idade.message}</small>}

        <input
          type="text"
          placeholder="CPF"
          {...register("cpf", { required: "Informe seu CPF" })}
          className="border border-[#00a1e0] rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#005b96]"
        />
        {errors.cpf && <small className="text-red-600">{errors.cpf.message}</small>}

        {apiError && <small className="text-red-600">{apiError}</small>}

        <button
          type="submit"
          disabled={isLoading}
          className="bg-[#00a1e0] text-white py-2 rounded-lg hover:bg-[#008ac0] transition font-semibold shadow-md disabled:bg-gray-400"
        >
          {isLoading ? "Cadastrando..." : "Cadastrar"}
        </button>

        <Link
          to="/login"
          className="text-[#005b96] text-center hover:underline mt-2"
        >
          Já possui cadastro? Faça login
        </Link>
      </form>
    </main>
  );
}
