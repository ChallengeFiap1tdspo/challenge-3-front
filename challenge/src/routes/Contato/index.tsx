import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FiPhone, FiMail, FiMapPin, FiClock } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import type { Contato } from "../../types/Contato";


export default function ContatoPage() {
  const { register, handleSubmit, formState: { errors }, reset } =
    useForm<Contato>({ defaultValues: { assunto: "" } });

  const [sent, setSent] = useState(false);

  const onSubmit = (data: Contato) => {
    console.log("Mensagem enviada:", data);
    setSent(true);
    reset();
    setTimeout(() => setSent(false), 3500);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#00a1e0]/10 to-[#005b96]/6 p-4 md:p-6">
      <div className="max-w-5xl w-full bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="h-2 bg-gradient-to-r from-[#005b96] to-[#00a1e0]" />

        <div className="p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Lado esquerdo */}
          <div className="space-y-5">
            <h1 className="text-2xl font-bold text-[#005b96]">
              Entre em Contato Conosco
            </h1>
            <p className="text-gray-700">
              Estamos à disposição para tirar suas dúvidas
            </p>

            {/* Contatos rápidos */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="p-3 bg-[#005b96]/10 rounded-md text-[#005b96]">
                  <FiPhone size={20} />
                </div>
                <div>
                  <div className="text-sm font-semibold">Telefone</div>
                  <div className="text-gray-700">(11) 1111-1111</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-3 bg-[#00a1e0]/10 rounded-md text-[#00a1e0]">
                  <FaWhatsapp size={20} />
                </div>
                <div>
                  <div className="text-sm font-semibold">WhatsApp</div>
                  <div className="text-gray-700">(11) 99999-9999</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-3 bg-[#005b96]/10 rounded-md text-[#005b96]">
                  <FiMail size={20} />
                </div>
                <div>
                  <div className="text-sm font-semibold">E-mail</div>
                  <div className="text-gray-700">hc@gmail.com</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-3 bg-[#00a1e0]/10 rounded-md text-[#00a1e0]">
                  <FiMapPin size={20} />
                </div>
                <div>
                  <div className="text-sm font-semibold">Endereço</div>
                  <div className="text-gray-700 text-sm">
                    Av. Dr. Enéas Carvalho de Aguiar, 255 — São Paulo — SP
                  </div>
                </div>
              </div>
            </div>

            {/* Horário */}
            <div className="mt-4 p-4 bg-[#f8fafc] border border-[#e6f3fb] rounded-md space-y-2">
              <h2 className="text-md font-semibold text-[#005b96]">Horários</h2>

              <div className="text-sm text-gray-700 space-y-2">
                <div className="flex items-start gap-2">
                  <FiClock className="mt-1 text-[#005b96]" />
                  <div>
                    <div className="font-medium">Ambulatório</div>
                    <div>7h às 17h — Seg a Sex</div>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <FiClock className="mt-1 text-[#005b96]" />
                  <div>
                    <div className="font-medium">Agendamento/HC</div>
                    <div>7h às 17h30 — Seg a Sex</div>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <FiClock className="mt-1 text-[#005b96]" />
                  <div>
                    <div className="font-medium">Ouvidoria</div>
                    <div>7h às 11h — 13h às 15h</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <div className="bg-white p-4 md:p-6 rounded-lg border border-[#e8f6ff] shadow-sm">
              <h2 className="text-lg font-semibold text-[#005b96] mb-3">
                Envie uma mensagem
              </h2>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                <div>
                  <label className="text-sm font-medium">Nome Completo</label>
                  <input
                    {...register("nome", { required: "Nome é obrigatório" })}
                    className="mt-1 w-full border border-[#e6f3fb] rounded-md p-2 focus:ring-2 focus:ring-[#00a1e0]"
                    placeholder="Seu nome"
                  />
                  {errors.nome && (
                    <small className="text-red-600">
                      {errors.nome.message}
                    </small>
                  )}
                </div>

                <div>
                  <label className="text-sm font-medium">E-mail</label>
                  <input
                    {...register("email", {
                      required: "E-mail é obrigatório",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "E-mail inválido",
                      },
                    })}
                    className="mt-1 w-full border border-[#e6f3fb] rounded-md p-2 focus:ring-2 focus:ring-[#00a1e0]"
                    placeholder="seu@exemplo.com"
                  />
                  {errors.email && (
                    <small className="text-red-600">
                      {errors.email.message}
                    </small>
                  )}
                </div>

                <div>
                  <label className="text-sm font-medium">Telefone</label>
                  <input
                    {...register("telefone")}
                    className="mt-1 w-full border border-[#e6f3fb] rounded-md p-2 focus:ring-2 focus:ring-[#00a1e0]"
                    placeholder="(11) 9xxxx-xxxx"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">Assunto</label>
                  <select
                    {...register("assunto", {
                      required: "Escolha um assunto",
                    })}
                    className="mt-1 w-full border border-[#e6f3fb] rounded-md p-2 bg-white focus:ring-2 focus:ring-[#00a1e0]"
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="consulta">Consulta</option>
                    <option value="agendamento">Agendamento</option>
                    <option value="ouvidoria">Ouvidoria</option>
                    <option value="outros">Outros</option>
                  </select>
                  {errors.assunto && (
                    <small className="text-red-600">
                      {errors.assunto.message}
                    </small>
                  )}
                </div>

                <div>
                  <label className="text-sm font-medium">Mensagem</label>
                  <textarea
                    {...register("mensagem", {
                      required: "Escreva sua mensagem",
                    })}
                    className="mt-1 w-full border border-[#e6f3fb] rounded-md p-2 h-28 resize-y focus:ring-2 focus:ring-[#00a1e0]"
                    placeholder="Escreva aqui sua dúvida ou solicitação"
                  />
                  {errors.mensagem && (
                    <small className="text-red-600">
                      {errors.mensagem.message}
                    </small>
                  )}
                </div>

                <div className="flex flex-wrap gap-3 items-center justify-between mt-2">
                  <button
                    type="submit"
                    className="bg-[#005b96] text-white px-4 py-2 rounded-lg hover:bg-[#004b7d] transition font-medium"
                  >
                    Enviar
                  </button>

                  <Link
                    to="/"
                    className="text-sm text-[#00a1e0] hover:underline"
                  >
                    Voltar
                  </Link>
                </div>

                {sent && (
                  <div className="mt-3 text-sm text-green-700 bg-green-50 p-2 rounded-md">
                    Mensagem enviada com sucesso!
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>

        <footer className="bg-white/60 p-4 border-t border-gray-100 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-2">
          <div>Hospital das Clínicas</div>
          <div className="text-right text-xs md:text-sm">
            Av. Dr. Enéas Carvalho de Aguiar, 255 — São Paulo — SP
          </div>
        </footer>
      </div>
    </main>
  );
}
