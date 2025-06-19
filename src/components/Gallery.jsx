import img1 from '../assets/gallery1.jpg';
import img2 from '../assets/gallery2.jpg';
import img3 from '../assets/gallery3.jpg';
import img4 from '../assets/gallery4.jpg';
import img5 from '../assets/gallery5.jpg';
import img6 from '../assets/gallery6.jpg';

export const Gallery = () => {
  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <section className="py-20 bg-blue-50" id="gallery" data-aos="fade-up">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold text-[#003057] mb-4">Travel Gallery</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">Peek into some unforgettable moments from our journeys.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <img key={i} src={img} alt="Travel Moment" className="rounded-xl w-full h-64 object-cover shadow-md hover:scale-105 transition" data-aos="zoom-in" data-aos-delay={`${i * 100}`} />
          ))}
        </div>
      </div>
    </section>
  );
};