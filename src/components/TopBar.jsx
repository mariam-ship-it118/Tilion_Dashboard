import React from "react";
import { FiBell, FiSearch } from "react-icons/fi";
import "./TopBar.css";

/**
 * Sticky white top bar: search, notifications, user block.
 * Fully self-contained styles in TopBar.css.
 */
function TopBar({
  searchValue,
  onSearchChange,
  searchPlaceholder = "Search events, users...",
  userName = "Admin User",
  userEmail = "admin@bonding.com",
  userInitials = "AD",
  onNotifyClick,
  className = "",
}) {
  return (
    <header className={`topbar ${className}`.trim()}>
      <div className="topbar__search">
        <FiSearch className="topbar__search-icon" aria-hidden />
        <input
          type="search"
          placeholder={searchPlaceholder}
          value={searchValue}
          onChange={(e) => onSearchChange?.(e.target.value)}
          aria-label="Search"
        />
      </div>
      <div className="topbar__right">
        <button
          type="button"
          className="topbar__icon-btn"
          aria-label="Notifications"
          onClick={onNotifyClick}
        >
          <FiBell />
        </button>
        <div className="topbar__user">
          <span className="topbar__avatar" aria-hidden>
            {userInitials}
          </span>
          <div className="topbar__user-text">
            <span className="topbar__user-name">{userName}</span>
            <span className="topbar__user-email">{userEmail}</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default TopBar;
