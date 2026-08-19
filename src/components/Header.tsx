/**
 * ============================================================================
 * HEADER & BARRA DE NAVEGAÇÃO (100% OFFLINE / NATIVO)
 * ============================================================================
 * Barra fixa no topo com suporte a scroll suave, status do atleta e menu mobile.
 * Edite os links ou logotipo nas tags abaixo se desejar.
 */

import React, { useState, useEffect } from 'react';
import { athleteProfile } from '../data/portfolioData';

interface HeaderProps {
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Monitora o scroll da página para aplicar fundo com blur no cabeçalho
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'sobre', label: 'Sobre Mim', href: '#sobre' },
    { id: 'skills', label: 'Habilidades', href: '#skills' },
    { id: 'projetos', label: 'Conquistas & Provas', href: '#projetos' },
    { id: 'contato', label: 'Contato', href: '#contato' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B0F19]/90 backdrop-blur-md border-b border-gray-800/80 shadow-lg shadow-black/40 py-3.5'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* LOGO & IDENTIDADE VISUAL */}
        <a
          id="nav-logo"
          href="#topo"
          className="group flex items-center gap-3 focus:outline-none"
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-blue-900 flex items-center justify-center font-bold text-white tracking-widest text-sm shadow-md shadow-blue-900/30 group-hover:scale-105 transition-transform duration-200 border border-blue-400/30">
            B
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-white tracking-wider text-sm uppercase group-hover:text-blue-400 transition-colors">
              {athleteProfile.name}
            </span>
            <span className="text-[11px] text-gray-400 font-mono tracking-widest uppercase">
              Pro Elite Runner
            </span>
          </div>
        </a>

        {/* NAVEGAÇÃO DESKTOP */}
        <nav id="desktop-nav" aria-label="Navegação Principal" className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                id={`nav-link-${link.id}`}
                href={link.href}
                className={`px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-md transition-all duration-200 ${
                  isActive
                    ? 'text-blue-400 bg-blue-950/50 border border-blue-500/30 shadow-inner'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800/60'
                }`}
              >
                {link.label}
              </a>
            );
          })}

          {/* STATUS DO ATLETA (BADGE) */}
          <div className="ml-4 pl-4 border-l border-gray-800 hidden lg:flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-[11px] font-mono text-gray-400">
              {athleteProfile.status}
            </span>
          </div>
        </nav>

        {/* BOTÃO CONTATO RÁPIDO DESKTOP */}
        <div className="hidden md:flex items-center">
          <a
            id="btn-nav-contato"
            href="#contato"
            className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-lg shadow-sm shadow-blue-700/30 transition-all duration-200"
          >
            Falar com Atleta
          </a>
        </div>

        {/* BOTÃO MENU MOBILE (HAMBÚRGUER) */}
        <button
          id="btn-mobile-menu"
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-expanded={mobileMenuOpen}
          aria-label="Abrir menu de navegação"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* PAINEL MENU MOBILE */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-panel"
          className="md:hidden bg-[#0B0F19] border-b border-gray-800 px-4 pt-3 pb-5 space-y-2 mt-2 shadow-2xl"
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              id={`mobile-nav-${link.id}`}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-2.5 rounded-lg text-sm font-medium tracking-wide ${
                activeSection === link.id
                  ? 'text-blue-400 bg-blue-950/60 border border-blue-500/30'
                  : 'text-gray-300 hover:text-white hover:bg-gray-800'
              }`}
            >
              {link.label}
            </a>
          ))}

          <div className="pt-3 border-t border-gray-800">
            <a
              href="#contato"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 rounded-lg"
            >
              Falar com Atleta / Parcerias
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
