export const Testimonials = () => {
  const feedback = [
    { name: 'Sarah M.', quote: 'Best trip ever! Everything was smooth and beautiful.' },
    { name: 'John D.', quote: 'Their planning was on point — I’ll book again.' },
    { name: 'Aisha R.', quote: 'Great service and guidance, even mid-trip!' },
    { name: 'Rahul N.', quote: 'They made my honeymoon unforgettable. Five stars!' },
  ];

  return (
    <section className="py-20 bg-white" id="testimonials" data-aos="fade-up">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold text-[#003057] mb-4">What Our Travelers Say</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">Real stories from happy travelers who trusted InspireGO.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
          {feedback.map((review, i) => (
            <div key={i} className="bg-blue-50 p-6 rounded-3xl shadow-md" data-aos="zoom-in" data-aos-delay={`${i * 100}`}>
              <p className="text-sm text-gray-700 italic">“{review.quote}”</p>
              <p className="mt-4 font-semibold text-[#009FE3]">- {review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
