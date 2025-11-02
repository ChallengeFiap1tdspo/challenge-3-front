import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
 
type LoginForm = {
  idade: number;
  cpf: string;
};
 
export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();
  const navigate = useNavigate();
 
  const onSubmit = (data: LoginForm) => {
    console.log("Login realizado:", data);
    navigate("/ajuda");
  };
 
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#00a1e0]/30 to-[#005b96]/30">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-lg rounded-2xl p-8 w-80 flex flex-col gap-4 border-t-4 border-[#005b96]"
      >
        <h1 className="text-2xl font-bold text-[#005b96] text-center mb-2">
          Acesso do Paciente
        </h1>
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
      </form>
    </main>
  );
}