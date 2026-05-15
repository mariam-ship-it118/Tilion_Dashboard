-- Single-table FAQs layout used by the dashboard.
-- Run once in Supabase → SQL Editor. If the table already exists, adjust or skip.

create table if not exists public."FAQs" (
  id uuid primary key default gen_random_uuid(),
  "Category" text not null,
  "Questions" text not null default '',
  "Answers" text not null default ''
);

create index if not exists "FAQs_Category_idx" on public."FAQs" ("Category");

alter table public."FAQs" enable row level security;

-- Replace with authenticated policies for production.
create policy "FAQs_allow_all"
  on public."FAQs" for all
  using (true) with check (true);
