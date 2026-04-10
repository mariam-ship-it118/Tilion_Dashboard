import React, { useState } from "react";
import "./FAQs.css";
import Sidebar from "../components/SideBar";

function FAQs() {
  const [faqPopup, setFaqPopup] = useState(false);
  const [catPopup, setCatPopup] = useState(false);

  const data = [
    "What is AR?",
    "Is AR bad for kids?",
    "What is AR?",
    "Is AR bad for kids?",
  ];

  return ( <>
  <Sidebar />
 
    <div className="container">

      <div className="top">
        <div>
          <h2>FAQs Management</h2>
          <p>Manage frequently asked questions and categories</p>
        </div>

        <button className="publish">Publish Changes</button>
      </div>

      <div className="actions">
        <select className="select">
          <option>All Categories</option>
        </select>

        <div>
          <button onClick={() => setCatPopup(true)}>+ Add Category</button>
          <button className="main-btn" onClick={() => setFaqPopup(true)}>
            + Add FAQ
          </button>
        </div>
      </div>

      <div className="box">
        <div className="box-head">
          <h4>General questions</h4>
          <span>4 questions</span>
        </div>

        {data.map((item, i) => (
          <div className="item" key={i}>
            <p>{item}</p>
            <div>
              <span>✏️</span>
              <span>🗑️</span>
            </div>
          </div>
        ))}
      </div>

      {/* FAQ POPUP */}
      {faqPopup && (
        <div className="overlay">
          <div className="popup">
            <div className="popup-top">
              <h3>Add New FAQ</h3>
              <span onClick={() => setFaqPopup(false)}>x</span>
            </div>

            <p>Create a new question and answer</p>

            <select className="input">
              <option>Select category</option>
            </select>

            <input className="input" placeholder="Enter question" />
            <textarea className="input" placeholder="Enter answer"></textarea>

            <button className="main-btn">Add FAQ</button>
          </div>
        </div>
      )}

      {/* CATEGORY POPUP */}
      {catPopup && (
        <div className="overlay">
          <div className="popup">
            <div className="popup-top">
              <h3>Add New Category</h3>
              <span onClick={() => setCatPopup(false)}>x</span>
            </div>

            <p>Create a category</p>

            <input className="input" placeholder="Category name" />

            <button className="main-btn">Add Category</button>
          </div>
        </div>
      )}
    </div>
     </>
  );
}

export default FAQs;