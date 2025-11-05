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
  const [status, setStatus] = useState<string>("");

  const onSubmit = (data: LoginForm) => {
    const cpfDigits = data.cpf.replace(/\D/g, "");

    if (data.idade >= 18 && cpfDigits.length === 11) {
      setStatus("Acesso permitido!");
      setTimeout(() => navigate("/ajuda"), 1200);
    } else {
      setStatus("Acesso negado! Verifique seus dados.");
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#00a1e0]/30 to-[#005b96]/30">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-lg rounded-2xl p-8 w-80 flex flex-col gap-4 border-t-4 border-[#005b96]"
        noValidate
      >
        <h1 className="text-2xl font-bold text-[#005b96] text-center mb-2">
          Acesso do Paciente
        </h1>

        <input
          type="number"
          placeholder="Idade"
          {...register("idade", {
            required: "Informe sua idade",
            min: { value: 0, message: "Idade inválida" },
            valueAsNumber: true,
          })}
          className="border border-[#00a1e0] rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#005b96]"
        />
        {errors.idade?.message && (
          <small className="text-red-600">{errors.idade.message}</small>
        )}

        <input
          type="text"
          placeholder="CPF (somente números)"
          {...register("cpf", {
            required: "Informe seu CPF",
            validate: (v) => {
              const digits = v.replace(/\D/g, "");
              if (digits.length !== 11) return "CPF deve ter 11 dígitos";
              return true;
            },
          })}
          className="border border-[#00a1e0] rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#005b96]"
        />
        {errors.cpf?.message && (
          <small className="text-red-600">{errors.cpf.message}</small>
        )}

        <button
          type="submit"
          className="bg-[#005b96] text-white py-2 rounded-lg hover:bg-[#004b7d] transition font-semibold shadow-md"
        >
          Entrar
        </button>

        <Link
          to="/cadastro"
          className="text-[#00a1e0] text-center hover:underline mt-2"
        >
          Novo paciente? Cadastre-se aqui
        </Link>

        {status && (
          <p
            className={`text-center font-semibold mt-2 ${
              status.includes("permitido") ? "text-green-600" : "text-red-600"
            }`}
          >
            {status}
          </p>
        )}
      </form>
    </main>
  );
}
