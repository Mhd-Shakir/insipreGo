import React from 'react';
import { Briefcase, Compass, ShieldCheck, Plane, Users, HelpCircle, Globe, Hotel, Utensils, Car, Mountain, Calendar } from 'lucide-react';

export const Services = () => {
  const services = [
    { 
      icon: Briefcase, 
      title: 'Custom Packages', 
      desc: 'Tailor-made travel plans designed specifically for your interests, budget, and travel style.',
      features: ['Personalized itineraries', 'Flexible scheduling', 'Exclusive experiences']
    },
    { 
      icon: Compass, 
      title: 'Guided Tours', 
      desc: 'Discover hidden gems and local secrets with our certified expert guides.',
      features: ['Small group sizes', 'Cultural immersion', 'Off-the-beaten-path']
    },
    { 
      icon: ShieldCheck, 
      title: 'Travel Protection', 
      desc: 'Comprehensive coverage for trip cancellations, medical emergencies, and lost belongings.',
      features: ['24/7 emergency support', 'Cancel for any reason', 'Medical evacuation']
    },
    { 
      icon: Plane, 
      title: 'Flight Solutions', 
      desc: 'We secure the best routes and rates with our airline partnerships worldwide.',
      features: ['Price match guarantee', 'Seat selection', 'Luggage included']
    },
    { 
      icon: Users, 
      title: 'Group & Solo', 
      desc: 'Curated experiences whether you prefer private journeys or group adventures.',
      features: ['Solo traveler meetups', 'Private guides', 'Custom group tours']
    },
    { 
      icon: HelpCircle, 
      title: 'Concierge Support', 
      desc: 'Dedicated travel experts available around the clock throughout your journey.',
      features: ['Multilingual support', 'Real-time assistance', 'Last-minute changes']
    },
  ];

  const additionalServices = [
    { icon: Hotel, name: 'Luxury Accommodations' },
    { icon: Utensils, name: 'Dining Experiences' },
    { icon: Car, name: 'Transportation' },
    { icon: Mountain, name: 'Adventure Activities' },
    { icon: Globe, name: 'Multi-Country Tours' },
    { icon: Calendar, name: 'Seasonal Packages' },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-blue-50" id="services">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-60 h-60 bg-[#009FE3]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[#003057]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-15"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#009FE3]/10 text-[#009FE3] rounded-full text-sm font-semibold mb-4">
            How We Serve You
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#003057] mb-4">
            Comprehensive <span className="text-[#009FE3]">Travel Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From dream to destination - we handle every detail to create seamless, memorable travel experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, i) => (
            <div 
              key={i} 
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="bg-[#009FE3]/10 p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6">
                <service.icon className="text-[#009FE3] h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-[#003057] mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.desc}</p>
              <ul className="space-y-2">
                {service.features.map((feature, j) => (
                  <li key={j} className="flex items-start">
                    <svg className="w-5 h-5 text-[#009FE3] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-md p-8 border border-gray-100">
          <h3 className="text-2xl font-bold text-[#003057] text-center mb-8">More Ways We Can Help</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {additionalServices.map((service, i) => (
              <div 
                key={i} 
                className="group flex flex-col items-center p-4 hover:bg-blue-50 rounded-xl transition-colors"
              >
                <div className="bg-[#009FE3]/10 p-3 rounded-lg mb-3 group-hover:bg-[#009FE3]/20 transition-colors">
                  <service.icon className="text-[#009FE3] h-6 w-6" />
                </div>
                <span className="text-sm font-medium text-gray-700 text-center">{service.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <button className="group inline-flex items-center justify-center gap-2 bg-[#009FE3] hover:bg-[#007ab8] text-white px-8 py-4 rounded-full font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Explore All Services
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};