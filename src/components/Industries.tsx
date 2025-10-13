import { useEffect, useRef } from 'react';

const industries = [
  {
    name: 'Offshore Plant',
    image: 'https://images.pexels.com/photos/3902728/pexels-photo-3902728.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    name: 'Oil & Gas Industries',
    image: 'https://images.pexels.com/photos/3844796/pexels-photo-3844796.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    name: 'Petrochemical Industries',
    image: 'https://images.pexels.com/photos/257700/pexels-photo-257700.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    name: 'Power plant',
    image: 'https://images.pexels.com/photos/221012/pexels-photo-221012.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    name: 'Marine & Ship Building',
    image: 'https://images.pexels.com/photos/1059119/pexels-photo-1059119.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    name: 'Refinery',
    image: 'https://images.pexels.com/photos/3862628/pexels-photo-3862628.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    name: 'Automotive Industry',
    image: 'https://images.pexels.com/photos/2768961/pexels-photo-2768961.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    name: 'Pharmaceutical Industry',
    image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    name: 'Engineering Sector',
    image: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    name: 'Aerospace Industry',
    image: 'https://images.pexels.com/photos/163726/aircraft-holiday-sun-tourism-163726.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    name: 'Construction Industry',
    image: 'https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    name: 'Engine & Turbines',
    image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600'
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
              <div
                key={index}
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
