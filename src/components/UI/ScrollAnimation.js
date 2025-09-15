import React, { useEffect, useRef } from 'react';

const ScrollAnimation = ({ 
  children, 
  type = 'fade-in', // fade-in, scale-in, slide-left, slide-right
  delay = 0,
  threshold = 0.2, // 0-1, percentage of element visible to trigger animation
  className = '',
  ...props 
}) => {
  const elementRef = useRef(null);
  
  useEffect(() => {
    const element = elementRef.current;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add visible class after a small delay to ensure smooth animation
            setTimeout(() => {
              element.classList.add('visible');
            }, 100);
            
            // Unobserve after animation is triggered
            observer.unobserve(element);
          }
        });
      },
      { threshold }
    );
    
    if (element) {
      observer.observe(element);
    }
    
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold]);
  
  const getAnimationClass = () => {
    switch (type) {
      case 'scale-in':
        return 'scroll-scale-in';
      case 'slide-left':
        return 'scroll-slide-left';
      case 'slide-right':
        return 'scroll-slide-right';
      case 'fade-in':
      default:
        return 'scroll-fade-in';
    }
  };
  
  const getDelayClass = () => {
    if (delay === 0) return '';
    return `delay-${delay * 100}`;
  };
  
  return (
    <div 
      ref={elementRef} 
      className={`${getAnimationClass()} ${getDelayClass()} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;