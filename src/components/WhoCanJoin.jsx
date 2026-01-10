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
      className="w-full overflow-hidden bg-[#013727]"
    >
      <div className="w-full">
        {/* Full Screen Image - Responsive for all devices */}
        <div
          className={`transition-all duration-1000 transform ${
            isVisible 
              ? 'opacity-100 scale-100' 
              : 'opacity-0 scale-95'
          }`}
        >
          {/* Image Container - Full image on mobile and tablets (no cropping), object-cover only on large desktops */}
          <div className="relative w-full">
            <img
              src="/images/NEW-BLOCK.jpg"
              alt="Who can join Bestby Bites - Grocery stores, restaurants, vendors, farmers, producers, bakers, food trucks and more"
              className="w-full h-auto 
                         xl:h-[700px] xl:object-cover xl:object-center
                         2xl:h-[800px]"
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