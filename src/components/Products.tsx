import { ArrowRight } from 'lucide-react';

const products = [
  {
    name: 'Bolt',
    image: 'https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    name: 'Nut',
    image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    name: 'Washer',
    image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    name: 'Screws',
    image: 'https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    name: 'Studs',
    image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    name: 'Round Bar',
    image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    name: 'Pipe Fittings',
    image: 'https://images.pexels.com/photos/1249610/pexels-photo-1249610.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    name: 'Pipe',
    image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=400'
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
          <button className="bg-gray-800 text-white px-5 md:px-6 py-2 md:py-3 rounded font-medium hover:bg-gray-900 transition-colors flex items-center gap-2 text-sm md:text-base">
            All Products <ArrowRight size={16} className="md:w-[18px] md:h-[18px]" />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
          {products.map((product, index) => (
            <div key={index} className="group cursor-pointer">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
