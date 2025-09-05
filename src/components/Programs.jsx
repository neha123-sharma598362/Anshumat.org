import React from "react";
import "./Programs.css";

const Programs = () => {
  return (
    <section id="programs" className="programs">
      <h2>Our Programs</h2>
      <div className="program-list">
        <div className="program">
          <h3>Mentorship</h3>
          <p>Guiding students with industry professionals.</p>
        </div>
        <div className="program">
          <h3>Workshops</h3>
          <p>Hands-on training sessions for practical learning.</p>
        </div>
        <div className="program">
          <h3>Scholarships</h3>
          <p>Financial support for talented students in need.</p>
        </div>
      </div>
    </section>
  );
};

export default Programs;
