import "./MovieCard.css";

export default function MovieCard({ movie, onSelect }) {
  return (
    <button
      className="movie-card"
      onClick={() => onSelect(movie)}
      aria-label={`View details for ${movie.title}`}
    >
      <img
        src={movie.thumbnail}
        alt={movie.title}
        loading="lazy"
        className="movie-card-img"
      />
      <div className="movie-card-overlay">
        <span className="movie-card-title">{movie.title}</span>
        <div className="movie-card-meta">
          <span className="movie-card-score">⭐ {movie.score}</span>
          <span className="movie-card-year">{movie.year}</span>
        </div>
        <div className="movie-card-genres">
          {movie.genre.slice(0, 2).map((g) => (
            <span key={g} className="genre-tag">
              {g}
            </span>
          ))}
        </div>
      </div>
    </button>
  );
}
