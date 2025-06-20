import React from "react";
import { MapPin, Phone, Mail, Clock, Globe } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#003057] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Globe className="w-8 h-8 text-[#009FE3]" />
              <span className="text-xl font-bold">InspireGO</span>
            </div>
            <p className="text-blue-100">
              Creating unforgettable travel experiences since 2010. We
              specialize in personalized journeys to the world's most inspiring
              destinations.
            </p>
            <div className="flex space-x-4 pt-2">
              {["Facebook", "Twitter", "Instagram", "LinkedIn"].map(
                (social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-blue-100 hover:text-[#009FE3] transition-colors"
                    aria-label={social}
                  >
                    <span className="sr-only">{social}</span>
                    <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                      {/* Icon would go here */}
                    </div>
                  </a>
                )
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "About Us", href: "#about" },
                { name: "Destinations", href: "#destinations" },
                { name: "Travel Services", href: "#services" },
                { name: "Special Offers", href: "#offers" },
                { name: "Travel Blog", href: "#blog" },
                { name: "Testimonials", href: "#testimonials" },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-blue-100 hover:text-[#009FE3] transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#009FE3] mt-0.5 flex-shrink-0" />
                <span className="text-blue-100">
                  123 Travel Street, Suite 456
                  <br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#009FE3] flex-shrink-0" />
                <a
                  href="tel:+18005551234"
                  className="text-blue-100 hover:text-[#009FE3] transition-colors"
                >
                  +1 (800) 555-1234
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#009FE3] flex-shrink-0" />
                <a
                  href="mailto:travel@inspirego.com"
                  className="text-blue-100 hover:text-[#009FE3] transition-colors"
                >
                  travel@inspirego.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#009FE3] flex-shrink-0" />
                <span className="text-blue-100">Mon-Fri: 9am-6pm EST</span>
              </li>
            </ul>
          </div>
          
          {/* Newsletter Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Travel Newsletter</h3>
            <p className="text-blue-100">
              Subscribe for exclusive deals, travel tips, and destination
              inspiration.
            </p>
            <form className="flex flex-col gap-3">
              <div className="flex flex-col sm:flex-row gap-3 w-full">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-grow px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#009FE3] w-full"
                  required
                />
                <button
                  type="submit"
                  className="bg-[#009FE3] hover:bg-[#007ab8] text-white px-6 py-3 sm:py-2 rounded-lg font-medium transition-colors whitespace-nowrap"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-blue-200">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-100 text-sm">
              &copy; {currentYear} InspireGO Travel. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-blue-100 hover:text-[#009FE3] text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-blue-100 hover:text-[#009FE3] text-sm transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-blue-100 hover:text-[#009FE3] text-sm transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
