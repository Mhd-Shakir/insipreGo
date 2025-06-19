import React from 'react';
import aboutImg from '../assets/about.jpg'; // Make sure this image exists or replace with your own

const About = () => {
  return (
    <section
      id="about"
      className="py-20 lg:py-28 bg-gradient-to-b from-blue-100 via-white to-blue-50"
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Image */}
        <div className="w-full lg:w-1/2">
          <img
            src={aboutImg}
            alt="About InspireGO"
            className="w-full h-auto rounded-3xl shadow-xl object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#003057]">
            About <span className="text-[#009FE3]">InspireGO</span>
          </h2>
          <p className="text-gray-700 text-lg">
            At InspireGO, we believe that travel is more than just visiting new places—it's about creating unforgettable memories. With curated experiences, seamless booking, and passionate guides, we turn your dreams into real adventures.
          </p>
          <ul className="list-disc text-left text-gray-700 pl-5 space-y-2">
            <li>Handpicked destinations & personalized itineraries</li>
            <li>Trusted travel advisors & 24/7 support</li>
            <li>Affordable packages tailored to your needs</li>
          </ul>
          <div>
            <a
              href="#contact"
              className="inline-block mt-4 bg-[#009FE3] text-white px-6 py-3 rounded-full font-semibold text-sm shadow-md hover:bg-[#007ab8] transition duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
