import React from 'react';
import dest1 from '../assets/dest1.jpg';
import dest2 from '../assets/dest2.jpg';
import dest3 from '../assets/dest3.jpg';
import dest4 from '../assets/dest4.jpg';
import dest5 from '../assets/dest5.jpg';
import dest6 from '../assets/dest6.jpg';
import { Star, MapPin, Calendar, ArrowRight } from 'lucide-react';

export const Destinations = () => {
  const places = [
    { 
      title: 'Bali, Indonesia', 
      image: dest1, 
      desc: 'Island of Gods with pristine beaches, ancient temples, and vibrant culture.', 
      rating: 4.9,
      price: '$899',
      season: 'Year-round',
      duration: '7-14 days'
    },
    { 
      title: 'Paris, France', 
      image: dest2, 
      desc: 'The romantic city of love, world-class art, and stunning architecture.', 
      rating: 4.8,
      price: '$1,299',
      season: 'Spring/Fall',
      duration: '5-10 days'
    },
    { 
      title: 'Kyoto, Japan', 
      image: dest3, 
      desc: 'Traditional temples, magical cherry blossoms, and serene zen gardens.', 
      rating: 4.7,
      price: '$2,199',
      season: 'Spring',
      duration: '10-14 days'
    },
    { 
      title: 'Santorini, Greece', 
      image: dest4, 
      desc: 'Iconic white-washed villages and breathtaking sunsets over the Aegean Sea.', 
      rating: 4.9,
      price: '$1,599',
      season: 'Summer',
      duration: '7-10 days'
    },
    { 
      title: 'Dubai, UAE', 
      image: dest5, 
      desc: 'Ultra-modern luxury, golden deserts, and futuristic architecture wonders.', 
      rating: 4.6,
      price: '$1,499',
      season: 'Winter',
      duration: '5-8 days'
    },
    { 
      title: 'Cape Town, South Africa', 
      image: dest6, 
      desc: 'Dramatic mountains, exquisite wine tours, and unforgettable wildlife safaris.', 
      rating: 4.8,
      price: '$1,799',
      season: 'Summer',
      duration: '10-12 days'
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-blue-50 to-white" id="destinations">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 right-10 w-60 h-60 bg-[#009FE3]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#009FE3]/10 text-[#009FE3] rounded-full text-sm font-semibold mb-4">
            Explore The World
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#003057] mb-4">
            Our <span className="text-[#009FE3]">Featured</span> Destinations
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Handpicked locations offering unforgettable experiences, curated by our travel experts.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {places.map((item, i) => (
            <div 
              key={i} 
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden h-64">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="text-sm font-medium">{item.rating}</span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <MapPin className="w-4 h-4 text-white/80" />
                    <span className="text-sm text-white/80">{item.desc.split('.')[0]}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-[#009FE3]" />
                    <span className="text-sm text-gray-600">{item.season}</span>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500">Starting from</p>
                    <p className="text-xl font-bold text-[#003057]">{item.price}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-5">{item.desc}</p>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-500">{item.duration}</span>
                  <button className="group flex items-center gap-1 text-[#009FE3] hover:text-[#007ab8] font-medium text-sm transition-colors">
                    Explore
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="group inline-flex items-center justify-center gap-2 bg-[#009FE3] hover:bg-[#007ab8] text-white px-8 py-4 rounded-full font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            View All Destinations
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};