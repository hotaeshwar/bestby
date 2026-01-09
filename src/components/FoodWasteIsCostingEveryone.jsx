import React, { useState, useEffect } from 'react';

const BusinessModelSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const fadeInStyle = (delay = 0) => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
    transition: `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s`
  });

  // Check if device is iPad Mini or Air (768-834px width)
  const isIPad = windowWidth >= 768 && windowWidth <= 834;

  // Image paths based on device
  const customerImage = isIPad ? '/images/IMAGE-1.jpg' : '/images/Homepage-Slider_Nyssa-Corner-Sto.jpg';
  const businessImage = '/images/IMAGE-2.jpg';

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div style={fadeInStyle(0)} className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-5 lg:mb-6 px-4">
              The Business Model
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-6">
              A smarter system that benefits customers, businesses, and the planet
              all at the same time.
            </p>
          </div>
        </div>
      </section>

      {/* For Customers Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-10" style={{backgroundColor: '#013727'}}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-center">
            {/* Image */}
            <div style={fadeInStyle(0.2)} className="order-2 lg:order-1">
              <div className="relative max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto lg:mx-0">
                {/* Green border background */}
                <div 
                  className="absolute inset-0 rounded-xl sm:rounded-2xl md:rounded-3xl"
                  style={{ 
                    backgroundColor: '#04c55c',
                    top: '-6px',
                    left: '-6px',
                    right: '6px',
                    bottom: '6px',
                    zIndex: 0
                  }}
                ></div>
                {/* Image container */}
                <div 
                  className="relative rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl transform hover:scale-105 transition-transform duration-500"
                  style={{ zIndex: 1 }}
                >
                  <div className="w-full h-56 xs:h-64 sm:h-72 md:h-80 lg:h-[22rem] xl:h-[28rem]">
                    <img
                      src={customerImage}
                      alt="Customer shopping for fresh produce"
                      className="w-full h-full object-cover object-center"
                      style={{ display: 'block' }}
                      onError={(e) => {
                        e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300"><rect fill="%23f0f0f0" width="400" height="300"/><text x="50%" y="50%" text-anchor="middle" fill="%23999" font-size="18" font-family="Arial">Customer Experience</text></svg>';
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div style={fadeInStyle(0.4)} className="order-1 lg:order-2 text-white px-2 sm:px-4 md:px-6 lg:px-0">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 md:mb-5 lg:mb-6 xl:mb-8" style={{ color: '#04c55c' }}>
                For Customers
              </h2>
              
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 md:mb-5 lg:mb-6 text-white">
                Eat Well for Less—Without Compromise
              </h3>
              
              <p className="text-xs sm:text-sm md:text-base lg:text-lg mb-4 sm:mb-5 md:mb-6 lg:mb-8 text-white opacity-90 leading-relaxed">
                Get restaurant-quality food and groceries from trusted local businesses at up to 80% off, all while making a real environmental impact.
              </p>
              
              <div className="space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-5 mb-4 sm:mb-5 md:mb-6 lg:mb-8">
                <div className="flex items-start gap-2 sm:gap-3 md:gap-4 transform hover:translate-x-2 transition-transform duration-300">
                  <span className="text-[#04c55c] text-base sm:text-lg md:text-xl lg:text-2xl flex-shrink-0 mt-0.5">✓</span>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">Spend less on everyday meals</p>
                </div>
                <div className="flex items-start gap-2 sm:gap-3 md:gap-4 transform hover:translate-x-2 transition-transform duration-300">
                  <span className="text-[#04c55c] text-base sm:text-lg md:text-xl lg:text-2xl flex-shrink-0 mt-0.5">✓</span>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">Discover new local favorites</p>
                </div>
                <div className="flex items-start gap-2 sm:gap-3 md:gap-4 transform hover:translate-x-2 transition-transform duration-300">
                  <span className="text-[#04c55c] text-base sm:text-lg md:text-xl lg:text-2xl flex-shrink-0 mt-0.5">✓</span>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">Reduce food waste effortlessly</p>
                </div>
                <div className="flex items-start gap-2 sm:gap-3 md:gap-4 transform hover:translate-x-2 transition-transform duration-300">
                  <span className="text-[#04c55c] text-base sm:text-lg md:text-xl lg:text-2xl flex-shrink-0 mt-0.5">✓</span>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">Feel good about every pickup</p>
                </div>
              </div>
              
              {/* Newsletter text */}
              <div className="mb-4 sm:mb-5 md:mb-6 lg:mb-8">
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white leading-relaxed">
                  Get special offers, meals, and news when you subscribe to our newsletter.
                </p>
              </div>
              
              {/* Sign up button */}
              <button 
                className="px-6 sm:px-8 md:px-10 lg:px-12 py-2.5 sm:py-3 md:py-3.5 lg:py-4 rounded-full font-bold text-sm sm:text-base md:text-lg lg:text-xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto"
                style={{ backgroundColor: '#04c55c', color: '#013727' }}
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* For Businesses Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-10" style={{backgroundColor: '#013727'}}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-center">
            {/* Content */}
            <div style={fadeInStyle(0.2)} className="text-white px-2 sm:px-4 md:px-6 lg:px-0">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-5 md:mb-6 lg:mb-8 xl:mb-10">
                For Businesses
              </h2>
              <div className="space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-5 xl:space-y-6">
                <div className="flex items-start gap-2 sm:gap-3 md:gap-4 transform hover:translate-x-2 transition-transform duration-300">
                  <span className="text-[#04c55c] text-base sm:text-lg md:text-xl lg:text-2xl flex-shrink-0 mt-0.5">✓</span>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">Monetize surplus inventory</p>
                </div>
                <div className="flex items-start gap-2 sm:gap-3 md:gap-4 transform hover:translate-x-2 transition-transform duration-300">
                  <span className="text-[#04c55c] text-base sm:text-lg md:text-xl lg:text-2xl flex-shrink-0 mt-0.5">✓</span>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">Reduce waste and disposal costs</p>
                </div>
                <div className="flex items-start gap-2 sm:gap-3 md:gap-4 transform hover:translate-x-2 transition-transform duration-300">
                  <span className="text-[#04c55c] text-base sm:text-lg md:text-xl lg:text-2xl flex-shrink-0 mt-0.5">✓</span>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">Improve sustainability and public image</p>
                </div>
              </div>
            </div>

            {/* Image */}
            <div style={fadeInStyle(0.4)} className="relative">
              <div className="relative max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto lg:mx-0">
                {/* Green border background */}
                <div 
                  className="absolute inset-0 rounded-xl sm:rounded-2xl md:rounded-3xl"
                  style={{ 
                    backgroundColor: '#04c55c',
                    top: '-6px',
                    right: '-6px',
                    left: '6px',
                    bottom: '6px',
                    zIndex: 0
                  }}
                ></div>
                {/* Image container */}
                <div 
                  className="relative rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl transform hover:scale-105 transition-transform duration-500"
                  style={{ zIndex: 1 }}
                >
                  <div className="w-full h-56 xs:h-64 sm:h-72 md:h-80 lg:h-[22rem] xl:h-[28rem]">
                    <img
                      src={businessImage}
                      alt="Chef with Best by Bites bread delivery"
                      className="w-full h-full object-cover object-center"
                      style={{ display: 'block' }}
                      onError={(e) => {
                        e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300"><rect fill="%23f0f0f0" width="400" height="300"/><text x="50%" y="50%" text-anchor="middle" fill="%23999" font-size="18" font-family="Arial">Business Partner</text></svg>';
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Spacer */}
      <section className="py-6 sm:py-8 md:py-10 lg:py-12" style={{backgroundColor: '#013727'}}></section>
    </div>
  );
};

export default BusinessModelSection;