import { useState, useEffect, useRef } from 'react';

const FoodWasteIsCostingEveryone = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section 
      ref={sectionRef}
      className="w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          
          {/* Image - Left Side with 3D Border Effect */}
          <div
            className={`order-2 lg:order-1 transition-all duration-1000 transform ${
              isVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-20'
            }`}
          >
            <div className="relative max-w-xl mx-auto lg:mx-0">
              {/* Green border background - responsive offset */}
              <div 
                className="absolute inset-0 rounded-2xl sm:rounded-3xl lg:rounded-[3rem]"
                style={{ 
                  backgroundColor: '#04c55c',
                  top: '-8px',
                  left: '-8px',
                  right: '8px',
                  bottom: '8px',
                  zIndex: 0
                }}
              ></div>
              {/* Image container */}
              <div 
                className="relative rounded-2xl sm:rounded-3xl lg:rounded-[3rem] overflow-hidden shadow-2xl"
                style={{ zIndex: 1 }}
              >
                <img
                  src="/images/foods.jpg"
                  alt="Delicious food varieties"
                  className="w-full h-auto object-cover"
                  style={{ display: 'block' }}
                  onError={(e) => {
                    e.target.src = 'https://placehold.co/800x800/04c55c/013727?text=Food+Varieties';
                  }}
                />
              </div>
            </div>
          </div>

          {/* Content - Right Side */}
          <div
            className={`order-1 lg:order-2 transition-all duration-1000 transform ${
              isVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-20'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="text-center lg:text-left">
              {/* Main Heading */}
              <h2 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight"
                style={{ color: '#013727' }}
              >
                Food Waste Is Costing Everyone
              </h2>
              
              {/* Description */}
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                Nearly one-third of all food produced globally is wasted not because it's bad, but because it goes unsold.
              </p>

              {/* This leads to: */}
              <h3 
                className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6"
                style={{ color: '#013727' }}
              >
                This leads to:
              </h3>

              {/* Issues List */}
              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <div className="flex items-start gap-2 sm:gap-3 justify-center lg:justify-start">
                  <svg 
                    className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-0.5" 
                    style={{ color: '#04c55c' }} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={3} 
                      d="M5 13l4 4L19 7" 
                    />
                  </svg>
                  <p className="text-sm sm:text-base md:text-lg text-gray-600">
                    Billions in lost revenue for food businesses
                  </p>
                </div>
                
                <div className="flex items-start gap-2 sm:gap-3 justify-center lg:justify-start">
                  <svg 
                    className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-0.5" 
                    style={{ color: '#04c55c' }} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={3} 
                      d="M5 13l4 4L19 7" 
                    />
                  </svg>
                  <p className="text-sm sm:text-base md:text-lg text-gray-600">
                    Massive environmental damage
                  </p>
                </div>
                
                <div className="flex items-start gap-2 sm:gap-3 justify-center lg:justify-start">
                  <svg 
                    className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-0.5" 
                    style={{ color: '#04c55c' }} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={3} 
                      d="M5 13l4 4L19 7" 
                    />
                  </svg>
                  <p className="text-sm sm:text-base md:text-lg text-gray-600">
                    Wasted water, energy, and labor
                  </p>
                </div>
              </div>

              {/* Bottom Text */}
              <div className="space-y-3 sm:space-y-4">
                <p 
                  className="text-lg sm:text-xl md:text-2xl font-bold"
                  style={{ color: '#04c55c' }}
                >
                  Food waste isn't unavoidable.
                </p>
                <p 
                  className="text-lg sm:text-xl md:text-2xl font-bold"
                  style={{ color: '#04c55c' }}
                >
                  It's outdated—and Bestby Bites is the solution.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FoodWasteIsCostingEveryone;
