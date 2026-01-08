import React, { useState, useEffect } from 'react';
import HowItWorks from './HowItWorks';
import Launchingsoon from './Launchingsoon';
import WhyBestbyBites from './WhyBestbyBites';
import ForCustomersAndMerchants from './ForCustomersAndMerchants';
import FoodWasteIsCostingEveryone from './FoodWasteIsCostingEveryone';
import WhoCanJoin from './WhoCanJoin';
import BusinessModelSection from './BusinessModelSection';
import AppScreenshots from './AppScreenshots';

function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      <div className="min-h-screen relative overflow-hidden bg-[#013727]">
        
        <style>{`
          @keyframes pulse-glow {
            0%, 100% { box-shadow: 0 0 20px rgba(4, 197, 92, 0.5); }
            50% { box-shadow: 0 0 30px rgba(4, 197, 92, 0.8); }
          }

          @keyframes fadeInUp {
            from { 
              opacity: 0; 
              transform: translateY(30px); 
            }
            to { 
              opacity: 1; 
              transform: translateY(0); 
            }
          }

          @keyframes fadeInScale {
            from { 
              opacity: 0; 
              transform: scale(0.9); 
            }
            to { 
              opacity: 1; 
              transform: scale(1); 
            }
          }

          @keyframes rotateFloatWings {
            0% { 
              transform: rotate(0deg) translateY(0px); 
            }
            25% { 
              transform: rotate(-8deg) translateY(-12px); 
            }
            50% { 
              transform: rotate(0deg) translateY(-18px); 
            }
            75% { 
              transform: rotate(8deg) translateY(-12px); 
            }
            100% { 
              transform: rotate(0deg) translateY(0px); 
            }
          }

          .logo-animate {
            animation: fadeInScale 0.8s ease-out forwards;
          }

          .heading-animate {
            animation: fadeInUp 0.8s ease-out 0.2s forwards;
            opacity: 0;
          }

          .description-animate {
            animation: fadeInUp 0.8s ease-out 0.4s forwards;
            opacity: 0;
          }

          .button-animate {
            animation: fadeInUp 0.8s ease-out 0.6s forwards;
            opacity: 0;
          }

          .wings-animate {
            animation: fadeInScale 0.8s ease-out 0.3s forwards, rotateFloatWings 7s ease-in-out 0.8s infinite;
            opacity: 0;
          }

          /* iPhone SE and small mobile (< 376px) */
          @media (max-width: 375px) {
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
              line-height: 1.5 !important;
              margin-bottom: 1.25rem !important;
            }
            
            .hero-button {
              font-size: 0.95rem !important;
              padding: 0.8rem 1.6rem !important;
            }

            .wings-image-mobile {
              width: 240px !important;
              height: auto !important;
              max-width: 90% !important;
            }

            .mobile-image-wrapper {
              margin-top: 1.5rem !important;
              padding-bottom: 1rem !important;
            }
          }

          /* Mobile (376px - 639px) */
          @media (min-width: 376px) and (max-width: 639px) {
            .hero-logo {
              height: 95px !important;
            }
            
            .hero-heading {
              font-size: 2.3rem !important;
              line-height: 1.2 !important;
              margin-bottom: 1.2rem !important;
            }
            
            .hero-description {
              font-size: 0.98rem !important;
              line-height: 1.55 !important;
              margin-bottom: 1.5rem !important;
            }
            
            .hero-button {
              font-size: 1rem !important;
              padding: 0.85rem 1.75rem !important;
            }

            .wings-image-mobile {
              width: 280px !important;
              height: auto !important;
              max-width: 85% !important;
            }

            .mobile-image-wrapper {
              margin-top: 2rem !important;
              padding-bottom: 1.5rem !important;
            }
          }

          /* Small (640px - 767px) */
          @media (min-width: 640px) and (max-width: 767px) {
            .hero-logo {
              height: 110px !important;
            }
            
            .hero-heading {
              font-size: 2.6rem !important;
              line-height: 1.2 !important;
              margin-bottom: 1.5rem !important;
            }
            
            .hero-description {
              font-size: 1.05rem !important;
              line-height: 1.6 !important;
              margin-bottom: 1.75rem !important;
            }
            
            .hero-button {
              font-size: 1.1rem !important;
              padding: 0.95rem 1.9rem !important;
            }

            .wings-image-mobile {
              width: 320px !important;
              height: auto !important;
            }

            .mobile-image-wrapper {
              margin-top: 2.5rem !important;
              padding-bottom: 2rem !important;
            }
          }

          /* iPad Mini (768px - 819px) */
          @media (min-width: 768px) and (max-width: 819px) {
            .hero-logo {
              height: 120px !important;
            }
            
            .hero-heading {
              font-size: 3rem !important;
              line-height: 1.15 !important;
              margin-bottom: 1.5rem !important;
            }
            
            .hero-description {
              font-size: 1.15rem !important;
              line-height: 1.6 !important;
              margin-bottom: 1.85rem !important;
            }
            
            .hero-button {
              font-size: 1.15rem !important;
              padding: 1rem 2rem !important;
            }

            .wings-image-mobile {
              width: 340px !important;
              height: auto !important;
              max-width: 80% !important;
            }

            .mobile-image-wrapper {
              margin-top: 2.5rem !important;
              padding-bottom: 2rem !important;
            }
          }

          /* iPad Air (820px - 820px) */
          @media (min-width: 820px) and (max-width: 820px) {
            .hero-logo {
              height: 125px !important;
            }
            
            .hero-heading {
              font-size: 3.2rem !important;
              line-height: 1.15 !important;
              margin-bottom: 1.5rem !important;
            }
            
            .hero-description {
              font-size: 1.2rem !important;
              line-height: 1.6 !important;
              margin-bottom: 1.9rem !important;
            }
            
            .hero-button {
              font-size: 1.2rem !important;
              padding: 1.05rem 2.1rem !important;
            }

            .wings-image-mobile {
              width: 360px !important;
              height: auto !important;
              max-width: 78% !important;
            }

            .mobile-image-wrapper {
              margin-top: 2.5rem !important;
              padding-bottom: 2rem !important;
            }
          }

          /* iPad Pro (821px - 1024px) */
          @media (min-width: 821px) and (max-width: 1024px) {
            .hero-logo {
              height: 140px !important;
            }
            
            .hero-heading {
              font-size: 3.5rem !important;
              line-height: 1.1 !important;
              margin-bottom: 1.6rem !important;
            }
            
            .hero-description {
              font-size: 1.3rem !important;
              line-height: 1.65 !important;
              margin-bottom: 2rem !important;
            }
            
            .hero-button {
              font-size: 1.3rem !important;
              padding: 1.1rem 2.2rem !important;
            }

            .wings-image {
              width: 380px !important;
              height: auto !important;
            }
          }

          /* Desktop (1025px - 1279px) */
          @media (min-width: 1025px) and (max-width: 1279px) {
            .hero-logo {
              height: 100px !important;
            }
            
            .hero-heading {
              font-size: 3.75rem !important;
              line-height: 1.15 !important;
              margin-bottom: 1.75rem !important;
            }
            
            .hero-description {
              font-size: 1.25rem !important;
              line-height: 1.65 !important;
              margin-bottom: 2.25rem !important;
            }
            
            .hero-button {
              font-size: 1.25rem !important;
              padding: 1.15rem 2.3rem !important;
            }

            .wings-image {
              width: 480px !important;
              height: auto !important;
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
            
            .hero-button {
              font-size: 1.3rem !important;
              padding: 1.2rem 2.4rem !important;
            }

            .wings-image {
              width: 540px !important;
              height: auto !important;
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
            
            .hero-button {
              font-size: 1.35rem !important;
              padding: 1.25rem 2.5rem !important;
            }

            .wings-image {
              width: 600px !important;
              height: auto !important;
            }
          }
        `}</style>

        {/* Main Content */}
        <div className="relative min-h-screen flex items-center justify-center z-20">
          <div className="w-full px-5 py-8 sm:px-8 lg:px-16 xl:px-24">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 xl:gap-16">
              
              {/* Left Content */}
              <div className="flex-1 max-w-3xl w-full">
                {/* Logo */}
                <div className="flex justify-start items-center mb-6 sm:mb-8 lg:mb-10 logo-animate">
                  <img 
                    src="/images/BEST-BY-BITES-FINAL-LOGO-WHITE.png" 
                    alt="Bestby Bites Logo" 
                    className="hero-logo w-auto transition-transform duration-300 hover:scale-105"
                  />
                </div>

                {/* Heading */}
                <h1 className="hero-heading text-white font-extrabold heading-animate text-left">
                  <span className="block">Save Food.</span>
                  <span className="block">Save Money.</span>
                  <span className="block">Eat Smarter.</span>
                </h1>

                {/* Description */}
                <p className="hero-description text-white/95 description-animate text-left">
                  Bestby Bites unlocks access to surplus food from top local restaurants, bakeries, cafés, and grocery stores—at up to 80% off.
                </p>

                {/* CTA Button */}
                <div className="button-animate flex justify-start">
                  <a 
                    href="#waitlist"
                    className="hero-button inline-block bg-[#04c55c] text-white rounded-full font-bold hover:bg-[#03a84d] transition-all duration-300 hover:scale-105 shadow-xl active:scale-95"
                    style={{ animation: 'pulse-glow 2s ease-in-out infinite' }}
                  >
                    Join now
                  </a>
                </div>

                {/* Mobile/Tablet Wings Image - Below Button */}
                <div className="flex lg:hidden justify-center w-full wings-animate mobile-image-wrapper">
                  <img 
                    src="/images/WINGS.png" 
                    alt="Chicken Wings"
                    className="wings-image-mobile object-contain"
                  />
                </div>
              </div>

              {/* Desktop Wings Image - Right Side */}
              <div className="flex-shrink-0 wings-animate hidden lg:flex">
                <img 
                  src="/images/WINGS.png" 
                  alt="Chicken Wings"
                  className="wings-image w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* All other sections */}
      <HowItWorks />
      <Launchingsoon />
      <WhyBestbyBites />
      <ForCustomersAndMerchants />
      <FoodWasteIsCostingEveryone />
      <WhoCanJoin />
      <BusinessModelSection />
      <AppScreenshots />
    </>
  );
}

export default Hero;
