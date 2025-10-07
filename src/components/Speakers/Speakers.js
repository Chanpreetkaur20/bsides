'use client';

import React, { useState, useEffect, useId, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import FloatingParticles from '../FloatingParticles/FloatingParticles';
import { HeroParallax } from "../UI/HeroParallax";
import { useOutsideClick } from "../Speakers/use-outside-click";

const Speakers = () => {
  const [activeCategory, setActiveCategory] = useState('keynote');
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const categories = [
    { id: 'keynote', label: 'Keynote Speakers', count: 2 },
    { id: 'cxo', label: 'CXO Speakers', count: 15 },
    { id: 'technical', label: 'Technical Speakers', count: 20 },
  ];

  const speakers = {
    keynote: [
      {
        id: 1,
        name: 'Dr. Rajesh Kumar',
        title: 'Chief Information Security Officer',
        company: 'Government of India',
        image: '/Speakers/rajesh-kumar.jpg',
        bio: 'Leading cybersecurity expert with 20+ years of experience in government and enterprise security.',
        social: { linkedin: '#', twitter: '#' },
      },
      {
        id: 2,
        name: 'Sarah Chen',
        title: 'VP of Security Research',
        company: 'Microsoft',
        image: '/speakers/sarah-chen.jpg',
        bio: 'Internationally recognized security researcher and thought leader in AI-powered cybersecurity.',
        social: { linkedin: '#', twitter: '#' },
      },
    ],
    cxo: [
      {
        id: 3,
        name: 'Amit Sharma',
        title: 'CISO',
        company: 'Tata Consultancy Services',
        image: '/speakers/amit-sharma.jpg',
        bio: 'Enterprise security leader with expertise in digital transformation and risk management.',
        social: { linkedin: '#' },
      },
      {
        id: 4,
        name: 'Priya Mehta',
        title: 'CTO',
        company: 'Infosys',
        image: '/speakers/priya-mehta.jpg',
        bio: 'Technology visionary with expertise in cloud security and digital innovation.',
        social: { linkedin: '#', twitter: '#' },
      },
      {
        id: 5,
        name: 'Rahul Kapoor',
        title: 'CSO',
        company: 'Wipro',
        image: '/speakers/rahul-kapoor.jpg',
        bio: 'Strategic security leader focused on building resilient organizations.',
        social: { linkedin: '#', twitter: '#' },
      },
    ],
    technical: [
      {
        id: 6,
        name: 'Ankit Gupta',
        title: 'Security Researcher',
        company: 'Independent',
        image: '/speakers/ankit-gupta.jpg',
        bio: 'Bug bounty hunter and penetration testing expert with multiple CVE discoveries.',
        social: { linkedin: '#', twitter: '#' },
      },
      {
        id: 7,
        name: 'Neha Singh',
        title: 'Malware Analyst',
        company: 'Kaspersky',
        image: '/speakers/neha-singh.jpg',
        bio: 'Expert in reverse engineering and threat intelligence analysis.',
        social: { linkedin: '#', twitter: '#' },
      },
      {
        id: 8,
        name: 'Vikram Patel',
        title: 'DevSecOps Engineer',
        company: 'Google',
        image: '/speakers/vikram-patel.jpg',
        bio: 'Pioneer in integrating security into CI/CD pipelines at scale.',
        social: { linkedin: '#', twitter: '#' },
      },
    ],
  };

  const speakerProducts = [
    {
      title: "Dr. Rajesh Kumar",
      link: "#speakers",
      thumbnail: "/Speakers/rajesh-kumar.jpg",
    },
    {
      title: "Sarah Chen",
      link: "#speakers",
      thumbnail: "/speakers/sarah-chen.jpg",
    },
    {
      title: "Amit Sharma",
      link: "#speakers",
      thumbnail: "/speakers/amit-sharma.jpg",
    },
    {
      title: "Priya Mehta",
      link: "#speakers",
      thumbnail: "/speakers/priya-mehta.jpg",
    },
    {
      title: "Rahul Kapoor",
      link: "#speakers",
      thumbnail: "/speakers/rahul-kapoor.jpg",
    },
    {
      title: "Ankit Gupta",
      link: "#speakers",
      thumbnail: "/speakers/ankit-gupta.jpg",
    },
    {
      title: "Neha Singh",
      link: "#speakers",
      thumbnail: "/speakers/neha-singh.jpg",
    },
    {
      title: "Vikram Patel",
      link: "#speakers",
      thumbnail: "/Speakers/rajesh-kumar.jpg",
    },
    {
      title: "BSides Agra 2024",
      link: "#speakers",
      thumbnail: "/speakers/event-1.jpg",
    },
    {
      title: "Cybersecurity Workshop",
      link: "#speakers",
      thumbnail: "/speakers/event-2.jpg",
    },
    {
      title: "Networking Session",
      link: "#speakers",
      thumbnail: "/speakers/event-3.jpg",
    },
    {
      title: "Panel Discussion",
      link: "#speakers",
      thumbnail: "/speakers/event-4.jpg",
    },
    {
      title: "Technical Demo",
      link: "#speakers",
      thumbnail: "/speakers/event-5.jpg",
    },
    {
      title: "Award Ceremony",
      link: "#speakers",
      thumbnail: "/speakers/event-6.jpg",
    },
    {
      title: "Community Gathering",
      link: "#speakers",
      thumbnail: "/speakers/event-7.jpg",
    },
  ];

  // Format speakers for ExpandableCardDemo
  const speakerCards = speakers[activeCategory].map(speaker => ({
    title: speaker.name,
    description: `${speaker.title}, ${speaker.company}`,
    src: speaker.image,
    ctaText: "View Profile",
    ctaLink: "#",
    content: () => {
      return (
        <div>
          <p className="mb-4">{speaker.bio}</p>
          <div className="flex space-x-4">
            {speaker.social.linkedin && (
              <a href={speaker.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                LinkedIn
              </a>
            )}
            {speaker.social.twitter && (
              <a href={speaker.social.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
                Twitter
              </a>
            )}
          </div>
        </div>
      );
    },
  }));

  return (
    <>
      {/* Hero Parallax Section */}
      {/* <div className="relative bg-black">
        <HeroParallax products={speakerProducts} /> */}

        {/* Overlay content on the parallax section */}
        {/* <div className="absolute inset-0 flex items-center justify-start z-20 px-4 sm:px-6 md:px-8 lg:px-16">
          <div className="text-left text-white max-w-3xl">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Featured <span className="text-red-500">Speakers</span>
            </motion.h1>
            <motion.p
              className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Meet the cybersecurity experts and thought leaders shaping the future of digital security
            </motion.p>
            <motion.button
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-lg text-base sm:text-lg transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              onClick={() => {
                document.getElementById('speakers-content')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View All Speakers
            </motion.button>
          </div>
        </div>
      </div> */}

      {/* Main Speakers Section */}
      <section
        id="speakers-content"
        className="relative section-padding bg-black text-white overflow-hidden"
      >
        {/* Background Particles */}
        <FloatingParticles count={15} className="opacity-20" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-poppins font-bold mb-4 sm:mb-6">
              Speakers <span className="gradient-text">Attending</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8 rounded-full"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Learn from industry leaders, security researchers, and cybersecurity
              experts shaping the future of information security.
            </p>
          </motion.div>

          {/* Category Tabs */}
          <motion.div
            className="flex justify-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <div className="inline-flex bg-gray-800 rounded-lg p-1 overflow-x-auto max-w-full">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all duration-300 text-sm sm:text-base whitespace-nowrap ${
                    activeCategory === category.id
                      ? 'bg-red-600 text-white shadow-md'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {category.label}
                  <span className="ml-1 sm:ml-2 text-xs sm:text-sm bg-gray-700 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Expandable Speaker Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
          >
            <ExpandableCardDemo cards={speakerCards} />
          </motion.div>

          {/* Call for Papers Section */}
          <motion.div
            className="text-center mt-12 sm:mt-16 lg:mt-20"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
          >
            <div className="bg-gray-800 rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">Submit Your Talk for BSides Agra 2025</h3>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 mx-auto text-center max-w-4xl leading-relaxed">
                <span className="block sm:inline">| The firewalls are falling, and the mic is open | This is raw infosec — from the streets to the stage |</span>
                <br className="hidden sm:block"/>
                <span className="block sm:inline mt-2 sm:mt-0">BSides Agra 0x01 is calling those who live, breathe, and break Cybersecurity.</span>
              </p>

              <motion.a
                href="/cfp"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-red-600 hover:bg-red-700 text-white font-bold text-base sm:text-lg md:text-xl px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-colors inline-block text-center"
              >
                Call for Papers
              </motion.a>

            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

// ExpandableCardDemo Component
const ExpandableCardDemo = ({ cards }) => {
  const [active, setActive] = useState(null);
  const ref = useRef(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex absolute top-4 right-4 items-center justify-center bg-white rounded-full h-8 w-8 z-50"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-4xl h-full md:h-fit md:max-h-[90%] flex flex-col bg-gray-900 sm:rounded-3xl overflow-hidden border border-gray-700"
            >
              <motion.div layoutId={`image-${active.title}-${id}`} className="relative">
                <img
                  src={active.src}
                  alt={active.title}
                  className="w-full h-64 md:h-80 object-cover object-top"
                  onError={(e) => {
                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(active.title)}&size=400&background=e50914&color=fff&bold=true`;
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent h-20" />
              </motion.div>

              <div className="p-6">
                <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
                  <div>
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-2xl text-white mb-2"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-gray-300"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 text-sm rounded-full font-bold bg-red-600 hover:bg-red-700 text-white transition-colors"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-gray-300 text-base h-60 md:h-auto pb-6 flex flex-col items-start gap-4 overflow-auto"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <div className="max-w-4xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-6 flex flex-col bg-gray-800/50 hover:bg-gray-800/70 rounded-xl cursor-pointer border border-gray-700/30 transition-all duration-300"
          >
            <div className="flex gap-4 items-start">
              <motion.div layoutId={`image-${card.title}-${id}`} className="flex-shrink-0">
                <img
                  src={card.src}
                  alt={card.title}
                  className="h-16 w-16 rounded-lg object-cover"
                  onError={(e) => {
                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(card.title)}&size=128&background=e50914&color=fff&bold=true`;
                  }}
                />
              </motion.div>
              <div className="flex-1 min-w-0">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-semibold text-white truncate"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-gray-400 text-sm truncate"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="mt-4 px-4 py-2 text-sm rounded-full font-bold bg-gray-700 hover:bg-red-600 text-white transition-colors self-start"
            >
              {card.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </div>
    </>
  );
};

const CloseIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </svg>
  );
};

export default Speakers;