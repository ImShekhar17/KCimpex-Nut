import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const industries = [
  {
    name: 'Offshore Plant',
    image: '/Offs.webp',
    link: '/'
  },
  {
    name: 'Oil & Gas Industries',
    image: '/OILGas.webp',
    link: '/'
  },
  {
    name: 'Petrochemical Industries',
    image: '/Petrochem.webp',
    link: '/'
  },
  {
    name: 'Power plant',
    image: '/Power.webp',
    link: '/'
  },
  {
    name: 'Heat Exchanger',
    image: '/Heatx.webp',
    link: '/'
  },
  {
    name: 'Refinery',
    image: '/Refine.webp',
    link: '/'
  },
  {
    name: 'Forging',
    image: '/Fordge.webp',
    link: '/'
  },
  {
    name: 'Engineering Sector',
    image: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=600',
    link: '/'
  },
  {
    name: 'Construction Industry',
    image: 'https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=600',
    link: '/'
  },
  {
    name: 'Engine & Turbines',
    image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600',
    link: '/'
  }
];

export default function Industries() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 1;

    const scroll = () => {
      scrollPosition += scrollSpeed;

      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }

      scrollContainer.scrollLeft = scrollPosition;
    };

    const intervalId = setInterval(scroll, 30);

    return () => clearInterval(intervalId);
  }, []);

  const duplicatedIndustries = [...industries, ...industries];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-8 md:mb-12">
          <div className="text-[#1e3a8a] uppercase text-sm font-medium mb-2 tracking-wide">
            Industries We Serve
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Applications</h2>
        </div>

        <div
          ref={scrollRef}
          className="overflow-hidden"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="flex gap-6" style={{ width: 'max-content' }}>
            {duplicatedIndustries.map((industry, index) => (
              <Link
                key={index}
                to={industry.link}
                className="group cursor-pointer overflow-hidden rounded-lg border border-gray-200 hover:shadow-xl transition-shadow flex-shrink-0"
                style={{ width: '250px' }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={industry.image}
                    alt={industry.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="bg-white p-3 md:p-4 text-center">
                  <h3 className="text-base md:text-lg font-semibold text-[#1e3a8a]">
                    {industry.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
