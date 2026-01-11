import { useState, useEffect, useRef } from 'react';

const JoinMovement = () => {
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
      className="w-full bg-white py-6 sm:py-7 md:py-8 lg:py-10 px-4 sm:px-6 md:px-8 lg:px-12"
    >
      <style>{`
        /* Enhanced font sizes for all devices */
        
        /* Mobile (< 640px) */
        @media (max-width: 640px) {
          .join-movement-heading {
            font-size: 2rem !important; /* 32px */
            line-height: 1.2 !important;
            font-weight: 900 !important;
          }
          
          .join-movement-text {
            font-size: 1.0625rem !important; /* 17px */
            line-height: 1.65 !important;
            font-weight: 600 !important;
          }
        }

        /* Tablet (641px - 1023px) */
        @media (min-width: 641px) and (max-width: 1023px) {
          .join-movement-heading {
            font-size: 2.75rem !important; /* 44px */
            line-height: 1.2 !important;
            font-weight: 900 !important;
          }
          
          .join-movement-text {
            font-size: 1.1875rem !important; /* 19px */
            line-height: 1.65 !important;
            font-weight: 600 !important;
          }
        }

        /* Desktop (1024px+) */
        @media (min-width: 1024px) {
          .join-movement-heading {
            font-size: 3.5rem !important; /* 56px */
            line-height: 1.15 !important;
            font-weight: 900 !important;
          }
          
          .join-movement-text {
            font-size: 1.3125rem !important; /* 21px */
            line-height: 1.7 !important;
            font-weight: 600 !important;
          }
        }
      `}</style>

      <div 
        className={`max-w-4xl mx-auto text-center transition-all duration-1000 transform ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="join-movement-heading text-gray-900 mb-2 sm:mb-3 md:mb-3 lg:mb-4 leading-tight tracking-tight">
          Join the Movement Against Food Waste
        </h2>
        <p className="join-movement-text text-gray-700 leading-relaxed">
          "Whether you're a restaurant, grocery store, bakery, or food producer, partner with us to turn surplus into success"
        </p>
      </div>
    </section>
  );
};

export default JoinMovement;