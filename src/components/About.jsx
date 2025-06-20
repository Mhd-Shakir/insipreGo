import React from 'react';
import aboutImg from '../assets/about.jpg';
import { Globe, ShieldCheck, Heart, Star, Award } from 'lucide-react';

const About = () => {
  const stats = [
    { value: "15K+", label: "Happy Travelers", icon: <Heart className="w-6 h-6 text-[#009FE3]" /> },
    { value: "120+", label: "Destinations", icon: <Globe className="w-6 h-6 text-[#009FE3]" /> },
    { value: "98%", label: "Satisfaction Rate", icon: <Star className="w-6 h-6 text-[#009FE3]" /> },
    { value: "24/7", label: "Support", icon: <ShieldCheck className="w-6 h-6 text-[#009FE3]" /> },
  ];

  const features = [
    {
      title: "Personalized Itineraries",
      description: "Tailored travel plans designed specifically for your interests and preferences.",
      icon: <svg className="w-6 h-6 text-[#009FE3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    },
    {
      title: "Local Experts",
      description: "Our guides are natives who know the hidden gems and authentic experiences.",
      icon: <svg className="w-6 h-6 text-[#009FE3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    },
    {
      title: "Sustainable Travel",
      description: "We prioritize eco-friendly options and support local communities.",
      icon: <svg className="w-6 h-6 text-[#009FE3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    },
    {
      title: "Best Price Guarantee",
      description: "We'll match any lower price you find for the same itinerary.",
      icon: <svg className="w-6 h-6 text-[#009FE3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    },
  ];

  return (
    <section
      id="about"
      className="relative py-20 lg:py-28 bg-gradient-to-b from-blue-100 via-white to-blue-50 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[#009FE3]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-1/3 -right-20 w-80 h-80 bg-[#003057]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 relative z-10">
        {/* Left Image */}
        <div className="w-full lg:w-1/2 relative">
          <img
            src={aboutImg}
            alt="About InspireGO - Travel experts planning your perfect trip"
            className="w-full h-auto rounded-3xl shadow-2xl object-cover transform transition-all duration-500 hover:scale-[1.02]"
          />
          <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-100 w-72">
            <div className="flex items-center gap-3">
              <div className="bg-[#009FE3]/10 p-3 rounded-lg">
                <Award className="w-6 h-6 text-[#009FE3]" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Industry Recognition</p>
                <p className="font-bold text-gray-800">Best Travel Agency 2023</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 space-y-8">
          <div className="text-center lg:text-left">
            <span className="inline-block px-4 py-2 bg-[#009FE3]/10 text-[#009FE3] rounded-full text-sm font-semibold mb-4">
              Our Story
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#003057] leading-tight">
              More Than Just <span className="text-[#009FE3]">Travel</span> Experts
            </h2>
            <p className="text-gray-700 text-lg md:text-xl mt-6 max-w-2xl">
              Founded in 2010 by passionate globetrotters, InspireGO has grown from a small boutique agency to a trusted name in travel. We combine local expertise with global standards to create journeys that inspire.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-[#009FE3]/10 p-2 rounded-lg">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">{feature.title}</h3>
                    <p className="text-gray-600 text-sm mt-1">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm border border-gray-100">
                <div className="flex justify-center mb-2">
                  {stat.icon}
                </div>
                <p className="text-2xl font-bold text-[#003057]">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center lg:text-left">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 bg-[#009FE3] hover:bg-[#007ab8] text-white px-8 py-4 rounded-full font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Meet Our Team
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;