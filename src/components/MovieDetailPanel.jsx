import { useEffect } from "react";
import "./MovieDetailPanel.css";

/**
 * Compact side-panel for movie details.
 * Intentionally NOT a full-screen modal — the panel slides in from the right
 * and occupies only a portion of the viewport, keeping the background visible.
 */
export default function MovieDetailPanel({ movie, onClose }) {
  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  if (!movie) return null;

  return (
    <>
      {/* Semi-transparent backdrop — NOT full-screen cover */}
      <div
        className="detail-backdrop"
        onClick={onClose}
        aria-label="Close panel"
      />
      <aside
        className="detail-panel"
        role="complementary"
        aria-label={`Details for ${movie.title}`}
      >
        <button className="detail-close" onClick={onClose} aria-label="Close">
          ✕
        </button>
        <img
          src={movie.backdrop}
          alt={movie.title}
          className="detail-backdrop-img"
        />
        <div className="detail-body">
          <h2 className="detail-title">{movie.title}</h2>
          <div className="detail-meta">
            <span className="detail-score">⭐ {movie.score}</span>
            <span>{movie.year}</span>
            <span className="detail-rating-badge">{movie.rating}</span>
          </div>
          <p className="detail-description">{movie.description}</p>
          <div className="detail-genres">
            {movie.genre.map((g) => (
              <span key={g} className="detail-genre-tag">
                {g}
              </span>
            ))}
          </div>
          <div className="detail-actions">
            <button className="btn-play-panel" aria-label={`Play ${movie.title}`}>
              ▶ Play
            </button>
            <button className="btn-add" aria-label={`Add ${movie.title} to My List`}>
              + My List
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
