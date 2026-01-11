import React from 'react';

export default function LaunchPage() {
  return (
    <div className="bg-white flex items-center justify-center px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-10">
      <div className="max-w-7xl w-full text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-2 sm:mb-3 md:mb-4">
          Good Food. One Click Away.
        </h1>
        
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 md:mb-8" style={{ color: '#013727' }}>
          LAUNCHING SOON
        </h2>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <a href="#" className="hover:opacity-80 transition-opacity">
            <img 
              src="/images/GOOGLE.png" 
              alt="Get it on Google Play"
              className="h-10 sm:h-11 md:h-12 w-auto"
            />
          </a>

          <a href="#" className="hover:opacity-80 transition-opacity">
            <img 
              src="/images/appstore.png" 
              alt="Download on the App Store"
              className="h-10 sm:h-11 md:h-12 w-auto"
            />
          </a>
        </div>
      </div>
    </div>
  );
}