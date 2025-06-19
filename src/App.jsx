import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Component imports (replace these with correct paths)
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import { Destinations } from "./components/Destinations";
import { Services } from "./components/Services";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Testimonials } from "./components/Testimonials";
import { Gallery } from "./components/Gallery";
import { FAQSection } from "./components/FAQSection";
import { CTASection } from "./components/CTASection";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <div data-aos="fade-up"><Destinations /></div>
      <div data-aos="fade-up"><Services /></div>
      <div data-aos="fade-up"><WhyChooseUs /></div>
      <div data-aos="fade-up"><Testimonials /></div>
      <div data-aos="fade-up"><Gallery /></div>
      <div data-aos="fade-up"><FAQSection /></div>
      <div data-aos="zoom-in"><CTASection /></div>
      <div data-aos="fade-up"><Contact /></div>
      <Footer />
    </>
  );
}

export default App;
