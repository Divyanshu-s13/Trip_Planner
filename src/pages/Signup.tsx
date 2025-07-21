import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.css'; // Import the CSS

const Signup = () => {
  return (
    <div className="signup-container">
      <div className="signup-card">
        <div className="signup-icon">
          <i className="user-icon">👤</i>
        </div>
        <h1 className="signup-title">Create Account</h1>
        <p className="signup-subtitle">Sign up to get started with your account</p>

        <label htmlFor="name">Full Name</label>
        <input id="name" placeholder="Enter your full name" type="text" />

        <label htmlFor="email">Email Address</label>
        <input id="email" placeholder="Enter your email" type="email" />

        <label htmlFor="password">Password</label>
        <div className="input-wrapper">
          <input id="password" placeholder="Enter your password" type="password" />
          <span className="input-icon">👁️</span>
        </div>

        <label htmlFor="con_password">Confirm Password</label>
        <div className="input-wrapper">
          <input id="con_password" placeholder="Confirm your password" type="password" />
          <span className="input-icon">👁️</span>
        </div>

        <button className="signup-button">Create Account</button>

        <p className="login-link">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
