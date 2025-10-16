import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import WhatsAppButton from '../components/WhatsAppButton';
import FeedbackButton from '../components/FeedbackButton';
import { Link } from 'react-router-dom';

export default function ProductsPage() {
  const products = [
    {
      id: 'bolt',
      name: 'Bolt',
      image: '/BOLT.webp',
      link: '/products/bolts', 
    },
    {
      id: 'nut',
      name: 'Nut',
      image: '/NUT.webp',
      link: '/products/nuts',
    },
    {
      id: 'washer',
      name: 'Washer',
      image: '/Washer.webp',
      link: '/products/washers', 
    },
    {
      id: 'screws',
      name: 'Screws',
      image: '/Screws.webp',
      link: '/products/screws', 
    },
    {
      id: 'studs',
      name: 'Studs',
      image: 'Studs.webp',
      link: '/products/studs',
    },
    {
      id: 'round-bar',
      name: 'Round Bar',
      image: '/Pipebar.webp',
      link: '/products/round-bar',
    },
    {
      id: 'pipe-fittings',
      name: 'Pipe Fittings',
      image: '/PipeFit.webp',
      link: '/products/pipe-fittings',
    },
    {
      id: 'pipe',
      name: 'Pipe',
      image: '/PIPE.webp',
      link: '/products/pipe', 
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

<div className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
  {/* Background image */}
  <img
    src="/AllHero.jpg"
    alt="Product Background"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Dark overlay */}
  <div className="absolute inset-0 bg-[#1e3a8a] bg-opacity-80"></div>

  {/* Content */}
  <div className="container mx-auto px-4 relative z-10">
    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">PRODUCT</h1>
    <div className="flex items-center gap-2 text-white text-sm md:text-base lg:text-lg">
      <Link to="/" className="hover:underline">Home</Link>
      <span>→</span>
      <span className="font-semibold">Product</span>
    </div>
  </div>
</div>


      <div className="flex-grow bg-white py-8 md:py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {products.map((product) => (
              <Link
                key={product.id}
                to={product.link}
                className="group cursor-pointer transition-all duration-300 hover:scale-105"
              >
                <div className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300">
                  <div className="aspect-square overflow-hidden bg-gray-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="bg-[#1e3a8a] py-4">
                    <h3 className="text-white text-center text-lg md:text-xl font-semibold">
                      {product.name}
                    </h3>
                  </div>
                </div>
              </Link>
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
