import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';

const WhyBestbyBites = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [isMuted, setIsMuted] = useState(false);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showControls, setShowControls] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const controlsTimeoutRef = useRef(null);

  useEffect(() => {
    // Detect mobile/tablet devices
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      setCurrentTime(video.currentTime);
    };

    const handleLoadedMetadata = () => {
      setDuration(video.duration);
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, []);

  const handleVideoInteraction = () => {
    setShowControls(true);
    
    // Clear existing timeout
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    
    // Hide controls after 3 seconds of inactivity
    controlsTimeoutRef.current = setTimeout(() => {
      setShowControls(false);
    }, 3000);
  };

  const handleMouseEnter = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
  };

  const handleMouseLeave = () => {
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    setShowControls(false);
  };

  const handleMouseMove = () => {
    handleVideoInteraction();
  };

  const togglePlayPause = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
      setHasStarted(true);
    }
    handleVideoInteraction();
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    const mute = !isMuted;
    videoRef.current.muted = mute;
    setIsMuted(mute);
    handleVideoInteraction();
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
    }
  };

  const handleProgressBarClick = (e) => {
    if (!videoRef.current) return;
    const progressBar = e.currentTarget;
    const rect = progressBar.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    videoRef.current.currentTime = pos * duration;
    handleVideoInteraction();
  };

  const formatTime = (time) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="w-full bg-gradient-to-b from-white to-gray-50 py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-8 sm:mb-10 md:mb-12">
          <span className="bg-gradient-to-r from-[#04c55c] to-[#013727] bg-clip-text text-transparent">
            WHY BESTBY BITES?
          </span>
        </h2>

        {/* Video Container */}
        <div 
          ref={containerRef}
          className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl cursor-pointer"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
          onTouchStart={handleVideoInteraction}
          onClick={handleVideoInteraction}
        >
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <video
              ref={videoRef}
              className="absolute inset-0 w-full h-full object-cover"
              playsInline
              preload="auto"
              poster="/images/THUMBNAIL-VIDEO-2.jpg"
              loop
            >
              <source src="/images/WEBSITE VIDEO 2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Thumbnail overlay before video starts */}
            {!hasStarted && (
              <img
                src="/images/THUMBNAIL-VIDEO-2.jpg"
                alt="Video Thumbnail"
                className="absolute inset-0 w-full h-full object-cover z-10"
              />
            )}

            {/* Bottom Controls - Show on hover/touch for all devices */}
            <div 
              className={`absolute bottom-0 left-0 right-0 z-20 p-3 sm:p-4 md:p-5 bg-gradient-to-t from-black/80 via-black/60 to-transparent transition-all duration-300 ${
                showControls ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="flex items-center gap-2 sm:gap-3">
                {/* Play/Pause Button */}
                <button
                  onClick={togglePlayPause}
                  className="p-2.5 sm:p-3 md:p-3.5 rounded-full bg-gradient-to-r from-[#04c55c] to-[#013727] text-white shadow-lg hover:scale-110 active:scale-95 transition-all flex-shrink-0"
                  aria-label={isPlaying ? 'Pause video' : 'Play video'}
                >
                  {isPlaying ? (
                    <Pause className="w-4 h-4 sm:w-5 sm:h-5" />
                  ) : (
                    <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                  )}
                </button>

                {/* Volume Button */}
                <button
                  onClick={toggleMute}
                  onMouseEnter={() => !isMobile && setShowVolumeSlider(true)}
                  onMouseLeave={() => !isMobile && setShowVolumeSlider(false)}
                  className="p-2.5 sm:p-3 md:p-3.5 rounded-full bg-gradient-to-r from-[#04c55c] to-[#013727] text-white shadow-lg hover:scale-110 active:scale-95 transition-all flex-shrink-0"
                  aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                >
                  {isMuted ? (
                    <VolumeX className="w-4 h-4 sm:w-5 sm:h-5" />
                  ) : (
                    <Volume2 className="w-4 h-4 sm:w-5 sm:h-5" />
                  )}
                </button>

                {/* Volume Slider - Desktop only */}
                {showVolumeSlider && !isMobile && (
                  <div 
                    onMouseEnter={() => setShowVolumeSlider(true)}
                    onMouseLeave={() => setShowVolumeSlider(false)}
                    className="flex items-center flex-shrink-0"
                  >
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.1"
                      value={volume}
                      onChange={handleVolumeChange}
                      className="w-16 sm:w-20"
                      aria-label="Volume control"
                    />
                  </div>
                )}

                {/* Progress Bar */}
                <div 
                  className="flex-1 h-1 sm:h-1.5 bg-white/30 rounded-full cursor-pointer group mx-2 sm:mx-3"
                  onClick={handleProgressBarClick}
                >
                  <div 
                    className="h-full bg-gradient-to-r from-[#04c55c] to-[#013727] rounded-full transition-all duration-200 relative"
                    style={{ width: `${progress}%` }}
                  >
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                </div>

                {/* Time Display */}
                <div className="flex items-center gap-1 sm:gap-2 bg-black/50 px-2 sm:px-3 py-1 sm:py-1.5 md:py-2 rounded-full flex-shrink-0">
                  <span className="text-white text-xs sm:text-sm font-medium whitespace-nowrap">
                    {formatTime(currentTime)} / {formatTime(duration)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Improve touch targets on mobile */
        @media (max-width: 1023px) {
          button {
            min-width: 44px;
            min-height: 44px;
          }
        }

        /* Custom range slider styles */
        input[type="range"] {
          -webkit-appearance: none;
          appearance: none;
          background: transparent;
          cursor: pointer;
        }

        input[type="range"]::-webkit-slider-track {
          background: rgba(255, 255, 255, 0.3);
          height: 4px;
          border-radius: 2px;
        }

        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          background: white;
          height: 12px;
          width: 12px;
          border-radius: 50%;
          cursor: pointer;
          margin-top: -4px;
        }

        input[type="range"]::-moz-range-track {
          background: rgba(255, 255, 255, 0.3);
          height: 4px;
          border-radius: 2px;
        }

        input[type="range"]::-moz-range-thumb {
          background: white;
          height: 12px;
          width: 12px;
          border-radius: 50%;
          cursor: pointer;
          border: none;
        }
      `}</style>
    </div>
  );
};

export default WhyBestbyBites;