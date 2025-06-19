import dest1 from '../assets/dest1.jpg';
import dest2 from '../assets/dest2.jpg';
import dest3 from '../assets/dest3.jpg';
import dest4 from '../assets/dest4.jpg';
import dest5 from '../assets/dest5.jpg';
import dest6 from '../assets/dest6.jpg';

export const Destinations = () => {
  const places = [
    { title: 'Bali, Indonesia', image: dest1, desc: 'Island of Gods with beaches, temples, and culture.' },
    { title: 'Paris, France', image: dest2, desc: 'The city of love, art, and stunning architecture.' },
    { title: 'Kyoto, Japan', image: dest3, desc: 'Traditional temples, cherry blossoms, and gardens.' },
    { title: 'Santorini, Greece', image: dest4, desc: 'Iconic white villages and sunsets over the sea.' },
    { title: 'Dubai, UAE', image: dest5, desc: 'Modern luxury, deserts, and futuristic architecture.' },
    { title: 'Cape Town, South Africa', image: dest6, desc: 'Mountains, wine tours, and wildlife safaris.' },
  ];

  return (
    <section className="py-20 bg-white" id="destinations" data-aos="fade-up">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold text-[#003057] mb-4">Top Destinations</h2>
        <p className="text-gray-600 mb-10 max-w-xl mx-auto">Discover breathtaking destinations tailored to create lifelong memories.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {places.map((item, i) => (
            <div key={i} className="bg-blue-50 rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition" data-aos="zoom-in" data-aos-delay={`${i * 100}`}>
              <img src={item.image} alt={item.title} className="h-56 w-full object-cover" />
              <div className="p-5 text-left">
                <h3 className="text-xl font-bold text-[#009FE3]">{item.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
