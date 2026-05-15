import React from "react";
import { FiEdit2, FiImage, FiPlus, FiTrash2 } from "react-icons/fi";

const TEAM = [
  { id: "1", name: "Ahmed Omar", role: "UI manager" },
  { id: "2", name: "Sara Ali", role: "Product lead" },
  { id: "3", name: "Omar Hassan", role: "Engineering" },
];

function AboutFour() {
  return (
    <section className="about-card">
      <div className="about-card__head">
        <h2 className="about-card__title">Team Members</h2>
        <button type="button" className="about-btn">
          <FiPlus aria-hidden />
          Add Team Member
        </button>
      </div>
      <div className="about-team-grid">
        {TEAM.map((m) => (
          <article key={m.id} className="about-team-card">
            <div className="about-icon-actions">
              <button
                type="button"
                className="about-icon-btn about-icon-btn--edit"
                aria-label={`Edit ${m.name}`}
              >
                <FiEdit2 />
              </button>
              <button
                type="button"
                className="about-icon-btn about-icon-btn--del"
                aria-label={`Remove ${m.name}`}
              >
                <FiTrash2 />
              </button>
            </div>
            <div className="about-team-photo" aria-hidden>
              <FiImage />
            </div>
            <h3 className="about-team-name">{m.name}</h3>
            <p className="about-team-role">{m.role}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default AboutFour;
