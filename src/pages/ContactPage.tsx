// import { Phone, Mail, MapPin, User, MessageSquare } from 'lucide-react';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import ScrollToTop from '../components/ScrollToTop';
// import WhatsAppButton from '../components/WhatsAppButton';
// import FeedbackButton from '../components/FeedbackButton';
// import { useState } from 'react';

// export default function ContactPage() {
//   const [formData, setFormData] = useState({
//     name: '',
//     phone: '',
//     email: '',
//     message: ''
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   return (
//     <div className="min-h-screen flex flex-col">
//       <Header />

//       <div
//         className="relative h-80 flex items-center justify-center bg-cover bg-center"
//         style={{
//           backgroundImage: 'url(https://images.pexels.com/photos/3846508/pexels-photo-3846508.jpeg?auto=compress&cs=tinysrgb&w=1200)'
//         }}
//       >
//         <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a8a]/90 to-[#1e3a8a]/70"></div>
//         <div className="relative z-10 text-center text-white px-4">
//           <h1 className="text-5xl font-bold mb-4">CONTACT US</h1>
//           <div className="flex items-center justify-center gap-2 text-lg">
//             <a href="/" className="hover:text-gray-200 transition-colors">Home</a>
//             <span>→</span>
//             <span>Contact Us</span>
//           </div>
//         </div>
//       </div>

//       <div className="flex-grow bg-gray-50 py-16">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//             <div className="lg:col-span-2">
//               <div className="bg-white rounded-lg shadow-lg p-8">
//                 <h2 className="text-3xl font-bold text-center mb-8 pb-4 border-b-2 border-gray-200">GET A QUOTE</h2>

//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   <div>
//                     <div className="relative">
//                       <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//                       <input
//                         type="text"
//                         name="name"
//                         placeholder="Your Name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-[#1e3a8a] transition-colors"
//                         required
//                       />
//                     </div>
//                   </div>

//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div className="relative">
//                       <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//                       <input
//                         type="tel"
//                         name="phone"
//                         placeholder="Phone Number"
//                         value={formData.phone}
//                         onChange={handleChange}
//                         className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-[#1e3a8a] transition-colors"
//                         required
//                       />
//                     </div>

//                     <div className="relative">
//                       <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//                       <input
//                         type="email"
//                         name="email"
//                         placeholder="Your Email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-[#1e3a8a] transition-colors"
//                         required
//                       />
//                     </div>
//                   </div>

//                   <div className="relative">
//                     <MessageSquare className="absolute left-4 top-6 text-gray-400" size={20} />
//                     <textarea
//                       name="message"
//                       placeholder="Write Message"
//                       value={formData.message}
//                       onChange={handleChange}
//                       rows={6}
//                       className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-[#1e3a8a] transition-colors resize-none"
//                       required
//                     ></textarea>
//                   </div>

//                   <div className="text-center">
//                     <button
//                       type="submit"
//                       className="bg-[#5b7bb4] hover:bg-[#4a6a9d] text-white font-semibold px-12 py-3 rounded transition-colors duration-300"
//                     >
//                       Send Message
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>

//             <div className="lg:col-span-1">
//               <div className="bg-gradient-to-br from-[#5b7bb4] to-[#4a6a9d] rounded-lg shadow-lg p-8 text-white h-full">
//                 <h2 className="text-3xl font-bold text-center mb-8 pb-4 border-b-2 border-white/30">CONTACT INFORMATION</h2>

//                 <div className="space-y-8">
//                   <div>
//                     <h3 className="font-bold text-lg mb-4">Contact Number:</h3>
//                     <div className="flex items-start gap-3">
//                       <div className="w-12 h-12 bg-green-500 rounded flex items-center justify-center flex-shrink-0">
//                         <Phone size={24} />
//                       </div>
//                       <div>
//                         <p className="text-white">+91 22 66151888</p>
//                         {/* <p className="text-white">+91 2231693855</p> */}
//                       </div>
//                     </div>
//                   </div>

//                   <div>
//                     <h3 className="font-bold text-lg mb-4">Mail Address:</h3>
//                     <div className="flex items-start gap-3">
//                       <div className="w-12 h-12 bg-white/20 rounded flex items-center justify-center flex-shrink-0">
//                         <Mail size={24} />
//                       </div>
//                       <div>
//                         <p className="text-white break-words">info@horizon-metal.com</p>
//                         {/* <p className="text-white break-words">sales@kcimpex.com</p> */}
//                       </div>
//                     </div>
//                   </div>

//                   <div>
//                     <h3 className="font-bold text-lg mb-4">Office Location:</h3>
//                     <div className="flex items-start gap-3">
//                       <div className="w-12 h-12 bg-white/20 rounded flex items-center justify-center flex-shrink-0">
//                         <MapPin size={24} />
//                       </div>
//                       <div>
//                         <p className="text-white leading-relaxed">
//                           Rahimtulla Ladak Bldg., 46 A, Khetwadi 10th Lane, Mumbai 400 004.aar,Mumbai-400010
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="mt-16">
//             <div className="mb-6">
//               <p className="text-[#1e3a8a] font-semibold text-sm mb-2">Location</p>
//               <h2 className="text-4xl font-bold text-gray-800">Get Directions</h2>
//               <div className="w-24 h-1 bg-blue-400 mt-2"></div>
//             </div>

//             <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.0449076896856!2d72.8513807!3d18.9647953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce7c0c8c1c5d%3A0x7c8c8c8c8c8c8c8c!2sSitaphalwadi%2C%20Mazgaon%2C%20Mumbai%2C%20Maharashtra%20400010!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
//                 width="100%"
//                 height="450"
//                 style={{ border: 0 }}
//                 allowFullScreen
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//                 title="K C IMPEX Location"
//               ></iframe>
//             </div>
//           </div>
//         </div>
//       </div>

//       <Footer />
//       <ScrollToTop />
//       <WhatsAppButton />
//       <FeedbackButton />
//     </div>
//   );
// }

import { Phone, Mail, MapPin, User, MessageSquare, Globe, FileText, Building2 } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import WhatsAppButton from '../components/WhatsAppButton';
import FeedbackButton from '../components/FeedbackButton';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    phone: '',
    enquiry: ''
  });

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   console.log('Form submitted:', formData);
  // };


const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const loadingToast = toast.loading('Submitting your enquiry...');

  const formURL = import.meta.env.VITE_GOOGLE_FORM_URL;

  const formDataToSend = new FormData();
  formDataToSend.append(import.meta.env.VITE_ENTRY_NAME, formData.name);
  formDataToSend.append(import.meta.env.VITE_ENTRY_EMAIL, formData.email);
  formDataToSend.append(import.meta.env.VITE_ENTRY_MOBILE, formData.mobile);
  formDataToSend.append(import.meta.env.VITE_ENTRY_PHONE, formData.phone);
  formDataToSend.append(import.meta.env.VITE_ENTRY_ENQUIRY, formData.enquiry);

  try {
    await fetch(formURL, {
      method: 'POST',
      mode: 'no-cors',
      body: formDataToSend,
    });

    toast.dismiss(loadingToast);
    toast.success('Enquiry sent successfully!');

    setFormData({
      name: '',
      email: '',
      mobile: '',
      phone: '',
      enquiry: '',
    });
  } catch (err) {
    toast.dismiss(loadingToast);
    toast.error('Something went wrong. Please try again later.');
    console.error(err);
  }
};





  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <div
        className="relative h-72 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/3846508/pexels-photo-3846508.jpeg?auto=compress&cs=tinysrgb&w=1200)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 to-slate-800/90"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4 tracking-wide">CONTACT US</h1>
        </div>
      </div>

      <div className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-xl p-8 border-t-4 border-[#1e3a8a]">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">Get In Touch</h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent transition-all"
                      required
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent transition-all"
                      required
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      name="mobile"
                      placeholder="Mobile No"
                      value={formData.mobile}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent transition-all"
                      required
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone No"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <textarea
                      name="enquiry"
                      placeholder="Enquiry Details:"
                      value={formData.enquiry}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent transition-all resize-none"
                      required
                    ></textarea>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full md:w-auto bg-green-600 hover:bg-green-700 text-white font-semibold px-12 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      Send Enquiry
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-xl p-8 border-t-4 border-[#1e3a8a] space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <Building2 className="text-[#1e3a8a]" size={24} />
                    Head Office
                  </h3>
                  <div className="space-y-3 ml-8">
                    <div>
                      <p className="text-sm text-gray-600 font-semibold mb-1">Company Name:</p>
                      <p className="text-gray-800">HORIZON METAL & ALLOYS.</p>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h4 className="font-bold text-gray-700 mb-3">REGISTERED OFFICE</h4>
                  <div className="flex gap-3 mb-4">
                    <MapPin className="text-[#1e3a8a] flex-shrink-0 mt-1" size={20} />
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Rahimtulla Ladak Bldg., 46 A, Khetwadi 10th Lane, Mumbai – 400 004.
                    </p>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h4 className="font-bold text-gray-700 mb-3">GODOWN ADDRESS</h4>
                  <div className="flex gap-3">
                    <MapPin className="text-[#1e3a8a] flex-shrink-0 mt-1" size={20} />
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Zaveri Bldg, 6, V.P.Road, C.P.Tank, Mumbai-400 004.
                    </p>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h4 className="font-bold text-gray-700 mb-3">Factory Address</h4>

                  <div className="mb-4">
                    <p className="text-xs font-semibold text-gray-600 mb-2">Address 1</p>
                    <div className="flex gap-3 mb-2">
                      <MapPin className="text-[#1e3a8a] flex-shrink-0 mt-1" size={18} />
                      <p className="text-gray-700 text-sm leading-relaxed">
                        11E, ground floor, plot no.17 A, Sitaphalwadi, dr. Mascarenhas road, Arambagh cemetery, mazgaon Mumbai 400010, INDIA
                      </p>
                    </div>
                    <div className="flex gap-3 ml-8">
                      <Phone className="text-green-600 flex-shrink-0" size={18} />
                      <p className="text-gray-700 text-sm">+91 9821037597</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-gray-600 mb-2">Address 2</p>
                    <div className="flex gap-3 mb-2">
                      <MapPin className="text-[#1e3a8a] flex-shrink-0 mt-1" size={18} />
                      <p className="text-gray-700 text-sm leading-relaxed">
                        B – 1, ground floor , plot no - 370 , B Wing , shreepati tower , tatya gharpure marg, pimpalwadi , girgoan. Mumbai- 400004
                      </p>
                    </div>
                    <div className="flex gap-3 ml-8">
                      <Phone className="text-green-600 flex-shrink-0" size={18} />
                      <p className="text-gray-700 text-sm">+91 9920486004</p>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h4 className="font-bold text-gray-700 mb-3">BRANCH</h4>
                  <div className="space-y-2">
                    {/* <div className="flex gap-3">
                      <MapPin className="text-[#1e3a8a] flex-shrink-0 mt-1" size={18} />
                      <p className="text-gray-700 text-sm leading-relaxed">
                        104,Vallabh Plaza, 1st Floor, Sant Kabir Road, Opp Kabir Mandir Vadodara – 390001.
                      </p>
                    </div> */}
                    <div className="flex gap-3 ml-8">
                      <Phone className="text-green-600 flex-shrink-0" size={18} />
                      <p className="text-gray-700 text-sm">+91 9821759598</p>
                    </div>
                    <div className="flex gap-3 ml-8">
                      <Mail className="text-[#1e3a8a] flex-shrink-0" size={18} />
                      <a href="mailto:punit@hitachimetal.com" className="text-blue-600 hover:underline text-sm">
                        punit@hitachimetal.com
                      </a>
                    </div>
                    <div className="flex gap-3 ml-8">
                      <Mail className="text-[#1e3a8a] flex-shrink-0" size={18} />
                      <a href="mailto:info@horizon-metal.com" className="text-blue-600 hover:underline text-sm">
                        info@horizon-metal.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h4 className="font-bold text-gray-700 mb-3">Tel No.:</h4>
                  <div className="flex gap-3 ml-8 flex-wrap">
                    <p className="text-gray-700 text-sm">91-22-6636 2133,</p>
                    <p className="text-gray-700 text-sm">6615 1888,</p>
                    <p className="text-gray-700 text-sm">6615 1777,</p>
                    <p className="text-gray-700 text-sm">66363200</p>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h4 className="font-bold text-gray-700 mb-3">Fax No.:</h4>
                  <div className="ml-8">
                    <p className="text-gray-700 text-sm">91-22-2380 1838 / 91-22-23883263</p>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h4 className="font-bold text-gray-700 mb-3">Email:</h4>
                  <div className="ml-8">
                    <p className="text-xs text-gray-600 mb-1">EXPORT:</p>
                    <a href="mailto:info@horizon-metal.com" className="text-blue-600 hover:underline text-sm">
                      info@horizon-metal.com
                    </a>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h4 className="font-bold text-gray-700 mb-3">Website:</h4>
                  <div className="ml-8 space-y-1">
                    <a href="https://www.horizon-metal.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm block">
                      www.horizon-metal.com
                    </a>
                    <a href="https://www.rutikolmetal.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm block">
                      www.rutikolmetal.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-xl p-8 mb-12 border-t-4 border-[#1e3a8a]">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Key Contacts</h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-6 py-3 text-left font-semibold text-gray-700">Name</th>
                    <th className="border border-gray-300 px-6 py-3 text-left font-semibold text-gray-700">Position</th>
                    <th className="border border-gray-300 px-6 py-3 text-left font-semibold text-gray-700">Department</th>
                    <th className="border border-gray-300 px-6 py-3 text-left font-semibold text-gray-700">Email</th>
                  </tr>
                </thead>
                <tbody>
                  {/* <tr className="hover:bg-gray-50 transition-colors">
                    <td className="border border-gray-300 px-6 py-4 font-medium text-gray-800" colSpan={4}>
                      <div className="font-bold text-lg">Import Sale Contact</div>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="border border-gray-300 px-6 py-4 text-gray-700">Dinesh Bhansali</td>
                    <td className="border border-gray-300 px-6 py-4 text-gray-700">Vice President</td>
                    <td className="border border-gray-300 px-6 py-4 text-gray-700">Imports</td>
                    <td className="border border-gray-300 px-6 py-4">
                      <a href="mailto:info@horizon-metal.com" className="text-blue-600 hover:underline">info@horizon-metal.com</a>
                    </td>
                  </tr> */}

                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="border border-gray-300 px-6 py-4 font-medium text-gray-800" colSpan={4}>
                      <div className="font-bold text-lg">Export Sales Contact</div>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="border border-gray-300 px-6 py-4 text-gray-700">Rishab Bhansali</td>
                    <td className="border border-gray-300 px-6 py-4 text-gray-700">Managing Director</td>
                    <td className="border border-gray-300 px-6 py-4 text-gray-700">Head of Special Metals</td>
                    <td className="border border-gray-300 px-6 py-4">
                      <a href="mailto:info@horizon-metal.com" className="text-blue-600 hover:underline">info@horizon-metal.com</a>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="border border-gray-300 px-6 py-4 text-gray-700">D'souza</td>
                    <td className="border border-gray-300 px-6 py-4 text-gray-700">General Manager</td>
                    <td className="border border-gray-300 px-6 py-4 text-gray-700">Exports</td>
                    <td className="border border-gray-300 px-6 py-4">
                      <a href="mailto:hitachimetal@gmail.com" className="text-blue-600 hover:underline">hitachimetal@gmail.com</a>
                    </td>
                  </tr>

                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="border border-gray-300 px-6 py-4 font-medium text-gray-800" colSpan={4}>
                      <div className="font-bold text-lg">Domestic Sales Contact</div>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="border border-gray-300 px-6 py-4 text-gray-700">Punit Bhansali</td>
                    <td className="border border-gray-300 px-6 py-4 text-gray-700">Sales Director</td>
                    <td className="border border-gray-300 px-6 py-4 text-gray-700">Sales Domestic</td>
                    <td className="border border-gray-300 px-6 py-4">
                      <a href="mailto:punit@hitachimetal.com" className="text-blue-600 hover:underline">punit@hitachimetal.com</a>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="border border-gray-300 px-6 py-4 text-gray-700">Bhavik Bhansali</td>
                    <td className="border border-gray-300 px-6 py-4 text-gray-700">Jr. General Manager</td>
                    <td className="border border-gray-300 px-6 py-4 text-gray-700">Sales Domestic/Operations</td>
                    <td className="border border-gray-300 px-6 py-4">
                      <a href="mailto:info@horizon-metal.com" className="text-blue-600 hover:underline">info@horizon-metal.com</a>
                    </td>
                  </tr>

                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="border border-gray-300 px-6 py-4 font-medium text-gray-800" colSpan={4}>
                      <div className="font-bold text-lg">Stores / Logistics</div>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="border border-gray-300 px-6 py-4 text-gray-700">Vikram</td>
                    <td className="border border-gray-300 px-6 py-4 text-gray-700">Assistant</td>
                    <td className="border border-gray-300 px-6 py-4 text-gray-700">Stores</td>
                    <td className="border border-gray-300 px-6 py-4">
                      <a href="mailto:info@horizon-metal.com" className="text-blue-600 hover:underline">info@horizon-metal.com</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-xl overflow-hidden border-t-4 border-[#1e3a8a]">
            <div className="p-8 pb-6">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Our Location</h2>
              <p className="text-gray-600">Find us on the map</p>
            </div>
<div className="w-full h-[500px]">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30185.195788546844!2d72.790764!3d18.969005!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce140c1611ab%3A0x49ad6992a9e92d9b!2sUNIMIX%20METAL%20CORPORATION!5e0!3m2!1sen!2sin!4v1760686478985!5m2!1sen!2sin"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="UNIMIX Metal Corporation Location"
  ></iframe>
</div>

          </div>
        </div>
      </div>

      <Footer />
      <ScrollToTop />
      <WhatsAppButton />
      <FeedbackButton />
    </div>
  );
}
