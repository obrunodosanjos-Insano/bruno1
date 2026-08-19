/**
 * ============================================================================
 * SEÇÃO DE CONTATO & REDES SOCIAIS (100% OFFLINE / SEM BACKEND EXTERNO)
 * ============================================================================
 * Formulário estático puramente visual com feedback local no client,
 * links sociais com ícones SVG embutidos e informações de contato direto.
 */

import React, { useState } from 'react';
import { contactDetails, socialLinks } from '../data/portfolioData';
import { GitHubIcon, LinkedInIcon, InstagramIcon, StravaIcon, EmailIcon } from './SvgIcons';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    nome: '',
    email: '',
    assunto: 'Patrocínio / Parceria',
    mensagem: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ação puramente no frontend sem chamadas de rede externas (conforme especificação técnica)
    if (formState.nome && formState.email && formState.mensagem) {
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setFormState({
      nome: '',
      email: '',
      assunto: 'Patrocínio / Parceria',
      mensagem: '',
    });
    setSubmitted(false);
  };

  // Mapeia o nome do ícone para o componente SVG inline local correspondente
  const renderSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'github':
        return <GitHubIcon className="w-5 h-5" />;
      case 'linkedin':
        return <LinkedInIcon className="w-5 h-5" />;
      case 'instagram':
        return <InstagramIcon className="w-5 h-5" />;
      case 'strava':
        return <StravaIcon className="w-5 h-5" />;
      case 'email':
        return <EmailIcon className="w-5 h-5" />;
      default:
        return <EmailIcon className="w-5 h-5" />;
    }
  };

  return (
    <section
      id="contato"
      className="py-20 bg-[#0E1322] border-b border-gray-800/80 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CABEÇALHO DA SEÇÃO */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-gray-800">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-blue-500 uppercase block mb-1">
              04 // CONTATO & PARCERIAS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">
              Vamos Construir Grandes Resultados
            </h2>
          </div>
          <p className="text-sm font-mono text-gray-400 mt-2 md:mt-0">
            Patrocínios • Palestras Corporativas • Imprensa
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* COLUNA ESQUERDA: FORMULÁRIO ESTÁTICO (VISUAL) */}
          <div className="lg:col-span-7">
            <div className="bg-gray-900/80 rounded-2xl p-6 sm:p-8 border border-gray-800 shadow-xl">
              
              <div className="mb-6">
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">
                  Envie uma Mensagem
                </h3>
                <p className="text-xs text-gray-400 font-mono mt-1">
                  Preencha os campos abaixo para iniciar um contato profissional.
                </p>
              </div>

              {submitted ? (
                <div
                  id="form-success-feedback"
                  className="p-6 rounded-xl bg-blue-950/70 border border-blue-500/40 text-center space-y-4 animate-fadeIn"
                >
                  <div className="w-12 h-12 rounded-full bg-blue-600/30 text-blue-400 mx-auto flex items-center justify-center border border-blue-500/50">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">Mensagem Registrada!</h4>
                    <p className="text-xs text-gray-300 mt-1 max-w-md mx-auto">
                      Obrigado pelo contato, <strong>{formState.nome}</strong>. Esta é uma demonstração de formulário estático (sem envio de dados para servidores externos).
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors"
                  >
                    Enviar Outra Mensagem
                  </button>
                </div>
              ) : (
                <form id="contact-static-form" onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* CAMPO NOME */}
                  <div>
                    <label htmlFor="input-nome" className="block text-xs font-mono uppercase text-gray-300 mb-1">
                      Seu Nome Completo *
                    </label>
                    <input
                      id="input-nome"
                      type="text"
                      required
                      value={formState.nome}
                      onChange={(e) => setFormState({ ...formState, nome: e.target.value })}
                      placeholder="Ex: Carlos Eduardo de Oliveira"
                      className="w-full px-4 py-2.5 rounded-lg bg-gray-950 border border-gray-800 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    />
                  </div>

                  {/* CAMPO E-MAIL */}
                  <div>
                    <label htmlFor="input-email" className="block text-xs font-mono uppercase text-gray-300 mb-1">
                      Seu E-mail Profissional *
                    </label>
                    <input
                      id="input-email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="Ex: contato@empresa.com.br"
                      className="w-full px-4 py-2.5 rounded-lg bg-gray-950 border border-gray-800 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    />
                  </div>

                  {/* CAMPO ASSUNTO */}
                  <div>
                    <label htmlFor="select-assunto" className="block text-xs font-mono uppercase text-gray-300 mb-1">
                      Objetivo do Contato
                    </label>
                    <select
                      id="select-assunto"
                      value={formState.assunto}
                      onChange={(e) => setFormState({ ...formState, assunto: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-gray-950 border border-gray-800 text-white text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    >
                      <option value="Patrocínio / Parceria">Proposta de Patrocínio / Marca Esportiva</option>
                      <option value="Palestra Corporativa">Palestra Corporativa sobre Alta Performance</option>
                      <option value="Imprensa / Entrevista">Imprensa / Entrevista / Reportagem</option>
                      <option value="Mentoria de Corrida">Clínica de Corrida & Treinamento</option>
                      <option value="Outro">Outro Assunto</option>
                    </select>
                  </div>

                  {/* CAMPO MENSAGEM */}
                  <div>
                    <label htmlFor="textarea-mensagem" className="block text-xs font-mono uppercase text-gray-300 mb-1">
                      Mensagem *
                    </label>
                    <textarea
                      id="textarea-mensagem"
                      rows={4}
                      required
                      value={formState.mensagem}
                      onChange={(e) => setFormState({ ...formState, mensagem: e.target.value })}
                      placeholder="Descreva detalhes sobre sua proposta de patrocínio, evento ou mensagem..."
                      className="w-full px-4 py-2.5 rounded-lg bg-gray-950 border border-gray-800 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                    />
                  </div>

                  {/* BOTÃO SUBMIT */}
                  <button
                    id="btn-submit-contact"
                    type="submit"
                    className="w-full py-3 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow-md shadow-blue-900/30 transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Enviar Mensagem</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>

                  <p className="text-[11px] text-gray-500 text-center font-mono">
                    * Formulário 100% seguro e estático para demonstração de portfólio.
                  </p>
                </form>
              )}

            </div>
          </div>

          {/* COLUNA DIREITA: INFORMAÇÕES DIRETAS & REDES SOCIAIS */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* CARD DE INFORMAÇÕES DIRETAS */}
            <div className="bg-gray-900/80 rounded-2xl p-6 border border-gray-800 shadow-xl space-y-4">
              <h3 className="text-base font-bold text-white uppercase tracking-wider pb-3 border-b border-gray-800">
                Canais de Atendimento
              </h3>

              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-[10px] font-mono uppercase text-gray-400 block">E-mail Principal</span>
                  <a href={`mailto:${contactDetails.email}`} className="text-blue-400 hover:underline font-mono text-xs sm:text-sm">
                    {contactDetails.email}
                  </a>
                </div>

                <div>
                  <span className="text-[10px] font-mono uppercase text-gray-400 block">Assessoria de Imprensa</span>
                  <a href={`mailto:${contactDetails.pressEmail}`} className="text-gray-300 hover:text-white font-mono text-xs sm:text-sm">
                    {contactDetails.pressEmail}
                  </a>
                </div>

                <div>
                  <span className="text-[10px] font-mono uppercase text-gray-400 block">Gestão Esportiva</span>
                  <span className="text-gray-300 text-xs sm:text-sm">{contactDetails.management}</span>
                </div>

                <div>
                  <span className="text-[10px] font-mono uppercase text-gray-400 block">Disponibilidade</span>
                  <span className="text-emerald-400 text-xs font-mono">{contactDetails.availability}</span>
                </div>
              </div>
            </div>

            {/* LINKS SOCIAIS COM ÍCONES SVG INLINE */}
            <div className="bg-gray-900/80 rounded-2xl p-6 border border-gray-800 shadow-xl">
              <h3 className="text-base font-bold text-white uppercase tracking-wider pb-3 border-b border-gray-800 mb-4">
                Redes & Perfis Oficiais
              </h3>

              <div className="grid grid-cols-1 gap-2.5">
                {socialLinks.map((social) => (
                  <a
                    key={social.id}
                    id={`social-link-${social.id}`}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-gray-950/80 border border-gray-800 hover:border-blue-500/50 hover:bg-gray-900 transition-all duration-200 group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="p-2 rounded-lg bg-gray-900 text-blue-400 group-hover:text-white group-hover:bg-blue-600 transition-colors border border-gray-800">
                        {renderSocialIcon(social.icon)}
                      </span>
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-white uppercase tracking-wide">
                          {social.name}
                        </span>
                        <span className="text-[11px] font-mono text-gray-400">
                          {social.handle}
                        </span>
                      </div>
                    </div>

                    <svg
                      className="w-4 h-4 text-gray-500 group-hover:text-blue-400 transform group-hover:translate-x-0.5 transition-all"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
