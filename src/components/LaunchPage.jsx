import React from 'react';

export default function LaunchPage() {
  return (
    <div className="bg-white flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12 lg:py-16">
      <style>{`
        .launch-highlight {
          background: linear-gradient(135deg, #013727 0%, #025940 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          position: relative;
          display: inline-block;
        }

        .launch-shadow-container {
          position: relative;
          display: inline-block;
          padding: 1rem 2rem;
          border-radius: 20px;
          background: linear-gradient(135deg, rgba(4, 197, 92, 0.08) 0%, rgba(1, 55, 39, 0.05) 100%);
          box-shadow: 
            0 10px 40px rgba(1, 55, 39, 0.15),
            0 0 60px rgba(4, 197, 92, 0.1),
            inset 0 0 30px rgba(4, 197, 92, 0.05);
        }

        /* Mobile adjustments */
        @media (max-width: 640px) {
          .launch-shadow-container {
            padding: 0.75rem 1rem;
            border-radius: 12px;
            box-shadow: 
              0 8px 30px rgba(1, 55, 39, 0.12),
              0 0 40px rgba(4, 197, 92, 0.08);
          }
        }

        @media (min-width: 768px) {
          .launch-shadow-container {
            padding: 1.5rem 3rem;
            border-radius: 24px;
          }
        }

        @media (min-width: 1024px) {
          .launch-shadow-container {
            padding: 2rem 4rem;
            border-radius: 30px;
          }
        }
      `}</style>

      <div className="max-w-7xl w-full text-center">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-black mb-4 sm:mb-5 md:mb-6">
          Good Food. One Click Away.
        </h1>
        
        {/* Bold LAUNCHING SOON with background shadow */}
        <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          <div className="launch-shadow-container">
            <h2 className="launch-highlight text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-black tracking-tight">
              LAUNCHING SOON
            </h2>
          </div>
        </div>
        
        {/* App Store Badges */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 md:gap-6">
          <a href="#" className="hover:opacity-80 hover:scale-105 transition-all duration-300 w-full max-w-[180px] sm:max-w-[200px] md:max-w-[220px] lg:max-w-[240px]">
            <img 
              src="/images/PLAYSTORE1.png" 
              alt="Get it on Google Play"
              className="w-full h-auto object-contain"
            />
          </a>

          <a href="#" className="hover:opacity-80 hover:scale-105 transition-all duration-300 w-full max-w-[180px] sm:max-w-[200px] md:max-w-[220px] lg:max-w-[240px]">
            <img 
              src="/images/APPSTORE1.png" 
              alt="Download on the App Store"
              className="w-full h-auto object-contain"
            />
          </a>
        </div>
      </div>
    </div>
  );
}