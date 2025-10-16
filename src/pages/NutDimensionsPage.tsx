import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import ScrollToTop from '../components/ScrollToTop';

const NutDimensionsPage = () => {
  const hexNutData = [
    { size: '1/4"', a: '0.25', b: '0.226', c: '7/32', d: '0.212', e: '7/16', f: '0.505' },
    { size: '5/16"', a: '0.31', b: '0.273', c: '17/64', d: '0.245', e: '9/16', f: '0.577' },
    { size: '3/8"', a: '0.38', b: '0.337', c: '21/64', d: '11/32', e: '5/8', f: '0.650' },
    { size: '7/16"', a: '0.44', b: '0.385', c: '3/8', d: '13/32', e: '11/16', f: '0.722' },
    { size: '1/2"', a: '0.50', b: '0.448', c: '7/16', d: '15/32', e: '3/4', f: '0.794' },
    { size: '9/16"', a: '0.56', b: '0.496', c: '31/64', d: '35/64', e: '7/8', f: '0.866' },
    { size: '5/8"', a: '0.62', b: '0.559', c: '35/64', d: '39/64', e: '15/16', f: '0.938' },
    { size: '3/4"', a: '0.75', b: '0.665', c: '41/64', d: '23/32', e: '1-1/8', f: '1.083' },
    { size: '7/8"', a: '0.88', b: '0.776', c: '3/4', d: '27/32', e: '1-5/16', f: '1.299' },
    { size: '1"', a: '1.00', b: '0.887', c: '55/64', d: '31/32', e: '1-1/2', f: '1.516' },
    { size: '1-1/8"', a: '1.12', b: '0.999', c: '31/32', d: '1-3/32', e: '1-11/16', f: '1.732' },
    { size: '1-1/4"', a: '1.25', b: '1.094', c: '1-1/16', d: '1-7/32', e: '1-7/8', f: '1.949' },
    { size: '1-3/8"', a: '1.38', b: '1.206', c: '1-5/32', d: '1-11/32', e: '2-1/16', f: '2.165' },
    { size: '1-1/2"', a: '1.50', b: '1.317', c: '1-1/4', d: '1-15/32', e: '2-1/4', f: '2.382' },
    { size: '1-5/8"', a: '1.62', b: '1.429', c: '1-11/32', d: '1-19/32', e: '2-7/16', f: '2.598' },
    { size: '1-3/4"', a: '1.75', b: '1.540', c: '1-7/16', d: '1-23/32', e: '2-5/8', f: '2.815' },
    { size: '1-7/8"', a: '1.88', b: '1.651', c: '1-9/16', d: '1-27/32', e: '2-13/16', f: '3.031' },
    { size: '2"', a: '2.00', b: '1.763', c: '1-11/16', d: '1-31/32', e: '3', f: '3.248' },
    { size: '2-1/4"', a: '2.25', b: '1.986', c: '1-7/8', d: '2-3/16', e: '3-3/8', f: '3.680' },
    { size: '2-1/2"', a: '2.50', b: '2.209', c: '2-1/16', d: '2-7/16', e: '3-3/4', f: '4.113' },
    { size: '2-3/4"', a: '2.75', b: '2.433', c: '2-1/4', d: '2-11/16', e: '4-1/8', f: '4.546' },
    { size: '3"', a: '3.00', b: '2.656', c: '2-7/16', d: '2-15/16', e: '4-1/2', f: '4.979' },
    { size: '3-1/4"', a: '3.25', b: '2.880', c: '2-5/8', d: '3-3/16', e: '4-7/8', f: '5.412' },
    { size: '3-1/2"', a: '3.50', b: '3.103', c: '2-13/16', d: '3-7/16', e: '5-1/4', f: '5.845' },
    { size: '3-3/4"', a: '3.75', b: '3.327', c: '3', d: '3-11/16', e: '5-5/8', f: '6.278' },
    { size: '4"', a: '4.00', b: '3.550', c: '3-3/16', d: '3-15/16', e: '6', f: '6.711' },
  ];

  const hexJamNutData = [
    { size: '1/4"', a: '0.25', b: '0.163', c: '5/32', d: '7/16', e: '0.505' },
    { size: '5/16"', a: '0.31', b: '0.195', c: '9/64', d: '9/16', e: '0.577' },
    { size: '3/8"', a: '0.38', b: '0.227', c: '13/64', d: '5/8', e: '0.650' },
    { size: '7/16"', a: '0.44', b: '0.260', c: '15/64', d: '11/16', e: '0.722' },
    { size: '1/2"', a: '0.50', b: '0.323', c: '19/64', d: '3/4', e: '0.794' },
    { size: '9/16"', a: '0.56', b: '0.324', c: '19/64', d: '7/8', e: '0.866' },
    { size: '5/8"', a: '0.62', b: '0.387', c: '23/64', d: '15/16', e: '0.938' },
    { size: '3/4"', a: '0.75', b: '0.448', c: '7/16', d: '1-1/8', e: '1.083' },
    { size: '7/8"', a: '0.88', b: '0.511', c: '1/2', d: '1-5/16', e: '1.299' },
    { size: '1"', a: '1.00', b: '0.575', c: '9/16', d: '1-1/2', e: '1.516' },
    { size: '1-1/8"', a: '1.12', b: '0.639', c: '5/8', d: '1-11/16', e: '1.732' },
    { size: '1-1/4"', a: '1.25', b: '0.751', c: '3/4', d: '1-7/8', e: '1.949' },
    { size: '1-3/8"', a: '1.38', b: '0.815', c: '13/16', d: '2-1/16', e: '2.165' },
    { size: '1-1/2"', a: '1.50', b: '0.880', c: '7/8', d: '2-1/4', e: '2.382' },
    { size: '1-5/8"', a: '1.62', b: '0.943', c: '15/16', d: '2-7/16', e: '2.598' },
    { size: '1-3/4"', a: '1.75', b: '1.007', c: '1', d: '2-5/8', e: '2.815' },
    { size: '1-7/8"', a: '1.88', b: '1.071', c: '1-1/16', d: '2-13/16', e: '3.031' },
    { size: '2"', a: '2.00', b: '1.135', c: '1-1/8', d: '3', e: '3.248' },
    { size: '2-1/4"', a: '2.25', b: '1.263', c: '1-1/4', d: '3-3/8', e: '3.680' },
    { size: '2-1/2"', a: '2.50', b: '1.391', c: '1-3/8', d: '3-3/4', e: '4.113' },
    { size: '2-3/4"', a: '2.75', b: '1.519', c: '1-1/2', d: '4-1/8', e: '4.546' },
    { size: '3"', a: '3.00', b: '1.647', c: '1-5/8', d: '4-1/2', e: '4.979' },
    { size: '3-1/4"', a: '3.25', b: '1.775', c: '1-3/4', d: '4-7/8', e: '5.412' },
    { size: '3-1/2"', a: '3.50', b: '1.903', c: '1-7/8', d: '5-1/4', e: '5.845' },
    { size: '3-3/4"', a: '3.75', b: '2.031', c: '2', d: '5-5/8', e: '6.278' },
    { size: '4"', a: '4.00', b: '2.159', c: '2-1/8', d: '6', e: '6.711' },
  ];

  const heavyHexNutData = [
    { size: '1/2"', a: '0.50', b: '0.448', c: '31/64', d: '7/8', e: '0.866' },
    { size: '5/8"', a: '0.62', b: '0.559', c: '39/64', d: '1-1/16', e: '1.010' },
    { size: '3/4"', a: '0.75', b: '0.665', c: '47/64', d: '1-1/4', e: '1.227' },
    { size: '7/8"', a: '0.88', b: '0.776', c: '7/8', d: '1-7/16', e: '1.444' },
    { size: '1"', a: '1.00', b: '0.887', c: '63/64', d: '1-5/8', e: '1.660' },
    { size: '1-1/8"', a: '1.12', b: '0.999', c: '1-1/16', d: '1-13/16', e: '1.876' },
    { size: '1-1/4"', a: '1.25', b: '1.094', c: '1-3/16', d: '2', e: '2.093' },
    { size: '1-3/8"', a: '1.38', b: '1.206', c: '1-5/16', d: '2-3/16', e: '2.309' },
    { size: '1-1/2"', a: '1.50', b: '1.317', c: '1-7/16', d: '2-3/8', e: '2.526' },
    { size: '1-5/8"', a: '1.62', b: '1.429', c: '1-9/16', d: '2-9/16', e: '2.742' },
    { size: '1-3/4"', a: '1.75', b: '1.540', c: '1-11/16', d: '2-3/4', e: '2.959' },
    { size: '1-7/8"', a: '1.88', b: '1.651', c: '1-13/16', d: '2-15/16', e: '3.175' },
    { size: '2"', a: '2.00', b: '1.763', c: '1-15/16', d: '3-1/8', e: '3.392' },
    { size: '2-1/4"', a: '2.25', b: '1.986', c: '2-3/16', d: '3-1/2', e: '3.825' },
    { size: '2-1/2"', a: '2.50', b: '2.209', c: '2-7/16', d: '3-7/8', e: '4.259' },
    { size: '2-3/4"', a: '2.75', b: '2.433', c: '2-11/16', d: '4-1/4', e: '4.692' },
    { size: '3"', a: '3.00', b: '2.656', c: '2-15/16', d: '4-5/8', e: '5.125' },
    { size: '3-1/4"', a: '3.25', b: '2.880', c: '3-3/16', d: '5', e: '5.558' },
    { size: '3-1/2"', a: '3.50', b: '3.103', c: '3-7/16', d: '5-3/8', e: '5.990' },
    { size: '3-3/4"', a: '3.75', b: '3.327', c: '3-11/16', d: '5-3/4', e: '6.423' },
    { size: '4"', a: '4.00', b: '3.550', c: '3-15/16', d: '6-1/8', e: '6.856' },
  ];

  const threadData = [
    { size: '1/4"-20', oversize: '0.010', pitchMin: '0.2175', pitchMax: '0.2294' },
    { size: '1/4"-28', oversize: '0.010', pitchMin: '0.2367', pitchMax: '0.2443' },
    { size: '5/16"-18', oversize: '0.010', pitchMin: '0.2854', pitchMax: '0.2983' },
    { size: '5/16"-24', oversize: '0.010', pitchMin: '0.3053', pitchMax: '0.3147' },
    { size: '3/8"-16', oversize: '0.015', pitchMin: '0.3479', pitchMax: '0.3631' },
    { size: '3/8"-24', oversize: '0.015', pitchMin: '0.3678', pitchMax: '0.3797' },
    { size: '7/16"-14', oversize: '0.015', pitchMin: '0.4050', pitchMax: '0.4230' },
    { size: '7/16"-20', oversize: '0.015', pitchMin: '0.4294', pitchMax: '0.4450' },
    { size: '1/2"-13', oversize: '0.015', pitchMin: '0.4603', pitchMax: '0.4813' },
    { size: '1/2"-20', oversize: '0.015', pitchMin: '0.4919', pitchMax: '0.5106' },
    { size: '9/16"-12', oversize: '0.015', pitchMin: '0.5135', pitchMax: '0.5376' },
    { size: '9/16"-18', oversize: '0.015', pitchMin: '0.5568', pitchMax: '0.5784' },
    { size: '5/8"-11', oversize: '0.015', pitchMin: '0.5660', pitchMax: '0.5933' },
    { size: '5/8"-18', oversize: '0.015', pitchMin: '0.6193', pitchMax: '0.6440' },
    { size: '3/4"-10', oversize: '0.015', pitchMin: '0.6850', pitchMax: '0.7172' },
    { size: '3/4"-16', oversize: '0.015', pitchMin: '0.7294', pitchMax: '0.7594' },
    { size: '7/8"-9', oversize: '0.015', pitchMin: '0.7822', pitchMax: '0.8203' },
    { size: '7/8"-14', oversize: '0.015', pitchMin: '0.8286', pitchMax: '0.8647' },
    { size: '1"-8', oversize: '0.015', pitchMin: '0.8978', pitchMax: '0.9420' },
    { size: '1-1/8"-7', oversize: '0.015', pitchMin: '1.0228', pitchMax: '1.0745' },
    { size: '1-1/4"-7', oversize: '0.015', pitchMin: '1.1478', pitchMax: '1.2055' },
    { size: '1-3/8"-6', oversize: '0.015', pitchMin: '1.2667', pitchMax: '1.3352' },
    { size: '1-1/2"-6', oversize: '0.015', pitchMin: '1.3917', pitchMax: '1.4677' },
    { size: '1-5/8"-5-1/2', oversize: '0.015', pitchMin: '1.5046', pitchMax: '1.5911' },
    { size: '1-3/4"-5', oversize: '0.015', pitchMin: '1.6201', pitchMax: '1.7175' },
    { size: '1-7/8"-4-1/2', oversize: '0.015', pitchMin: '1.7594', pitchMax: '1.8719' },
    { size: '2"-4-1/2', oversize: '0.015', pitchMin: '1.8844', pitchMax: '2.0019' },
    { size: '2-1/4"-4-1/2', oversize: '0.015', pitchMin: '2.1344', pitchMax: '2.2594' },
    { size: '2-1/2"-4', oversize: '0.015', pitchMin: '2.3376', pitchMax: '2.4876' },
    { size: '2-3/4"-4', oversize: '0.015', pitchMin: '2.5876', pitchMax: '2.7451' },
    { size: '3"-4', oversize: '0.015', pitchMin: '2.8376', pitchMax: '3.0026' },
    { size: '3-1/4"-4', oversize: '0.015', pitchMin: '3.0876', pitchMax: '3.2601' },
    { size: '3-1/2"-4', oversize: '0.015', pitchMin: '3.3376', pitchMax: '3.5176' },
    { size: '3-3/4"-4', oversize: '0.015', pitchMin: '3.5876', pitchMax: '3.7751' },
    { size: '4"-4', oversize: '0.015', pitchMin: '3.8376', pitchMax: '4.0351' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

<div className="relative py-20 overflow-hidden">
  <img
    src="/AllHero.jpg"
    alt="Nut Dimensions Background"
    className="absolute inset-0 w-full h-full object-cover"
  />
  <div
    className="absolute inset-0 bg-[#153063]"
    style={{ opacity: 0.85 }}
  ></div>
  <div className="max-w-7xl mx-auto px-6 relative z-10">
    <h1 className="text-5xl font-bold text-white mb-4 border-b-4 border-white inline-block pb-2">
      NUT DIMENSIONS
    </h1>
    <div className="flex items-center text-white text-sm mt-4">
      <Link to="/" className="hover:underline">
        Home
      </Link>
      <ChevronRight className="w-4 h-4 mx-2" />
      <span>Nut Dimensions</span>
    </div>
  </div>
</div>


      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            HEX NUT & JAM NUT DIMENSIONS
          </h2>

          <div className="mb-8 flex justify-center">
            <img
              src="/HXDimen.webp"
              alt="Hex Nut & JAM Nut Diagram"
              className="max-w-full h-auto rounded-lg"
              style={{ maxHeight: '300px' }}
            />
          </div>

          <div className="mb-12">
            <h3 className="text-xl font-bold text-[#1e3a8a] mb-4 pb-2 border-b-2 border-[#1e3a8a]">Table III - HEX NUT DIMENSIONS</h3>
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-300 text-sm">
                <thead>
                  <tr className="bg-[#1e3a8a] text-white">
                    <th className="px-4 py-3 text-left font-semibold border-r border-white" rowSpan={2}>Nut Size</th>
                    <th className="px-4 py-3 text-center font-semibold border-r border-white" colSpan={2}>Hex Nut</th>
                    <th className="px-4 py-3 text-center font-semibold border-r border-white" rowSpan={2}>C</th>
                    <th className="px-4 py-3 text-center font-semibold border-r border-white" rowSpan={2}>D</th>
                    <th className="px-4 py-3 text-center font-semibold border-r border-white" rowSpan={2}>E</th>
                    <th className="px-4 py-3 text-center font-semibold" rowSpan={2}>F</th>
                  </tr>
                  <tr className="bg-[#1e3a8a] text-white">
                    <th className="px-4 py-2 text-center font-semibold border-r border-white">A</th>
                    <th className="px-4 py-2 text-center font-semibold border-r border-white">B (max)</th>
                  </tr>
                </thead>
                <tbody>
                  {hexNutData.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-blue-50'}>
                      <td className="px-4 py-3 border border-gray-300 font-medium">{row.size}</td>
                      <td className="px-4 py-3 border border-gray-300 text-center">{row.a}</td>
                      <td className="px-4 py-3 border border-gray-300 text-center">{row.b}</td>
                      <td className="px-4 py-3 border border-gray-300 text-center">{row.c}</td>
                      <td className="px-4 py-3 border border-gray-300 text-center">{row.d}</td>
                      <td className="px-4 py-3 border border-gray-300 text-center">{row.e}</td>
                      <td className="px-4 py-3 border border-gray-300 text-center">{row.f}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-[#1e3a8a] mb-4 pb-2 border-b-2 border-[#1e3a8a]">Table V - HEX JAM NUT DIMENSIONS</h3>
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-300 text-sm">
                <thead>
                  <tr className="bg-[#1e3a8a] text-white">
                    <th className="px-4 py-3 text-left font-semibold border-r border-white">Nut Size</th>
                    <th className="px-4 py-3 text-center font-semibold border-r border-white">Hex Jam Nut<br/>A</th>
                    <th className="px-4 py-3 text-center font-semibold border-r border-white">B</th>
                    <th className="px-4 py-3 text-center font-semibold border-r border-white">C</th>
                    <th className="px-4 py-3 text-center font-semibold border-r border-white">D</th>
                    <th className="px-4 py-3 text-center font-semibold">E</th>
                  </tr>
                </thead>
                <tbody>
                  {hexJamNutData.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-blue-50'}>
                      <td className="px-4 py-3 border border-gray-300 font-medium">{row.size}</td>
                      <td className="px-4 py-3 border border-gray-300 text-center">{row.a}</td>
                      <td className="px-4 py-3 border border-gray-300 text-center">{row.b}</td>
                      <td className="px-4 py-3 border border-gray-300 text-center">{row.c}</td>
                      <td className="px-4 py-3 border border-gray-300 text-center">{row.d}</td>
                      <td className="px-4 py-3 border border-gray-300 text-center">{row.e}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            HEAVY HEX NUT DIMENSIONS
          </h2>

           <div className="mb-8 flex justify-center">
            <img
              src="/HXDimen.webp"
              alt="Square Bolt Diagram"
              className="max-w-full h-auto rounded-lg"
              style={{ maxHeight: '300px' }}
            />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-sm">
              <thead>
                <tr className="bg-[#1e3a8a] text-white">
                  <th className="px-4 py-3 text-left font-semibold border-r border-white">Nut Size</th>
                  <th className="px-4 py-3 text-center font-semibold border-r border-white">Heavy Hex Jam Nut<br/>A</th>
                  <th className="px-4 py-3 text-center font-semibold border-r border-white">B</th>
                  <th className="px-4 py-3 text-center font-semibold border-r border-white">C</th>
                  <th className="px-4 py-3 text-center font-semibold border-r border-white">D</th>
                  <th className="px-4 py-3 text-center font-semibold">E</th>
                </tr>
              </thead>
              <tbody>
                {heavyHexNutData.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-blue-50'}>
                    <td className="px-4 py-3 border border-gray-300 font-medium">{row.size}</td>
                    <td className="px-4 py-3 border border-gray-300 text-center">{row.a}</td>
                    <td className="px-4 py-3 border border-gray-300 text-center">{row.b}</td>
                    <td className="px-4 py-3 border border-gray-300 text-center">{row.c}</td>
                    <td className="px-4 py-3 border border-gray-300 text-center">{row.d}</td>
                    <td className="px-4 py-3 border border-gray-300 text-center">{row.e}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            THREAD DIMENSIONS & OVERSIZING ALLOWANCES
          </h2>
          <p className="text-center text-gray-600 mb-6 italic">For Hex Unified Coarse Thread Nuts</p>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-[#1e3a8a] mb-4 pb-2 border-b-2 border-[#1e3a8a]">
              Table VIII - THREAD DIMENSIONS & OVERSIZING ALLOWANCES<br/>
              <span className="text-sm font-normal">FOR HEX UNIFIED COARSE THREAD NUTS</span>
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-300 text-sm">
                <thead>
                  <tr className="bg-[#1e3a8a] text-white">
                    <th className="px-4 py-3 text-left font-semibold border-r border-white">Size & Thread Pitch</th>
                    <th className="px-4 py-3 text-center font-semibold border-r border-white">Oversized Allowance</th>
                    <th className="px-4 py-3 text-center font-semibold" colSpan={2}>Pitch Diameter</th>
                  </tr>
                  <tr className="bg-[#1e3a8a] text-white">
                    <th className="px-4 py-2 border-r border-white"></th>
                    <th className="px-4 py-2 border-r border-white"></th>
                    <th className="px-4 py-2 text-center font-semibold border-r border-white">min</th>
                    <th className="px-4 py-2 text-center font-semibold">max</th>
                  </tr>
                </thead>
                <tbody>
                  {threadData.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-blue-50'}>
                      <td className="px-4 py-3 border border-gray-300 font-medium">{row.size}</td>
                      <td className="px-4 py-3 border border-gray-300 text-center">{row.oversize}</td>
                      <td className="px-4 py-3 border border-gray-300 text-center">{row.pitchMin}</td>
                      <td className="px-4 py-3 border border-gray-300 text-center">{row.pitchMax}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-bold text-gray-900 mb-2">Notes:</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="font-semibold">HEX NUT DIMENSIONS</li>
              <li>Specifications cover hex nuts in sizes from 1/4" through 4".</li>
              <li>All dimensions are in inches unless otherwise specified.</li>
              <li>These dimensions comply with ASME B18.2.2 standards.</li>
              <li>Thread dimensions and oversizing allowances are critical for proper fit and function.</li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
};

export default NutDimensionsPage;
