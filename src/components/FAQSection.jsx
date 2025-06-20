import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Phone, Mail, MessageSquare } from 'lucide-react';

export const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Do you offer custom travel packages?",
      answer: "Absolutely! Our travel specialists work with you to create fully personalized itineraries based on your destination preferences, travel dates, interests, and budget. We can arrange everything from luxury private tours to budget-friendly group adventures.",
      extendedInfo: "Our custom packages include handpicked accommodations, unique experiences, and local guides tailored to your travel style."
    },
    {
      question: "What types of travel insurance do you offer?",
      answer: "We provide three levels of coverage: Basic (included), Plus, and Premium. All plans cover trip cancellation, medical emergencies, and lost luggage. Higher tiers add adventure sports coverage, cancel-for-any-reason, and increased benefit limits.",
      extendedInfo: "Our insurance partners are internationally recognized providers with 24/7 multilingual support."
    },
    {
      question: "What is your cancellation policy?",
      answer: "Our flexible policy allows free cancellations up to 30 days before departure for most packages (7 days for last-minute deals). Between 30-14 days, we charge a 10% fee. Within 14 days, fees vary by vendor but average 25%.",
      extendedInfo: "Some premium experiences may have different policies which we'll clearly disclose before booking."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit/debit cards, PayPal, bank transfers, and installment payment plans. For Indian travelers, we also accept UPI, NetBanking, and wallet payments.",
      extendedInfo: "All transactions are securely processed with 3D Secure authentication and PCI compliance."
    },
    {
      question: "Do you provide visa assistance?",
      answer: "Yes! Our visa concierge service helps with application forms, document checklists, appointment scheduling, and interview preparation. We maintain current requirements for 75+ countries.",
      extendedInfo: "While we can't guarantee approval, our experts significantly improve your chances with complete, accurate applications."
    },
    {
      question: "What group size options do you offer?",
      answer: "We cater to all group sizes: solo travelers (matched with small groups), private couples/families (2-6 people), small groups (8-12), and large groups (15+). Corporate and special interest groups are also available.",
      extendedInfo: "Our average guide-to-traveler ratio is 1:8 for optimal personalized attention."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-blue-50" id="faq">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/3 left-10 w-60 h-60 bg-[#009FE3]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[#009FE3]/10 text-[#009FE3] rounded-full text-sm font-semibold mb-4">
            <HelpCircle className="w-4 h-4 mr-2" />
            Need Help?
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#003057] mb-4">
            Frequently Asked <span className="text-[#009FE3]">Questions</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about planning and booking with InspireGO.
          </p>
        </div>

        <div className="space-y-4 mb-16">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100"
            >
              <button
                className="w-full flex justify-between items-center text-left"
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
                aria-controls={`faq-${index}`}
              >
                <h3 className="text-lg font-semibold text-[#003057] pr-4">{faq.question}</h3>
                {activeIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-[#009FE3] flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[#009FE3] flex-shrink-0" />
                )}
              </button>
              <div 
                id={`faq-${index}`}
                className={`overflow-hidden transition-all duration-300 ${activeIndex === index ? 'max-h-96 mt-4' : 'max-h-0'}`}
              >
                <p className="text-gray-700 mb-3">{faq.answer}</p>
                <p className="text-sm text-gray-600 bg-blue-50/50 p-3 rounded-lg">{faq.extendedInfo}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#003057] rounded-2xl p-8 text-center shadow-xl">
          <h3 className="text-2xl font-bold text-white mb-4">Still have questions?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Our travel consultants are available 24/7 to help plan your perfect getaway.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
            <a 
              href="tel:+18005551234" 
              className="flex items-center justify-center gap-2 bg-[#009FE3] hover:bg-[#007ab8] text-white px-6 py-3 rounded-full font-medium transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call Us
            </a>
            <a 
              href="mailto:help@inspirego.com" 
              className="flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-[#003057] px-6 py-3 rounded-full font-medium transition-colors"
            >
              <Mail className="w-4 h-4" />
              Email Us
            </a>
            <button className="flex items-center justify-center gap-2 border border-white text-white hover:bg-white/10 px-6 py-3 rounded-full font-medium transition-colors">
              <MessageSquare className="w-4 h-4" />
              Live Chat
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};