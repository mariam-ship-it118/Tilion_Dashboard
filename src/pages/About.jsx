import React from "react";
import { FiEdit2, FiPlus, FiTrash2 } from "react-icons/fi";

const FEATURES = [
  {
    id: "1",
    icon: "💬",
    title: "Chat with Friends",
    desc: "Message your friends through our safe and fun messaging platform.",
  },
  {
    id: "2",
    icon: "⭐",
    title: "Collect Stickers",
    desc: "You can collect fun and colorful stickers.",
  },
  {
    id: "3",
    icon: "🎯",
    title: "Fun Challenges",
    desc: "Complete fun challenges and show your talents.",
  },
  {
    id: "4",
    icon: "🎨",
    title: "Create & Share",
    desc: "Enjoy creating and sharing your creations.",
  },
];

function About() {
  return (
    <section className="about-card">
      <div className="about-card__head">
        <h2 className="about-card__title">Feature Cards</h2>
        <button type="button" className="about-btn">
          <FiPlus aria-hidden />
          Add Feature
        </button>
      </div>
      <div className="about-feature-grid">
        {FEATURES.map((f) => (
          <article key={f.id} className="about-feature">
            <div className="about-feature__icon" aria-hidden>
              {f.icon}
            </div>
            <div className="about-feature__body">
              <h3 className="about-feature__name">{f.title}</h3>
              <p className="about-feature__desc">{f.desc}</p>
            </div>
            <div className="about-icon-actions">
              <button
                type="button"
                className="about-icon-btn about-icon-btn--edit"
                aria-label={`Edit ${f.title}`}
              >
                <FiEdit2 />
              </button>
              <button
                type="button"
                className="about-icon-btn about-icon-btn--del"
                aria-label={`Delete ${f.title}`}
              >
                <FiTrash2 />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default About;
