import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';


const Itinerary = () => {
  const { country } = useParams();
  const [itineraryData, setItineraryData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItinerary = async () => {
      try {
        const response = await fetch(`https://api.opentripmap.com/0.1/en/places/geoname?name=${country}&apikey=YOUR_API_KEY`);
        const data = await response.json();
        setItineraryData(data);
      } catch (error) {
        console.error('Failed to fetch itinerary:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchItinerary();
  }, [country]);

  if (loading) return <p>Loading itinerary for {country}...</p>;
  if (!itineraryData) return <p>No itinerary found for {country}.</p>;

  return (
    <div className="itinerary-container">
      <div className="itinerary-header">
        <h1>Your {itineraryData.country} Adventure ✈️</h1>
        <div className="trip-meta">
          <span className="meta-item">🗓️ {itineraryData.duration}</span>
          <span className="meta-item">💰 {itineraryData.budget}</span>
          <span className="meta-item">👫 {itineraryData.companions}</span>
        </div>
      </div>

      <div className="timeline">
        {itineraryData.days.map((day, index) => (
          <div key={index} className="day-card">
            <div className="day-header">
              <h2>Day {day.day}</h2>
              <span className="date">{day.date}</span>
            </div>
            <div className="activities">
              {day.activities.map((activity, idx) => (
                <div key={idx} className="activity">
                  <div className="time-badge">{activity.time}</div>
                  <p className="activity-description">{activity.description}</p>
                  <div className="timeline-connector"></div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="action-buttons">
        <button className="print-btn">🖨️ Print Itinerary</button>
        <Link to="/" className="back-btn">← Back to Planner</Link>
      </div>
    </div>
  );
};

export default Itinerary;
