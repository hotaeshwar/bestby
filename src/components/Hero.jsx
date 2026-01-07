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

          @keyframes rotateFloatTopRight {
            0% { 
              transform: rotate(0deg) translateY(0px) translateX(0px); 
            }
            25% { 
              transform: rotate(5deg) translateY(-8px) translateX(-8px); 
            }
            50% { 
              transform: rotate(0deg) translateY(-12px) translateX(-12px); 
            }
            75% { 
              transform: rotate(-5deg) translateY(-8px) translateX(-8px); 
            }
            100% { 
              transform: rotate(0deg) translateY(0px) translateX(0px); 
            }
          }

          @keyframes rotateFloatBottomLeft {
            0% { 
              transform: rotate(0deg) translateY(0px) translateX(0px); 
            }
            25% { 
              transform: rotate(-5deg) translateY(8px) translateX(8px); 
            }
            50% { 
              transform: rotate(0deg) translateY(12px) translateX(12px); 
            }
            75% { 
              transform: rotate(5deg) translateY(8px) translateX(8px); 
            }
            100% { 
              transform: rotate(0deg) translateY(0px) translateX(0px); 
            }
          }

          @keyframes floatTopLeft {
            0% { 
              transform: translateY(0px) translateX(0px); 
            }
            25% { 
              transform: translateY(-12px) translateX(8px); 
            }
            50% { 
              transform: translateY(-18px) translateX(12px); 
            }
            75% { 
              transform: translateY(-12px) translateX(8px); 
            }
            100% { 
              transform: translateY(0px) translateX(0px); 
            }
          }

          @keyframes floatBottomRight {
            0% { 
              transform: translateY(0px) translateX(0px); 
            }
            25% { 
              transform: translateY(12px) translateX(-8px); 
            }
            50% { 
              transform: translateY(18px) translateX(-12px); 
            }
            75% { 
              transform: translateY(12px) translateX(-8px); 
            }
            100% { 
              transform: translateY(0px) translateX(0px); 
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

          .food-image-top-right {
            animation: rotateFloatTopRight 6s ease-in-out infinite;
          }

          .food-image-bottom-left {
            animation: rotateFloatBottomLeft 6s ease-in-out infinite;
          }

          .food-image-top-left {
            animation: floatTopLeft 5s ease-in-out infinite;
          }

          .food-image-bottom-right {
            animation: floatBottomRight 5s ease-in-out infinite;
          }

          /* iPhone SE and small mobile (< 376px) */
          @media (max-width: 375px) {
            .food-image-top-right,
            .food-image-bottom-left,
            .food-image-top-left,
            .food-image-bottom-right {
              width: 110px !important;
              height: 110px !important;
            }
            
            .hero-logo {
              height: 100px !important;
            }
            
            .hero-heading {
              font-size: 2.25rem !important;
              line-height: 1.15 !important;
              margin-bottom: 1.25rem !important;
            }
            
            .hero-description {
              font-size: 0.9rem !important;
              line-height: 1.5 !important;
              margin-bottom: 1.75rem !important;
              padding-left: 0.75rem !important;
              padding-right: 0.75rem !important;
            }
            
            .hero-button {
              font-size: 0.95rem !important;
              padding: 0.9rem 1.8rem !important;
            }
            
            .hero-content-wrapper {
              max-width: 92% !important;
            }
            
            .hero-logo-wrapper {
              margin-bottom: 2.5rem !important;
            }
          }

          /* Mobile (376px - 639px) */
          @media (min-width: 376px) and (max-width: 639px) {
            .food-image-top-right,
            .food-image-bottom-left,
            .food-image-top-left,
            .food-image-bottom-right {
              width: 130px !important;
              height: 130px !important;
            }
          }

          /* Small (640px - 767px) */
          @media (min-width: 640px) and (max-width: 767px) {
            .food-image-top-right,
            .food-image-bottom-left,
            .food-image-top-left,
            .food-image-bottom-right {
              width: 170px !important;
              height: 170px !important;
            }
          }

          /* iPad Mini (768px - 819px) */
          @media (min-width: 768px) and (max-width: 819px) {
            .food-image-top-right,
            .food-image-bottom-left,
            .food-image-top-left,
            .food-image-bottom-right {
              width: 210px !important;
              height: 210px !important;
            }
            
            .hero-logo {
              height: 165px !important;
            }
            
            .hero-heading {
              font-size: 3.5rem !important;
              line-height: 1.1 !important;
              margin-bottom: 1.75rem !important;
            }
            
            .hero-description {
              font-size: 1.2rem !important;
              line-height: 1.6 !important;
              margin-bottom: 2.25rem !important;
            }
            
            .hero-button {
              font-size: 1.2rem !important;
              padding: 1.1rem 2.2rem !important;
            }
            
            .hero-content-wrapper {
              max-width: 82% !important;
            }
            
            .hero-logo-wrapper {
              margin-bottom: 3rem !important;
            }
          }

          /* iPad Air (820px - 820px) */
          @media (min-width: 820px) and (max-width: 820px) {
            .food-image-top-right,
            .food-image-bottom-left,
            .food-image-top-left,
            .food-image-bottom-right {
              width: 230px !important;
              height: 230px !important;
            }
            
            .hero-logo {
              height: 185px !important;
            }
            
            .hero-heading {
              font-size: 3.95rem !important;
              line-height: 1.1 !important;
              margin-bottom: 1.9rem !important;
            }
            
            .hero-description {
              font-size: 1.35rem !important;
              line-height: 1.65 !important;
              margin-bottom: 2.4rem !important;
            }
            
            .hero-button {
              font-size: 1.35rem !important;
              padding: 1.25rem 2.5rem !important;
            }
            
            .hero-content-wrapper {
              max-width: 80% !important;
            }
            
            .hero-logo-wrapper {
              margin-bottom: 3.3rem !important;
            }
          }

          /* iPad Pro (821px - 1024px) */
          @media (min-width: 821px) and (max-width: 1024px) {
            .food-image-top-right,
            .food-image-bottom-left,
            .food-image-top-left,
            .food-image-bottom-right {
              width: 260px !important;
              height: 260px !important;
            }
            
            .hero-logo {
              height: 240px !important;
            }
            
            .hero-heading {
              font-size: 5.5rem !important;
              line-height: 1.05 !important;
              margin-bottom: 2.5rem !important;
            }
            
            .hero-description {
              font-size: 1.75rem !important;
              line-height: 1.75 !important;
              margin-bottom: 3rem !important;
            }
            
            .hero-button {
              font-size: 1.65rem !important;
              padding: 1.5rem 3rem !important;
            }
            
            .hero-content-wrapper {
              max-width: 85% !important;
            }
            
            .hero-logo-wrapper {
              margin-bottom: 4rem !important;
            }
          }

          /* Desktop (1025px - 1279px) */
          @media (min-width: 1025px) and (max-width: 1279px) {
            .food-image-top-right,
            .food-image-bottom-left {
              width: 280px !important;
              height: 280px !important;
            }
            
            .food-image-top-left,
            .food-image-bottom-right {
              width: 280px !important;
              height: 280px !important;
            }
            
            .food-image-bottom-right {
              bottom: 80px !important;
            }
          }

          /* Large Desktop (1280px - 1535px) */
          @media (min-width: 1280px) and (max-width: 1535px) {
            .food-image-top-right,
            .food-image-bottom-left {
              width: 310px !important;
              height: 310px !important;
            }
            
            .food-image-top-left,
            .food-image-bottom-right {
              width: 310px !important;
              height: 310px !important;
            }
            
            .food-image-bottom-right {
              bottom: 100px !important;
            }
          }

          /* XL Desktop (1536px+) */
          @media (min-width: 1536px) {
            .food-image-top-right,
            .food-image-bottom-left {
              width: 350px !important;
              height: 350px !important;
            }
            
            .food-image-top-left,
            .food-image-bottom-right {
              width: 350px !important;
              height: 350px !important;
            }
            
            .food-image-bottom-right {
              bottom: 120px !important;
            }
          }
        `}</style>

        {/* Top Right Corner - Wings (ROTATE IN CORNER) */}
        <div className="absolute top-0 right-0 food-image-top-right w-36 h-36 sm:w-48 sm:h-48" style={{ zIndex: 1 }}>
          <img 
            src="/images/WINGS.png" 
            alt="Chicken Wings"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Bottom Left Corner - Pizza (ROTATE IN CORNER) */}
        <div className="absolute bottom-0 left-0 food-image-bottom-left w-36 h-36 sm:w-48 sm:h-48" style={{ zIndex: 1 }}>
          <img 
            src="/images/pizza.png" 
            alt="Pizza"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Top Left Corner - Vegetables (FLOAT WITH SPACE) */}
        <div className="absolute top-0 left-0 food-image-top-left w-36 h-36 sm:w-48 sm:h-48" style={{ zIndex: 1 }}>
          <img 
            src="/images/assortment-different-fresh-vegetables-Photoroom.png" 
            alt="Fresh Vegetables"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Bottom Right Corner - Grocery (FLOAT WITH SPACE) */}
        <div className="absolute bottom-0 right-0 food-image-bottom-right w-36 h-36 sm:w-48 sm:h-48" style={{ zIndex: 1 }}>
          <img 
            src="/images/grocery.png" 
            alt="Grocery Items"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Main Content */}
        <div className="relative min-h-screen flex items-center justify-center z-20">
          <div className="w-full text-center px-6 py-12 sm:px-8">
            <div className="hero-content-wrapper max-w-[95%] sm:max-w-[85%] xl:max-w-[65%] 2xl:max-w-[60%] mx-auto">
              
                {/* Logo */}
                <div className="flex justify-center items-center hero-logo-wrapper mb-10 sm:mb-12 xl:mb-16 logo-animate">
                  <img 
                    src="/images/BEST-BY-BITES-FINAL-LOGO-WHITE.png" 
                    alt="Bestby Bites Logo" 
                    className="hero-logo w-auto transition-transform duration-300 hover:scale-105 h-32 sm:h-36 xl:h-48 2xl:h-52"
                  />
                </div>

                {/* Heading */}
                <h1 className="hero-heading text-white font-extrabold heading-animate mb-6 sm:mb-7 xl:mb-10 text-5xl sm:text-5xl xl:text-[4.25rem] 2xl:text-[4.5rem] leading-tight">
                  <span className="block">Save Food.</span>
                  <span className="block">Save Money.</span>
                  <span className="block">Eat Smarter.</span>
                </h1>

                {/* Description */}
                <p className="hero-description text-white/95 mx-auto max-w-3xl description-animate mb-8 sm:mb-9 xl:mb-12 text-lg sm:text-lg xl:text-[1.1875rem] 2xl:text-xl leading-relaxed px-4">
                  Bestby Bites unlocks access to surplus food from top local restaurants, bakeries, cafés, and grocery stores—at up to 80% off.
                </p>

                {/* CTA Button */}
                <div className="button-animate">
                  <a 
                    href="#waitlist"
                    className="hero-button inline-block bg-[#04c55c] text-white rounded-full font-bold hover:bg-[#03a84d] transition-all duration-300 hover:scale-105 shadow-xl active:scale-95 text-lg sm:text-lg xl:text-[1.125rem] 2xl:text-xl px-8 py-4 sm:px-8 sm:py-4 xl:px-10 xl:py-[1.125rem] 2xl:px-11 2xl:py-5"
                    style={{ animation: 'pulse-glow 2s ease-in-out infinite' }}
                  >
                    Join now
                  </a>
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