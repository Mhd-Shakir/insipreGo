export const Contact = () => (
  <section id="contact" className="py-20 bg-white" data-aos="fade-up">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <h2 className="text-4xl font-extrabold text-[#003057] mb-4">Get In Touch</h2>
      <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
        Reach out for bookings, questions or custom travel planning. We’ll respond as soon as possible.
      </p>

      <form
        action="https://formsubmit.co/your@email.com"
        method="POST"
        className="space-y-6 text-left"
      >
        {/* Redirect to your thank-you page after submission */}
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" />

        {/* Input Fields */}
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full p-4 border border-gray-300 rounded-xl"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className="w-full p-4 border border-gray-300 rounded-xl"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          className="w-full p-4 border border-gray-300 rounded-xl"
          required
        ></textarea>

        <button
          type="submit"
          className="w-full bg-[#009FE3] hover:bg-[#007ab8] text-white px-6 py-4 rounded-full font-semibold text-base shadow-md transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  </section>
);
