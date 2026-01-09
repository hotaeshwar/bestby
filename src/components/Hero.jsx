import React, { useState, useEffect } from 'react';
import HowItWorks from './HowItWorks';
import Launchingsoon from './Launchingsoon';
import WhyBestbyBites from './WhyBestbyBites';
import ForCustomersAndMerchants from './ForCustomersAndMerchants';
import FoodWasteIsCostingEveryone from './FoodWasteIsCostingEveryone';
import JoinMovement from './JoinMovement';
import WhoCanJoin from './WhoCanJoin';
import AppScreenshots from './AppScreenshots';

function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToNewsletter = () => {
    const newsletter = document.getElementById('newsletter-signup');
    if (newsletter) {
      newsletter.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Mobile & Tablet Layout (with Background Image) */}
      <div
        className="block lg:hidden relative overflow-hidden bg-[#013727]"
        style={{
          backgroundImage: "url('/images/m.png')",
          backgroundPosition: 'right center',
          backgroundRepeat: 'no-repeat',
          minHeight: '60vh'
        }}
      >
        <style>{`
          @keyframes pulse-glow {
            0%, 100% { box-shadow: 0 0 20px rgba(4, 197, 92, 0.5); }
            50% { box-shadow: 0 0 30px rgba(4, 197, 92, 0.8); }
          }

          /* iPhone SE and small mobile (< 376px) */
          @media (max-width: 375px) {
            .hero-logo {
              height: 70px !important;
            }
            
            .hero-heading {
              font-size: 1.8rem !important;
              line-height: 1.2 !important;
              margin-bottom: 0.8rem !important;
            }
            
            .hero-description {
              font-size: 0.85rem !important;
              line-height: 1.5 !important;
              margin-bottom: 1rem !important;
            }

            .hero-newsletter {
              font-size: 0.75rem !important;
              line-height: 1.4 !important;
              margin-bottom: 0.875rem !important;
            }
            
            .hero-button {
              font-size: 0.9rem !important;
              padding: 0.75rem 1.5rem !important;
            }
          }

          /* Mobile (376px - 639px) */
          @media (min-width: 376px) and (max-width: 639px) {
            .hero-logo {
              height: 80px !important;
            }
            
            .hero-heading {
              font-size: 2rem !important;
              line-height: 1.2 !important;
              margin-bottom: 1rem !important;
            }
            
            .hero-description {
              font-size: 0.9rem !important;
              line-height: 1.55 !important;
              margin-bottom: 1.2rem !important;
            }

            .hero-newsletter {
              font-size: 0.8125rem !important;
              line-height: 1.5 !important;
              margin-bottom: 1rem !important;
            }
            
            .hero-button {
              font-size: 0.95rem !important;
              padding: 0.8rem 1.6rem !important;
            }
          }

          /* Small Tablet (640px - 767px) */
          @media (min-width: 640px) and (max-width: 767px) {
            .hero-logo {
              height: 90px !important;
            }
            
            .hero-heading {
              font-size: 2.3rem !important;
              line-height: 1.2 !important;
              margin-bottom: 1.2rem !important;
            }
            
            .hero-description {
              font-size: 1rem !important;
              line-height: 1.6 !important;
              margin-bottom: 1.5rem !important;
            }

            .hero-newsletter {
              font-size: 0.875rem !important;
              line-height: 1.55 !important;
              margin-bottom: 1.125rem !important;
            }
            
            .hero-button {
              font-size: 1rem !important;
              padding: 0.85rem 1.75rem !important;
            }
          }

          /* iPad Mini & Air (768px - 1023px) */
          @media (min-width: 768px) and (max-width: 1023px) {
            .hero-logo {
              height: 100px !important;
            }
            
            .hero-heading {
              font-size: 2.8rem !important;
              line-height: 1.15 !important;
              margin-bottom: 1.3rem !important;
            }
            
            .hero-description {
              font-size: 1.1rem !important;
              line-height: 1.6 !important;
              margin-bottom: 1.75rem !important;
            }

            .hero-newsletter {
              font-size: 0.9375rem !important;
              line-height: 1.6 !important;
              margin-bottom: 1.25rem !important;
            }
            
            .hero-button {
              font-size: 1.1rem !important;
              padding: 0.95rem 1.9rem !important;
            }
          }
        `}</style>

        {/* Content Section */}
        <div className="relative flex items-center justify-start z-20 px-5 py-8 sm:px-8 md:px-12" style={{ minHeight: '60vh' }}>
          <div className="flex flex-col items-start max-w-2xl" style={{ paddingBottom: '150px' }}>
            {/* Logo - Centered on mobile ONLY */}
            <div className="flex justify-center lg:justify-start items-center mb-4 sm:mb-6 w-full">
              <img
                src="/images/BEST-BY-BITES-FINAL-LOGO-WHITE.png"
                alt="Bestby Bites Logo"
                className="hero-logo w-auto transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Heading - Left aligned */}
            <h1 className="hero-heading text-white font-extrabold text-left">
              <span className="block">Save Food.</span>
              <span className="block">Save Money.</span>
              <span className="block">Eat Smarter.</span>
            </h1>

            {/* Description - Left aligned */}
            <p className="hero-description text-white/95 text-left">
              Bestby Bites unlocks access to surplus food from top local restaurants, bakeries, cafés, and grocery stores—at up to 80% off.
            </p>

            {/* Newsletter Text - Left aligned */}
            <p className="hero-newsletter text-white/90 text-left">
              Get special offers, meals, and news when you subscribe to our newsletter.
            </p>

            {/* CTA Button - Left aligned */}
            <div className="flex justify-start">
              <button
                onClick={scrollToNewsletter}
                className="hero-button inline-block bg-[#04c55c] text-white rounded-full font-bold hover:bg-[#03a84d] transition-all duration-300 hover:scale-105 shadow-xl active:scale-95 cursor-pointer"
                style={{ animation: 'pulse-glow 2s ease-in-out infinite' }}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout (Side by Side) */}
      <div
        className="hidden lg:block min-h-screen relative overflow-hidden bg-[#013727]"
        style={{
          backgroundImage: "url('/images/NEW-BANNER-BB.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'right center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <style>{`
          @keyframes pulse-glow {
            0%, 100% { box-shadow: 0 0 20px rgba(4, 197, 92, 0.5); }
            50% { box-shadow: 0 0 30px rgba(4, 197, 92, 0.8); }
          }

          /* Desktop (1024px - 1279px) */
          @media (min-width: 1024px) and (max-width: 1279px) {
            .hero-logo {
              height: 100px !important;
            }
            
            .hero-heading {
              font-size: 3.5rem !important;
              line-height: 1.15 !important;
              margin-bottom: 1.5rem !important;
            }
            
            .hero-description {
              font-size: 1.2rem !important;
              line-height: 1.65 !important;
              margin-bottom: 2rem !important;
            }

            .hero-newsletter {
              font-size: 1rem !important;
              line-height: 1.65 !important;
              margin-bottom: 1.5rem !important;
            }
            
            .hero-button {
              font-size: 1.2rem !important;
              padding: 1.1rem 2.2rem !important;
            }
          }

          /* Large Desktop (1280px - 1535px) */
          @media (min-width: 1280px) and (max-width: 1535px) {
            .hero-logo {
              height: 110px !important;
            }
            
            .hero-heading {
              font-size: 4rem !important;
              line-height: 1.15 !important;
              margin-bottom: 1.75rem !important;
            }
            
            .hero-description {
              font-size: 1.3rem !important;
              line-height: 1.65 !important;
              margin-bottom: 2.25rem !important;
            }

            .hero-newsletter {
              font-size: 1.125rem !important;
              line-height: 1.7 !important;
              margin-bottom: 1.75rem !important;
            }
            
            .hero-button {
              font-size: 1.3rem !important;
              padding: 1.2rem 2.4rem !important;
            }
          }

          /* XL Desktop (1536px+) */
          @media (min-width: 1536px) {
            .hero-logo {
              height: 120px !important;
            }
            
            .hero-heading {
              font-size: 4.35rem !important;
              line-height: 1.15 !important;
              margin-bottom: 1.85rem !important;
            }
            
            .hero-description {
              font-size: 1.4rem !important;
              line-height: 1.7 !important;
              margin-bottom: 2.35rem !important;
            }

            .hero-newsletter {
              font-size: 1.2rem !important;
              line-height: 1.75 !important;
              margin-bottom: 2rem !important;
            }
            
            .hero-button {
              font-size: 1.35rem !important;
              padding: 1.25rem 2.5rem !important;
            }
          }
        `}</style>

        {/* Main Content */}
        <div className="relative min-h-screen flex items-center justify-start z-20">
          <div className="w-full px-16 xl:px-24">
            <div className="flex flex-col items-start justify-start">

              {/* Left Content */}
              <div className="flex-1 max-w-3xl w-full">
                {/* Logo */}
                <div className="flex justify-start items-center mb-10">
                  <img
                    src="/images/BEST-BY-BITES-FINAL-LOGO-WHITE.png"
                    alt="Bestby Bites Logo"
                    className="hero-logo w-auto transition-transform duration-300 hover:scale-105"
                  />
                </div>

                {/* Heading */}
                <h1 className="hero-heading text-white font-extrabold text-left">
                  <span className="block">Save Food.</span>
                  <span className="block">Save Money.</span>
                  <span className="block">Eat Smarter.</span>
                </h1>

                {/* Description */}
                <p className="hero-description text-white/95 text-left">
                  Bestby Bites unlocks access to surplus food from top local restaurants, bakeries, cafés, and grocery stores—at up to 80% off.
                </p>

                {/* Newsletter Text */}
                <p className="hero-newsletter text-white/90 text-left">
                  Get special offers, meals, and news when you subscribe to our newsletter.
                </p>

                <div className="flex justify-start">
                  <button
                    onClick={scrollToNewsletter}
                    className="hero-button inline-block bg-[#04c55c] text-white rounded-full font-bold hover:bg-[#03a84d] transition-all duration-300 hover:scale-105 shadow-xl active:scale-95 cursor-pointer"
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

      {/* All other sections */}
      <HowItWorks />
      <div id="launching-soon">
        <Launchingsoon />
      </div>
      <WhyBestbyBites />
      <ForCustomersAndMerchants />
      <FoodWasteIsCostingEveryone />
      <JoinMovement />
      <WhoCanJoin />
      <AppScreenshots />
    </>
  );
}

export default Hero;