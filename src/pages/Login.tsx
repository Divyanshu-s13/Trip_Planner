import React, { useState, FormEvent, ChangeEvent, FocusEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash, FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import { useAuth } from '../AuthContext';
import './Login.css';

interface FormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: ''
  });
  const [focusedField, setFocusedField] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
    // Clear errors when user starts typing
    if (error) setError('');
  };

  const handleFocus = (e: FocusEvent<HTMLInputElement>): void => {
    setFocusedField(e.target.id);
  };

  const handleBlur = (): void => {
    setFocusedField('');
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    
    if (!formData.email || !formData.password) {
      setError('Please fill in all fields');
      return;
    }

    setLoading(true);
    setError('');

    const { data, error } = await signIn(formData.email, formData.password);

    if (error) {
      setError(error.message);
    } else {
      // Redirect to dashboard or home page
      navigate('/trip-planner');
    }

    setLoading(false);
  };

  const togglePasswordVisibility = (): void => setShowPassword(!showPassword);

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <div className="login-header">
          <div className="login-icon">
            <FaUser className="user-icon" />
          </div>
          <h2 className="login-title">Welcome Back</h2>
          <p className="login-subtitle">Sign in to your account to continue</p>
        </div>

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        <form className="login-form" onSubmit={handleSubmit}>
          <div className={`input-group ${focusedField === 'email' ? 'focused' : ''} ${formData.email ? 'filled' : ''}`}>
            <FaEnvelope className="input-icon-left" />
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              required
            />
            <label htmlFor="email">Email Address</label>
            <div className="input-border"></div>
          </div>

          <div className={`input-group ${focusedField === 'password' ? 'focused' : ''} ${formData.password ? 'filled' : ''}`}>
            <FaLock className="input-icon-left" />
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              value={formData.password}
              onChange={handleInputChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              required
            />
            <label htmlFor="password">Password</label>
            <button
              type="button"
              className="password-toggle"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
            <div className="input-border"></div>
          </div>

          <button 
            type="submit" 
            className={`login-btn ${loading ? 'loading' : ''}`}
            disabled={loading}
          >
            <span>{loading ? 'Signing In...' : 'Sign In'}</span>
            <div className="button-ripple"></div>
          </button>
        </form>

        <p className="signup-text">
          Don't have an account? 
          <Link to="/signup" className="signup-link">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
