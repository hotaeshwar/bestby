import { useState, useEffect, useRef } from 'react';

const ForCustomersAndMerchants = () => {
  const [isCustomersVisible, setIsCustomersVisible] = useState(false);
  const [isMerchantsVisible, setIsMerchantsVisible] = useState(false);
  const customersRef = useRef(null);
  const merchantsRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsCustomersVisible(true);
      setIsMerchantsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (customersRef.current) {
        const rect = customersRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top < windowHeight * 0.75 && rect.bottom > 0) {
          setIsCustomersVisible(true);
        }
      }

      if (merchantsRef.current) {
        const rect = merchantsRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top < windowHeight * 0.75 && rect.bottom > 0) {
          setIsMerchantsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full" style={{ backgroundColor: '#013727' }}>
      {/* FOR CUSTOMERS SECTION */}
      <section 
        ref={customersRef}
        className="w-full py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
            
            {/* Image - Left Side */}
            <div
              className={`order-2 lg:order-1 transition-all duration-1000 transform ${
                isCustomersVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-20'
              }`}
            >
              <div className="relative max-w-xl mx-auto lg:mx-0">
                {/* Green border background - very small on mobile, larger on desktop */}
                <div 
                  className="absolute inset-0 rounded-2xl sm:rounded-3xl lg:rounded-[3rem]"
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
                  className="relative rounded-2xl sm:rounded-3xl lg:rounded-[3rem] overflow-hidden shadow-2xl"
                  style={{ zIndex: 1 }}
                >
                  <img
                    src="/images/FOR-CUSTOMER.jpg"
                    alt="Customer receiving food delivery"
                    className="w-full h-auto object-cover"
                    style={{ display: 'block' }}
                    onError={(e) => {
                      e.target.src = 'https://placehold.co/800x1000/013727/04c55c?text=For+Customers';
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Content - Right Side */}
            <div
              className={`order-1 lg:order-2 transition-all duration-1000 transform ${
                isCustomersVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-20'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <div className="text-center lg:text-left">
                <h2 
                  className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6"
                  style={{ color: '#04c55c' }}
                >
                  For Customers
                </h2>
                
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6">
                  Eat Well for Less—Without Compromise
                </h3>
                
                <p className="text-sm sm:text-base md:text-lg text-white mb-6 sm:mb-8 leading-relaxed">
                  Get restaurant-quality food and groceries from trusted local businesses at up to 80% off, all while making a real environmental impact.
                </p>

                {/* Benefits List */}
                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  <div className="flex items-start lg:items-center gap-2 sm:gap-3 justify-center lg:justify-start">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-0.5 lg:mt-0" style={{ color: '#04c55c' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-sm sm:text-base md:text-lg text-white">Spend less on everyday meals</p>
                  </div>
                  
                  <div className="flex items-start lg:items-center gap-2 sm:gap-3 justify-center lg:justify-start">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-0.5 lg:mt-0" style={{ color: '#04c55c' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-sm sm:text-base md:text-lg text-white">Discover new local favorites</p>
                  </div>
                  
                  <div className="flex items-start lg:items-center gap-2 sm:gap-3 justify-center lg:justify-start">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-0.5 lg:mt-0" style={{ color: '#04c55c' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-sm sm:text-base md:text-lg text-white">Reduce food waste effortlessly</p>
                  </div>
                  
                  <div className="flex items-start lg:items-center gap-2 sm:gap-3 justify-center lg:justify-start">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-0.5 lg:mt-0" style={{ color: '#04c55c' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-sm sm:text-base md:text-lg text-white">Feel good about every pickup</p>
                  </div>
                </div>

                {/* Button */}
                <div className="flex justify-center lg:justify-start">
                  <button 
                    className="px-8 sm:px-10 md:px-12 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold text-white transition-all hover:scale-105 hover:shadow-xl"
                    style={{ backgroundColor: '#04c55c' }}
                  >
                    Exclusive Offer
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FOR MERCHANTS SECTION */}
      <section 
        ref={merchantsRef}
        className="w-full py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
            
            {/* Content - Left Side */}
            <div
              className={`transition-all duration-1000 transform ${
                isMerchantsVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-20'
              }`}
            >
              <div className="text-center lg:text-left">
                <h2 
                  className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6"
                  style={{ color: '#04c55c' }}
                >
                  For Merchants
                </h2>
                
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6">
                  Turn Unsold Food Into Easy Revenue
                </h3>
                
                <p className="text-sm sm:text-base md:text-lg text-white mb-6 sm:mb-8 leading-relaxed">
                  Stop throwing money away. Bestby Bites helps you sell surplus inventory, reduce waste costs, and reach new customers without hurting your brand.
                </p>

                {/* Benefits List */}
                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  <div className="flex items-start lg:items-center gap-2 sm:gap-3 justify-center lg:justify-start">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-0.5 lg:mt-0" style={{ color: '#04c55c' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-sm sm:text-base md:text-lg text-white">Recover revenue from surplus food</p>
                  </div>
                  
                  <div className="flex items-start lg:items-center gap-2 sm:gap-3 justify-center lg:justify-start">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-0.5 lg:mt-0" style={{ color: '#04c55c' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-sm sm:text-base md:text-lg text-white">Cut disposal and waste expenses</p>
                  </div>
                  
                  <div className="flex items-start lg:items-center gap-2 sm:gap-3 justify-center lg:justify-start">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-0.5 lg:mt-0" style={{ color: '#04c55c' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-sm sm:text-base md:text-lg text-white">Attract new, value-driven customers</p>
                  </div>
                  
                  <div className="flex items-start lg:items-center gap-2 sm:gap-3 justify-center lg:justify-start">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-0.5 lg:mt-0" style={{ color: '#04c55c' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-sm sm:text-base md:text-lg text-white">Strengthen sustainability and brand trust</p>
                  </div>
                </div>

                {/* Button */}
                <div className="flex justify-center lg:justify-start">
                  <button 
                    className="px-8 sm:px-10 md:px-12 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold text-white transition-all hover:scale-105 hover:shadow-xl"
                    style={{ backgroundColor: '#04c55c' }}
                  >
                    Become a Partner
                  </button>
                </div>
              </div>
            </div>

            {/* Image - Right Side */}
            <div
              className={`transition-all duration-1000 transform ${
                isMerchantsVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-20'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <div className="relative max-w-xl mx-auto lg:mx-0">
                {/* Green border background - very small on mobile, larger on desktop */}
                <div 
                  className="absolute inset-0 rounded-2xl sm:rounded-3xl lg:rounded-[3rem]"
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
                  className="relative rounded-2xl sm:rounded-3xl lg:rounded-[3rem] overflow-hidden shadow-2xl"
                  style={{ zIndex: 1 }}
                >
                  <img
                    src="/images/FOR-MERCHANT.jpg"
                    alt="Merchant with fresh pastries"
                    className="w-full h-auto object-cover"
                    style={{ display: 'block' }}
                    onError={(e) => {
                      e.target.src = 'https://placehold.co/800x1000/013727/04c55c?text=For+Merchants';
                    }}
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ForCustomersAndMerchants;
