export const FAQSection = () => (
  <section className="py-24 bg-blue-50" data-aos="fade-up">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-4xl font-extrabold text-[#003057] text-center mb-4">Frequently Asked Questions</h2>
      <p className="text-gray-600 text-center mb-12">
        Got questions? We’ve got answers to help you book with confidence and travel stress-free.
      </p>
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-2xl shadow-md" data-aos="fade-right">
          <h3 className="font-semibold text-lg text-[#009FE3]">Do you offer custom travel packages?</h3>
          <p className="text-gray-700 mt-2 text-sm">Absolutely! You can personalize your trip by destination, duration, interests, and budget.</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-md" data-aos="fade-left" data-aos-delay="100">
          <h3 className="font-semibold text-lg text-[#009FE3]">Is travel insurance included?</h3>
          <p className="text-gray-700 mt-2 text-sm">Yes, basic travel insurance is included. We also offer premium coverage options.</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-md" data-aos="fade-right" data-aos-delay="200">
          <h3 className="font-semibold text-lg text-[#009FE3]">What if I need to cancel?</h3>
          <p className="text-gray-700 mt-2 text-sm">Our flexible cancellation policy allows changes or refunds up to 7 days before your trip.</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-md" data-aos="fade-left" data-aos-delay="300">
          <h3 className="font-semibold text-lg text-[#009FE3]">How do I make a booking or payment?</h3>
          <p className="text-gray-700 mt-2 text-sm">You can book online and pay securely using card, UPI, or bank transfer. Our team is here to help if needed.</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-md" data-aos="fade-right" data-aos-delay="400">
          <h3 className="font-semibold text-lg text-[#009FE3]">Do you provide visa assistance?</h3>
          <p className="text-gray-700 mt-2 text-sm">Yes! We help you with the visa application process and required documents.</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-md" data-aos="fade-left" data-aos-delay="500">
          <h3 className="font-semibold text-lg text-[#009FE3]">Can I travel solo or with a group?</h3>
          <p className="text-gray-700 mt-2 text-sm">Both! We offer group tours, private getaways, solo trips, and even corporate packages.</p>
        </div>
      </div>
    </div>
  </section>
);
