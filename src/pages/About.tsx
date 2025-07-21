import React from 'react';
import { Plane, Users, Target, Award, Heart, Globe, Star, CheckCircle } from 'lucide-react';

const About = () => {
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
      
    </div>
  );
};

export default About;