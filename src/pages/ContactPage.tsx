import { Phone, Mail, MapPin, User, MessageSquare } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import WhatsAppButton from '../components/WhatsAppButton';
import FeedbackButton from '../components/FeedbackButton';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div
        className="relative h-80 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/3846508/pexels-photo-3846508.jpeg?auto=compress&cs=tinysrgb&w=1200)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a8a]/90 to-[#1e3a8a]/70"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">CONTACT US</h1>
          <div className="flex items-center justify-center gap-2 text-lg">
            <a href="/" className="hover:text-gray-200 transition-colors">Home</a>
            <span>→</span>
            <span>Contact Us</span>
          </div>
        </div>
      </div>

      <div className="flex-grow bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold text-center mb-8 pb-4 border-b-2 border-gray-200">GET A QUOTE</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-[#1e3a8a] transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-[#1e3a8a] transition-colors"
                        required
                      />
                    </div>

                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-[#1e3a8a] transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-6 text-gray-400" size={20} />
                    <textarea
                      name="message"
                      placeholder="Write Message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:border-[#1e3a8a] transition-colors resize-none"
                      required
                    ></textarea>
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      className="bg-[#5b7bb4] hover:bg-[#4a6a9d] text-white font-semibold px-12 py-3 rounded transition-colors duration-300"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-[#5b7bb4] to-[#4a6a9d] rounded-lg shadow-lg p-8 text-white h-full">
                <h2 className="text-3xl font-bold text-center mb-8 pb-4 border-b-2 border-white/30">CONTACT INFORMATION</h2>

                <div className="space-y-8">
                  <div>
                    <h3 className="font-bold text-lg mb-4">Contact Number:</h3>
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 bg-green-500 rounded flex items-center justify-center flex-shrink-0">
                        <Phone size={24} />
                      </div>
                      <div>
                        <p className="text-white">+91 9664665685</p>
                        <p className="text-white">+91 2231693855</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-4">Mail Address:</h3>
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 bg-white/20 rounded flex items-center justify-center flex-shrink-0">
                        <Mail size={24} />
                      </div>
                      <div>
                        <p className="text-white break-words">admin@kcimpex.com</p>
                        <p className="text-white break-words">sales@kcimpex.com</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-4">Office Location:</h3>
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 bg-white/20 rounded flex items-center justify-center flex-shrink-0">
                        <MapPin size={24} />
                      </div>
                      <div>
                        <p className="text-white leading-relaxed">
                          11A/11C, 4th Lane Sitaphalwadi, Near Mazgaon mustafa bazaar, Mumbai 400010
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <div className="mb-6">
              <p className="text-[#1e3a8a] font-semibold text-sm mb-2">Location</p>
              <h2 className="text-4xl font-bold text-gray-800">Get Directions</h2>
              <div className="w-24 h-1 bg-blue-400 mt-2"></div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.0449076896856!2d72.8513807!3d18.9647953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce7c0c8c1c5d%3A0x7c8c8c8c8c8c8c8c!2sSitaphalwadi%2C%20Mazgaon%2C%20Mumbai%2C%20Maharashtra%20400010!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="K C IMPEX Location"
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
