import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function Hero() {
  const [currentSlide] = useState(0);

  return (
    <section className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      ></div>

      <div className="relative z-20 h-full flex items-center justify-center">
        <div className="text-center text-white px-4 max-w-5xl">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
            Professional Manufacturers &<br className="hidden sm:block" />
            Exporter of Bolts and Nuts
          </h1>
          <p className="text-sm md:text-lg lg:text-xl mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed">
            We provide a comprehensive range of industrial fasteners, including nuts, bolts, and
            washers, manufactured to the highest standards of quality and precision.
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

      <button className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-30 text-[#1e3a8a] bg-white/20 hover:bg-white/30 p-1 md:p-2 rounded">
        <ChevronLeft size={24} className="md:w-8 md:h-8" />
      </button>
      <button className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-30 text-[#1e3a8a] bg-white/20 hover:bg-white/30 p-1 md:p-2 rounded">
        <ChevronRight size={24} className="md:w-8 md:h-8" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        <div className="w-2 h-2 rounded-full bg-[#1e3a8a]"></div>
        <div className="w-2 h-2 rounded-full bg-white/50"></div>
        <div className="w-2 h-2 rounded-full bg-white/50"></div>
      </div>
    </section>
  );
}
