import { Award, Clock, ShieldCheck, TrendingDown, Gem, Users } from 'lucide-react';

const expertiseItems = [
  {
    icon: Award,
    title: 'Professional Service',
    description: 'Excellent quality, terrific lead times, and highly responsive customer service. All at Fastener World.',
    color: 'text-[#1e3a8a]'
  },
  {
    icon: Clock,
    title: 'Timely Delivery',
    description: 'Fastener World provides on-time delivery irrespective of any obstacles.',
    color: 'text-[#1e3a8a]'
  },
  {
    icon: ShieldCheck,
    title: 'Quality Is Key',
    description: 'One of the best QC departments with strict process control.',
    color: 'text-[#1e3a8a]'
  },
  {
    icon: TrendingDown,
    title: 'Competitive Price',
    description: "Fastener World's prices are highly competitive and affordable for all scales of industry.",
    color: 'text-[#1e3a8a]'
  },
  {
    icon: Gem,
    title: 'R&D Team',
    description: 'With over 30 years of experience, we are one of the leading supplier of fasteners with a strong R&D department',
    color: 'text-[#1e3a8a]'
  },
  {
    icon: Users,
    title: 'Cross Functional Team',
    description: "Healthy connectivity between different team members is paramount for a perfect business which is Fastener World's #1 principle",
    color: 'text-[#1e3a8a]'
  }
];


export default function Expertise() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-8 md:mb-12">
          <div className="text-[#1e3a8a] uppercase text-sm font-medium mb-2 tracking-wide">
            WHY YOU SHOULD BUY FROM US
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Expertise</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {expertiseItems.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-4 md:p-6 lg:p-8 hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                <div className={`${item.color} mb-3 md:mb-4`}>
                  <item.icon size={48} strokeWidth={1.5} className="md:w-14 md:h-14 lg:w-16 lg:h-16" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2 md:mb-3">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
