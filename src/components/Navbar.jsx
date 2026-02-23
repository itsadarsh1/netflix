import { useState } from "react";
import "./Navbar.css";

export default function Navbar({ onLogoClick }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <button className="navbar-logo" onClick={onLogoClick} aria-label="Netflix home">
          NETFLIX
        </button>
        <ul className="navbar-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">TV Shows</a></li>
          <li><a href="#">Movies</a></li>
          <li><a href="#">New &amp; Popular</a></li>
          <li><a href="#">My List</a></li>
        </ul>
      </div>
      <div className="navbar-right">
        <div className={`search-bar${searchOpen ? " open" : ""}`}>
          {searchOpen && (
            <input
              autoFocus
              type="text"
              placeholder="Titles, people, genres"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onBlur={() => {
                if (!searchTerm) setSearchOpen(false);
              }}
              aria-label="Search"
            />
          )}
          <button
            className="icon-btn"
            onClick={() => setSearchOpen((v) => !v)}
            aria-label="Toggle search"
          >
            🔍
          </button>
        </div>
        <button className="icon-btn" aria-label="Notifications">🔔</button>
        <div className="navbar-avatar" aria-label="Account">👤</div>
      </div>
    </nav>
  );
}
