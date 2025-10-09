export default function Rodape() {
  return (
    <footer className="bg-[#005b96] text-white pt-10 pb-5 mt-10 text-left">
      <div className="mb-6">
        <h3 className="text-xl font-semibold">
          Teleconsulta - Hospital Das Clínicas
        </h3>
        <p className="mt-2">
          Consultas médicas online acessíveis para toda a comunidade.
        </p>
        <p className="mt-1">
          Comprometidos com a saúde e bem-estar dos nossos pacientes.
        </p>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold">Contato</h3>
        <p className="mt-2">(11) 1111-1111</p>
        <p>(11) 99999-9999 (WhatsApp)</p>
        <p>teleconsulta@hsp.com.br</p>
      </div>

      <div className="border-t border-white/30 pt-4 text-center">
        <p className="text-sm">
          © Hospital Das Clínicas. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
