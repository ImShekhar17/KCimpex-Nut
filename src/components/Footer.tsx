import { Linkedin, Instagram, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  const productLinks = ['Nuts', 'Bolts', 'Washers', 'Screws', 'Studs', 'Round Bar', 'Pipe', 'Pipe Fittings'];
  const materialLinks = [
    'Stainless Steel',
    'Duplex and SuperDuplex',
    'Alloys Steel',
    'High Nickel Alloys',
    'Carbon Steel'
  ];
  const usefulLinks = ['Home', 'About', 'Products', 'Materials', 'Contact'];

  return (
    <footer className="relative bg-gray-900 text-white py-10 md:py-12 lg:py-16">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1920)'
        }}
      ></div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-10 lg:gap-12 mb-8 md:mb-10 lg:mb-12">
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">About</h3>
            <p className="text-gray-300 text-xs md:text-sm leading-relaxed mb-4 md:mb-6">
              {/* HORIZON METAL AND ALLOYS manufacturer and Exporter stainless steel and super alloy fastener. */}
              HORIZON METAL AND ALLOYS: Your top source for high-quality fittings, fasteners, nuts, bolts, and washers in high-performance alloys. With a decade of expertise, we deliver excellence, reliability, and prompt service to meet your engineering needs.
            </p>

            <h4 className="text-base md:text-lg font-bold mb-3 md:mb-4">Social</h4>
            <div className="flex flex-wrap gap-2 md:gap-3">
              <a href="#" className="bg-white text-gray-900 p-1.5 md:p-2 rounded hover:bg-gray-200 transition-colors">
                <Linkedin size={18} className="md:w-5 md:h-5" />
              </a>
              <a href="#" className="bg-white text-gray-900 p-1.5 md:p-2 rounded hover:bg-gray-200 transition-colors">
                <Instagram size={18} className="md:w-5 md:h-5" />
              </a>
              <a href="#" className="bg-white text-gray-900 p-1.5 md:p-2 rounded hover:bg-gray-200 transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px] md:w-5 md:h-5">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="bg-white text-gray-900 p-1.5 md:p-2 rounded hover:bg-gray-200 transition-colors">
                <Facebook size={18} className="md:w-5 md:h-5" />
              </a>
              <a href="#" className="bg-white text-gray-900 p-1.5 md:p-2 rounded hover:bg-gray-200 transition-colors">
                <Youtube size={18} className="md:w-5 md:h-5" />
              </a>
              <a href="#" className="bg-white text-gray-900 p-1.5 md:p-2 rounded hover:bg-gray-200 transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px] md:w-5 md:h-5">
                  <path d="M19.199 24C19.199 13.467 10.533 4.8 0 4.8V0c13.165 0 24 10.835 24 24h-4.801zM3.291 17.415c1.814 0 3.293 1.479 3.293 3.295 0 1.813-1.485 3.29-3.301 3.29C1.47 24 0 22.526 0 20.71s1.475-3.294 3.291-3.295zM15.909 24h-4.665c0-6.169-5.075-11.245-11.244-11.245V8.09c8.727 0 15.909 7.184 15.909 15.91z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Product</h3>
            <ul className="space-y-2">
              {productLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white text-xs md:text-sm flex items-center gap-2">
                    <span className="text-gray-500">»</span> {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Materials</h3>
            <ul className="space-y-2">
              {materialLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white text-xs md:text-sm flex items-center gap-2">
                    <span className="text-gray-500">»</span> {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Usefull Links</h3>
            <ul className="space-y-2">
              {usefulLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white text-xs md:text-sm flex items-center gap-2">
                    <span className="text-gray-500">»</span> {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Newsletter</h3>
            <form className="mb-4 md:mb-6">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="flex-1 px-3 md:px-4 py-2 bg-white/10 border border-white/20 rounded-l text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]"
                />
                <button
                  type="submit"
                  className="bg-[#1e3a8a] text-white px-3 md:px-4 py-2 rounded-r hover:bg-[#1e4cb8] transition-colors text-xs md:text-sm"
                >
                  Subscribe
                </button>
              </div>
            </form>

            <div>
              <h4 className="text-base md:text-lg font-semibold mb-2 md:mb-3">Get in Touch With Us</h4>
              <div className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-300">
                <p className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  +91 22 66151888
                </p>
                {/* <p className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  +91 22 66151888
                </p> */}
                <p className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                  info@horizon-metal.com
                </p>
                <p className="flex items-start gap-2">
                  <svg className="w-4 h-4 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                  Rahimtulla Ladak Bldg., 46 A, Khetwadi 10th Lane, Mumbai 400 004.aar,Mumbai-400010
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 md:pt-8">
          <p className="text-center text-xs md:text-sm text-gray-400 mb-3 md:mb-4">
            Manufacturer, Fabricator, Stockholder, Suppliers, Traders, Wholesaler, Dealer, Distributor, Importer, Exporter, Stockist of Alloy Steel Nuts & Bolts, Washers Nickel - Monel® - Inconel® - Incoloy® - Hastelloy® - Alloy 20 - Duplex are the registered trademarks of their respective owners.
          </p>
          <p className="text-center text-xs md:text-sm text-gray-400">
            © 2025 K.C. Impex All Right Reserved, Design And Developed By{' '}
            <a href="#" className="text-[#1e3a8a] hover:underline">Lalit Kumar</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
