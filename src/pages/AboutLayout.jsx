import React, { useMemo } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { FiSave } from "react-icons/fi";
import Sidebar from "../components/SideBar";
import SEO from "../components/SEO";
import "./About.css";

const TABS = [
  { to: "/about", end: true, label: "What Makes Us Awesome" },
  { to: "/about/peace-of-mind", label: "Peace of Mind for Parents" },
  { to: "/about/company", label: "About Company" },
  { to: "/about/team", label: "Our Team" },
];

const SECTION_SEO = {
  "/about": {
    title: "What Makes Us Awesome",
    description:
      "Manage Tilion feature cards for the About page — Tilion is a kids social app with parent and child dashboard interfaces and web advertising.",
  },
  "/about/peace-of-mind": {
    title: "Peace of Mind for Parents",
    description:
      "Edit parent safety messaging on Tilion’s About page for families using the parent-facing dashboard alongside the child experience.",
  },
  "/about/company": {
    title: "About Company",
    description:
      "Update Tilion company image and description — the trusted social media app for kids with dual parent and child dashboards.",
  },
  "/about/team": {
    title: "Our Team",
    description:
      "Manage Tilion team profiles shown on the About page for the kids social platform and its web presence.",
  },
};

function AboutLayout() {
  const { pathname } = useLocation();
  const seo = useMemo(
    () => SECTION_SEO[pathname] || SECTION_SEO["/about"],
    [pathname]
  );

  return (
    <>
      <SEO title={seo.title} description={seo.description} />
      <Sidebar />
      <div className="about-layout">
        <main className="about-main">
          <header className="about-page-head">
            <div>
              <h1 className="about-page-title">About Page Management</h1>
              <p className="about-page-sub">
                Manage content for the About Us page
              </p>
            </div>
            <button type="button" className="about-btn">
              <FiSave aria-hidden />
              Publish Changes
            </button>
          </header>

          <nav className="about-tabs" aria-label="About page sections">
            {TABS.map((tab) => (
              <NavLink
                key={tab.to}
                to={tab.to}
                end={tab.end ?? false}
                className={({ isActive }) =>
                  `about-tabs__link${isActive ? " active" : ""}`
                }
              >
                {tab.label}
              </NavLink>
            ))}
          </nav>

          <div className="about-content">
            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
}

export default AboutLayout;
