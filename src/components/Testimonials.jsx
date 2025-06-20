import React from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export const Testimonials = () => {
  const testimonials = [
    { 
      name: 'Sarah M.', 
      role: 'Adventure Traveler',
      quote: 'InspireGO crafted the most incredible 2-week itinerary through Southeast Asia. Every detail was perfect - from boutique hotels to local guides who showed us hidden gems we would have never found on our own.',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/women/43.jpg'
    },
    { 
      name: 'John D.', 
      role: 'Honeymooner',
      quote: 'Our honeymoon in Santorini was magical thanks to InspireGO. They arranged private sunset dinners, luxury transfers, and even surprised us with a room upgrade. Their 24/7 support gave us complete peace of mind.',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    { 
      name: 'Aisha R.', 
      role: 'Family Traveler',
      quote: 'Traveling with kids can be stressful, but InspireGO made it effortless. They planned activities that kept our children engaged while allowing us adults to relax too. The local guides were fantastic with the kids!',
      rating: 4,
      image: 'https://randomuser.me/api/portraits/women/65.jpg'
    },
    { 
      name: 'Rahul N.', 
      role: 'Solo Explorer',
      quote: 'As a solo traveler, safety and local connections were important to me. InspireGO connected me with trusted guides and arranged small group tours where I met amazing people. Their solo travel expertise is unmatched.',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/men/76.jpg'
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-blue-50 to-white" id="testimonials">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/3 -right-20 w-80 h-80 bg-[#009FE3]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#009FE3]/10 text-[#009FE3] rounded-full text-sm font-semibold mb-4">
            Traveler Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#003057] mb-4">
            What Our <span className="text-[#009FE3]">Travelers</span> Say
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from travelers who've experienced the InspireGO difference.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, i) => (
            <div 
              key={i}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-start mb-6">
                <div className="relative mr-5">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-[#009FE3] p-1 rounded-full">
                    <Quote className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#003057]">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i}
                        className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
              <div className="flex justify-end">
                <button className="text-sm font-medium text-[#009FE3] hover:text-[#007ab8] transition-colors">
                  Read full story →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-4">
          <button className="p-2 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-gray-50 transition-colors">
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <button className="p-2 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-gray-50 transition-colors">
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        <div className="mt-16 bg-[#003057] rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Ready for Your Dream Trip?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Join thousands of happy travelers who've trusted InspireGO to create their perfect vacation.
          </p>
          <button className="bg-[#009FE3] hover:bg-[#007ab8] text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};