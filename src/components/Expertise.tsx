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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <div className="text-[#1e3a8a] uppercase text-sm font-medium mb-2 tracking-wide">
            WHY YOU SHOULD BUY FROM US
          </div>
          <h2 className="text-4xl font-bold">Expertise</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseItems.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                <div className={`${item.color} mb-4`}>
                  <item.icon size={64} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
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
