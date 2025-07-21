import React from 'react';
import { Link } from 'react-router-dom';
import './high.css';

const Header: React.FC = () => {
  return (
    <div className="body">
      <h1>
        <span>Discover Your Next Adventure with AI:</span> Personalized Itineraries at Your Fingertips
      </h1>
      <h2>
        Your personal trip planner and travel curator, creating custom itineraries tailored to your interests and budget.
      </h2>
      <Link to="/questionnaire" className="get-started-btn">
        Get Started, It's Free
      </Link>
      <img src="src/photos/a11.png" alt="Travel" />
    </div>
  );
};

export default Header;
