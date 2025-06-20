import React from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="relative py-20 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#009FE3]/10 to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-[#009FE3]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#009FE3]/10 text-[#009FE3] rounded-full text-sm font-semibold mb-4">
            Contact Us
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#003057] mb-4">
            Let's Plan Your <span className="text-[#009FE3]">Dream Trip</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our travel experts are ready to help you create unforgettable experiences. Reach out and we'll respond within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10 border border-gray-100">
            <h3 className="text-2xl font-bold text-[#003057] mb-8">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-[#009FE3]/10 p-3 rounded-lg flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#009FE3]" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Our Office</h4>
                  <p className="text-gray-600">123 Travel Street, Suite 456<br />New York, NY 10001</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#009FE3]/10 p-3 rounded-lg flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#009FE3]" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Call Us</h4>
                  <p className="text-gray-600">
                    <a href="tel:+18005551234" className="hover:text-[#009FE3] transition-colors">+1 (800) 555-1234</a><br />
                    Mon-Fri: 9am - 6pm EST
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#009FE3]/10 p-3 rounded-lg flex-shrink-0">
                  <Mail className="w-6 h-6 text-[#009FE3]" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Email Us</h4>
                  <p className="text-gray-600">
                    <a href="mailto:travel@inspirego.com" className="hover:text-[#009FE3] transition-colors">travel@inspirego.com</a><br />
                    Response time: within 24 hours
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#009FE3]/10 p-3 rounded-lg flex-shrink-0">
                  <Clock className="w-6 h-6 text-[#009FE3]" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Support Hours</h4>
                  <p className="text-gray-600">
                    Monday - Friday: 9am - 8pm EST<br />
                    Saturday: 10am - 4pm EST<br />
                    Emergency support available 24/7
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h4 className="font-semibold text-gray-800 mb-3">Follow Us</h4>
              <div className="flex gap-4">
                {['Facebook', 'Instagram', 'Twitter', 'LinkedIn'].map((social) => (
                  <a 
                    key={social} 
                    href="#" 
                    className="bg-gray-100 hover:bg-[#009FE3] hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                    aria-label={social}
                  >
                    <span className="sr-only">{social}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10 border border-gray-100">
            <h3 className="text-2xl font-bold text-[#003057] mb-8">Send Us a Message</h3>
            
            <form 
              action="https://formsubmit.co/your@email.com" 
              method="POST"
              className="space-y-6"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#009FE3] focus:border-[#009FE3] transition"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#009FE3] focus:border-[#009FE3] transition"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+1 (___) ___-____"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#009FE3] focus:border-[#009FE3] transition"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#009FE3] focus:border-[#009FE3] transition"
                  required
                >
                  <option value="">Select an option</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Booking Assistance">Booking Assistance</option>
                  <option value="Custom Itinerary">Custom Itinerary Request</option>
                  <option value="Group Travel">Group Travel Inquiry</option>
                  <option value="Feedback">Feedback/Suggestions</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell us about your travel plans..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#009FE3] focus:border-[#009FE3] transition"
                  required
                ></textarea>
              </div>

              <div className="flex items-center">
                <input
                  id="newsletter"
                  name="newsletter"
                  type="checkbox"
                  className="h-4 w-4 text-[#009FE3] focus:ring-[#009FE3] border-gray-300 rounded"
                />
                <label htmlFor="newsletter" className="ml-2 block text-sm text-gray-700">
                  Subscribe to our newsletter for travel tips and special offers
                </label>
              </div>

              <button
                type="submit"
                className="group w-full bg-[#009FE3] hover:bg-[#007ab8] text-white px-6 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                Send Message
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};