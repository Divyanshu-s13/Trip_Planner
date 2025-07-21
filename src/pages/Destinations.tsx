import React, { useState } from 'react';
import { MapPin, Search, Star, DollarSign, Clock, Users, Plane, Filter, X } from 'lucide-react';

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

const Destinations: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterContinent, setFilterContinent] = useState('all');
  const [filterBudget, setFilterBudget] = useState('all');
  const [filterTravelType, setFilterTravelType] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const destinations: Destination[] = [
    {
      id: '1',
      name: 'Paris',
      country: 'France',
      continent: 'Europe',
      image: 'https://images.pexels.com/photos/161901/paris-sunset-france-monument-161901.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'The City of Light offers world-class museums, iconic landmarks, and romantic charm that captivates millions of visitors.',
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
      description: 'A fascinating blend of ultra-modern technology and traditional culture, offering unforgettable experiences.',
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
      description: 'Gateway to incredible natural wonders and the mystical Northern Lights in pristine Nordic landscapes.',
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
      description: 'Tropical paradise with stunning beaches, ancient temples, and vibrant culture immersed in natural beauty.',
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
      description: 'The city that never sleeps, with world-famous attractions, Broadway shows, and endless urban adventures.',
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
      description: 'Adventure paradise with incredible biodiversity and eco-tourism opportunities in pristine rainforests.',
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
      description: 'Charming coastal country with historic cities, beautiful architecture, and world-renowned hospitality.',
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
      description: 'Adventure sports capital with breathtaking landscapes, friendly locals, and cinematic natural beauty.',
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
        return 'text-emerald-700 bg-emerald-50 border-emerald-200';
      case 'mid-range':
        return 'text-amber-700 bg-amber-50 border-amber-200';
      case 'luxury':
        return 'text-purple-700 bg-purple-50 border-purple-200';
      default:
        return 'text-gray-700 bg-gray-50 border-gray-200';
    }
  };

  const clearAllFilters = () => {
    setSearchTerm('');
    setFilterContinent('all');
    setFilterBudget('all');
    setFilterTravelType('all');
    setShowFilters(false);
  };

  return (
    <div className="min-h-screen" style={{
      background: 'linear-gradient(135deg, #A27035 0%, #B88B4A 25%, #8E4162 75%, #000000 100%)'
    }}>
      <div className="min-h-screen bg-white/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#A27035] to-[#B88B4A] mb-6 shadow-lg">
              <MapPin className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#A27035] via-[#8E4162] to-[#000000] bg-clip-text text-transparent mb-6 leading-tight">
              Discover Amazing Destinations
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore handpicked destinations around the world, carefully curated for every type of traveler and budget. Your next adventure awaits.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 p-8 mb-12">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Search Bar */}
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search destinations or countries..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#A27035] focus:ring-4 focus:ring-[#A27035]/10 transition-all duration-300 text-gray-700 bg-white/90"
                />
              </div>

              {/* Filter Toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden flex items-center justify-center px-6 py-4 bg-gradient-to-r from-[#A27035] to-[#B88B4A] text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
              >
                <Filter className="w-5 h-5 mr-2" />
                Filters
              </button>

              {/* Desktop Filters */}
              <div className="hidden lg:flex gap-4">
                <select
                  value={filterContinent}
                  onChange={(e) => setFilterContinent(e.target.value)}
                  className="px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#A27035] focus:ring-4 focus:ring-[#A27035]/10 transition-all duration-300 bg-white/90 text-gray-700"
                >
                  {continents.map(continent => (
                    <option key={continent} value={continent}>
                      {continent === 'all' ? 'All Continents' : continent}
                    </option>
                  ))}
                </select>

                <select
                  value={filterBudget}
                  onChange={(e) => setFilterBudget(e.target.value)}
                  className="px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#A27035] focus:ring-4 focus:ring-[#A27035]/10 transition-all duration-300 bg-white/90 text-gray-700"
                >
                  {budgetTypes.map(budget => (
                    <option key={budget} value={budget}>
                      {budget === 'all' ? 'All Budgets' : budget.charAt(0).toUpperCase() + budget.slice(1)}
                    </option>
                  ))}
                </select>

                <select
                  value={filterTravelType}
                  onChange={(e) => setFilterTravelType(e.target.value)}
                  className="px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#A27035] focus:ring-4 focus:ring-[#A27035]/10 transition-all duration-300 bg-white/90 text-gray-700"
                >
                  {travelTypes.map(type => (
                    <option key={type} value={type}>
                      {type === 'all' ? 'All Types' : type.charAt(0).toUpperCase() + type.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Mobile Filters */}
            {showFilters && (
              <div className="lg:hidden mt-6 pt-6 border-t border-gray-200 space-y-4">
                <select
                  value={filterContinent}
                  onChange={(e) => setFilterContinent(e.target.value)}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#A27035] focus:ring-4 focus:ring-[#A27035]/10 transition-all duration-300 bg-white/90"
                >
                  {continents.map(continent => (
                    <option key={continent} value={continent}>
                      {continent === 'all' ? 'All Continents' : continent}
                    </option>
                  ))}
                </select>

                <select
                  value={filterBudget}
                  onChange={(e) => setFilterBudget(e.target.value)}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#A27035] focus:ring-4 focus:ring-[#A27035]/10 transition-all duration-300 bg-white/90"
                >
                  {budgetTypes.map(budget => (
                    <option key={budget} value={budget}>
                      {budget === 'all' ? 'All Budgets' : budget.charAt(0).toUpperCase() + budget.slice(1)}
                    </option>
                  ))}
                </select>

                <select
                  value={filterTravelType}
                  onChange={(e) => setFilterTravelType(e.target.value)}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#A27035] focus:ring-4 focus:ring-[#A27035]/10 transition-all duration-300 bg-white/90"
                >
                  {travelTypes.map(type => (
                    <option key={type} value={type}>
                      {type === 'all' ? 'All Types' : type.charAt(0).toUpperCase() + type.slice(1)}
                    </option>
                  ))}
                </select>

                <button
                  onClick={() => setShowFilters(false)}
                  className="w-full flex items-center justify-center px-4 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-300"
                >
                  <X className="w-5 h-5 mr-2" />
                  Close Filters
                </button>
              </div>
            )}
          </div>

          {/* Results Count and Clear Filters */}
          <div className="flex items-center justify-between mb-8">
            <p className="text-gray-600 text-lg">
              <span className="font-semibold text-[#A27035]">{filteredDestinations.length}</span> 
              {' '}destination{filteredDestinations.length !== 1 ? 's' : ''} found
            </p>
            {(searchTerm || filterContinent !== 'all' || filterBudget !== 'all' || filterTravelType !== 'all') && (
              <button
                onClick={clearAllFilters}
                className="text-[#8E4162] hover:text-[#A27035] font-semibold transition-colors duration-200"
              >
                Clear all filters
              </button>
            )}
          </div>

          {/* Destinations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredDestinations.map((destination) => (
              <div
                key={destination.id}
                className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-white/50 cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4">
                    <div className={`px-3 py-1 rounded-full text-sm font-bold border ${getBudgetColor(destination.budget)} backdrop-blur-sm`}>
                      {getBudgetIcon(destination.budget)}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{destination.name}</h3>
                      <p className="text-gray-600 text-sm font-medium">{destination.country}</p>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-6 leading-relaxed line-clamp-3">
                    {destination.description}
                  </p>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center text-sm">
                      <Star className="h-4 w-4 text-yellow-500 fill-current mr-2" />
                      <span className="font-bold text-gray-900">{destination.rating}</span>
                      <span className="text-gray-500 mx-2">•</span>
                      <span className="text-gray-600">{destination.reviews.toLocaleString()} reviews</span>
                    </div>

                    <div className="flex items-center text-sm text-gray-600">
                      <DollarSign className="h-4 w-4 mr-2 text-[#A27035]" />
                      <span className="font-medium">{destination.priceRange}</span>
                    </div>

                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-2 text-[#B88B4A]" />
                      <span>{destination.duration}</span>
                    </div>

                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="h-4 w-4 mr-2 text-[#8E4162]" />
                      <span>Best for: {destination.travelType.join(', ')}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-bold text-gray-900 text-sm mb-3">Top Highlights</h4>
                    <div className="flex flex-wrap gap-2">
                      {destination.highlights.slice(0, 3).map((highlight, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gradient-to-r from-[#A27035]/10 to-[#B88B4A]/10 text-[#A27035] text-xs rounded-full border border-[#A27035]/20 font-medium"
                        >
                          {highlight}
                        </span>
                      ))}
                      {destination.highlights.length > 3 && (
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full border border-gray-200 font-medium">
                          +{destination.highlights.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="mb-6 p-3 bg-gradient-to-r from-[#A27035]/5 to-[#B88B4A]/5 rounded-xl border border-[#A27035]/10">
                    <span className="font-bold text-gray-900 text-sm">Best time to visit:</span>
                    <p className="text-gray-700 text-sm mt-1">{destination.bestTime}</p>
                  </div>

                  <button className="w-full bg-gradient-to-r from-[#A27035] to-[#B88B4A] text-white py-4 px-6 rounded-xl hover:from-[#B88B4A] hover:to-[#8E4162] transition-all duration-300 flex items-center justify-center space-x-3 font-bold text-sm group-hover:shadow-lg transform hover:scale-105">
                    <Plane className="h-5 w-5" />
                    <span>Plan Your Journey</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredDestinations.length === 0 && (
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 p-16 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#A27035]/20 to-[#B88B4A]/20 mb-6">
                <MapPin className="h-10 w-10 text-[#A27035]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">No destinations found</h3>
              <p className="text-gray-600 mb-8 max-w-md mx-auto leading-relaxed">
                We couldn't find any destinations matching your criteria. Try adjusting your search terms or filters to discover more amazing places.
              </p>
              <button
                onClick={clearAllFilters}
                className="bg-gradient-to-r from-[#A27035] to-[#B88B4A] text-white px-8 py-4 rounded-xl font-bold hover:from-[#B88B4A] hover:to-[#8E4162] transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Clear All Filters & Explore
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Destinations;
