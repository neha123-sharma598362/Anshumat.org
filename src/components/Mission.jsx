import React from "react";
import "./Mission.css";

const Mission = () => {
  return (
    <section id="mission" className="mission">
      <h2>Our Mission</h2>
      <p>
        At Anshumat Foundation, we are committed to empowering individuals 
        through knowledge, mentorship, and career development programs.
      </p>
      <div className="mission-cards">
        <div className="card">
          <h3>Education</h3>
          <p>Access to learning resources and mentorship.</p>
        </div>
        <div className="card">
          <h3>Career Growth</h3>
          <p>Helping students and professionals achieve their goals.</p>
        </div>
        <div className="card">
          <h3>Community</h3>
          <p>Building a strong community of learners and leaders.</p>
        </div>
      </div>
    </section>
  );
};

export default Mission;
