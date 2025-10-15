import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import ScrollToTop from '../components/ScrollToTop';
import FeedbackButton from '../components/FeedbackButton';
import { Clock, DollarSign, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Thrust from '../../public/Thrust.jpg';

export default function AboutPage() {
  const certifications = [
    {
      title: 'ISO 9001:2015',
      image: 'https://images.pexels.com/photos/6863332/pexels-photo-6863332.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'ISO 14001:2015',
      image: 'https://images.pexels.com/photos/6863332/pexels-photo-6863332.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'UDYAM Registration',
      image: 'https://images.pexels.com/photos/6863332/pexels-photo-6863332.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'GST Certificate',
      image: 'https://images.pexels.com/photos/6863332/pexels-photo-6863332.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <div
        className="relative h-[300px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a8a]/90 to-[#1e3a8a]/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl font-bold text-white mb-4">ABOUT US</h1>
          <div className="flex items-center gap-2 text-white text-sm">
            <Link to="/" className="hover:underline">Home</Link>
            <span>→</span>
            <span>About Us</span>
          </div>
        </div>
      </div>

      {/* Company History Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Company History</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Allow us to introduce ourselves as <span className="font-semibold">HORIZON METAL & ALLOYS</span>, your premier destination for all your fastening needs.
                  Whether you're a construction developer or equipment producer, we offer a comprehensive range of high-quality fasteners tailored to meet your specific requirements.
                </p>
                <p>
                  With over <span className="font-semibold">10 years of industry experience</span>, Horizon Metal & Alloys is dedicated to providing you with top-quality goods
                  at competitive rates and unparalleled service. Our extensive product line includes Nut & Bolt Fasteners,
                  Socket Fasteners, Screws, Washers, Studs, and specialty fasteners, all meticulously crafted to
                  meet international standards.
                </p>
                <p>
                  Horizon Metal & Alloys is a leading manufacturer and supplier of premium fittings, fasteners, nuts, bolts, and washers,
                  specializing in high-nickel and high-performance alloys. With a distinguished decade of experience, we are
                  renowned for our unwavering commitment to exceeding the expectations of even the most challenging
                  engineering requirements.
                </p>
              </div>
            </div>
    <div className="relative">
      <div className="relative rounded-lg overflow-hidden shadow-2xl">
        <img
          src={Thrust}
          alt="Fasteners"
          className="w-full h-auto"
        />
        <div className="absolute bottom-4 right-4 bg-[#1e3a8a] text-white px-6 py-3 rounded font-semibold">
          Bolting Trust
        </div>
      </div>
    </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-[#1e3a8a] font-semibold mb-2">Workflow</p>
            <h2 className="text-4xl font-bold text-gray-900">How We Work</h2>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute top-12 left-0 right-0 h-0.5 bg-gray-300 hidden lg:block"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Step 01 */}
              <div className="relative">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-[#1e3a8a] text-white rounded-full relative z-10 mb-2">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <p className="text-sm font-semibold text-gray-600">Step 01</p>
                </div>
                <div className="text-center">
                  <h3 className="text-8xl font-bold text-gray-100 mb-4">01</h3>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Enquiry Handling And Order Generation</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Upon receiving an order, our dedicated team collaborates to devise the optimal fastener
                    solution. All inquiries are promptly addressed within 24 hours, providing competitive rates and
                    swift delivery schedules.
                  </p>
                </div>
              </div>

              {/* Step 02 */}
              <div className="relative">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-[#1e3a8a] text-white rounded-full relative z-10 mb-2">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <p className="text-sm font-semibold text-gray-600">Step 02</p>
                </div>
                <div className="text-center">
                  <h3 className="text-8xl font-bold text-gray-100 mb-4">02</h3>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Operations</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    If the requested items are not in stock, our efficient operations team swiftly places their
                    production to meet delivery deadlines.
                  </p>
                </div>
              </div>

              {/* Step 03 */}
              <div className="relative">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-[#1e3a8a] text-white rounded-full relative z-10 mb-2">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <p className="text-sm font-semibold text-gray-600">Step 03</p>
                </div>
                <div className="text-center">
                  <h3 className="text-8xl font-bold text-gray-100 mb-4">03</h3>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Quality Control & Shipping</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Following a meticulous quality control process to ensure compliance with both local and
                    international standards, we promptly dispatch the products. The materials are carefully packed
                    before shipment, and customers are promptly notified.
                  </p>
                </div>
              </div>

              {/* Step 04 */}
              <div className="relative">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-[#1e3a8a] text-white rounded-full relative z-10 mb-2">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <p className="text-sm font-semibold text-gray-600">Step 04</p>
                </div>
                <div className="text-center">
                  <h3 className="text-8xl font-bold text-gray-100 mb-4">04</h3>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">After Sales Support</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Customer satisfaction is paramount to us. Hence, we have a dedicated team committed to providing
                    after-sales support and ensuring your continued satisfaction with our services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Details Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">ABOUT US</h2>

              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  We are proud to introduce <span className="font-semibold">M/s. HORIZON METAK & ALLOYS</span>, a well-established leader in the field of
                  High-Pressure Exotic Metals and a wide range of Ferrous and Non-Ferrous Metals. With
                  business operations spanning both domestic and international markets, we have built a
                  strong reputation for delivering high-quality products and exceptional service.
                </p>

                <p>
                  Our diverse product portfolio includes materials such as Copper, Brass, Aluminium,
                  Zinc, Lead, and Titanium (Grades 2, 5, 6, and 7), as well as advanced alloys like Nickel,
                  Monel (400 and 500), Inconel/Incoloy, and Hastelloy (C-276/C-22/B). Additionally, we
                  offer specialized metals including 904L, SMO254, AL6XN, Super Duplex, Tantalum, and
                  Zirconium, alongside Stainless Steel, Carbon Steel, and Alloy Steel. These materials are
                  available in various forms such as fasteners, fittings, tubular products, and flat
                  products, designed to meet the specific needs of our clients.
                </p>

                <p>
                  At Horizon Metal & Alloys, we excel in the manufacturing of high-pressure pipe fittings, fasteners,
                  flanges, and finger safety tools. Our products are engineered to cater to the demanding
                  requirements of industrial applications across a variety of sectors.
                </p>

                <p>
                  With a commitment to quality, innovation, and customer satisfaction, we strive to
                  deliver solutions that meet the highest industry standards and exceed client
                  expectations.
                </p>
              </div>

              {/* Certification Logos */}
              {/* <div className="flex items-center gap-8 mt-12">
                <div className="text-center">
                  <img
                    src="https://images.pexels.com/photos/6863332/pexels-photo-6863332.jpeg?auto=compress&cs=tinysrgb&w=200"
                    alt="MSME Logo"
                    className="h-20 mx-auto mb-2"
                  />
                  <p className="text-xs text-gray-600">UDYAM-MH-33D-0316018</p>
                </div>
                <div className="text-center">
                  <img
                    src="https://images.pexels.com/photos/6863332/pexels-photo-6863332.jpeg?auto=compress&cs=tinysrgb&w=200"
                    alt="ISO Certified"
                    className="h-20 mx-auto"
                  />
                </div>
                <div className="text-center">
                  <img
                    src="https://images.pexels.com/photos/6863332/pexels-photo-6863332.jpeg?auto=compress&cs=tinysrgb&w=200"
                    alt="Make in India"
                    className="h-20 mx-auto"
                  />
                </div>
              </div> */}
            </div>

            {/* Right Side Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {/* Professional Services */}
  <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
    <div className="flex justify-center mb-4">
      <div className="w-16 h-16 bg-[#1e3a8a]/10 rounded-full flex items-center justify-center">
        <ShieldCheck className="w-8 h-8 text-[#1e3a8a]" />
      </div>
    </div>
    <h3 className="text-xl font-bold text-center text-gray-900 mb-3">Professional Services</h3>
    <p className="text-center text-gray-600 text-sm">
      Experience excellent quality, fast lead times, and responsive customer service at Horizon Metal & Alloys.
    </p>
  </div>

  {/* Timely Delivery */}
  <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
    <div className="flex justify-center mb-4">
      <div className="w-16 h-16 bg-[#1e3a8a]/10 rounded-full flex items-center justify-center">
        <Clock className="w-8 h-8 text-[#1e3a8a]" />
      </div>
    </div>
    <h3 className="text-xl font-bold text-center text-gray-900 mb-3">Timely Delivery</h3>
    <p className="text-center text-gray-600 text-sm">
      Count on Horizon Metal & Alloys for on-time delivery regardless of any obstacles.
    </p>
  </div>

  {/* Competitive Price */}
  <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
    <div className="flex justify-center mb-4">
      <div className="w-16 h-16 bg-[#1e3a8a]/10 rounded-full flex items-center justify-center">
        <DollarSign className="w-8 h-8 text-[#1e3a8a]" />
      </div>
    </div>
    <h3 className="text-xl font-bold text-center text-gray-900 mb-3">Competitive Price</h3>
    <p className="text-center text-gray-600 text-sm">
      Enjoy highly competitive and affordable prices from Horizon Metal & Alloys, suitable for all industries.
    </p>
  </div>

  {/* Quality Control */}
  <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
    <div className="flex justify-center mb-4">
      <div className="w-16 h-16 bg-[#1e3a8a]/10 rounded-full flex items-center justify-center">
        <CheckCircle2 className="w-8 h-8 text-[#1e3a8a]" />
      </div>
    </div>
    <h3 className="text-xl font-bold text-center text-gray-900 mb-3">Quality Control</h3>
    <p className="text-center text-gray-600 text-sm">
      Benefit from one of the best QC departments, ensuring strict process control at Horizon Metal & Alloys.
    </p>
  </div>
</div>

          </div>
        </div>
      </section>

      {/* Quality Assurance - Our Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <p className="text-[#1e3a8a] font-semibold mb-2">Quality Assurance</p>
            <h2 className="text-4xl font-bold text-gray-900">Our Certifications</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                  <a
                    href={cert.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative overflow-hidden"
                  >
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                      <span className="bg-[#1e3a8a] text-white px-6 py-2 rounded font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        View Full
                      </span>
                    </div>
                  </a>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-gray-900">{cert.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Let's Begin an Exceptional Journey Together */}
      <section
        className="relative py-32 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold text-white mb-6">
              Let's Begin an Exceptional Journey Together
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              At Horizon Metal & Alloys, our unwavering commitment to exceptional quality, service, and timely delivery has distinguished
              us for years. We prioritize your needs, attentively listening to your requirements and preferences, crafting tailor-made
              solutions to fulfill them. Let's collaborate and forge a path towards greatness together
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#1e3a8a] text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-[#1e4cb8] transition-colors"
            >
              Let's Go <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
      <FeedbackButton />
    </div>
  );
}
