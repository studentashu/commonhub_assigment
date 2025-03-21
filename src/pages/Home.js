import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <header className="hero-section">
        <h1 className="title">Welcome to CommunionHub</h1>
        <p className="subtitle">
          Connecting communities through faith, events, and shared experiences.
        </p>
        <Link to="/events" className="cta-button">
          Explore Events
        </Link>
      </header>

      {/* About Section */}
      <section className="about-section">
        <h2>About CommunionHub</h2>
        <p>
          CommunionHub is a platform that unites people by offering **meaningful community-driven events**. 
          Whether you are looking for **spiritual gatherings, charity initiatives, or faith-based activities**, 
          CommunionHub makes it easy to connect with like-minded individuals.
        </p>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Why Join CommunionHub?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>🌍 Discover Events</h3>
            <p>Find and join community-driven events near you.</p>
          </div>
          <div className="feature-card">
            <h3>🤝 Connect & Grow</h3>
            <p>Build lasting relationships within your faith community.</p>
          </div>
          <div className="feature-card">
            <h3>🎉 Host Your Own</h3>
            <p>Create and manage your own events effortlessly.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
