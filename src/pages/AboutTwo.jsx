import React from "react";
import { FiEdit2, FiPlus, FiTrash2 } from "react-icons/fi";

const ITEMS = [
  {
    id: "1",
    title: "Full Parental Control",
    desc: "Monitor and control what your child sees and who they interact with.",
  },
  {
    id: "2",
    title: "Strict Age Verification",
    desc: "We ensure all users are verified by their parents and age-appropriate.",
  },
  {
    id: "3",
    title: "24/7 Moderation Team",
    desc: "Our team works around the clock to keep the platform safe and positive.",
  },
  {
    id: "4",
    title: "Kids account item contents only",
    desc: "Only kids can see each other's content and interact safely.",
  },
  {
    id: "5",
    title: "No Personal Information",
    desc: "We never ask for or store personal identifying information.",
  },
  {
    id: "6",
    title: "Instant Reporting",
    desc: "Easy one-tap reporting if anything feels wrong (max 48hrs response).",
  },
];

function AboutTwo() {
  return (
    <section className="about-card">
      <div className="about-card__head">
        <h2 className="about-card__title">Parent Safety Features</h2>
        <button type="button" className="about-btn">
          <FiPlus aria-hidden />
          Add Feature
        </button>
      </div>
      <ul className="about-list">
        {ITEMS.map((item) => (
          <li key={item.id} className="about-list__item">
            <span className="about-list__check" aria-hidden>
              ✓
            </span>
            <div className="about-list__text">
              <h3 className="about-list__title">{item.title}</h3>
              <p className="about-list__desc">{item.desc}</p>
            </div>
            <div className="about-icon-actions">
              <button
                type="button"
                className="about-icon-btn about-icon-btn--edit"
                aria-label={`Edit ${item.title}`}
              >
                <FiEdit2 />
              </button>
              <button
                type="button"
                className="about-icon-btn about-icon-btn--del"
                aria-label={`Delete ${item.title}`}
              >
                <FiTrash2 />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default AboutTwo;
