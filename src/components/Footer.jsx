export const Footer = () => (
  <footer className="bg-[#003057] text-white py-10 text-center">
    <div className="max-w-6xl mx-auto px-4">
      <p className="text-sm">&copy; {new Date().getFullYear()} InspireGO. All rights reserved.</p>
      <div className="mt-4 space-x-4">
        <a href="#about" className="hover:underline">About</a>
        <a href="#destinations" className="hover:underline">Destinations</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </div>
    </div>
  </footer>
);