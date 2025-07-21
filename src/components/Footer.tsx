import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="relative text-white px-6 py-20 overflow-hidden bg-black">
      {/* More prominent radial background blobs */}
      <div className="absolute inset-0 -z-10 bg-black" />

      {/* Stronger and larger blur effects */}
      <div className="absolute top-[-120px] left-[-160px] w-[400px] h-[400px] bg-[#8E4162]/50 rounded-full blur-[180px]" />
      <div className="absolute bottom-[-100px] right-[-160px] w-[420px] h-[420px] bg-[#A27035]/50 rounded-full blur-[180px]" />
      <div className="absolute top-[30%] left-[50%] transform -translate-x-1/2 w-[300px] h-[300px] bg-[#B88B4A]/30 rounded-full blur-[160px]" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start relative z-10">
        {/* Contact Section */}
        <div>
          <p className="text-sm text-[#B88B4A] font-semibold mb-2">+ Contact Us</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6 max-w-xl">
            Let’s plan your journey — whether you're exploring, dreaming or just curious.
          </h2>
          <div>
            <p className="text-sm text-gray-400 mb-1">Reach us at:</p>
            <a
              href="mailto:hello@tripplanner.ai"
              className="text-lg font-medium hover:text-white text-white/90 transition duration-200"
            >
              tripplanner@gmail.com
            </a>
          </div>
        </div>

        {/* Navigation + Branding */}
        <div className="flex flex-col justify-between h-full">
          <nav className="flex flex-wrap gap-6 text-sm font-medium text-white/60">
            <Link to="/how-it-works" className="hover:text-white transition">How It Works</Link>
            <Link to="/benefits" className="hover:text-white transition">Benefits</Link>
            <Link to="/features" className="hover:text-white transition">Features</Link>
            <Link to="/team" className="hover:text-white transition">Team</Link>
            <Link to="/destinations" className="hover:text-white transition">Destinations</Link>
          </nav>

          <div className="mt-20">
            <h1 className="text-6xl font-extrabold tracking-tight text-white">Trip Planner</h1>
            <p className="mt-2 text-sm text-white/50">Your AI-powered travel curator</p>
          </div>
        </div>
      </div>

      
    </footer>
  );
};

export default Footer;
