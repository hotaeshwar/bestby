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
      <section className="py-12 md:py-20 lg:py-24 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div style={fadeInStyle(0)} className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 md:mb-6">
              The Business Model
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              A smarter system that benefits customers, businesses, and the planet
              all at the same time.
            </p>
          </div>
        </div>
      </section>

      {/* For Customers Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8" style={{backgroundColor: '#013727'}}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
            <div style={fadeInStyle(0.2)} className="order-2 lg:order-1">
              <div className="relative max-w-xl mx-auto lg:mx-0">
                {/* Green border background - responsive offset */}
                <div 
                  className="absolute inset-0 rounded-2xl md:rounded-3xl"
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
                  className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500"
                  style={{ zIndex: 1 }}
                >
                  <div className="w-full h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[500px]">
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
            
            <div style={fadeInStyle(0.4)} className="order-1 lg:order-2 text-white">
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 md:mb-8 lg:mb-10">
                For Customers
              </h2>
              <div className="space-y-4 md:space-y-5 lg:space-y-6">
                <div className="flex items-start gap-3 md:gap-4 transform hover:translate-x-2 transition-transform duration-300">
                  <span className="text-[#04c55c] text-xl md:text-2xl flex-shrink-0">✓</span>
                  <p className="text-base md:text-lg lg:text-xl">High-quality food at unbeatable prices</p>
                </div>
                <div className="flex items-start gap-3 md:gap-4 transform hover:translate-x-2 transition-transform duration-300">
                  <span className="text-[#04c55c] text-xl md:text-2xl flex-shrink-0">✓</span>
                  <p className="text-base md:text-lg lg:text-xl">Easy access to local restaurants and stores</p>
                </div>
                <div className="flex items-start gap-3 md:gap-4 transform hover:translate-x-2 transition-transform duration-300">
                  <span className="text-[#04c55c] text-xl md:text-2xl flex-shrink-0">✓</span>
                  <p className="text-base md:text-lg lg:text-xl">Real impact with zero lifestyle change</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Businesses Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8" style={{backgroundColor: '#013727'}}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
            <div style={fadeInStyle(0.2)} className="text-white">
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 md:mb-8 lg:mb-10">
                For Businesses
              </h2>
              <div className="space-y-4 md:space-y-5 lg:space-y-6">
                <div className="flex items-start gap-3 md:gap-4 transform hover:translate-x-2 transition-transform duration-300">
                  <span className="text-[#04c55c] text-xl md:text-2xl flex-shrink-0">✓</span>
                  <p className="text-base md:text-lg lg:text-xl">Monetize surplus inventory</p>
                </div>
                <div className="flex items-start gap-3 md:gap-4 transform hover:translate-x-2 transition-transform duration-300">
                  <span className="text-[#04c55c] text-xl md:text-2xl flex-shrink-0">✓</span>
                  <p className="text-base md:text-lg lg:text-xl">Reduce waste and disposal costs</p>
                </div>
                <div className="flex items-start gap-3 md:gap-4 transform hover:translate-x-2 transition-transform duration-300">
                  <span className="text-[#04c55c] text-xl md:text-2xl flex-shrink-0">✓</span>
                  <p className="text-base md:text-lg lg:text-xl">Improve sustainability and public image</p>
                </div>
              </div>
            </div>

            <div style={fadeInStyle(0.4)} className="relative">
              <div className="relative max-w-xl mx-auto lg:mx-0">
                {/* Green border background - responsive offset */}
                <div 
                  className="absolute inset-0 rounded-2xl md:rounded-3xl"
                  style={{ 
                    backgroundColor: '#04c55c',
                    top: '-8px',
                    right: '-8px',
                    left: '8px',
                    bottom: '8px',
                    zIndex: 0
                  }}
                ></div>
                {/* Image container */}
                <div 
                  className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500"
                  style={{ zIndex: 1 }}
                >
                  <div className="w-full h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[500px]">
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
      <section className="py-8 md:py-12" style={{backgroundColor: '#013727'}}></section>
    </div>
  );
};

export default BusinessModelSection;
