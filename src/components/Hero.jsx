import "./Hero.css";

export default function Hero({ movie, onMoreInfo }) {
  if (!movie) return null;
  return (
    <div
      className="hero"
      style={{ backgroundImage: `url(${movie.backdrop})` }}
      role="banner"
    >
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1 className="hero-title">{movie.title}</h1>
        <p className="hero-description">{movie.description}</p>
        <div className="hero-meta">
          <span className="hero-score">⭐ {movie.score}</span>
          <span className="hero-year">{movie.year}</span>
          <span className="hero-rating">{movie.rating}</span>
        </div>
        <div className="hero-actions">
          <button className="btn-play" aria-label={`Play ${movie.title}`}>
            ▶ Play
          </button>
          <button
            className="btn-more-info"
            onClick={() => onMoreInfo(movie)}
            aria-label={`More info about ${movie.title}`}
          >
            ℹ More Info
          </button>
        </div>
      </div>
    </div>
  );
}
