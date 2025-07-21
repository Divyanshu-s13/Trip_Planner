import React from 'react';
import { Link } from 'react-router-dom';
import './high.css'; // Make sure it includes the updated styles

const Header = () => {
  return (
    <section className="hero-section">
      <p className="hero-announcement">
        Discover Your Next Adventure with AI:{' '}
        <strong>Personalized Itineraries at Your Fingertips</strong>
      </p>

      <h1>Your personal trip planner and travel curator</h1>

      <h2>
        Creating custom itineraries tailored to your interests and budget — faster than ever before.
      </h2>

      <Link to="/trip-planner" className="get-started-btn">
        Get Started, It's Free
      </Link>

      <img src="src/photos/a11.png" alt="Travel" />
    </section>
  );
};

export default Header;
