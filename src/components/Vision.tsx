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
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 grid grid-cols-2">
        <div
          className="bg-cover bg-center relative"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1000)'
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative z-10 h-full flex items-end p-12">
            <div className="text-white space-y-4">
              <p className="text-sm leading-relaxed">
                We deal in a wide variety of Nut Bolt Fasteners, Socket fasteners,<br />
                Screws and Rivets, Washers, Studs & special fasteners which satisfy<br />
                all international standards like IS, DIN, JIS, BS.
              </p>
              <p className="text-sm font-semibold">
                Fastener World is the best nut bolt screws supplier in Mumbai.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#1e3a8a]"></div>
      </div>

      <div className="relative z-20 container mx-auto px-4">
        <div className="grid grid-cols-2 gap-0">
          <div></div>
          <div className="text-white pl-12 py-12">
            <div className="mb-8">
              <div className="text-sm uppercase tracking-wide mb-2">OUR BOLD VISION</div>
              <h2 className="text-4xl font-bold mb-4">We're The Future Now</h2>
              <p className="text-lg mb-8">
                Custom manufacturing services and solutions built specifically for your business
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-start gap-3">
                    <div className={`${feature.color} mt-1`}>
                      <feature.icon size={32} />
                    </div>
                    <div>
                      <h3 className={`font-bold mb-2 ${feature.color}`}>
                        {feature.title}
                      </h3>
                      <p className="text-sm leading-relaxed">
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
