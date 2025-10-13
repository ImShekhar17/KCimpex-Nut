import { ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <div className="text-[#6b7280] uppercase text-sm font-medium mb-2 tracking-wide">
              ABOUT OUR COMPANY
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
              Welcome to <span className="text-[#1e3a8a]">K.C. Impex</span>
            </h2>

            <div className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-700 leading-relaxed">
              <p>
                We are proud to introduce M/s. K C IMPEX, a well-established leader in the field of High-Pressure
                Exotic Metals and a wide range of Ferrous and Non-Ferrous Metals. With business operations
                spanning both domestic and international markets, we have built a strong reputation for delivering
                high-quality products and exceptional service.
              </p>

              <p>
                Our diverse product portfolio includes Copper, Brass, Titanium (Grade-2/-5/-6/-7), Aluminium, Zinc,
                Lead, Monel (400 and 500), Nickel, Inconel/Incoloy, Hastelloy (C-276/C-22/B), 904L, SMO254, AL6XN,
                Super Duplex, Tantalum, Zirconium, Stainless Steel, Carbon Steel, and Alloy Steel products in various
                forms such as fasteners, fittings, tubular, and flat products.
              </p>

              <p>
                Specifically, we excel in manufacturing a wide range of fasteners, high-pressure pipe fittings, flanges,
                and finger safety tools catering to diverse industrial requirements.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 md:gap-8 my-6 md:my-8">
              <img src="https://images.pexels.com/photos/8369648/pexels-photo-8369648.jpeg?auto=compress&cs=tinysrgb&w=120&h=80" alt="Government of India" className="h-12 md:h-16 object-contain grayscale" />
              <img src="https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?auto=compress&cs=tinysrgb&w=120&h=80" alt="ISO Certified" className="h-12 md:h-16 object-contain" />
              <img src="https://images.pexels.com/photos/5650026/pexels-photo-5650026.jpeg?auto=compress&cs=tinysrgb&w=120&h=80" alt="Make in India" className="h-12 md:h-16 object-contain grayscale" />
            </div>

            <button className="bg-[#4a6fa5] text-white px-5 md:px-6 py-2 md:py-3 rounded font-medium hover:bg-[#5a7fb5] transition-colors flex items-center gap-2 text-sm md:text-base">
              Read More <ArrowRight size={16} className="md:w-[18px] md:h-[18px]" />
            </button>
          </div>

          <div className="relative mt-8 lg:mt-0">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1249610/pexels-photo-1249610.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Industrial fasteners"
                className="rounded-lg shadow-xl w-full"
              />
              <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4 bg-gray-800/80 text-white px-4 py-2 md:px-6 md:py-3 rounded font-semibold text-sm md:text-base">
                Bolting Trust
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
