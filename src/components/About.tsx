/**
 * ============================================================================
 * SEÇÃO SOBRE MIM & RECORDES PESSOAIS (RPS)
 * ============================================================================
 * Detalha a história, objetivos, filosofia e marcas oficiais do atleta.
 * Edite os textos biográficos em portfolioData.ts ou diretamente neste arquivo.
 */

import React from 'react';
import { athleteProfile, personalRecords } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section
      id="sobre"
      className="py-20 bg-[#0B0F19] border-b border-gray-800/80 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CABEÇALHO DA SEÇÃO */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-gray-800">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-blue-500 uppercase block mb-1">
              01 // BIOGRAFIA & TRAJETÓRIA
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">
              Sobre Mim & Filosofia Atlética
            </h2>
          </div>
          <p className="text-sm font-mono text-gray-400 mt-2 md:mt-0">
            Dedicação diária • Alta performance • Ciência aplicada
          </p>
        </div>

        {/* CONTEÚDO PRINCIPAL: BIO + RECORDES PESSOAIS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* COLUNA ESQUERDA: NARRATIVA BIOGRÁFICA */}
          <div className="lg:col-span-6 space-y-6">
            <div className="prose prose-invert max-w-none text-gray-300 space-y-4 text-base leading-relaxed">
              
              {/* Parágrafo 1 da Trajetória (Editável em portfolioData.ts) */}
              <p className="text-lg text-gray-200 font-medium leading-relaxed border-l-2 border-blue-500 pl-4">
                {athleteProfile.about.paragraph1}
              </p>

              {/* Parágrafo 2 da Trajetória (Editável em portfolioData.ts) */}
              <p>
                {athleteProfile.about.paragraph2}
              </p>

              {/* CITAÇÃO / FILOSOFIA DE TREINO */}
              <blockquote className="my-6 p-4 rounded-xl bg-gray-900/80 border border-gray-800 text-gray-300 italic font-serif">
                {athleteProfile.about.philosophy}
                <footer className="mt-2 text-right text-xs font-mono text-blue-400 not-italic">
                  — {athleteProfile.name}
                </footer>
              </blockquote>

            </div>

            {/* 3 PILARES FUNDAMENTAIS DE DESENVOLVIMENTO */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-4 rounded-lg bg-gray-900/50 border border-gray-800/80">
                <span className="text-blue-400 font-mono text-xs font-bold block mb-1">01. PRECISÃO</span>
                <p className="text-xs text-gray-400">Controle exato de zonas cardíacas e lactato sanguíneo.</p>
              </div>
              <div className="p-4 rounded-lg bg-gray-900/50 border border-gray-800/80">
                <span className="text-blue-400 font-mono text-xs font-bold block mb-1">02. CONSTÂNCIA</span>
                <p className="text-xs text-gray-400">Volume semanal sem atalhos, 52 semanas ao ano.</p>
              </div>
              <div className="p-4 rounded-lg bg-gray-900/50 border border-gray-800/80">
                <span className="text-blue-400 font-mono text-xs font-bold block mb-1">03. RECUPERAÇÃO</span>
                <p className="text-xs text-gray-400">Sono, nutrição balanceada e fisioterapia preventiva.</p>
              </div>
            </div>

          </div>

          {/* COLUNA DIREITA: TABELA / CARDS DE RECORDES PESSOAIS (PRs) */}
          <div className="lg:col-span-6 space-y-4">
            
            <div className="bg-gray-900/80 rounded-2xl p-6 border border-gray-800 shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-gray-800 mb-4">
                <div>
                  <h3 className="text-lg font-bold text-white uppercase tracking-wider">
                    Recordes Pessoais (RPs)
                  </h3>
                  <p className="text-xs text-gray-400 font-mono">
                    Marcas oficiais homologadas pela CBAt / World Athletics
                  </p>
                </div>
                <span className="p-2 rounded-lg bg-blue-950/60 text-blue-400 border border-blue-600/30">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
              </div>

              {/* LISTA DE RECORDES POR PROVA */}
              <div className="space-y-3">
                {personalRecords.map((record) => (
                  <div
                    key={record.id}
                    id={`pr-card-${record.id}`}
                    className="p-4 rounded-xl bg-gray-950/70 border border-gray-800 hover:border-blue-500/50 transition-all duration-200 group"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-500 group-hover:scale-125 transition-transform" />
                        <span className="font-semibold text-white text-sm sm:text-base">
                          {record.distance}
                        </span>
                      </div>
                      <span className="text-lg sm:text-xl font-mono font-black text-blue-400 tracking-tight">
                        {record.time}
                      </span>
                    </div>

                    <div className="mt-2 pt-2 border-t border-gray-800/60 flex items-center justify-between text-xs text-gray-400 font-mono">
                      <span>{record.event} ({record.year})</span>
                      <span className="bg-gray-800 px-2 py-0.5 rounded text-gray-300">
                        Ritmo: {record.pace}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* INFORMAÇÃO COMPLEMENTAR */}
              <div className="mt-4 pt-4 border-t border-gray-800 flex items-center justify-between text-xs text-gray-400 font-mono">
                <span>Passaporte Biológico em dia</span>
                <span className="text-blue-400">World Athletics Certified</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
