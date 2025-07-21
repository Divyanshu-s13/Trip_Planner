import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

const Login = () => {
  return (
    <div className="login-wrapper">
      <div className="login-card">
        <div className="login-icon">👤</div>

        <h2>Welcome Back</h2>
        <p className="subtitle">Sign in to your account to continue</p>

        <label htmlFor="email">Email Address</label>
        <input id="email" type="email" placeholder="Enter your email" />

        <label htmlFor="password">Password</label>
        <div className="password-wrapper">
          <input id="password" type="password" placeholder="Enter your password" />
          <span className="eye-icon">👁️</span>
        </div>

        <div className="login-options">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <a href="#">Forgot password?</a>
        </div>

        <button className="login-btn">Sign In</button>

        <p className="signup-text">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>

        <div className="divider">Or continue with</div>

        <div className="social-login">
          <button className="social-btn">G Google</button>
          <button className="social-btn">T Twitter</button>
        </div>
      </div>
    </div>
  )
}

export default Login
