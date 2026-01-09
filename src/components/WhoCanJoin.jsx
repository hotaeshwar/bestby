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
      className={`relative w-full transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Container with responsive height */}
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px]">
        {/* Full Screen Image */}
        <div className="w-full h-full overflow-hidden">
          <img
            src="https://i.imghippo.com/files/GQP9948vno.jpg"
            alt="Who Can Join Bestby Bites"
            className="w-full h-full object-cover object-center"
            onError={(e) => {
              e.target.src = 'https://placehold.co/1920x1080/013727/04c55c?text=Who+Can+Join+Bestby+Bites';
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default WhoCanJoin;