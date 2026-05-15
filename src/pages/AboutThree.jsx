import React, { useState } from "react";
import { FiImage, FiSave, FiUpload } from "react-icons/fi";

function AboutThree() {
  const [description, setDescription] = useState(
    "We build safe digital spaces where children can connect, learn, and play with confidence."
  );

  return (
    <div className="about-stack">
      <section className="about-card">
        <h2 className="about-card__title" style={{ marginBottom: "1rem" }}>
          Company Image
        </h2>
        <div className="about-upload-row">
          <div className="about-upload-placeholder" aria-hidden>
            <FiImage />
          </div>
          <div className="about-upload-hint">
            <p>
              Upload a new image for the company section (recommended: 800×600px)
            </p>
            <button type="button" className="about-btn">
              <FiUpload aria-hidden />
              Upload Image
            </button>
          </div>
        </div>
      </section>

      <section className="about-card">
        <h2 className="about-card__title" style={{ marginBottom: "0.75rem" }}>
          Company Description
        </h2>
        <label className="about-label" htmlFor="company-desc">
          Description
        </label>
        <textarea
          id="company-desc"
          className="about-textarea"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div className="about-card__foot">
          <button type="button" className="about-btn">
            <FiSave aria-hidden />
            Save Changes
          </button>
        </div>
      </section>
    </div>
  );
}

export default AboutThree;
