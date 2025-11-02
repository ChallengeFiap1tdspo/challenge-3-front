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
      ></form>