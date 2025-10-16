import { Phone, Mail, MapPin, Search, ChevronRight, Info, X, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-[#1e3a8a] text-white py-2 px-4 hidden lg:block">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="text-white font-medium">
            Leading Manufacturers of High-Nickel Alloy Fasteners
          </div>
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <Phone size={18} />
              <div>
                <div className="font-semibold">Monday To Saturday</div>
                <div className="text-xs">9AM-9PM</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={18} />
              <div>
                <div className="font-semibold">+91 22 66151888</div>
                <div className="text-xs">info@horizon-metal.com</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={18} />
              <div>
                <div className="font-semibold">Rahimtulla Ladak Bldg.</div>
                <div className="text-xs">46 A, Khetwadi 10th Lane, Mumbai 400 004.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            <Link to="/" className="flex items-center gap-2">
              <img
                src="/HMA LOGO.jpg"
                alt="HMA Logo"
                className="w-16 h-16 md:w-20 md:h-20 object-contain"
              />
              <div>
                <div className="font-bold text-lg md:text-xl">Horizon</div>
                <div className="text-xs text-gray-600">METALS & ALLOYS</div>
              </div>
            </Link>

            <div className="hidden xl:flex items-center gap-8">
              <Link to="/" className="text-gray-700 hover:text-[#1e3a8a] font-medium">Home</Link>
              <Link to="/about" className="text-gray-700 hover:text-[#1e3a8a] font-medium">About</Link>

              {/* Products Dropdown */}
              <div className="relative group">
                <Link to="/products" className="text-gray-700 hover:text-[#1e3a8a] font-medium flex items-center gap-1">
                  Products <span className="text-xs">▼</span>
                </Link>

                {/* First Level Dropdown */}
                <div className="absolute left-0 top-full mt-2 w-56 bg-white rounded shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  {/* Fasteners */}
                  <div className="relative group/sub">
                    <button className="w-full px-6 py-3 text-left text-gray-700 hover:bg-gray-50 hover:text-[#1e3a8a] flex items-center justify-between border-b border-gray-100">
                      <span>Fasteners</span>
                      <ChevronRight size={16} />
                    </button>

                    {/* Fasteners Submenu */}
                    <div className="absolute left-full top-0 w-48 bg-white rounded shadow-xl opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200">
                      <Link to="/products/bolts" className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#1e3a8a] border-b border-gray-100">
                        Bolts
                      </Link>
                      <Link to="/products/nuts" className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#1e3a8a] border-b border-gray-100">
                        Nuts
                      </Link>
                      <Link to="/products/washers" className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#1e3a8a] border-b border-gray-100">
                        Washers
                      </Link>
                      <Link to="/products/screws" className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#1e3a8a] border-b border-gray-100">
                        Screws
                      </Link>
                      <Link to="/products/studs" className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#1e3a8a]">
                        Studs
                      </Link>
                    </div>
                  </div>

                  {/* Industrial Products */}
                  <div className="relative group/sub">
                    <button className="w-full px-6 py-3 text-left text-gray-700 hover:bg-gray-50 hover:text-[#1e3a8a] flex items-center justify-between">
                      <span>Industrial Products</span>
                      <ChevronRight size={16} />
                    </button>

                    {/* Industrial Products Submenu */}
                    <div className="absolute left-full top-0 w-48 bg-white rounded shadow-xl opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200">
                      <Link to="/products/round-bar" className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#1e3a8a] border-b border-gray-100">
                        Round Bar
                      </Link>
                      <Link to="/products/pipe" className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#1e3a8a] border-b border-gray-100">
                        Pipe
                      </Link>
                      <Link to="/products/pipe-fittings" className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#1e3a8a]">
                        Pipe Fittings
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Materials Dropdown */}
              <div className="relative group">
                <Link to="/materials" className="text-gray-700 hover:text-[#1e3a8a] font-medium flex items-center gap-1">
                  Materials <span className="text-xs">▼</span>
                </Link>

                {/* Materials Dropdown */}
                <div className="absolute left-0 top-full mt-2 w-56 bg-white rounded shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  {/* Nickel Alloys */}
                  <div className="relative group/sub">
                    <button className="w-full px-6 py-3 text-left text-gray-700 hover:bg-gray-50 hover:text-[#1e3a8a] flex items-center justify-between border-b border-gray-100">
                      <span>Nickel Alloys</span>
                      <ChevronRight size={16} />
                    </button>

                    {/* Nickel Alloys Submenu */}
                    <div className="absolute left-full top-0 w-48 bg-white rounded shadow-xl opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200">
                      <Link to="/materials/inconel-600" className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#1e3a8a] border-b border-gray-100">
                        INCONEL 600
                      </Link>
                      <Link to="/materials/inconel-alloy-601" className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#1e3a8a] border-b border-gray-100">
                        INCONEL 601
                      </Link>
                      <Link to="/materials/inconel-alloy-x-750" className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#1e3a8a] border-b border-gray-100">
                        INCONEL X-750
                      </Link>
                      <Link to="/materials/inconel-alloy-625" className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#1e3a8a] border-b border-gray-100">
                        INCONEL 625
                      </Link>
                      <Link to="/materials/inconel-alloy-690" className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#1e3a8a] border-b border-gray-100">
                        INCONEL 690
                      </Link>
                      <Link to="/materials/inconel-alloy-718" className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#1e3a8a]">
                        INCONEL 718
                      </Link>
                    </div>
                  </div>

                  {/* Stainless Steel */}
                  <div className="relative group/sub">
                    <button className="w-full px-6 py-3 text-left text-gray-700 hover:bg-gray-50 hover:text-[#1e3a8a] flex items-center justify-between border-b border-gray-100">
                      <span>Stainless Steel</span>
                      <ChevronRight size={16} />
                    </button>

                    {/* Stainless Steel Submenu */}
                    <div className="absolute left-full top-0 w-48 bg-white rounded shadow-xl opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200">
                      <Link to="/materials/ss-309" className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#1e3a8a] border-b border-gray-100">
                        SS 309
                      </Link>
                      <Link to="/materials/ss-310" className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#1e3a8a] border-b border-gray-100">
                        SS 310
                      </Link>
                      <Link to="/materials/ss-310s" className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#1e3a8a] border-b border-gray-100">
                        SS 310s
                      </Link>
                      <Link to="/materials/ss-321" className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#1e3a8a] border-b border-gray-100">
                        SS 321
                      </Link>
                      <Link to="/materials/ss-347" className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#1e3a8a] border-b border-gray-100">
                        SS 347
                      </Link>
                      <Link to="/materials/ss-316ti" className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#1e3a8a]">
                        SS 316Ti
                      </Link>
                    </div>
                  </div>

                  {/* Special Alloys */}
                  <div className="relative group/sub">
                    <button className="w-full px-6 py-3 text-left text-gray-700 hover:bg-gray-50 hover:text-[#1e3a8a] flex items-center justify-between">
                      <span>Special Alloys</span>
                      <ChevronRight size={16} />
                    </button>

                    {/* Special Alloys Submenu */}
                    <div className="absolute left-full top-0 w-56 bg-white rounded shadow-xl opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200">
                      <Link to="/materials/hastelloy-c-276" className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#1e3a8a] border-b border-gray-100">
                        HASTELLOY C-276
                      </Link>
                      <Link to="/materials/hastelloy-c22" className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#1e3a8a] border-b border-gray-100">
                        HASTELLOY C22
                      </Link>
                      <Link to="/materials/hastelloy-b-2" className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#1e3a8a] border-b border-gray-100">
                        HASTELLOY B-2
                      </Link>
                      <Link to="/materials/monel-alloy-400" className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#1e3a8a] border-b border-gray-100">
                        MONEL 400
                      </Link>
                      <Link to="/materials/monel-alloy-k-500" className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#1e3a8a]">
                        MONEL K-500
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technical Dropdown */}
              <div className="relative group">
                <button className="text-gray-700 hover:text-[#1e3a8a] font-medium flex items-center gap-1">
                  Technical <span className="text-xs">▼</span>
                </button>

                {/* Technical Dropdown */}
                <div className="absolute left-0 top-full mt-2 w-56 bg-white rounded shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  {/* Dimensions */}
                  <div className="relative group/sub">
                    <button className="w-full px-6 py-3 text-left text-gray-700 hover:bg-gray-50 hover:text-[#1e3a8a] flex items-center justify-between border-b border-gray-100">
                      <span>Dimensions</span>
                      <ChevronRight size={16} />
                    </button>

                    {/* Dimensions Submenu */}
                    <div className="absolute left-full top-0 w-56 bg-white rounded shadow-xl opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200">
                      <Link to="/technical/bolt-dimensions" className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#1e3a8a] border-b border-gray-100">
                        Bolt Dimensions
                      </Link>
                      <Link to="/technical/nut-dimensions" className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#1e3a8a] border-b border-gray-100">
                        Nut Dimensions
                      </Link>
                      <Link to="/technical/washer-dimensions" className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#1e3a8a]">
                        Washer Dimensions
                      </Link>
                    </div>
                  </div>

                  {/* Calculators */}
                  <div className="relative group/sub">
                    <button className="w-full px-6 py-3 text-left text-gray-700 hover:bg-gray-50 hover:text-[#1e3a8a] flex items-center justify-between">
                      <span>Calculation</span>
                      <ChevronRight size={16} />
                    </button>

                    {/* Calculators Submenu */}
                    <div className="absolute left-full top-0 w-56 bg-white rounded shadow-xl opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200">
                      {/* <a href="#weight-calculator" className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#1e3a8a] border-b border-gray-100">
                        Weight Calculator
                      </a> */}
                      <Link to="/technical/weight-chart" className="block px-6 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#1e3a8a]">
                        Weight Chart
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <Link to="/services" className="text-gray-700 hover:text-[#1e3a8a] font-medium">Services</Link>
              <Link to="/contact" className="text-gray-700 hover:text-[#1e3a8a] font-medium">Contact</Link>
              {/* <button className="bg-[#1e3a8a] text-white px-6 py-2 rounded font-medium hover:bg-[#1e4cb8]">
                Catalogue
              </button> */}
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="w-9 h-9 rounded-full bg-[#1e3a8a] text-white flex items-center justify-center hover:bg-[#1e4cb8] transition-colors"
              >
                <Info size={20} />
              </button>
              <button
                onClick={() => setIsSearchOpen(true)}
                className="text-gray-700 hover:text-[#1e3a8a] transition-colors"
              >
                <Search size={20} />
              </button>
            </div>

            <div className="flex xl:hidden items-center gap-3">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="text-gray-700 hover:text-[#1e3a8a] transition-colors"
              >
                <Search size={20} />
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-700 hover:text-[#1e3a8a] transition-colors"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>

          {isMobileMenuOpen && (
            <div className="xl:hidden border-t border-gray-200 py-4">
              <div className="flex flex-col space-y-3">
                <Link to="/" className="text-gray-700 hover:text-[#1e3a8a] font-medium px-4 py-2" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                <Link to="/about" className="text-gray-700 hover:text-[#1e3a8a] font-medium px-4 py-2" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
                <Link to="/products" className="text-gray-700 hover:text-[#1e3a8a] font-medium px-4 py-2" onClick={() => setIsMobileMenuOpen(false)}>Products</Link>
                <Link to="/materials" className="text-gray-700 hover:text-[#1e3a8a] font-medium px-4 py-2" onClick={() => setIsMobileMenuOpen(false)}>Materials</Link>
                <Link to="/services" className="text-gray-700 hover:text-[#1e3a8a] font-medium px-4 py-2" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
                <Link to="/contact" className="text-gray-700 hover:text-[#1e3a8a] font-medium px-4 py-2" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
                {/* <button className="bg-[#1e3a8a] text-white px-6 py-2 rounded font-medium hover:bg-[#1e4cb8] mx-4">
                  Catalogue
                </button> */}
                <button
                  onClick={() => { setIsContactModalOpen(true); setIsMobileMenuOpen(false); }}
                  className="text-gray-700 hover:text-[#1e3a8a] font-medium px-4 py-2 text-left"
                >
                  Contact Info
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Contact Information Modal */}
      {isContactModalOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-50"
            onClick={() => setIsContactModalOpen(false)}
          />
          <div className="fixed right-0 top-0 bottom-0 w-full sm:w-96 bg-white shadow-2xl z-50 overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-gray-800">Contact Information</h2>
                <button
                  onClick={() => setIsContactModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Phone className="text-[#1e3a8a]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">Monday To Saturday</h3>
                    <p className="text-gray-600">9AM-9PM</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Mail className="text-[#1e3a8a]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">Email Address</h3>
                    <p className="text-[#1e3a8a] hover:underline">
                      <a href="mailto:info@horizon-metal.com">info@horizon-metal.com</a>
                    </p>
                    {/* <p className="text-[#1e3a8a] hover:underline">
                      <a href="mailto:sales@kcimpex.com">sales@kcimpex.com</a>
                    </p> */}
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Phone className="text-[#1e3a8a]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">Phone Number</h3>
                    <p className="text-gray-600">
                      <a href="tel:+912266151888" className="hover:text-[#1e3a8a]">+91 22 66151888</a>
                    </p>
                    {/* <p className="text-gray-600">
                      <a href="tel:+912231693855" className="hover:text-[#1e3a8a]">+91 2231693855</a>
                    </p> */}
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-[#1e3a8a]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2">Office Address</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Address Rahimtulla Ladak Bldg.,<br />
                      46 A, Khetwadi 10th Lane,<br />
                      Mumbai 400004, Maharashtra, India.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {isSearchOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] animate-fadeIn"
            onClick={() => {
              setIsSearchOpen(false);
              setSearchQuery('');
            }}
          />
          <div className="fixed top-0 left-0 right-0 z-[101] animate-slideDown">
            <div className="bg-white shadow-2xl">
              <div className="container mx-auto px-4 py-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                    <Search className="text-[#1e3a8a]" size={28} />
                    Search
                  </h2>
                  <button
                    onClick={() => {
                      setIsSearchOpen(false);
                      setSearchQuery('');
                    }}
                    className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center text-gray-600 hover:text-gray-800 transition-all"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for products, materials, services..."
                    className="w-full px-6 py-4 pr-16 text-lg border-2 border-gray-200 rounded-full focus:outline-none focus:border-[#1e3a8a] focus:ring-4 focus:ring-[#1e3a8a]/10 transition-all"
                    autoFocus
                  />
                  <button className="absolute right-2 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-[#1e3a8a] hover:bg-[#1e4cb8] text-white rounded-full flex items-center justify-center transition-colors shadow-lg">
                    <Search size={20} />
                  </button>
                </div>

                {searchQuery && (
                  <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                    <p className="text-gray-600 text-sm">
                      Searching for: <span className="font-semibold text-gray-800">{searchQuery}</span>
                    </p>
                  </div>
                )}

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-white rounded-lg hover:shadow-md transition-all cursor-pointer group">
                    <div className="w-12 h-12 bg-[#1e3a8a]/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-[#1e3a8a]/20 transition-colors">
                      <span className="text-2xl">🔩</span>
                    </div>
                    <p className="text-sm font-semibold text-gray-700">Fasteners</p>
                  </div>

                  <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-white rounded-lg hover:shadow-md transition-all cursor-pointer group">
                    <div className="w-12 h-12 bg-[#1e3a8a]/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-[#1e3a8a]/20 transition-colors">
                      <span className="text-2xl">⚙️</span>
                    </div>
                    <p className="text-sm font-semibold text-gray-700">Materials</p>
                  </div>

                  <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-white rounded-lg hover:shadow-md transition-all cursor-pointer group">
                    <div className="w-12 h-12 bg-[#1e3a8a]/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-[#1e3a8a]/20 transition-colors">
                      <span className="text-2xl">🔧</span>
                    </div>
                    <p className="text-sm font-semibold text-gray-700">Services</p>
                  </div>

                  <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-white rounded-lg hover:shadow-md transition-all cursor-pointer group">
                    <div className="w-12 h-12 bg-[#1e3a8a]/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-[#1e3a8a]/20 transition-colors">
                      <span className="text-2xl">📋</span>
                    </div>
                    <p className="text-sm font-semibold text-gray-700">Catalogue</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
