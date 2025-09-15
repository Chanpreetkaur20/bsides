import React from 'react';
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
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gray-900 overflow-hidden">
      {/* Spline 3D Background */}
      <SplineBackground />
      
      {/* Floating Particles */}
      <FloatingParticles count={50} className="z-5" />
      

      
      {/* Parallax Effect Container */}
      <motion.div 
        style={{ opacity, scale, y }}
        className="w-full"
      >




      </motion.div>
    </section>
  );
};

export default Hero;