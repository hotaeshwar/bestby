import { useState, useEffect, useRef } from 'react';

const AppScreenshots = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [visibleItems, setVisibleItems] = useState([]);
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  const screenshots = [
    {
      id: 1,
      src: '/images/SLIDER-1-PHONE.png',
      alt: 'Bestby Bites App - Home Screen'
    },
    {
      id: 2,
      src: '/images/SLIDER-2-PHONE.png',
      alt: 'Bestby Bites App - Welcome Screen'
    },
    {
      id: 3,
      src: '/images/SLIDER-3-PHONE.png',
      alt: 'Bestby Bites App - Browse Deals'
    },
    {
      id: 4,
      src: '/images/SLIDER-4-PHONE.png',
      alt: 'Bestby Bites App - Great Taste'
    },
    {
      id: 5,
      src: '/images/SLIDER-5-PHONE.png',
      alt: 'Bestby Bites App - Fresh Produce'
    }
  ];

  // Scroll animation for mobile
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || hasAnimated.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      if (rect.top < windowHeight * 0.7 && rect.bottom > windowHeight * 0.2) {
        hasAnimated.current = true;
        animateItems();
      }
    };

    const animateItems = () => {
      [0, 1, 2, 3, 4].forEach((index) => {
        setTimeout(() => {
          setVisibleItems(prev => [...prev, index]);
        }, index * 150);
      });
    };

    setTimeout(handleScroll, 100);
    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-play for mobile carousel
  useEffect(() => {
    if (!isAutoPlaying || window.innerWidth >= 1024) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % screenshots.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, screenshots.length]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
    setIsAutoPlaying(false);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section 
      ref={sectionRef}
      className="w-full bg-gray-50 py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            App Screenshots
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            A simple way to turn surplus food into value
          </p>
        </div>

        {/* Mobile Carousel (< 1024px) */}
        <div className="lg:hidden">
          <div className="relative max-w-[280px] mx-auto">
            {/* Carousel Wrapper */}
            <div className="relative overflow-hidden">
              <div className="relative h-[500px] sm:h-[550px]">
                {screenshots.map((screenshot, index) => (
                  <div
                    key={screenshot.id}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
                      index === currentIndex
                        ? 'opacity-100 translate-x-0 scale-100'
                        : index < currentIndex
                        ? 'opacity-0 -translate-x-full scale-95'
                        : 'opacity-0 translate-x-full scale-95'
                    }`}
                  >
                    <img
                      src={screenshot.src}
                      alt={screenshot.alt}
                      className="w-full h-full object-contain drop-shadow-2xl"
                      onError={(e) => {
                        e.target.src = `https://placehold.co/280x500/013727/04c55c?text=Screen+${screenshot.id}`;
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={goToPrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-500 z-10"
                aria-label="Previous screenshot"
              >
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={goToNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-500 z-10"
                aria-label="Next screenshot"
              >
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Dots Navigation */}
            <div className="flex justify-center items-center gap-2 mt-6">
              {screenshots.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 ${
                    index === currentIndex
                      ? 'bg-green-600 w-8 h-2.5'
                      : 'bg-gray-300 hover:bg-gray-400 w-2.5 h-2.5'
                  }`}
                  aria-label={`Go to screenshot ${index + 1}`}
                />
              ))}
            </div>

            {/* Auto-play Toggle */}
            <div className="text-center mt-4">
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="text-sm text-gray-500 hover:text-gray-700 transition-colors duration-300 focus:outline-none px-3 py-1"
              >
                {isAutoPlaying ? '⏸ Pause' : '▶ Play'} Auto-scroll
              </button>
            </div>

            {/* Screen Counter */}
            <div className="text-center mt-3">
              <span className="text-sm text-gray-600 font-medium">
                {currentIndex + 1} / {screenshots.length}
              </span>
            </div>
          </div>
        </div>

        {/* Desktop Grid (>= 1024px) */}
        <div className="hidden lg:grid lg:grid-cols-5 gap-8 xl:gap-10">
          {screenshots.map((screenshot, index) => (
            <div
              key={screenshot.id}
              className={`transition-all duration-700 transform ${
                visibleItems.includes(index)
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-20 scale-95'
              }`}
            >
              <div className="relative w-full mx-auto">
                <img
                  src={screenshot.src}
                  alt={screenshot.alt}
                  className="w-full h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = `https://placehold.co/400x800/013727/04c55c?text=Screen+${screenshot.id}`;
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppScreenshots;