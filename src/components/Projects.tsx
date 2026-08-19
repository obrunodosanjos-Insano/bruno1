/**
 * ============================================================================
 * SEÇÃO DE PROJETOS & PRINCIPAIS COMPETIÇÕES
 * ============================================================================
 * Cards com provas marcantes, projetos sociais e conquistas do atleta.
 * Modal de detalhes interativo 100% offline e local (sem requisições externas).
 * Edite ou adicione novos projetos em portfolioData.ts.
 */

import React, { useState } from 'react';
import { athleteProjects } from '../data/portfolioData';
import { ProjectItem } from '../types';

export const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects = selectedFilter === 'all'
    ? athleteProjects
    : athleteProjects.filter((p) => p.category === selectedFilter);

  const filterButtons = [
    { id: 'all', label: 'Todas as Provas & Projetos' },
    { id: 'marathon', label: 'Maratonas (42k)' },
    { id: 'half', label: 'Meias Maratonas (21k)' },
    { id: 'track', label: 'Pista (10.000m)' },
    { id: 'project', label: 'Projetos Sociais' },
  ];

  return (
    <section
      id="projetos"
      className="py-20 bg-[#0B0F19] border-b border-gray-800/80 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CABEÇALHO DA SEÇÃO */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-gray-800">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-blue-500 uppercase block mb-1">
              03 // PORTFÓLIO DE PROVAS & CONQUISTAS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">
              Grandes Provas & Projetos
            </h2>
          </div>
          <p className="text-sm font-mono text-gray-400 mt-2 md:mt-0">
            Resultados oficiais • Maratonas internacionais • Impacto comunitário
          </p>
        </div>

        {/* FILTRO DE CATEGORIAS */}
        <div className="flex flex-wrap gap-2 mb-10" role="tablist" aria-label="Filtro de Projetos">
          {filterButtons.map((btn) => (
            <button
              key={btn.id}
              id={`filter-proj-${btn.id}`}
              type="button"
              onClick={() => setSelectedFilter(btn.id)}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                selectedFilter === btn.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-900/30 border border-blue-500'
                  : 'bg-gray-900 text-gray-400 hover:text-white hover:bg-gray-800 border border-gray-800'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* GRADE EDITORIAL DE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              id={`proj-card-${project.id}`}
              className="bg-gray-900/80 rounded-2xl border border-gray-800 hover:border-blue-500/50 overflow-hidden flex flex-col justify-between shadow-xl transition-all duration-300 group"
            >
              {/* CABEÇALHO VISUAL DO CARD COM METADADOS */}
              <div className="p-6 pb-4">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-blue-400 bg-blue-950/80 px-2.5 py-1 rounded border border-blue-800/40">
                    {project.categoryLabel}
                  </span>
                  <span className="text-xs font-mono text-gray-400">
                    {project.year}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-300 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* GRADE DE MÉTRICAS DA PROVA */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 bg-gray-950/80 p-3.5 rounded-xl border border-gray-800/80 my-4">
                  <div>
                    <span className="text-[10px] uppercase font-mono text-gray-400 block">Distância</span>
                    <span className="text-xs font-bold text-white font-mono">{project.metrics.distance}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono text-gray-400 block">Ritmo Médio</span>
                    <span className="text-xs font-bold text-blue-400 font-mono">{project.metrics.pace}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono text-gray-400 block">Classificação</span>
                    <span className="text-xs font-bold text-white font-mono">{project.metrics.placement}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono text-gray-400 block">Cadência</span>
                    <span className="text-xs font-bold text-gray-300 font-mono">{project.metrics.cadence || "186 ppm"}</span>
                  </div>
                </div>

                {/* DESTAQUES / CONQUISTAS DA PROVA */}
                <div className="space-y-1.5 pt-1">
                  {project.results.slice(0, 2).map((res, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-gray-300">
                      <svg className="w-3.5 h-3.5 text-blue-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{res}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* RODA-PÉ DO CARD COM BOTÃO DE DETALHES */}
              <div className="px-6 py-4 bg-gray-950/60 border-t border-gray-800 flex items-center justify-between">
                <button
                  type="button"
                  id={`btn-open-${project.id}`}
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-bold uppercase tracking-wider text-blue-400 hover:text-blue-300 flex items-center gap-1.5 focus:outline-none"
                >
                  <span>Ver Detalhes da Prova</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                <a
                  href={project.linkPlaceholder}
                  className="text-xs font-mono text-gray-400 hover:text-white"
                  title="Link direto da prova"
                >
                  #{project.id}
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* MODAL DE DETALHES DA PROVA (100% LOCAL & OFFLINE) */}
      {selectedProject && (
        <div
          id="project-detail-modal"
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-gray-900 border border-gray-800 rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* CABEÇALHO DO MODAL */}
            <div className="flex items-start justify-between gap-4 border-b border-gray-800 pb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-blue-400 bg-blue-950 px-2 py-0.5 rounded border border-blue-800">
                    {selectedProject.categoryLabel}
                  </span>
                  <span className="text-xs font-mono text-gray-400">{selectedProject.year}</span>
                </div>
                <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
              </div>
              <button
                type="button"
                id="btn-close-modal"
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800"
                aria-label="Fechar janela"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* RELATO TÉCNICO COMPLETO */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-widest text-gray-400 font-bold">
                Relato da Prova & Estratégia de Prova
              </h4>
              <p className="text-sm text-gray-200 leading-relaxed bg-gray-950/70 p-4 rounded-xl border border-gray-800">
                {selectedProject.detailedStory}
              </p>
            </div>

            {/* ESTATÍSTICAS COMPLETAS */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-gray-950 p-4 rounded-xl border border-gray-800">
              <div>
                <span className="text-[10px] uppercase font-mono text-gray-400 block">Distância</span>
                <span className="text-sm font-bold text-white font-mono">{selectedProject.metrics.distance}</span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-mono text-gray-400 block">Pace Oficial</span>
                <span className="text-sm font-bold text-blue-400 font-mono">{selectedProject.metrics.pace}</span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-mono text-gray-400 block">Posição</span>
                <span className="text-sm font-bold text-white font-mono">{selectedProject.metrics.placement}</span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-mono text-gray-400 block">Cadência</span>
                <span className="text-sm font-bold text-gray-300 font-mono">{selectedProject.metrics.cadence || "186 ppm"}</span>
              </div>
            </div>

            {/* MARCOS ATINGIDOS */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-widest text-gray-400 font-bold">
                Resultados Homologados
              </h4>
              <ul className="space-y-1.5">
                {selectedProject.results.map((res, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span>{res}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* BOTÃO DE FECHAMENTO */}
            <div className="pt-4 border-t border-gray-800 flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2.5 bg-gray-800 hover:bg-gray-700 text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors"
              >
                Fechar Detalhes
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
