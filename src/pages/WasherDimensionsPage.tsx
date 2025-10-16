import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import ScrollToTop from '../components/ScrollToTop';

const WasherDimensionsPage = () => {
  const washerData = [
    { size: '1/4"', aOD: '5/8', bID: '9/32', cMin: '0.051', cMax: '0.080' },
    { size: '5/16"', aOD: '11/16', bID: '11/32', cMin: '0.051', cMax: '0.080' },
    { size: '3/8"', aOD: '13/16', bID: '13/32', cMin: '0.051', cMax: '0.080' },
    { size: '7/16"', aOD: '59/64', bID: '15/32', cMin: '0.051', cMax: '0.080' },
    { size: '1/2"', aOD: '1-1/16', bID: '17/32', cMin: '0.097', cMax: '0.177' },
    { size: '5/8"', aOD: '1-5/16', bID: '11/16', cMin: '0.122', cMax: '0.177' },
    { size: '3/4"', aOD: '1-15/32', bID: '13/16', cMin: '0.122', cMax: '0.177' },
    { size: '7/8"', aOD: '1-3/4', bID: '15/16', cMin: '0.136', cMax: '0.177' },
    { size: '1"', aOD: '2', bID: '1-1/8', cMin: '0.136', cMax: '0.177' },
    { size: '1-1/8"', aOD: '2-1/4', bID: '1-1/4', cMin: '0.136', cMax: '0.177' },
    { size: '1-1/4"', aOD: '2-1/2', bID: '1-3/8', cMin: '0.136', cMax: '0.177' },
    { size: '1-3/8"', aOD: '2-3/4', bID: '1-1/2', cMin: '0.136', cMax: '0.177' },
    { size: '1-1/2"', aOD: '3', bID: '1-5/8', cMin: '0.136', cMax: '0.177' },
    { size: '2"', aOD: '3-3/4', bID: '2-1/8', cMin: '0.178', cMax: '0.28' },
    { size: '2-1/4"', aOD: '4', bID: '2-3/8', cMin: '0.24', cMax: '0.34' },
    { size: '2-1/2"', aOD: '4-1/2', bID: '2-5/8', cMin: '0.24', cMax: '0.34' },
    { size: '2-3/4"', aOD: '5', bID: '2-7/8', cMin: '0.24', cMax: '0.34' },
    { size: '3"', aOD: '5-1/2', bID: '3-1/8', cMin: '0.24', cMax: '0.34' },
    { size: '3-1/4"', aOD: '6', bID: '3-3/8', cMin: '0.24', cMax: '0.34' },
    { size: '3-1/2"', aOD: '6-1/2', bID: '3-5/8', cMin: '0.24', cMax: '0.34' },
    { size: '3-3/4"', aOD: '7', bID: '3-7/8', cMin: '0.24', cMax: '0.34' },
    { size: '4"', aOD: '7-1/2', bID: '4-1/8', cMin: '0.24', cMax: '0.34' },
  ];

  const ussWasherData = [
    { size: '1/4"', aOD: '3/4', bID: '5/16', cMin: '0.051', cMax: '0.080' },
    { size: '5/16"', aOD: '7/8', bID: '3/8', cMin: '0.064', cMax: '0.104' },
    { size: '3/8"', aOD: '1', bID: '7/16', cMin: '0.064', cMax: '0.104' },
    { size: '7/16"', aOD: '1-1/4', bID: '1/2', cMin: '0.064', cMax: '0.104' },
    { size: '1/2"', aOD: '1-3/8', bID: '9/16', cMin: '0.086', cMax: '0.132' },
    { size: '9/16"', aOD: '1-1/2', bID: '5/8', cMin: '0.086', cMax: '0.132' },
    { size: '5/8"', aOD: '1-3/4', bID: '11/16', cMin: '0.108', cMax: '0.160' },
    { size: '3/4"', aOD: '2', bID: '13/16', cMin: '0.122', cMax: '0.177' },
    { size: '7/8"', aOD: '2-1/4', bID: '15/16', cMin: '0.136', cMax: '0.192' },
    { size: '1"', aOD: '2-1/2', bID: '1-1/16', cMin: '0.136', cMax: '0.192' },
    { size: '1-1/8"', aOD: '2-3/4', bID: '1-1/4', cMin: '0.136', cMax: '0.192' },
    { size: '1-1/4"', aOD: '3', bID: '1-3/8', cMin: '0.136', cMax: '0.192' },
    { size: '1-3/8"', aOD: '3-1/4', bID: '1-1/2', cMin: '0.153', cMax: '0.213' },
    { size: '1-1/2"', aOD: '3-1/2', bID: '1-5/8', cMin: '0.153', cMax: '0.213' },
  ];

  const lowCarbonWasherData = [
    { size: '1/8"', aOD: '5/8', bID: '5/32', cThickness: '3/64' },
    { size: '5/32"', aOD: '7/16', bID: '3/16', cThickness: '3/64' },
    { size: '3/16"', aOD: '1/2', bID: '7/32', cThickness: '3/64' },
    { size: '7/32"', aOD: '9/16', bID: '1/4', cThickness: '3/64' },
    { size: '1/4"', aOD: '5/8', bID: '9/32', cThickness: '1/16' },
    { size: '5/16"', aOD: '11/16', bID: '11/32', cThickness: '1/16' },
    { size: '3/8"', aOD: '13/16', bID: '13/32', cThickness: '1/16' },
    { size: '7/16"', aOD: '59/64', bID: '15/32', cThickness: '1/16' },
    { size: '1/2"', aOD: '1-1/16', bID: '17/32', cThickness: '3/32' },
    { size: '9/16"', aOD: '1-3/16', bID: '19/32', cThickness: '3/32' },
    { size: '5/8"', aOD: '1-5/16', bID: '21/32', cThickness: '3/32' },
    { size: '3/4"', aOD: '1-1/2', bID: '13/16', cThickness: '9/64' },
    { size: '7/8"', aOD: '1-3/4', bID: '15/16', cThickness: '9/64' },
    { size: '1"', aOD: '2', bID: '1-1/16', cThickness: '9/64' },
    { size: '1-1/8"', aOD: '2-1/4', bID: '1-1/4', cThickness: '9/64' },
    { size: '1-1/4"', aOD: '2-1/2', bID: '1-3/8', cThickness: '5/32' },
    { size: '1-3/8"', aOD: '2-3/4', bID: '1-1/2', cThickness: '5/32' },
    { size: '1-1/2"', aOD: '3', bID: '1-5/8', cThickness: '5/32' },
  ];

  const splitLockWasherData = [
    { size: '#6', aOD: '0.250', bIDMin: '0.148', bIDMax: '0.141', tMean: '0.31', wSection: '0.047', trIncMin: '0.0030', trIncMax: '0.0015' },
    { size: '#8', aOD: '0.293', bIDMin: '0.174', bIDMax: '0.167', tMean: '0.040', wSection: '0.055', trIncMin: '0.0036', trIncMax: '0.0018' },
    { size: '#10', aOD: '0.334', bIDMin: '0.200', bIDMax: '0.193', tMean: '0.047', wSection: '0.062', trIncMin: '0.0040', trIncMax: '0.0020' },
    { size: '1/4"', aOD: '0.487', bIDMin: '0.260', bIDMax: '0.252', tMean: '0.062', wSection: '0.109', trIncMin: '0.0070', trIncMax: '0.0035' },
    { size: '5/16"', aOD: '0.583', bIDMin: '0.322', bIDMax: '0.314', tMean: '0.078', wSection: '0.125', trIncMin: '0.0080', trIncMax: '0.0040' },
    { size: '3/8"', aOD: '0.680', bIDMin: '0.385', bIDMax: '0.377', tMean: '0.094', wSection: '0.141', trIncMin: '0.0090', trIncMax: '0.0045' },
    { size: '7/16"', aOD: '0.775', bIDMin: '0.450', bIDMax: '0.442', tMean: '0.109', wSection: '0.156', trIncMin: '0.0100', trIncMax: '0.0050' },
    { size: '1/2"', aOD: '0.869', bIDMin: '0.512', bIDMax: '0.502', tMean: '0.125', wSection: '0.171', trIncMin: '0.0110', trIncMax: '0.0055' },
    { size: '9/16"', aOD: '0.965', bIDMin: '0.574', bIDMax: '0.564', tMean: '0.141', wSection: '0.188', trIncMin: '0.0120', trIncMax: '0.0060' },
    { size: '5/8"', aOD: '1.072', bIDMin: '0.640', bIDMax: '0.628', tMean: '0.156', wSection: '0.203', trIncMin: '0.0130', trIncMax: '0.0065' },
    { size: '3/4"', aOD: '1.254', bIDMin: '0.765', bIDMax: '0.753', tMean: '0.188', wSection: '0.234', trIncMin: '0.0150', trIncMax: '0.0075' },
    { size: '7/8"', aOD: '1.455', bIDMin: '0.890', bIDMax: '0.878', tMean: '0.219', wSection: '0.266', trIncMin: '0.0170', trIncMax: '0.0085' },
    { size: '1"', aOD: '1.641', bIDMin: '1.025', bIDMax: '1.003', tMean: '0.250', wSection: '0.297', trIncMin: '0.0180', trIncMax: '0.0095' },
    { size: '1-1/8"', aOD: '1.838', bIDMin: '1.144', bIDMax: '1.129', tMean: '0.281', wSection: '0.328', trIncMin: '0.0230', trIncMax: '0.0105' },
    { size: '1-1/4"', aOD: '2.028', bIDMin: '1.272', bIDMax: '1.254', tMean: '0.312', wSection: '0.359', trIncMin: '0.0230', trIncMax: '0.0115' },
    { size: '1-3/8"', aOD: '2.210', bIDMin: '1.399', bIDMax: '1.379', tMean: '0.344', wSection: '0.391', trIncMin: '0.0250', trIncMax: '0.0125' },
    { size: '1-1/2"', aOD: '2.409', bIDMin: '1.524', bIDMax: '1.504', tMean: '0.375', wSection: '0.422', trIncMin: '0.0270', trIncMax: '0.0135' },
  ];

  const beveledWasherData = [
    { size: '1/2"', aOD: '1.750', bID: '0.531', cNom: '5/16', dTaper: '1/8' },
    { size: '5/8"', aOD: '1.750', bID: '0.688', cNom: '5/16', dTaper: '1/8' },
    { size: '3/4"', aOD: '1.750', bID: '0.812', cNom: '5/16', dTaper: '1/8' },
    { size: '7/8"', aOD: '1.750', bID: '0.937', cNom: '5/16', dTaper: '1/8' },
    { size: '1"', aOD: '1.750', bID: '1.125', cNom: '5/16', dTaper: '1/8' },
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
            WASHER DIMENSIONS
          </h1>
          <div className="flex items-center text-white text-sm mt-4">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span>Washer Dimensions</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            S.A.E. DIMENSIONS FOR HARDENED FLAT WASHERS
          </h2>

          <div className="mb-8 flex justify-center">
            <img
              src="/SAE.webp"
              alt="Square Bolt Diagram"
              className="max-w-full h-auto rounded-lg"
              style={{ maxHeight: '300px' }}
            />
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-[#1e3a8a] mb-4 pb-2 border-b-2 border-[#1e3a8a]">
              Table W1 - S.A.E. DIMENSIONS FOR HARDENED FLAT WASHERS
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-300 text-sm">
                <thead>
                  <tr className="bg-[#1e3a8a] text-white">
                    <th className="px-4 py-3 text-left font-semibold border-r border-white" rowSpan={2}>Bolts Size</th>
                    <th className="px-4 py-3 text-center font-semibold border-r border-white" rowSpan={2}>A<br/>O.D.</th>
                    <th className="px-4 py-3 text-center font-semibold border-r border-white" rowSpan={2}>B<br/>I.D.</th>
                    <th className="px-4 py-3 text-center font-semibold" colSpan={2}>C<br/>Thickness</th>
                  </tr>
                  <tr className="bg-[#1e3a8a] text-white">
                    <th className="px-4 py-2 text-center font-semibold border-r border-white">Min</th>
                    <th className="px-4 py-2 text-center font-semibold">Max</th>
                  </tr>
                </thead>
                <tbody>
                  {washerData.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-blue-50'}>
                      <td className="px-4 py-3 border border-gray-300 font-medium">{row.size}</td>
                      <td className="px-4 py-3 border border-gray-300 text-center">{row.aOD}</td>
                      <td className="px-4 py-3 border border-gray-300 text-center">{row.bID}</td>
                      <td className="px-4 py-3 border border-gray-300 text-center">{row.cMin}</td>
                      <td className="px-4 py-3 border border-gray-300 text-center">{row.cMax}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-8 mt-12">
            <h3 className="text-xl font-bold text-[#1e3a8a] mb-4 pb-2 border-b-2 border-[#1e3a8a]">
              Table W2 - USS DIMENSIONS FOR HARDENED FLAT WASHERS
            </h3>
          <div className="mb-8 flex justify-center">
            <img
              src="/SAE.webp"
              alt="Square Bolt Diagram"
              className="max-w-full h-auto rounded-lg"
              style={{ maxHeight: '300px' }}
            />
          </div>
          </div>

          <div className="mb-8 mt-12">
            <h3 className="text-xl font-bold text-[#1e3a8a] mb-4 pb-2 border-b-2 border-[#1e3a8a]">
              Table W3 - S.A.E. DIMENSIONS FOR LOW CARBON FLAT WASHERS
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-300 text-sm">
                <thead>
                  <tr className="bg-[#1e3a8a] text-white">
                    <th className="px-4 py-3 text-left font-semibold border-r border-white">Bolts Size</th>
                    <th className="px-4 py-3 text-center font-semibold border-r border-white">A<br/>O.D.</th>
                    <th className="px-4 py-3 text-center font-semibold border-r border-white">B<br/>I.D.</th>
                    <th className="px-4 py-3 text-center font-semibold">C<br/>Thickness</th>
                  </tr>
                </thead>
                <tbody>
                  {lowCarbonWasherData.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-blue-50'}>
                      <td className="px-4 py-3 border border-gray-300 font-medium">{row.size}</td>
                      <td className="px-4 py-3 border border-gray-300 text-center">{row.aOD}</td>
                      <td className="px-4 py-3 border border-gray-300 text-center">{row.bID}</td>
                      <td className="px-4 py-3 border border-gray-300 text-center">{row.cThickness}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-8 mt-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              SPRING STEEL & HARDENED STEEL SPLIT LOCK WASHER DIMENSIONS
            </h2>

          <div className="mb-8 flex justify-center">
            <img
              src="/Springg.webp"
              alt="Square Bolt Diagram"
              className="max-w-full h-auto rounded-lg"
              style={{ maxHeight: '300px' }}
            />
          </div>

            <h3 className="text-xl font-bold text-[#1e3a8a] mb-4 pb-2 border-b-2 border-[#1e3a8a]">
              Table W4 - SPRING STEEL & HARDENED STEEL SPLIT LOCK WASHER DIMENSIONS
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-300 text-sm">
                <thead>
                  <tr className="bg-[#1e3a8a] text-white">
                    <th className="px-3 py-3 text-left font-semibold border-r border-white" rowSpan={2}>Bolts Size</th>
                    <th className="px-3 py-3 text-center font-semibold border-r border-white" rowSpan={2}>A<br/>O.D.</th>
                    <th className="px-3 py-3 text-center font-semibold border-r border-white" colSpan={2}>B<br/>I.D.</th>
                    <th className="px-3 py-3 text-center font-semibold border-r border-white" rowSpan={2}>T<br/>Mean Section Thickness<br/>(t + t)/2</th>
                    <th className="px-3 py-3 text-center font-semibold border-r border-white" rowSpan={2}>W<br/>Section Width</th>
                    <th className="px-3 py-3 text-center font-semibold" colSpan={2}>tr - tn<br/>Increase in Thickness<br/>(D.D. to I.D.)</th>
                  </tr>
                  <tr className="bg-[#1e3a8a] text-white">
                    <th className="px-3 py-2 text-center font-semibold border-r border-white">Min</th>
                    <th className="px-3 py-2 text-center font-semibold border-r border-white">Max</th>
                    <th className="px-3 py-2 text-center font-semibold border-r border-white">Min</th>
                    <th className="px-3 py-2 text-center font-semibold">Max</th>
                  </tr>
                </thead>
                <tbody>
                  {splitLockWasherData.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-blue-50'}>
                      <td className="px-3 py-3 border border-gray-300 font-medium">{row.size}</td>
                      <td className="px-3 py-3 border border-gray-300 text-center">{row.aOD}</td>
                      <td className="px-3 py-3 border border-gray-300 text-center">{row.bIDMin}</td>
                      <td className="px-3 py-3 border border-gray-300 text-center">{row.bIDMax}</td>
                      <td className="px-3 py-3 border border-gray-300 text-center">{row.tMean}</td>
                      <td className="px-3 py-3 border border-gray-300 text-center">{row.wSection}</td>
                      <td className="px-3 py-3 border border-gray-300 text-center">{row.trIncMin}</td>
                      <td className="px-3 py-3 border border-gray-300 text-center">{row.trIncMax}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-8 mt-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              HARDENED BEVELED WASHER DIMENSIONS
            </h2>

           <div className="mb-8 flex justify-center">
            <img
              src="/HARD.webp"
              alt="Square Bolt Diagram"
              className="max-w-full h-auto rounded-lg"
              style={{ maxHeight: '300px' }}
            />
          </div>

            <h3 className="text-xl font-bold text-[#1e3a8a] mb-4 pb-2 border-b-2 border-[#1e3a8a]">
              Table W5 - HARDENED BEVELED WASHER DIMENSIONS
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-300 text-sm">
                <thead>
                  <tr className="bg-[#1e3a8a] text-white">
                    <th className="px-4 py-3 text-left font-semibold border-r border-white">Bolts Size</th>
                    <th className="px-4 py-3 text-center font-semibold border-r border-white">A<br/>I.D.</th>
                    <th className="px-4 py-3 text-center font-semibold border-r border-white">B<br/>O.D.</th>
                    <th className="px-4 py-3 text-center font-semibold border-r border-white">C<br/>Nom<br/>Thickness</th>
                    <th className="px-4 py-3 text-center font-semibold">Slope or Taper<br/>on Thickness</th>
                  </tr>
                </thead>
                <tbody>
                  {beveledWasherData.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-blue-50'}>
                      <td className="px-4 py-3 border border-gray-300 font-medium">{row.size}</td>
                      <td className="px-4 py-3 border border-gray-300 text-center">{row.bID}</td>
                      <td className="px-4 py-3 border border-gray-300 text-center">{row.aOD}</td>
                      <td className="px-4 py-3 border border-gray-300 text-center">{row.cNom}</td>
                      <td className="px-4 py-3 border border-gray-300 text-center">{row.dTaper}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 p-6 bg-blue-50 rounded-lg">
            <h3 className="font-bold text-gray-900 mb-3 text-lg">Specifications & Notes:</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start">
                <span className="font-semibold mr-2">Material:</span>
                <span>SAE 1060-1090 Carbon Steel, hardened and tempered</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">Finish:</span>
                <span>Plain, zinc plated, or hot-dip galvanized as specified</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">Hardness:</span>
                <span>38-45 HRC (Rockwell C scale)</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">Standards:</span>
                <span>Manufactured in accordance with SAE J429 and ASME B18.22.1 specifications</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">Tolerance:</span>
                <span>All dimensions are in inches. Thickness tolerance ±0.005 inches</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">Application:</span>
                <span>Flat washers distribute the load of a threaded fastener and prevent damage to the surface being fastened. Hardened washers are required for high-strength bolting applications.</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">Selection:</span>
                <span>Select washer size based on bolt size. The inside diameter (I.D.) should provide clearance for the bolt, while the outside diameter (O.D.) should provide adequate bearing surface.</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 p-6 bg-gray-100 rounded-lg border-l-4 border-[#1e3a8a]">
            <h3 className="font-bold text-gray-900 mb-3 text-lg flex items-center">
              <svg className="w-6 h-6 mr-2 text-[#1e3a8a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Important Information
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>When used with high-strength fasteners, always use hardened washers to prevent embedment into the base material.</li>
              <li>For structural steel connections, washers must meet ASTM F436 specifications.</li>
              <li>The thickness (C) dimension is critical for proper load distribution and should be verified for specific applications.</li>
              <li>For corrosive environments, consider using stainless steel or specially coated washers.</li>
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

export default WasherDimensionsPage;
