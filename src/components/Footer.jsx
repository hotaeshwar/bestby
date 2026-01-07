import { useState, useEffect } from 'react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation on mount
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    // Re-trigger animation on scroll
    const handleScroll = () => {
      setIsVisible(false);
      setTimeout(() => setIsVisible(true), 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Re-trigger animation on component update
  useEffect(() => {
    const handleRefresh = () => {
      setIsVisible(false);
      setTimeout(() => setIsVisible(true), 100);
    };

    window.addEventListener('focus', handleRefresh);
    return () => window.removeEventListener('focus', handleRefresh);
  }, []);

  return (
    <footer className="relative w-full min-h-screen overflow-hidden bg-[#013727]">
      {/* Background Image - More Visible */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/FOOTER.jpg')`,
          opacity: 0.5
        }}
      ></div>

      {/* Subtle Dark Overlay - Less opacity to show image more */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#013727]/60 via-[#014d35]/40 to-[#013727]/60"></div>

      {/* Decorative Light Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#04c55c] rounded-full filter blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#04c55c] rounded-full filter blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full h-full min-h-screen flex flex-col justify-between px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-12 sm:py-16 md:py-20 lg:py-24">
        {/* Text Content - Centered Vertically */}
        <div className="flex-1 flex items-center justify-center">
          <div 
            className={`
              text-center max-w-6xl
              transition-all duration-1000 delay-200 ease-out
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
          >
            {/* Top Text */}
            <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
              <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-medium mb-2 tracking-wide">
                Bestby Bites is more than an app.
              </p>
              <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-medium tracking-wide">
                It's a smarter way to eat, sell, and save.
              </p>
            </div>

            {/* Main Headline */}
            <div className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6">
              <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-tight">
                Be first. Be smart.
              </h1>
              <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-tight">
                Be part of the solution.
              </h1>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div 
          className={`
            transition-all duration-1000 delay-600 ease-out
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
        >
          {/* Divider Line */}
          <div 
            className={`
              w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mb-8 sm:mb-10 md:mb-12
              transition-all duration-1000 delay-400 ease-out
              ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}
            `}
          ></div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-4">
            {/* Copyright and Links */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 order-2 sm:order-1">
              <p className="text-white/90 text-sm sm:text-base md:text-lg">
                © 2025 Bestby Bites. All rights reserved.
              </p>
              <div className="hidden sm:block w-px h-4 bg-white/30"></div>
              <a
                href="/privacy-policy"
                className="text-white/90 text-sm sm:text-base md:text-lg hover:text-[#04c55c] transition-colors duration-300 underline underline-offset-4 decoration-white/30 hover:decoration-[#04c55c]"
              >
                Privacy Policy
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 sm:gap-5 order-1 sm:order-2">
              {/* Facebook Icon */}
              <a
                href="https://www.facebook.com/profile.php?id=61575194648525"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 sm:w-13 sm:h-13 md:w-14 md:h-14 bg-[#1877f2] rounded-full flex items-center justify-center hover:scale-110 hover:shadow-xl hover:shadow-[#1877f2]/60 transition-all duration-300 group"
                aria-label="Facebook"
              >
                <svg 
                  className="w-6 h-6 sm:w-7 sm:h-7 text-white group-hover:scale-110 transition-transform duration-300" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* Instagram Icon */}
              <a
                href="https://www.instagram.com/bestbybites/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 sm:w-13 sm:h-13 md:w-14 md:h-14 bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045] rounded-full flex items-center justify-center hover:scale-110 hover:shadow-xl hover:shadow-pink-500/60 transition-all duration-300 group"
                aria-label="Instagram"
              >
                <svg 
                  className="w-6 h-6 sm:w-7 sm:h-7 text-white group-hover:scale-110 transition-transform duration-300" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* TikTok Icon */}
              <a
                href="https://www.tiktok.com/@bestby.bites?_r=1&_t=ZS-92ms0UfKW1Z"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 sm:w-13 sm:h-13 md:w-14 md:h-14 bg-black rounded-full flex items-center justify-center hover:scale-110 hover:shadow-xl hover:shadow-black/60 transition-all duration-300 group relative overflow-hidden"
                aria-label="TikTok"
              >
                <svg 
                  className="w-6 h-6 sm:w-7 sm:h-7 relative z-10 group-hover:scale-110 transition-transform duration-300" 
                  viewBox="0 0 24 24" 
                  fill="none"
                >
                  <path 
                    d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" 
                    fill="#EE1D52"
                  />
                  <path 
                    d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" 
                    fill="#69C9D0"
                    opacity="0.7"
                    transform="translate(1, 1)"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;