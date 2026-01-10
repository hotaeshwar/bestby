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

  const scrollToNewsletter = () => {
    const newsletterSection = document.getElementById('newsletter-signup');
    if (newsletterSection) {
      newsletterSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <style>{`
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(4, 197, 92, 0.4);
          }
          50% {
            box-shadow: 0 0 30px rgba(4, 197, 92, 0.6);
          }
        }
      `}</style>
      
      <div className="w-full bg-[#013727]">
        {/* FOR CUSTOMERS SECTION */}
        <section 
          ref={customersRef}
          className="w-full py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-center">
              
              {/* Image - Left Side */}
              <div
                className={`order-2 lg:order-1 transition-all duration-1000 transform ${
                  isCustomersVisible 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 -translate-x-20'
                }`}
              >
                <div className="relative max-w-xl mx-auto lg:mx-0 lg:ml-auto">
                  {/* Green border background */}
                  <div className="absolute inset-0 bg-[#04c55c] rounded-xl sm:rounded-2xl md:rounded-3xl lg:rounded-[2.5rem] -top-1.5 -left-1.5 right-1.5 bottom-1.5 sm:-top-2 sm:-left-2 sm:right-2 sm:bottom-2 z-0"></div>
                  
                  {/* Image container */}
                  <div className="relative rounded-xl sm:rounded-2xl md:rounded-3xl lg:rounded-[2.5rem] overflow-hidden shadow-xl md:shadow-2xl hover:scale-105 transition-transform duration-500 z-10">
                    <div className="aspect-[3/4] sm:aspect-[4/5] w-full">
                      <img
                        src="/images/FOR-CUSTOMER.jpg"
                        alt="Customer receiving food delivery"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = 'https://placehold.co/800x1000/013727/04c55c?text=For+Customers';
                        }}
                      />
                    </div>
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
                <div className="text-center lg:text-left px-2 sm:px-4 lg:px-0">
                  <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-5 lg:mb-6 text-[#04c55c]">
                    For Customers
                  </h2>
                  
                  <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                    Eat Well for Less—Without Compromise
                  </h3>
                  
                  <p className="text-sm sm:text-base md:text-base lg:text-lg text-white mb-5 sm:mb-6 md:mb-7 lg:mb-8 leading-relaxed">
                    Get restaurant-quality food and groceries from trusted local businesses at up to 80% off, all while making a real environmental impact.
                  </p>

                  {/* Benefits List */}
                  <div className="space-y-3 sm:space-y-3.5 md:space-y-4 mb-5 sm:mb-6 md:mb-7 lg:mb-8">
                    <div className="flex items-start gap-2 sm:gap-3 justify-center lg:justify-start">
                      <svg className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0 mt-0.5 text-[#04c55c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="text-sm sm:text-base md:text-base lg:text-lg text-white">Spend less on everyday meals</p>
                    </div>
                    
                    <div className="flex items-start gap-2 sm:gap-3 justify-center lg:justify-start">
                      <svg className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0 mt-0.5 text-[#04c55c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="text-sm sm:text-base md:text-base lg:text-lg text-white">Discover new local favorites</p>
                    </div>
                    
                    <div className="flex items-start gap-2 sm:gap-3 justify-center lg:justify-start">
                      <svg className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0 mt-0.5 text-[#04c55c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="text-sm sm:text-base md:text-base lg:text-lg text-white">Reduce food waste effortlessly</p>
                    </div>
                    
                    <div className="flex items-start gap-2 sm:gap-3 justify-center lg:justify-start">
                      <svg className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0 mt-0.5 text-[#04c55c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="text-sm sm:text-base md:text-base lg:text-lg text-white">Feel good about every pickup</p>
                    </div>
                  </div>

                  {/* Newsletter Signup Section */}
                  <div className="mb-5 sm:mb-6 md:mb-7 lg:mb-8">
                    <p className="text-xs sm:text-sm md:text-sm lg:text-base text-white mb-3 sm:mb-4 leading-relaxed">
                      Get special offers, meals, and news when you subscribe to our newsletter.
                    </p>
                    
                    {/* Button */}
                    <div className="flex justify-center lg:justify-start">
                      <button
                        onClick={scrollToNewsletter}
                        className="px-6 py-2.5 sm:px-8 sm:py-3 md:px-10 md:py-3 lg:px-12 lg:py-3.5 text-sm sm:text-base md:text-lg font-bold bg-[#04c55c] text-white rounded-full hover:bg-[#03a84d] transition-all duration-300 hover:scale-105 shadow-xl active:scale-95 cursor-pointer"
                        style={{ animation: 'pulse-glow 2s ease-in-out infinite' }}
                      >
                        Sign up
                      </button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* FOR MERCHANTS SECTION */}
        <section 
          ref={merchantsRef}
          className="w-full py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-center">
              
              {/* Content - Left Side */}
              <div
                className={`transition-all duration-1000 transform ${
                  isMerchantsVisible 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 -translate-x-20'
                }`}
              >
                <div className="text-center lg:text-left px-2 sm:px-4 lg:px-0">
                  <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-5 lg:mb-6 text-[#04c55c]">
                    For Merchants
                  </h2>
                  
                  <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                    Turn Unsold Food Into Easy Revenue
                  </h3>
                  
                  <p className="text-sm sm:text-base md:text-base lg:text-lg text-white mb-5 sm:mb-6 md:mb-7 lg:mb-8 leading-relaxed">
                    Stop throwing money away. Bestby Bites helps you sell surplus inventory, reduce waste costs, and reach new customers without hurting your brand.
                  </p>

                  {/* Benefits List */}
                  <div className="space-y-3 sm:space-y-3.5 md:space-y-4 mb-5 sm:mb-6 md:mb-7 lg:mb-8">
                    <div className="flex items-start gap-2 sm:gap-3 justify-center lg:justify-start">
                      <svg className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0 mt-0.5 text-[#04c55c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="text-sm sm:text-base md:text-base lg:text-lg text-white">Recover revenue from surplus food</p>
                    </div>
                    
                    <div className="flex items-start gap-2 sm:gap-3 justify-center lg:justify-start">
                      <svg className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0 mt-0.5 text-[#04c55c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="text-sm sm:text-base md:text-base lg:text-lg text-white">Cut disposal and waste expenses</p>
                    </div>
                    
                    <div className="flex items-start gap-2 sm:gap-3 justify-center lg:justify-start">
                      <svg className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0 mt-0.5 text-[#04c55c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="text-sm sm:text-base md:text-base lg:text-lg text-white">Attract new, value-driven customers</p>
                    </div>
                    
                    <div className="flex items-start gap-2 sm:gap-3 justify-center lg:justify-start">
                      <svg className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0 mt-0.5 text-[#04c55c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="text-sm sm:text-base md:text-base lg:text-lg text-white">Strengthen sustainability and brand trust</p>
                    </div>
                  </div>

                  {/* Button */}
                  <div className="flex justify-center lg:justify-start">
                    <button 
                      className="px-6 py-2.5 sm:px-8 sm:py-3 md:px-10 md:py-3 lg:px-12 lg:py-3.5 text-sm sm:text-base md:text-lg font-bold bg-[#04c55c] text-white rounded-full hover:bg-[#03a84d] transition-all duration-300 hover:scale-105 shadow-xl active:scale-95 cursor-pointer"
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
                <div className="relative max-w-xl mx-auto lg:mx-0 lg:mr-auto">
                  {/* Green border background */}
                  <div className="absolute inset-0 bg-[#04c55c] rounded-xl sm:rounded-2xl md:rounded-3xl lg:rounded-[2.5rem] -top-1.5 -right-1.5 left-1.5 bottom-1.5 sm:-top-2 sm:-right-2 sm:left-2 sm:bottom-2 z-0"></div>
                  
                  {/* Image container */}
                  <div className="relative rounded-xl sm:rounded-2xl md:rounded-3xl lg:rounded-[2.5rem] overflow-hidden shadow-xl md:shadow-2xl hover:scale-105 transition-transform duration-500 z-10">
                    <div className="aspect-[3/4] sm:aspect-[4/5] w-full">
                      <img
                        src="/images/FOR-MERCHANT.jpg"
                        alt="Merchant with fresh pastries"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = 'https://placehold.co/800x1000/013727/04c55c?text=For+Merchants';
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ForCustomersAndMerchants;