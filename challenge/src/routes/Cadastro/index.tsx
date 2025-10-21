import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";

type CadastroForm = {
  nome: string;
  email: string;
  idade: number;
  cpf: string;
};

export default function Cadastro() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CadastroForm>();
  const navigate = useNavigate();

  const onSubmit = (data: CadastroForm) => {
    console.log("Cadastro realizado:", data);
    navigate("/primeiro-contato");
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
        {errors.nome && (
          <small className="text-red-600">{errors.nome.message}</small>
        )}

        <input
          type="email"
          placeholder="E-mail"
          {...register("email", { required: "Informe seu e-mail" })}
          className="border border-[#00a1e0] rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#005b96]"
        />
        {errors.email && (
          <small className="text-red-600">{errors.email.message}</small>
        )}

        <input
          type="number"
          placeholder="Idade"
          {...register("idade", { required: "Informe sua idade" })}
          className="border border-[#00a1e0] rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#005b96]"
        />
        {errors.idade && (
          <small className="text-red-600">{errors.idade.message}</small>
        )}

        <input
          type="text"
          placeholder="CPF"
          {...register("cpf", { required: "Informe seu CPF" })}
          className="border border-[#00a1e0] rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#005b96]"
        />
        {errors.cpf && (
          <small className="text-red-600">{errors.cpf.message}</small>
        )}

        <button
          type="submit"
          className="bg-[#00a1e0] text-white py-2 rounded-lg hover:bg-[#008ac0] transition font-semibold shadow-md"
        >
          Cadastrar
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
