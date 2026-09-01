create extension if not exists pgcrypto;

create table if not exists public.books (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  author text not null,
  isbn text,
  category text,
  publisher text,
  year integer check (year is null or (year >= 0 and year <= 9999)),
  pages integer check (pages is null or pages > 0),
  status text not null default 'Não lido' check (status in ('Não lido', 'Lendo', 'Lido')),
  shelf text,
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.books enable row level security;

grant usage on schema public to anon, authenticated;
grant select, insert, update, delete on table public.books to anon, authenticated;

create policy "books_select_public"
on public.books for select
to anon, authenticated
using (true);

create policy "books_insert_public"
on public.books for insert
to anon, authenticated
with check (true);

create policy "books_update_public"
on public.books for update
to anon, authenticated
using (true)
with check (true);

create policy "books_delete_public"
on public.books for delete
to anon, authenticated
using (true);

create index if not exists books_created_at_idx on public.books (created_at desc);
create index if not exists books_status_idx on public.books (status);
