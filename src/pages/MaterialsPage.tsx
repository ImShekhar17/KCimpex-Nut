import React, { useState } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import ScrollToTop from '../components/ScrollToTop';

interface MaterialItem {
  name: string;
  link: string;
}

interface MaterialCategory {
  title: string;
  items: MaterialItem[];
}

const MaterialsPage = () => {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set(['INCONEL & INCOLOY®'])
  );

  const toggleCategory = (categoryTitle: string) => {
    setExpandedCategories((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(categoryTitle)) {
        newSet.delete(categoryTitle);
      } else {
        newSet.add(categoryTitle);
      }
      return newSet;
    });
  };

  const materialCategories: MaterialCategory[] = [
    {
      title: 'INCONEL & INCOLOY®',
      items: [
        { name: 'INCONEL 600', link: '/materials/inconel-600' },
        { name: 'INCONEL alloy 601', link: '/materials/inconel-alloy-601' },
        { name: 'INCONEL alloy X-750', link: '/materials/inconel-alloy-x-750' },
        { name: 'INCONEL alloy 625', link: '/materials/inconel-alloy-625' },
        { name: 'INCONEL alloy 690', link: '/materials/inconel-alloy-690' },
        { name: 'INCOLOY® alloy 800', link: '/materials/incoloy-alloy-800' },
        { name: 'INCONEL® alloy 718', link: '/materials/inconel-alloy-718' },
        { name: 'INCOLOY alloy 825', link: '/materials/incoloy-alloy-825' },
      ],
    },
    {
      title: 'NICKEL',
      items: [
        { name: 'NICKEL 200', link: '/materials/nickel-200' },
        { name: 'NICKEL 201', link: '/materials/nickel-201' },
      ],
    },
    {
      title: 'HASTELLOY',
      items: [
        { name: 'HASTELLOY C-276', link: '/materials/hastelloy-c-276' },
        { name: 'HASTELLOY C22', link: '/materials/hastelloy-c22' },
        { name: 'HASTELLOY B-2', link: '/materials/hastelloy-b-2' },
        { name: 'HASTELLOY B-3', link: '/materials/hastelloy-b-3' },
        { name: 'HASTELLOY X', link: '/materials/hastelloy-x' },
      ],
    },
    {
      title: 'MONEL',
      items: [
        { name: 'MONEL alloy 400', link: '/materials/monel-alloy-400' },
        { name: 'MONEL alloy K - 500', link: '/materials/monel-alloy-k-500' },
      ],
    },
    {
      title: 'STAINLESS STEEL',
      items: [
        { name: 'SS 309', link: '/materials/ss-309' },
        { name: 'SS 310', link: '/materials/ss-310' },
        { name: 'SS 310s', link: '/materials/ss-310s' },
        { name: 'SS 321', link: '/materials/ss-321' },
        { name: 'SS 347', link: '/materials/ss-347' },
        { name: 'SS 316Ti', link: '/materials/ss-316ti' },
        { name: 'SS 17-4-Ph', link: '/materials/ss-17-4-ph' },
        { name: 'SS 15-5Ph', link: '/materials/ss-15-5ph' },
      ],
    },
    {
      title: 'SUPER STAINLESS STEEL',
      items: [
        { name: '904L', link: '/materials/904l' },
        { name: 'Alloy-20', link: '/materials/alloy-20' },
        { name: 'SMO 254', link: '/materials/smo-254' },
        { name: 'A-286', link: '/materials/a-286' },
        { name: '253-MA', link: '/materials/253-ma' },
      ],
    },
    {
      title: 'DUPLEX & SUPER DUPLEX STAINLESS STEEL',
      items: [
        { name: 'Duplex 2205', link: '/materials/duplex-2205' },
        { name: 'Super Duplex 2507', link: '/materials/super-duplex-2507' },
      ],
    },
    {
      title: 'TITANIUM ALLOYS',
      items: [
        { name: 'CP Titanium Grade 1', link: '/materials/cp-titanium-grade-1' },
        { name: 'Titanium Grade 5 / 6AL4V', link: '/materials/titanium-grade-5-6al4v' },
        { name: 'Titanium Grade 11', link: '/materials/titanium-grade-11' },
        { name: 'CP Titanium Grade 2', link: '/materials/cp-titanium-grade-2' },
        { name: 'CP Titanium Grade 4', link: '/materials/cp-titanium-grade-4' },
        { name: 'Titanium Grade 6 / 5Al 2.5Sn', link: '/materials/titanium-grade-6-5al-2-5sn' },
        { name: 'Titanium Grade 12', link: '/materials/titanium-grade-12' },
        { name: 'CP Titanium Grade 7', link: '/materials/cp-titanium-grade-7' },
      ],
    },
    {
      title: 'HARD TO FIND ALLOYS',
      items: [
        { name: 'Tantalum', link: '/materials/tantalum' },
        { name: 'Niobium', link: '/materials/niobium' },
        { name: 'Tungsten', link: '/materials/tungsten' },
        { name: 'Gallium', link: '/materials/gallium' },
        { name: 'Molybdenum', link: '/materials/molybdenum' },
        { name: 'Rhenium', link: '/materials/rhenium' },
        { name: 'Hafnium', link: '/materials/hafnium' },
        { name: 'Indium', link: '/materials/indium' },
        { name: 'Beryllium Copper', link: '/materials/beryllium-copper' },
        { name: 'Vanadium', link: '/materials/vanadium' },
        { name: 'Germanium', link: '/materials/germanium' },
        { name: 'Harolx', link: '/materials/harolx' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div
        className="relative bg-cover bg-center py-12 md:py-16 lg:py-20"
        style={{
          backgroundImage:
            'linear-gradient(rgba(21, 48, 99, 0.9), rgba(21, 48, 99, 0.9)), url(https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">METARIAL</h1>
          <div className="flex items-center text-white text-xs md:text-sm">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span>Metarial</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 md:mb-8 border-b-4 border-blue-900 inline-block pb-2">
          Grades
        </h2>

        <div className="space-y-4">
          {materialCategories.map((category) => {
            const isExpanded = expandedCategories.has(category.title);
            return (
              <div key={category.title} className="border border-gray-300 rounded-lg overflow-hidden bg-white">
                <button
                  onClick={() => toggleCategory(category.title)}
                  className="w-full px-4 md:px-6 py-3 md:py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900 text-left text-sm md:text-base">{category.title}</span>
                  {isExpanded ? (
                    <ChevronDown className="w-5 h-5 text-gray-600" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-gray-600" />
                  )}
                </button>

                {isExpanded && (
                  <div className="px-4 md:px-6 pb-4 md:pb-6 pt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                    {category.items.map((item) => (
                      <Link
                        key={item.name}
                        to={item.link}
                        className="flex items-center justify-between px-3 md:px-4 py-2.5 md:py-3 border border-blue-900 rounded hover:bg-blue-50 transition-colors group"
                      >
                        <span className="text-gray-900 font-medium text-sm md:text-base">{item.name}</span>
                        <ChevronRight className="w-5 h-5 text-blue-900 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
};

export default MaterialsPage;
