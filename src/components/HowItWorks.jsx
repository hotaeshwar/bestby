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
    <section className="w-full bg-gradient-to-b from-gray-50 to-white py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
      <style>{`
        .heading-shadow {
          position: relative;
          display: inline-block;
          padding: 1rem 2.5rem;
          border-radius: 20px;
          background: linear-gradient(135deg, rgba(4, 197, 92, 0.06) 0%, rgba(1, 55, 39, 0.04) 100%);
          box-shadow: 
            0 8px 32px rgba(1, 55, 39, 0.12),
            0 0 50px rgba(4, 197, 92, 0.08),
            inset 0 0 20px rgba(4, 197, 92, 0.03);
        }

        /* Mobile */
        @media (max-width: 640px) {
          .heading-shadow {
            padding: 0.75rem 1.5rem;
            border-radius: 14px;
          }
        }

        /* Tablet */
        @media (min-width: 641px) and (max-width: 1023px) {
          .heading-shadow {
            padding: 0.875rem 2rem;
            border-radius: 16px;
          }
        }

        /* Desktop */
        @media (min-width: 1024px) {
          .heading-shadow {
            padding: 1.25rem 3rem;
            border-radius: 24px;
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        {/* Enhanced Heading with shadow background */}
        <div className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16 xl:mb-20">
          <div className="heading-shadow inline-block">
            <h2 className="text-[#013727] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight px-4">
              How It Works
            </h2>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-6 lg:gap-8 xl:gap-10">
          {cards.map((card) => (
            <div
              key={card.id}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`bg-white rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col transition-all duration-500 ease-out ${
                hoveredCard === null
                  ? 'scale-100 opacity-100 shadow-lg'
                  : hoveredCard === card.id
                  ? 'scale-105 opacity-100 shadow-2xl z-10'
                  : 'scale-95 opacity-70 shadow-lg'
              }`}
            >
              {/* Image Container with aspect ratio */}
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-200">
                <img
                  src={card.image}
                  alt={card.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out ${
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

              {/* Content with improved readability */}
              <div className="p-5 sm:p-6 md:p-5 lg:p-6 xl:p-7 flex flex-col flex-grow">
                <h3 className="text-[1.375rem] sm:text-2xl md:text-xl lg:text-2xl xl:text-3xl font-extrabold mb-3 sm:mb-3.5 md:mb-3 lg:mb-4 xl:mb-4 leading-tight text-[#013727]">
                  {card.title}
                </h3>
                <p className="text-[1.0625rem] sm:text-lg md:text-base lg:text-lg xl:text-xl text-gray-900 leading-[1.7] font-bold tracking-wide">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;