import { useState } from "react";
import { PROFILES } from "../data/profiles";
import "./ProfileSelector.css";

export default function ProfileSelector({ onProfileSelect }) {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="profile-page">
      <h1 className="profile-heading">Who&#39;s watching?</h1>
      <div className="profile-grid">
        {PROFILES.map((profile) => (
          <button
            key={profile.id}
            className={`profile-card${hovered === profile.id ? " hovered" : ""}`}
            onClick={() => onProfileSelect(profile)}
            onMouseEnter={() => setHovered(profile.id)}
            onMouseLeave={() => setHovered(null)}
            aria-label={`Select profile ${profile.name}`}
          >
            <div
              className="profile-avatar"
              style={{ background: profile.color }}
            >
              {profile.avatar}
            </div>
            <span className="profile-name">{profile.name}</span>
          </button>
        ))}
        <button className="profile-card add-profile" aria-label="Add profile">
          <div className="profile-avatar add-avatar">＋</div>
          <span className="profile-name">Add Profile</span>
        </button>
      </div>
      <button className="manage-profiles-btn" aria-label="Manage profiles">
        Manage Profiles
      </button>
    </div>
  );
}
