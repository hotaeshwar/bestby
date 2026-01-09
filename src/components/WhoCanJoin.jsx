import { useState, useEffect, useRef } from 'react';

const WhoCanJoin = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Trigger animation on mount and refresh
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Handle scroll animations
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
      className="w-full overflow-hidden"
      style={{ backgroundColor: '#013727' }}
    >
      <div className="max-w-[2000px] mx-auto">
        {/* Heading Section */}
        <div 
          className={`text-center py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 md:px-8 lg:px-10 transition-all duration-1000 transform ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white mb-3 sm:mb-4 md:mb-5 lg:mb-6 xl:mb-8 leading-tight px-4">
            Join the Movement Against Food Waste
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white opacity-90 max-w-4xl mx-auto px-4 sm:px-6 leading-relaxed">
            Whether you're a restaurant, grocery store, bakery, or food producer, partner with us to turn surplus into success
          </p>
        </div>

        {/* Full Length Image */}
        <div
          className={`transition-all duration-1000 transform ${
            isVisible 
              ? 'opacity-100 scale-100' 
              : 'opacity-0 scale-95'
          }`}
          style={{ transitionDelay: '300ms' }}
        >
          <div className="w-full">
            <img
              src="/images/NEW-BLOCK.jpg"
              alt="Who can join Bestby Bites - Grocery stores, restaurants, vendors, farmers, producers, bakers, food trucks and more"
              className="w-full h-auto object-cover"
              style={{ 
                display: 'block',
                maxHeight: '90vh',
                minHeight: '300px'
              }}
              onError={(e) => {
                e.target.src = 'https://placehold.co/1600x800/013727/04c55c?text=Who+Can+Join+Bestby+Bites';
              }}
            />
          </div>
        </div>

        {/* Bottom Spacing */}
        <div className="py-6 sm:py-8 md:py-10 lg:py-12 xl:py-16"></div>
      </div>
    </section>
  );
};

export default WhoCanJoin;