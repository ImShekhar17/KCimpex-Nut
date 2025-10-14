import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
  {
    name: 'Bolt',
    image: '/BOLT.webp',
    link: '/products/bolts'
  },
  {
    name: 'Nut',
    image: '/NUT.webp',
    link: '/products/nuts'
  },
  {
    name: 'Washer',
    image: '/Washer.webp',
    link: '/products/washers'
  },
  {
    name: 'Screws',
    image: '/Screws.webp',
    link: '/products/screws'
  },
  {
    name: 'Studs',
    image: 'Studs.webp',
    link: '/products/studs'
  },
  {
    name: 'Round Bar',
    image: '/Pipebar.webp',
    link: '/products/round-bar'
  },
  {
    name: 'Pipe Fittings',
    image: '/PipeFit.webp',
    link: '/products/pipe-fittings'
  },
  {
    name: 'Pipe',
    image: '/PIPE.webp',
    link: '/products/pipe'
  }
];

export default function Products() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gap-4">
          <div>
            <div className="text-[#6b7280] uppercase text-sm font-medium mb-2 tracking-wide">
              What We Do
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Our Products</h2>
          </div>
          <Link to="/products" className="bg-gray-800 text-white px-5 md:px-6 py-2 md:py-3 rounded font-medium hover:bg-gray-900 transition-colors flex items-center gap-2 text-sm md:text-base">
            All Products <ArrowRight size={16} className="md:w-[18px] md:h-[18px]" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
          {products.map((product, index) => (
            <Link key={index} to={product.link} className="group cursor-pointer">
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="bg-[#1e3a8a] text-white text-center py-3 font-semibold">
                  {product.name}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
