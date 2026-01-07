import React, { useEffect, useState } from 'react';
import HowItWorks from './HowItWorks';
import Launchingsoon from './Launchingsoon';
import WhyBestbyBites from './WhyBestbyBites';
import ForCustomersAndMerchants from './ForCustomersAndMerchants';
import FoodWasteIsCostingEveryone from './FoodWasteIsCostingEveryone';
import WhoCanJoin from './WhoCanJoin';
import BusinessModelSection from './BusinessModelSection';
import AppScreenshots from './AppScreenshots';

function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <>
      {/* Hero Section with Dark Green Background */}
      <div className="relative min-h-screen bg-[#013727] overflow-hidden">
        {/* Main Content Container */}
        <div className="relative z-10 flex items-center min-h-screen px-6 sm:px-8 lg:px-16 xl:px-24 pt-20 pb-16">
          {/* Left Side Content */}
          <div className="max-w-3xl">
            {/* Logo - Aligned Left */}
            <div
              className={`transition-all duration-1000 mb-8 sm:mb-10 md:mb-12 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              <img
                src="/images/BEST-BY-BITES-FINAL-LOGO-WHITE.png"
                alt="Bestby Bites Logo"
                className="h-32 sm:h-36 md:h-40 lg:h-36 w-auto"
              />
            </div>

            {/* FOOD MARKETPLACE - Aligned Left */}
            <div
              className={`transition-all duration-1000 delay-200 mb-4 sm:mb-6 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              <p className="text-emerald-300 font-semibold tracking-[0.3em] text-base sm:text-lg md:text-xl lg:text-base">
                FOOD MARKETPLACE
              </p>
            </div>

            {/* Main Headlines - Aligned Left */}
            <div
              className={`transition-all duration-1000 delay-400 mb-6 sm:mb-8 lg:mb-6 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              <h1 className="text-white font-bold leading-tight">
                <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-6xl mb-2">
                  Save Food.
                </span>
                <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-6xl mb-2">
                  Save Money.
                </span>
                <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-6xl text-emerald-400">
                  Eat Smarter.
                </span>
              </h1>
            </div>

            {/* Description - Aligned Left */}
            <div
              className={`transition-all duration-1000 delay-600 mb-8 sm:mb-10 lg:mb-8 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              <p className="text-emerald-50 text-lg sm:text-xl md:text-2xl lg:text-xl leading-relaxed max-w-2xl">
                Bestby Bites unlocks access to surplus food from top local restaurants, bakeries, cafes, 
                and grocery stores—at up to 80% off.
              </p>
            </div>

            {/* CTA Button - Aligned Left */}
            <div
              className={`transition-all duration-1000 delay-800 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 sm:py-5 lg:py-4 px-10 sm:px-12 lg:px-10 rounded-full text-xl sm:text-2xl lg:text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl">
                Exclusive Offer
              </button>
            </div>
          </div>
        </div>

        {/* Right Side Food Images */}
        {/* Wings Image - Top Right */}
        <div
          className={`absolute top-20 right-10 sm:right-16 lg:right-24 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}
        >
          <img
            src="/images/WINGS.png"
            alt="Wings"
            className="w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80 h-auto object-contain drop-shadow-2xl"
          />
        </div>

        {/* Pizza Image - Bottom Right */}
        <div
          className={`absolute bottom-20 right-10 sm:right-16 lg:right-24 transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}
        >
          <img
            src="/images/pizza.png"
            alt="Pizza"
            className="w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80 h-auto object-contain drop-shadow-2xl"
          />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-400 rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-emerald-500 rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-emerald-300 rounded-full opacity-5 blur-2xl"></div>
          <div className="absolute top-1/3 right-1/4 w-28 h-28 bg-emerald-400 rounded-full opacity-5 blur-2xl"></div>
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