import { Phone, Mail, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg shadow-lg p-12">
            <div className="mb-8">
              <div className="text-[#6b7fa5] uppercase text-sm font-medium mb-2 tracking-wide">
                HAVE QUESTIONS?
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Send us a Message</h2>
            </div>

            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 bg-gray-100 border-0 rounded focus:bg-white focus:ring-2 focus:ring-[#1e3a8a] outline-none transition-all"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 bg-gray-100 border-0 rounded focus:bg-white focus:ring-2 focus:ring-[#1e3a8a] outline-none transition-all"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full px-4 py-3 bg-gray-100 border-0 rounded focus:bg-white focus:ring-2 focus:ring-[#1e3a8a] outline-none transition-all"
                />
              </div>

              <div>
                <textarea
                  placeholder="Tell Us About Your Requirments"
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-100 border-0 rounded focus:bg-white focus:ring-2 focus:ring-[#1e3a8a] outline-none transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-[#1e3a8a] text-white px-8 py-3 rounded font-semibold hover:bg-[#1e4cb8] transition-colors flex items-center gap-2"
              >
                <Send size={18} />
                Get In Touch
              </button>
            </form>
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Contact Information</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We've got answers! If you have any questions, feedback, or inquiries, feel free to get in touch with us using the Contact info. Our team will get back to you as soon as possible.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-green-500 text-white p-4 rounded-full">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Phone</h3>
                  <p className="text-gray-700 font-medium">+91 9664665685</p>
                  <p className="text-gray-700 font-medium">+91 2231693855</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-yellow-500 text-white p-4 rounded-full">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Email</h3>
                  <p className="text-gray-700 font-medium">admin@kcimpex.com</p>
                  <p className="text-gray-700 font-medium">sales@kcimpex.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-teal-600 text-white p-4 rounded-full">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Address</h3>
                  <p className="text-gray-700 font-medium">
                    11A/11C, 4th Lane Sitaphalwadi,Near Mazgaon mustafa bazaar,Mumbai 400010
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
