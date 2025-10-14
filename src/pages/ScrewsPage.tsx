import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import WhatsAppButton from '../components/WhatsAppButton';
import FeedbackButton from '../components/FeedbackButton';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function ScrewsPage() {
  const [expandedGrades, setExpandedGrades] = useState<string[]>([]);
  const [expandedSidebarGrades, setExpandedSidebarGrades] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState(0);

  const toggleGrade = (grade: string) => {
    setExpandedGrades(prev =>
      prev.includes(grade) ? prev.filter(g => g !== grade) : [...prev, grade]
    );
  };

  const toggleSidebarGrade = (grade: string) => {
    setExpandedSidebarGrades(prev =>
      prev.includes(grade) ? prev.filter(g => g !== grade) : [...prev, grade]
    );
  };

  const screwTypes = [
    {
      name: 'Hex Cap Screw',
      image: 'https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: 'Hex Screws',
      image: 'https://images.pexels.com/photos/162553/nuts-bolts-metal-fixing-162553.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: 'Socket Cap Screws',
      image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: 'Set Screws',
      image: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: 'Machine Screws',
      image: 'https://images.pexels.com/photos/209274/pexels-photo-209274.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: 'Wood Screws',
      image: 'https://images.pexels.com/photos/1409216/pexels-photo-1409216.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: 'Self-Tapping Screws',
      image: 'https://images.pexels.com/photos/162553/nuts-bolts-metal-fixing-162553.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: 'Sheet Metal Screws',
      image: 'https://images.pexels.com/photos/209274/pexels-photo-209274.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: 'Lag Screws',
      image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: 'Deck Screws',
      image: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: 'Drywall Screws',
      image: 'https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      name: 'Security Screws',
      image: 'https://images.pexels.com/photos/1409216/pexels-photo-1409216.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const productImages = [
    'https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/162553/nuts-bolts-metal-fixing-162553.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=600'
  ];

  const grades = [
    {
      id: 'inconel',
      name: 'INCONEL & INCOLOY®',
      subGrades: [
        'INCONEL 600',
        'INCONEL alloy 601',
        'INCONEL alloy X-750',
        'INCONEL alloy 625',
        'INCONEL alloy 690',
        'INCOLOY® alloy 800',
        'INCONEL® alloy 718',
        'INCOLOY alloy 825'
      ]
    },
    {
      id: 'nickel',
      name: 'NICKEL',
      subGrades: [
        'NICKEL 200',
        'NICKEL 201'
      ]
    },
    {
      id: 'hastelloy',
      name: 'HASTELLOY',
      subGrades: [
        'HASTELLOY C-276',
        'HASTELLOY C22',
        'HASTELLOY B-2',
        'HASTELLOY B-3',
        'HASTELLOY X'
      ]
    },
    {
      id: 'monel',
      name: 'MONEL',
      subGrades: [
        'MONEL alloy 400',
        'MONEL alloy K - 500'
      ]
    },
    {
      id: 'stainless',
      name: 'STAINLESS STEEL',
      subGrades: [
        'SS 309',
        'SS 310',
        'SS 310s',
        'SS 321',
        'SS 347',
        'SS 316Ti',
        'SS 17-4-Ph',
        'SS 15-5Ph'
      ]
    },
    {
      id: 'super-stainless',
      name: 'SUPER STAINLESS STEEL',
      subGrades: [
        '904L',
        'Alloy-20',
        'SMO 254',
        'A-286',
        '253-MA'
      ]
    },
    {
      id: 'duplex',
      name: 'DUPLEX & SUPER DUPLEX STAINLESS STEEL',
      subGrades: [
        'Duplex 2205',
        'Super Duplex 2507'
      ]
    },
    {
      id: 'titanium',
      name: 'TITANIUM ALLOYS',
      subGrades: [
        'CP Titanium Grade 1',
        'Titanium Grade 5 / 6AL4V',
        'Titanium Grade 11',
        'CP Titanium Grade 2',
        'CP Titanium Grade 4',
        'Titanium Grade 6 / SAl 2.5Sn',
        'Titanium Grade 12',
        'CP Titanium Grade 7'
      ]
    },
    {
      id: 'hard',
      name: 'HARD TO FIND ALLOYS',
      subGrades: [
        'Tantalum',
        'Niobium',
        'Tungsten',
        'Gallium',
        'Molybdenum',
        'Rhenium',
        'Hafnium',
        'Indium',
        'Beryllium Copper',
        'Vanadium',
        'Germanium',
        'Hardox'
      ]
    }
  ];

  const applications = [
    'Oil & Gas Industry',
    'Power Plant',
    'Marine & Ship Building Industry',
    'Refining Industry',
    'Automotive Industry',
    'Pharmaceutical Industry',
    'Engineering Sector',
    'Engine & Turbines',
    'Aerospace Industry',
    'Construction Industry'
  ];

  const applicationImages = [
    'https://images.pexels.com/photos/3862628/pexels-photo-3862628.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/1059119/pexels-photo-1059119.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/257700/pexels-photo-257700.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/2768961/pexels-photo-2768961.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/163726/aircraft-holiday-sun-tourism-163726.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=400'
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div
        className="relative bg-cover bg-center py-32"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg?auto=compress&cs=tinysrgb&w=1260)',
        }}
      >
        <div className="absolute inset-0 bg-[#1e3a8a] bg-opacity-80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl font-bold text-white mb-4">SCREWS</h1>
          <div className="flex items-center gap-2 text-white text-lg">
            <Link to="/" className="hover:underline">Home</Link>
            <span>→</span>
            <span className="font-semibold">Screws</span>
          </div>
        </div>
      </div>

      <div className="flex-grow bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Welcome to K.C. Impex - Your Premier Screws Manufacturer and Supplier in India
                </h2>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    A screw is indeed a versatile fastener with a threaded shaft that's invaluable for joining objects together. The beauty of a screw lies in its self-threading capability, eliminating the need for a separate nut. Take, for instance, the <span className="text-[#2563eb] font-semibold">Duplex S31803 Hex Cap Screw</span>: a sturdy option designed to effortlessly create its own threads within the material it's inserted into, ensuring a secure fit without the fuss of extra hardware.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Screws, in their myriad forms, are indispensable across countless environments, from household to industrial. The <span className="text-[#2563eb]">SUPER DUPLEX UNS S32750 Hex Screw</span> stands as a stalwart in woodworking and metalwork, adeptly assembling furniture and structural elements with its renowned durability and corrosion resistance. Meanwhile, <span className="font-semibold">Stainless Steel Hex Screws</span> transcend boundaries, seamlessly integrating into electrical and plumbing systems, ensuring secure connections that withstand the test of time. These screws embody versatility and reliability, embodying the essence of modern fastening solutions across diverse applications and industries.
                  </p>
                </div>
              </div>

              <div className="mb-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  <div className="bg-white border border-gray-300 rounded-lg overflow-hidden shadow-sm">
                    <table className="w-full">
                      <tbody className="divide-y divide-gray-300">
                        <tr>
                          <td className="px-4 py-3 bg-gray-50 font-semibold text-gray-800 border-r border-gray-300">DIAMETER</td>
                          <td className="px-4 py-3 text-gray-700">M3 - M56 | 3/6" to 2" | Custom Sizes</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 bg-gray-50 font-semibold text-gray-800 border-r border-gray-300">DIAMETER</td>
                          <td className="px-4 py-3 text-gray-700">M02 TO M55 (HOT FORGED)</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 bg-gray-50 font-semibold text-gray-800 border-r border-gray-300">LENGTHS</td>
                          <td className="px-4 py-3 text-gray-700">UP TO 300 MM</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 bg-gray-50 font-semibold text-gray-800 border-r border-gray-300">Size</td>
                          <td className="px-4 py-3 text-gray-700">3 mm to 200 mm</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 bg-gray-50 font-semibold text-gray-800 border-r border-gray-300">THREAD LENGTH</td>
                          <td className="px-4 py-3 text-gray-700">MM THREADS & PARTIALLY THREADED</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 bg-gray-50 font-semibold text-gray-800 border-r border-gray-300">THREAD TYPE</td>
                          <td className="px-4 py-3 text-gray-700">MM THREADS & BSW THREADS</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 bg-gray-50 font-semibold text-gray-800 border-r border-gray-300">STANDARD FOLLOWED</td>
                          <td className="px-4 py-3 text-gray-700">DIN, ASTM, BS and all International Standards</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="bg-white rounded-lg shadow-sm p-4">
                    <div className="flex items-center justify-center mb-6">
                      <img
                        src={productImages[selectedImage]}
                        alt="Main Product"
                        className="w-full max-w-sm h-72 object-cover rounded-lg shadow-md transition-all duration-300"
                      />
                    </div>
                    <div className="flex justify-center gap-3">
                      {productImages.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => setSelectedImage(idx)}
                          className={`w-16 h-16 rounded overflow-hidden border-2 transition-all shadow-sm hover:shadow-md ${
                            selectedImage === idx
                              ? 'border-[#2563eb] ring-2 ring-[#2563eb] ring-opacity-50'
                              : 'border-gray-300 hover:border-[#2563eb]'
                          }`}
                        >
                          <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <h3 className="text-3xl font-bold text-gray-800 mb-2">Types of Screws</h3>
                <div className="w-16 h-1 bg-[#1e3a8a] mb-6"></div>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Ensure you select the appropriate Screws for your application, considering factors such as material, size, and load-bearing capacity, as each Screws boasts a unique design tailored for specific purposes. Below are some examples:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {screwTypes.map((screw, idx) => (
                    <div key={idx} className="group cursor-pointer">
                      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                        <div className="aspect-square overflow-hidden bg-gray-100">
                          <img
                            src={screw.image}
                            alt={screw.name}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>
                        <div className="p-4 text-center">
                          <h4 className="text-[#1e3a8a] font-semibold text-lg">{screw.name}</h4>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-12">
                <h3 className="text-3xl font-bold text-gray-800 mb-2">Grades</h3>
                <div className="w-16 h-1 bg-[#1e3a8a] mb-6"></div>

                <div className="space-y-4">
                  {grades.map((grade) => (
                    <div key={grade.id} className="border border-gray-300 rounded overflow-hidden">
                      <button
                        onClick={() => toggleGrade(grade.id)}
                        className="w-full px-5 py-3 bg-white hover:bg-gray-50 flex items-center justify-between text-left transition-colors"
                      >
                        <span className="text-gray-800 font-medium text-base">{grade.name}</span>
                        {grade.subGrades.length > 0 && (
                          expandedGrades.includes(grade.id) ? (
                            <ChevronDown size={18} className="text-gray-600" />
                          ) : (
                            <ChevronRight size={18} className="text-gray-600" />
                          )
                        )}
                      </button>

                      {expandedGrades.includes(grade.id) && grade.subGrades.length > 0 && (
                        <div className="bg-white border-t border-gray-300">
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
                            {grade.subGrades.map((subGrade, idx) => (
                              <a
                                key={idx}
                                href={`#${subGrade.toLowerCase().replace(/\s+/g, '-')}`}
                                className="group flex items-center justify-between px-5 py-3 border-b border-r border-gray-200 hover:bg-[#2563eb] hover:text-white transition-colors duration-200 last:border-b-0"
                              >
                                <span className="text-sm">{subGrade}</span>
                                <ChevronRight size={14} className="text-gray-400 group-hover:text-white transition-colors" />
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-12">
                <h3 className="text-3xl font-bold text-gray-800 mb-2">Applications Of Screws</h3>
                <div className="w-16 h-1 bg-[#1e3a8a] mb-6"></div>

                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-1">
                    <ul className="space-y-3">
                      {applications.map((app, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-gray-700 text-lg">
                          <div className="w-2 h-2 rounded-full bg-[#1e3a8a] flex-shrink-0"></div>
                          <span>{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex-1">
                    <div className="grid grid-cols-3 gap-3">
                      {applicationImages.map((img, idx) => (
                        <div
                          key={idx}
                          className="relative group"
                          style={{
                            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
                          }}
                        >
                          <div className="aspect-square overflow-hidden">
                            <img
                              src={img}
                              alt={`Application ${idx + 1}`}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden shadow-lg">
                <div className="bg-gray-100 px-6 py-4 border-b-2 border-gray-200">
                  <h3 className="text-xl font-bold text-gray-800">Our Products</h3>
                </div>

                <div className="p-4">
                  <div className="space-y-2 mb-6">
                    <Link
                      to="/products/bolts"
                      className="block px-4 py-3 bg-gray-50 hover:bg-[#2563eb] hover:text-white rounded transition-colors flex items-center justify-between group"
                    >
                      <span className="font-medium">Bolt</span>
                      <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <Link
                      to="/products/nuts"
                      className="block px-4 py-3 bg-gray-50 hover:bg-[#2563eb] hover:text-white rounded transition-colors flex items-center justify-between group"
                    >
                      <span className="font-medium">Nuts</span>
                      <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <Link
                      to="/products/washers"
                      className="block px-4 py-3 bg-gray-50 hover:bg-[#2563eb] hover:text-white rounded transition-colors flex items-center justify-between group"
                    >
                      <span className="font-medium">Washers</span>
                      <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <div className="block px-4 py-3 bg-gray-50 border-l-4 border-[#2563eb] flex items-center justify-between">
                      <span className="font-medium text-gray-800">Screws</span>
                      <ChevronRight size={18} className="text-gray-800" />
                    </div>

                    <Link
                      to="/products/studs"
                      className="block px-4 py-3 bg-gray-50 hover:bg-[#2563eb] hover:text-white rounded transition-colors flex items-center justify-between group"
                    >
                      <span className="font-medium">Studs</span>
                      <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <Link
                      to="/products"
                      className="block px-4 py-3 bg-gray-50 hover:bg-[#2563eb] hover:text-white rounded transition-colors flex items-center justify-between group"
                    >
                      <span className="font-medium">Round Bar</span>
                      <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <Link
                      to="/products"
                      className="block px-4 py-3 bg-gray-50 hover:bg-[#2563eb] hover:text-white rounded transition-colors flex items-center justify-between group"
                    >
                      <span className="font-medium">Pipe</span>
                      <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <Link
                      to="/products"
                      className="block px-4 py-3 bg-gray-50 hover:bg-[#2563eb] hover:text-white rounded transition-colors flex items-center justify-between group"
                    >
                      <span className="font-medium">Pipe Fittings</span>
                      <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  <div className="border-t-2 border-gray-200 pt-4">
                    <h4 className="text-lg font-bold text-gray-800 mb-4 px-2">Material</h4>
                    <div className="space-y-1">
                      {grades.map((grade) => (
                        <div key={grade.id} className="border border-gray-300 rounded overflow-hidden">
                          <button
                            onClick={() => toggleSidebarGrade(grade.id)}
                            className="w-full text-left px-4 py-3 bg-white hover:bg-gray-50 transition-colors flex items-center justify-between"
                          >
                            <span className="font-medium text-gray-800 text-sm">{grade.name}</span>
                            {grade.subGrades.length > 0 && (
                              expandedSidebarGrades.includes(grade.id) ? (
                                <ChevronDown size={16} className="text-gray-600 flex-shrink-0" />
                              ) : (
                                <ChevronRight size={16} className="text-gray-600 flex-shrink-0" />
                              )
                            )}
                          </button>

                          {expandedSidebarGrades.includes(grade.id) && grade.subGrades.length > 0 && (
                            <div className="bg-white border-t border-gray-300">
                              {grade.subGrades.map((subGrade, idx) => (
                                <a
                                  key={idx}
                                  href={`#${subGrade.toLowerCase().replace(/\s+/g, '-')}`}
                                  className="group flex items-center justify-between px-5 py-2.5 text-sm text-gray-700 hover:bg-[#2563eb] hover:text-white transition-colors duration-200 border-b border-gray-200 last:border-b-0"
                                >
                                  <span>{subGrade}</span>
                                  <ChevronRight size={12} className="text-gray-400 group-hover:text-white transition-colors flex-shrink-0" />
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="relative bg-cover bg-center py-20"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1260)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/80"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contact K.C. Impex Today
          </h2>
          <p className="text-white text-lg md:text-xl max-w-4xl mx-auto mb-8 leading-relaxed">
            Choose K.C. Impex for your screw needs and experience the difference quality, expertise, and commitment can make in your projects. Contact us today to discuss your requirements, request a quote, or place an order. Join countless satisfied customers who rely on K.C. Impex for premium screws and exceptional service.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#2563eb] hover:bg-[#1e40af] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg hover:shadow-xl"
          >
            Let's Contact Us
            <ChevronRight size={20} />
          </Link>
        </div>
      </div>

      <Footer />
      <ScrollToTop />
      <WhatsAppButton />
      <FeedbackButton />
    </div>
  );
}
