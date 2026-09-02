import { useEffect, useMemo, useState } from 'react';
import { BookOpen, Library, LogIn, Plus, Trash2 } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';
import App from './App.tsx';

type GuestBook = {
  id: string;
  title: string;
  author: string;
  status: 'Não lido' | 'Lendo' | 'Lido';
};

const STORAGE_KEY = 'guest_library_books';
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://bxizwvofwketeyorpucu.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_a6Sxr9eDmZfAJuC81UCkgA_XfImPF3L';
const supabase = createClient(supabaseUrl, supabaseKey);

function loadGuestBooks(): GuestBook[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function GuestLibrary({ onExit }: { onExit: () => void }) {
  const [books, setBooks] = useState<GuestBook[]>(loadGuestBooks);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  function save(next: GuestBook[]) {
    setBooks(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  }

  function addBook(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim() || !author.trim()) return;
    save([{ id: crypto.randomUUID(), title: title.trim(), author: author.trim(), status: 'Não lido' }, ...books]);
    setTitle('');
    setAuthor('');
  }

  const total = useMemo(() => books.length, [books]);

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand"><div className="brand-icon"><Library size={24} /></div><div><strong>Minha Biblioteca</strong><span>Modo visitante</span></div></div>
        <button className="secondary" onClick={onExit}><LogIn size={17} /> Entrar na conta</button>
      </header>
      <main className="content">
        <section className="hero"><div><p className="eyebrow">MODO VISITANTE</p><h1>Entre sem fazer login.</h1><p>Use a biblioteca normalmente sem criar conta. Os livros ficam salvos somente neste navegador.</p></div><BookOpen size={108} strokeWidth={1.15} /></section>
        <div className="connection">Modo visitante • dados salvos apenas neste dispositivo</div>
        <section className="stats"><article><span>Total</span><strong>{total}</strong></article></section>
        <section className="card" style={{ marginBottom: 20 }}><div className="card-body" style={{ width: '100%' }}><form onSubmit={addBook} className="form-grid"><label>Título<input value={title} onChange={(e) => setTitle(e.target.value)} required /></label><label>Autor<input value={author} onChange={(e) => setAuthor(e.target.value)} required /></label><div className="wide"><button className="primary" type="submit"><Plus size={18} /> Adicionar livro</button></div></form></div></section>
        {books.length === 0 ? <div className="empty"><BookOpen size={44} /><h2>Sua estante está vazia</h2><p>Adicione seu primeiro livro acima.</p></div> : <section className="grid">{books.map((book) => <article className="card" key={book.id}><div className="spine"><BookOpen size={28} /></div><div className="card-body"><span className="status">{book.status}</span><h2>{book.title}</h2><p className="author">{book.author}</p><div className="actions"><button className="danger" onClick={() => save(books.filter((item) => item.id !== book.id))}><Trash2 size={16} />Excluir</button></div></div></article>)}</section>}
      </main>
    </div>
  );
}

export default function GuestMode() {
  const [guest, setGuest] = useState(() => localStorage.getItem('guest_mode') === '1');
  const [loggedIn, setLoggedIn] = useState<boolean | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setLoggedIn(Boolean(data.session)));
    const { data } = supabase.auth.onAuthStateChange((_event, session) => setLoggedIn(Boolean(session)));
    return () => data.subscription.unsubscribe();
  }, []);

  if (guest) return <GuestLibrary onExit={() => { localStorage.removeItem('guest_mode'); setGuest(false); }} />;

  return (
    <>
      <App />
      {loggedIn === false && (
        <button type="button" className="secondary" onClick={() => { localStorage.setItem('guest_mode', '1'); setGuest(true); }} style={{ position: 'fixed', left: '50%', bottom: 22, transform: 'translateX(-50%)', zIndex: 100, boxShadow: '0 10px 30px rgba(0,0,0,.14)' }}>
          Entrar sem fazer login
        </button>
      )}
    </>
  );
}
