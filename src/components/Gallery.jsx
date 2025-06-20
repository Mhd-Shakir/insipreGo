import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import gallery1 from '../assets/gallery1.jpg'
import gallery2 from '../assets/gallery2.jpg'
import gallery3 from '../assets/gallery3.jpg'
import gallery4 from '../assets/gallery4.jpg'
import gallery5 from '../assets/gallery5.jpg'
import gallery6 from '../assets/gallery6.jpg'

export const Gallery = () => {
  const images = [
    { src: gallery1, alt: 'Sunset over Santorini cliffs', location: 'Santorini, Greece' },
    { src: gallery2, alt: 'Traditional Japanese temple in Kyoto', location: 'Kyoto, Japan' },
    { src: gallery3, alt: 'Wildlife safari in Serengeti', location: 'Serengeti, Tanzania' },
    { src: gallery4, alt: 'Luxury beach resort in Maldives', location: 'Maldives' },
    { src: gallery5, alt: 'Northern lights in Iceland', location: 'Reykjavik, Iceland' },
    { src: gallery6, alt: 'Ancient ruins of Machu Picchu', location: 'Machu Picchu, Peru' },
    // { src: gallery7, alt: 'Parisian cafe scene', location: 'Paris, France' },
    // { src: '../assets/gallery8.jpg', alt: 'Great Barrier Reef snorkeling', location: 'Queensland, Australia' },
    // { src: '../assets/gallery9.jpg', alt: 'Desert safari in Dubai', location: 'Dubai, UAE' }
  ];

  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (img, index) => {
    setSelectedImage(img);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const navigate = (direction) => {
    let newIndex;
    if (direction === 'prev') {
      newIndex = (currentIndex - 1 + images.length) % images.length;
    } else {
      newIndex = (currentIndex + 1) % images.length;
    }
    setSelectedImage(images[newIndex]);
    setCurrentIndex(newIndex);
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-blue-50" id="gallery">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/4 right-10 w-60 h-60 bg-[#009FE3]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#009FE3]/10 text-[#009FE3] rounded-full text-sm font-semibold mb-4">
            Visual Journeys
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#003057] mb-4">
            Travel <span className="text-[#009FE3]">Gallery</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore breathtaking moments from around the world, captured by our travelers and guides.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <div 
              key={i}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => openModal(img, i)}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-72 object-cover transform transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-bold text-lg">{img.location}</h3>
                  <button className="mt-2 inline-flex items-center gap-1 text-sm bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                    <Maximize2 className="w-3 h-3" />
                    Expand
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur z-50 flex items-center justify-center p-4">
            <button 
              onClick={closeModal}
              className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            
            <button 
              onClick={() => navigate('prev')}
              className="absolute left-6 text-white hover:text-gray-300 transition-colors"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            
            <div className="max-w-5xl w-full">
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt} 
                className="w-full max-h-[80vh] object-contain rounded-lg" 
              />
              <div className="text-center mt-4 text-white">
                <h3 className="text-xl font-bold">{selectedImage.location}</h3>
                <p className="text-gray-300">{selectedImage.alt}</p>
              </div>
            </div>
            
            <button 
              onClick={() => navigate('next')}
              className="absolute right-6 text-white hover:text-gray-300 transition-colors"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>
        )}

        <div className="text-center mt-16">
          <button className="group inline-flex items-center justify-center gap-2 bg-[#009FE3] hover:bg-[#007ab8] text-white px-8 py-4 rounded-full font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            View More Destinations
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};