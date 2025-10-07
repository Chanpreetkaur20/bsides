'use client'

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, Quote, Linkedin, Star, Award, Users, Heart } from 'lucide-react';
import GlassCard from '../GlassCard/GlassCard';
import FloatingParticles from '../FloatingParticles/FloatingParticles';
import Lenis from 'lenis';
import Particles from '../Particles/Particles';
import DecryptedText from '../DecryptedText/DecryptedText';
import { AnimatedTestimonials } from "../UI/animated-testimonials";


const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const lenisRef = useRef(null);

  // Initialize Lenis smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    lenisRef.current = lenis;

    return () => {
      lenis.destroy();
    };
  }, []);

  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Sharma',
      title: 'Chief Information Security Officer',
      company: 'Tech Mahindra',
      image: '/testimonials/rajesh-sharma.jpg',
      quote: 'AGRA provided an exceptional platform for knowledge sharing and networking. The quality of speakers and content was outstanding, making it a must-attend event for cybersecurity professionals across India.',
      linkedin: 'https://linkedin.com/in/rajeshsharma',
      rating: 5,
      badge: 'CISO'
    },
    {
      id: 2,
      name: 'Priya Gupta',
      title: 'Senior Security Researcher',
      company: 'Microsoft',
      image: '/testimonials/priya-gupta.jpg',
      quote: 'The conference fostered a truly collaborative environment. I was impressed by the diverse range of topics and the opportunity to connect with like-minded security professionals from across the industry.',
      linkedin: 'https://linkedin.com/in/priyagupta',
      rating: 5,
      badge: 'Researcher'
    },
    {
      id: 3,
      name: 'Amit Patel',
      title: 'VP of Cybersecurity',
      company: 'HDFC Bank',
      image: '/testimonials/amit-patel.jpg',
      quote: 'AGRA stands out for its inclusive nature and high-quality content. The event successfully brings together industry leaders and emerging talent, creating valuable learning opportunities for all participants.',
      linkedin: 'https://linkedin.com/in/amitpatel',
      rating: 5,
      badge: 'Executive'
    },
    {
      id: 4,
      name: 'Dr. Neha Singh',
      title: 'Cybersecurity Consultant',
      company: 'Independent',
      image: '/testimonials/neha-singh.jpg',
      quote: 'Attending AGRA was incredibly enriching. The organization was excellent, and the welcoming atmosphere made it easy to engage with fellow professionals and learn about the latest security trends.',
      linkedin: 'https://linkedin.com/in/nehasingh',
      rating: 5,
      badge: 'Consultant'
    }
  ];

  // Format testimonials for AnimatedTestimonials component
  const animatedTestimonialsData = testimonials.map(testimonial => ({
    quote: testimonial.quote,
    name: testimonial.name,
    designation: `${testimonial.title}, ${testimonial.company}`,
    src: testimonial.image
  }));

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prev => prev === testimonials.length - 1 ? 0 : prev + 1);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  const prevTestimonial = () => setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="testimonials" className="relative py-24 bg-black min-h-screen overflow-hidden">
      {/* Particles Background - Same as About section */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={["#00ffcc", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.15}
          particleBaseSize={120}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Additional background elements */}
      <FloatingParticles count={25} className="opacity-15" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-20 right-10 w-80 h-80 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl z-10"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl z-10"></div>

      <div className="container mx-auto px-6 relative z-20">
        {/* Section Header */}
        <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"} className="text-center mb-12 sm:mb-16 md:mb-20">
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-poppins font-bold mb-6 sm:mb-8 text-gray-100">
              <DecryptedText
                text="Testimonials"
                className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                encryptedClassName="text-green-400"
                sequential
                animateOn="view"
                speed={40}
                revealDirection="start"
              />
            </h2>
            <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8 sm:mb-12 rounded-full"></div>
          </motion.div>
          <motion.div variants={itemVariants}>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light px-4">
              <DecryptedText
                text="Expert voices from cybersecurity trailblazers who have experienced AGRA"
                className="text-gray-300"
                encryptedClassName="text-green-400"
                sequential
                animateOn="view"
                speed={40}
                revealDirection="start"
              />
            </p>
          </motion.div>
        </motion.div>

        {/* Option 1: Original Testimonial Slider (commented out) */}
        {/* 
        <motion.div variants={itemVariants} initial="hidden" animate={inView ? "visible" : "hidden"} className="relative max-w-6xl mx-auto">
          ... your original testimonial slider code ...
        </motion.div>
        */}

        {/* Option 2: AnimatedTestimonials Component */}
        <div className="max-w-6xl mx-auto mb-20">
          <AnimatedTestimonials testimonials={animatedTestimonialsData} />
        </div>

        {/* Stats Section */}
        <motion.div variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16 md:mt-20 z-20 relative">
          {[
            { icon: Users, number: '500+', label: 'Happy Attendees', color: 'from-blue-500 to-cyan-500' },
            { icon: Award, number: '50+', label: 'Expert Speakers', color: 'from-purple-500 to-pink-500' },
            { icon: Heart, number: '98%', label: 'Satisfaction Rate', color: 'from-green-500 to-emerald-500' }
          ].map((stat, index) => (
            <motion.div key={index} variants={itemVariants}>
              <GlassCard className="text-center p-4 sm:p-6 md:p-8 hover:scale-105 transition-all duration-500 cursor-pointer group" opacity="bg-gray-900/40" blur="backdrop-blur-xl">
                <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br ${stat.color} rounded-2xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-100 mb-2 sm:mb-3 group-hover:text-white transition-colors">
                  <DecryptedText
                    text={stat.number}
                    className="text-gray-100"
                    encryptedClassName="text-green-400"
                    sequential
                    animateOn="view"
                    speed={40}
                    revealDirection="start"
                  />
                </h3>
                <p className="text-sm sm:text-base text-gray-300 font-medium">
                  <DecryptedText
                    text={stat.label}
                    className="text-gray-300"
                    encryptedClassName="text-green-400"
                    sequential
                    animateOn="view"
                    speed={40}
                    revealDirection="start"
                  />
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;

// Export function for AnimatedTestimonialsDemo (if needed elsewhere)
export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote: "AGRA provided an exceptional platform for knowledge sharing and networking. The quality of speakers and content was outstanding, making it a must-attend event for cybersecurity professionals across India.",
      name: "Rajesh Sharma",
      designation: "Chief Information Security Officer, Tech Mahindra",
      src: "/testimonials/rajesh-sharma.jpg",
    },
    {
      quote: "The conference fostered a truly collaborative environment. I was impressed by the diverse range of topics and the opportunity to connect with like-minded security professionals from across the industry.",
      name: "Priya Gupta",
      designation: "Senior Security Researcher, Microsoft",
      src: "/testimonials/priya-gupta.jpg",
    },
    {
      quote: "AGRA stands out for its inclusive nature and high-quality content. The event successfully brings together industry leaders and emerging talent, creating valuable learning opportunities for all participants.",
      name: "Amit Patel",
      designation: "VP of Cybersecurity, HDFC Bank",
      src: "/testimonials/amit-patel.jpg",
    },
    {
      quote: "Attending AGRA was incredibly enriching. The organization was excellent, and the welcoming atmosphere made it easy to engage with fellow professionals and learn about the latest security trends.",
      name: "Dr. Neha Singh",
      designation: "Cybersecurity Consultant, Independent",
      src: "/testimonials/neha-singh.jpg",
    },
  ];
  
  return <AnimatedTestimonials testimonials={testimonials} />;
}