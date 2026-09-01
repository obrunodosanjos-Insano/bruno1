create extension if not exists pgcrypto;

create table if not exists public.books (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
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

alter table public.books add column if not exists user_id uuid references auth.users(id) on delete cascade;
alter table public.books enable row level security;

grant usage on schema public to authenticated;
grant select, insert, update, delete on table public.books to authenticated;
revoke all on table public.books from anon;

drop policy if exists "books_select_public" on public.books;
drop policy if exists "books_insert_public" on public.books;
drop policy if exists "books_update_public" on public.books;
drop policy if exists "books_delete_public" on public.books;
drop policy if exists "books_select_own" on public.books;
drop policy if exists "books_insert_own" on public.books;
drop policy if exists "books_update_own" on public.books;
drop policy if exists "books_delete_own" on public.books;

create policy "books_select_own"
on public.books for select
to authenticated
using ((select auth.uid()) is not null and (select auth.uid()) = user_id);

create policy "books_insert_own"
on public.books for insert
to authenticated
with check ((select auth.uid()) is not null and (select auth.uid()) = user_id);

create policy "books_update_own"
on public.books for update
to authenticated
using ((select auth.uid()) is not null and (select auth.uid()) = user_id)
with check ((select auth.uid()) is not null and (select auth.uid()) = user_id);

create policy "books_delete_own"
on public.books for delete
to authenticated
using ((select auth.uid()) is not null and (select auth.uid()) = user_id);

create index if not exists books_user_id_idx on public.books (user_id);
create index if not exists books_created_at_idx on public.books (created_at desc);
create index if not exists books_status_idx on public.books (status);
