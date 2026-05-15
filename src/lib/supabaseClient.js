import { createClient } from "@supabase/supabase-js";

const url = process.env.REACT_APP_SUPABASE_URL;
const anonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

/**
 * Single FAQs table (default `FAQs`). Columns: `Category`, `Questions`, `Answers`, plus `id` (PK).
 * Override with REACT_APP_SUPABASE_FAQ_TABLE if the name differs (e.g. `faqs`).
 */
export const FAQ_TABLE =
  process.env.REACT_APP_SUPABASE_FAQ_TABLE || "FAQs";

let client;

export function getSupabase() {
  if (!url || !anonKey) return null;
  if (!client) client = createClient(url, anonKey);
  return client;
}

export function isSupabaseConfigured() {
  return Boolean(url && anonKey);
}
