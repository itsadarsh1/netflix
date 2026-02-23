import { useRef } from "react";
import MovieCard from "./MovieCard";
import "./MovieRow.css";

export default function MovieRow({ title, movies, onMovieSelect }) {
  const rowRef = useRef(null);

  const scroll = (dir) => {
    if (rowRef.current) {
      rowRef.current.scrollBy({ left: dir * 440, behavior: "smooth" });
    }
  };

  return (
    <section className="movie-row" aria-label={title}>
      <h2 className="movie-row-title">{title}</h2>
      <div className="movie-row-scroll-wrapper">
        <button
          className="scroll-btn scroll-left"
          onClick={() => scroll(-1)}
          aria-label={`Scroll ${title} left`}
        >
          ‹
        </button>
        <div className="movie-row-list" ref={rowRef}>
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} onSelect={onMovieSelect} />
          ))}
        </div>
        <button
          className="scroll-btn scroll-right"
          onClick={() => scroll(1)}
          aria-label={`Scroll ${title} right`}
        >
          ›
        </button>
      </div>
    </section>
  );
}
