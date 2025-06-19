import { Briefcase, Compass, ShieldCheck, Plane, Users, HelpCircle } from 'lucide-react';

export const Services = () => {
  const services = [
    { icon: Briefcase, title: 'Custom Packages', desc: 'Tailor-made plans to match your travel style.' },
    { icon: Compass, title: 'Guided Tours', desc: 'Discover with local experts who know the land best.' },
    { icon: ShieldCheck, title: 'Travel Insurance', desc: 'Enjoy peace of mind with safe, covered trips.' },
    { icon: Plane, title: 'Flight Booking', desc: 'We get the best routes at the best rates.' },
    { icon: Users, title: 'Group & Solo Trips', desc: 'Travel alone or join a tribe — we plan both.' },
    { icon: HelpCircle, title: '24/7 Support', desc: 'We’re with you from start to end, always.' },
  ];

  return (
    <section className="py-20 bg-blue-50" id="services" data-aos="fade-up">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold text-[#003057] mb-4">Our Services</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">Experience stress-free planning, amazing guidance, and premium service.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <div key={i} className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-xl transition" data-aos="zoom-in" data-aos-delay={`${i * 100}`}>
              <service.icon className="text-[#009FE3] mb-4 h-10 w-10 mx-auto" />
              <h3 className="text-xl font-semibold text-[#003057]">{service.title}</h3>
              <p className="text-gray-600 mt-2 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
