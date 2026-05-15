import React, { useEffect, useMemo, useState } from "react";
import Sidebar from "../components/SideBar";
import TopBar from "../components/TopBar";
import {
  FiChevronDown,
  FiEdit2,
  FiPlus,
  FiSave,
  FiTrash2,
  FiX,
} from "react-icons/fi";
import "./FAQs.css";
import SEO from "../components/SEO";

const uid = () =>
  typeof crypto !== "undefined" && crypto.randomUUID
    ? crypto.randomUUID()
    : `id-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;

const INITIAL_CATEGORIES = [
  {
    id: "general",
    title: "General questions",
    items: [
      {
        id: "g1",
        question: "What is AR?",
        answer:
          "Augmented reality (AR) blends digital content with the real world so families can explore together in a safe, playful way.",
      },
      {
        id: "g2",
        question: "How do I create a child account?",
        answer:
          "Go to Users, choose Add Child, and follow the steps. You will need parent verification before the account goes live.",
      },
      {
        id: "g3",
        question: "Is my data secure?",
        answer:
          "Yes. We use industry-standard encryption and strict access controls. You can review our privacy policy anytime.",
      },
      {
        id: "g4",
        question: "How do I contact support?",
        answer:
          "Use the help box in the sidebar or email support from your dashboard settings page.",
      },
    ],
  },
  {
    id: "frequent",
    title: "Frequently asked questions",
    items: [
      {
        id: "f1",
        question: "What is AR?",
        answer:
          "AR lets kids see friendly characters and tips on top of the real world through the camera—always with parent oversight.",
      },
      {
        id: "f2",
        question: "Can two parents approve a connection?",
        answer:
          "Yes. Both parents receive a request and must approve before a new friend connection is active.",
      },
      {
        id: "f3",
        question: "How do screen time limits work?",
        answer:
          "Set daily limits in Settings. When time is up, the app gently reminds your child to take a break.",
      },
    ],
  },
];

function CrudModal({ modal, categories, onClose, onSubmit }) {
  const [title, setTitle] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [categoryId, setCategoryId] = useState("");

  useEffect(() => {
    if (!modal) return;
    if (modal.kind === "category") {
      setTitle(modal.mode === "edit" ? modal.title : "");
    } else {
      setQuestion(modal.mode === "edit" ? modal.question : "");
      setAnswer(modal.mode === "edit" ? modal.answer : "");
      const first = categories[0]?.id ?? "";
      setCategoryId(
        modal.mode === "edit" ? modal.categoryId : modal.categoryId ?? first
      );
    }
  }, [modal, categories]);

  if (!modal) return null;

  const heading =
    modal.kind === "category"
      ? modal.mode === "create"
        ? "Add category"
        : "Edit category"
      : modal.mode === "create"
        ? "Add FAQ"
        : "Edit FAQ";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (modal.kind === "category") {
      const t = title.trim();
      if (!t) return;
      if (modal.mode === "create")
        onSubmit({ kind: "category", mode: "create", title: t });
      else onSubmit({ kind: "category", mode: "edit", id: modal.id, title: t });
    } else {
      const q = question.trim();
      if (!q || !categoryId) return;
      const a = answer.trim();
      if (modal.mode === "create")
        onSubmit({
          kind: "faq",
          mode: "create",
          categoryId,
          question: q,
          answer: a,
        });
      else
        onSubmit({
          kind: "faq",
          mode: "edit",
          id: modal.id,
          categoryId,
          question: q,
          answer: a,
        });
    }
    onClose();
  };

  return (
    <div
      className="faqs-modal-backdrop"
      role="presentation"
      onClick={onClose}
    >
      <div
        className="faqs-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="faqs-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="faqs-modal__head">
          <h2 id="faqs-modal-title" className="faqs-modal__title">
            {heading}
          </h2>
          <button
            type="button"
            className="faqs-icon-btn"
            onClick={onClose}
            aria-label="Close"
          >
            <FiX />
          </button>
        </div>
        <form className="faqs-modal__form" onSubmit={handleSubmit}>
          {modal.kind === "category" ? (
            <label className="faqs-field">
              <span className="faqs-field__label">Title</span>
              <input
                className="faqs-field__input"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. General questions"
                autoFocus
              />
            </label>
          ) : (
            <>
              <label className="faqs-field">
                <span className="faqs-field__label">Category</span>
                <select
                  className="faqs-field__input"
                  value={categoryId}
                  onChange={(e) => setCategoryId(e.target.value)}
                >
                  {categories.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.title}
                    </option>
                  ))}
                </select>
              </label>
              <label className="faqs-field">
                <span className="faqs-field__label">Question</span>
                <input
                  className="faqs-field__input"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="Question"
                  autoFocus={modal.mode === "create"}
                />
              </label>
              <label className="faqs-field">
                <span className="faqs-field__label">Answer</span>
                <textarea
                  className="faqs-field__textarea"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  placeholder="Answer shown when expanded"
                  rows={5}
                />
              </label>
            </>
          )}
          <div className="faqs-modal__foot">
            <button type="button" className="faqs-btn faqs-btn--outline" onClick={onClose}>
              Cancel
            </button>
            <button
              type="submit"
              className="faqs-btn faqs-btn--primary"
              disabled={modal.kind === "faq" && categories.length === 0}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function DeleteDialog({ pending, onCancel, onConfirm }) {
  if (!pending) return null;
  return (
    <div
      className="faqs-modal-backdrop"
      role="presentation"
      onClick={onCancel}
    >
      <div
        className="faqs-modal faqs-modal--sm"
        role="dialog"
        aria-modal="true"
        aria-labelledby="faqs-del-title"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 id="faqs-del-title" className="faqs-modal__title">
          Delete {pending.type === "category" ? "category" : "FAQ"}?
        </h2>
        <p className="faqs-modal__text">
          {pending.type === "category"
            ? `This will remove “${pending.label}” and all FAQs inside it.`
            : `Remove: “${pending.label}”`}
        </p>
        <div className="faqs-modal__foot">
          <button type="button" className="faqs-btn faqs-btn--outline" onClick={onCancel}>
            Cancel
          </button>
          <button type="button" className="faqs-btn faqs-btn--danger" onClick={onConfirm}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

function FAQs() {
  const [categories, setCategories] = useState(() =>
    INITIAL_CATEGORIES.map((c) => ({
      ...c,
      items: c.items.map((i) => ({ ...i })),
    }))
  );
  const [toast, setToast] = useState(null);
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [openId, setOpenId] = useState(null);
  const [modal, setModal] = useState(null);
  const [pendingDelete, setPendingDelete] = useState(null);

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2800);
  };

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    let cats = categories.map((c) => ({ ...c, items: [...c.items] }));

    if (categoryFilter !== "all") {
      cats = cats.filter((c) => c.id === categoryFilter);
    }

    if (q) {
      cats = cats
        .map((c) => ({
          ...c,
          items: c.items.filter(
            (it) =>
              it.question.toLowerCase().includes(q) ||
              it.answer.toLowerCase().includes(q)
          ),
        }))
        .filter((c) => c.items.length > 0);
    }

    return cats;
  }, [categories, categoryFilter, search]);

  const applyModalSave = (payload) => {
    if (payload.kind === "category") {
      if (payload.mode === "create") {
        const id = uid();
        setCategories((prev) => [
          ...prev,
          {
            id,
            title: payload.title,
            items: [
              {
                id: uid(),
                question: "New question (edit me)",
                answer: "",
              },
            ],
          },
        ]);
        showToast("Category added (local preview)");
      } else {
        setCategories((prev) =>
          prev.map((c) =>
            c.id === payload.id ? { ...c, title: payload.title } : c
          )
        );
        showToast("Category updated (local preview)");
      }
    } else if (payload.mode === "create") {
      setCategories((prev) =>
        prev.map((c) =>
          c.id === payload.categoryId
            ? {
                ...c,
                items: [
                  ...c.items,
                  {
                    id: uid(),
                    question: payload.question,
                    answer: payload.answer,
                  },
                ],
              }
            : c
        )
      );
      showToast("FAQ added (local preview)");
    } else {
      setCategories((prev) => {
        let moving = null;
        const stripped = prev.map((c) => ({
          ...c,
          items: c.items.filter((it) => {
            if (it.id === payload.id) {
              moving = {
                ...it,
                question: payload.question,
                answer: payload.answer,
              };
              return false;
            }
            return true;
          }),
        }));
        if (!moving) return prev;
        return stripped.map((c) =>
          c.id === payload.categoryId
            ? { ...c, items: [...c.items, moving] }
            : c
        );
      });
      showToast("FAQ updated (local preview)");
    }
  };

  const confirmDelete = () => {
    if (!pendingDelete) return;
    if (pendingDelete.type === "category") {
      setCategories((prev) => prev.filter((c) => c.id !== pendingDelete.id));
      if (categoryFilter === pendingDelete.id) setCategoryFilter("all");
      showToast("Category removed (local preview)");
    } else {
      setCategories((prev) =>
        prev.map((c) => ({
          ...c,
          items: c.items.filter((it) => it.id !== pendingDelete.id),
        }))
      );
      showToast("FAQ removed (local preview)");
    }
    setOpenId(null);
    setPendingDelete(null);
  };

  const toggleFaq = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <>
      <SEO
        title="FAQs management"
        description="Edit categories and frequently asked questions for Tilion — the kids social media app with parent and child dashboards and web advertising support."
      />
      <Sidebar />
      <div className="faqs-layout">
        <TopBar searchValue={search} onSearchChange={setSearch} />

        <main className="faqs-main">
          {toast && (
            <div className="faqs-banner faqs-banner--ok" role="status">
              {toast}
            </div>
          )}

          <div className="faqs-page-head">
            <div>
              <h1 className="faqs-title">FAQs Management</h1>
              <p className="faqs-subtitle">
                Manage frequently asked questions and categories
              </p>
            </div>
            <button
              type="button"
              className="faqs-btn faqs-btn--primary"
              onClick={() => showToast("Preview only — changes stay in this session")}
            >
              <FiSave aria-hidden />
              Publish Changes
            </button>
          </div>

          <section className="faqs-toolbar">
            <label className="faqs-filter">
              <span className="faqs-filter__label">Filter by Category:</span>
              <select
                className="faqs-select"
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
              >
                <option value="all">All Categories</option>
                {categories.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.title}
                  </option>
                ))}
              </select>
            </label>
            <div className="faqs-toolbar__actions">
              <button
                type="button"
                className="faqs-btn faqs-btn--outline"
                onClick={() => setModal({ kind: "category", mode: "create" })}
              >
                <FiPlus aria-hidden />
                Add Category
              </button>
              <button
                type="button"
                className="faqs-btn faqs-btn--primary"
                disabled={categories.length === 0}
                onClick={() =>
                  setModal({
                    kind: "faq",
                    mode: "create",
                    categoryId: categories[0]?.id,
                  })
                }
              >
                <FiPlus aria-hidden />
                Add FAQ
              </button>
            </div>
          </section>

          {filtered.map((cat, idx) => (
            <article
              key={cat.id}
              className="faqs-category"
              style={{ animationDelay: `${0.06 + idx * 0.05}s` }}
            >
              <div className="faqs-category__head">
                <h2 className="faqs-category__title">{cat.title}</h2>
                <div className="faqs-category__meta">
                  <span className="faqs-count">
                    {cat.items.length} question{cat.items.length === 1 ? "" : "s"}
                  </span>
                  <button
                    type="button"
                    className="faqs-icon-btn faqs-icon-btn--blue"
                    aria-label={`Edit ${cat.title}`}
                    onClick={() =>
                      setModal({
                        kind: "category",
                        mode: "edit",
                        id: cat.id,
                        title: cat.title,
                      })
                    }
                  >
                    <FiEdit2 />
                  </button>
                  <button
                    type="button"
                    className="faqs-icon-btn faqs-icon-btn--red"
                    aria-label={`Delete ${cat.title}`}
                    onClick={() =>
                      setPendingDelete({
                        type: "category",
                        id: cat.id,
                        label: cat.title,
                      })
                    }
                  >
                    <FiTrash2 />
                  </button>
                </div>
              </div>

              <ul className="faqs-list">
                {cat.items.map((item) => {
                  const isOpen = openId === item.id;
                  return (
                    <li key={item.id} className="faqs-item">
                      <span className="faqs-drag" aria-hidden title="Reorder" />
                      <div className="faqs-item__body">
                        <p className="faqs-item__q">{item.question}</p>
                        <div
                          id={`faq-answer-${item.id}`}
                          role="region"
                          aria-labelledby={`faq-trigger-${item.id}`}
                          className={`faqs-item__answer ${isOpen ? "is-open" : ""}`}
                          hidden={!isOpen}
                        >
                          <p>{item.answer}</p>
                        </div>
                      </div>
                      <div className="faqs-item__actions">
                        <button
                          type="button"
                          className={`faqs-chevron ${isOpen ? "is-open" : ""}`}
                          onClick={() => toggleFaq(item.id)}
                          aria-expanded={isOpen}
                          aria-controls={`faq-answer-${item.id}`}
                          id={`faq-trigger-${item.id}`}
                        >
                          <FiChevronDown aria-hidden />
                        </button>
                        <button
                          type="button"
                          className="faqs-icon-btn faqs-icon-btn--blue"
                          aria-label="Edit question"
                          onClick={() =>
                            setModal({
                              kind: "faq",
                              mode: "edit",
                              id: item.id,
                              categoryId: cat.id,
                              question: item.question,
                              answer: item.answer,
                            })
                          }
                        >
                          <FiEdit2 />
                        </button>
                        <button
                          type="button"
                          className="faqs-icon-btn faqs-icon-btn--red"
                          aria-label="Delete question"
                          onClick={() =>
                            setPendingDelete({
                              type: "faq",
                              id: item.id,
                              label: item.question,
                            })
                          }
                        >
                          <FiTrash2 />
                        </button>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </article>
          ))}

          {filtered.length === 0 && (
            <p className="faqs-empty">No questions match your filters.</p>
          )}

          <CrudModal
            modal={modal}
            categories={categories}
            onClose={() => setModal(null)}
            onSubmit={applyModalSave}
          />

          <DeleteDialog
            pending={pendingDelete}
            onCancel={() => setPendingDelete(null)}
            onConfirm={confirmDelete}
          />
        </main>
      </div>
    </>
  );
}

export default FAQs;
