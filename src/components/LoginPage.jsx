import { useState } from "react";
import "./LoginPage.css";

export default function LoginPage({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please enter your email and password.");
      return;
    }
    setError("");
    onLogin({ email });
  };

  return (
    <div className="login-page">
      <div className="login-bg" aria-hidden="true" />
      <header className="login-header">
        <span className="login-logo">NETFLIX</span>
      </header>
      <main className="login-main">
        <form className="login-form" onSubmit={handleSubmit} noValidate>
          <h1 className="login-title">Sign In</h1>
          {error && (
            <p className="login-error" role="alert">
              {error}
            </p>
          )}
          <label className="login-label" htmlFor="email">
            Email or phone number
          </label>
          <input
            id="email"
            className="login-input"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label className="login-label" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            className="login-input"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="login-btn" type="submit">
            Sign In
          </button>
          <div className="login-footer-links">
            <a href="#">Forgot password?</a>
            <span>
              New to Netflix? <a href="#">Sign up now</a>
            </span>
          </div>
        </form>
      </main>
    </div>
  );
}
