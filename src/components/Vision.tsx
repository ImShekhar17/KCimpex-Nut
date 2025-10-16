import { Settings, Lock, Target, Headphones } from 'lucide-react';

export default function Vision() {
  const features = [
    {
      icon: Settings,
      title: 'PERSONALISED SERVICES',
      description: 'Our team will help you to select the right fastener as per your need',
      color: 'text-yellow-400'
    },
    {
      icon: Lock,
      title: 'QUALITY CONTROL',
      description: 'We have a Professional Quality Check Department that will ensure nothing but the finest quality.',
      color: 'text-green-400'
    },
    {
      icon: Target,
      title: 'Specialized Sales',
      description: 'Specialized Sales A sales team that will be at your beck and call 24/7.',
      color: 'text-green-400'
    },
    {
      icon: Headphones,
      title: 'After Sales Support',
      description: 'Our team will follow up on a scheduled basis to ensure 100% satisfaction.',
      color: 'text-green-400'
    }
  ];

  return (
<section className="relative py-12 md:py-16 lg:py-20 overflow-hidden">
  <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2">
    <div className="relative hidden lg:block">
      <img
        src="/FutureImg.webp"
        alt="Fastener World"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 h-full flex items-end p-8 lg:p-12">
        <div className="text-white space-y-3 lg:space-y-4">
          <p className="text-xs lg:text-sm leading-relaxed">
            We deal in a wide variety of Nut Bolt Fasteners, Socket fasteners,<br className="hidden xl:block" />
            Screws and Rivets, Washers, Studs & special fasteners which satisfy<br className="hidden xl:block" />
            all international standards like IS, DIN, JIS, BS.
          </p>
          <p className="text-xs lg:text-sm font-semibold">
            Fastener World is the best nut bolt screws supplier in Mumbai.
          </p>
        </div>
      </div>
    </div>
    <div className="bg-[#1e3a8a]"></div>
  </div>

  <div className="relative z-20 container mx-auto px-4">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
      <div className="hidden lg:block"></div>
      <div className="text-white px-4 md:px-8 lg:pl-12 py-8 md:py-10 lg:py-12">
        <div className="mb-6 md:mb-8">
          <div className="text-xs md:text-sm uppercase tracking-wide mb-2">OUR BOLD VISION</div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">We're The Future Now</h2>
          <p className="text-sm md:text-base lg:text-lg mb-6 md:mb-8">
            Custom manufacturing services and solutions built specifically for your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-start gap-2 md:gap-3">
                <div className={`${feature.color} mt-1`}>
                  <feature.icon size={24} className="md:w-7 md:h-7 lg:w-8 lg:h-8" />
                </div>
                <div>
                  <h3 className={`text-sm md:text-base font-bold mb-1 md:mb-2 ${feature.color}`}>
                    {feature.title}
                  </h3>
                  <p className="text-xs md:text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

  );
}
