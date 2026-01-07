import { useState, useEffect, useRef } from 'react';

const HowItWorks = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (rect.top < windowHeight * 0.75 && rect.bottom > 0) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <section 
      ref={sectionRef}
      className="w-full bg-gradient-to-b from-gray-50 to-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 
          className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 sm:mb-16 md:mb-20 transition-all duration-1000 transform ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 -translate-y-10'
          }`}
        >
          <span style={{ color: '#013727' }}>How It Works</span>
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {cards.map((card, index) => (
            <div
              key={card.id}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`transition-all duration-1000 transform ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-20'
              } ${
                hoveredCard === null 
                  ? 'scale-100' 
                  : hoveredCard === card.id 
                    ? 'scale-110 z-10' 
                    : 'scale-95 opacity-70'
              }`}
              style={{ 
                transitionDelay: isVisible ? `${index * 200}ms` : '0ms'
              }}
            >
              <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden h-full flex flex-col">
                {/* Image Container */}
                <div className="relative w-full pt-[75%] overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className={`absolute top-0 left-0 w-full h-full object-cover transition-transform duration-700 ${
                      hoveredCard === card.id ? 'scale-110' : 'scale-100'
                    }`}
                    onError={(e) => {
                      e.target.src = `https://placehold.co/600x450/e5e7eb/64748b?text=${encodeURIComponent(card.title)}`;
                    }}
                  />
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 flex flex-col flex-grow">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;