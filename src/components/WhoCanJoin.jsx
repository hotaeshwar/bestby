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
      <style>{`
        .who-image-container {
          position: relative;
          width: 100%;
          height: 300px;
          overflow: hidden;
        }

        @media (min-width: 640px) {
          .who-image-container {
            height: 400px;
          }
        }

        @media (min-width: 768px) {
          .who-image-container {
            height: 500px;
          }
        }

        @media (min-width: 1024px) {
          .who-image-container {
            height: 600px;
          }
        }

        @media (min-width: 1280px) {
          .who-image-container {
            height: 100vh;
          }
        }

        .who-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
      `}</style>

      <div className="w-full">
        {/* Full Screen Image */}
        <div
          className={`transition-all duration-1000 transform ${
            isVisible 
              ? 'opacity-100 scale-100' 
              : 'opacity-0 scale-95'
          }`}
        >
          <div className="who-image-container">
            <img
              src="/images/NEW-BLOCK.jpg"
              alt="Who can join Bestby Bites - Grocery stores, restaurants, vendors, farmers, producers, bakers, food trucks and more"
              className="who-image"
              onError={(e) => {
                e.target.src = 'https://placehold.co/1920x1080/013727/04c55c?text=Who+Can+Join+Bestby+Bites';
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoCanJoin;