import React from 'react';
import { ArrowRight, Phone, Mail, MessageCircle } from 'lucide-react';

export const CTASection = () => {
  return (
    <section className="relative py-24 bg-[#003057] overflow-hidden" id="cta">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#009FE3]/10 to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-[#009FE3]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[#009FE3]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-15"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Ready for Your <span className="text-[#009FE3]">Next Adventure</span>?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10">
            Let our travel experts craft your perfect getaway. From dream to destination - we handle every detail.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <a 
              href="#contact" 
              className="group flex items-center justify-center gap-2 bg-[#009FE3] hover:bg-[#007ab8] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              Plan My Trip
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="tel:+18005551234" 
              className="group flex items-center justify-center gap-2 bg-transparent border-2 border-white hover:border-[#009FE3] text-white hover:text-[#009FE3] px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-[#009FE3]/30 transition-all">
            <div className="bg-[#009FE3]/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6">
              <MessageCircle className="w-6 h-6 text-[#009FE3]" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Instant Chat</h3>
            <p className="text-blue-100 mb-4">Chat live with our travel consultants 24/7 for immediate answers.</p>
            <a href="#" className="text-[#009FE3] hover:text-[#007ab8] font-medium inline-flex items-center gap-1">
              Start Chat
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-[#009FE3]/30 transition-all">
            <div className="bg-[#009FE3]/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6">
              <Mail className="w-6 h-6 text-[#009FE3]" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Email Us</h3>
            <p className="text-blue-100 mb-4">Get a personalized itinerary proposal within 24 hours.</p>
            <a href="mailto:travel@inspirego.com" className="text-[#009FE3] hover:text-[#007ab8] font-medium inline-flex items-center gap-1">
              Send Inquiry
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-[#009FE3]/30 transition-all">
            <div className="bg-[#009FE3]/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6">
              <Phone className="w-6 h-6 text-[#009FE3]" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Phone Consultation</h3>
            <p className="text-blue-100 mb-4">Speak directly with a destination specialist for expert advice.</p>
            <a href="tel:+18005551234" className="text-[#009FE3] hover:text-[#007ab8] font-medium inline-flex items-center gap-1">
              +1 (800) 555-1234
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-blue-200 text-sm uppercase tracking-wider mb-2">Special Offer</p>
          <p className="text-white text-lg">
            Book before <span className="font-bold">June 30</span> and receive <span className="text-[#009FE3] font-bold">$200 credit</span> toward experiences!
          </p>
        </div>
      </div>
    </section>
  );
};