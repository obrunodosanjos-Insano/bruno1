/**
 * ============================================================================
 * FOOTER / RODAPÉ
 * ============================================================================
 * Direitos autorais, ano atual (dinâmico), navegação rápida e retorno ao topo.
 */

import React from 'react';
import { athleteProfile } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer id="main-footer" className="bg-[#080B13] border-t border-gray-900 py-12 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-gray-900">
          
          {/* IDENTIDADE DO ATLETA */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center font-bold text-white text-xs font-mono">
              B
            </div>
            <div>
              <span className="font-extrabold text-white uppercase text-sm tracking-wider block">
                {athleteProfile.name}
              </span>
              <span className="text-[11px] font-mono text-gray-500">
                {athleteProfile.title}
              </span>
            </div>
          </div>

          {/* LEMBARTE / FRASE DE IMPACTO */}
          <p className="text-xs font-mono text-gray-400 text-center md:text-right max-w-md">
            «Foco, disciplina e velocidade. Cada segundo conta.»
          </p>

          {/* BOTÃO VOLTAR AO TOPO */}
          <button
            type="button"
            id="btn-scroll-top"
            onClick={scrollToTop}
            className="px-4 py-2 rounded-lg bg-gray-900 hover:bg-gray-800 border border-gray-800 text-xs font-mono text-gray-300 hover:text-white transition-colors flex items-center gap-2"
          >
            <span>Voltar ao Topo</span>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>

        </div>

        {/* CRÉDITOS & COPYRIGHT */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-400">
          <p>
            © {currentYear} {athleteProfile.name}. Todos os direitos reservados.
          </p>
          <p className="text-gray-400">
            Design Minimalista Dark Mode • 100% Offline • Sem Dependências Externas
          </p>
        </div>
      </div>
    </footer>
  );
};
