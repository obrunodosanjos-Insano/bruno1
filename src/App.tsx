import React, { useEffect, useMemo, useState } from 'react';
import { athleteProjects, athleteSkills, athleteProfile, personalRecords } from './data/portfolioData';

const athletePhoto = '/bruno_athete.jpeg';

const navItems = [
  ['topo', 'Início'], ['sobre', 'Sobre'], ['evolucao', 'Evolução'],
  ['conquistas', 'Conquistas'], ['dev', 'Tecnologia'], ['contato', 'Contato']
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

const techSkills = ['React', 'TypeScript', 'JavaScript', 'Vite', 'Git & GitHub', 'UI responsiva'];

export default function App() {
  const [activeSection, setActiveSection] = useState('topo');
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectFilter, setProjectFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<(typeof athleteProjects)[number] | null>(null);

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
      <header className="fixed top-0 left-0 right-0 z-40 border-b border-white/10 bg-[#070b12]/80 backdrop-blur-xl">
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
              <span className="section-kicker">Atleta • Tecnologia • Evolução</span>
              <h1 className="display text-5xl sm:text-7xl xl:text-8xl font-bold leading-[.92] mt-4">BRUNO<br /><span className="text-amber-400">CORREIA</span></h1>
              <p className="mt-6 text-xl sm:text-2xl text-slate-200 max-w-2xl font-medium">Evolução pautada em evidências.</p>
              <p className="mt-4 text-slate-400 max-w-xl leading-relaxed">Atleta de corrida e desenvolvedor, usando consistência, tecnologia e análise para evoluir dentro e fora da pista.</p>
              <div className="flex flex-wrap gap-3 mt-8">
                <a href="#conquistas" className="px-6 py-3.5 rounded-xl bg-amber-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider hover:bg-amber-300 transition">Ver conquistas →</a>
                <a href="#dev" className="px-6 py-3.5 rounded-xl glass font-bold text-xs uppercase tracking-wider hover:border-amber-400/40 transition">Ver projetos</a>
              </div>
              <div className="mt-7 flex items-center gap-2 text-xs text-slate-500"><span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Em constante evolução • Brasília/DF</div>
            </div>
            <div className="lg:col-span-5">
              <div className="glass rounded-3xl p-4 shadow-2xl shadow-black/30 card-hover">
                <div className="flex justify-between items-center px-2 pb-3"><span className="text-[10px] uppercase tracking-[.2em] text-slate-500">ATHLETE PROFILE</span><span className="text-[10px] text-amber-400 font-bold">2026</span></div>
                <div className="rounded-2xl overflow-hidden aspect-[4/5] bg-slate-900"><img src="/bruno_athete.jpeg" alt="Bruno, atleta" className="w-full h-full object-cover" referrerPolicy="no-referrer" /></div>
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
            <div><span className="section-kicker">01 // Quem sou</span><h2 className="display text-4xl sm:text-5xl font-bold mt-3">Mais que um<br /><span className="text-amber-400">portfólio.</span></h2><p className="mt-6 text-slate-300 text-lg leading-relaxed">{athleteProfile.about.lead}</p><p className="mt-4 text-slate-400 leading-relaxed">Este espaço reúne minha trajetória, marcas, objetivos, conquistas e projetos digitais. A ideia é mostrar o processo — não apenas o resultado.</p><blockquote className="mt-8 border-l-2 border-amber-400 pl-5 text-slate-300 italic">“Cada segundo conquistado é construído antes da linha de chegada.”</blockquote></div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[['01','PRECISÃO','Controlar ritmo, dados e detalhes.'],['02','CONSTÂNCIA','Treinar e construir todos os dias.'],['03','RESILIÊNCIA','Continuar quando fica difícil.'],['04','CURIOSIDADE','Aprender e transformar ideias em projetos.']].map(([n,t,d]) => <div key={n} className="glass rounded-2xl p-6 card-hover"><span className="text-xs text-amber-400 font-bold">{n}</span><h3 className="font-bold mt-5">{t}</h3><p className="text-sm text-slate-400 mt-2 leading-relaxed">{d}</p></div>)}
            </div>
          </div>
        </section>

        <section id="evolucao" className="py-24 bg-white/[.02] border-y border-white/10">
          <div className="section-shell"><span className="section-kicker">02 // Performance</span><h2 className="display text-4xl sm:text-5xl font-bold mt-3">Minha evolução</h2><p className="text-slate-400 mt-3 max-w-2xl">Uma trajetória construída por etapas. Troque os dados abaixo pelas suas marcas e momentos reais conforme a temporada avança.</p>
            <div className="grid md:grid-cols-4 gap-4 mt-12">
              {timeline.map((item, i) => <div key={item.year} className="relative glass rounded-2xl p-5 card-hover"><span className="text-xs font-black text-amber-400">{item.year}</span><div className="w-8 h-px bg-amber-400/50 my-5"/><h3 className="font-bold">{item.title}</h3><p className="text-sm text-slate-400 mt-2 leading-relaxed">{item.text}</p>{i < timeline.length - 1 && <span className="hidden md:block absolute top-1/2 -right-3 w-5 h-px bg-white/15" />}</div>)}
            </div>
            <div className="mt-14 grid lg:grid-cols-3 gap-5">
              {goals.map(g => <div key={g.title} className="glass rounded-2xl p-6"><div className="flex justify-between"><span className="font-bold">{g.title}</span><span className="text-xs text-slate-500">{g.progress}%</span></div><div className="h-2 rounded-full bg-slate-800 mt-5 overflow-hidden"><div className="h-full bg-amber-400 rounded-full" style={{width: `${g.progress}%`}} /></div><div className="flex justify-between mt-3 text-xs"><span className="text-slate-400">Atual: {g.current}</span><span className="text-amber-400 font-semibold">Meta: {g.target}</span></div></div>)}
            </div>
          </div>
        </section>

        <section id="conquistas" className="py-24">
          <div className="section-shell"><div className="flex flex-col md:flex-row md:items-end justify-between gap-5"><div><span className="section-kicker">03 // Resultados</span><h2 className="display text-4xl sm:text-5xl font-bold mt-3">Conquistas & projetos</h2></div><div className="flex flex-wrap gap-2">{[['all','Todos'],['marathon','42K'],['half','21K'],['track','Pista'],['project','Projetos']].map(([id,label]) => <button key={id} onClick={() => setProjectFilter(id)} className={`px-3 py-2 rounded-lg text-xs font-bold uppercase ${projectFilter === id ? 'bg-amber-400 text-slate-950' : 'glass text-slate-400 hover:text-white'}`}>{label}</button>)}</div></div>
            <div className="grid md:grid-cols-2 gap-5 mt-10">
              {filteredProjects.map(p => <article key={p.id} className="glass rounded-2xl p-6 card-hover"><div className="flex justify-between gap-3"><span className="text-[10px] uppercase tracking-widest text-amber-400 font-bold">{p.categoryLabel}</span><span className="text-xs text-slate-500">{p.year}</span></div><h3 className="display text-xl font-bold mt-4">{p.title}</h3><p className="text-sm text-slate-400 mt-3 leading-relaxed">{p.description}</p><div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-5">{Object.entries(p.metrics).map(([k,v]) => <div key={k} className="bg-black/25 rounded-lg p-3"><span className="block text-[9px] uppercase text-slate-500">{k}</span><strong className="block text-xs mt-1 text-slate-200">{v}</strong></div>)}</div><button onClick={() => setSelectedProject(p)} className="mt-5 text-xs font-bold uppercase tracking-wider text-amber-400 hover:text-amber-300">Ver detalhes →</button></article>)}
            </div>
            <div className="mt-10 glass rounded-2xl p-6"><span className="section-kicker">Recordes</span><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">{personalRecords.map(r => <div key={r.id} className="rounded-xl bg-black/25 p-4"><span className="text-xs text-slate-500">{r.distance}</span><strong className="display block text-2xl text-white mt-2">{r.time}</strong><span className="text-xs text-amber-400">{r.pace}</span></div>)}</div></div>
          </div>
        </section>

        <section id="dev" className="py-24 bg-white/[.02] border-y border-white/10">
          <div className="section-shell"><span className="section-kicker">04 // Dupla identidade</span><h2 className="display text-4xl sm:text-5xl font-bold mt-3">Atleta & desenvolvedor</h2><div className="grid lg:grid-cols-2 gap-5 mt-10">
            <div className="rounded-3xl bg-gradient-to-br from-amber-400/15 to-transparent border border-amber-400/20 p-8"><span className="text-4xl">🏃</span><h3 className="display text-3xl font-bold mt-6">Bruno — Atleta</h3><p className="text-slate-400 mt-3 leading-relaxed">Corrida, metas, consistência e análise de performance. A mesma disciplina que sustenta um treino também sustenta um projeto.</p><div className="flex flex-wrap gap-2 mt-6">{['Corrida','Performance','Pacing','Disciplina'].map(x => <span key={x} className="px-3 py-1.5 rounded-full bg-black/20 text-xs text-slate-300">{x}</span>)}</div></div>
            <div className="rounded-3xl bg-gradient-to-br from-blue-500/15 to-transparent border border-blue-400/20 p-8"><span className="text-4xl">💻</span><h3 className="display text-3xl font-bold mt-6">Bruno — Desenvolvedor</h3><p className="text-slate-400 mt-3 leading-relaxed">Projetos web com foco em interfaces modernas, componentes reutilizáveis e experiências responsivas.</p><div className="flex flex-wrap gap-2 mt-6">{techSkills.map(x => <span key={x} className="px-3 py-1.5 rounded-full bg-black/20 text-xs text-slate-300">{x}</span>)}</div></div>
          </div><div className="mt-8 grid md:grid-cols-2 gap-5">{[{title:'Tostado',text:'Projeto de cafeteria com interface completa de cardápio, carrinho, checkout e experiência de cliente.',href:'https://github.com/obrunodosanjos-Insano/bruno'},{title:'Este portfólio',text:'Portfólio pessoal que une performance esportiva, trajetória e tecnologia.',href:'https://github.com/obrunodosanjos-Insano/bruno1'}].map(p => <div key={p.title} className="glass rounded-2xl p-6 flex items-center justify-between gap-5"><div><h3 className="font-bold text-xl">{p.title}</h3><p className="text-sm text-slate-400 mt-2">{p.text}</p></div><a className="shrink-0 px-4 py-2 rounded-lg bg-white/10 hover:bg-amber-400 hover:text-slate-950 text-xs font-bold" href={p.href} target="_blank" rel="noreferrer">GitHub ↗</a></div>)}</div></div>
        </section>

        <section id="contato" className="py-24">
          <div className="section-shell"><div className="max-w-3xl"><span className="section-kicker">05 // Contato</span><h2 className="display text-4xl sm:text-6xl font-bold mt-3">Vamos construir o<br /><span className="text-amber-400">próximo passo.</span></h2><p className="text-slate-400 mt-5 text-lg">Para conversar sobre projetos, tecnologia, corrida ou oportunidades, encontre-me nos canais abaixo.</p></div><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-10">{[['GitHub','https://github.com/obrunodosanjos-Insano/bruno1'],['Instagram','#'],['Strava','#'],['E-mail','mailto:contato@bruno.com.br']].map(([name,href]) => <a key={name} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined} className="glass rounded-xl p-5 hover:border-amber-400/40 transition"><span className="text-xs uppercase tracking-wider text-slate-500">{name}</span><strong className="block mt-2">Abrir →</strong></a>)}</div></div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-8"><div className="section-shell flex flex-col sm:flex-row justify-between gap-3 text-xs text-slate-500"><span>© {new Date().getFullYear()} Bruno Correia</span><a href="#topo" className="hover:text-amber-400">Voltar ao topo ↑</a></div></footer>

      {selectedProject && <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setSelectedProject(null)}><div className="glass max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-3xl p-7" onClick={e => e.stopPropagation()}><div className="flex justify-between gap-5"><div><span className="section-kicker">{selectedProject.categoryLabel}</span><h3 className="display text-2xl sm:text-3xl font-bold mt-2">{selectedProject.title}</h3></div><button onClick={() => setSelectedProject(null)} className="text-2xl text-slate-500 hover:text-white" aria-label="Fechar">×</button></div><p className="text-slate-300 leading-relaxed mt-6">{selectedProject.detailedStory}</p><ul className="mt-6 space-y-2">{selectedProject.results.map((r,i) => <li key={i} className="text-sm text-slate-300">✓ {r}</li>)}</ul><button onClick={() => setSelectedProject(null)} className="mt-7 px-5 py-3 rounded-xl bg-amber-400 text-slate-950 font-bold text-xs uppercase">Fechar</button></div></div>}
    </div>
  );
}
