import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import ScrollToTop from '../components/ScrollToTop';

const BoltDimensionsPage = () => {
  const hexBoltData = [
    { size: '1/4"', aThread: '0.250', b: '7/16', cMax: '0.163', d: '11/64', eMin: '0.50', eMax: '0.51', fOverE: '0.750', fOverE2: '1.000' },
    { size: '5/16"', aThread: '0.313', b: '1/2', cMax: '0.211', d: '7/32', eMin: '0.56', eMax: '0.57', fOverE: '0.875', fOverE2: '1.125' },
    { size: '3/8"', aThread: '0.375', b: '9/16', cMax: '0.243', d: '1/4', eMin: '0.62', eMax: '0.63', fOverE: '1.000', fOverE2: '1.250' },
    { size: '7/16"', aThread: '0.438', b: '5/8', cMax: '0.291', d: '19/64', eMin: '0.69', eMax: '0.70', fOverE: '1.125', fOverE2: '1.375' },
    { size: '1/2"', aThread: '0.500', b: '3/4', cMax: '0.323', d: '11/32', eMin: '0.75', eMax: '0.77', fOverE: '1.250', fOverE2: '1.500' },
    { size: '9/16"', aThread: '0.563', b: '13/16', cMax: '0.371', d: '3/8', eMin: '0.81', eMax: '0.83', fOverE: '1.250', fOverE2: '1.625' },
    { size: '5/8"', aThread: '0.625', b: '7/8', cMax: '0.403', d: '27/64', eMin: '0.88', eMax: '0.90', fOverE: '1.500', fOverE2: '1.750' },
    { size: '3/4"', aThread: '0.750', b: '1-1/8', cMax: '0.483', d: '1/2', eMin: '1.06', eMax: '1.08', fOverE: '1.750', fOverE2: '2.000' },
    { size: '7/8"', aThread: '0.875', b: '1-5/16', cMax: '0.563', d: '19/32', eMin: '1.25', eMax: '1.27', fOverE: '2.000', fOverE2: '2.250' },
    { size: '1"', aThread: '1.000', b: '1-1/2', cMax: '0.627', d: '21/32', eMin: '1.44', eMax: '1.47', fOverE: '2.250', fOverE2: '2.500' },
    { size: '1-1/8"', aThread: '1.125', b: '1-11/16', cMax: '0.718', d: '3/4', eMin: '1.62', eMax: '1.66', fOverE: '2.500', fOverE2: '2.750' },
    { size: '1-1/4"', aThread: '1.250', b: '1-7/8', cMax: '0.813', d: '27/32', eMin: '1.81', eMax: '1.86', fOverE: '2.750', fOverE2: '3.000' },
    { size: '1-3/8"', aThread: '1.375', b: '2-1/16', cMax: '0.878', d: '29/32', eMin: '2.00', eMax: '2.05', fOverE: '3.000', fOverE2: '3.250' },
    { size: '1-1/2"', aThread: '1.500', b: '2-1/4', cMax: '0.974', d: '1', eMin: '2.19', eMax: '2.25', fOverE: '3.250', fOverE2: '3.500' },
    { size: '1-5/8"', aThread: '1.625', b: '2-7/16', cMax: '1.037', d: '1-3/32', eMin: '2.38', eMax: '2.44', fOverE: '3.500', fOverE2: '3.750' },
    { size: '1-3/4"', aThread: '1.750', b: '2-5/8', cMax: '1.134', d: '1-3/16', eMin: '2.56', eMax: '2.64', fOverE: '3.750', fOverE2: '4.000' },
    { size: '1-7/8"', aThread: '1.875', b: '2-13/16', cMax: '1.196', d: '1-9/32', eMin: '2.75', eMax: '2.83', fOverE: '4.000', fOverE2: '4.250' },
    { size: '2"', aThread: '2.000', b: '3', cMax: '1.293', d: '1-3/8', eMin: '2.94', eMax: '3.03', fOverE: '4.250', fOverE2: '4.500' },
    { size: '2-1/4"', aThread: '2.250', b: '3-3/8', cMax: '1.454', d: '1-9/16', eMin: '3.31', eMax: '3.42', fOverE: '4.750', fOverE2: '5.000' },
    { size: '2-1/2"', aThread: '2.500', b: '3-3/4', cMax: '1.631', d: '1-3/4', eMin: '3.69', eMax: '3.81', fOverE: '5.250', fOverE2: '5.500' },
    { size: '2-3/4"', aThread: '2.750', b: '4-1/8', cMax: '1.815', d: '1-15/16', eMin: '4.06', eMax: '4.19', fOverE: '5.750', fOverE2: '6.000' },
    { size: '3"', aThread: '3.000', b: '4-1/2', cMax: '1.968', d: '2-1/8', eMin: '4.44', eMax: '4.58', fOverE: '6.250', fOverE2: '6.500' },
    { size: '3-1/4"', aThread: '3.250', b: '4-7/8', cMax: '2.152', d: '2-5/16', eMin: '4.81', eMax: '4.97', fOverE: '6.750', fOverE2: '7.000' },
    { size: '3-1/2"', aThread: '3.500', b: '5-1/4', cMax: '2.337', d: '2-1/2', eMin: '5.19', eMax: '5.36', fOverE: '7.250', fOverE2: '7.500' },
    { size: '3-3/4"', aThread: '3.750', b: '5-5/8', cMax: '2.521', d: '2-11/16', eMin: '5.56', eMax: '5.75', fOverE: '7.750', fOverE2: '8.000' },
    { size: '4"', aThread: '4.000', b: '6', cMax: '2.705', d: '2-7/8', eMin: '5.94', eMax: '6.14', fOverE: '8.250', fOverE2: '8.500' },
  ];

  const squareBoltData = [
    { size: '1/4"', aMm: '6.350', b: '7/16', cMm: '4.166', e: '9/16', eMin: '0.500', eMax: '0.51', fOverE: '0.750', fOverE2: '1.000' },
    { size: '5/16"', aMm: '7.938', b: '1/2', cMm: '5.359', e: '11/16', eMin: '0.62', eMax: '0.63', fOverE: '0.875', fOverE2: '1.125' },
    { size: '3/8"', aMm: '9.525', b: '9/16', cMm: '6.172', e: '3/4', eMin: '0.69', eMax: '0.70', fOverE: '1.000', fOverE2: '1.250' },
    { size: '7/16"', aMm: '11.113', b: '5/8', cMm: '7.391', e: '7/8', eMin: '0.81', eMax: '0.83', fOverE: '1.125', fOverE2: '1.375' },
    { size: '1/2"', aMm: '12.700', b: '3/4', cMm: '8.204', e: '15/16', eMin: '0.88', eMax: '0.90', fOverE: '1.250', fOverE2: '1.500' },
    { size: '9/16"', aMm: '14.288', b: '13/16', cMm: '9.423', e: '1-1/16', eMin: '0.94', eMax: '0.97', fOverE: '1.250', fOverE2: '1.625' },
    { size: '5/8"', aMm: '15.875', b: '7/8', cMm: '10.236', e: '1-3/16', eMin: '1.06', eMax: '1.08', fOverE: '1.500', fOverE2: '1.750' },
    { size: '3/4"', aMm: '19.050', b: '1-1/16', cMm: '12.268', e: '1-7/16', eMin: '1.25', eMax: '1.27', fOverE: '1.750', fOverE2: '2.000' },
    { size: '7/8"', aMm: '22.225', b: '1-1/4', cMm: '14.300', e: '1-11/16', eMin: '1.44', eMax: '1.47', fOverE: '2.000', fOverE2: '2.250' },
    { size: '1"', aMm: '25.400', b: '1-1/2', cMm: '15.926', e: '1-15/16', eMin: '1.62', eMax: '1.66', fOverE: '2.250', fOverE2: '2.500' },
    { size: '1-1/8"', aMm: '28.575', b: '1-11/16', cMm: '18.237', e: '2-3/16', eMin: '1.81', eMax: '1.86', fOverE: '2.500', fOverE2: '2.750' },
    { size: '1-1/4"', aMm: '31.750', b: '1-7/8', cMm: '20.650', e: '2-7/16', eMin: '2.00', eMax: '2.05', fOverE: '2.750', fOverE2: '3.000' },
    { size: '1-3/8"', aMm: '34.925', b: '2-1/16', cMm: '22.555', e: '2-11/16', eMin: '2.19', eMax: '2.25', fOverE: '3.000', fOverE2: '3.250' },
    { size: '1-1/2"', aMm: '38.100', b: '2-1/4', cMm: '24.765', e: '2-15/16', eMin: '2.38', eMax: '2.44', fOverE: '3.250', fOverE2: '3.500' },
  ];

  const heavyHexBoltData = [
    { size: '1/2"', aThread: '0.515', b: '7/8', cMax: '0.323', d: '19/32', eMin: '0.56', eMax: '0.58', fOverE: '0.750', fOverE2: '1.000' },
    { size: '5/8"', aThread: '0.642', b: '1-1/16', cMax: '0.403', d: '23/64', eMin: '0.69', eMax: '0.71', fOverE: '0.875', fOverE2: '1.125' },
    { size: '3/4"', aThread: '0.768', b: '1-1/4', cMax: '0.483', d: '27/64', eMin: '0.81', eMax: '0.84', fOverE: '1.000', fOverE2: '1.250' },
    { size: '7/8"', aThread: '0.895', b: '1-7/16', cMax: '0.563', d: '31/64', eMin: '0.94', eMax: '0.97', fOverE: '1.125', fOverE2: '1.375' },
    { size: '1"', aThread: '1.022', b: '1-5/8', cMax: '0.627', d: '35/64', eMin: '1.06', eMax: '1.10', fOverE: '1.250', fOverE2: '1.500' },
    { size: '1-1/8"', aThread: '1.149', b: '1-13/16', cMax: '0.718', d: '3/4', eMin: '1.19', eMax: '1.23', fOverE: '1.375', fOverE2: '1.625' },
    { size: '1-1/4"', aThread: '1.277', b: '2', cMax: '0.813', d: '27/32', eMin: '1.31', eMax: '1.36', fOverE: '1.500', fOverE2: '1.750' },
    { size: '1-3/8"', aThread: '1.404', b: '2-3/16', cMax: '0.878', d: '29/32', eMin: '1.44', eMax: '1.49', fOverE: '1.625', fOverE2: '1.875' },
    { size: '1-1/2"', aThread: '1.531', b: '2-3/8', cMax: '0.974', d: '1-1/32', eMin: '1.56', eMax: '1.63', fOverE: '1.750', fOverE2: '2.000' },
    { size: '1-5/8"', aThread: '1.658', b: '2-9/16', cMax: '1.037', d: '1-1/8', eMin: '1.69', eMax: '1.76', fOverE: '1.875', fOverE2: '2.125' },
    { size: '1-3/4"', aThread: '1.785', b: '2-3/4', cMax: '1.134', d: '1-7/32', eMin: '1.81', eMax: '1.89', fOverE: '2.000', fOverE2: '2.250' },
    { size: '1-7/8"', aThread: '1.912', b: '2-15/16', cMax: '1.196', d: '1-19/64', eMin: '1.94', eMax: '2.03', fOverE: '2.125', fOverE2: '2.375' },
    { size: '2"', aThread: '2.039', b: '3-1/8', cMax: '1.293', d: '1-11/32', eMin: '2.06', eMax: '2.16', fOverE: '2.250', fOverE2: '2.500' },
    { size: '2-1/4"', aThread: '2.305', b: '3-1/2', cMax: '1.454', d: '1-1/2', eMin: '2.31', eMax: '2.42', fOverE: '2.500', fOverE2: '2.750' },
    { size: '2-1/2"', aThread: '2.559', b: '3-7/8', cMax: '1.631', d: '1-21/32', eMin: '2.56', eMax: '2.69', fOverE: '2.750', fOverE2: '3.000' },
    { size: '2-3/4"', aThread: '2.827', b: '4-1/4', cMax: '1.815', d: '1-27/32', eMin: '2.81', eMax: '2.95', fOverE: '3.000', fOverE2: '3.250' },
    { size: '3"', aThread: '3.081', b: '4-5/8', cMax: '1.968', d: '2', eMin: '3.06', eMax: '3.22', fOverE: '3.250', fOverE2: '3.500' },
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
            BOLT DIMENSIONS
          </h1>
          <div className="flex items-center text-white text-sm mt-4">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span>Bolt Dimensions</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            HEX BOLT DIMENSIONS
          </h2>

          <div className="mb-8 flex justify-center">
            <img
              src="https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Hex Bolt Diagram"
              className="max-w-full h-auto rounded-lg"
              style={{ maxHeight: '300px' }}
            />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-sm">
              <thead>
                <tr className="bg-[#1e3a8a] text-white">
                  <th className="px-4 py-3 text-left font-semibold border-r border-white" rowSpan={2}>Bolt Size</th>
                  <th className="px-4 py-3 text-center font-semibold border-r border-white" rowSpan={2}>A (max)</th>
                  <th className="px-4 py-3 text-center font-semibold border-r border-white" rowSpan={2}>B</th>
                  <th className="px-4 py-3 text-center font-semibold border-r border-white" rowSpan={2}>C (max)</th>
                  <th className="px-4 py-3 text-center font-semibold border-r border-white" rowSpan={2}>D</th>
                  <th className="px-4 py-3 text-center font-semibold border-r border-white" colSpan={2}>E</th>
                  <th className="px-4 py-3 text-center font-semibold" colSpan={2}>F<br/>Thread Length<br/>for Bolt Length</th>
                </tr>
                <tr className="bg-[#1e3a8a] text-white">
                  <th className="px-4 py-2 text-center font-semibold border-r border-white">min</th>
                  <th className="px-4 py-2 text-center font-semibold border-r border-white">max</th>
                  <th className="px-4 py-2 text-center font-semibold border-r border-white">6" and<br/>Shorter</th>
                  <th className="px-4 py-2 text-center font-semibold">over 6"</th>
                </tr>
              </thead>
              <tbody>
                {hexBoltData.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 border border-gray-300 font-medium">{row.size}</td>
                    <td className="px-4 py-3 border border-gray-300 text-center">{row.aThread}</td>
                    <td className="px-4 py-3 border border-gray-300 text-center">{row.b}</td>
                    <td className="px-4 py-3 border border-gray-300 text-center">{row.cMax}</td>
                    <td className="px-4 py-3 border border-gray-300 text-center">{row.d}</td>
                    <td className="px-4 py-3 border border-gray-300 text-center">{row.eMin}</td>
                    <td className="px-4 py-3 border border-gray-300 text-center">{row.eMax}</td>
                    <td className="px-4 py-3 border border-gray-300 text-center">{row.fOverE}</td>
                    <td className="px-4 py-3 border border-gray-300 text-center">{row.fOverE2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-bold text-gray-900 mb-2">Notes:</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><span className="font-semibold">Body Diameter:</span> There may be a measurable swell or fill under the head or side seam on the body roll to exceed the basic bolt diameter by the following:</li>
              <li className="ml-4">0.010" for sizes up to 1/2"</li>
              <li className="ml-4">0.020" for sizes 5/8" and 3/4"</li>
              <li className="ml-4">0.030" for sizes over 3/4" to 1-1/4"</li>
              <li className="ml-4">0.060" for sizes over 1-1/4" to 2"</li>
              <li className="ml-4">0.090" for sizes over 2" to 3"</li>
              <li className="ml-4">0.120" for sizes over 3"</li>
              <li><span className="font-semibold">Reduced Diameter Body:</span> Body may be obtained in "reduced diameter body." Where "reduced body diameter" is specified, the body diameter may be reduced to approximately the pitch diameter of the thread. A shoulder at full body diameter under the head may be supplied at option of the manufacturer.</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            HEAVY HEX BOLT DIMENSIONS
          </h2>

          <div className="mb-8 flex justify-center">
            <img
              src="https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Heavy Hex Bolt Diagram"
              className="max-w-full h-auto rounded-lg"
              style={{ maxHeight: '300px' }}
            />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-sm">
              <thead>
                <tr className="bg-[#1e3a8a] text-white">
                  <th className="px-4 py-3 text-left font-semibold border-r border-white" rowSpan={2}>Bolt Size</th>
                  <th className="px-4 py-3 text-center font-semibold border-r border-white" rowSpan={2}>A (max)</th>
                  <th className="px-4 py-3 text-center font-semibold border-r border-white" rowSpan={2}>B</th>
                  <th className="px-4 py-3 text-center font-semibold border-r border-white" rowSpan={2}>C (max)</th>
                  <th className="px-4 py-3 text-center font-semibold border-r border-white" rowSpan={2}>D</th>
                  <th className="px-4 py-3 text-center font-semibold border-r border-white" colSpan={2}>E</th>
                  <th className="px-4 py-3 text-center font-semibold" colSpan={2}>F<br/>Thread Length<br/>for Bolt Length</th>
                </tr>
                <tr className="bg-[#1e3a8a] text-white">
                  <th className="px-4 py-2 text-center font-semibold border-r border-white">min</th>
                  <th className="px-4 py-2 text-center font-semibold border-r border-white">max</th>
                  <th className="px-4 py-2 text-center font-semibold border-r border-white">6" and<br/>Shorter</th>
                  <th className="px-4 py-2 text-center font-semibold">over 6"</th>
                </tr>
              </thead>
              <tbody>
                {heavyHexBoltData.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 border border-gray-300 font-medium">{row.size}</td>
                    <td className="px-4 py-3 border border-gray-300 text-center">{row.aThread}</td>
                    <td className="px-4 py-3 border border-gray-300 text-center">{row.b}</td>
                    <td className="px-4 py-3 border border-gray-300 text-center">{row.cMax}</td>
                    <td className="px-4 py-3 border border-gray-300 text-center">{row.d}</td>
                    <td className="px-4 py-3 border border-gray-300 text-center">{row.eMin}</td>
                    <td className="px-4 py-3 border border-gray-300 text-center">{row.eMax}</td>
                    <td className="px-4 py-3 border border-gray-300 text-center">{row.fOverE}</td>
                    <td className="px-4 py-3 border border-gray-300 text-center">{row.fOverE2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-bold text-gray-900 mb-2">Notes:</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><span className="font-semibold">Body Diameter:</span> There may be a measurable swell or fill under the head or side seam on the body roll to exceed the basic bolt diameter by the following:</li>
              <li className="ml-4">0.010" for sizes up to 1/2"</li>
              <li className="ml-4">0.020" for sizes 5/8" and 3/4"</li>
              <li className="ml-4">0.030" for sizes over 3/4" to 1-1/4"</li>
              <li className="ml-4">0.060" for sizes over 1-1/4" to 2"</li>
              <li className="ml-4">0.090" for sizes over 2" to 3"</li>
              <li><span className="font-semibold">Reduced Diameter Body:</span> Body may be obtained in "reduced diameter body." Where "reduced body diameter" is specified, the body diameter may be reduced to approximately the pitch diameter of the thread. A shoulder at full body diameter under the head may be supplied at option of the manufacturer.</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8 mt-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            SQUARE BOLT DIMENSIONS
          </h2>

          <div className="mb-8 flex justify-center">
            <img
              src="https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Square Bolt Diagram"
              className="max-w-full h-auto rounded-lg"
              style={{ maxHeight: '300px' }}
            />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-sm">
              <thead>
                <tr className="bg-[#1e3a8a] text-white">
                  <th className="px-4 py-3 text-left font-semibold border-r border-white" rowSpan={2}>Bolt Size</th>
                  <th className="px-4 py-3 text-center font-semibold border-r border-white" rowSpan={2}>A (max)</th>
                  <th className="px-4 py-3 text-center font-semibold border-r border-white" rowSpan={2}>B</th>
                  <th className="px-4 py-3 text-center font-semibold border-r border-white" rowSpan={2}>C (max)</th>
                  <th className="px-4 py-3 text-center font-semibold border-r border-white" rowSpan={2}>E</th>
                  <th className="px-4 py-3 text-center font-semibold border-r border-white" colSpan={2}>E</th>
                  <th className="px-4 py-3 text-center font-semibold" colSpan={2}>F<br/>Thread Length<br/>for Bolt Lengths</th>
                </tr>
                <tr className="bg-[#1e3a8a] text-white">
                  <th className="px-4 py-2 text-center font-semibold border-r border-white">min</th>
                  <th className="px-4 py-2 text-center font-semibold border-r border-white">max</th>
                  <th className="px-4 py-2 text-center font-semibold border-r border-white">6" and<br/>shorter</th>
                  <th className="px-4 py-2 text-center font-semibold">over 6"</th>
                </tr>
              </thead>
              <tbody>
                {squareBoltData.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 border border-gray-300 font-medium">{row.size}</td>
                    <td className="px-4 py-3 border border-gray-300 text-center">{row.aMm}</td>
                    <td className="px-4 py-3 border border-gray-300 text-center">{row.b}</td>
                    <td className="px-4 py-3 border border-gray-300 text-center">{row.cMm}</td>
                    <td className="px-4 py-3 border border-gray-300 text-center">{row.e}</td>
                    <td className="px-4 py-3 border border-gray-300 text-center">{row.eMin}</td>
                    <td className="px-4 py-3 border border-gray-300 text-center">{row.eMax}</td>
                    <td className="px-4 py-3 border border-gray-300 text-center">{row.fOverE}</td>
                    <td className="px-4 py-3 border border-gray-300 text-center">{row.fOverE2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-bold text-gray-900 mb-2">Table III</h3>
            <h4 className="font-semibold text-gray-800 mb-3">SQUARE BOLT DIMENSIONS</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><span className="font-semibold">Note:</span></li>
              <li className="ml-4">1. These apply to be a measurable swell of fill under the head on any side seam on the body roll to exceed the basic bolt diameter by the following:</li>
              <li className="ml-8">0.010" for sizes up to 1/2"</li>
              <li className="ml-8">0.020" for sizes 5/8" and 3/4"</li>
              <li className="ml-8">0.030" for sizes over 3/4" to 1-1/4"</li>
              <li className="ml-8">0.060" for sizes over 1-1/4" to 2"</li>
              <li className="ml-8">0.090" for sizes over 2" to 3"</li>
              <li className="ml-8">0.120" for sizes over 3"</li>
              <li className="ml-4">2. Body may be obtained in "reduced diameter body." Where "reduced body diameter" is specified, the body diameter may be reduced to approximately the pitch diameter of the thread. A shoulder at full body diameter under the head may be supplied at option of the manufacturer.</li>
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

export default BoltDimensionsPage;
