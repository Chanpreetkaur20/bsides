"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { useRef } from "react";
import { cn } from "../../lib/utils";
import Particles from "../Particles/Particles";

export const HeroParallax = ({
  products,
  className,
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className={cn(
        "h-[300vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]",
        className
      )}
    >
      {/* Particles Background - Same as Testimonials section */}
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
      <div className="absolute top-20 right-10 w-80 h-80 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl z-10"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl z-10"></div>

      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="relative z-20"
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-20">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0 z-30">
      <h1 className="text-4xl md:text-7xl font-bold text-white mb-6">
        Featured <span className="text-red-500">Speakers</span>
      </h1>
      <p className="max-w-2xl text-xl md:text-2xl mt-8 text-gray-300">
        Meet the cybersecurity experts and thought leaders shaping the future of digital security
      </p>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative shrink-0 z-20"
    >
      <a
        href={product.link}
        className="block group-hover/product:shadow-2xl"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0 rounded-xl border-2 border-gray-700/50"
          alt={product.title}
          onError={(e) => {
            e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(product.title)}&size=600&background=random&color=fff&bold=true`;
          }}
        />
      </a>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black/70 pointer-events-none rounded-xl transition-opacity duration-300"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white text-xl font-bold transition-opacity duration-300">
        {product.title}
      </h2>
    </motion.div>
  );
};