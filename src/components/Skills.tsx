/**
 * ============================================================================
 * SEÇÃO DE HABILIDADES (SKILLS)
 * ============================================================================
 * Separação visual clara entre:
 * 1. Conhecimentos Técnicos e Fisiológicos
 * 2. Habilidades Interpessoais (Soft Skills)
 * 3. Ferramentas e Equipamentos
 * ============================================================================
 */

import React, { useState } from 'react';
import { athleteSkills } from '../data/portfolioData';

type SkillCategory = 'all' | 'technical' | 'soft' | 'gear';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<SkillCategory>('all');

  const filteredSkills = activeTab === 'all'
    ? athleteSkills
    : athleteSkills.filter((s) => s.category === activeTab);

  const tabs = [
    { id: 'all' as SkillCategory, label: 'Todas as Habilidades', count: athleteSkills.length },
    { id: 'technical' as SkillCategory, label: 'Conhecimentos Técnicos', count: athleteSkills.filter(s => s.category === 'technical').length },
    { id: 'soft' as SkillCategory, label: 'Interpessoais (Soft Skills)', count: athleteSkills.filter(s => s.category === 'soft').length },
    { id: 'gear' as SkillCategory, label: 'Ferramentas & Equipamentos', count: athleteSkills.filter(s => s.category === 'gear').length },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-[#0E1322] border-b border-gray-800/80 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CABEÇALHO DA SEÇÃO */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-gray-800">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-blue-500 uppercase block mb-1">
              02 // COMPETÊNCIAS & VALÊNCIAS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">
              Habilidades & Metodologia
            </h2>
          </div>
          <p className="text-sm font-mono text-gray-400 mt-2 md:mt-0">
            Fisiologia atlética • Liderança • Ferramentas de alta precisão
          </p>
        </div>

        {/* ABAS DE FILTRO POR CATEGORIA */}
        <div className="flex flex-wrap gap-2 mb-10" role="tablist" aria-label="Filtro de Habilidades">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              id={`tab-skill-${tab.id}`}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center gap-2 ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-900/30 border border-blue-500'
                  : 'bg-gray-900 text-gray-400 hover:text-white hover:bg-gray-800 border border-gray-800'
              }`}
            >
              <span>{tab.label}</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                activeTab === tab.id ? 'bg-blue-800 text-blue-100' : 'bg-gray-800 text-gray-400'
              }`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* GRADE VISUAL DE CARDS DE HABILIDADES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              id={`skill-card-${skill.id}`}
              className="bg-gray-900/70 hover:bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between group shadow-lg"
            >
              <div>
                {/* CABEÇALHO DO CARD: TAG & CATEGORIA */}
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-md border ${
                    skill.category === 'technical'
                      ? 'bg-blue-950/80 text-blue-400 border-blue-800/60'
                      : skill.category === 'soft'
                      ? 'bg-indigo-950/80 text-indigo-300 border-indigo-800/60'
                      : 'bg-slate-900 text-slate-300 border-slate-700'
                  }`}>
                    {skill.tag}
                  </span>
                  <span className="text-xs font-mono font-bold text-gray-400 group-hover:text-blue-400 transition-colors">
                    {skill.level}%
                  </span>
                </div>

                {/* TÍTULO DA HABILIDADE */}
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {skill.name}
                </h3>

                {/* DESCRIÇÃO DA HABILIDADE */}
                <p className="text-xs text-gray-400 leading-relaxed">
                  {skill.description}
                </p>
              </div>

              {/* BARRA DE PROGRESSO VISUAL */}
              <div className="mt-5 pt-3 border-t border-gray-800/70">
                <div className="w-full bg-gray-950 h-2 rounded-full overflow-hidden p-0.5 border border-gray-800">
                  <div
                    className="bg-gradient-to-r from-blue-600 to-blue-400 h-full rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* RESUMO ESTRATÉGICO NO RODAPÉ DA SEÇÃO */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-gray-950 via-gray-900 to-blue-950/40 border border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-sm font-bold uppercase text-white tracking-wide">
              Metodologia Baseada em Dados e Ciência do Esporte
            </h4>
            <p className="text-xs text-gray-400 max-w-2xl">
              Cada quilômetro de treino é registrado, quantificado e revisado para garantir eficiência energética máxima e prevenção de sobrecarga.
            </p>
          </div>
          <a
            href="#contato"
            className="whitespace-nowrap px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors"
          >
            Solicitar Parceria / Ficha Técnica
          </a>
        </div>

      </div>
    </section>
  );
};
