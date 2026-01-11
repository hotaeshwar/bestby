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
  const [showControls, setShowControls] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const videoRef = useRef(null);
  const controlsTimeoutRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => setCurrentTime(video.currentTime);
    const handleLoadedMetadata = () => setDuration(video.duration);

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, []);

  const handleVideoInteraction = () => {
    if (!isPlaying) return;
    
    setShowControls(true);
    
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) {
        setShowControls(false);
      }
    }, 3000);
  };

  const handleMouseMove = () => {
    handleVideoInteraction();
  };

  const togglePlayPause = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
      setShowControls(true);
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
    } else {
      videoRef.current.play();
      setIsPlaying(true);
      setHasStarted(true);
      handleVideoInteraction();
    }
  };

  const handleContainerClick = (e) => {
    if (e.target.tagName === 'VIDEO' || e.target.closest('.video-overlay')) {
      togglePlayPause(e);
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    const mute = !isMuted;
    videoRef.current.muted = mute;
    setIsMuted(mute);
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
    }
  };

  const handleProgressBarClick = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    videoRef.current.currentTime = pos * duration;
  };

  const formatTime = (time) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="w-full bg-gradient-to-b from-white to-gray-50 py-6 sm:py-8 md:py-10 lg:py-12 xl:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        {/* Title */}
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-6 sm:mb-8 md:mb-10 lg:mb-12 px-4 text-gray-900">
          Bestby Bites unlocks access to surplus food from top local restaurants,<br />
          bringing top local flavors to your table at unbeatable prices
        </h2>

        {/* Video Container */}
        <div 
          className="relative rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl md:shadow-2xl cursor-pointer bg-black mx-auto"
          onMouseMove={handleMouseMove}
          onTouchStart={handleVideoInteraction}
          onClick={handleContainerClick}
        >
          {/* 16:9 Aspect Ratio Container */}
          <div className="relative w-full aspect-video">
            <video
              ref={videoRef}
              className="absolute inset-0 w-full h-full object-cover"
              playsInline
              preload="auto"
              poster="/images/THUMBNAIL-VIDEO-2.jpg"
              loop
            >
              <source src="/images/BESTBYBITESVIDEO24.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Thumbnail overlay before video starts */}
            {!hasStarted && (
              <div className="absolute inset-0 z-10 bg-black">
                <img
                  src="/images/THUMBNAIL-VIDEO-2.jpg"
                  alt="Video Thumbnail"
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Center Play/Pause Button */}
            <div 
              className={`video-overlay absolute inset-0 z-20 flex items-center justify-center transition-opacity duration-300 ${
                !isPlaying || showControls ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <button
                onClick={togglePlayPause}
                className="group"
                aria-label={isPlaying ? 'Pause video' : 'Play video'}
              >
                <div className="relative">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#04c55c] to-[#013727] rounded-full blur-lg sm:blur-xl md:blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-200"></div>
                  
                  {/* Button */}
                  <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-to-r from-[#04c55c] to-[#013727] flex items-center justify-center shadow-lg sm:shadow-xl md:shadow-2xl group-hover:scale-110 group-active:scale-95 transition-all duration-200">
                    {isPlaying ? (
                      <Pause className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white" strokeWidth={2.5} />
                    ) : (
                      <Play className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white ml-0.5 sm:ml-1" strokeWidth={2.5} fill="white" />
                    )}
                  </div>
                </div>
              </button>
            </div>

            {/* Bottom Controls */}
            <div 
              className={`absolute bottom-0 left-0 right-0 z-30 p-2 sm:p-2.5 md:p-3 lg:p-4 bg-gradient-to-t from-black/90 via-black/70 to-transparent transition-all duration-300 ${
                showControls || !isPlaying ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="flex items-center gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-3">
                {/* Volume Button */}
                <button
                  onClick={toggleMute}
                  onMouseEnter={() => !isMobile && setShowVolumeSlider(true)}
                  onMouseLeave={() => !isMobile && setShowVolumeSlider(false)}
                  className="p-1.5 sm:p-2 md:p-2.5 rounded-full bg-white/20 hover:bg-white/30 text-white shadow-md hover:scale-110 active:scale-95 transition-all flex-shrink-0 backdrop-blur-sm"
                  aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                >
                  {isMuted ? (
                    <VolumeX className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-4.5 md:h-4.5 lg:w-5 lg:h-5" />
                  ) : (
                    <Volume2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-4.5 md:h-4.5 lg:w-5 lg:h-5" />
                  )}
                </button>

                {/* Volume Slider - Desktop only */}
                {showVolumeSlider && !isMobile && (
                  <div 
                    onMouseEnter={() => setShowVolumeSlider(true)}
                    onMouseLeave={() => setShowVolumeSlider(false)}
                    className="flex items-center flex-shrink-0"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.1"
                      value={volume}
                      onChange={handleVolumeChange}
                      className="w-16 md:w-20 lg:w-24"
                      aria-label="Volume control"
                    />
                  </div>
                )}

                {/* Progress Bar */}
                <div 
                  className="flex-1 h-1 sm:h-1 md:h-1.5 bg-white/20 rounded-full cursor-pointer group mx-1 sm:mx-1.5 md:mx-2 backdrop-blur-sm"
                  onClick={handleProgressBarClick}
                >
                  <div 
                    className="h-full bg-gradient-to-r from-[#04c55c] to-[#013727] rounded-full transition-all duration-200 relative"
                    style={{ width: `${progress}%` }}
                  >
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                </div>

                {/* Time Display */}
                <div className="bg-black/60 px-1.5 sm:px-2 md:px-2.5 lg:px-3 py-0.5 sm:py-1 md:py-1 lg:py-1.5 rounded flex-shrink-0 backdrop-blur-sm">
                  <span className="text-white text-[9px] sm:text-[10px] md:text-xs lg:text-sm font-medium whitespace-nowrap">
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
          height: 14px;
          width: 14px;
          border-radius: 50%;
          cursor: pointer;
          margin-top: -5px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        }

        input[type="range"]::-moz-range-track {
          background: rgba(255, 255, 255, 0.3);
          height: 4px;
          border-radius: 2px;
        }

        input[type="range"]::-moz-range-thumb {
          background: white;
          height: 14px;
          width: 14px;
          border-radius: 50%;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        }

        /* Prevent text selection on double tap */
        .video-overlay {
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          -webkit-tap-highlight-color: transparent;
        }

        /* Ensure proper aspect ratio */
        .aspect-video {
          aspect-ratio: 16 / 9;
        }
      `}</style>
    </div>
  );
};

export default WhyBestbyBites;