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
      image: 'https://images.pexels.com/photos/209274/pexels-photo-209274.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 'nut',
      name: 'Nut',
      image: 'https://images.pexels.com/photos/162553/nuts-bolts-metal-fixing-162553.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 'washer',
      name: 'Washer',
      image: 'https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 'screws',
      name: 'Screws',
      image: 'https://images.pexels.com/photos/1409216/pexels-photo-1409216.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 'studs',
      name: 'Studs',
      image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 'round-bar',
      name: 'Round Bar',
      image: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 'pipe-fittings',
      name: 'Pipe Fittings',
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 'pipe',
      name: 'Pipe',
      image: 'https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div
        className="relative bg-cover bg-center py-32"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=1260)',
        }}
      >
        <div className="absolute inset-0 bg-[#1e3a8a] bg-opacity-80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl font-bold text-white mb-4">PRODUCT</h1>
          <div className="flex items-center gap-2 text-white text-lg">
            <Link to="/" className="hover:underline">Home</Link>
            <span>→</span>
            <span className="font-semibold">Product</span>
          </div>
        </div>
      </div>

      <div className="flex-grow bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
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
                    <h3 className="text-white text-center text-xl font-semibold">
                      {product.name}
                    </h3>
                  </div>
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
