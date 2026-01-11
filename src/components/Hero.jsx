import React, { useState, useEffect } from 'react';
import HowItWorks from './HowItWorks';
import LaunchPage from './LaunchPage';
import Launchingsoon from './Launchingsoon';
import WhyBestbyBites from './WhyBestbyBites';
import BusinessModelSection from './BusinessModelSection';
import FoodWasteIsCostingEveryone from './FoodWasteIsCostingEveryone';
import JoinMovement from './JoinMovement';
import WhoCanJoin from './WhoCanJoin';
import AppScreenshots from './AppScreenshots';
import ForCustomersAndMerchants from './ForCustomersAndMerchants'
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
      {/* Mobile Layout (< 768px) */}
      <div
        id="hero-mobile-section"
        className="block md:hidden relative overflow-hidden bg-[#013727]"
        style={{
          backgroundImage: "url('/images/NEWIMAGEBANNER1.png')",
          backgroundPosition: 'right center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
        }}
      >
        <style>{`
          @keyframes pulse-glow {
            0%, 100% { box-shadow: 0 0 20px rgba(4, 197, 92, 0.5); }
            50% { box-shadow: 0 0 30px rgba(4, 197, 92, 0.8); }
          }

          /* iPhone SE and small mobile (< 376px) */
          @media (max-width: 375px) {
            #hero-mobile-section .mobile-hero-container {
              padding-top: 1.5rem !important;
              padding-bottom: 0 !important;
            }

            #hero-mobile-section .mobile-hero-container .flex-col {
              padding-bottom: 99px !important;
            }

            #hero-mobile-section .hero-logo {
              height: 70px !important;
              margin-bottom: 0.75rem !important;
            }
            
            #hero-mobile-section .hero-heading {
              font-size: 2.4rem !important;
              line-height: 1.15 !important;
              margin-bottom: 0.6rem !important;
              margin-top: 0.8rem !important;
              text-align: center !important;
              width: 100%;
            }
            
            #hero-mobile-section .hero-description {
              font-size: 1rem !important;
              line-height: 1.5 !important;
              margin: 20px !important;
              margin-bottom: 0.75rem !important;
              text-align: center !important;
              width: calc(100% - 40px) !important;
            }

            #hero-mobile-section .hero-newsletter {
              font-size: 0.9rem !important;
              line-height: 1.5 !important;
              margin: 20px !important;
              margin-bottom: 0.75rem !important;
              text-align: center !important;
              width: calc(100% - 40px) !important;
            }
            
            #hero-mobile-section .hero-button {
              font-size: 1.05rem !important;
              padding: 0.85rem 1.75rem !important;
              margin: 20px !important;
            }
          }

          /* iPhone XR and similar (376px - 389px) */
          @media (min-width: 376px) and (max-width: 389px) {
            #hero-mobile-section .mobile-hero-container {
              padding-top: 2rem !important;
              padding-bottom: 0 !important;
            }

            #hero-mobile-section .mobile-hero-container .flex-col {
              padding-bottom: 177px !important;
            }

            #hero-mobile-section .hero-logo {
              height: 80px !important;
              margin-bottom: 1rem !important;
            }
            
            #hero-mobile-section .hero-heading {
              font-size: 2.75rem !important;
              line-height: 1.15 !important;
              margin-bottom: 0.8rem !important;
              margin-top: 1rem !important;
              text-align: center !important;
              width: 100%;
            }
            
            #hero-mobile-section .hero-description {
              font-size: 1.1rem !important;
              line-height: 1.55 !important;
              margin: 20px !important;
              margin-bottom: 0.85rem !important;
              text-align: center !important;
              width: calc(100% - 40px) !important;
            }

            #hero-mobile-section .hero-newsletter {
              font-size: 1rem !important;
              line-height: 1.55 !important;
              margin: 20px !important;
              margin-bottom: 0.85rem !important;
              text-align: center !important;
              width: calc(100% - 40px) !important;
            }
            
            #hero-mobile-section .hero-button {
              font-size: 1.125rem !important;
              padding: 0.9rem 1.8rem !important;
              margin: 20px !important;
            }
          }

          /* iPhone 12 Pro and similar (390px - 639px) */
          @media (min-width: 390px) and (max-width: 639px) {
            #hero-mobile-section .mobile-hero-container {
              padding-top: 2rem !important;
              padding-bottom: 0 !important;
            }

            #hero-mobile-section .mobile-hero-container .flex-col {
              padding-bottom: 129px !important;
            }

            #hero-mobile-section .hero-logo {
              height: 80px !important;
              margin-bottom: 1rem !important;
            }
            
            #hero-mobile-section .hero-heading {
              font-size: 2.75rem !important;
              line-height: 1.15 !important;
              margin-bottom: 0.8rem !important;
              margin-top: 1rem !important;
              text-align: center !important;
              width: 100%;
            }
            
            #hero-mobile-section .hero-description {
              font-size: 1.1rem !important;
              line-height: 1.55 !important;
              margin: 20px !important;
              margin-bottom: 0.85rem !important;
              text-align: center !important;
              width: calc(100% - 40px) !important;
            }

            #hero-mobile-section .hero-newsletter {
              font-size: 1rem !important;
              line-height: 1.55 !important;
              margin: 20px !important;
              margin-bottom: 0.85rem !important;
              text-align: center !important;
              width: calc(100% - 40px) !important;
            }
            
            #hero-mobile-section .hero-button {
              font-size: 1.125rem !important;
              padding: 0.9rem 1.8rem !important;
              margin: 20px !important;
            }
          }

          /* Small Tablet (640px - 767px) */
          @media (min-width: 640px) and (max-width: 767px) {
            #hero-mobile-section .mobile-hero-container {
              padding-top: 2.5rem !important;
              padding-bottom: 0 !important;
            }

            #hero-mobile-section .mobile-hero-container .flex-col {
              padding-bottom: 220px !important;
            }

            #hero-mobile-section .hero-logo {
              height: 90px !important;
              margin-bottom: 1.5rem !important;
            }
            
            #hero-mobile-section .hero-heading {
              font-size: 3rem !important;
              line-height: 1.2 !important;
              margin-bottom: 1rem !important;
              margin-top: 2rem !important;
              text-align: center !important;
              width: 100%;
            }
            
            #hero-mobile-section .hero-description {
              font-size: 1.2rem !important;
              line-height: 1.6 !important;
              margin: 20px !important;
              margin-bottom: 1rem !important;
              text-align: center !important;
              width: calc(100% - 40px) !important;
            }

            #hero-mobile-section .hero-newsletter {
              font-size: 1.05rem !important;
              line-height: 1.6 !important;
              margin: 20px !important;
              margin-bottom: 1rem !important;
              text-align: center !important;
              width: calc(100% - 40px) !important;
            }
            
            #hero-mobile-section .hero-button {
              font-size: 1.2rem !important;
              padding: 0.95rem 2rem !important;
              margin: 20px !important;
            }
          }
        `}</style>

        {/* Content Section */}
        <div className="mobile-hero-container relative flex items-center justify-center z-20 px-5 py-0 sm:px-8">
          <div className="flex flex-col items-center max-w-2xl">
            {/* Logo - Centered on mobile */}
            <div className="flex justify-center items-center w-full">
              <img
                src="/images/BEST-BY-BITES-FINAL-LOGO-WHITE.png"
                alt="Bestby Bites Logo"
                className="hero-logo w-auto transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Heading - Centered */}
            <h1 className="hero-heading text-white font-extrabold text-center">
              <span className="block">Save Food.</span>
              <span className="block">Save Money.</span>
              <span className="block">Eat Smarter.</span>
            </h1>

            {/* Description - Centered with margins */}
            <p className="hero-description text-white/95 text-center mx-5">
              Bestby Bites unlocks access to surplus food from top local restaurants, bakeries, cafés, and grocery stores—at up to 80% off.
            </p>

            {/* Newsletter Text - Centered with margins */}
            <p className="hero-newsletter text-white/90 text-center mx-5">
              Get special offers, meals, and news when you subscribe to our newsletter.
            </p>

            {/* CTA Button - Centered with margins */}
            <div className="flex justify-center w-full mt-5">
              <button
                onClick={scrollToNewsletter}
                className="hero-button inline-block bg-[#04c55c] text-white rounded-full font-bold hover:bg-[#03a84d] transition-all duration-300 hover:scale-105 shadow-xl active:scale-95 cursor-pointer mx-5"
                style={{ animation: 'pulse-glow 2s ease-in-out infinite' }}
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tablet Layout (768px - 1023px) - iPad Mini/Air */}
      <div
        id="hero-tablet-section"
        className="hidden md:block lg:hidden relative overflow-hidden bg-[#013727]"
        style={{
          backgroundImage: "url('/images/IPADNEWSCREEN2345.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <style>{`
          /* iPad Mini & Air (768px - 1023px) */
          @media (min-width: 768px) and (max-width: 1023px) {
            #hero-tablet-section .hero-logo {
              height: 95px !important;
              min-height: 67px;
            }
            
            #hero-tablet-section .hero-heading {
              font-size: 2.8rem !important;
              line-height: 1.15 !important;
              margin-bottom: 1.3rem !important;
              margin-top: 2.25rem !important;
            }
            
            #hero-tablet-section .hero-description {
              font-size: 21px !important;
              line-height: 1.6 !important;
              margin-bottom: 1.75rem !important;
            }

            #hero-tablet-section .hero-newsletter {
              font-size: 14px !important;
              line-height: 1.6 !important;
              margin-bottom: 1.25rem !important;
            }
            
            #hero-tablet-section .hero-button {
              font-size: 1.1rem !important;
              padding: 0.95rem 1.9rem !important;
            }
          }
        `}</style>

        {/* Main Content - Tablet */}
        <div className="relative flex items-center justify-start z-20" style={{ minHeight: '57vh' }}>
          <div className="w-full px-16">
            <div className="flex flex-col items-start justify-start">

              {/* Left Content */}
              <div className="flex-1 max-w-2xl w-full">
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

      {/* iPad Pro Layout (1024px - 1366px) - CENTERED CONTENT AT TOP */}
      <div
        id="hero-ipad-pro-section"
        className="hidden lg:block xl:hidden relative overflow-hidden bg-[#013727]"
        style={{
          backgroundImage: "url('/images/pro.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <style>{`
          /* iPad Pro (1024px - 1366px) - Centered Layout at Top with Padding */
          @media (min-width: 1024px) and (max-width: 1366px) {
            #hero-ipad-pro-section .hero-logo {
              height: 189px !important;
            }
            
            #hero-ipad-pro-section .hero-heading {
              font-size: 67px !important;
              line-height: 1.15 !important;
              margin-bottom: 1.5rem !important;
              margin-top: 2.5rem !important;
              text-align: center !important;
              padding-left: 2rem !important;
              padding-right: 2rem !important;
            }
            
            #hero-ipad-pro-section .hero-description {
              font-size: 33px !important;
              line-height: 1.65 !important;
              margin-bottom: 1.85rem !important;
              text-align: center !important;
              padding-left: 3rem !important;
              padding-right: 3rem !important;
            }

            #hero-ipad-pro-section .hero-newsletter {
              font-size: 29px !important;
              line-height: 1.65 !important;
              margin-bottom: 1.65rem !important;
              text-align: center !important;
              padding-left: 3rem !important;
              padding-right: 3rem !important;
            }
            
            #hero-ipad-pro-section .hero-button {
              font-size: 39px !important;
              padding: 1.15rem 2.3rem !important;
            }
          }
        `}</style>

        {/* Main Content - iPad Pro - CENTERED AT TOP */}
        <div className="relative flex items-start justify-center z-20 pt-12" style={{ minHeight: '101vh' }}>
          <div className="w-full px-20">
            <div className="flex flex-col items-center justify-start">

              {/* Centered Content */}
              <div className="flex-1 max-w-3xl w-full">
                {/* Logo - CENTERED */}
                <div className="flex justify-center items-center mb-10">
                  <img
                    src="/images/BEST-BY-BITES-FINAL-LOGO-WHITE.png"
                    alt="Bestby Bites Logo"
                    className="hero-logo w-auto transition-transform duration-300 hover:scale-105"
                  />
                </div>

                {/* Heading - CENTERED with PADDING */}
                <h1 className="hero-heading text-white font-extrabold text-center">
                  <span className="block">Save Food.</span>
                  <span className="block">Save Money.</span>
                  <span className="block">Eat Smarter.</span>
                </h1>

                {/* Description - CENTERED with PADDING */}
                <p className="hero-description text-white/95 text-center">
                  Bestby Bites unlocks access to surplus food from top local restaurants, bakeries, cafés, and grocery stores—at up to 80% off.
                </p>

                {/* Newsletter Text - CENTERED with PADDING */}
                <p className="hero-newsletter text-white/90 text-center">
                  Get special offers, meals, and news when you subscribe to our newsletter.
                </p>

                {/* Button - CENTERED */}
                <div className="flex justify-center">
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

      {/* Desktop Layout (1367px+) - Original Desktop Image */}
      <div
        id="hero-desktop-section"
        className="hidden xl:block min-h-screen relative overflow-hidden bg-[#013727]"
        style={{
          backgroundImage: "url('/images/NEW-BANNER-BB.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'right center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <style>{`
          /* Large Desktop (1367px - 1535px) */
          @media (min-width: 1367px) and (max-width: 1535px) {
            #hero-desktop-section .hero-logo {
              height: 110px !important;
            }
            
            #hero-desktop-section .hero-heading {
              font-size: 4rem !important;
              line-height: 1.15 !important;
              margin-bottom: 1.75rem !important;
            }
            
            #hero-desktop-section .hero-description {
              font-size: 1.3rem !important;
              line-height: 1.65 !important;
              margin-bottom: 2.25rem !important;
            }

            #hero-desktop-section .hero-newsletter {
              font-size: 1.125rem !important;
              line-height: 1.7 !important;
              margin-bottom: 1.75rem !important;
            }
            
            #hero-desktop-section .hero-button {
              font-size: 1.3rem !important;
              padding: 1.2rem 2.4rem !important;
            }
          }

          /* XL Desktop (1536px+) */
          @media (min-width: 1536px) {
            #hero-desktop-section .hero-logo {
              height: 120px !important;
            }
            
            #hero-desktop-section .hero-heading {
              font-size: 4.35rem !important;
              line-height: 1.15 !important;
              margin-bottom: 1.85rem !important;
            }
            
            #hero-desktop-section .hero-description {
              font-size: 1.4rem !important;
              line-height: 1.7 !important;
              margin-bottom: 2.35rem !important;
            }

            #hero-desktop-section .hero-newsletter {
              font-size: 1.2rem !important;
              line-height: 1.75 !important;
              margin-bottom: 2rem !important;
            }
            
            #hero-desktop-section .hero-button {
              font-size: 1.35rem !important;
              padding: 1.25rem 2.5rem !important;
            }
          }
        `}</style>

        {/* Main Content - Desktop */}
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
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* All other sections */}
      <LaunchPage />
      <HowItWorks />
      <div id="launching-soon">
        <Launchingsoon />
      </div>
      <WhyBestbyBites />
      <ForCustomersAndMerchants />
      <BusinessModelSection />
      <FoodWasteIsCostingEveryone />
      <JoinMovement />
      <WhoCanJoin />
      <AppScreenshots />
    </>
  );
}

export default Hero;