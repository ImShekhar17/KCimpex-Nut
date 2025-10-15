// import { useEffect, useRef } from 'react';

// const logos = [
//   { name: 'ONGC', url: 'https://images.pexels.com/photos/7413915/pexels-photo-7413915.jpeg?auto=compress&cs=tinysrgb&w=150&h=80' },
//   { name: 'PDIL', url: 'https://images.pexels.com/photos/8369648/pexels-photo-8369648.jpeg?auto=compress&cs=tinysrgb&w=150&h=80' },
//   { name: 'Dept of Atomic Energy', url: 'https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?auto=compress&cs=tinysrgb&w=150&h=80' },
//   { name: 'Larsen & Toubro', url: 'https://images.pexels.com/photos/5650026/pexels-photo-5650026.jpeg?auto=compress&cs=tinysrgb&w=150&h=80' },
//   { name: 'BHEL', url: 'https://images.pexels.com/photos/7413915/pexels-photo-7413915.jpeg?auto=compress&cs=tinysrgb&w=150&h=80' },
//   { name: 'IBR', url: 'https://images.pexels.com/photos/8369648/pexels-photo-8369648.jpeg?auto=compress&cs=tinysrgb&w=150&h=80' },
//   { name: 'MIC India', url: 'https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?auto=compress&cs=tinysrgb&w=150&h=80' },
//   { name: 'IOCL', url: 'https://images.pexels.com/photos/5650026/pexels-photo-5650026.jpeg?auto=compress&cs=tinysrgb&w=150&h=80' }
// ];

// export default function ThirdParty() {
//   const scrollRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const scrollContainer = scrollRef.current;
//     if (!scrollContainer) return;

//     let scrollPosition = 0;
//     const scrollSpeed = 1;

//     const scroll = () => {
//       scrollPosition += scrollSpeed;
//       if (scrollPosition >= scrollContainer.scrollWidth / 2) {
//         scrollPosition = 0;
//       }
//       scrollContainer.scrollLeft = scrollPosition;
//     };

//     const intervalId = setInterval(scroll, 30);

//     return () => clearInterval(intervalId);
//   }, []);

//   return (
//     <section className="py-10 md:py-12 lg:py-16 bg-white border-t border-b border-gray-200">
//       <div className="container mx-auto px-4">
//         <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Third Party Inspection</h2>

//         <div className="overflow-hidden" ref={scrollRef}>
//           <div className="flex gap-6 md:gap-10 lg:gap-12 items-center" style={{ width: 'max-content' }}>
//             {[...logos, ...logos].map((logo, index) => (
//               <div
//                 key={index}
//                 className="flex-shrink-0 w-28 md:w-36 lg:w-40 h-16 md:h-18 lg:h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all"
//               >
//                 <img
//                   src={logo.url}
//                   alt={logo.name}
//                   className="max-w-full max-h-full object-contain"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { useEffect, useRef } from 'react';

const logos = [
  { name: 'PDIL', image: '/Pdil.webp' },
  { name: 'Dept of Atomic Energy', image: '/Atomic.webp' },
  { name: 'Tata', image: '/TATA.webp' },
  { name: 'Larsen & Toubro', image: '/LNT.webp' },
  { name: 'Buru', image: '/Buru.webp' },
  { name: 'NUCLEAR', image: '/Nuclear.webp' },
  { name: 'IBR', image: '/IBR.webp' },
  { name: 'DET', image: '/DET.webp' },
  { name: 'MIC India', image: '/MIC.webp' },
  { name: 'TUV India', image: '/TUV.webp' },
  { name: 'IOCL', image: '/IOL.webp' },
];

export default function ThirdParty() {
  const scrollRef = useRef(null);

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

  return (
    <section className="py-10 md:py-12 lg:py-16 bg-white border-t border-b border-gray-200">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
          Third Party Inspection
        </h2>

        <div className="overflow-hidden" ref={scrollRef}>
          <div
            className="flex gap-6 md:gap-10 lg:gap-12 items-center"
            style={{ width: 'max-content' }}
          >
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-28 md:w-36 lg:w-40 h-16 md:h-18 lg:h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all"
              >
                <img
                  src={logo.image}
                  alt={logo.name}
                  className="max-w-full max-h-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
