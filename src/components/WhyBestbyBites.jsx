import { useState, useEffect, useRef } from 'react';

const WhyBestbyBites = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((error) => {
        console.error('Video play failed:', error);
      });
    }
  };

  const handleVideoPlay = () => {
    setIsPlaying(true);
  };

  const handleVideoPause = () => {
    setIsPlaying(false);
  };

  return (
    <section 
      ref={sectionRef}
      className="w-full bg-gray-50 py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div
          className={`text-center mb-8 sm:mb-12 md:mb-16 transition-all duration-1000 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 -translate-y-10'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6" style={{ color: '#013727' }}>
            Why Bestby Bites?
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed px-4">
            Every day, millions of meals are wasted—while people spend more than they should on food. Bestby Bites fixes both problems at once.
          </p>
        </div>

        {/* Video Container */}
        <div
          className={`relative max-w-4xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible 
              ? 'opacity-100 scale-100' 
              : 'opacity-0 scale-95'
          }`}
        >
          <div 
            className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl p-4 sm:p-6 md:p-8"
            style={{ backgroundColor: '#013727' }}
          >
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-black">
              {/* Video Element */}
              <video
                ref={videoRef}
                className="w-full h-auto block"
                controls={isPlaying}
                playsInline
                preload="metadata"
                onPlay={handleVideoPlay}
                onPause={handleVideoPause}
                onEnded={handleVideoPause}
              >
                <source src="/images/Bestby Bites Website Video 3 MP4.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Thumbnail Overlay */}
              {!isPlaying && (
                <div 
                  className="absolute inset-0 z-10 cursor-pointer"
                  onClick={handlePlayVideo}
                >
                  <img 
                    src="/images/THUMBNAIL-3 (2).jpg" 
                    alt="Bestby Bites Video" 
                    className="w-full h-full object-cover"
                  />
                  {/* Play Button */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-[#04c55c] rounded-full flex items-center justify-center border-2 border-white/30 shadow-2xl hover:scale-110 transition-transform duration-200">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"></path>
                    </svg>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyBestbyBites;