import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const slides = [
  {
    image: '/HeroA.jpg',
    title: 'Your One-Stop Destination for Fastener Needs',
    description: 'With our expertise in manufacturing high-quality bolts and nuts, we are your ultimate destination for all fastener requirements.'
  },
  {
    image: '/HeroB.jpg',
    title: 'Commitment to Excellence and Quality Standards',
    description: 'Our dedication to excellence and adherence to stringent quality standards make us professionals in the field of industrial fasteners.'
  },
  {
    image: '/HeroC.jpg',
    title: 'Professional Manufacturers & Exporter of Bolts and Nuts',
    description: 'We provide a comprehensive range of industrial fasteners, including nuts, bolts, and washers, manufactured to the highest standards of quality and precision.'
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
          }}
        ></div>
      ))}

      <div className="relative z-20 h-full flex items-center justify-center">
        <div className="text-center text-white px-4 max-w-5xl">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
            {slides[currentSlide].title}
          </h1>
          <p className="text-sm md:text-lg lg:text-xl mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed">
            {slides[currentSlide].description}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <button className="bg-white text-[#1e3a8a] px-6 md:px-8 py-2 md:py-3 rounded font-semibold hover:bg-gray-100 transition-colors">
              Know More
            </button>
            <button className="bg-[#1e3a8a] text-white px-6 md:px-8 py-2 md:py-3 rounded font-semibold hover:bg-[#1e4cb8] transition-colors">
              Inquiry Now
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-30 text-white bg-black/30 hover:bg-black/50 p-2 md:p-3 rounded-full transition-colors"
      >
        <ChevronLeft size={24} className="md:w-8 md:h-8" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-30 text-white bg-black/30 hover:bg-black/50 p-2 md:p-3 rounded-full transition-colors"
      >
        <ChevronRight size={24} className="md:w-8 md:h-8" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-[#1e3a8a] w-8' : 'bg-white/50 hover:bg-white/70'
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}
