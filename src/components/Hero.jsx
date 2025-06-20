import React from 'react';
import heroImg from '../assets/hero.jpg'; // Replace with your actual image
import { ArrowRight, Play, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative pt-32 lg:pt-40 pb-16 lg:pb-32 bg-gradient-to-b from-white via-blue-50 to-blue-100 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 left-10 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-1/3 right-20 w-60 h-60 bg-[#009FE3] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-48 h-48 bg-[#003057] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-12 relative z-10">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-8">
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm mb-4">
            <span className="w-3 h-3 bg-[#009FE3] rounded-full mr-2 animate-pulse"></span>
            <span className="text-sm font-medium text-[#003057]">Explore the world with us</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#003057] leading-tight">
            Discover <span className="text-[#009FE3]">Beautiful</span> Destinations Worldwide
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl">
            We craft unforgettable travel experiences with personalized itineraries, exclusive deals, 
            and 24/7 support to make your journey seamless and memorable.
          </p>

          <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4 pt-4">
            <a
              href="#destinations"
              className="group flex items-center justify-center gap-2 bg-[#009FE3] hover:bg-[#007ab8] text-white px-8 py-4 rounded-full font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Explore Destinations
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="group flex items-center justify-center gap-2 border-2 border-[#009FE3] text-[#009FE3] hover:text-[#007ab8] hover:border-[#007ab8] px-8 py-4 rounded-full font-semibold text-sm hover:bg-[#f5fbff] transition-all duration-300"
            >
              Get Custom Quote
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 pt-8">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((item) => (
                <img
                  key={item}
                  src={`https://randomuser.me/api/portraits/${item % 2 === 0 ? 'women' : 'men'}/${item + 20}.jpg`}
                  alt="Happy traveler"
                  className="w-12 h-12 rounded-full border-2 border-white shadow-md"
                />
              ))}
            </div>
            <div className="text-left">
              <p className="text-sm font-medium text-gray-700">Join 10,000+ satisfied travelers</p>
              <div className="flex items-center mt-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-2 text-sm font-medium text-gray-600">4.9/5 (2,458 reviews)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 relative">
          <div className="relative">
            <img
              src={heroImg}
              alt="Happy travelers exploring a beautiful destination"
              className="w-full h-auto rounded-3xl shadow-2xl object-cover transform transition-all duration-500 hover:scale-[1.02]"
            />
            <button className="absolute bottom-6 left-6 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-5 py-3 rounded-full shadow-lg hover:bg-white transition-all duration-300 group">
              <div className="bg-[#009FE3] p-2 rounded-full text-white group-hover:bg-[#007ab8] transition-colors">
                <Play className="w-4 h-4 fill-current" />
              </div>
              <span className="font-medium text-gray-800">Watch our story</span>
            </button>
          </div>
          
          <div className="hidden lg:block absolute -bottom-8 -right-8 bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-gray-100 w-64">
            <div className="flex items-center gap-3">
              <div className="bg-[#009FE3]/10 p-3 rounded-lg">
                <MapPin className="w-6 h-6 text-[#009FE3]" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Popular Destination</p>
                <p className="font-bold text-gray-800">Bali, Indonesia</p>
              </div>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-sm text-gray-500">From</span>
              <span className="text-xl font-bold text-[#009FE3]">$899</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;