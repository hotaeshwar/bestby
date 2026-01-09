import { useState, useEffect, useRef } from 'react';

const JoinMovement = () => {
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
      style={{ backgroundColor: '#ffffff' }}
    >
      <style>{`
        /* iPhone SE and small mobile (< 376px) */
        @media (max-width: 375px) {
          .join-heading {
            font-size: 1.5rem !important;
            line-height: 1.3 !important;
            margin-bottom: 0.5rem !important;
            padding-left: 1rem !important;
            padding-right: 1rem !important;
          }
          
          .join-description {
            font-size: 0.875rem !important;
            line-height: 1.5 !important;
            padding-left: 1rem !important;
            padding-right: 1rem !important;
          }

          .join-section-padding {
            padding-top: 2rem !important;
            padding-bottom: 2rem !important;
          }
        }

        /* Mobile (376px - 639px) */
        @media (min-width: 376px) and (max-width: 639px) {
          .join-heading {
            font-size: 1.75rem !important;
            line-height: 1.3 !important;
            margin-bottom: 0.625rem !important;
            padding-left: 1.25rem !important;
            padding-right: 1.25rem !important;
          }
          
          .join-description {
            font-size: 0.9375rem !important;
            line-height: 1.55 !important;
            padding-left: 1.25rem !important;
            padding-right: 1.25rem !important;
          }

          .join-section-padding {
            padding-top: 2.5rem !important;
            padding-bottom: 2.5rem !important;
          }
        }

        /* Small Tablet (640px - 767px) */
        @media (min-width: 640px) and (max-width: 767px) {
          .join-heading {
            font-size: 2rem !important;
            line-height: 1.3 !important;
            margin-bottom: 0.75rem !important;
            padding-left: 1.5rem !important;
            padding-right: 1.5rem !important;
          }
          
          .join-description {
            font-size: 1rem !important;
            line-height: 1.6 !important;
            padding-left: 1.5rem !important;
            padding-right: 1.5rem !important;
          }

          .join-section-padding {
            padding-top: 3rem !important;
            padding-bottom: 3rem !important;
          }
        }

        /* iPad Mini & Air Portrait (768px - 1023px) */
        @media (min-width: 768px) and (max-width: 1023px) {
          .join-heading {
            font-size: 2.5rem !important;
            line-height: 1.25 !important;
            margin-bottom: 0.875rem !important;
            padding-left: 2rem !important;
            padding-right: 2rem !important;
          }
          
          .join-description {
            font-size: 1.125rem !important;
            line-height: 1.65 !important;
            padding-left: 2rem !important;
            padding-right: 2rem !important;
          }

          .join-section-padding {
            padding-top: 3.5rem !important;
            padding-bottom: 3.5rem !important;
          }
        }

        /* Desktop (1024px - 1279px) */
        @media (min-width: 1024px) and (max-width: 1279px) {
          .join-heading {
            font-size: 3rem !important;
            line-height: 1.2 !important;
            margin-bottom: 1rem !important;
          }
          
          .join-description {
            font-size: 1.25rem !important;
            line-height: 1.7 !important;
          }

          .join-section-padding {
            padding-top: 4rem !important;
            padding-bottom: 4rem !important;
          }
        }

        /* Large Desktop (1280px - 1535px) */
        @media (min-width: 1280px) and (max-width: 1535px) {
          .join-heading {
            font-size: 3.5rem !important;
            line-height: 1.2 !important;
            margin-bottom: 1.25rem !important;
          }
          
          .join-description {
            font-size: 1.375rem !important;
            line-height: 1.7 !important;
          }

          .join-section-padding {
            padding-top: 4.5rem !important;
            padding-bottom: 4.5rem !important;
          }
        }

        /* XL Desktop (1536px+) */
        @media (min-width: 1536px) {
          .join-heading {
            font-size: 4rem !important;
            line-height: 1.15 !important;
            margin-bottom: 1.5rem !important;
          }
          
          .join-description {
            font-size: 1.5rem !important;
            line-height: 1.75 !important;
          }

          .join-section-padding {
            padding-top: 5rem !important;
            padding-bottom: 5rem !important;
          }
        }
      `}</style>

      <div className="w-full">
        {/* Heading Section */}
        <div 
          className={`join-section-padding text-center px-4 sm:px-6 md:px-8 lg:px-10 transition-all duration-1000 transform ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="join-heading text-gray-900 font-bold leading-tight">
            Join the Movement Against Food Waste
          </h2>
          <p className="join-description text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Whether you're a restaurant, grocery store, bakery, or food producer, partner with us to turn surplus into success
          </p>
        </div>
      </div>
    </section>
  );
};

export default JoinMovement;