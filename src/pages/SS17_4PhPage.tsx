import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronDown } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import ScrollToTop from '../components/ScrollToTop';

const SS17_4PhPage = () => {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set(['STAINLESS STEEL'])
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
        { name: 'INCONEL alloy 601', link: '/materials/inconel-alloy-601' },
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
        { name: 'SS 17-4-Ph', link: '/materials/ss-17-4-ph', active: true },
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

<div className="relative py-20 overflow-hidden">
  <img
    src="/AllHero.jpg"
    alt="SS 17-4 PH Background"
    className="absolute inset-0 w-full h-full object-cover"
  />
  <div
    className="absolute inset-0 bg-[#153063]"
    style={{ opacity: 0.85 }}
  ></div>
  <div className="max-w-7xl mx-auto px-6 relative z-10">
    <h1 className="text-5xl font-bold text-white mb-4 border-b-4 border-white inline-block pb-2">
      SS 17-4 PH
    </h1>
    <div className="flex items-center text-white text-sm mt-4">
      <Link to="/" className="hover:underline">
        Home
      </Link>
      <ChevronRight className="w-4 h-4 mx-2" />
      <span>SS 17-4-PH</span>
    </div>
  </div>
</div>


      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-gray-200 pb-4">
                Stainless Steel 17-4 PH Fasteners Manufacturer, Supplier of Stainless Steel 17-4 PH Bolts, Exporter of Stainless Steel 17-4 PH Nuts and Bolts, Leading Stainless Steel 17-4 PH Fasteners Manufacturers in India
              </h2>
              <div className="prose max-w-none text-gray-700 leading-relaxed space-y-4 mb-8">
                <p>
                  17-4 PH stands out as a martensitic grade stainless steel renowned for its robustness. The alloy composition of 17-4 PH Stainless Steel Fasteners comprises a significant proportion of chromium, complemented by nickel and copper. This martensitic stainless steel grade derives its strength from the precipitation of these key elements, further enhanced by the addition of trace amounts of niobium. The 17-4 PH Socket Head Cap Screw exhibits a remarkable range of toughness and strength properties, contingent upon the aging or precipitation temperature applied to fortify the alloy.
                </p>
                <p>
                  17-4 PH Stainless Steel Fasteners boast an array of advantages, with standout resilience derived from their martensitic grade composition. The alloy makeup of 17-4 PH includes a significant chromium content, supplemented by nickel and copper. This martensitic stainless steel grade achieves its robustness through the precipitation of these core elements, further reinforced by the addition of trace niobium.
                </p>
                <p>
                  Prominently, 17-4 PH fasteners excel in corrosion resistance, making them particularly adept for environments prone to corrosion, such as those near water bodies or saltwater pools. Additionally, their impressive tensile strength ensures they are indispensable in heavy-duty industrial applications where sturdy connections are paramount for operational reliability. The versatility of 17-4 PH fasteners extends to achieving a wide range of toughness and strength properties, contingent upon the aging or precipitation temperature applied to the alloy.
                </p>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8 border-b border-gray-300 pb-2">
                SS 17-4-Ph Chemical Composition
              </h3>
              <p className="text-gray-700 mb-4">Note that this chart includes only some of the most common sizes of SS 17-4-Ph Bolt. There are many other sizes available as well, and some applications may require custom sizes or special configurations.</p>
              <div className="overflow-x-auto mb-8">
                <table className="min-w-full border border-gray-300">
                  <thead>
                    <tr className="bg-blue-900 text-white">
                      <th className="px-4 py-3 text-left font-semibold border-r border-gray-300">SS 17-4-PH Elements</th>
                      <th className="px-4 py-3 text-left font-semibold">Content (% by Mass)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-300">
                      <td className="px-4 py-3 font-semibold bg-gray-50 border-r border-gray-300">Chromium (Cr)</td>
                      <td className="px-4 py-3">15.0 - 17.5%</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="px-4 py-3 font-semibold bg-gray-50 border-r border-gray-300">Nickel (Ni)</td>
                      <td className="px-4 py-3">3.0 - 5.0%</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="px-4 py-3 font-semibold bg-gray-50 border-r border-gray-300">Copper (Cu)</td>
                      <td className="px-4 py-3">3.0 - 5.0%</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="px-4 py-3 font-semibold bg-gray-50 border-r border-gray-300">Manganese (Mn)</td>
                      <td className="px-4 py-3">≤1.0%</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="px-4 py-3 font-semibold bg-gray-50 border-r border-gray-300">Silicon (Si)</td>
                      <td className="px-4 py-3">≤1.0%</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="px-4 py-3 font-semibold bg-gray-50 border-r border-gray-300">Columbium + Tantalum (Cb+Ta)</td>
                      <td className="px-4 py-3">0.15 - 0.45%</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="px-4 py-3 font-semibold bg-gray-50 border-r border-gray-300">Carbon (C)</td>
                      <td className="px-4 py-3">≤0.07%</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="px-4 py-3 font-semibold bg-gray-50 border-r border-gray-300">Phosphorus (P)</td>
                      <td className="px-4 py-3">≤0.04%</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="px-4 py-3 font-semibold bg-gray-50 border-r border-gray-300">Sulfur (S)</td>
                      <td className="px-4 py-3">≤0.03%</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold bg-gray-50 border-r border-gray-300">Iron (Fe)</td>
                      <td className="px-4 py-3">Balance</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8 border-b border-gray-300 pb-2">
                SS 17-4-Ph Mechanical Properties
              </h3>
              <div className="overflow-x-auto mb-8">
                <table className="min-w-full border border-gray-300">
                  <tbody>
                    <tr className="border-b border-gray-300">
                      <td className="px-4 py-3 font-semibold bg-gray-50 border-r border-gray-300">Density</td>
                      <td className="px-4 py-3">7.8 g/cm³ (0.282 lb/in³)</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="px-4 py-3 font-semibold bg-gray-50 border-r border-gray-300">Melting Point</td>
                      <td className="px-4 py-3">2560 - 2625°F (1404 - 1440°C)</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="px-4 py-3 font-semibold bg-gray-50 border-r border-gray-300">Tensile Strength</td>
                      <td className="px-4 py-3">1100 - 1300 MPa (160 - 190 ksi)</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="px-4 py-3 font-semibold bg-gray-50 border-r border-gray-300">Yield Strength (0.2%Offset)</td>
                      <td className="px-4 py-3">1000 - 1200 MPa (145 - 175 ksi)</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold bg-gray-50 border-r border-gray-300">Elongation</td>
                      <td className="px-4 py-3">10 - 14%</td>
                    </tr>
                  </tbody>
                </table>
              </div>



              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8 border-b border-gray-300 pb-2">
                Types of SS 17-4-Ph Fasteners
              </h3>
              <p className="text-gray-700 mb-6">Each SS 17-4-Ph Fasteners have unique design each of them are used in specific applications. Some of them are mentioned below.</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="aspect-square bg-gray-100 flex items-center justify-center">
                    <img src="/UniversalNut.webp" alt="SS 17-4-Ph Nuts" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Nut</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="flex items-start gap-1"><span className="text-gray-600">◎</span><span>Hex Nuts</span></div>
                      <div className="flex items-start gap-1"><span className="text-gray-600">◎</span><span>Heavy Hex Nut</span></div>
                      <div className="flex items-start gap-1"><span className="text-gray-600">◎</span><span>Square Nut</span></div>
                      <div className="flex items-start gap-1"><span className="text-gray-600">◎</span><span>Dome Nut</span></div>
                      <div className="flex items-start gap-1"><span className="text-gray-600">◎</span><span>Nylock Nut</span></div>
                      <div className="flex items-start gap-1"><span className="text-gray-600">◎</span><span>Wing Nut</span></div>
                      <div className="flex items-start gap-1"><span className="text-gray-600">◎</span><span>Lock Nut</span></div>
                      <div className="flex items-start gap-1"><span className="text-gray-600">◎</span><span>Cage Nut</span></div>
                      <div className="flex items-start gap-1"><span className="text-gray-600">◎</span><span>Coupling Nut</span></div>
                      <div className="flex items-start gap-1"><span className="text-gray-600">◎</span><span>Cap Nut</span></div>
                      <div className="flex items-start gap-1"><span className="text-gray-600">◎</span><span>Cross Hole Nut</span></div>
                      <div className="flex items-start gap-1"><span className="text-gray-600">◎</span><span>Castle Nut</span></div>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="aspect-square bg-gray-100 flex items-center justify-center">
                    <img src="/UniversalBolt.webp" alt="SS 17-4-Ph Bolts" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Bolt</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="flex items-start gap-1"><span className="text-gray-600">◎</span><span>Hex Bolt</span></div>
                      <div className="flex items-start gap-1"><span className="text-gray-600">◎</span><span>Stud Bolt</span></div>
                      <div className="flex items-start gap-1"><span className="text-gray-600">◎</span><span>Allen Bolt</span></div>
                      <div className="flex items-start gap-1"><span className="text-gray-600">◎</span><span>Eye Bolt</span></div>
                      <div className="flex items-start gap-1"><span className="text-gray-600">◎</span><span>Anchor Bolt</span></div>
                      <div className="flex items-start gap-1"><span className="text-gray-600">◎</span><span>Square Head Bolt</span></div>
                      <div className="flex items-start gap-1"><span className="text-gray-600">◎</span><span>Hex Flange Bolt</span></div>
                      <div className="flex items-start gap-1"><span className="text-gray-600">◎</span><span>Carriage Bolt</span></div>
                      <div className="flex items-start gap-1"><span className="text-gray-600">◎</span><span>Coil Bolt</span></div>
                      <div className="flex items-start gap-1"><span className="text-gray-600">◎</span><span>J Bolt</span></div>
                      <div className="flex items-start gap-1"><span className="text-gray-600">◎</span><span>L Bolt</span></div>
                      <div className="flex items-start gap-1"><span className="text-gray-600">◎</span><span>T Bolt</span></div>
                      <div className="flex items-start gap-1"><span className="text-gray-600">◎</span><span>U Bolt</span></div>
                      <div className="flex items-start gap-1"><span className="text-gray-600">◎</span><span>Elevator Bucket Bolt</span></div>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="aspect-square bg-gray-100 flex items-center justify-center">
                    <img src="/UniversalWasher.webp" alt="SS 17-4-Ph Washers" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Washer</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="flex items-start gap-1"><span className="text-gray-600">◎</span><span>Belleville Washers</span></div>
                      <div className="flex items-start gap-1"><span className="text-gray-600">◎</span><span>Bonded Sealing Washers</span></div>
                      <div className="flex items-start gap-1"><span className="text-gray-600">◎</span><span>Flat Washers</span></div>
                      <div className="flex items-start gap-1"><span className="text-gray-600">◎</span><span>Lock Washers</span></div>
                      <div className="flex items-start gap-1"><span className="text-gray-600">◎</span><span>Spring Washers</span></div>
                      <div className="flex items-start gap-1"><span className="text-gray-600">◎</span><span>Star Washers</span></div>
                      <div className="flex items-start gap-1"><span className="text-gray-600">◎</span><span>Square Washer</span></div>
                      <div className="flex items-start gap-1"><span className="text-gray-600">◎</span><span>Plain Washers</span></div>
                      <div className="flex items-start gap-1"><span className="text-gray-600">◎</span><span>Countersunk Washer</span></div>
                    </div>
                  </div>
                </div>
              </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8 border-b border-gray-300 pb-2">
                Applications Of SS 17-4-Ph
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="aspect-square bg-gray-100 flex items-center justify-center">
                    <img src="https://images.pexels.com/photos/256297/pexels-photo-256297.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Oil and Gas" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4 text-center">
                    <h4 className="text-lg font-bold text-gray-900">Oil and Gas</h4>
                  </div>
                </div>
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="aspect-square bg-gray-100 flex items-center justify-center">
                    <img src="https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Marine" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4 text-center">
                    <h4 className="text-lg font-bold text-gray-900">Marine</h4>
                  </div>
                </div>
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="aspect-square bg-gray-100 flex items-center justify-center">
                    <img src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Chemical Industry" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4 text-center">
                    <h4 className="text-lg font-bold text-gray-900">Chemical Industry</h4>
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
            'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-white mb-4">
            Contact Horizon Metal & Alloys Today
          </h2>
          <p className="text-white mb-8 leading-relaxed">
            Choose Horizon Metal & Alloys for your bolt needs and experience the difference quality, expertise, and commitment can make in your projects. Contact us today to discuss your requirements, request a quote, or place an order. Join countless satisfied customers who rely on Horizon Metal & Alloys for premium bolts and exceptional service.
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

export default SS17_4PhPage;
