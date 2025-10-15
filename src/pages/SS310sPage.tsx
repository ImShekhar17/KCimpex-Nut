import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronDown } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import ScrollToTop from '../components/ScrollToTop';

const SS310sPage = () => {
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
        { name: 'SS 310s', link: '/materials/ss-310s', active: true },
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
            'linear-gradient(rgba(21, 48, 99, 0.85), rgba(21, 48, 99, 0.85)), url(https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-white mb-4 border-b-4 border-white inline-block pb-2">
            SS 310s
          </h1>
          <div className="flex items-center text-white text-sm mt-4">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span>SS_310s</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-gray-200 pb-4">
                Stainless Steel 310s Fasteners Manufacturer, Supplier of Stainless Steel 310s Bolts, Exporter of Stainless Steel 310s Nuts and Bolts, Leading Stainless Steel 310s Fasteners Manufacturers in India
              </h2>
              <div className="prose max-w-none text-gray-700 leading-relaxed space-y-4 mb-8">
                <p>
                  Stainless Steel 310s Fasteners are crafted from a high-grade alloy known for its exceptional heat resistance, comprising 25% chromium and 20% nickel. Stainless Steel 310s Fasteners boast high strength and resilience. This grade incorporates chromium, nickel, and manganese to enhance mechanical properties and overall product performance. Stainless Steel 310s Fasteners find widespread use in applications requiring resistance to elevated temperatures, making them suitable for various environments prone to thermal cycling. Industries such as chemical processing, piping systems, heat exchangers, nuclear reactors, oil & gas production equipment, and offshore drilling platforms commonly rely on Stainless Steel 310s Fasteners for their reliability and performance in demanding conditions.
                </p>
                <p>
                  Stainless Steel 310s grade, renowned for its superb resistance to oxidation and corrosion, proves to be an ideal choice for demanding environments. SS 310s Fasteners are widely utilized in various applications requiring resistance to high temperatures and corrosive elements. Commonly found in chemical and petrochemical processing equipment, heat exchangers, and similar industrial settings, SS 310s Fasteners excel in harsh conditions. Similar to SS 317L Fasteners, SS 310s Fasteners are available in diverse types and sizes, including bolts, nuts, screws, washers, and studs, catering to a wide range of industrial needs.
                </p>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8 border-b border-gray-300 pb-2">
                Specifications of SS 310s
              </h3>
              <p className="text-gray-700 mb-4">Standard SS 310s Fasteners specifications as per Fasteners manufacturers.</p>
              <div className="overflow-x-auto mb-8">
                <table className="min-w-full border border-gray-300">
                  <tbody>
                    <tr className="border-b border-gray-300">
                      <td className="px-4 py-3 font-semibold bg-gray-100 border-r border-gray-300">Material</td>
                      <td className="px-4 py-3">Stainless Steel 310s</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="px-4 py-3 font-semibold bg-gray-100 border-r border-gray-300">Specification</td>
                      <td className="px-4 py-3">IS/BS/ASTM</td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="px-4 py-3 font-semibold bg-gray-100 border-r border-gray-300">Standards</td>
                      <td className="px-4 py-3">ASTM / ASME - A/ SA 479</td>
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
                Types of SS 310s Fasteners
              </h3>
              <p className="text-gray-700 mb-6">Each SS 310s Fasteners have unique design each of them are used in specific applications. Some of them are mentioned below.</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="aspect-square bg-gray-100 flex items-center justify-center">
                    <img src="https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg?auto=compress&cs=tinysrgb&w=400" alt="SS 310s Nuts" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Nut</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="flex items-start gap-1">
                        <span className="text-gray-600">◎</span>
                        <span>Hex Nuts</span>
                      </div>
                      <div className="flex items-start gap-1">
                        <span className="text-gray-600">◎</span>
                        <span>Heavy Hex Nut</span>
                      </div>
                      <div className="flex items-start gap-1">
                        <span className="text-gray-600">◎</span>
                        <span>Square Nut</span>
                      </div>
                      <div className="flex items-start gap-1">
                        <span className="text-gray-600">◎</span>
                        <span>Dome Nut</span>
                      </div>
                      <div className="flex items-start gap-1">
                        <span className="text-gray-600">◎</span>
                        <span>Nylock Nut</span>
                      </div>
                      <div className="flex items-start gap-1">
                        <span className="text-gray-600">◎</span>
                        <span>Wing Nut</span>
                      </div>
                      <div className="flex items-start gap-1">
                        <span className="text-gray-600">◎</span>
                        <span>Lock Nut</span>
                      </div>
                      <div className="flex items-start gap-1">
                        <span className="text-gray-600">◎</span>
                        <span>Cage Nut</span>
                      </div>
                      <div className="flex items-start gap-1">
                        <span className="text-gray-600">◎</span>
                        <span>Coupling Nut</span>
                      </div>
                      <div className="flex items-start gap-1">
                        <span className="text-gray-600">◎</span>
                        <span>Cap Nut</span>
                      </div>
                      <div className="flex items-start gap-1">
                        <span className="text-gray-600">◎</span>
                        <span>Cross Hole Nut</span>
                      </div>
                      <div className="flex items-start gap-1">
                        <span className="text-gray-600">◎</span>
                        <span>Castle Nut</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="aspect-square bg-gray-100 flex items-center justify-center">
                    <img src="https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg?auto=compress&cs=tinysrgb&w=400" alt="SS 310s Bolts" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Bolt</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="flex items-start gap-1">
                        <span className="text-gray-600">◎</span>
                        <span>Hex Bolt</span>
                      </div>
                      <div className="flex items-start gap-1">
                        <span className="text-gray-600">◎</span>
                        <span>Stud Bolt</span>
                      </div>
                      <div className="flex items-start gap-1">
                        <span className="text-gray-600">◎</span>
                        <span>Allen Bolt</span>
                      </div>
                      <div className="flex items-start gap-1">
                        <span className="text-gray-600">◎</span>
                        <span>Eye Bolt</span>
                      </div>
                      <div className="flex items-start gap-1">
                        <span className="text-gray-600">◎</span>
                        <span>Anchor Bolt</span>
                      </div>
                      <div className="flex items-start gap-1">
                        <span className="text-gray-600">◎</span>
                        <span>Square Head Bolt</span>
                      </div>
                      <div className="flex items-start gap-1">
                        <span className="text-gray-600">◎</span>
                        <span>Hex Flange Bolt</span>
                      </div>
                      <div className="flex items-start gap-1">
                        <span className="text-gray-600">◎</span>
                        <span>Carriage Bolt</span>
                      </div>
                      <div className="flex items-start gap-1">
                        <span className="text-gray-600">◎</span>
                        <span>Coil Bolt</span>
                      </div>
                      <div className="flex items-start gap-1">
                        <span className="text-gray-600">◎</span>
                        <span>J Bolt</span>
                      </div>
                      <div className="flex items-start gap-1">
                        <span className="text-gray-600">◎</span>
                        <span>L Bolt</span>
                      </div>
                      <div className="flex items-start gap-1">
                        <span className="text-gray-600">◎</span>
                        <span>T Bolt</span>
                      </div>
                      <div className="flex items-start gap-1">
                        <span className="text-gray-600">◎</span>
                        <span>U Bolt</span>
                      </div>
                      <div className="flex items-start gap-1">
                        <span className="text-gray-600">◎</span>
                        <span>Elevator Bucket Bolt</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="aspect-square bg-gray-100 flex items-center justify-center">
                    <img src="https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg?auto=compress&cs=tinysrgb&w=400" alt="SS 310s Washers" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Washer</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="flex items-start gap-1">
                        <span className="text-gray-600">◎</span>
                        <span>Belleville Washers</span>
                      </div>
                      <div className="flex items-start gap-1">
                        <span className="text-gray-600">◎</span>
                        <span>Bonded Sealing Washers</span>
                      </div>
                      <div className="flex items-start gap-1">
                        <span className="text-gray-600">◎</span>
                        <span>Flat Washers</span>
                      </div>
                      <div className="flex items-start gap-1">
                        <span className="text-gray-600">◎</span>
                        <span>Lock Washers</span>
                      </div>
                      <div className="flex items-start gap-1">
                        <span className="text-gray-600">◎</span>
                        <span>Spring Washers</span>
                      </div>
                      <div className="flex items-start gap-1">
                        <span className="text-gray-600">◎</span>
                        <span>Star Washers</span>
                      </div>
                      <div className="flex items-start gap-1">
                        <span className="text-gray-600">◎</span>
                        <span>Square Washer</span>
                      </div>
                      <div className="flex items-start gap-1">
                        <span className="text-gray-600">◎</span>
                        <span>Plain Washers</span>
                      </div>
                      <div className="flex items-start gap-1">
                        <span className="text-gray-600">◎</span>
                        <span>Countersunk Washer</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8 border-b border-gray-300 pb-2">
                SS 310s Chemical Composition
              </h3>
              <p className="text-gray-700 mb-4">Note that this chart includes only some of the most common sizes of SS 310s Bolt. There are many other sizes available as well, and some applications may require custom sizes or special configurations.</p>
              <div className="overflow-x-auto mb-8">
                <table className="min-w-full border border-gray-300">
                  <thead>
                    <tr className="bg-[#4a5f8f] text-white">
                      <th className="px-4 py-3 text-left font-semibold border-r border-gray-300">SS 310s Fasteners</th>
                      <th className="px-4 py-3 text-left font-semibold">Element (% By Mass)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-300 bg-white">
                      <td className="px-4 py-3 font-medium">Chromium (Cr)</td>
                      <td className="px-4 py-3">24-26%</td>
                    </tr>
                    <tr className="border-b border-gray-300 bg-gray-50">
                      <td className="px-4 py-3 font-medium">Nickel (Ni)</td>
                      <td className="px-4 py-3">19-22%</td>
                    </tr>
                    <tr className="border-b border-gray-300 bg-white">
                      <td className="px-4 py-3 font-medium">Iron (Fe)</td>
                      <td className="px-4 py-3">Balance</td>
                    </tr>
                    <tr className="border-b border-gray-300 bg-gray-50">
                      <td className="px-4 py-3 font-medium">Manganese (Mn)</td>
                      <td className="px-4 py-3">2% max</td>
                    </tr>
                    <tr className="border-b border-gray-300 bg-white">
                      <td className="px-4 py-3 font-medium">Silicon (Si)</td>
                      <td className="px-4 py-3">1.5% max</td>
                    </tr>
                    <tr className="border-b border-gray-300 bg-gray-50">
                      <td className="px-4 py-3 font-medium">Carbon (C)</td>
                      <td className="px-4 py-3">0.25% max</td>
                    </tr>
                    <tr className="border-b border-gray-300 bg-white">
                      <td className="px-4 py-3 font-medium">Phosphorus (P)</td>
                      <td className="px-4 py-3">0.045% max</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 py-3 font-medium">Sulfur (S)</td>
                      <td className="px-4 py-3">0.03% max</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8 border-b border-gray-300 pb-2">
                SS 310s Mechanical Properties
              </h3>
              <div className="overflow-x-auto mb-8">
                <table className="min-w-full border border-gray-300">
                  <tbody>
                    <tr className="border-b border-gray-300 bg-white">
                      <td className="px-4 py-3 font-semibold bg-gray-100 border-r border-gray-300">Density</td>
                      <td className="px-4 py-3">7.9 g/cm3</td>
                    </tr>
                    <tr className="border-b border-gray-300 bg-gray-50">
                      <td className="px-4 py-3 font-semibold bg-gray-100 border-r border-gray-300">Melting Point</td>
                      <td className="px-4 py-3">1402 °C (2555 °F)</td>
                    </tr>
                    <tr className="border-b border-gray-300 bg-white">
                      <td className="px-4 py-3 font-semibold bg-gray-100 border-r border-gray-300">Tensile Strength</td>
                      <td className="px-4 py-3">Psi – 75000 , MPa – 515</td>
                    </tr>
                    <tr className="border-b border-gray-300 bg-gray-50">
                      <td className="px-4 py-3 font-semibold bg-gray-100 border-r border-gray-300">Yield Strength (0.2%Offset)</td>
                      <td className="px-4 py-3">Psi – 30000 , MPa – 205</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-4 py-3 font-semibold bg-gray-100 border-r border-gray-300">Elongation</td>
                      <td className="px-4 py-3">40%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8 border-b border-gray-300 pb-2">
                Applications Of SS 310s
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
                <div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-gray-600 mt-1">◎</span>
                      <span className="text-gray-700">Oil & Gas Industry</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gray-600 mt-1">◎</span>
                      <span className="text-gray-700">Power Plant</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gray-600 mt-1">◎</span>
                      <span className="text-gray-700">Marine & Ship Building Industry</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gray-600 mt-1">◎</span>
                      <span className="text-gray-700">Refining Industry</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gray-600 mt-1">◎</span>
                      <span className="text-gray-700">Automotive Industry</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gray-600 mt-1">◎</span>
                      <span className="text-gray-700">Pharmaceutical Industry</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gray-600 mt-1">◎</span>
                      <span className="text-gray-700">Engineering Sector</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gray-600 mt-1">◎</span>
                      <span className="text-gray-700">Engine & Turbines</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gray-600 mt-1">◎</span>
                      <span className="text-gray-700">Aerospace Industry</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gray-600 mt-1">◎</span>
                      <span className="text-gray-700">Construction Industry</span>
                    </li>
                  </ul>
                </div>
                <div className="flex items-center justify-center">
                  <img src="https://images.pexels.com/photos/257700/pexels-photo-257700.jpeg?auto=compress&cs=tinysrgb&w=600" alt="SS 310s Applications" className="rounded-lg shadow-md w-full" />
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

export default SS310sPage;
