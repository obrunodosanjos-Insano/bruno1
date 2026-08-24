import React, { useEffect, useMemo, useState } from 'react';
import { athleteProjects, athleteSkills, athleteProfile, personalRecords, socialLinks } from './data/portfolioData';

const athletePhoto = '/bruno_athete.jpeg';

const navItems = [
  ['topo', 'Início'], ['sobre', 'Sobre'], ['evolucao', 'Evolução'],
  ['conquistas', 'Conquistas'], ['contato', 'Contato']
];

const stats = [
  { value: '18:35', label: 'Melhor 5K', detail: '3:43/km' },
  { value: '5K', label: 'Prova de referência', detail: 'marca pessoal' },
  { value: '2026', label: 'Temporada atual', detail: 'foco em evolução' },
  { value: '∞', label: 'Disciplina', detail: 'todos os dias' },
];

const timeline = [
  { year: 'INÍCIO', title: 'Primeiros quilômetros', text: 'A corrida começa como desafio pessoal e vira parte da rotina.' },
  { year: 'EVOLUÇÃO', title: 'Treino com propósito', text: 'Mais consistência, controle de ritmo e foco em melhorar cada sessão.' },
  { year: '2026', title: 'Nova fase', text: 'Objetivo de transformar evolução de treino em resultados cada vez melhores.' },
  { year: 'PRÓXIMO', title: 'Sub-17 nos 5K', text: 'Meta clara: baixar a marca de 18:35 para Sub-17:00 e continuar construindo performance.' },
];

const goals = [
  { title: '5 KM', current: '18:35', target: 'Sub-17:00', progress: 83 },
  { title: '10 KM', current: '39:45', target: '37:50', progress: 45 },
  { title: '21 KM', current: '1:33:00', target: '1:25:00', progress: 90 },
];

const motivationalQuotes = [
  { text: "Quando ninguém está olhando, é aí que o campeão é formado.", author: "" },
  { text: "Nenhum ser humano é limitado.", author: "Eliud Kipchoge" },
  { text: "Apenas os disciplinados são livres na vida. Se você não tem disciplina, é escravo dos seus humores e das suas paixões.", author: "Eliud Kipchoge" },
  { text: "Nada é difícil se for dividido em pequenas partes.", author: "Henry Ford" },
  { text: "Cada passo é uma vitória rumo ao seu objetivo.", author: "" },
  { text: "A determinação supera qualquer obstáculo.", author: "" },
  { text: "Toda gota de suor vale a pena.", author: "" },
  { text: "O corpo alcança o que a mente acredita.", author: "" },
  { text: "Nem todo treino será fácil, mas todo treino conta.", author: "" },
  { text: "Um atleta não tenta descobrir o seu limite, deseja superá-lo.", author: "" },
  { text: "Se você quer vencer, você tem que planejar o sucesso e trabalhar com consistência todos os dias.", author: "Eliud Kipchoge" }
];

export default function App() {
  const [activeSection, setActiveSection] = useState('topo');
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectFilter, setProjectFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<(typeof athleteProjects)[number] | null>(null);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setQuoteIndex(prev => (prev + 1) % motivationalQuotes.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Always show when near the very top
      if (currentScrollY < 60) {
        setIsNavVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY - lastScrollY > 6) {
        // Scrolling down -> hide
        setIsNavVisible(false);
        setMenuOpen(false);
      } else if (currentScrollY < lastScrollY && lastScrollY - currentScrollY > 6) {
        // Scrolling up -> show
        setIsNavVisible(true);
      }
      
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => entry.isIntersecting && setActiveSection(entry.target.id)),
      { rootMargin: '-25% 0px -65% 0px' }
    );
    navItems.forEach(([id]) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const filteredProjects = useMemo(
    () => projectFilter === 'all' ? athleteProjects : athleteProjects.filter(p => p.category === projectFilter),
    [projectFilter]
  );

  return (
    <div id="portfolio-app-root" className="min-h-screen bg-[#070b12] text-slate-100 selection:bg-amber-400 selection:text-slate-950">
      <header className={`fixed top-0 left-0 right-0 z-40 border-b border-white/10 bg-[#070b12]/80 backdrop-blur-xl transition-transform duration-300 ${isNavVisible ? 'translate-y-0' : '-translate-y-full shadow-none'}`}>
        <div className="section-shell h-16 flex items-center justify-between">
          <a href="#topo" className="display font-bold tracking-tight text-lg">BRUNO<span className="text-amber-400">.</span></a>
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map(([id, label]) => (
              <a key={id} href={`#${id}`} className={`px-3 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition ${activeSection === id ? 'text-amber-400 bg-amber-400/10' : 'text-slate-400 hover:text-white'}`}>{label}</a>
            ))}
          </nav>
          <button onClick={() => setMenuOpen(v => !v)} className="md:hidden p-2 rounded-lg border border-white/10" aria-label="Abrir menu">☰</button>
        </div>
        {menuOpen && <nav className="md:hidden border-t border-white/10 bg-[#070b12] p-3">
          {navItems.map(([id, label]) => <a key={id} onClick={() => setMenuOpen(false)} href={`#${id}`} className="block px-3 py-3 text-sm font-semibold text-slate-300">{label}</a>)}
        </nav>}
      </header>

      <main>
        <section id="topo" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_75%_35%,rgba(245,158,11,.12),transparent_28%),radial-gradient(circle_at_20%_70%,rgba(59,130,246,.08),transparent_30%)]" />
          <div className="section-shell relative grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 reveal">
              <h1 className="display text-5xl sm:text-7xl xl:text-8xl font-bold leading-[.92] mt-2">BRUNO<br /><span className="text-amber-400">CORREIA</span></h1>
              <p className="mt-6 text-xl sm:text-2xl text-slate-200 max-w-2xl font-medium">Evolução pautada em evidências.</p>
              
              {/* Frase Motivacional Rotativa (20s) */}
              <div className="mt-5 min-h-[84px] p-4 rounded-2xl bg-white/[0.03] border border-white/10 max-w-xl flex flex-col justify-between">
                <blockquote key={quoteIndex} className="text-slate-300 text-sm sm:text-base italic leading-relaxed animate-fadeIn">
                  “{motivationalQuotes[quoteIndex].text}”
                  {motivationalQuotes[quoteIndex].author && (
                    <span className="block not-italic text-xs font-bold text-amber-400 mt-1.5">
                      — {motivationalQuotes[quoteIndex].author}
                    </span>
                  )}
                </blockquote>
                <div className="flex items-center justify-between mt-3 pt-2 border-t border-white/5">
                  <div className="flex gap-1.5 items-center">
                    {motivationalQuotes.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setQuoteIndex(idx)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${idx === quoteIndex ? 'w-5 bg-amber-400' : 'w-1.5 bg-white/20 hover:bg-white/40'}`}
                        aria-label={`Ir para frase ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mt-8">
                <a href="#conquistas" className="px-6 py-3.5 rounded-xl bg-amber-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider hover:bg-amber-300 transition">Ver conquistas →</a>
                <a href="#evolucao" className="px-6 py-3.5 rounded-xl glass font-bold text-xs uppercase tracking-wider hover:border-amber-400/40 transition">Minha evolução</a>
              </div>
              <div className="mt-7 flex items-center gap-2 text-xs text-slate-500"><span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Em constante evolução • Brasília/DF</div>
            </div>
            <div className="lg:col-span-5">
              <div className="glass rounded-3xl p-4 shadow-2xl shadow-black/30 card-hover">
                <div className="flex justify-between items-center px-2 pb-3"><span className="text-[10px] uppercase tracking-[.2em] text-slate-500">ATHLETE PROFILE</span><span className="text-[10px] text-amber-400 font-bold">2026</span></div>
                <div className="rounded-2xl overflow-hidden aspect-[4/5] bg-slate-900"><img src={athletePhoto} alt="Bruno, atleta" className="w-full h-full object-cover" referrerPolicy="no-referrer" /></div>
                <div className="grid grid-cols-2 gap-3 mt-3">
                  <div className="rounded-xl bg-black/30 p-3"><span className="text-[10px] uppercase text-slate-500">Melhor 5K</span><strong className="block text-xl font-black text-amber-400">18:35</strong></div>
                  <div className="rounded-xl bg-black/30 p-3"><span className="text-[10px] uppercase text-slate-500">Foco</span><strong className="block text-xl font-black">Sub-17</strong></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[.02] py-8">
          <div className="section-shell grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map(s => <div key={s.label} className="text-center md:text-left"><strong className="display block text-3xl sm:text-4xl font-bold text-white">{s.value}</strong><span className="block text-xs uppercase tracking-wider text-amber-400 mt-1">{s.label}</span><span className="text-xs text-slate-500">{s.detail}</span></div>)}
          </div>
        </section>

        <section id="sobre" className="py-24">
          <div className="section-shell grid lg:grid-cols-2 gap-14 items-start">
            <div><span className="section-kicker">01 // Quem sou</span><h2 className="display text-4xl sm:text-5xl font-bold mt-3">Disciplina &<br /><span className="text-amber-400">performance.</span></h2><p className="mt-6 text-slate-300 text-lg leading-relaxed">{athleteProfile.about.lead}</p><p className="mt-4 text-slate-400 leading-relaxed">Este espaço reúne minha trajetória, marcas pessoais, objetivos e conquistas oficiais nas pistas e ruas. O objetivo é demonstrar a consistência do processo e a busca incansável por evolução.</p><blockquote className="mt-8 border-l-2 border-amber-400 pl-5 text-slate-300 italic">“Cada segundo conquistado é construído antes da linha de chegada.”</blockquote></div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[['01','PRECISÃO','Controle rigoroso de ritmo, parciais e dados fisiológicos.'],['02','CONSTÂNCIA','Compromisso diário de treino, recuperação e evolução.'],['03','RESILIÊNCIA','Superação nos treinos de alta intensidade e provas longas.'],['04','DISCIPLINA','Rotina sólida e foco absoluto nas metas da temporada.']].map(([n,t,d]) => <div key={n} className="glass rounded-2xl p-6 card-hover"><span className="text-xs text-amber-400 font-bold">{n}</span><h3 className="font-bold mt-5">{t}</h3><p className="text-sm text-slate-400 mt-2 leading-relaxed">{d}</p></div>)}
            </div>
          </div>
        </section>

        <section id="evolucao" className="py-24 bg-white/[.02] border-y border-white/10">
          <div className="section-shell"><span className="section-kicker">02 // Performance</span><h2 className="display text-4xl sm:text-5xl font-bold mt-3">Minha evolução</h2><p className="text-slate-400 mt-3 max-w-2xl">Trajetória construída etapa por etapa com base em consistência e dados reais.</p>
            <div className="grid md:grid-cols-4 gap-4 mt-12">
              {timeline.map((item, i) => <div key={item.year} className="relative glass rounded-2xl p-5 card-hover"><span className="text-xs font-black text-amber-400">{item.year}</span><div className="w-8 h-px bg-amber-400/50 my-5"/><h3 className="font-bold">{item.title}</h3><p className="text-sm text-slate-400 mt-2 leading-relaxed">{item.text}</p>{i < timeline.length - 1 && <span className="hidden md:block absolute top-1/2 -right-3 w-5 h-px bg-white/15" />}</div>)}
            </div>
            <div className="mt-14 grid lg:grid-cols-3 gap-5">
              {goals.map(g => <div key={g.title} className="glass rounded-2xl p-6"><div className="flex justify-between"><span className="font-bold">{g.title}</span><span className="text-xs text-slate-500">{g.progress}%</span></div><div className="h-2 rounded-full bg-slate-800 mt-5 overflow-hidden"><div className="h-full bg-amber-400 rounded-full" style={{width: `${g.progress}%`}} /></div><div className="flex justify-between mt-3 text-xs"><span className="text-slate-400">Atual: {g.current}</span><span className="text-amber-400 font-semibold">Meta: {g.target}</span></div></div>)}
            </div>
          </div>
        </section>

        <section id="conquistas" className="py-24">
          <div className="section-shell">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-5">
              <div>
                <span className="section-kicker">03 // Resultados</span>
                <h2 className="display text-4xl sm:text-5xl font-bold mt-3">Conquistas</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {[['all','Todas'],['5k','5 KM'],['half','Meia / 21K'],['track','Revezamento 100K']].map(([id,label]) => (
                  <button key={id} onClick={() => setProjectFilter(id)} className={`px-3 py-2 rounded-lg text-xs font-bold uppercase transition ${projectFilter === id ? 'bg-amber-400 text-slate-950' : 'glass text-slate-400 hover:text-white'}`}>{label}</button>
                ))}
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-5 mt-10">
              {filteredProjects.map(p => (
                <article key={p.id} className="glass rounded-2xl p-6 card-hover">
                  <div className="flex justify-between gap-3">
                    <span className="text-[10px] uppercase tracking-widest text-amber-400 font-bold">{p.categoryLabel}</span>
                    <span className="text-xs text-slate-500">{p.year}</span>
                  </div>
                  <h3 className="display text-xl font-bold mt-4">{p.title}</h3>
                  <p className="text-sm text-slate-400 mt-3 leading-relaxed">{p.description}</p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-5">
                    {Object.entries(p.metrics).map(([k,v]) => (
                      <div key={k} className="bg-black/25 rounded-lg p-3">
                        <span className="block text-[9px] uppercase text-slate-500">{k}</span>
                        <strong className="block text-xs mt-1 text-slate-200">{v}</strong>
                      </div>
                    ))}
                  </div>
                  <button onClick={() => setSelectedProject(p)} className="mt-5 text-xs font-bold uppercase tracking-wider text-amber-400 hover:text-amber-300">Ver detalhes →</button>
                </article>
              ))}
            </div>
            <div className="mt-10 glass rounded-2xl p-6">
              <span className="section-kicker">Recordes & Marcas Pessoais</span>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
                {personalRecords.map(r => (
                  <div key={r.id} className="rounded-xl bg-black/25 p-4">
                    <span className="text-xs text-slate-500">{r.distance}</span>
                    <strong className="display block text-2xl text-white mt-2">{r.time}</strong>
                    <span className="text-xs text-amber-400">{r.pace}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contato" className="py-24 bg-white/[.02] border-t border-white/10">
          <div className="section-shell">
            <div className="max-w-3xl">
              <span className="section-kicker">04 // Contato</span>
              <h2 className="display text-4xl sm:text-6xl font-bold mt-3">Parcerias &<br /><span className="text-amber-400">conexões esportivas.</span></h2>
              <p className="text-slate-400 mt-5 text-lg">Aberto para apoios, marcas esportivas, eventos e conversas sobre performance e corrida.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-10">
              {socialLinks.map((s) => (
                <a key={s.id} href={s.url} target={s.url.startsWith('http') ? '_blank' : undefined} rel={s.url.startsWith('http') ? 'noreferrer' : undefined} className="glass rounded-xl p-5 hover:border-amber-400/40 transition">
                  <span className="text-xs uppercase tracking-wider text-slate-500">{s.name}</span>
                  <strong className="block mt-2 text-slate-200">{s.handle || 'Acessar →'}</strong>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-8">
        <div className="section-shell flex flex-col sm:flex-row justify-between gap-3 text-xs text-slate-500">
          <span>© {new Date().getFullYear()} Bruno Correia • Atleta de Corrida</span>
          <a href="#topo" className="hover:text-amber-400">Voltar ao topo ↑</a>
        </div>
      </footer>

      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setSelectedProject(null)}>
          <div className="glass max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-3xl p-7" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between gap-5">
              <div>
                <span className="section-kicker">{selectedProject.categoryLabel}</span>
                <h3 className="display text-2xl sm:text-3xl font-bold mt-2">{selectedProject.title}</h3>
              </div>
              <button onClick={() => setSelectedProject(null)} className="text-2xl text-slate-500 hover:text-white" aria-label="Fechar">×</button>
            </div>
            <p className="text-slate-300 leading-relaxed mt-6">{selectedProject.detailedStory}</p>
            <ul className="mt-6 space-y-2">
              {selectedProject.results.map((r,i) => (
                <li key={i} className="text-sm text-slate-300">✓ {r}</li>
              ))}
            </ul>
            <button onClick={() => setSelectedProject(null)} className="mt-7 px-5 py-3 rounded-xl bg-amber-400 text-slate-950 font-bold text-xs uppercase">Fechar</button>
          </div>
        </div>
      )}
    </div>
  );
}
