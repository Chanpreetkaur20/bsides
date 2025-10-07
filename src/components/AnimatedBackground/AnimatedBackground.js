import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = ({ className = "" }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create geometric shapes
    const shapes = [];
    const shapeCount = 8;

    for (let i = 0; i < shapeCount; i++) {
      shapes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 100 + 50,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.1 + 0.05,
        type: Math.floor(Math.random() * 3), // 0: circle, 1: triangle, 2: square
        color: `rgba(229, 9, 20, ${Math.random() * 0.1 + 0.05})`
      });
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      shapes.forEach((shape) => {
        ctx.save();
        ctx.translate(shape.x, shape.y);
        ctx.rotate((shape.rotation * Math.PI) / 180);
        ctx.globalAlpha = shape.opacity;

        // Draw different shapes
        switch (shape.type) {
          case 0: // Circle
            ctx.beginPath();
            ctx.arc(0, 0, shape.size / 2, 0, Math.PI * 2);
            ctx.strokeStyle = shape.color;
            ctx.lineWidth = 2;
            ctx.stroke();
            break;
          
          case 1: // Triangle
            ctx.beginPath();
            ctx.moveTo(0, -shape.size / 2);
            ctx.lineTo(-shape.size / 2, shape.size / 2);
            ctx.lineTo(shape.size / 2, shape.size / 2);
            ctx.closePath();
            ctx.strokeStyle = shape.color;
            ctx.lineWidth = 2;
            ctx.stroke();
            break;
          
          case 2: // Square
            ctx.beginPath();
            ctx.rect(-shape.size / 2, -shape.size / 2, shape.size, shape.size);
            ctx.strokeStyle = shape.color;
            ctx.lineWidth = 2;
            ctx.stroke();
            break;
        }

        ctx.restore();

        // Update rotation
        shape.rotation += shape.rotationSpeed;
        
        // Slowly move shapes
        shape.x += Math.sin(Date.now() * 0.001 + shape.y * 0.01) * 0.2;
        shape.y += Math.cos(Date.now() * 0.001 + shape.x * 0.01) * 0.2;

        // Wrap around edges
        if (shape.x > canvas.width + shape.size) shape.x = -shape.size;
        if (shape.x < -shape.size) shape.x = canvas.width + shape.size;
        if (shape.y > canvas.height + shape.size) shape.y = -shape.size;
        if (shape.y < -shape.size) shape.y = canvas.height + shape.size;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className={`absolute inset-0 ${className}`}>
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-primary/5" />
      
      {/* Animated canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 1 }}
      />
      
      {/* Floating orbs */}
      <div className="absolute inset-0" style={{ zIndex: 2 }}>
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatedBackground;