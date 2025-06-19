import React from 'react';
import heroImg from '../assets/hero.jpg'; // Replace with your actual image

const Hero = () => {
  return (
    <section
      id="home"
      className="relative pt-32 lg:pt-40 pb-16 lg:pb-32 bg-gradient-to-b from-white via-blue-50 to-blue-100"
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#003057] leading-tight">
            Discover the world with <span className="text-[#009FE3]">InspireGO</span>
          </h1>
          <p className="text-lg text-gray-700">
            Plan your perfect getaway, explore exotic destinations, and start your adventure with us.
          </p>
          <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4">
            <a
              href="#destinations"
              className="bg-[#009FE3] text-white px-6 py-3 rounded-full font-semibold text-sm shadow-md hover:bg-[#007ab8] transition duration-300"
            >
              Explore Now
            </a>
            <a
              href="#contact"
              className="border border-[#009FE3] text-[#009FE3] px-6 py-3 rounded-full font-semibold text-sm hover:bg-[#e6f7fd] transition duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2">
          <img
            src={heroImg}
            alt="Travel"
            className="w-full h-auto rounded-3xl shadow-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
