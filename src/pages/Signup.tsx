import React, { useState, FormEvent, ChangeEvent, FocusEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash, FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import { useAuth } from '../AuthContext';
import './Signup.css';

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Signup: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [focusedField, setFocusedField] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');

  const { signUp } = useAuth();
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

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      setError('Full name is required');
      return false;
    }
    if (!formData.email.trim()) {
      setError('Email is required');
      return false;
    }
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      return false;
    }
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setLoading(true);
    setError('');

    const { data, error } = await signUp(
      formData.email, 
      formData.password, 
      formData.name
    );

    if (error) {
      setError(error.message);
    } else {
      setSuccess('Check your email to confirm your account!');
      // Optionally redirect after successful signup
      setTimeout(() => {
        navigate('/login');
      }, 3000);
    }

    setLoading(false);
  };

  const togglePasswordVisibility = (): void => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = (): void => setShowConfirmPassword(!showConfirmPassword);

  return (
    <div className="signup-container">
      <div className="signup-card">
        <div className="signup-header">
          <div className="signup-icon">
            <FaUser className="user-icon" />
          </div>
          <h1 className="signup-title">Create Account</h1>
          <p className="signup-subtitle">Join us and start your journey today</p>
        </div>

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        {success && (
          <div className="success-message">
            {success}
          </div>
        )}

        <form className="signup-form" onSubmit={handleSubmit}>
          <div className={`input-group ${focusedField === 'name' ? 'focused' : ''} ${formData.name ? 'filled' : ''}`}>
            <FaUser className="input-icon-left" />
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              required
            />
            <label htmlFor="name">Full Name</label>
            <div className="input-border"></div>
          </div>

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

          <div className={`input-group ${focusedField === 'confirmPassword' ? 'focused' : ''} ${formData.confirmPassword ? 'filled' : ''}`}>
            <FaLock className="input-icon-left" />
            <input
              id="confirmPassword"
              type={showConfirmPassword ? 'text' : 'password'}
              value={formData.confirmPassword}
              onChange={handleInputChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              required
            />
            <label htmlFor="confirmPassword">Confirm Password</label>
            <button
              type="button"
              className="password-toggle"
              onClick={toggleConfirmPasswordVisibility}
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
            <div className="input-border"></div>
          </div>

          <button 
            type="submit" 
            className={`signup-button ${loading ? 'loading' : ''}`}
            disabled={loading}
          >
            <span>{loading ? 'Creating Account...' : 'Create Account'}</span>
            <div className="button-ripple"></div>
          </button>
        </form>

        <p className="login-link">
          Already have an account? 
          <Link to="/login" className="login-link-text">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
