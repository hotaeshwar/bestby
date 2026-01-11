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

  const scrollToNewsletter = () => {
    const newsletterSection = document.getElementById('newsletter-signup');
    if (newsletterSection) {
      const offset = 80;
      const elementPosition = newsletterSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      setTimeout(() => {
        newsletterSection.style.transition = 'transform 0.3s ease';
        newsletterSection.style.transform = 'scale(1.02)';
        setTimeout(() => {
          newsletterSection.style.transform = 'scale(1)';
        }, 300);
      }, 800);
    }
  };

  const fadeInStyle = (delay = 0) => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
    transition: `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s`
  });

  const isIPad = windowWidth >= 768 && windowWidth <= 834;
  const customerImage = isIPad ? '/images/IMAGE-1.jpg' : '/images/Homepage-Slider_Nyssa-Corner-Sto.jpg';
  const businessImage = '/images/IMAGE-2.jpg';

  return (
    <div className="w-full bg-white">
      <style>{`
        /* Mobile font sizes - Enhanced readability */
        @media (max-width: 640px) {
          .section-heading {
            font-size: 2rem !important; /* 32px */
            line-height: 1.2 !important;
          }
          
          .benefit-text {
            font-size: 1.0625rem !important; /* 17px */
            line-height: 1.6 !important;
            font-weight: 600 !important;
          }
          
          .checkmark {
            font-size: 1.5rem !important; /* 24px */
          }
          
          .cta-button {
            font-size: 1.125rem !important; /* 18px */
            padding: 0.875rem 2rem !important;
          }
        }

        /* Tablet font sizes */
        @media (min-width: 641px) and (max-width: 1023px) {
          .section-heading {
            font-size: 2.5rem !important; /* 40px */
            line-height: 1.2 !important;
          }
          
          .benefit-text {
            font-size: 1.1875rem !important; /* 19px */
            line-height: 1.65 !important;
            font-weight: 600 !important;
          }
          
          .checkmark {
            font-size: 1.75rem !important; /* 28px */
          }
          
          .cta-button {
            font-size: 1.25rem !important; /* 20px */
            padding: 1rem 2.5rem !important;
          }
        }

        /* Desktop font sizes */
        @media (min-width: 1024px) {
          .section-heading {
            font-size: 3rem !important; /* 48px */
            line-height: 1.15 !important;
          }
          
          .benefit-text {
            font-size: 1.3125rem !important; /* 21px */
            line-height: 1.7 !important;
            font-weight: 600 !important;
          }
          
          .checkmark {
            font-size: 2rem !important; /* 32px */
          }
          
          .cta-button {
            font-size: 1.375rem !important; /* 22px */
            padding: 1.125rem 3rem !important;
          }
        }
      `}</style>

      {/* For Customers Section */}
      <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 bg-[#013727]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-14 xl:gap-16 items-center">
            {/* Image - Mobile first, then desktop left */}
            <div style={fadeInStyle(0.2)} className="order-2 lg:order-1 flex items-center justify-center lg:justify-end">
              <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[400px]">
                {/* White border effect */}
                <div className="absolute inset-0 bg-white rounded-2xl md:rounded-3xl -top-2 -left-2 right-2 bottom-2 md:-top-3 md:-left-3 md:right-3 md:bottom-3"></div>
                
                {/* Main image container */}
                <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-500">
                  <img
                    src={customerImage}
                    alt="Customer shopping for fresh produce"
                    className="w-full h-full object-cover aspect-square"
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400"><rect fill="%23f0f0f0" width="400" height="400"/><text x="50%" y="50%" text-anchor="middle" fill="%23999" font-size="18" font-family="Arial">Customer Experience</text></svg>';
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div style={fadeInStyle(0.4)} className="order-1 lg:order-2 text-white flex flex-col justify-center">
              <h2 className="section-heading font-extrabold mb-6 md:mb-8 text-center lg:text-left">
                Customer Benefits
              </h2>
              <div className="space-y-4 md:space-y-5 lg:space-y-6 mb-8 md:mb-10">
                <div className="flex items-start gap-3 md:gap-4 hover:translate-x-2 transition-transform duration-300">
                  <span className="text-[#04c55c] checkmark flex-shrink-0 mt-1 font-bold">✓</span>
                  <p className="benefit-text leading-relaxed">High-quality food at unbeatable prices</p>
                </div>
                <div className="flex items-start gap-3 md:gap-4 hover:translate-x-2 transition-transform duration-300">
                  <span className="text-[#04c55c] checkmark flex-shrink-0 mt-1 font-bold">✓</span>
                  <p className="benefit-text leading-relaxed">Easy access to local restaurants and stores</p>
                </div>
                <div className="flex items-start gap-3 md:gap-4 hover:translate-x-2 transition-transform duration-300">
                  <span className="text-[#04c55c] checkmark flex-shrink-0 mt-1 font-bold">✓</span>
                  <p className="benefit-text leading-relaxed">Real impact with zero lifestyle change</p>
                </div>
              </div>

              <div className="flex justify-center lg:justify-start">
                <button
                  onClick={scrollToNewsletter}
                  className="cta-button bg-[#04c55c] hover:bg-[#03a84d] rounded-full font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95 shadow-lg"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Businesses Section */}
      <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 bg-[#013727]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-14 xl:gap-16 items-center">
            {/* Content */}
            <div style={fadeInStyle(0.2)} className="text-white flex flex-col justify-center order-1">
              <h2 className="section-heading font-extrabold mb-6 md:mb-8 text-center lg:text-left">
                Become a Partner
              </h2>
              <div className="space-y-4 md:space-y-5 lg:space-y-6">
                <div className="flex items-start gap-3 md:gap-4 hover:translate-x-2 transition-transform duration-300">
                  <span className="text-[#04c55c] checkmark flex-shrink-0 mt-1 font-bold">✓</span>
                  <p className="benefit-text leading-relaxed">Monetize surplus inventory</p>
                </div>
                <div className="flex items-start gap-3 md:gap-4 hover:translate-x-2 transition-transform duration-300">
                  <span className="text-[#04c55c] checkmark flex-shrink-0 mt-1 font-bold">✓</span>
                  <p className="benefit-text leading-relaxed">Reduce waste and disposal costs</p>
                </div>
                <div className="flex items-start gap-3 md:gap-4 hover:translate-x-2 transition-transform duration-300">
                  <span className="text-[#04c55c] checkmark flex-shrink-0 mt-1 font-bold">✓</span>
                  <p className="benefit-text leading-relaxed">Improve sustainability and public image</p>
                </div>
              </div>
            </div>

            {/* Image with overlay */}
            <div style={fadeInStyle(0.4)} className="relative flex items-center justify-center lg:justify-start order-2">
              <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[400px]">
                {/* Merchant screen overlay with "Join as a Suppliers" tag */}
                <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 lg:-top-8 lg:-right-8 w-24 sm:w-28 md:w-32 lg:w-36 z-20">
                  <div className="relative">
                    {/* White border for merchant screen */}
                    <div className="absolute inset-0 bg-white rounded-lg md:rounded-xl -top-0.5 -left-0.5 right-0.5 bottom-0.5 md:-top-1 md:-left-1 md:right-1 md:bottom-1"></div>
                    <div className="relative">
                      <img
                        src="/images/screen-1-merchant.jpg"
                        alt="Merchant interface"
                        className="relative rounded-lg md:rounded-xl shadow-2xl w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="600"><rect fill="%23f0f0f0" width="400" height="600"/><text x="50%" y="50%" text-anchor="middle" fill="%23999" font-size="18" font-family="Arial">Merchant Screen</text></svg>';
                        }}
                      />
                      {/* "Join as a Suppliers" tag */}
                      <div className="absolute -bottom-2 -right-1 md:-bottom-3 md:-right-2 bg-[#9ACD32] text-[#013727] px-2 py-1 md:px-3 md:py-1.5 rounded-full shadow-lg font-bold text-[9px] md:text-[10px] lg:text-xs whitespace-nowrap hover:scale-105 transition-transform duration-300">
                        Join as a Suppliers
                      </div>
                    </div>
                  </div>
                </div>

                {/* White border effect for main image */}
                <div className="absolute inset-0 bg-white rounded-2xl md:rounded-3xl -top-2 -right-2 left-2 bottom-2 md:-top-3 md:-right-3 md:left-3 md:bottom-3"></div>
                
                {/* Main chef image container */}
                <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-500">
                  <img
                    src={businessImage}
                    alt="Chef with Best by Bites bread delivery"
                    className="w-full h-full object-cover aspect-square"
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400"><rect fill="%23f0f0f0" width="400" height="400"/><text x="50%" y="50%" text-anchor="middle" fill="%23999" font-size="18" font-family="Arial">Business Partner</text></svg>';
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

export default BusinessModelSection;