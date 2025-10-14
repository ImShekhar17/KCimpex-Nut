import { Link } from 'react-router-dom';

export default function ProductRange() {
  const categories = [
    {
      title: 'INCONEL & INCOLOY®',
      items: [
        [
          { name: 'INCONEL 600', link: '/materials/inconel-600' },
          { name: 'INCONEL alloy 601', link: '/materials/inconel-alloy-601' },
          { name: 'INCONEL alloy X-750', link: '/materials/inconel-alloy-x-750' }
        ],
        [
          { name: 'INCONEL alloy 625', link: '/materials/inconel-alloy-625' },
          { name: 'INCONEL alloy 690', link: '/materials/inconel-alloy-690' },
          { name: 'INCOLOY® alloy 800', link: '/materials' }
        ],
        [
          { name: 'INCONEL® alloy 718', link: '/materials/inconel-alloy-718' },
          { name: 'INCOLOY alloy 825', link: '/materials' },
          { name: '', link: '' }
        ]
      ]
    },
    {
      title: 'NICKEL',
      items: [
        [
          { name: 'NICKEL 200', link: '/materials' },
          { name: 'NICKEL 201', link: '/materials' },
          { name: '', link: '' }
        ]
      ]
    },
    {
      title: 'HASTELLOY',
      items: [
        [
          { name: 'HASTELLOY C-276', link: '/materials' },
          { name: 'HASTELLOY C22', link: '/materials' },
          { name: 'HASTELLOY B-2', link: '/materials' }
        ],
        [
          { name: 'HASTELLOY B-3', link: '/materials' },
          { name: 'HASTELLOY X', link: '/materials' },
          { name: '', link: '' }
        ]
      ]
    },
    {
      title: 'MONEL',
      items: [
        [
          { name: 'MONEL alloy 400', link: '/materials' },
          { name: 'MONEL alloy K-500', link: '/materials' },
          { name: '', link: '' }
        ]
      ]
    }
  ];

  const stainlessSteel = {
    title: 'STAINLESS STEELS',
    sections: [
      {
        subtitle: 'Stainless Steel',
        items: [
          [
            { name: 'SS 309', link: '/materials' },
            { name: 'SS 310', link: '/materials' },
            { name: 'SS 310s', link: '/materials' }
          ],
          [
            { name: 'SS 321', link: '/materials' },
            { name: 'SS 347', link: '/materials' },
            { name: 'SS 316Ti', link: '/materials' }
          ],
          [
            { name: 'SS 17-4-Ph', link: '/materials' },
            { name: 'SS 15-5Ph', link: '/materials' },
            { name: '', link: '' }
          ]
        ]
      },
      {
        subtitle: 'Super Stainless Steel',
        items: [
          [
            { name: '904L', link: '/materials' },
            { name: 'Alloy-20', link: '/materials' },
            { name: 'SMO 254', link: '/materials' }
          ],
          [
            { name: 'A-286', link: '/materials' },
            { name: '253-MA', link: '/materials' },
            { name: '', link: '' }
          ]
        ]
      },
      {
        subtitle: 'Duplex & Super Duplex Stainless Steel',
        items: [
          [
            { name: 'Duplex 2205', link: '/materials' },
            { name: 'Super Duplex 2507', link: '/materials' },
            { name: '', link: '' }
          ]
        ]
      }
    ]
  };

  const titaniumAlloys = {
    title: 'TITANIUM ALLOYS',
    items: [
      [
        { name: 'CP Titanium Grade 1', link: '/materials' },
        { name: 'Titanium Grade 5 / 6AL4V', link: '/materials' },
        { name: '', link: '' }
      ],
      [
        { name: 'Titanium Grade 11', link: '/materials' },
        { name: 'CP Titanium Grade 2', link: '/materials' },
        { name: '', link: '' }
      ],
      [
        { name: 'CP Titanium Grade 4', link: '/materials' },
        { name: 'Titanium Grade 6 / 5Al 2.55n', link: '/materials' },
        { name: '', link: '' }
      ],
      [
        { name: 'Titanium Grade 12', link: '/materials' },
        { name: 'CP Titanium Grade 7', link: '/materials' },
        { name: '', link: '' }
      ]
    ]
  };

  const hardToFind = {
    title: 'HARD TO FIND ALLOYS',
    items: [
      [
        { name: 'Tantalum', link: '/materials' },
        { name: 'Niobium', link: '/materials' },
        { name: 'Tungsten', link: '/materials' }
      ],
      [
        { name: 'Gallium', link: '/materials' },
        { name: 'Molybdenum', link: '/materials' },
        { name: 'Rhenium', link: '/materials' }
      ],
      [
        { name: 'Hafnium', link: '/materials' },
        { name: 'Indium', link: '/materials' },
        { name: 'Beryllium Copper', link: '/materials' }
      ],
      [
        { name: 'Vanadium', link: '/materials' },
        { name: 'Germanium', link: '/materials' },
        { name: 'Hardox', link: '/materials' }
      ]
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
                        item.name && (
                          <Link
                            key={itemIdx}
                            to={item.link}
                            className="text-xs md:text-sm text-gray-700 flex items-center gap-1 cursor-pointer hover:text-[#1e3a8a] transition-colors"
                          >
                            <span className="text-[#1e3a8a]">⊙</span> {item.name}
                          </Link>
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
                      item.name && (
                        <Link
                          key={itemIdx}
                          to={item.link}
                          className="text-sm text-gray-700 flex items-center gap-1 cursor-pointer hover:text-[#1e3a8a] transition-colors"
                        >
                          <span className="text-[#1e3a8a]">⊙</span> {item.name}
                        </Link>
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
                  item.name && (
                    <Link
                      key={itemIdx}
                      to={item.link}
                      className="text-sm text-gray-700 flex items-center gap-1 cursor-pointer hover:text-[#1e3a8a] transition-colors"
                    >
                      <span className="text-[#1e3a8a]">⊙</span> {item.name}
                    </Link>
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
                  <Link
                    key={itemIdx}
                    to={item.link}
                    className="text-sm text-gray-700 flex items-center gap-1 cursor-pointer hover:text-[#1e3a8a] transition-colors"
                  >
                    <span className="text-[#1e3a8a]">⊙</span> {item.name}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
