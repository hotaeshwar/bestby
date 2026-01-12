import React from 'react';

export default function LaunchPage() {
  return (
    <div className="relative min-h-[44vh] sm:min-h-[47vh] lg:min-h-[45vh] xl:min-h-[45vh] bg-white flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-emerald-50 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-green-50 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="relative max-w-7xl w-full text-center z-10">
        {/* Top heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-8 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-20 tracking-tight leading-tight">
          Good Food. One Click Away.
        </h1>
        
        {/* LAUNCHING SOON - Center of Attraction */}
        <div className="mb-10 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24">
          <div className="relative inline-block">
            {/* Background glow */}
            <div className="absolute inset-0 scale-105">
              <div className="w-full h-full rounded-3xl bg-gradient-to-r from-emerald-500/10 via-green-500/10 to-teal-500/10 blur-2xl"></div>
            </div>
            
            {/* Main text container */}
            <div className="relative bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl px-6 py-4 sm:px-8 sm:py-5 md:px-10 md:py-6 lg:px-14 lg:py-8 xl:px-20 xl:py-10">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-none" style={{color: '#013727'}}>
                LAUNCHING SOON
              </h2>
            </div>
          </div>
          
          {/* Subtitle */}
          <p className="mt-4 sm:mt-6 md:mt-7 lg:mt-8 xl:mt-10 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-800 font-bold tracking-wide">
            Get ready to save food and money
          </p>
        </div>
        
        {/* App Store Badges */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          <a 
            href="#" 
            className="group relative w-full max-w-[160px] sm:max-w-[180px] md:max-w-[200px] lg:max-w-[220px] xl:max-w-[240px] transition-transform duration-300 hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <img 
              src="/images/PLAYSTORE1.png" 
              alt="Get it on Google Play"
              className="relative w-full h-auto object-contain drop-shadow-lg"
              onError={(e) => {
                e.target.src = "https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg";
              }}
            />
          </a>

          <a 
            href="#" 
            className="group relative w-full max-w-[160px] sm:max-w-[180px] md:max-w-[200px] lg:max-w-[220px] xl:max-w-[240px] transition-transform duration-300 hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <img 
              src="/images/APPSTORE1.png" 
              alt="Download on the App Store"
              className="relative w-full h-auto object-contain drop-shadow-lg"
              onError={(e) => {
                e.target.src = "https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg";
              }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}