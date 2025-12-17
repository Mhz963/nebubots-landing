import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { useInView } from 'framer-motion';

const Logo = ({ className = '', size = 'default', animated = true, scrollTriggered = false }) => {
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef(null);
  const logoRef = useRef(null);
  const isInView = useInView(logoRef, { once: false, amount: 0.5 });

  const sizeClasses = {
    small: 'h-8 w-8',
    default: 'h-12 w-12',
    large: 'h-16 w-16',
    xl: 'h-24 w-24',
    hero: 'h-64 w-64 md:h-80 md:w-80 lg:h-96 lg:w-96 xl:h-[28rem] xl:w-[28rem]',
  };

  // Handle scroll-triggered animation
  useEffect(() => {
    if (scrollTriggered && animated && videoRef.current && isInView) {
      setShowVideo(true);
      videoRef.current.play().catch(() => {
        setShowVideo(false);
      });
    } else if (scrollTriggered && !isInView && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setShowVideo(false);
    }
  }, [isInView, animated, scrollTriggered]);

  const handleMouseEnter = () => {
    if (animated && !scrollTriggered && videoRef.current) {
      setShowVideo(true);
      videoRef.current.play().catch(() => {
        setShowVideo(false);
      });
    }
  };

  const handleMouseLeave = () => {
    if (animated && !scrollTriggered && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setShowVideo(false);
    }
  };

  return (
    <motion.div
      ref={logoRef}
      className={`${sizeClasses[size]} ${className} relative overflow-hidden`}
      onMouseEnter={scrollTriggered ? undefined : handleMouseEnter}
      onMouseLeave={scrollTriggered ? undefined : handleMouseLeave}
      whileHover={scrollTriggered ? {} : { scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      {/* Video - shows on scroll or hover */}
      {animated && (
        <video
          ref={videoRef}
          src="/chero-video.mp4"
          className={`w-full h-full object-contain absolute inset-0 transition-opacity duration-500 ${
            showVideo ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
          muted
          loop
          playsInline
          preload="auto"
        />
      )}
      
      {/* Fallback image - always visible, hidden when video is playing */}
      <img
        src="/chero-logo.jpeg"
        alt="Chero Logo"
        className={`w-full h-full object-contain transition-opacity duration-500 ${
          showVideo ? 'opacity-0' : 'opacity-100'
        }`}
      />
    </motion.div>
  );
};

export default Logo;
