import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import ScrollToTop from '../components/ScrollToTop';

const WeightChartPage = () => {
  const threadWeightData = [
    { length: '16 mm', m5: '0.448', m6: '0.743', m8: '1.590', m10: '3.211', m12: '', m14: '', m16: '', m18: '', m20: '', m22: '' },
    { length: '20 mm', m5: '0.598', m6: '0.812', m8: '1.711', m10: '3.411', m12: '4.892', m14: '', m16: '', m18: '', m20: '', m22: '' },
    { length: '25 mm', m5: '0.650', m6: '0.897', m8: '1.871', m10: '3.660', m12: '5.252', m14: '8.170', m16: '', m18: '', m20: '', m22: '' },
    { length: '30 mm', m5: '0.737', m6: '1.010', m8: '2.070', m10: '3.912', m12: '5.574', m14: '9.690', m16: '10.707', m18: '', m20: '18.657', m22: '' },
    { length: '35 mm', m5: '0.824', m6: '1.120', m8: '2.271', m10: '4.223', m12: '5.974', m14: '10.000', m16: '11.418', m18: '', m20: '18.608', m22: '' },
    { length: '40 mm', m5: '0.881', m6: '1.230', m8: '2.470', m10: '4.533', m12: '6.410', m14: '10.288', m16: '12.107', m18: '16.587', m20: '20.747', m22: '' },
    { length: '45 mm', m5: '0.958', m6: '1.340', m8: '2.671', m10: '4.840', m12: '6.858', m14: '10.504', m16: '12.821', m18: '17.241', m20: '21.739', m22: '' },
    { length: '50 mm', m5: '1.030', m6: '1.450', m8: '2.870', m10: '5.155', m12: '7.269', m14: '11.261', m16: '13.624', m18: '17.857', m20: '22.727', m22: '28.409' },
    { length: '55 mm', m5: '', m6: '1.560', m8: '3.071', m10: '5.464', m12: '7.740', m14: '14.409', m16: '18.868', m20: '23.810', m18: '', m22: '30.120' },
    { length: '60 mm', m5: '', m6: '1.670', m8: '3.270', m10: '5.774', m12: '8.183', m14: '12.335', m16: '15.244', m18: '20.000', m20: '25.125', m22: '32.051' },
    { length: '65 mm', m5: '', m6: '1.781', m8: '3.472', m10: '6.083', m12: '8.621', m14: '12.626', m16: '16.026', m18: '21.008', m20: '28.455', m22: '34.094' },
    { length: '70 mm', m5: '', m6: '1.890', m8: '3.671', m10: '6.394', m12: '9.058', m14: '12.987', m16: '16.835', m18: '27.124', m20: '27.778', m22: '35.461' },
    { length: '75 mm', m5: '', m6: '2.000', m8: '3.873', m10: '6.702', m12: '9.506', m14: '13.228', m16: '17.606', m18: '23.256', m20: '29.070', m22: '39.063' },
    { length: '80 mm', m5: '', m6: '2.111', m8: '4.072', m10: '7.013', m12: '10.000', m14: '13.889', m16: '18.248', m18: '24.510', m20: '30.303', m22: '40.000' },
    { length: '90 mm', m5: '', m6: '', m8: '4.472', m10: '7.634', m12: '10.917', m14: '14.925', m16: '19.841', m18: '26.042', m20: '33.113', m22: '41.667' },
    { length: '100 mm', m5: '', m6: '', m8: '4.873', m10: '8.251', m12: '11.820', m14: '16.340', m16: '21.459', m18: '27.778', m20: '35.714', m22: '46.296' },
    { length: '110 mm', m5: '', m6: '', m8: '', m10: '8.881', m12: '12.723', m14: '17.730', m16: '23.041', m18: '31.250', m20: '38.168', m22: '47.170' },
    { length: '120 mm', m5: '', m6: '', m8: '', m10: '9.506', m12: '13.624', m14: '18.797', m16: '24.631', m18: '32.895', m20: '40.984', m22: '50.000' },
    { length: '130 mm', m5: '', m6: '', m8: '', m10: '10.101', m12: '14.535', m14: '20.000', m16: '26.316', m18: '34.722', m20: '43.478', m22: '52.632' },
    { length: '140 mm', m5: '', m6: '', m8: '', m10: '10.707', m12: '15.432', m14: '20.833', m16: '27.933', m18: '48.296', m20: '48.515', m22: '55.556' },
    { length: '150 mm', m5: '', m6: '', m8: '', m10: '11.312', m12: '16.340', m14: '22.222', m16: '29.412', m18: '37.594', m20: '48.544', m22: '58.824' },
    { length: '160 mm', m5: '', m6: '', m8: '', m10: '11.905', m12: '17.241', m14: '24.272', m16: '31.056', m18: '40.984', m20: '50.505', m22: '61.728' },
    { length: '170 mm', m5: '', m6: '', m8: '', m10: '12.500', m12: '18.116', m14: '', m16: '32.680', m18: '53.191', m20: '', m22: '64.935' },
    { length: '180 mm', m5: '', m6: '', m8: '', m10: '13.123', m12: '19.011', m14: '26.882', m16: '34.247', m18: '55.556', m20: '', m22: '67.568' },
    { length: '190 mm', m5: '', m6: '', m8: '', m10: '13.798', m12: '19.920', m14: '', m16: '35.971', m18: '58.140', m20: '', m22: '70.423' },
    { length: '200 mm', m5: '', m6: '', m8: '', m10: '14.327', m12: '20.833', m14: '29.586', m16: '37.594', m18: '60.976', m20: '49.020', m22: '73.529' },
    { length: '220 mm', m5: '', m6: '', m8: '', m10: '15.528', m12: '22.624', m14: '', m16: '40.650', m18: '65.789', m20: '', m22: '79.365' },
    { length: '240 mm', m5: '', m6: '', m8: '', m10: '16.722', m12: '24.510', m14: '', m16: '43.860', m18: '71.429', m20: '', m22: '84.746' },
    { length: '250 mm', m5: '', m6: '', m8: '', m10: '17.301', m12: '25.381', m14: '', m16: '45.455', m18: '74.627', m20: '', m22: '87.719' },
    { length: '260 mm', m5: '', m6: '', m8: '', m10: '17.921', m12: '26.316', m14: '', m16: '47.070', m18: '76.923', m20: '', m22: '90.909' },
    { length: '280 mm', m5: '', m6: '', m8: '', m10: '19.157', m12: '28.090', m14: '', m16: '50.505', m18: '81.967', m20: '', m22: '98.039' },
    { length: '300 mm', m5: '', m6: '', m8: '', m10: '20.325', m12: '29.940', m14: '', m16: '53.763', m18: '87.719', m20: '', m22: '104.167' },
    { length: '320 mm', m5: '', m6: '', m8: '', m10: '', m12: '31.646', m14: '', m16: '56.818', m18: '92.593', m20: '', m22: '' },
    { length: '340 mm', m5: '', m6: '', m8: '', m10: '', m12: '33.557', m14: '', m16: '60.241', m18: '98.039', m20: '', m22: '' },
    { length: '360 mm', m5: '', m6: '', m8: '', m10: '', m12: '35.211', m14: '', m16: '63.291', m18: '104.167', m20: '', m22: '' },
    { length: '380 mm', m5: '', m6: '', m8: '', m10: '', m12: '37.037', m14: '', m16: '66.667', m18: '108.696', m20: '', m22: '' },
    { length: '400 mm', m5: '', m6: '', m8: '', m10: '', m12: '39.063', m14: '', m16: '69.444', m18: '113.636', m20: '', m22: '' },
  ];

  const nutWeightData = [
    { size: '1/2" Nut', finishedHex: '3.75', heavyHex: '6.54', finishedJam: '2.62', heavyHexJam: '4.00', square: '5.78', heavySquare: '7.87' },
    { size: '5/8" Nut', finishedHex: '7.33', heavyHex: '11.9', finishedJam: '4.93', heavyHexJam: '6.96', square: '10.8', heavySquare: '14.3' },
    { size: '3/4" Nut', finishedHex: '11.9', heavyHex: '19.3', finishedJam: '7.70', heavyHexJam: '11.0', square: '15.4', heavySquare: '23.5' },
    { size: '7/8" Nut', finishedHex: '19.0', heavyHex: '29.7', finishedJam: '12.0', heavyHexJam: '16.7', square: '24.5', heavySquare: '36.2' },
    { size: '1" Nut', finishedHex: '28.3', heavyHex: '42.5', finishedJam: '17.6', heavyHexJam: '23.5', square: '35.3', heavySquare: '51.5' },
    { size: '1⅛" Nut', finishedHex: '40.3', heavyHex: '59.2', finishedJam: '24.7', heavyHexJam: '32.4', square: '52.5', heavySquare: '72.4' },
    { size: '1¼" Nut', finishedHex: '54.3', heavyHex: '78.6', finishedJam: '36.1', heavyHexJam: '45.8', square: '70.6', heavySquare: '95.5' },
    { size: '1⅜" Nut', finishedHex: '73.0', heavyHex: '102', finishedJam: '47.9', heavyHexJam: '59.3', square: '94.5', heavySquare: '125.0' },
    { size: '1½" Nut', finishedHex: '94.3', heavyHex: '131', finishedJam: '60.9', heavyHexJam: '74.8', square: '122', heavySquare: '161' },
    { size: '1⅝" Nut', finishedHex: '', heavyHex: '162', finishedJam: '', heavyHexJam: '91.6', square: '', heavySquare: '' },
    { size: '1¾" Nut', finishedHex: '151', heavyHex: '204', finishedJam: '100', heavyHexJam: '114', square: '', heavySquare: '' },
    { size: '1⅞" Nut', finishedHex: '', heavyHex: '241', finishedJam: '', heavyHexJam: '134', square: '', heavySquare: '' },
    { size: '2" Nut', finishedHex: '224', heavyHex: '299', finishedJam: '140', heavyHexJam: '165', square: '', heavySquare: '' },
    { size: '2¼" Nut', finishedHex: '', heavyHex: '419', finishedJam: '', heavyHexJam: '227', square: '', heavySquare: '' },
    { size: '2½" Nut', finishedHex: '', heavyHex: '584', finishedJam: '', heavyHexJam: '332', square: '', heavySquare: '' },
    { size: '2¾" Nut', finishedHex: '', heavyHex: '738', finishedJam: '', heavyHexJam: '429', square: '', heavySquare: '' },
    { size: '3" Nut', finishedHex: '', heavyHex: '950', finishedJam: '', heavyHexJam: '545', square: '', heavySquare: '' },
    { size: '3¼" Nut', finishedHex: '', heavyHex: '1184', finishedJam: '', heavyHexJam: '651', square: '', heavySquare: '' },
    { size: '3½" Nut', finishedHex: '', heavyHex: '1526', finishedJam: '', heavyHexJam: '851', square: '', heavySquare: '' },
    { size: '3¾" Nut', finishedHex: '', heavyHex: '1812', finishedJam: '', heavyHexJam: '1005', square: '', heavySquare: '' },
    { size: '4" Nut', finishedHex: '', heavyHex: '2180', finishedJam: '', heavyHexJam: '1200', square: '', heavySquare: '' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div
        className="relative bg-cover bg-center py-20"
        style={{
          backgroundImage:
            'linear-gradient(rgba(21, 48, 99, 0.85), rgba(21, 48, 99, 0.85)), url(https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-white mb-4 border-b-4 border-white inline-block pb-2">
            WEIGHT CHART
          </h1>
          <div className="flex items-center text-white text-sm mt-4">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span>Weight Chart</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Weight Chart For Fasteners Nuts and Bolts
          </h2>

          <div className="mb-12">
            <h3 className="text-xl font-bold bg-[#1e3a8a] text-white px-4 py-3 mb-0">
              MM THREADS AS PER IS 1363/67
            </h3>
            <p className="bg-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 border-b border-gray-300">
              APPROXIMATE WEIGHT IN KGS FOR 100 NOS
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border border-gray-300 text-xs">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-3 py-3 text-left font-bold border border-gray-300">LENGTH</th>
                    <th className="px-3 py-3 text-center font-bold border border-gray-300 bg-gray-200">DIAMETER<br/>M 5</th>
                    <th className="px-3 py-3 text-center font-bold border border-gray-300">M 6</th>
                    <th className="px-3 py-3 text-center font-bold border border-gray-300 bg-gray-200">M 8</th>
                    <th className="px-3 py-3 text-center font-bold border border-gray-300">M 10</th>
                    <th className="px-3 py-3 text-center font-bold border border-gray-300 bg-gray-200">M 12</th>
                    <th className="px-3 py-3 text-center font-bold border border-gray-300">M 14</th>
                    <th className="px-3 py-3 text-center font-bold border border-gray-300 bg-gray-200">M 16</th>
                    <th className="px-3 py-3 text-center font-bold border border-gray-300">M 18</th>
                    <th className="px-3 py-3 text-center font-bold border border-gray-300 bg-gray-200">M 20</th>
                    <th className="px-3 py-3 text-center font-bold border border-gray-300">M 22</th>
                  </tr>
                </thead>
                <tbody>
                  {threadWeightData.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-3 py-2 border border-gray-300 font-semibold text-left">
                        {row.length}
                      </td>
                      <td className={`px-3 py-2 border border-gray-300 text-center ${index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200'}`}>{row.m5}</td>
                      <td className="px-3 py-2 border border-gray-300 text-center">{row.m6}</td>
                      <td className={`px-3 py-2 border border-gray-300 text-center ${index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200'}`}>{row.m8}</td>
                      <td className="px-3 py-2 border border-gray-300 text-center">{row.m10}</td>
                      <td className={`px-3 py-2 border border-gray-300 text-center ${index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200'}`}>{row.m12}</td>
                      <td className="px-3 py-2 border border-gray-300 text-center">{row.m14}</td>
                      <td className={`px-3 py-2 border border-gray-300 text-center ${index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200'}`}>{row.m16}</td>
                      <td className="px-3 py-2 border border-gray-300 text-center">{row.m18}</td>
                      <td className={`px-3 py-2 border border-gray-300 text-center ${index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200'}`}>{row.m20}</td>
                      <td className="px-3 py-2 border border-gray-300 text-center">{row.m22}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Nut Weight Chart</h3>
            <p className="text-sm text-gray-600 mb-4">The following table represents pounds per 100 pieces.</p>

            <div className="overflow-x-auto">
              <table className="w-full border border-gray-300 text-sm">
                <thead>
                  <tr className="bg-[#1e3a8a] text-white">
                    <th className="px-4 py-3 text-left font-bold border-r border-white">Size</th>
                    <th className="px-4 py-3 text-center font-bold border-r border-white">Finished Hex</th>
                    <th className="px-4 py-3 text-center font-bold border-r border-white">Heavy Hex</th>
                    <th className="px-4 py-3 text-center font-bold border-r border-white">Finished Jam</th>
                    <th className="px-4 py-3 text-center font-bold border-r border-white">Heavy Hex Jam</th>
                    <th className="px-4 py-3 text-center font-bold border-r border-white">Square</th>
                    <th className="px-4 py-3 text-center font-bold">Heavy Square</th>
                  </tr>
                </thead>
                <tbody>
                  {nutWeightData.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-4 py-3 border border-gray-300 font-semibold text-[#1e3a8a]">{row.size}</td>
                      <td className="px-4 py-3 border border-gray-300 text-center">{row.finishedHex}</td>
                      <td className="px-4 py-3 border border-gray-300 text-center">{row.heavyHex}</td>
                      <td className="px-4 py-3 border border-gray-300 text-center">{row.finishedJam}</td>
                      <td className="px-4 py-3 border border-gray-300 text-center">{row.heavyHexJam}</td>
                      <td className="px-4 py-3 border border-gray-300 text-center">{row.square}</td>
                      <td className="px-4 py-3 border border-gray-300 text-center">{row.heavySquare}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 p-6 bg-blue-50 rounded-lg">
            <h3 className="font-bold text-gray-900 mb-3 text-lg">Weight Chart Information:</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start">
                <span className="font-semibold mr-2">Purpose:</span>
                <span>These weight charts provide approximate weights for fasteners and nuts to help with shipping calculations, material estimates, and load planning.</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">Accuracy:</span>
                <span>Weights are approximate and may vary based on material grade, coating, and manufacturing tolerances.</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">Units:</span>
                <span>MM thread weights are shown in kilograms per 100 pieces. Nut weights are shown in pounds per 100 pieces.</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">Material:</span>
                <span>Standard weights are based on carbon steel. Different materials will have different weights based on their density.</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">Application:</span>
                <span>Use these charts for preliminary planning only. For critical applications, weigh actual samples for precise calculations.</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 p-6 bg-gray-100 rounded-lg border-l-4 border-[#1e3a8a]">
            <h3 className="font-bold text-gray-900 mb-3 text-lg flex items-center">
              <svg className="w-6 h-6 mr-2 text-[#1e3a8a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Important Notes
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>Weights shown are for plain uncoated fasteners. Coatings and platings will add weight.</li>
              <li>Different manufacturing processes may result in slight weight variations.</li>
              <li>For large orders, request actual weight certificates from your supplier.</li>
              <li>Empty cells indicate sizes not commonly produced or standardized.</li>
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

export default WeightChartPage;
