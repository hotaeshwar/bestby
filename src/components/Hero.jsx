import React, { useState, useEffect, useRef } from 'react';
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
  const [imagesVisible, setImagesVisible] = useState({
    mobile: false,
    tablet: false,
    ipadPro: false,
    desktop: false
  });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);
  const heroRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    // Generate floating particles
    const particleArray = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 5
    }));
    setParticles(particleArray);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setImagesVisible(prev => ({ ...prev, mobile: true }));
            }, 200);
            setTimeout(() => {
              setImagesVisible(prev => ({ ...prev, tablet: true }));
            }, 400);
            setTimeout(() => {
              setImagesVisible(prev => ({ ...prev, ipadPro: true }));
            }, 600);
            setTimeout(() => {
              setImagesVisible(prev => ({ ...prev, desktop: true }));
            }, 800);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      clearTimeout(timer);
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div ref={heroRef} className="min-h-screen relative overflow-hidden md:flex md:items-center bg-[#013727]">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 z-[1] pointer-events-none">
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(4, 197, 92, 0.2) 0%, transparent 50%)`,
              transition: 'background 0.3s ease'
            }}
          ></div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 z-[2] pointer-events-none overflow-hidden">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute rounded-full bg-white/20 backdrop-blur-sm"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                animation: `float ${particle.duration}s ease-in-out infinite`,
                animationDelay: `${particle.delay}s`
              }}
            ></div>
          ))}
        </div>

        <style>{`
          @keyframes float {
            0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.3; }
            25% { transform: translate(20px, -30px) scale(1.1); opacity: 0.6; }
            50% { transform: translate(-15px, -60px) scale(0.9); opacity: 0.4; }
            75% { transform: translate(25px, -40px) scale(1.05); opacity: 0.7; }
          }

          @keyframes pulse-glow {
            0%, 100% { box-shadow: 0 0 20px rgba(4, 197, 92, 0.5), 0 0 40px rgba(4, 197, 92, 0.3); }
            50% { box-shadow: 0 0 30px rgba(4, 197, 92, 0.8), 0 0 60px rgba(4, 197, 92, 0.5); }
          }

          @keyframes letterReveal {
            0% { 
              opacity: 0;
              transform: translateY(20px) scale(0.5);
            }
            60% {
              transform: translateY(-8px) scale(1.1);
            }
            100% { 
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }

          .letter-animate {
            display: inline-block;
            opacity: 0;
            color: white;
            animation: letterReveal 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          }



          /* iPad Air specific logo sizing and positioning */
          @media (min-width: 768px) and (max-width: 1023px) {
            .logo-responsive {
              height: 312px !important;
              margin-top: -8rem !important;
              margin-bottom: 3rem !important;
            }
          }

          /* iPad Pro specific logo sizing */
          @media (min-width: 1024px) and (max-width: 1279px) {
            .logo-responsive {
              height: 280px !important;
            }
          }
        `}</style>

        {/* Background Container - Desktop (1280px+) - FIXED: Added pointer-events-none */}
        <div 
          className={`hidden xl:block absolute inset-0 z-[3] pointer-events-none transition-all duration-1000 ease-out ${
            imagesVisible.desktop ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          style={{
            backgroundImage: 'url("/images/home.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        ></div>

        {/* Background Container - All Mobile Screens (up to 767px) - FIXED: Added pointer-events-none */}
        <div 
          className={`block md:hidden absolute inset-0 z-[3] pointer-events-none transition-all duration-1000 ease-out ${
            imagesVisible.mobile ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          style={{
            backgroundImage: 'url("/images/I-PHONE-14-SCREEN.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>

        {/* Background Container - iPad Mini & Air (768px - 1023px) - FIXED: Added pointer-events-none */}
        <div 
          className={`hidden md:block lg:hidden absolute inset-0 z-[3] pointer-events-none transition-all duration-1000 ease-out ${
            imagesVisible.tablet ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          style={{
            backgroundImage: 'url("/images/IPADMINI2.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>

        {/* Background Container - iPad Pro (1024px - 1279px) - FIXED: Added pointer-events-none */}
        <div 
          className={`hidden lg:block xl:hidden absolute inset-0 z-[3] pointer-events-none transition-all duration-1000 ease-out ${
            imagesVisible.ipadPro ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          style={{
            backgroundImage: 'url("/images/IPADPRO.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>

        {/* Content Container */}
        <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-20 xl:px-24 2xl:px-32 pt-6 pb-24 md:py-12 lg:py-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              
              {/* Left Content Section */}
              <div className={`max-w-full md:max-w-[65%] lg:max-w-none transition-all duration-1000 ease-out ${
                isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
              }`}>
                {/* Logo with responsive sizing */}
                <div className="mb-3 sm:mb-6 md:mb-4 md:-mt-16 lg:mt-0 lg:mb-8">
                  <img 
                    src="/images/BEST-BY-BITES-FINAL-LOGO-WHITE.png" 
                    alt="Bestby Bites Logo" 
                    className="logo-responsive h-28 sm:h-40 md:h-[140px] lg:h-[180px] xl:h-28 w-auto hover:scale-110 transition-transform duration-500"
                    style={{
                      filter: 'drop-shadow(0 0 20px rgba(4, 197, 92, 0.3))'
                    }}
                  />
                </div>

                {/* Heading with letter-by-letter animation */}
                <h1 className="heading-text text-white font-extrabold leading-[1.05] mb-2.5 sm:mb-6 md:mb-4 lg:mb-6">
                  {/* Mobile & Tablet - Stacked */}
                  <span className="lg:hidden">
                    <span className="block text-[2.6rem] sm:text-[4rem] md:text-[3.5rem]">
                      {'Save Food.'.split('').map((char, index) => (
                        <span
                          key={index}
                          className="letter-animate"
                          style={{ animationDelay: `${0.3 + index * 0.05}s` }}
                        >
                          {char === ' ' ? '\u00A0' : char}
                        </span>
                      ))}
                    </span>
                    <span className="block text-[2.6rem] sm:text-[4rem] md:text-[3.5rem]">
                      {'Save Money.'.split('').map((char, index) => (
                        <span
                          key={index}
                          className="letter-animate"
                          style={{ animationDelay: `${0.9 + index * 0.05}s` }}
                        >
                          {char === ' ' ? '\u00A0' : char}
                        </span>
                      ))}
                    </span>
                    <span className="block text-[2.6rem] sm:text-[4rem] md:text-[3.5rem]">
                      {'Eat Smarter.'.split('').map((char, index) => (
                        <span
                          key={index}
                          className="letter-animate"
                          style={{ animationDelay: `${1.5 + index * 0.05}s` }}
                        >
                          {char === ' ' ? '\u00A0' : char}
                        </span>
                      ))}
                    </span>
                  </span>
                  
                  {/* iPad Pro - Single line per phrase */}
                  <span className="hidden lg:block xl:hidden">
                    <span className="block text-[5rem] whitespace-nowrap">
                      {'Save Food.'.split('').map((char, index) => (
                        <span
                          key={index}
                          className="letter-animate"
                          style={{ animationDelay: `${0.3 + index * 0.05}s` }}
                        >
                          {char === ' ' ? '\u00A0' : char}
                        </span>
                      ))}
                    </span>
                    <span className="block text-[5rem] whitespace-nowrap">
                      {'Save Money.'.split('').map((char, index) => (
                        <span
                          key={index}
                          className="letter-animate"
                          style={{ animationDelay: `${0.9 + index * 0.05}s` }}
                        >
                          {char === ' ' ? '\u00A0' : char}
                        </span>
                      ))}
                    </span>
                    <span className="block text-[5rem] whitespace-nowrap">
                      {'Eat Smarter.'.split('').map((char, index) => (
                        <span
                          key={index}
                          className="letter-animate"
                          style={{ animationDelay: `${1.5 + index * 0.05}s` }}
                        >
                          {char === ' ' ? '\u00A0' : char}
                        </span>
                      ))}
                    </span>
                  </span>

                  {/* Desktop - Stacked */}
                  <span className="hidden xl:block">
                    <span className="block text-[4rem] 2xl:text-[4.5rem]">
                      {'Save Food.'.split('').map((char, index) => (
                        <span
                          key={index}
                          className="letter-animate"
                          style={{ animationDelay: `${0.3 + index * 0.05}s` }}
                        >
                          {char === ' ' ? '\u00A0' : char}
                        </span>
                      ))}
                    </span>
                    <span className="block text-[4rem] 2xl:text-[4.5rem]">
                      {'Save Money.'.split('').map((char, index) => (
                        <span
                          key={index}
                          className="letter-animate"
                          style={{ animationDelay: `${0.9 + index * 0.05}s` }}
                        >
                          {char === ' ' ? '\u00A0' : char}
                        </span>
                      ))}
                    </span>
                    <span className="block text-[4rem] 2xl:text-[4.5rem]">
                      {'Eat Smarter.'.split('').map((char, index) => (
                        <span
                          key={index}
                          className="letter-animate"
                          style={{ animationDelay: `${1.5 + index * 0.05}s` }}
                        >
                          {char === ' ' ? '\u00A0' : char}
                        </span>
                      ))}
                    </span>
                  </span>
                </h1>

                {/* Description */}
                <div className={`text-white/90 text-[0.9rem] leading-[1.4rem] sm:text-xl sm:leading-[1.75rem] md:text-[1.15rem] md:leading-[1.65rem] xl:text-xl xl:leading-relaxed max-w-[95%] md:max-w-[40rem] xl:max-w-[520px] mb-3.5 sm:mb-8 md:mb-5 lg:mb-8 transition-all duration-1000 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`} style={{ transitionDelay: '2.2s' }}>
                  {/* Mobile - 2 lines */}
                  <p className="sm:hidden">
                    Bestby Bites unlocks access to surplus food from top local<br />
                    restaurants, bakeries, cafés, and grocery stores—at up to 80% off.
                  </p>
                  
                  {/* Tablet & Desktop */}
                  <p className="hidden sm:block lg:hidden xl:block">
                    Bestby Bites unlocks access to surplus food from top local restaurants, bakeries, cafés, and grocery stores—at up to 80% off.
                  </p>
                  
                  {/* iPad Pro - 3 lines */}
                  <p className="hidden lg:block xl:hidden text-[1.85rem] leading-[2.5rem]">
                    Bestby Bites unlocks access to surplus food from top local<br />
                    restaurants, bakeries, cafés, and grocery stores—at up to<br />
                    80% off.
                  </p>
                </div>

                {/* CTA Button - White text */}
                <a 
                  href="#waitlist"
                  className="inline-block bg-[#04c55c] text-white px-8 sm:px-12 md:px-12 lg:px-16 xl:px-12 py-3.5 sm:py-5 md:py-4 lg:py-6 xl:py-4 rounded-full font-bold text-base sm:text-xl md:text-[1.1rem] lg:text-[1.6rem] xl:text-lg hover:bg-[#03a84d] transition-all duration-300 hover:scale-105 shadow-xl relative overflow-hidden group"
                  style={{
                    animation: 'pulse-glow 2s ease-in-out infinite'
                  }}
                >
                  <span className="relative z-10">Exclusive Offer</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                </a>
              </div>

              {/* Right side - empty (food images are in background) */}
              <div className="hidden lg:block"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Components placed in order below Hero */}
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