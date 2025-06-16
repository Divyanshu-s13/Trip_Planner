import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Questionnaire = () => {
  const [formData, setFormData] = useState({
    destination: '',
    days: '',
    budget: '',
    companions: ''
  });

  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://api.first.org/data/v1/countries')
      .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
      })
      .then(result => {
        const countryList = Object.values(result.data).map(country => country.country);
        setCountries(countryList.sort());
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching countries:', err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleGenerate = () => {
    const { destination, days, budget, companions } = formData;

    // Navigate to dynamic route with formData in state
    navigate(`/itinerary/${destination}`, {
      state: { tripData: { destination, days, budget, companions } }
    });
  };

  return (
    <div className="questionnaire-container">
      <div className="questionnaire-header">
        <h1>Tell us your travel preferences 🌤️</h1>
        <p className="subtitle">
          Just provide some basic information, and our trip planner will generate a customized itinerary based on your preferences.
        </p>
      </div>

      <div className="form-section">
        <div className="form-group">
          <label>What is destination of choice?</label>
          <select
            value={formData.destination}
            onChange={(e) => handleInputChange('destination', e.target.value)}
            className="destination-select"
            disabled={loading}
          >
            <option value="">Select...</option>
            {countries.map((country, index) => (
              <option key={index} value={country}>
                {country}
              </option>
            ))}
          </select>
          {loading && <p className="loading-text">Loading countries...</p>}
          {error && <p className="error-text">Error loading countries: {error}</p>}
        </div>

        <div className="form-group">
          <label>How many days are you planning your trip?</label>
          <input
            type="number"
            placeholder="Ex. 3"
            value={formData.days}
            onChange={(e) => handleInputChange('days', e.target.value)}
            className="days-input"
            min="1"
          />
        </div>

        <div className="form-group">
          <label>What is Your Budget?</label>
          <div className="budget-options">
            {['clear', 'moderate', 'luxury'].map(option => (
              <button
                key={option}
                type="button"
                className={`budget-card ${formData.budget === option ? 'active' : ''}`}
                onClick={() => handleInputChange('budget', option)}
              >
                <h4>{option.charAt(0).toUpperCase() + option.slice(1)}</h4>
                <p>{option === 'clear' ? 'Stay conscious of costs' : option === 'moderate' ? 'Keep cost on the average side' : "Don't worry about cost"}</p>
              </button>
            ))}
          </div>
        </div>

        <div className="form-group">
          <label>Who do you plan on traveling with on your next adventure?</label>
          <div className="companion-options">
            {['Solo', 'Couple', 'Family', 'Friends'].map(option => (
              <button
                type="button"
                key={option}
                className={`companion-card ${formData.companions === option.toLowerCase() ? 'active' : ''}`}
                onClick={() => handleInputChange('companions', option.toLowerCase())}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div className="form-actions">
          <button
            className="submit-btn"
            onClick={handleGenerate}
            disabled={!formData.destination || !formData.days || !formData.budget || !formData.companions}
          >
            Generate My Itinerary
          </button>
          <Link to="/" className="back-link">← Back to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default Questionnaire;
