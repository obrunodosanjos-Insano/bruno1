/**
 * ============================================================================
 * SEÇÃO HERO / APRESENTAÇÃO PRINCIPAL
 * ============================================================================
 * Estética editorial com alto contraste, tipografia imponente e métricas de impacto.
 * Personalize o slogan, nome e estatísticas rápidas em portfolioData.ts.
 */

import React from 'react';
import { athleteProfile, athleteMetrics } from '../data/portfolioData';
import athletePhoto from '../assets/images/bruno_athlete.jpg';

export const Hero: React.FC = () => {
  return (
    <section
      id="topo"
      className="relative min-h-[90vh] flex flex-col justify-center pt-28 pb-16 overflow-hidden border-b border-gray-800/80"
    >
      {/* BACKGROUND SUTIL COM GRADE E GRADIENTE RADIAL AZUL (100% CSS PURO) */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(#3B82F6_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-900/15 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* CABEÇALHO EDITORIAL & IDENTIFICAÇÃO DE ATLETA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* COLUNA DE TEXTO & APRESENTAÇÃO */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* TAG SUPERIOR */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/70 border border-blue-600/30 text-blue-400 text-xs font-mono tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
              {athleteProfile.title}
            </div>

            {/* NOME MONUMENTAL ESTILO EDITORIAL */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black tracking-tight text-white uppercase font-sans leading-[1.05]">
                {athleteProfile.name}
              </h1>
              <p className="text-lg sm:text-xl font-medium text-blue-400/90 font-mono tracking-wide">
                «{athleteProfile.nickname}»
              </p>
            </div>

            {/* DESCRIÇÃO DE IMPACTO */}
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed">
              {athleteProfile.about.lead}
            </p>

            {/* BOTÕES DE AÇÃO PRINCIPAIS */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                id="hero-btn-conquistas"
                href="#projetos"
                className="px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow-lg shadow-blue-900/30 transition-all duration-200 flex items-center gap-2 group"
              >
                <span>Ver Conquistas & Provas</span>
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>

              <a
                id="hero-btn-sobre"
                href="#sobre"
                className="px-6 py-3.5 bg-gray-900 hover:bg-gray-800 text-gray-200 font-semibold text-xs uppercase tracking-wider rounded-lg border border-gray-700 hover:border-gray-600 transition-all duration-200"
              >
                Conhecer Minha Trajetória
              </a>
            </div>

            {/* LOCALIZAÇÃO E BASE DE TREINAMENTO */}
            <div className="pt-2 flex items-center gap-2 text-xs text-gray-400 font-mono">
              <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Base: {athleteProfile.location}</span>
            </div>

          </div>

          {/* COLUNA VISUAL: FOTO OFICIAL DO ATLETA (PÁGINA PRINCIPAL) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-gradient-to-b from-gray-900 via-gray-900/90 to-[#111827] p-5 sm:p-6 border border-gray-800 shadow-2xl shadow-black">
              
              {/* CABEÇALHO DO CARD ESTILO CREDENCIAL DE COMPETIÇÃO */}
              <div className="flex items-center justify-between pb-4 border-b border-gray-800">
                <span className="text-[11px] font-mono text-gray-400 uppercase tracking-widest flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  OFFICIAL ATHLETE PROFILE
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-blue-900/50 text-blue-300 border border-blue-700/50">
                  CATEGORY // ELITE A
                </span>
              </div>

              {/* FOTO DO ATLETA ADICIONADA NA PÁGINA PRINCIPAL (100% ORIGINAL, SEM MODIFICAÇÕES) */}
              <div className="py-4 flex flex-col items-center justify-center relative">
                <div className="w-full relative overflow-hidden rounded-xl border border-gray-700/80 shadow-2xl bg-gray-950">
                  <img
                    id="athlete-main-photo"
                    src={athletePhoto}
                    alt="Bruno - Atleta Profissional de Corrida em Prova"
                    referrerPolicy="no-referrer"
                    className="w-full h-80 sm:h-96 object-cover object-center transition-transform duration-500 hover:scale-[1.02]"
                  />
                  
                  {/* Selo sutil no canto da foto */}
                  <div className="absolute bottom-3 left-3 bg-black/75 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span className="text-[11px] font-mono font-semibold tracking-wide">
                      Bruno // Pro Elite
                    </span>
                  </div>
                </div>

                {/* Resumo de Frequência & Cadência */}
                <div className="w-full grid grid-cols-2 gap-3 mt-4">
                  <div className="bg-gray-950/70 p-3 rounded-lg border border-gray-800/80">
                    <span className="text-[10px] uppercase font-mono text-gray-400 block">Passada Média</span>
                    <span className="text-base font-bold text-white font-mono">1.82m / passo</span>
                  </div>
                  <div className="bg-gray-950/70 p-3 rounded-lg border border-gray-800/80">
                    <span className="text-[10px] uppercase font-mono text-gray-400 block">Cadência Alvo</span>
                    <span className="text-base font-bold text-blue-400 font-mono">186-192 ppm</span>
                  </div>
                </div>
              </div>

              {/* RODA-PÉ DO CARD COM METAS DA TEMPORADA */}
              <div className="pt-3 border-t border-gray-800 flex items-center justify-between text-xs text-gray-400">
                <span className="font-mono text-[11px]">CICLO ATUAL</span>
                <span className="text-emerald-400 font-mono font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  Foco: Sub 02h 10m 00s
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* GRADE DE MÉTRICAS & NÚMEROS DE IMPACTO (4 CARDS) */}
        <div className="mt-14 pt-10 border-t border-gray-800/80 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {athleteMetrics.map((metric) => (
            <div
              key={metric.id}
              id={`hero-metric-${metric.id}`}
              className="bg-gray-900/60 hover:bg-gray-900 p-5 rounded-xl border border-gray-800 hover:border-blue-500/40 transition-all duration-300 group"
            >
              <span className="text-xs font-mono text-gray-400 block uppercase tracking-wider">
                {metric.label}
              </span>
              <span className="text-2xl sm:text-3xl font-black text-white font-mono tracking-tight my-1 block group-hover:text-blue-400 transition-colors">
                {metric.value}
              </span>
              <span className="text-xs text-gray-400 block">
                {metric.subtext}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
