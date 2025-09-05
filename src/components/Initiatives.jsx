import React from "react";
import "./Initiatives.css";

const Initiatives = () => {
  return (
    <section id="initiatives" className="initiatives">
      <h2>Our Initiatives</h2>
      <p className="subtitle">
        Creating impact through knowledge, mentorship, and community-driven programs.
      </p>

      <div className="initiative-grid">
        <div className="initiative-card">
          <img src="/images/Education.jpg" alt="Education" />
          <h3>Digital Education</h3>
          <p>Bringing e-learning and workshops to underprivileged students.</p>
        </div>

        <div className="initiative-card">
          <img src="/images/mentorship.png" alt="Mentorship" />
          <h3>Career Mentorship</h3>
          <p>Connecting learners with industry mentors for career guidance.</p>
        </div>

        <div className="initiative-card">
          <img src="/images/community.jpg" alt="Community" />
          <h3>Community Building</h3>
          <p>Strengthening collaboration through events and volunteering.</p>
        </div>
      </div>
    </section>
  );
};

export default Initiatives;
