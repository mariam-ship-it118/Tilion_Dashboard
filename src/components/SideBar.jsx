// import React, { useState, useEffect } from 'react';
// import './SideBar.css';
// import Logo from "../assets/logo.svg"

// const SideBar = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     const openNav = () => {
//         setIsOpen(true);
//         document.body.style.overflow = "hidden";
//     };

//     const closeNav = () => {
//         setIsOpen(false);
//         document.body.style.overflow = "";
//     };

//     useEffect(() => {
//         const handleResize = () => {
//             if (window.innerWidth > 860) {
//                 closeNav();
//             }
//         };

//         window.addEventListener("resize", handleResize);
//         return () => window.removeEventListener("resize", handleResize);
//     }, []);

//     return ( <>
    
//      <nav className={`sidebar ${isOpen ? 'is-open' : ''}`}>
//             <label htmlFor="sidebar-toggle" className="toggle-label" title="Toggle Menu">
//                 <span>◀</span>
//             </label>

//             <div className="logo-container">
//                 <span className="logo-text"><img src={Logo} alt="logo"/></span>
//             </div>

//             <ul className="nav-menu">
//                 <li className="nav-item">
//                     <a href="#" className="nav-link">
//                         <span className="nav-icon"><img src="./Assets/dash-icon.svg" alt=""/></span>
//                         <span className="nav-text">My Dashboard</span>
//                     </a>
//                 </li>
//                 <li className="nav-item">
//                     <a href="users.html" className="nav-link active">
//                         <span className="nav-icon"><img src="./Assets/users.svg" alt="best social media app for kids"/></span>
//                         <span className="nav-text">Users</span>
//                     </a>
//                 </li>
//                 <li className="nav-item">
//                     <a href="#" className="nav-link">
//                         <span className="nav-icon"><img src="./Assets/users-icon.svg" alt=""/></span>
//                         <span className="nav-text">Payement</span>
//                     </a>
//                 </li>
//                 <li className="nav-item">
//                     <a href="#" className="nav-link">
//                         <span className="nav-icon"><img src="./Assets/web_app-icon.svg" alt=""/></span>
//                         <span className="nav-text"> Website</span>
//                     </a>
//                 </li>
//                 <li className="nav-item">
//                     <a href="#" className="nav-link">
//                         <span className="nav-icon"><img src="./Assets/web_app-icon.svg" alt=""/></span>
//                         <span className="nav-text">My app</span>
//                     </a>
//                 </li>

//                    <li className="nav-item">
//                     <a href="#" className="nav-link">
//                         <span className="nav-icon"><img src="./Assets/settings-icon.svg" alt=""/></span>
//                         <span className="nav-text">Settings</span>
//                     </a>
//                 </li>
//             </ul>

//             <div className="user-profile">
//                 <div className="avatar">👦</div>
//                 <div className="user-info">
//                     <span className="user-name">Timmy T.</span>
//                     <span className="user-level">Level 5 Explorer</span>
//                 </div>
//             </div>
//         </nav>

//         <div className={`overlay ${isOpen ? 'is-open' : ''}`} onClick={closeNav}></div>

//         <button id="menuBtn" className="menu-btn" onClick={openNav}>☰</button>
//         <button id="sidebarClose" className="sidebar-close" onClick={closeNav} style={{display: isOpen ? 'block' : 'none'}}>✕</button>
    
//     </> );
// }
 
// export default SideBar;



import React, { useState, useEffect } from "react";
import Logo from "../assets/logo.svg";
import "./SideBar.css";
import {
  FiGrid,
  FiCalendar,
  FiUsers,
  FiCreditCard,
  FiStar,
  FiFileText,
  FiHelpCircle,
  FiSettings,
  FiBell,
  FiMenu,
  FiX,
} from "react-icons/fi";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("Users");
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navItems = [
    { name: "Dashboard", icon: <FiGrid /> },
    { name: "Events", icon: <FiCalendar /> },
    { name: "Users", icon: <FiUsers /> },
    { name: "Payments", icon: <FiCreditCard /> },
    { name: "Reviews", icon: <FiStar /> },
    { name: "About Page", icon: <FiFileText /> },
    { name: "FAQs", icon: <FiHelpCircle /> },
    { name: "Settings", icon: <FiSettings /> },
  ];

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 860) {
        setIsMobileOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Mobile Menu Button */}
      <button className="menu-btn" onClick={toggleMobileMenu}>
        {isMobileOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div className="mobile-overlay" onClick={closeMobileMenu}></div>
      )}

      <aside className={`sidebar ${isMobileOpen ? 'is-open' : ''}`}>
        {/* Close button for mobile */}
        <button className="sidebar__close" onClick={closeMobileMenu}>
          <FiX />
        </button>

        {/* Logo Section */}
        <div className="logo-container">
          <img src={Logo} alt="Tillion Logo" className="logo" />
        </div>

        {/* Navigation Links */}
        <nav className="nav-menu">
          <ul>
            {navItems.map((item) => (
              <li
                key={item.name}
                className={`nav-item ${activeItem === item.name ? "active" : ""}`}
                onClick={() => {
                  setActiveItem(item.name);
                  closeMobileMenu();
                }}
              >
                <span className="icon">{item.icon}</span>
                <span className="text">{item.name}</span>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer Help Box */}
        <div className="help-box">
          <div className="bell-icon">
            <FiBell />
          </div>
          <h4>Need Help?</h4>
          <p>Contact support for assistance</p>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;