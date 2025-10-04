import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Calendar, MapPin, Users, ChevronDown } from 'lucide-react';
import SplineBackground from '../SplineBackground/SplineBackground';
import GlassCard from '../GlassCard/GlassCard';
import FloatingParticles from '../FloatingParticles/FloatingParticles';
import ScrollAnimation from '../UI/ScrollAnimation';

const Hero = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.9]);
  const y = useTransform(scrollY, [0, 300], [0, 100]);
  
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  
  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth > 628); // Custom breakpoint at 628px
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);
  
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gray-900 overflow-hidden">
      {/* Spline 3D Background - Only on larger screens */}
      {isLargeScreen && <SplineBackground />}
      
      {/* Floating Particles */}
      <FloatingParticles count={50} className="z-5" />
      
      {/* Parallax Effect Container */}
      <motion.div 
        style={{ opacity, scale, y }}
        className="w-full relative z-10"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Mobile Content - Only on small screens */}
            {!isLargeScreen && (
              <>
                {/* Main Title */}
                <motion.h1
                  className="text-4xl font-bold text-white mb-4 leading-tight"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  BSides <span className="text-primary">Agra</span>
                </motion.h1>
                
                {/* Subtitle */}
                <motion.h2
                  className="text-xl font-semibold text-gray-300 mb-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Where Hackers Meet Heritage
                </motion.h2>
                
                {/* Event Details */}
                <motion.div
                  className="flex flex-col items-center justify-center gap-4 mb-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <div className="flex items-center gap-2 text-gray-300">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="text-sm">Dec 13th-14th, 2025</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="text-sm">Agra, India</span>
                  </div>
                </motion.div>
                
                {/* CTA Buttons */}
                <motion.div
                  className="flex flex-col items-center justify-center gap-4 mb-12"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105">
                    Register Now
                  </button>
                  <button className="w-full border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300">
                    Call for Paper
                  </button>
                </motion.div>
                
                {/* Scroll Indicator */}
                <motion.div
                  className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                >
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex flex-col items-center text-gray-400"
                  >
                    <span className="text-sm mb-2">Scroll to explore</span>
                    <ChevronDown className="w-6 h-6" />
                  </motion.div>
                </motion.div>
              </>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;