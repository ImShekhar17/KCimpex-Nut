import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import WhatsAppButton from '../components/WhatsAppButton';
import FeedbackButton from '../components/FeedbackButton';

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      title: 'Forging',
      description: 'We specialize in various forging processes, including impression-Die Forging, Open Die Forging, Cold Forging, and Seamless Rolled Ring Forging.',
      image: 'https://images.pexels.com/photos/8961493/pexels-photo-8961493.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 2,
      title: 'Fabrication',
      description: 'We specialize in various fabrication processes, including Bending, Casting, Drawing, Welding, and Assembling.',
      image: 'https://images.pexels.com/photos/1474993/pexels-photo-1474993.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 3,
      title: 'Machining',
      description: 'We specialize in various machining processes, including Cutting, Shearing, Turning, Threading, Punching, Stamping, Drilling, and Centerless Grinding.',
      image: 'https://images.pexels.com/photos/4489702/pexels-photo-4489702.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 4,
      title: 'Heat Treatment',
      description: 'We specialize in various heat treatment processes, including Annealing, Hardening, Normalizing, and Tempering.',
      image: 'https://images.pexels.com/photos/7005401/pexels-photo-7005401.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 5,
      title: 'Coating',
      description: 'We specialize in various coating processes, including Anodizing, Galvanizing, Electroplating, Powder Coating, Porcelain Enamel Coating, and Epoxy Coating.',
      image: 'https://images.pexels.com/photos/7235971/pexels-photo-7235971.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 6,
      title: 'Testing',
      description: 'We perform a variety of tests according to material and customer requirements, including Positive Material Identification Testing (PMI), Ultrasonic Testing (UT), Radiography Testing (X-Ray), Dye-Penetration Testing (PT), Spectro Analysis, Tensile Testing, and Hardness Testing.',
      image: 'https://images.pexels.com/photos/8553846/pexels-photo-8553846.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 7,
      title: 'Logistics',
      description: 'We provide the fastest delivery options through a combination of road, rail, air, and sea transport.',
      image: 'https://images.pexels.com/photos/4246098/pexels-photo-4246098.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 8,
      title: 'Piping Package Solutions',
      description: 'We provide comprehensive piping solutions by assembling various types of piping products, including pipes, fittings, and flanges, into complete packages tailored to customer requirements. With many years of project management experience, each has a specialized and fully dedicated project management team to successfully oversee each stage of your project.',
      image: 'https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 9,
      title: 'Customization',
      description: 'In addition to our standard product range, we manufacture custom-made products tailored to your specific needs, technical drawings, and specifications.',
      image: 'https://images.pexels.com/photos/3846508/pexels-photo-3846508.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div
        className="relative h-64 md:h-72 lg:h-80 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1474993/pexels-photo-1474993.jpeg?auto=compress&cs=tinysrgb&w=1200)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a8a]/90 to-[#1e3a8a]/70"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">SERVICES</h1>
          <div className="flex items-center justify-center gap-2 text-sm md:text-base lg:text-lg">
            <a href="/" className="hover:text-gray-200 transition-colors">Home</a>
            <span>→</span>
            <span>Services</span>
          </div>
        </div>
      </div>

      <div className="flex-grow bg-gray-50 py-8 md:py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group cursor-pointer"
              >
                <div className="relative overflow-hidden h-72">
                  <div className="absolute top-4 left-4 w-14 h-14 bg-[#1e3a8a] text-white rounded-full flex items-center justify-center font-bold text-xl z-10 shadow-lg">
                    {service.id}
                  </div>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                </div>

                <div className="p-8 bg-white">
                  <h3 className="text-xl md:text-2xl font-bold text-[#1e3a8a] mb-3 md:mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-xs md:text-sm">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
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
