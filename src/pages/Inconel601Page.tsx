import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronDown } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import ScrollToTop from '../components/ScrollToTop';

const Inconel601Page = () => {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set(['INCONEL & INCOLOY®'])
  );

  const toggleCategory = (categoryTitle: string) => {
    setExpandedCategories((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(categoryTitle)) {
        newSet.delete(categoryTitle);
      } else {
        newSet.add(categoryTitle);
      }
      return newSet;
    });
  };

  const nutTypes = [
    'Hex Nuts', 'Heavy Hex Nut', 'Square Nut', 'Dome Nut',
    'Nyloc Nut', 'Wing Nut', 'Lock Nut', 'Cage Nut',
    'Coupling Nut', 'Cap Nut', 'Cross Hole Nut', 'Castle Nut'
  ];

  const boltTypes = [
    'Hex Bolt', 'Stud Bolt', 'Allen Bolt', 'Eye Bolt',
    'Anchor Bolt', 'Square Head Bolt', 'Hex Flange Bolt', 'Carriage Bolt',
    'Coil Bolt', 'J Bolt', 'L Bolt', 'T-Bolt',
    'U Bolt', 'Elevator Bucket Bolt'
  ];

  const washerTypes = [
    'Belleville Washers', 'Bonded Sealing Washers', 'Flat Washers', 'Lock Washers',
    'Spring Washers', 'Star Washers', 'Square Washer', 'Plain Washers',
    'Countersunk Washer'
  ];

  const chemicalComposition = [
    { element: 'Nickel, Ni', content: '58.0 – 63.0' },
    { element: 'Silicon, Si', content: '0.50 max' },
    { element: 'Carbon, C', content: '0.10 max' },
    { element: 'Cr', content: '21.0 – 25.0' },
    { element: 'Sulphur, S', content: '0.015max' },
    { element: 'Copper, Cu', content: '1.00 max' },
    { element: 'Iron, Fe', content: 'Balance' },
    { element: 'Manganese, Mn', content: '1.00 max' }
  ];

  const mechanicalProperties = [
    { property: 'Density', value: '8.1 g/cm3' },
    { property: 'Melting Point', value: '1411° C (2571° F)' },
    { property: 'Tensile Strength', value: 'Psi – 80,000 , MPa – 550' },
    { property: 'Yield Strength (0.2%Offset)', value: 'Psi – 30,000 , MPa – 205' },
    { property: 'Elongation', value: '30 %' }
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

  const productCategories = [
    { name: 'Bolt', link: '/products/bolts' },
    { name: 'Nuts', link: '/products/nuts' },
    { name: 'Washers', link: '/products/washers' },
    { name: 'Screws', link: '/products/screws' },
    { name: 'Studs', link: '/products/studs' },
    { name: 'Round Bar', link: '/products/round-bar' },
    { name: 'Pipe', link: '/products/pipe' },
    { name: 'Pipe Fittings', link: '/products/pipe-fittings' }
  ];

  const materialCategories = [
    {
      title: 'INCONEL & INCOLOY®',
      items: [
        { name: 'INCONEL 600', link: '/materials/inconel-600' },
        { name: 'INCONEL alloy 601', link: '/materials/inconel-alloy-601', active: true },
        { name: 'INCONEL alloy X-750', link: '/materials/inconel-alloy-x-750' },
        { name: 'INCONEL alloy 625', link: '/materials/inconel-alloy-625' },
        { name: 'INCONEL alloy 690', link: '/materials/inconel-alloy-690' },
        { name: 'INCOLOY® alloy 800', link: '/materials/incoloy-alloy-800' },
        { name: 'INCONEL® alloy 718', link: '/materials/inconel-alloy-718' },
        { name: 'INCOLOY alloy 825', link: '/materials/incoloy-alloy-825' },
      ],
    },
    {
      title: 'NICKEL',
      items: [
        { name: 'NICKEL 200', link: '/materials/nickel-200' },
        { name: 'NICKEL 201', link: '/materials/nickel-201' },
      ],
    },
    {
      title: 'HASTELLOY',
      items: [
        { name: 'HASTELLOY C-276', link: '/materials/hastelloy-c-276' },
        { name: 'HASTELLOY C22', link: '/materials/hastelloy-c22' },
        { name: 'HASTELLOY B-2', link: '/materials/hastelloy-b-2' },
        { name: 'HASTELLOY B-3', link: '/materials/hastelloy-b-3' },
        { name: 'HASTELLOY X', link: '/materials/hastelloy-x' },
      ],
    },
    {
      title: 'MONEL',
      items: [
        { name: 'MONEL alloy 400', link: '/materials/monel-alloy-400' },
        { name: 'MONEL alloy K - 500', link: '/materials/monel-alloy-k-500' },
      ],
    },
    {
      title: 'STAINLESS STEEL',
      items: [
        { name: 'SS 309', link: '/materials/ss-309' },
        { name: 'SS 310', link: '/materials/ss-310' },
        { name: 'SS 310s', link: '/materials/ss-310s' },
        { name: 'SS 321', link: '/materials/ss-321' },
        { name: 'SS 347', link: '/materials/ss-347' },
        { name: 'SS 316Ti', link: '/materials/ss-316ti' },
        { name: 'SS 17-4-Ph', link: '/materials/ss-17-4-ph' },
        { name: 'SS 15-5Ph', link: '/materials/ss-15-5ph' },
      ],
    },
    {
      title: 'SUPER STAINLESS STEEL',
      items: [
        { name: '904L', link: '/materials/904l' },
        { name: 'Alloy-20', link: '/materials/alloy-20' },
        { name: 'SMO 254', link: '/materials/smo-254' },
        { name: 'A-286', link: '/materials/a-286' },
        { name: '253-MA', link: '/materials/253-ma' },
      ],
    },
    {
      title: 'DUPLEX & SUPER DUPLEX STAINLESS STEEL',
      items: [
        { name: 'Duplex 2205', link: '/materials/duplex-2205' },
        { name: 'Super Duplex 2507', link: '/materials/super-duplex-2507' },
      ],
    },
    {
      title: 'TITANIUM ALLOYS',
      items: [
        { name: 'CP Titanium Grade 1', link: '/materials/cp-titanium-grade-1' },
        { name: 'Titanium Grade 5 / 6AL4V', link: '/materials/titanium-grade-5-6al4v' },
        { name: 'Titanium Grade 11', link: '/materials/titanium-grade-11' },
        { name: 'CP Titanium Grade 2', link: '/materials/cp-titanium-grade-2' },
        { name: 'CP Titanium Grade 4', link: '/materials/cp-titanium-grade-4' },
        { name: 'Titanium Grade 6 / 5Al 2.5Sn', link: '/materials/titanium-grade-6-5al-2-5sn' },
        { name: 'Titanium Grade 12', link: '/materials/titanium-grade-12' },
        { name: 'CP Titanium Grade 7', link: '/materials/cp-titanium-grade-7' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div
        className="relative bg-cover bg-center py-20"
        style={{
          backgroundImage:
            'linear-gradient(rgba(30, 64, 175, 0.85), rgba(30, 64, 175, 0.85)), url(https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-white mb-4">
            INCONEL 601
          </h1>
          <div className="flex items-center text-white text-sm mt-4">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span>INCONEL_alloy_601</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Inconel Fasteners Manufacturer, Supplier of Inconel 601 Bolts, Exporter of Inconel 601 Nuts and Bolts, Leading Inconel 601 Fasteners Manufacturers in India
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  <span className="text-[#1e3a8a] font-semibold">INCONEL 601</span> fasteners, alternatively referred to as Alloy 601 fasteners, embody a nickel-chromium alloy characterized by its composition, which typically includes around 58% nickel, 23% chromium, 1.5-3% aluminum, 1-2% manganese, and trace amounts of other elements like iron, silicon, and titanium. This unique amalgamation endows them with superb mechanical attributes, notably high tensile and yield strength at elevated temperatures, along with commendable creep resistance and stress rupture properties. These qualities render them suitable for applications in components subjected to cyclic loading conditions.
                </p>
                <p>
                  <span className="text-[#1e3a8a] font-semibold">INCONEL 601</span> is an iron-nickel alloy enriched with chromium and supplemented by other elements like aluminum, titanium, carbon, and silicon. Renowned for their exceptional resistance to oxidation and carburization, Inconel 601 Fasteners can withstand temperatures as high as 2200°F (1204°C). ASTM B166 Inconel 601 Fasteners exhibit commendable mechanical properties even under cryogenic conditions. Multiple variants of Inconel 601 Fasteners are accessible, including Inconel 601 Nuts, Inconel 601 Washers, among others.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Specifications of INCONEL 601
              </h2>
              <p className="text-gray-700 mb-6">
                Standard INCONEL 601 Fasteners specifications as per Fasteners manufacturers.
              </p>
              <table className="w-full border border-gray-300">
                <tbody>
                  <tr className="border-b border-gray-300">
                    <td className="px-6 py-3 bg-gray-50 font-semibold text-gray-900">Material</td>
                    <td className="px-6 py-3 text-gray-700">Inconel 601</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="px-6 py-3 bg-gray-50 font-semibold text-gray-900">Specification</td>
                    <td className="px-6 py-3 text-gray-700">IS/BS/ASTM</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="px-6 py-3 bg-gray-50 font-semibold text-gray-900">Standards</td>
                    <td className="px-6 py-3 text-gray-700">ASTM B166</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="px-6 py-3 bg-gray-50 font-semibold text-gray-900">Size</td>
                    <td className="px-6 py-3 text-gray-700">3 mm to 200 mm</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-3 bg-gray-50 font-semibold text-gray-900">Length</td>
                    <td className="px-6 py-3 text-gray-700">M02 to M33</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Types of INCONEL 601 Fasteners
              </h2>
              <p className="text-gray-700 mb-8">
                Each <span className="text-[#1e3a8a] font-semibold">INCONEL 601</span> Fasteners have unique design each of them are used in specific applications. Some of them are mentioned below.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="mb-4 flex justify-center">
                    <img
                      src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=400"
                      alt="Nut"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-[#1e3a8a] mb-4">Nut</h3>
                  <ul className="text-left space-y-2">
                    {nutTypes.map((type, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                        <ChevronRight className="w-4 h-4 text-[#1e3a8a] flex-shrink-0 mt-0.5" />
                        <span>{type}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-center">
                  <div className="mb-4 flex justify-center">
                    <img
                      src="https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg?auto=compress&cs=tinysrgb&w=400"
                      alt="Bolt"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-[#1e3a8a] mb-4">Bolt</h3>
                  <ul className="text-left space-y-2">
                    {boltTypes.map((type, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                        <ChevronRight className="w-4 h-4 text-[#1e3a8a] flex-shrink-0 mt-0.5" />
                        <span>{type}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-center">
                  <div className="mb-4 flex justify-center">
                    <img
                      src="https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=400"
                      alt="Washer"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-[#1e3a8a] mb-4">Washer</h3>
                  <ul className="text-left space-y-2">
                    {washerTypes.map((type, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                        <ChevronRight className="w-4 h-4 text-[#1e3a8a] flex-shrink-0 mt-0.5" />
                        <span>{type}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                INCONEL 601 Chemical Composition
              </h2>
              <p className="text-gray-700 mb-6">
                Note that this chart includes only some of the most common sizes of <span className="text-[#1e3a8a] font-semibold">INCONEL 601 Bolt</span>. There are many other sizes available as well, and some applications may require custom sizes or special configurations.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border border-gray-300">
                  <thead>
                    <tr className="bg-[#1e3a8a] text-white">
                      <th className="px-6 py-3 text-left font-semibold">INCONEL 601 Fasteners</th>
                      <th className="px-6 py-3 text-left font-semibold">Element (% By Mass)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {chemicalComposition.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-6 py-3 text-gray-900 font-medium">{item.element}</td>
                        <td className="px-6 py-3 text-gray-700">{item.content}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                INCONEL 601 Mechanical Properties
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border border-gray-300">
                  <tbody>
                    {mechanicalProperties.map((item, index) => (
                      <tr key={index} className="border-b border-gray-300">
                        <td className="px-6 py-3 bg-gray-50 font-semibold text-gray-900 w-1/3">
                          {item.property}
                        </td>
                        <td className="px-6 py-3 text-gray-700">{item.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-gray-900 inline-block pb-2">
                Applications Of INCONEL 601
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <ul className="space-y-3">
                    {applications.map((app, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <ChevronRight className="w-5 h-5 text-[#1e3a8a] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative">
                  <div className="grid grid-cols-3 gap-2">
                    <div className="hexagon-container">
                      <img
                        src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=300"
                        alt="Oil & Gas"
                        className="w-full h-32 object-cover rounded-lg"
                      />
                    </div>
                    <div className="hexagon-container">
                      <img
                        src="https://images.pexels.com/photos/256297/pexels-photo-256297.jpeg?auto=compress&cs=tinysrgb&w=300"
                        alt="Power Plant"
                        className="w-full h-32 object-cover rounded-lg"
                      />
                    </div>
                    <div className="hexagon-container">
                      <img
                        src="https://images.pexels.com/photos/8728557/pexels-photo-8728557.jpeg?auto=compress&cs=tinysrgb&w=300"
                        alt="Refining"
                        className="w-full h-32 object-cover rounded-lg"
                      />
                    </div>
                    <div className="hexagon-container">
                      <img
                        src="https://images.pexels.com/photos/906982/pexels-photo-906982.jpeg?auto=compress&cs=tinysrgb&w=300"
                        alt="Marine"
                        className="w-full h-32 object-cover rounded-lg"
                      />
                    </div>
                    <div className="hexagon-container">
                      <img
                        src="https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=300"
                        alt="Engineering"
                        className="w-full h-32 object-cover rounded-lg"
                      />
                    </div>
                    <div className="hexagon-container">
                      <img
                        src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=300"
                        alt="Construction"
                        className="w-full h-32 object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6 sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-4 pb-3 border-b-2 border-gray-200">
                Our Products
              </h3>
              <ul className="space-y-2">
                {productCategories.map((category) => (
                  <li key={category.name}>
                    <Link
                      to={category.link}
                      className="flex items-center justify-between px-4 py-3 bg-gray-50 hover:bg-[#1e3a8a] hover:text-white transition-colors rounded group"
                    >
                      <span className="font-medium">{category.name}</span>
                      <ChevronRight className="w-5 h-5" />
                    </Link>
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4 pb-3 border-b-2 border-gray-200">
                Material
              </h3>
              <div className="space-y-2">
                {materialCategories.map((category) => {
                  const isExpanded = expandedCategories.has(category.title);
                  return (
                    <div key={category.title} className="border border-gray-200 rounded overflow-hidden">
                      <button
                        onClick={() => toggleCategory(category.title)}
                        className="w-full px-4 py-3 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-semibold text-gray-900 text-left text-sm">{category.title}</span>
                        {isExpanded ? (
                          <ChevronDown className="w-4 h-4 text-gray-600" />
                        ) : (
                          <ChevronRight className="w-4 h-4 text-gray-600" />
                        )}
                      </button>

                      {isExpanded && (
                        <div className="px-2 pb-2 space-y-2">
                          {category.items.map((item) => (
                            <Link
                              key={item.name}
                              to={item.link}
                              className={`flex items-center justify-between px-3 py-2 border border-[#1e3a8a] rounded transition-colors group ${
                                item.active ? 'bg-[#6b8dd6] text-white' : 'hover:bg-blue-50'
                              }`}
                            >
                              <span className="text-sm font-medium">{item.name}</span>
                              <ChevronRight className="w-4 h-4" />
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="relative bg-cover bg-center py-16"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-white mb-4">
            Contact K.C. Impex Today
          </h2>
          <p className="text-white mb-8 leading-relaxed">
            Choose K.C. Impex for your bolt needs and experience the difference quality, expertise, and commitment can make in your projects. Contact us today to discuss your requirements, request a quote, or place an order. Join countless satisfied customers who rely on K.C. Impex for premium bolts and exceptional service.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#1e3a8a] text-white px-8 py-3 rounded font-semibold hover:bg-[#1e4cb8] transition-colors"
          >
            Let's Contact Us
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
};

export default Inconel601Page;
