import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronDown } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import ScrollToTop from '../components/ScrollToTop';

const Monel400Page = () => {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set(['MONEL'])
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
      title: 'MONEL',
      items: [
        { name: 'MONEL 400', link: '/materials/monel-alloy-400', active: true },
        { name: 'MONEL C22', link: '/materials/hastelloy-c22' },
        { name: 'MONEL B-2', link: '/materials/hastelloy-b-2' },
        { name: 'MONEL B-3', link: '/materials/hastelloy-b-3' },
        { name: 'MONEL X', link: '/materials/hastelloy-x' },
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

<div className="relative py-20 overflow-hidden">
  <img
    src="/AllHero.jpg"
    alt="MONEL 400 Background"
    className="absolute inset-0 w-full h-full object-cover"
  />
  <div
    className="absolute inset-0 bg-[#153063]"
    style={{ opacity: 0.85 }}
  ></div>
  <div className="max-w-7xl mx-auto px-6 relative z-10">
    <h1 className="text-5xl font-bold text-white mb-4 border-b-4 border-white inline-block pb-2">
      MONEL 400
    </h1>
    <div className="flex items-center text-white text-sm mt-4">
      <Link to="/" className="hover:underline">
        Home
      </Link>
      <ChevronRight className="w-4 h-4 mx-2" />
      <span>MONEL 400</span>
    </div>
  </div>
</div>


      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-gray-200 pb-4">
                Monel 400 Fasteners Manufacturer, Supplier of Monel 400 Bolts, Exporter of Monel 400 Nuts and Bolts, Leading Monel 400 Fasteners Manufacturers in India
              </h2>
              <div className="prose max-w-none text-gray-700 leading-relaxed space-y-4 mb-8">
                <p>
                  Monel 400 Fasteners are engineered from an alloy blend of nickel, molybdenum, chromium, tungsten, and iron. The distinctive amalgamation endows the material with exceptional attributes, including unparalleled corrosion resistance across a spectrum of acidic environments. ASTM B574 UNS N10276 Fasteners exhibit remarkable resilience against pitting and crevice corrosion, even when subjected to warm chloride-containing solutions such as seawater. Moreover, their superior fabricability compared to alternative options can substantially lower production costs, making them a cost-effective choice for various industrial needs, industries including chemical processing, power generation, marine engineering, aerospace manufacturing, and beyond benefit significantly from their exceptional properties and versatility.
                </p>
                <p>
                  Monel 400 Fasteners stand out as optimal choices for high-performance applications owing to their robustness and longevity. With the ability to endure an extensive temperature range from -400°F to +1200°F, they exhibit remarkable corrosion resistance across diverse environments. Available in various forms such as Monel 400 Nuts, Monel 400 Bolts, and more, these fasteners cater to a broad spectrum of industrial needs. Industries including chemical processing, power generation, marine engineering, aerospace, and beyond benefit significantly from their exceptional properties and versatility.
                </p>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8 border-b border-gray-300 pb-2">
                Specifications of MONEL 400
              </h3>
              <p className="text-gray-700 mb-4">Standard MONEL 400 Fasteners specifications as per Fasteners manufacturers.</p>
              <div className="overflow-x-auto mb-8">
                <table className="min-w-full border border-gray-300">
                  <tbody>
                    <tr className="border-b border-gray-300">
                      <td className="px-4 py-3 font-semibold bg-gray-100 border-r border-gray-300">Material</td>
                      <td className="px-4 py-3">Monel 400</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="px-4 py-3 font-semibold bg-gray-100 border-r border-gray-300">Specification</td>
                      <td className="px-4 py-3">IS/BS/ASTM</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="px-4 py-3 font-semibold bg-gray-100 border-r border-gray-300">Standards</td>
                      <td className="px-4 py-3">ASTM B574</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="px-4 py-3 font-semibold bg-gray-100 border-r border-gray-300">Size</td>
                      <td className="px-4 py-3">3 mm to 200 mm</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold bg-gray-100 border-r border-gray-300">Length</td>
                      <td className="px-4 py-3">M02 to M30</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8 border-b border-gray-300 pb-2">
                Types of MONEL 400 Fasteners
              </h3>
              <p className="text-gray-700 mb-6">Each MONEL 400 Fasteners have unique design each of them are used in specific applications. Some of them are mentioned below.</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="aspect-square bg-gray-100 flex items-center justify-center">
                    <img src="/UniversalNut.webp" alt="Monel 400 Nuts" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Nut</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="flex items-start gap-1"><span className="text-gray-600">◎</span><span>Hex Nuts</span></div>
                      <div className="flex items-start gap-1"><span className="text-gray-600">◎</span><span>Heavy Hex Nut</span></div>
                      <div className="flex items-start gap-1"><span className="text-gray-600">◎</span><span>Dome Nut</span></div>
                      <div className="flex items-start gap-1"><span className="text-gray-600">◎</span><span>Wing Nut</span></div>
                      <div className="flex items-start gap-1"><span className="text-gray-600">◎</span><span>Nylock Nut</span></div>
                      <div className="flex items-start gap-1"><span className="text-gray-600">◎</span><span>Cage Nut</span></div>
                      <div className="flex items-start gap-1"><span className="text-gray-600">◎</span><span>Lock Nut</span></div>
                      <div className="flex items-start gap-1"><span className="text-gray-600">◎</span><span>Coupling Nut</span></div>
                      <div className="flex items-start gap-1"><span className="text-gray-600">◎</span><span>Cap Nut</span></div>
                      <div className="flex items-start gap-1"><span className="text-gray-600">◎</span><span>Cross Hole Nut</span></div>
                      <div className="flex items-start gap-1"><span className="text-gray-600">◎</span><span>Castle Nut</span></div>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="aspect-square bg-gray-100 flex items-center justify-center">
                    <img src="/UniversalBolt.webp" alt="Monel 400 Bolts" className="w-full h-full object-cover" />
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
                    <img src="/UniversalWasher.webp" alt="Monel 400 Washers" className="w-full h-full object-cover" />
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
                MONEL 400 Chemical Composition
              </h3>
              <p className="text-gray-700 mb-4">Note that this chart includes only some of the most common sizes of MONEL 400 Bolt. There are many other sizes available as well, and some applications may require custom sizes or special configurations.</p>
              <div className="overflow-x-auto mb-8">
                <table className="min-w-full border border-gray-300">
                  <thead>
                    <tr className="bg-blue-900 text-white">
                      <th className="px-4 py-3 text-left font-semibold border-r border-gray-300">MONEL 400 Elements</th>
                      <th className="px-4 py-3 text-left font-semibold">Content (% by Mass)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-300">
                      <td className="px-4 py-3 font-semibold bg-gray-50 border-r border-gray-300">Nickel (Ni)</td>
                      <td className="px-4 py-3">Balance</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="px-4 py-3 font-semibold bg-gray-50 border-r border-gray-300">Molybdenum (Mo)</td>
                      <td className="px-4 py-3">15 - 17%</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="px-4 py-3 font-semibold bg-gray-50 border-r border-gray-300">Chromium (Cr)</td>
                      <td className="px-4 py-3">14.5 - 16.5%</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="px-4 py-3 font-semibold bg-gray-50 border-r border-gray-300">Iron (Fe)</td>
                      <td className="px-4 py-3">4 - 7%</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="px-4 py-3 font-semibold bg-gray-50 border-r border-gray-300">Tungsten (W)</td>
                      <td className="px-4 py-3">3 - 4.5%</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="px-4 py-3 font-semibold bg-gray-50 border-r border-gray-300">Cobalt (Co)</td>
                      <td className="px-4 py-3">2.5 max%</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="px-4 py-3 font-semibold bg-gray-50 border-r border-gray-300">Manganese (Mn)</td>
                      <td className="px-4 py-3">1 max%</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="px-4 py-3 font-semibold bg-gray-50 border-r border-gray-300">Vanadium (V)</td>
                      <td className="px-4 py-3">0.35 max%</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="px-4 py-3 font-semibold bg-gray-50 border-r border-gray-300">Silicon (Si)</td>
                      <td className="px-4 py-3">0.08 max%</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="px-4 py-3 font-semibold bg-gray-50 border-r border-gray-300">Carbon (C)</td>
                      <td className="px-4 py-3">0.01 max%</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="px-4 py-3 font-semibold bg-gray-50 border-r border-gray-300">Sulfur (S)</td>
                      <td className="px-4 py-3">0.03 max%</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold bg-gray-50 border-r border-gray-300">Phosphorus (P)</td>
                      <td className="px-4 py-3">0.04 max%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8 border-b border-gray-300 pb-2">
                MONEL 400 Mechanical Properties
              </h3>
              <div className="overflow-x-auto mb-8">
                <table className="min-w-full border border-gray-300">
                  <tbody>
                    <tr className="border-b border-gray-300">
                      <td className="px-4 py-3 font-semibold bg-gray-50 border-r border-gray-300">Density</td>
                      <td className="px-4 py-3">8.68 g/cm3</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="px-4 py-3 font-semibold bg-gray-50 border-r border-gray-300">Melting Point</td>
                      <td className="px-4 py-3">1370 °C (2500 °F)</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="px-4 py-3 font-semibold bg-gray-50 border-r border-gray-300">Tensile Strength</td>
                      <td className="px-4 py-3">Psi – 115,000, MPa – 790</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="px-4 py-3 font-semibold bg-gray-50 border-r border-gray-300">Yield Strength (0.2%Offset)</td>
                      <td className="px-4 py-3">Psi – 52,000, MPa – 355</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold bg-gray-50 border-r border-gray-300">Elongation</td>
                      <td className="px-4 py-3">40 %</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8 border-b border-gray-300 pb-2">
                Applications Of MONEL 400
              </h3>
              <div className="mb-8">
                <div className="flex flex-wrap gap-8 justify-center mb-8">
                  <div className="relative w-48 h-48">
                    <div className="absolute inset-0 rounded-lg overflow-hidden transform rotate-45">
                      <img src="https://images.pexels.com/photos/256297/pexels-photo-256297.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Oil & Gas" className="w-full h-full object-cover transform -rotate-45 scale-150" />
                    </div>
                  </div>
                  <div className="relative w-48 h-48">
                    <div className="absolute inset-0 rounded-lg overflow-hidden transform rotate-45">
                      <img src="https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Marine" className="w-full h-full object-cover transform -rotate-45 scale-150" />
                    </div>
                  </div>
                  <div className="relative w-48 h-48">
                    <div className="absolute inset-0 rounded-lg overflow-hidden transform rotate-45">
                      <img src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Chemical" className="w-full h-full object-cover transform -rotate-45 scale-150" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">◉</span>
                    <span className="text-gray-700">Oil & Gas Industry</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">◉</span>
                    <span className="text-gray-700">Power Plant</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">◉</span>
                    <span className="text-gray-700">Marine & Ship Building Industry</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">◉</span>
                    <span className="text-gray-700">Refining Industry</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">◉</span>
                    <span className="text-gray-700">Automotive Industry</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">◉</span>
                    <span className="text-gray-700">Pharmaceutical Industry</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">◉</span>
                    <span className="text-gray-700">Engineering Sector</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">◉</span>
                    <span className="text-gray-700">Engine & Turbines</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">◉</span>
                    <span className="text-gray-700">Aerospace Industry</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">◉</span>
                    <span className="text-gray-700">Construction Industry</span>
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

export default Monel400Page;
