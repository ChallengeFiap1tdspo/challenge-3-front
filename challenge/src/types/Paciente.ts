export type Paciente = {
  id: number;
  nome: string;
  idade: number;
  tipoDeficiencia: string | null;
  telefone: string | null;
  cpf: string;
  email: string;
  ativo: boolean;
};