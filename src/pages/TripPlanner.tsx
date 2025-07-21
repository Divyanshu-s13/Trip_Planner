import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Plus, Clock, DollarSign } from 'lucide-react';

interface Activity {
  id: string;
  name: string;
  time: string;
  cost: number;
  location: string;
}

interface Day {
  date: string;
  activities: Activity[];
}

const TripPlanner = () => {
  const [tripName, setTripName] = useState('');
  const [destination, setDestination] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [travelers, setTravelers] = useState(1);
  const [travelType, setTravelType] = useState('solo');
  const [days, setDays] = useState<Day[]>([]);
  const [newActivity, setNewActivity] = useState({ name: '', time: '', cost: '', location: '' });
  const [selectedDay, setSelectedDay] = useState(0);
  const [countries, setCountries] = useState<{ code: string; name: string }[]>([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://api.first.org/data/v1/countries');
        const data = await response.json();
        const countryList = Object.entries(data.data).map(([code, country]: any) => ({
          code,
          name: country.country,
        }));
        setCountries(countryList);
      } catch (error) {
        console.error('Failed to fetch countries:', error);
      }
    };

    fetchCountries();
  }, []);

  const handleDateChange = () => {
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const dayCount = Math.ceil((end.getTime() - start.getTime()) / (1000 * 3600 * 24)) + 1;

      const newDays: Day[] = [];
      for (let i = 0; i < dayCount; i++) {
        const currentDate = new Date(start);
        currentDate.setDate(start.getDate() + i);
        newDays.push({
          date: currentDate.toDateString(),
          activities: []
        });
      }
      setDays(newDays);
    }
  };

  const addActivity = () => {
    if (newActivity.name && selectedDay < days.length) {
      const activity: Activity = {
        id: Date.now().toString(),
        name: newActivity.name,
        time: newActivity.time,
        cost: parseFloat(newActivity.cost) || 0,
        location: newActivity.location
      };

      const updatedDays = [...days];
      updatedDays[selectedDay].activities.push(activity);
      setDays(updatedDays);
      setNewActivity({ name: '', time: '', cost: '', location: '' });
    }
  };

  const getTotalCost = () => {
    return days.reduce((total, day) =>
      total + day.activities.reduce((dayTotal, activity) => dayTotal + activity.cost, 0), 0
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Trip Planner</h1>
          <p className="text-gray-600">Create your perfect itinerary day by day</p>
        </div>

        {/* Trip Setup */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Trip Details</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Trip Name</label>
              <input
                type="text"
                value={tripName}
                onChange={(e) => setTripName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., Summer Europe Adventure"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Destination</label>
              <select
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select a country</option>
                {countries.map((country) => (
                  <option key={country.code} value={country.name}>
                    {country.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Travel Type</label>
              <select
                value={travelType}
                onChange={(e) => setTravelType(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="solo">Solo Travel</option>
                <option value="family">Family Travel</option>
                <option value="couple">Couple</option>
                <option value="group">Group</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => {
                  setStartDate(e.target.value);
                  handleDateChange();
                }}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">End Date</label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => {
                  setEndDate(e.target.value);
                  handleDateChange();
                }}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Number of Travelers</label>
              <input
                type="number"
                min="1"
                value={travelers}
                onChange={(e) => setTravelers(parseInt(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {days.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Day Selection */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Days</h3>
                <div className="space-y-2">
                  {days.map((day, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedDay(index)}
                      className={`w-full text-left p-3 rounded-lg transition-colors duration-200 ${
                        selectedDay === index
                          ? 'bg-blue-100 border border-blue-300 text-blue-800'
                          : 'bg-gray-50 hover:bg-gray-100 border border-gray-200'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <Calendar className="h-4 w-4" />
                        <div>
                          <p className="font-medium">Day {index + 1}</p>
                          <p className="text-sm text-gray-600">{day.date}</p>
                          <p className="text-sm text-gray-500">{day.activities.length} activities</p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Budget Summary */}
                <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center space-x-2 mb-2">
                    <h4 className="font-semibold text-green-800">Total Budget</h4>
                  </div>
                  <p className="text-2xl font-bold text-green-700">{getTotalCost().toFixed(2)}</p>
                  <p className="text-sm text-green-600">Per person: {(getTotalCost() / travelers).toFixed(2)}</p>
                </div>
              </div>
            </div>

            {/* Day Planning */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Day {selectedDay + 1} - {days[selectedDay]?.date}
                  </h3>
                </div>

                {/* Add Activity Form */}
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Add Activity</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Activity name"
                      value={newActivity.name}
                      onChange={(e) => setNewActivity({ ...newActivity, name: e.target.value })}
                      className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      type="time"
                      value={newActivity.time}
                      onChange={(e) => setNewActivity({ ...newActivity, time: e.target.value })}
                      className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      type="text"
                      placeholder="Location"
                      value={newActivity.location}
                      onChange={(e) => setNewActivity({ ...newActivity, location: e.target.value })}
                      className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      type="number"
                      placeholder="Cost"
                      value={newActivity.cost}
                      onChange={(e) => setNewActivity({ ...newActivity, cost: e.target.value })}
                      className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <button
                    onClick={addActivity}
                    className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2"
                  >
                    <Plus className="h-4 w-4" />
                    <span>Add Activity</span>
                  </button>
                </div>

                {/* Activities List */}
                <div className="space-y-4">
                  {days[selectedDay]?.activities.map((activity) => (
                    <div
                      key={activity.id}
                      className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h5 className="font-semibold text-gray-900">{activity.name}</h5>
                          <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                            <div className="flex items-center space-x-1">
                              <Clock className="h-4 w-4" />
                              <span>{activity.time || 'No time set'}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin className="h-4 w-4" />
                              <span>{activity.location || 'No location set'}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <DollarSign className="h-4 w-4" />
                              <span>${activity.cost.toFixed(2)}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                  {days[selectedDay]?.activities.length === 0 && (
                    <div className="text-center py-8 text-gray-500">
                      <Calendar className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                      <p>No activities planned for this day yet.</p>
                      <p className="text-sm">Add your first activity above!</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {days.length === 0 && (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <Calendar className="h-16 w-16 mx-auto mb-4 text-gray-300" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Ready to Start Planning?</h3>
            <p className="text-gray-600 mb-4">
              Fill in your trip details above and select your travel dates to begin creating your itinerary.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TripPlanner;
