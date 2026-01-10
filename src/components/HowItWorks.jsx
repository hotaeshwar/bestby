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
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16 xl:mb-20 text-[#013727] px-4">
          How It Works
        </h2>

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

              {/* Content */}
              <div className="p-5 sm:p-6 md:p-5 lg:p-6 xl:p-7 flex flex-col flex-grow">
                <h3 
                  className={`text-lg sm:text-xl md:text-lg lg:text-xl xl:text-2xl font-bold mb-2.5 sm:mb-3 md:mb-3 lg:mb-3.5 leading-tight transition-colors duration-300 ${
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
    </section>
  );
};

export default HowItWorks;