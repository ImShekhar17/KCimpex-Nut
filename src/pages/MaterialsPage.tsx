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
        { name: 'INCOLOY® alloy 800', link: '/materials' },
        { name: 'INCONEL® alloy 718', link: '/materials/inconel-alloy-718' },
        { name: 'INCOLOY alloy 825', link: '/materials' },
      ],
    },
    {
      title: 'NICKEL',
      items: [
        { name: 'NICKEL 200', link: '/materials' },
        { name: 'NICKEL 201', link: '/materials' },
      ],
    },
    {
      title: 'HASTELLOY',
      items: [
        { name: 'HASTELLOY C-276', link: '/materials/hastelloy-c-276' },
        { name: 'HASTELLOY C22', link: '/materials/hastelloy-c22' },
        { name: 'HASTELLOY B-2', link: '/materials/hastelloy-b-2' },
        { name: 'HASTELLOY B-3', link: '/materials' },
        { name: 'HASTELLOY X', link: '/materials' },
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
        { name: '904L', link: '/materials' },
        { name: 'Alloy-20', link: '/materials' },
        { name: 'SMO 254', link: '/materials' },
        { name: 'A-286', link: '/materials' },
        { name: '253-MA', link: '/materials' },
      ],
    },
    {
      title: 'DUPLEX & SUPER DUPLEX STAINLESS STEEL',
      items: [
        { name: 'Duplex 2205', link: '/materials' },
        { name: 'Super Duplex 2507', link: '/materials' },
      ],
    },
    {
      title: 'TITANIUM ALLOYS',
      items: [
        { name: 'CP Titanium Grade 1', link: '/materials' },
        { name: 'Titanium Grade 5 / 6AL4V', link: '/materials' },
        { name: 'Titanium Grade 11', link: '/materials' },
        { name: 'CP Titanium Grade 2', link: '/materials' },
        { name: 'CP Titanium Grade 4', link: '/materials' },
        { name: 'Titanium Grade 6 / 5Al 2.5Sn', link: '/materials' },
        { name: 'Titanium Grade 12', link: '/materials' },
        { name: 'CP Titanium Grade 7', link: '/materials' },
      ],
    },
    {
      title: 'HARD TO FIND ALLOYS',
      items: [
        { name: 'Tantalum', link: '/materials/' },
        { name: 'Niobium', link: '/materials/' },
        { name: 'Tungsten', link: '/materials/' },
        { name: 'Gallium', link: '/materials/' },
        { name: 'Molybdenum', link: '/materials/' },
        { name: 'Rhenium', link: '/materials/' },
        { name: 'Hafnium', link: '/materials/' },
        { name: 'Indium', link: '/materials/' },
        { name: 'Beryllium Copper', link: '/materials/' },
        { name: 'Vanadium', link: '/materials/' },
        { name: 'Germanium', link: '/materials/' },
        { name: 'Harolx', link: '/materials/' },
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
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">MATERIALS</h1>
          <div className="flex items-center text-white text-xs md:text-sm">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span>Material</span>
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
