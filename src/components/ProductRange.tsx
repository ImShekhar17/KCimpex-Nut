export default function ProductRange() {
  const categories = [
    {
      title: 'INCONEL & INCOLOY®',
      items: [
        ['INCONEL 600', 'INCONEL alloy 601', 'INCONEL alloy X-750'],
        ['INCONEL alloy 625', 'INCONEL alloy 690', 'INCOLOY® alloy 800'],
        ['INCONEL® alloy 718', 'INCOLOY alloy 825', '']
      ]
    },
    {
      title: 'NICKEL',
      items: [
        ['NICKEL 200', 'NICKEL 201', '']
      ]
    },
    {
      title: 'HASTELLOY',
      items: [
        ['HASTELLOY C-276', 'HASTELLOY C22', 'HASTELLOY B-2'],
        ['HASTELLOY B-3', 'HASTELLOY X', '']
      ]
    },
    {
      title: 'MONEL',
      items: [
        ['MONEL alloy 400', 'MONEL alloy K-500', '']
      ]
    }
  ];

  const stainlessSteel = {
    title: 'STAINLESS STEELS',
    sections: [
      {
        subtitle: 'Stainless Steel',
        items: [
          ['SS 309', 'SS 310', 'SS 310s'],
          ['SS 321', 'SS 347', 'SS 316Ti'],
          ['SS 17-4-Ph', 'SS 15-5Ph', '']
        ]
      },
      {
        subtitle: 'Super Stainless Steel',
        items: [
          ['904L', 'Alloy-20', 'SMO 254'],
          ['A-286', '253-MA', '']
        ]
      },
      {
        subtitle: 'Duplex & Super Duplex Stainless Steel',
        items: [
          ['Duplex 2205', 'Super Duplex 2507', '']
        ]
      }
    ]
  };

  const titaniumAlloys = {
    title: 'TITANIUM ALLOYS',
    items: [
      ['CP Titanium Grade 1', 'Titanium Grade 5 / 6AL4V', ''],
      ['Titanium Grade 11', 'CP Titanium Grade 2', ''],
      ['CP Titanium Grade 4', 'Titanium Grade 6 / 5Al 2.55n', ''],
      ['Titanium Grade 12', 'CP Titanium Grade 7', '']
    ]
  };

  const hardToFind = {
    title: 'HARD TO FIND ALLOYS',
    items: [
      ['Tantalum', 'Niobium', 'Tungsten'],
      ['Gallium', 'Molybdenum', 'Rhenium'],
      ['Hafnium', 'Indium', 'Beryllium Copper'],
      ['Vanadium', 'Germanium', 'Hardox']
    ]
  };

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-8 md:mb-12">
          <div className="text-[#6b7280] uppercase text-sm font-medium mb-2 tracking-wide">
            Category
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Product Range</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
          <div className="bg-white border border-gray-200 rounded-lg p-4 md:p-6 lg:p-8">
            <div className="grid grid-cols-1 gap-6">
              {categories.map((category, idx) => (
                <div key={idx} className="mb-4">
                  <h3 className="text-base md:text-lg font-bold text-[#1e3a8a] mb-2 md:mb-3 flex items-center gap-2">
                    <span className="text-lg md:text-xl">»</span> {category.title}
                  </h3>
                  {category.items.map((row, rowIdx) => (
                    <div key={rowIdx} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 mb-2">
                      {row.map((item, itemIdx) => (
                        item && (
                          <div key={itemIdx} className="text-xs md:text-sm text-gray-700 flex items-center gap-1 cursor-pointer hover:text-[#1e3a8a] transition-colors">
                            <span className="text-[#1e3a8a]">⊙</span> {item}
                          </div>
                        )
                      ))}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-4 md:p-6 lg:p-8">
            <h3 className="text-base md:text-lg font-bold text-[#1e3a8a] mb-4 md:mb-6 flex items-center gap-2">
              <span className="text-lg md:text-xl">»</span> {stainlessSteel.title}
            </h3>
            {stainlessSteel.sections.map((section, idx) => (
              <div key={idx} className="mb-4 md:mb-6">
                <h4 className="text-sm md:text-base font-bold text-[#1e3a8a] mb-2 md:mb-3 flex items-center gap-2">
                  <span className="text-lg md:text-xl">»</span> {section.subtitle}
                </h4>
                {section.items.map((row, rowIdx) => (
                  <div key={rowIdx} className="grid grid-cols-3 gap-4 mb-2">
                    {row.map((item, itemIdx) => (
                      item && (
                        <div key={itemIdx} className="text-sm text-gray-700 flex items-center gap-1 cursor-pointer hover:text-[#1e3a8a] transition-colors">
                          <span className="text-[#1e3a8a]">⊙</span> {item}
                        </div>
                      )
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          <div className="bg-white border border-gray-200 rounded-lg p-4 md:p-6 lg:p-8">
            <h3 className="text-base md:text-lg font-bold text-center mb-4 md:mb-6">{titaniumAlloys.title}</h3>
            {titaniumAlloys.items.map((row, rowIdx) => (
              <div key={rowIdx} className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4 mb-2">
                {row.map((item, itemIdx) => (
                  item && (
                    <div key={itemIdx} className="text-sm text-gray-700 flex items-center gap-1 cursor-pointer hover:text-[#1e3a8a] transition-colors">
                      <span className="text-[#1e3a8a]">⊙</span> {item}
                    </div>
                  )
                ))}
              </div>
            ))}
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-4 md:p-6 lg:p-8">
            <h3 className="text-lg font-bold text-center mb-6">{hardToFind.title}</h3>
            {hardToFind.items.map((row, rowIdx) => (
              <div key={rowIdx} className="grid grid-cols-3 gap-4 mb-2">
                {row.map((item, itemIdx) => (
                  <div key={itemIdx} className="text-sm text-gray-700 flex items-center gap-1 cursor-pointer hover:text-[#1e3a8a] transition-colors">
                    <span className="text-[#1e3a8a]">⊙</span> {item}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
