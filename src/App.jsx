import { useState } from "react";
import LoginPage from "./components/LoginPage";
import ProfileSelector from "./components/ProfileSelector";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MovieRow from "./components/MovieRow";
import MovieDetailPanel from "./components/MovieDetailPanel";
import { MOVIES, CATEGORIES, HERO_MOVIE_ID } from "./data/mockMovies";
import "./App.css";

/**
 * This Netflix clone intentionally excludes:
 * 1. Household verification – no location/account-sharing prompts.
 * 2. Full-screen modals – movie details open in a compact side panel.
 */

// Map movie IDs → movie objects
const movieById = Object.fromEntries(MOVIES.map((m) => [m.id, m]));
const heroMovie = movieById[HERO_MOVIE_ID];

export default function App() {
  // view: "login" | "profiles" | "home"
  const [view, setView] = useState("login");
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleLogin = () => setView("profiles");
  const handleProfileSelect = () => setView("home");
  const handleMovieSelect = (movie) => setSelectedMovie(movie);
  const handleClosePanel = () => setSelectedMovie(null);

  if (view === "login") {
    return <LoginPage onLogin={handleLogin} />;
  }

  if (view === "profiles") {
    return <ProfileSelector onProfileSelect={handleProfileSelect} />;
  }

  return (
    <div className="app">
      <Navbar onLogoClick={() => setView("profiles")} />
      <main>
        <Hero movie={heroMovie} onMoreInfo={handleMovieSelect} />
        <div className="rows">
          {CATEGORIES.map((category) => {
            const movies = category.movieIds
              .map((id) => movieById[id])
              .filter(Boolean);
            return (
              <MovieRow
                key={category.id}
                title={category.title}
                movies={movies}
                onMovieSelect={handleMovieSelect}
              />
            );
          })}
        </div>
      </main>

      {/* Compact side-panel — NOT a full-screen modal */}
      {selectedMovie && (
        <MovieDetailPanel movie={selectedMovie} onClose={handleClosePanel} />
      )}
    </div>
  );
}
