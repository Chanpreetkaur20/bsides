import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const AnimatedTestimonials = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <div className="relative max-w-4xl mx-auto h-96">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <div className="bg-gray-800/40 backdrop-blur-md rounded-2xl p-8 border border-gray-700/50 h-full">
            <div className="h-full flex flex-col justify-center">
              <Quote className="h-8 w-8 text-primary mb-4" />
              <p className="text-xl text-gray-200 mb-6">"{testimonials[currentIndex].quote}"</p>
              <div className="flex items-center">
                <img
                  src={testimonials[currentIndex].src}
                  alt={testimonials[currentIndex].name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                  onError={(e) => {
                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonials[currentIndex].name)}&size=200&background=e50914&color=fff&bold=true`;
                  }}
                />
                <div>
                  <h4 className="font-semibold text-white">{testimonials[currentIndex].name}</h4>
                  <p className="text-gray-400">{testimonials[currentIndex].designation}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <button
        onClick={prevTestimonial}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-900/80 backdrop-blur-sm rounded-full p-2 text-gray-300 hover:text-white z-10"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextTestimonial}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-900/80 backdrop-blur-sm rounded-full p-2 text-gray-300 hover:text-white z-10"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-primary' : 'bg-gray-600'}`}
          />
        ))}
      </div>
    </div>
  );
};