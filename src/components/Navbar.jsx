import React, { useState, useEffect, useCallback } from "react";
import { Menu, X, Plane, MapPin, User, Phone, Share } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 10);
    // Update active link based on scroll position
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 100 && rect.bottom >= 100) {
        setActiveLink(`#${section.id}`);
      }
    });
  }, []);

  useEffect(() => {
    const throttledScroll = () => {
      let ticking = false;
      return () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            handleScroll();
            ticking = false;
          });
          ticking = true;
        }
      };
    };

    const scrollHandler = throttledScroll();
    window.addEventListener("scroll", scrollHandler, { passive: true });
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [handleScroll]);

  const toggleMenu = useCallback(() => {
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
    setIsOpen(prev => !prev);
  }, [isOpen]);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
    document.body.style.overflow = '';
    document.body.style.touchAction = '';
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", icon: <Plane className="w-4 h-4" aria-hidden="true" /> },
    { name: "Destinations", href: "#destinations", icon: <MapPin className="w-4 h-4" aria-hidden="true" /> },
    { name: "About", href: "#about", icon: <User className="w-4 h-4" aria-hidden="true" /> },
    { name: "Services", href: "#services", icon: <Share className="w-4 h-4" aria-hidden="true" /> },
    { name: "Contact", href: "#contact", icon: <Phone className="w-4 h-4" aria-hidden="true" /> },
  ];

  return (
    <>
      {/* Backdrop for mobile menu */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 lg:hidden"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      <nav
        className={`fixed w-full z-50 transition-all duration-500 ease-out
        ${isScrolled ? "py-0" : "py-2"}
        ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md  border-gray-200/30"
            : "bg-transparent"
        }
      `}
        aria-label="Main navigation"
      >
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <a 
                href="#home"
                onClick={closeMenu}
              >
                <img 
                  src={logo} 
                  alt="Company Logo" 
                  className={`transition-all duration-500 ${isScrolled ? "h-28 w-28" : "h-30 w-30"}`}
                  width="160" 
                  height="160"
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 group
                    ${
                      activeLink === link.href
                        ? "text-blue-600"
                        : isScrolled
                        ? "text-gray-700 hover:text-blue-600"
                        : "text-blue-600"
                    }
                  `}
                  aria-current={activeLink === link.href ? "page" : undefined}
                >
                  <span className="transition-transform group-hover:scale-110">
                    {link.icon}
                  </span>
                  <span>{link.name}</span>
                  <span className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-blue-600 transition-all duration-300 
                    ${activeLink === link.href ? "w-4/5" : "w-0 group-hover:w-4/5"}`}
                  />
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <button 
                className={`bg-[#009FE3] hover:bg-[#007ab8] text-white px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 
                  shadow-lg hover:shadow-xl transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                  ${isScrolled ? "" : "shadow-xl"}`}
                aria-label="Book Now"
              >
                Book Now
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className={`inline-flex items-center justify-center p-2 rounded-lg transition-all duration-300 ${
                  isScrolled
                    ? "text-gray-700 hover:bg-gray-100/50"
                    : "text-white hover:bg-white/20"
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                aria-expanded={isOpen}
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                <div className="relative w-6 h-6">
                  <Menu
                    className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                      isOpen ? "opacity-0 rotate-90 scale-75" : "opacity-100 rotate-0 scale-100"
                    }`}
                  />
                  <X
                    className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                      isOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-75"
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`lg:hidden fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] transform ${
            isOpen 
              ? "translate-y-0 opacity-100 visible"
              : "-translate-y-full opacity-0 invisible"
          }`}
          style={{ top: isScrolled ? "4rem" : "5.5rem" }}
          aria-hidden={!isOpen}
        >
          <div className="bg-white/95 backdrop-blur-lg border-b border-gray-200/30 shadow-xl rounded-b-2xl overflow-hidden">
            <div className="px-4 py-6 space-y-2">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 transition-all duration-300 
                    ${activeLink === link.href ? "bg-blue-50 text-blue-600" : "hover:bg-blue-50 hover:text-blue-600"}
                    focus:outline-none focus:ring-2 focus:ring-blue-500
                    ${isOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"}`}
                  style={{
                    transitionDelay: isOpen ? `${index * 75}ms` : "0ms",
                  }}
                  aria-current={activeLink === link.href ? "page" : undefined}
                >
                  <span className="transition-transform group-hover:scale-110">
                    {link.icon}
                  </span>
                  <span className="font-medium">{link.name}</span>
                </a>
              ))}
              <div className="pt-3">
                <button 
                  className="w-full bg-[#009FE3] hover:bg-[#007ab8] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 
                    shadow-lg hover:shadow-xl transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  aria-label="Book Now"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default React.memo(Navbar);