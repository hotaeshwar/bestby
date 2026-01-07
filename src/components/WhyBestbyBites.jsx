import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const WhyBestbyBites = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [isMuted, setIsMuted] = useState(false);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const [showThumbnail, setShowThumbnail] = useState(true);
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && videoRef.current) {
            videoRef.current.volume = volume;
            videoRef.current.muted = false;
            
            const playPromise = videoRef.current.play();
            
            if (playPromise !== undefined) {
              playPromise
                .then(() => {
                  setIsPlaying(true);
                  setIsMuted(false);
                  setTimeout(() => setShowThumbnail(false), 300);
                })
                .catch((error) => {
                  console.log('Autoplay prevented:', error);
                });
            }
          } else if (!entry.isIntersecting && videoRef.current && isPlaying) {
            videoRef.current.pause();
            setIsPlaying(false);
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: '0px'
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [volume, isPlaying]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = volume;
    }
  }, [volume]);

  const toggleMute = () => {
    if (videoRef.current) {
      const newMutedState = !isMuted;
      videoRef.current.muted = newMutedState;
      setIsMuted(newMutedState);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
      if (newVolume === 0) {
        setIsMuted(true);
        videoRef.current.muted = true;
      } else if (isMuted) {
        setIsMuted(false);
        videoRef.current.muted = false;
      }
    }
  };

  const handleVideoEnded = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  return (
    <div className="w-full bg-gradient-to-b from-white to-gray-50 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 sm:mb-6 tracking-wide leading-tight">
            <span className="bg-gradient-to-r from-[#04c55c] via-[#03a84d] to-[#013727] bg-clip-text text-transparent drop-shadow-lg">
              WHY BESTBY BITES?
            </span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-[#013727] mb-4 sm:mb-6 max-w-4xl mx-auto">
            Discover the perfect blend of taste, quality, and convenience
          </p>
          
          <div className="flex justify-center mt-4 sm:mt-6 lg:mt-8">
            <div 
              className="w-24 sm:w-32 md:w-40 lg:w-48 h-1 sm:h-1.5 lg:h-2 rounded-full shadow-lg"
              style={{ 
                background: 'linear-gradient(to right, #04c55c, #03a84d, #013727)',
                boxShadow: '0 4px 20px rgba(4, 197, 92, 0.4)'
              }}
            />
          </div>
        </div>

        <div 
          ref={containerRef}
          className="relative max-w-5xl mx-auto"
        >
          <div className="relative w-full rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl bg-black">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <video
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover"
                playsInline
                preload="auto"
                poster="/images/THUMBNAIL-VIDEO-2.jpg"
                onEnded={handleVideoEnded}
                loop
              >
                <source src="/images/WEBSITE VIDEO 2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {showThumbnail && (
                <div className="absolute inset-0 z-10 transition-opacity duration-300">
                  <img 
                    src="/images/THUMBNAIL-VIDEO-2.jpg" 
                    alt="Video Thumbnail"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {isPlaying && (
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 z-20 flex items-center gap-2">
                  <button
                    onClick={toggleMute}
                    onMouseEnter={() => setShowVolumeSlider(true)}
                    className="bg-gradient-to-r from-[#04c55c] to-[#013727]
                              hover:from-[#05d968] hover:to-[#014d35]
                              text-white rounded-full p-2 sm:p-2.5
                              transition-all duration-300 
                              shadow-lg hover:shadow-xl 
                              transform hover:scale-110
                              backdrop-blur-sm bg-opacity-90"
                    aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                  >
                    {isMuted || volume === 0 ? (
                      <VolumeX className="w-4 h-4 sm:w-5 sm:h-5" />
                    ) : (
                      <Volume2 className="w-4 h-4 sm:w-5 sm:h-5" />
                    )}
                  </button>

                  <div
                    onMouseEnter={() => setShowVolumeSlider(true)}
                    onMouseLeave={() => setShowVolumeSlider(false)}
                    className={`transition-all duration-300 ${
                      showVolumeSlider ? 'opacity-100 w-20 sm:w-24 md:w-28' : 'opacity-0 w-0'
                    }`}
                  >
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.1"
                      value={volume}
                      onChange={handleVolumeChange}
                      className="w-full h-1 sm:h-1.5 bg-white/30 rounded-lg appearance-none cursor-pointer
                                [&::-webkit-slider-thumb]:appearance-none
                                [&::-webkit-slider-thumb]:w-2.5 [&::-webkit-slider-thumb]:h-2.5
                                [&::-webkit-slider-thumb]:sm:w-3 [&::-webkit-slider-thumb]:sm:h-3
                                [&::-webkit-slider-thumb]:rounded-full
                                [&::-webkit-slider-thumb]:bg-white
                                [&::-webkit-slider-thumb]:cursor-pointer
                                [&::-webkit-slider-thumb]:shadow-lg
                                [&::-webkit-slider-thumb]:hover:bg-[#04c55c]
                                [&::-webkit-slider-thumb]:transition-all
                                [&::-moz-range-thumb]:w-2.5 [&::-moz-range-thumb]:h-2.5
                                [&::-moz-range-thumb]:sm:w-3 [&::-moz-range-thumb]:sm:h-3
                                [&::-moz-range-thumb]:rounded-full
                                [&::-moz-range-thumb]:bg-white
                                [&::-moz-range-thumb]:border-0
                                [&::-moz-range-thumb]:cursor-pointer
                                [&::-moz-range-thumb]:shadow-lg
                                [&::-moz-range-thumb]:hover:bg-[#04c55c]
                                [&::-moz-range-thumb]:transition-all"
                      style={{
                        background: `linear-gradient(to right, #04c55c 0%, #04c55c ${volume * 100}%, rgba(255,255,255,0.3) ${volume * 100}%, rgba(255,255,255,0.3) 100%)`
                      }}
                    />
                  </div>
                </div>
              )}

              {isPlaying && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyBestbyBites;