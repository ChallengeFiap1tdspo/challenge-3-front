import { useEffect } from "react";
import { useForm } from "react-hook-form";

type FormInputs = {
  nome: string;
  email: string;
  telefone?: string;
  assunto: string;
  mensagem: string;
};

export default function Contato() {
  const { register, handleSubmit, reset } = useForm<FormInputs>();

  const onSubmit = (data: FormInputs) => {
    console.log("Dados enviados:", data);
    alert("Mensagem enviada com sucesso!");
    reset();
  };

  useEffect(() => {
    document.title = "Contato";
  }, []);

  return (
    <main>
      <section>
        <h1>Entre em Contato Conosco</h1>
        <p>Estamos à disposição para tirar suas dúvidas</p>
      </section>

      <div>
        <div>
          <div>
            <img src="../img/telefone.png" alt="Ícone telefone" />
            <div>
              <h3>Telefone</h3>
              <p>(11) 1111-1111</p>
            </div>
          </div>

          <div>
            <img src="../img/whatsapp_logo.png" alt="Ícone WhatsApp" />
            <div>
              <h3>WhatsApp</h3>
              <p>(11) 99999-9999</p>
            </div>
          </div>

          <div>
            <img src="../img/email_logo.jpg" alt="Ícone e-mail" />
            <div>
              <h3>E-mail</h3>
              <p>hc@gmail.com</p>
            </div>
          </div>

          <div>
            <img src="../img/endereco_logo.png" alt="Ícone endereço" />
            <div>
              <h3>Endereço</h3>
              <p>
                Av. Dr. Enéas Carvalho de Aguiar, 255 - Cerqueira César, São
                Paulo - SP, 05403-000
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2>Envie uma mensagem</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="nome">Nome Completo</label>
              <input
                id="nome"
                type="text"
                {...register("nome", { required: true })}
                placeholder="Digite seu nome"
              />
            </div>

            <div>
              <label htmlFor="email">E-mail</label>
              <input
                id="email"
                type="email"
                {...register("email", { required: true })}
                placeholder="seuemail@email.com"
              />
            </div>

            <div>
              <label htmlFor="telefone">Telefone</label>
              <input
                id="telefone"
                type="tel"
                {...register("telefone")}
                placeholder="(11) 99999-9999"
              />
            </div>

            <div>
              <label htmlFor="assunto">Assunto</label>
              <select id="assunto" {...register("assunto", { required: true })}>
                <option value="">Selecione um assunto</option>
                <option value="duvida">Dúvida</option>
                <option value="sugestao">Sugestão</option>
                <option value="reclamacao">Reclamação</option>
                <option value="outro">Outro</option>
              </select>
            </div>

            <div>
              <label htmlFor="mensagem">Mensagem</label>
              <textarea
                id="mensagem"
                rows={5}
                {...register("mensagem", { required: true })}
                placeholder="Digite sua mensagem"
              ></textarea>
            </div>

            <button type="submit">Enviar Mensagem</button>
          </form>
        </div>
      </div>

      <section>
        <h2>Horário de Funcionamento</h2>
        <div>
          <div>
            <h3>Atendimento ambulatorial</h3>
            <p>7h às 17h, de segunda a sexta-feira</p>
          </div>
          <div>
            <h3>Agendamento/HC</h3>
            <p>De segunda a sexta-feira das 7h às 17h30</p>
          </div>
          <div>
            <h3>Ouvidoria</h3>
            <p>De segunda a sexta-feira 7h às 11h e das 13h às 15h</p>
          </div>
        </div>
      </section>

      <section>
        <h2>Nossa Localização</h2>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.922487366746!2d-46.67074382376934!3d-23.57021866239795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59ce23a1eb7f%3A0x2b0bfb6e0f1f1a11!2sHospital%20das%20Cl%C3%ADnicas%20da%20Faculdade%20de%20Medicina%20da%20Universidade%20de%20S%C3%A3o%20Paulo!5e0!3m2!1spt-BR!2sbr!4v1716400000000!5m2!1spt-BR!2sbr"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </main>
  );
}
