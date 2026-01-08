import { useState } from 'react';

const HowItWorks = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const cards = [
    {
      id: 1,
      image: '/images/how1.jpg',
      title: 'Businesses List Surplus Food',
      description: 'Local food businesses instantly list surplus items that would otherwise go unsold—fast, simple, and with zero disruption.'
    },
    {
      id: 2,
      image: '/images/how2.jpg',
      title: 'Exclusive Customer Discounts',
      description: 'Users browse nearby deals and reserve meals or groceries at 60-80% off regular prices.'
    },
    {
      id: 3,
      image: '/images/how3.jpg',
      title: 'Pickup & Enjoy',
      description: 'Pick up your food during a scheduled time and enjoy great meals—while actively reducing food waste in your city. Good for your wallet.'
    }
  ];

  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 px-4 sm:px-6 lg:px-8 xl:px-12">
      <div className="max-w-[1400px] mx-auto">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-center mb-12 sm:mb-14 md:mb-16 lg:mb-20 xl:mb-24">
          <span style={{ color: '#013727' }}>How It Works</span>
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-8 lg:gap-10 xl:gap-12 perspective-1000">
          {cards.map((card) => (
            <div
              key={card.id}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`bg-white rounded-3xl overflow-hidden h-full flex flex-col transform transition-all duration-500 ease-out ${
                hoveredCard === null
                  ? 'scale-100 opacity-100 shadow-lg'
                  : hoveredCard === card.id
                  ? 'scale-105 opacity-100 shadow-2xl z-10'
                  : 'scale-95 opacity-70 shadow-lg'
              }`}
              style={{
                minHeight: '480px',
                maxWidth: '100%'
              }}
            >
              {/* Image Container */}
              <div className="relative w-full pt-[75%] overflow-hidden bg-gray-200">
                <img
                  src={card.image}
                  alt={card.title}
                  className={`absolute top-0 left-0 w-full h-full object-cover transform transition-transform duration-700 ease-out ${
                    hoveredCard === card.id ? 'scale-110' : 'scale-100'
                  }`}
                  onError={(e) => {
                    e.target.src = `https://placehold.co/600x450/e5e7eb/64748b?text=${encodeURIComponent(card.title)}`;
                  }}
                />
                {/* Overlay on hover */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-t from-black/20 to-transparent transition-opacity duration-500 ${
                    hoveredCard === card.id ? 'opacity-100' : 'opacity-0'
                  }`} 
                />
              </div>

              {/* Content */}
              <div className="p-6 sm:p-7 md:p-6 lg:p-7 xl:p-8 flex flex-col flex-grow">
                <h3 
                  className={`text-xl sm:text-2xl md:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 leading-tight transition-colors duration-300 ${
                    hoveredCard === card.id ? 'text-[#013727]' : 'text-gray-900'
                  }`}
                >
                  {card.title}
                </h3>
                <p className="text-sm sm:text-base md:text-sm lg:text-base text-gray-600 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }

        /* Ensure proper spacing on MacBook screens (1280px - 1440px) */
        @media (min-width: 1280px) and (max-width: 1440px) {
          .grid {
            gap: 2.5rem;
          }
        }

        /* Larger MacBook Pro screens (1440px+) */
        @media (min-width: 1440px) {
          .grid {
            gap: 3rem;
          }
        }
      `}</style>
    </section>
  );
};

export default HowItWorks;