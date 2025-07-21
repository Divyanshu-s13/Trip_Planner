import React, { useState } from 'react';
import { MapPin, Search, Filter, Star, DollarSign, Clock, Users, Plane } from 'lucide-react';

interface Destination {
  id: string;
  name: string;
  country: string;
  continent: string;
  image: string;
  description: string;
  highlights: string[];
  bestTime: string;
  budget: 'budget' | 'mid-range' | 'luxury';
  travelType: ('solo' | 'family' | 'couple' | 'group')[];
  rating: number;
  reviews: number;
  priceRange: string;
  duration: string;
}

const Destinations = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterContinent, setFilterContinent] = useState('all');
  const [filterBudget, setFilterBudget] = useState('all');
  const [filterTravelType, setFilterTravelType] = useState('all');

  const destinations: Destination[] = [
    {
      id: '1',
      name: 'Paris',
      country: 'France',
      continent: 'Europe',
      image: 'https://images.pexels.com/photos/161901/paris-sunset-france-monument-161901.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'The City of Light offers world-class museums, iconic landmarks, and romantic charm.',
      highlights: ['Eiffel Tower', 'Louvre Museum', 'Notre-Dame', 'Champs-Élysées'],
      bestTime: 'April-October',
      budget: 'mid-range',
      travelType: ['solo', 'couple', 'family'],
      rating: 4.8,
      reviews: 2543,
      priceRange: '$150-300/day',
      duration: '4-7 days'
    },
    {
      id: '2',
      name: 'Tokyo',
      country: 'Japan',
      continent: 'Asia',
      image: 'https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'A fascinating blend of ultra-modern technology and traditional culture.',
      highlights: ['Shibuya Crossing', 'Senso-ji Temple', 'Mount Fuji', 'Tsukiji Market'],
      bestTime: 'March-May, September-November',
      budget: 'mid-range',
      travelType: ['solo', 'couple', 'family'],
      rating: 4.9,
      reviews: 1876,
      priceRange: '$100-250/day',
      duration: '5-10 days'
    },
    {
      id: '3',
      name: 'Reykjavik',
      country: 'Iceland',
      continent: 'Europe',
      image: 'https://images.pexels.com/photos/1586298/pexels-photo-1586298.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Gateway to incredible natural wonders and the Northern Lights.',
      highlights: ['Northern Lights', 'Blue Lagoon', 'Golden Circle', 'Glaciers'],
      bestTime: 'September-March (Northern Lights), June-August (Hiking)',
      budget: 'luxury',
      travelType: ['solo', 'couple', 'group'],
      rating: 4.7,
      reviews: 987,
      priceRange: '$200-400/day',
      duration: '5-8 days'
    },
    {
      id: '4',
      name: 'Bali',
      country: 'Indonesia',
      continent: 'Asia',
      image: 'https://images.pexels.com/photos/2469122/pexels-photo-2469122.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Tropical paradise with stunning beaches, temples, and vibrant culture.',
      highlights: ['Rice Terraces', 'Beach Clubs', 'Temples', 'Volcano Hiking'],
      bestTime: 'April-October',
      budget: 'budget',
      travelType: ['solo', 'couple', 'family', 'group'],
      rating: 4.6,
      reviews: 3210,
      priceRange: '$50-150/day',
      duration: '7-14 days'
    },
    {
      id: '5',
      name: 'New York City',
      country: 'USA',
      continent: 'North America',
      image: 'https://images.pexels.com/photos/290386/pexels-photo-290386.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'The city that never sleeps, with world-famous attractions and Broadway shows.',
      highlights: ['Times Square', 'Central Park', 'Statue of Liberty', 'Broadway'],
      bestTime: 'April-June, September-November',
      budget: 'luxury',
      travelType: ['solo', 'couple', 'family', 'group'],
      rating: 4.5,
      reviews: 4567,
      priceRange: '$200-500/day',
      duration: '4-7 days'
    },
    {
      id: '6',
      name: 'Costa Rica',
      country: 'Costa Rica',
      continent: 'North America',
      image: 'https://images.pexels.com/photos/2168974/pexels-photo-2168974.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Adventure paradise with incredible biodiversity and eco-tourism.',
      highlights: ['Zip-lining', 'Wildlife Watching', 'Beaches', 'Volcanoes'],
      bestTime: 'December-April',
      budget: 'mid-range',
      travelType: ['family', 'couple', 'group'],
      rating: 4.4,
      reviews: 1543,
      priceRange: '$100-200/day',
      duration: '7-10 days'
    },
    {
      id: '7',
      name: 'Portugal',
      country: 'Portugal',
      continent: 'Europe',
      image: 'https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Charming coastal country with historic cities and beautiful architecture.',
      highlights: ['Lisbon Trams', 'Porto Wine', 'Sintra Palaces', 'Algarve Beaches'],
      bestTime: 'April-October',
      budget: 'budget',
      travelType: ['solo', 'couple', 'family'],
      rating: 4.7,
      reviews: 2109,
      priceRange: '$70-150/day',
      duration: '5-10 days'
    },
    {
      id: '8',
      name: 'New Zealand',
      country: 'New Zealand',
      continent: 'Oceania',
      image: 'https://images.pexels.com/photos/1119796/pexels-photo-1119796.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Adventure sports capital with breathtaking landscapes and friendly locals.',
      highlights: ['Queenstown', 'Milford Sound', 'Hobbiton', 'Franz Josef Glacier'],
      bestTime: 'September-April',
      budget: 'mid-range',
      travelType: ['solo', 'couple', 'group'],
      rating: 4.8,
      reviews: 1654,
      priceRange: '$120-250/day',
      duration: '10-14 days'
    }
  ];

  const continents = ['all', 'Europe', 'Asia', 'North America', 'Oceania'];
  const budgetTypes = ['all', 'budget', 'mid-range', 'luxury'];
  const travelTypes = ['all', 'solo', 'couple', 'family', 'group'];

  const filteredDestinations = destinations.filter(destination => {
    const matchesSearch = destination.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         destination.country.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesContinent = filterContinent === 'all' || destination.continent === filterContinent;
    const matchesBudget = filterBudget === 'all' || destination.budget === filterBudget;
    const matchesTravelType = filterTravelType === 'all' || destination.travelType.includes(filterTravelType as any);

    return matchesSearch && matchesContinent && matchesBudget && matchesTravelType;
  });

  const getBudgetIcon = (budget: string) => {
    switch (budget) {
      case 'budget':
        return '$';
      case 'mid-range':
        return '$$';
      case 'luxury':
        return '$$$';
      default:
        return '$';
    }
  };

  const getBudgetColor = (budget: string) => {
    switch (budget) {
      case 'budget':
        return 'text-green-600 bg-green-100';
      case 'mid-range':
        return 'text-blue-600 bg-blue-100';
      case 'luxury':
        return 'text-purple-600 bg-purple-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Discover Amazing Destinations
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore handpicked destinations around the world, perfect for every type of traveler and budget.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search destinations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Continent Filter */}
            <select
              value={filterContinent}
              onChange={(e) => setFilterContinent(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {continents.map(continent => (
                <option key={continent} value={continent}>
                  {continent === 'all' ? 'All Continents' : continent}
                </option>
              ))}
            </select>

            {/* Budget Filter */}
            <select
              value={filterBudget}
              onChange={(e) => setFilterBudget(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {budgetTypes.map(budget => (
                <option key={budget} value={budget}>
                  {budget === 'all' ? 'All Budgets' : budget.charAt(0).toUpperCase() + budget.slice(1)}
                </option>
              ))}
            </select>

            {/* Travel Type Filter */}
            <select
              value={filterTravelType}
              onChange={(e) => setFilterTravelType(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {travelTypes.map(type => (
                <option key={type} value={type}>
                  {type === 'all' ? 'All Travel Types' : type.charAt(0).toUpperCase() + type.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Found {filteredDestinations.length} destination{filteredDestinations.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredDestinations.map((destination) => (
            <div
              key={destination.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200 cursor-pointer"
            >
              <img
                src={destination.image}
                alt={destination.name}
                className="w-full h-48 object-cover"
              />
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{destination.name}</h3>
                    <p className="text-gray-600 text-sm">{destination.country}</p>
                  </div>
                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${getBudgetColor(destination.budget)}`}>
                    {getBudgetIcon(destination.budget)}
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {destination.description}
                </p>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                    <span className="font-medium">{destination.rating}</span>
                    <span className="mx-1">•</span>
                    <span>{destination.reviews} reviews</span>
                  </div>

                  <div className="flex items-center text-sm text-gray-600">
                    <DollarSign className="h-4 w-4 mr-1" />
                    <span>{destination.priceRange}</span>
                  </div>

                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{destination.duration}</span>
                  </div>

                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-1" />
                    <span>Best for: {destination.travelType.join(', ')}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 text-sm mb-2">Top Highlights:</h4>
                  <div className="flex flex-wrap gap-1">
                    {destination.highlights.slice(0, 3).map((highlight, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                      >
                        {highlight}
                      </span>
                    ))}
                    {destination.highlights.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        +{destination.highlights.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                <div className="mb-4 text-sm">
                  <span className="font-medium text-gray-900">Best time to visit:</span>
                  <span className="text-gray-600 ml-1">{destination.bestTime}</span>
                </div>

                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2">
                  <Plane className="h-4 w-4" />
                  <span>Plan Trip</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredDestinations.length === 0 && (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <MapPin className="h-16 w-16 mx-auto mb-4 text-gray-300" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No destinations found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search criteria or filters to find more destinations.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setFilterContinent('all');
                setFilterBudget('all');
                setFilterTravelType('all');
              }}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Destinations;