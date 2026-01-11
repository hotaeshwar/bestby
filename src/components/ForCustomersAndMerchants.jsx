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

        /* Enhanced font sizes for all devices */
        
        /* Mobile (< 640px) - Enhanced readability */
        @media (max-width: 640px) {
          .section-main-heading {
            font-size: 2rem !important; /* 32px */
            line-height: 1.2 !important;
          }
          
          .section-sub-heading {
            font-size: 1.375rem !important; /* 22px */
            line-height: 1.3 !important;
          }
          
          .section-description {
            font-size: 1.0625rem !important; /* 17px */
            line-height: 1.65 !important;
            font-weight: 600 !important;
          }
          
          .benefit-item {
            font-size: 1.0625rem !important; /* 17px */
            line-height: 1.6 !important;
            font-weight: 600 !important;
          }
          
          .newsletter-text {
            font-size: 0.9375rem !important; /* 15px */
            line-height: 1.6 !important;
            font-weight: 600 !important;
          }
          
          .cta-button-text {
            font-size: 1.0625rem !important; /* 17px */
            font-weight: 700 !important;
          }
          
          .checkmark-icon {
            width: 1.375rem !important; /* 22px */
            height: 1.375rem !important;
          }
        }

        /* Tablet (641px - 1023px) */
        @media (min-width: 641px) and (max-width: 1023px) {
          .section-main-heading {
            font-size: 2.5rem !important; /* 40px */
            line-height: 1.2 !important;
          }
          
          .section-sub-heading {
            font-size: 1.625rem !important; /* 26px */
            line-height: 1.3 !important;
          }
          
          .section-description {
            font-size: 1.1875rem !important; /* 19px */
            line-height: 1.65 !important;
            font-weight: 600 !important;
          }
          
          .benefit-item {
            font-size: 1.1875rem !important; /* 19px */
            line-height: 1.6 !important;
            font-weight: 600 !important;
          }
          
          .newsletter-text {
            font-size: 1.0625rem !important; /* 17px */
            line-height: 1.6 !important;
            font-weight: 600 !important;
          }
          
          .cta-button-text {
            font-size: 1.1875rem !important; /* 19px */
            font-weight: 700 !important;
          }
          
          .checkmark-icon {
            width: 1.5rem !important; /* 24px */
            height: 1.5rem !important;
          }
        }

        /* Desktop (1024px+) */
        @media (min-width: 1024px) {
          .section-main-heading {
            font-size: 3rem !important; /* 48px */
            line-height: 1.15 !important;
          }
          
          .section-sub-heading {
            font-size: 1.875rem !important; /* 30px */
            line-height: 1.3 !important;
          }
          
          .section-description {
            font-size: 1.3125rem !important; /* 21px */
            line-height: 1.7 !important;
            font-weight: 600 !important;
          }
          
          .benefit-item {
            font-size: 1.3125rem !important; /* 21px */
            line-height: 1.65 !important;
            font-weight: 600 !important;
          }
          
          .newsletter-text {
            font-size: 1.125rem !important; /* 18px */
            line-height: 1.65 !important;
            font-weight: 600 !important;
          }
          
          .cta-button-text {
            font-size: 1.25rem !important; /* 20px */
            font-weight: 700 !important;
          }
          
          .checkmark-icon {
            width: 1.625rem !important; /* 26px */
            height: 1.625rem !important;
          }
        }

        /* iPad Mini specific styles (768px - 819px) */
        @media (min-width: 768px) and (max-width: 819px) {
          .merchant-overlay-screen {
            width: 120px !important;
            top: -8px !important;
            right: -16px !important;
          }
          
          .merchant-tag {
            font-size: 0.625rem !important;
            padding: 0.25rem 0.5rem !important;
            bottom: -0.375rem !important;
            right: -0.25rem !important;
          }
        }

        /* iPad Air and larger tablets (820px - 1023px) */
        @media (min-width: 820px) and (max-width: 1023px) {
          .merchant-overlay-screen {
            width: 145px !important;
            top: -12px !important;
            right: -20px !important;
          }
          
          .merchant-tag {
            font-size: 0.7rem !important;
            padding: 0.375rem 0.625rem !important;
            bottom: -0.5rem !important;
            right: -0.375rem !important;
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
              
              {/* Image - Left Side - SQUARE */}
              <div
                className={`order-2 lg:order-1 transition-all duration-1000 transform ${
                  isCustomersVisible 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 -translate-x-20'
                }`}
              >
                <div className="relative w-full max-w-md mx-auto lg:mx-0 lg:ml-auto">
                  {/* White border background */}
                  <div className="absolute inset-0 bg-white rounded-xl sm:rounded-2xl md:rounded-3xl lg:rounded-[2.5rem] -top-1.5 -left-1.5 right-1.5 bottom-1.5 sm:-top-2 sm:-left-2 sm:right-2 sm:bottom-2 z-0"></div>
                  
                  {/* Image container - SQUARE ASPECT RATIO */}
                  <div className="relative rounded-xl sm:rounded-2xl md:rounded-3xl lg:rounded-[2.5rem] overflow-hidden shadow-xl md:shadow-2xl hover:scale-105 transition-transform duration-500 z-10">
                    <div className="aspect-square w-full">
                      <img
                        src="/images/FOR-CUSTOMER.jpg"
                        alt="Customer receiving food delivery"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = 'https://placehold.co/800x800/013727/04c55c?text=For+Customers';
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
                <div className="text-left px-2 sm:px-4 lg:px-0">
                  <h2 className="section-main-heading font-extrabold mb-3 sm:mb-4 md:mb-5 lg:mb-6 text-white text-left">
                    For Customers
                  </h2>
                  
                  <h3 className="section-sub-heading font-extrabold text-white mb-3 sm:mb-4 md:mb-5 lg:mb-6 text-left">
                    Eat Well for Less—Without Compromise
                  </h3>
                  
                  <p className="section-description text-white mb-5 sm:mb-6 md:mb-7 lg:mb-8 leading-relaxed text-left">
                    Get restaurant-quality food and groceries from trusted local businesses at up to 80% off, all while making a real environmental impact.
                  </p>

                  {/* Benefits List */}
                  <div className="space-y-3 sm:space-y-3.5 md:space-y-4 mb-5 sm:mb-6 md:mb-7 lg:mb-8">
                    <div className="flex items-start gap-2 sm:gap-3 justify-start">
                      <svg className="checkmark-icon flex-shrink-0 mt-0.5 text-[#04c55c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="benefit-item text-white text-left">Spend less on everyday meals</p>
                    </div>
                    
                    <div className="flex items-start gap-2 sm:gap-3 justify-start">
                      <svg className="checkmark-icon flex-shrink-0 mt-0.5 text-[#04c55c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="benefit-item text-white text-left">Discover new local favorites</p>
                    </div>
                    
                    <div className="flex items-start gap-2 sm:gap-3 justify-start">
                      <svg className="checkmark-icon flex-shrink-0 mt-0.5 text-[#04c55c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="benefit-item text-white text-left">Reduce food waste effortlessly</p>
                    </div>
                    
                    <div className="flex items-start gap-2 sm:gap-3 justify-start">
                      <svg className="checkmark-icon flex-shrink-0 mt-0.5 text-[#04c55c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="benefit-item text-white text-left">Feel good about every pickup</p>
                    </div>
                  </div>

                  {/* Newsletter Signup Section */}
                  <div className="mb-5 sm:mb-6 md:mb-7 lg:mb-8">
                    <p className="newsletter-text text-white mb-3 sm:mb-4 leading-relaxed text-left">
                      Get special offers, meals, and news when you subscribe to our newsletter.
                    </p>
                    
                    {/* Button */}
                    <div className="flex justify-start">
                      <button
                        onClick={scrollToNewsletter}
                        className="cta-button-text px-6 py-2.5 sm:px-8 sm:py-3 md:px-10 md:py-3 lg:px-12 lg:py-3.5 bg-[#04c55c] text-white rounded-full hover:bg-[#03a84d] transition-all duration-300 hover:scale-105 shadow-xl active:scale-95 cursor-pointer"
                        style={{ animation: 'pulse-glow 2s ease-in-out infinite' }}
                      >
                        Subscribe
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
                <div className="text-left px-2 sm:px-4 lg:px-0">
                  <h2 className="section-main-heading font-extrabold mb-3 sm:mb-4 md:mb-5 lg:mb-6 text-white text-left">
                    Become a Partner
                  </h2>
                  
                  <h3 className="section-sub-heading font-extrabold text-white mb-3 sm:mb-4 md:mb-5 lg:mb-6 text-left">
                    Turn Unsold Food Into Easy Revenue
                  </h3>
                  
                  <p className="section-description text-white mb-5 sm:mb-6 md:mb-7 lg:mb-8 leading-relaxed text-left">
                    Stop throwing money away. Bestby Bites helps you sell surplus inventory, reduce waste costs, and reach new customers without hurting your brand.
                  </p>

                  {/* Benefits List */}
                  <div className="space-y-3 sm:space-y-3.5 md:space-y-4 mb-5 sm:mb-6 md:mb-7 lg:mb-8">
                    <div className="flex items-start gap-2 sm:gap-3 justify-start">
                      <svg className="checkmark-icon flex-shrink-0 mt-0.5 text-[#04c55c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="benefit-item text-white text-left">Recover revenue from surplus food</p>
                    </div>
                    
                    <div className="flex items-start gap-2 sm:gap-3 justify-start">
                      <svg className="checkmark-icon flex-shrink-0 mt-0.5 text-[#04c55c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="benefit-item text-white text-left">Cut disposal and waste expenses</p>
                    </div>
                    
                    <div className="flex items-start gap-2 sm:gap-3 justify-start">
                      <svg className="checkmark-icon flex-shrink-0 mt-0.5 text-[#04c55c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="benefit-item text-white text-left">Attract new, value-driven customers</p>
                    </div>
                    
                    <div className="flex items-start gap-2 sm:gap-3 justify-start">
                      <svg className="checkmark-icon flex-shrink-0 mt-0.5 text-[#04c55c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="benefit-item text-white text-left">Strengthen sustainability and brand trust</p>
                    </div>
                  </div>

                  {/* Button */}
                  <div className="flex justify-start">
                    <button 
                      className="cta-button-text px-6 py-2.5 sm:px-8 sm:py-3 md:px-10 md:py-3 lg:px-12 lg:py-3.5 bg-[#04c55c] text-white rounded-full hover:bg-[#03a84d] transition-all duration-300 hover:scale-105 shadow-xl active:scale-95 cursor-pointer"
                    >
                      Become a Partner
                    </button>
                  </div>
                </div>
              </div>

              {/* Image with overlay - Right Side - SQUARE */}
              <div
                className={`transition-all duration-1000 transform ${
                  isMerchantsVisible 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-20'
                }`}
                style={{ transitionDelay: '200ms' }}
              >
                <div className="relative w-full max-w-md mx-auto lg:mx-0 lg:mr-auto">
                  
                  {/* Merchant screen overlay with "Join as a Supplier" tag */}
                  <div className="merchant-overlay-screen absolute top-0 right-0 sm:top-2 sm:right-2 md:top-4 md:right-4 lg:-top-8 lg:-right-8 xl:-top-12 xl:-right-12 w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64 z-20">
                    <div className="relative">
                      {/* White border for merchant screen */}
                      <div className="absolute inset-0 bg-white rounded-lg sm:rounded-xl md:rounded-2xl -top-0.5 -left-0.5 right-0.5 bottom-0.5 sm:-top-1 sm:-left-1 sm:right-1 sm:bottom-1"></div>
                      <div className="relative">
                        <img
                          src="/images/screen-1-merchant.jpg"
                          alt="Merchant interface"
                          className="relative rounded-lg sm:rounded-xl md:rounded-2xl shadow-2xl w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            e.target.src = 'https://placehold.co/400x600/013727/04c55c?text=Merchant+Screen';
                          }}
                        />
                        {/* "Join as a Supplier" tag */}
                        <div className="merchant-tag absolute -bottom-2 -right-1 sm:-bottom-3 sm:-right-2 md:-bottom-5 md:-right-3 bg-[#9ACD32] text-[#013727] px-2 py-1 sm:px-3 sm:py-1.5 md:px-5 md:py-2.5 rounded-full shadow-lg font-bold text-[10px] sm:text-xs md:text-base whitespace-nowrap hover:scale-105 transition-transform duration-300">
                          Join as a Supplier
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* White border background for main image */}
                  <div className="absolute inset-0 bg-white rounded-xl sm:rounded-2xl md:rounded-3xl lg:rounded-[2.5rem] -top-1.5 -right-1.5 left-1.5 bottom-1.5 sm:-top-2 sm:-right-2 sm:left-2 sm:bottom-2 z-0"></div>
                  
                  {/* Main merchant image container - SQUARE ASPECT RATIO */}
                  <div className="relative rounded-xl sm:rounded-2xl md:rounded-3xl lg:rounded-[2.5rem] overflow-hidden shadow-xl md:shadow-2xl hover:scale-105 transition-transform duration-500 z-10">
                    <div className="aspect-square w-full">
                      <img
                        src="/images/FOR-MERCHANT.jpg"
                        alt="Merchant with fresh pastries"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = 'https://placehold.co/800x800/013727/04c55c?text=For+Merchants';
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