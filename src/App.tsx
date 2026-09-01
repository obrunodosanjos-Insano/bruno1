import { useEffect, useMemo, useState } from 'react';
import { BookOpen, Library, Pencil, Plus, Search, Trash2, X } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

type BookStatus = 'Não lido' | 'Lendo' | 'Lido';
type Book = {
  id: string;
  title: string;
  author: string;
  category?: string | null;
  isbn?: string | null;
  publisher?: string | null;
  year?: number | null;
  pages?: number | null;
  status: BookStatus;
  shelf?: string | null;
  notes?: string | null;
  created_at?: string;
};

type FormState = Omit<Book, 'id' | 'created_at'> & { year: string | number; pages: string | number };

const emptyForm: FormState = {
  title: '', author: '', category: '', isbn: '', publisher: '', year: '', pages: '',
  status: 'Não lido', shelf: '', notes: ''
};

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;
const supabase = supabaseUrl && supabaseKey ? createClient(supabaseUrl, supabaseKey) : null;
const storageKey = 'minha-biblioteca-livros';

export default function App() {
  const [books, setBooks] = useState<Book[]>([]);
  const [form, setForm] = useState<FormState>(emptyForm);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<'Todos' | BookStatus>('Todos');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => { void loadBooks(); }, []);

  async function loadBooks() {
    setLoading(true);
    if (supabase) {
      const { data, error } = await supabase.from('books').select('*').order('created_at', { ascending: false });
      if (!error && data) {
        setBooks(data as Book[]);
        localStorage.setItem(storageKey, JSON.stringify(data));
      } else {
        setMessage('Não foi possível conectar ao Supabase. Mostrando os dados salvos neste navegador.');
        loadLocal();
      }
    } else {
      loadLocal();
    }
    setLoading(false);
  }

  function loadLocal() {
    try { setBooks(JSON.parse(localStorage.getItem(storageKey) || '[]')); }
    catch { setBooks([]); }
  }

  function saveLocal(next: Book[]) {
    setBooks(next);
    localStorage.setItem(storageKey, JSON.stringify(next));
  }

  function openCreate() {
    setEditingId(null); setForm(emptyForm); setMessage(''); setModalOpen(true);
  }

  function openEdit(book: Book) {
    setEditingId(book.id);
    setForm({
      title: book.title, author: book.author, category: book.category || '', isbn: book.isbn || '',
      publisher: book.publisher || '', year: book.year || '', pages: book.pages || '', status: book.status,
      shelf: book.shelf || '', notes: book.notes || ''
    });
    setMessage(''); setModalOpen(true);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.title.trim() || !form.author.trim()) return setMessage('Informe título e autor.');

    const payload = {
      title: form.title.trim(), author: form.author.trim(), category: form.category?.trim() || null,
      isbn: form.isbn?.trim() || null, publisher: form.publisher?.trim() || null,
      year: form.year ? Number(form.year) : null, pages: form.pages ? Number(form.pages) : null,
      status: form.status as BookStatus, shelf: form.shelf?.trim() || null, notes: form.notes?.trim() || null
    };

    if (supabase) {
      const result = editingId
        ? await supabase.from('books').update(payload).eq('id', editingId).select().single()
        : await supabase.from('books').insert(payload).select().single();
      if (result.error) return setMessage(`Erro ao salvar no Supabase: ${result.error.message}`);
      await loadBooks();
    } else {
      const now = new Date().toISOString();
      const next = editingId
        ? books.map((b) => b.id === editingId ? { ...b, ...payload } : b)
        : [{ id: crypto.randomUUID(), created_at: now, ...payload }, ...books];
      saveLocal(next);
    }

    setModalOpen(false); setEditingId(null); setForm(emptyForm);
  }

  async function removeBook(book: Book) {
    if (!confirm(`Excluir “${book.title}”?`)) return;
    if (supabase) {
      const { error } = await supabase.from('books').delete().eq('id', book.id);
      if (error) return setMessage(`Erro ao excluir: ${error.message}`);
    }
    saveLocal(books.filter((b) => b.id !== book.id));
  }

  const filteredBooks = useMemo(() => {
    const term = search.toLowerCase().trim();
    return books.filter((b) => {
      const matchesSearch = !term || [b.title, b.author, b.category, b.isbn].filter(Boolean)
        .some((v) => String(v).toLowerCase().includes(term));
      const matchesFilter = filter === 'Todos' || b.status === filter;
      return matchesSearch && matchesFilter;
    });
  }, [books, search, filter]);

  const stats = {
    total: books.length,
    read: books.filter((b) => b.status === 'Lido').length,
    reading: books.filter((b) => b.status === 'Lendo').length,
    unread: books.filter((b) => b.status === 'Não lido').length
  };

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand"><div className="brand-icon"><Library size={24}/></div><div><strong>Minha Biblioteca</strong><span>Seu acervo de casa, organizado</span></div></div>
        <button className="primary" onClick={openCreate}><Plus size={18}/> Adicionar livro</button>
      </header>

      <main className="content">
        <section className="hero"><div><p className="eyebrow">ACERVO PESSOAL</p><h1>Todos os seus livros em um só lugar.</h1><p>Cadastre, encontre e acompanhe tudo o que você tem em casa.</p></div><BookOpen size={108} strokeWidth={1.15}/></section>

        <div className={`connection ${supabase ? 'online' : ''}`}>{supabase ? 'Supabase conectado' : 'Modo local — configure o Supabase na Vercel para sincronizar'}</div>
        {message && <div className="notice">{message}</div>}

        <section className="stats">
          <article><span>Total</span><strong>{stats.total}</strong></article>
          <article><span>Lidos</span><strong>{stats.read}</strong></article>
          <article><span>Lendo</span><strong>{stats.reading}</strong></article>
          <article><span>Não lidos</span><strong>{stats.unread}</strong></article>
        </section>

        <section className="toolbar">
          <label className="search"><Search size={18}/><input placeholder="Buscar por título, autor, categoria ou ISBN" value={search} onChange={(e)=>setSearch(e.target.value)}/></label>
          <select value={filter} onChange={(e)=>setFilter(e.target.value as typeof filter)}><option>Todos</option><option>Não lido</option><option>Lendo</option><option>Lido</option></select>
        </section>

        {loading ? <div className="empty">Carregando biblioteca...</div> : filteredBooks.length === 0 ? (
          <div className="empty"><BookOpen size={44}/><h2>{books.length ? 'Nenhum livro encontrado' : 'Sua estante ainda está vazia'}</h2><p>{books.length ? 'Tente outra busca ou filtro.' : 'Cadastre o primeiro livro da sua coleção.'}</p>{!books.length && <button className="primary" onClick={openCreate}><Plus size={18}/> Cadastrar primeiro livro</button>}</div>
        ) : (
          <section className="grid">{filteredBooks.map((book)=><article className="card" key={book.id}><div className="spine"><BookOpen size={28}/></div><div className="card-body"><div className="topline"><span className="status">{book.status}</span>{book.shelf && <span>{book.shelf}</span>}</div><h2>{book.title}</h2><p className="author">{book.author}</p><div className="meta">{book.category && <span>{book.category}</span>}{book.year && <span>{book.year}</span>}{book.pages && <span>{book.pages} págs.</span>}</div>{book.notes && <p className="notes">{book.notes}</p>}<div className="actions"><button onClick={()=>openEdit(book)}><Pencil size={16}/>Editar</button><button className="danger" onClick={()=>void removeBook(book)}><Trash2 size={16}/>Excluir</button></div></div></article>)}</section>
        )}
      </main>

      {modalOpen && <div className="backdrop" onMouseDown={(e)=>e.target===e.currentTarget && setModalOpen(false)}><section className="modal"><div className="modal-head"><div><span>{editingId ? 'EDITAR LIVRO' : 'NOVO LIVRO'}</span><h2>{editingId ? 'Atualize os dados' : 'Cadastre na sua estante'}</h2></div><button className="icon" onClick={()=>setModalOpen(false)}><X size={20}/></button></div><form onSubmit={handleSubmit}><div className="form-grid"><label className="wide">Título *<input value={form.title} onChange={(e)=>setForm({...form,title:e.target.value})} required/></label><label>Autor *<input value={form.author} onChange={(e)=>setForm({...form,author:e.target.value})} required/></label><label>Categoria<input value={form.category || ''} onChange={(e)=>setForm({...form,category:e.target.value})}/></label><label>ISBN<input value={form.isbn || ''} onChange={(e)=>setForm({...form,isbn:e.target.value})}/></label><label>Editora<input value={form.publisher || ''} onChange={(e)=>setForm({...form,publisher:e.target.value})}/></label><label>Ano<input type="number" value={form.year} onChange={(e)=>setForm({...form,year:e.target.value})}/></label><label>Páginas<input type="number" value={form.pages} onChange={(e)=>setForm({...form,pages:e.target.value})}/></label><label>Status<select value={form.status} onChange={(e)=>setForm({...form,status:e.target.value as BookStatus})}><option>Não lido</option><option>Lendo</option><option>Lido</option></select></label><label>Estante / local<input value={form.shelf || ''} onChange={(e)=>setForm({...form,shelf:e.target.value})}/></label><label className="wide">Observações<textarea rows={4} value={form.notes || ''} onChange={(e)=>setForm({...form,notes:e.target.value})}/></label></div><div className="modal-actions"><button type="button" className="secondary" onClick={()=>setModalOpen(false)}>Cancelar</button><button className="primary" type="submit">{editingId ? 'Salvar alterações' : 'Cadastrar livro'}</button></div></form></section></div>}
    </div>
  );
}
