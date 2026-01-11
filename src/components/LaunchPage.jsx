import React from 'react';

export default function LaunchPage() {
  return (
    <div className="bg-white flex items-center justify-center px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-10">
      <div className="max-w-7xl w-full text-center">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-black mb-2 sm:mb-3 md:mb-4">
          Good Food. One Click Away.
        </h1>
        
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 sm:mb-10 md:mb-12 lg:mb-14" style={{ color: '#013727' }}>
          LAUNCHING SOON
        </h2>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6">
          <a href="#" className="hover:opacity-80 transition-opacity w-full max-w-[160px] sm:max-w-[180px] md:max-w-[200px]">
            <img 
              src="/images/GOOGLE.png" 
              alt="Get it on Google Play"
              className="w-full h-auto object-contain"
            />
          </a>

          <a href="#" className="hover:opacity-80 transition-opacity w-full max-w-[160px] sm:max-w-[180px] md:max-w-[200px]">
            <img 
              src="/images/appstore.png" 
              alt="Download on the App Store"
              className="w-full h-auto object-contain"
            />
          </a>
        </div>
      </div>
    </div>
  );
}