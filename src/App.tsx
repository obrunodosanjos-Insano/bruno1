/**
 * ============================================================================
 * COMPONENTE PRINCIPAL (APP.TSX)
 * ============================================================================
 * Estrutura completa do portfólio pessoal para atleta de corrida profissional.
 * 
 * Sumário das Seções:
 * 1. Header (Navegação suave e status)
 * 2. Hero (Apresentação editorial, métricas principais e silhueta atlética)
 * 3. Sobre Mim (História, objetivos e Recordes Pessoais RPs)
 * 4. Habilidades / Skills (Conhecimentos Técnicos, Soft Skills e Ferramentas)
 * 5. Projetos & Conquistas (Provas notáveis, modal de detalhes 100% offline)
 * 6. Contato (Formulário estático com validação visual e links sociais em SVG)
 * 7. Footer (Direitos autorais, ano atual e botão topo)
 * ============================================================================
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('topo');

  // Monitora a seção visível na tela para atualizar o indicador de navegação ativo
  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = ['topo', 'sobre', 'skills', 'projetos', 'contato'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  return (
    <div id="portfolio-app-root" className="min-h-screen bg-[#0B0F19] text-gray-100 flex flex-col font-sans">
      {/* 1. CABEÇALHO & NAVEGAÇÃO */}
      <Header activeSection={activeSection} />

      {/* 2. CONTEÚDO PRINCIPAL COM TODAS AS SEÇÕES */}
      <main id="main-content" className="flex-grow">
        {/* Seção Hero / Apresentação */}
        <Hero />

        {/* Seção Sobre Mim & Recordes Pessoais */}
        <About />

        {/* Seção Habilidades (Técnicas, Interpessoais e Ferramentas) */}
        <Skills />

        {/* Seção Projetos, Competições & Conquistas */}
        <Projects />

        {/* Seção Contato, Formulário Estático & Redes Sociais */}
        <Contact />
      </main>

      {/* 3. RODAPÉ */}
      <Footer />
    </div>
  );
}
