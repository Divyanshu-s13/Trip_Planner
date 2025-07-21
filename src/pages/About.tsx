import React from 'react';
import { Plane, Users, Target, Award, Heart, Globe, Star, CheckCircle } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Former travel journalist with 15 years of experience exploring 50+ countries.'
    },
    {
      name: 'Michael Chen',
      role: 'Head of Product',
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Tech enthusiast passionate about creating seamless travel planning experiences.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Travel Expert',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Certified travel advisor specializing in family and solo travel planning.'
    },
    {
      name: 'David Park',
      role: 'Lead Developer',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Full-stack developer who loves turning travel dreams into digital reality.'
    }
  ];

  const values = [
    {
      icon: <Heart className="h-8 w-8 text-red-600" />,
      title: 'Passion for Travel',
      description: 'We believe travel enriches lives and creates lasting memories that shape who we are.'
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: 'Community First',
      description: 'Building a supportive community where travelers can share experiences and inspire each other.'
    },
    {
      icon: <Target className="h-8 w-8 text-green-600" />,
      title: 'Simplicity',
      description: 'Making travel planning effortless and accessible for everyone, regardless of experience level.'
    },
    {
      icon: <Globe className="h-8 w-8 text-purple-600" />,
      title: 'Responsible Travel',
      description: 'Promoting sustainable and culturally respectful travel practices for a better world.'
    }
  ];

  const achievements = [
    { number: '50,000+', label: 'Happy Travelers', icon: <Users className="h-6 w-6" /> },
    { number: '200+', label: 'Countries Covered', icon: <Globe className="h-6 w-6" /> },
    { number: '100,000+', label: 'Itineraries Created', icon: <Plane className="h-6 w-6" /> },
    { number: '4.9/5', label: 'User Rating', icon: <Star className="h-6 w-6" /> }
  ];

  const features = [
    'Personalized itinerary planning',
    'Budget tracking and management',
    'Expert destination recommendations',
    'Solo and family travel specialists',
    '24/7 customer support',
    'Mobile-friendly interface',
    'Secure data protection',
    'Community reviews and tips'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Plane className="h-16 w-16 mx-auto mb-6 text-white" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About TravelPlan</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            We're passionate about making travel planning simple, enjoyable, and accessible for everyone.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            To empower travelers worldwide with intuitive tools and expert guidance that transform the 
            complexity of trip planning into an exciting journey of discovery. We believe that great 
            adventures begin with great planning.
          </p>
          <div className="bg-blue-50 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-blue-900 mb-4">Our Vision</h3>
            <p className="text-blue-800">
              To become the world's most trusted travel planning platform, where every journey is 
              perfectly crafted and every traveler feels confident and prepared for their adventure.
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do at TravelPlan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-200"
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <p className="text-xl text-gray-600">
              Numbers that reflect our commitment to making travel accessible to everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-500 to-teal-500 text-white rounded-lg p-6 text-center"
              >
                <div className="flex justify-center mb-4 text-white opacity-80">
                  {achievement.icon}
                </div>
                <div className="text-3xl font-bold mb-2">{achievement.number}</div>
                <div className="text-blue-100">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">
              Passionate travel enthusiasts and tech experts working to make your journeys unforgettable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-200"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose TravelPlan?</h2>
            <p className="text-xl text-gray-600">
              Everything you need for seamless travel planning in one platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 py-2">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
          </div>

          <div className="prose prose-lg mx-auto text-gray-600">
            <p className="text-lg leading-relaxed mb-6">
              TravelPlan was born from a simple frustration: planning a trip shouldn't be more stressful 
              than the trip itself. Our founder, Sarah Johnson, experienced this firsthand while trying 
              to organize a family vacation across Europe. Spreadsheets, countless browser tabs, and 
              conflicting information made what should have been exciting feel overwhelming.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              That's when the idea struck – what if there was a single platform that could handle 
              everything from itinerary planning to budget tracking, while providing expert recommendations 
              tailored to different types of travelers?
            </p>
            
            <p className="text-lg leading-relaxed">
              Today, TravelPlan serves thousands of travelers worldwide, from solo adventurers seeking 
              their next challenge to families creating memories that will last a lifetime. We're proud 
              to be part of your journey and committed to making every trip planning experience as 
              exciting as the destination itself.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join our community of travelers and start planning your next adventure today.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200">
              Start Planning
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors duration-200">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;