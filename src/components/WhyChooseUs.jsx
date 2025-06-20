import React from 'react';
import { Smile, Award, Shield, DollarSign, Globe, Headphones, Heart, Users } from 'lucide-react';

export const WhyChooseUs = () => {
  const benefits = [
    {
      icon: <Smile className="w-8 h-8 text-[#009FE3]" />,
      title: "10,000+ Happy Travelers",
      description: "Join our community of satisfied explorers who've experienced unforgettable journeys with us.",
      stat: "98%",
      statLabel: "Customer Satisfaction"
    },
    {
      icon: <Award className="w-8 h-8 text-[#009FE3]" />,
      title: "Certified Local Experts",
      description: "Our handpicked guides provide authentic experiences and insider knowledge at every destination.",
      stat: "200+",
      statLabel: "Local Specialists"
    },
    {
      icon: <DollarSign className="w-8 h-8 text-[#009FE3]" />,
      title: "Best Value Guarantee",
      description: "We'll match any lower price for identical itineraries while maintaining our premium service standards.",
      stat: "$1M+",
      statLabel: "Saved for Clients"
    },
    {
      icon: <Shield className="w-8 h-8 text-[#009FE3]" />,
      title: "Award-Winning Support",
      description: "24/7 multilingual assistance from booking to return, recognized by industry leaders.",
      stat: "24/7",
      statLabel: "Dedicated Support"
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/3 left-10 w-60 h-60 bg-[#009FE3]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/4 right-20 w-80 h-80 bg-[#003057]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-15"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#009FE3]/10 text-[#009FE3] rounded-full text-sm font-semibold mb-4">
            Our Differentiators
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#003057] mb-4">
            Why <span className="text-[#009FE3]">Choose</span> InspireGO?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We go beyond booking trips to create transformative travel experiences with unmatched personal service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="bg-[#009FE3]/10 p-3 rounded-xl w-14 h-14 flex items-center justify-center mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-[#003057] mb-3">{benefit.title}</h3>
              <p className="text-gray-600 mb-6">{benefit.description}</p>
              <div className="flex items-end gap-2">
                <span className="text-3xl font-bold text-[#009FE3]">{benefit.stat}</span>
                <span className="text-sm text-gray-500 mb-1">{benefit.statLabel}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-white/80 backdrop-blur-sm rounded-2xl shadow-md p-8 border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-[#003057] mb-4">Our Commitment to You</h3>
              <p className="text-gray-600 mb-6">
                At InspireGO, we measure our success by your satisfaction. Our team of passionate travel experts works 
                tirelessly to ensure every aspect of your journey exceeds expectations, from initial planning to 
                homecoming memories.
              </p>
              <div className="flex flex-wrap gap-4">
                {[
                  "No hidden fees",
                  "Sustainable travel options",
                  "Flexible cancellation",
                  "Accessibility focused",
                  "Local community support",
                  "Boutique hotel partners"
                ].map((item, i) => (
                  <span key={i} className="inline-flex items-center gap-2 px-3 py-2 bg-blue-50 rounded-full text-sm">
                    <svg className="w-4 h-4 text-[#009FE3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-[#003057] rounded-xl p-6 flex flex-col justify-center">
              <div className="text-white mb-4">
                <Heart className="w-10 h-10 mb-3 text-[#009FE3]" />
                <h4 className="text-xl font-bold mb-2">Still Have Questions?</h4>
                <p className="text-blue-100">Our travel consultants are ready to help you plan your perfect getaway.</p>
              </div>
              <button className="mt-4 w-full bg-[#009FE3] hover:bg-[#007ab8] text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Contact Our Experts
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};