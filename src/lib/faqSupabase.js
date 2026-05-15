import { getSupabase, FAQ_TABLE } from "./supabaseClient";

function notConfigured() {
  return { data: null, error: new Error("Supabase is not configured.") };
}

/** Supports quoted columns (Category) or Postgres-folded lowercase (category) in JSON. */
function pick(row, ...keys) {
  for (const k of keys) {
    if (row[k] !== undefined && row[k] !== null) return row[k];
  }
  return "";
}

function normalizeFaqRow(row) {
  return {
    id: row.id,
    Category: pick(row, "Category", "category"),
    Questions: pick(row, "Questions", "questions"),
    Answers: pick(row, "Answers", "answers"),
  };
}

const COL = {
  category: process.env.REACT_APP_FAQ_COL_CATEGORY || "Category",
  questions: process.env.REACT_APP_FAQ_COL_QUESTIONS || "Questions",
  answers: process.env.REACT_APP_FAQ_COL_ANSWERS || "Answers",
};

function rowPayload(category, questions, answers) {
  return {
    [COL.category]: category,
    [COL.questions]: questions,
    [COL.answers]: answers ?? "",
  };
}

/**
 * Reads all rows from `FAQs`, groups by category for the UI.
 * Each FAQ row should have `id` (primary key) for edit/delete.
 */
export async function fetchFaqTree() {
  const sb = getSupabase();
  if (!sb) return notConfigured();

  const selectList = `id, ${COL.category}, ${COL.questions}, ${COL.answers}`;
  const { data: rows, error } = await sb
    .from(FAQ_TABLE)
    .select(selectList)
    .order(COL.category, { ascending: true });

  if (error) return { data: null, error };

  const byCategory = new Map();
  const order = [];

  for (const raw of rows || []) {
    const row = normalizeFaqRow(raw);
    const cat = row.Category ?? "";
    if (!byCategory.has(cat)) {
      byCategory.set(cat, { id: cat, title: cat, items: [] });
      order.push(cat);
    }
    byCategory.get(cat).items.push({
      id: row.id,
      question: row.Questions ?? "",
      answer: row.Answers ?? "",
    });
  }

  const tree = order.map((c) => byCategory.get(c));
  return { data: tree, error: null };
}

/** Inserts a starter row so the category appears (single-table pattern). */
export async function createCategory(title) {
  const sb = getSupabase();
  if (!sb) return notConfigured();
  return sb
    .from(FAQ_TABLE)
    .insert(
      rowPayload(title.trim(), "New question (edit me)", "")
    )
    .select("id")
    .single();
}

/** Renames category for every row in that category. */
export async function updateCategory(oldCategoryName, newTitle) {
  const sb = getSupabase();
  if (!sb) return notConfigured();
  return sb
    .from(FAQ_TABLE)
    .update({ [COL.category]: newTitle.trim() })
    .eq(COL.category, oldCategoryName);
}

/** Deletes every row in that category. */
export async function deleteCategory(categoryName) {
  const sb = getSupabase();
  if (!sb) return notConfigured();
  return sb.from(FAQ_TABLE).delete().eq(COL.category, categoryName);
}

export async function createFaq({ categoryId, question, answer }) {
  const sb = getSupabase();
  if (!sb) return notConfigured();
  return sb
    .from(FAQ_TABLE)
    .insert(rowPayload(categoryId, question, answer ?? ""))
    .select("id")
    .single();
}

export async function updateFaq({ id, categoryId, question, answer }) {
  const sb = getSupabase();
  if (!sb) return notConfigured();
  return sb
    .from(FAQ_TABLE)
    .update(rowPayload(categoryId, question, answer ?? ""))
    .eq("id", id);
}

export async function deleteFaq(id) {
  const sb = getSupabase();
  if (!sb) return notConfigured();
  return sb.from(FAQ_TABLE).delete().eq("id", id);
}
