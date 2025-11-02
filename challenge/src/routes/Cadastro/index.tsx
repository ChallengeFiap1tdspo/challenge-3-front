import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
 

type CadastroForm = {
  nome: string;
  email: string;
  idade: number;
  cpf: string;
  telefone?: string; 
  tipoDeficiencia?: string; 
};

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
 