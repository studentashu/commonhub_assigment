import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="page-container">
      <h1 className="title">Empowering Communities, Celebrating Diversity</h1>
      <p className="subtitle">
        Our mission is to unite people of different faiths and cultures to
        foster understanding, compassion, and growth.
      </p>

      <section className="features-section">
        <h2>What Makes Us Different</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>🌍 Global Outreach</h3>
            <p>Impacting communities worldwide by fostering unity.</p>
          </div>
          <div className="feature-card">
            <h3>🧩 Diverse Initiatives</h3>
            <p>Bringing together different cultures through events.</p>
          </div>
          <div className="feature-card">
            <h3>🔗 Meaningful Connections</h3>
            <p>Creating lasting relationships beyond boundaries.</p>
          </div>
          <div className="feature-card">
            <h3>📚 Education & Awareness</h3>
            <p>Promoting knowledge, empathy, and inclusivity.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
