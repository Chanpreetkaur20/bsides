import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import EventCard from '../UI/EventCard';
import { Mic, Wrench, Building2, Trophy, Clock, MapPin, User } from 'lucide-react';
import GlassCard from '../GlassCard/GlassCard';
import FloatingParticles from '../FloatingParticles/FloatingParticles';

const Events = () => {
  const [activeTab, setActiveTab] = useState('talks');
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const eventTypes = [
    { id: 'talks', label: 'Talks', icon: Mic, count: 12, color: 'primary' },
    { id: 'workshops', label: 'Workshops', icon: Wrench, count: 8, color: 'secondary' },
    { id: 'villages', label: 'Villages', icon: Building2, count: 4, color: 'primary' },
    { id: 'ctf', label: 'CTF', icon: Trophy, count: 1, color: 'secondary' },
  ];

  const eventsData = {
    talks: [
      {
        id: 1,
        title: 'Zero-Day Vulnerabilities in Modern Systems',
        speaker: 'Dr. Jane Smith',
        time: '10:00 AM - 10:45 AM',
        track: 'Main Stage',
        description: 'Exploring newly discovered vulnerabilities and their implications for enterprise security.',
        difficulty: 'Advanced',
        tags: ['Vulnerabilities', 'Enterprise', 'Research']
      },
      {
        id: 2,
        title: 'AI-Powered Cyber Attacks',
        speaker: 'Alex Johnson',
        time: '11:00 AM - 11:45 AM',
        track: 'Innovation Track',
        description: 'How artificial intelligence is changing the threat landscape and what we can do about it.',
        difficulty: 'Intermediate',
        tags: ['AI', 'Threats', 'Machine Learning']
      },
      {
        id: 3,
        title: 'Supply Chain Security in 2025',
        speaker: 'Sarah Chen',
        time: '2:00 PM - 2:45 PM',
        track: 'Main Stage',
        description: 'Understanding and mitigating risks in modern software supply chains.',
        difficulty: 'Intermediate',
        tags: ['Supply Chain', 'Risk Management', 'DevSecOps']
      }
    ],
    workshops: [
      {
        id: 1,
        title: 'Hands-on Penetration Testing',
        speaker: 'Security Team Alpha',
        time: '9:00 AM - 12:00 PM',
        track: 'Workshop Room A',
        description: 'Learn practical penetration testing techniques in this hands-on workshop.',
        difficulty: 'Intermediate',
        tags: ['Penetration Testing', 'Hands-on', 'Tools']
      },
      {
        id: 2,
        title: 'Incident Response Simulation',
        speaker: 'IR Experts',
        time: '2:00 PM - 5:00 PM',
        track: 'Workshop Room B',
        description: 'Practice incident response procedures in a simulated environment.',
        difficulty: 'Advanced',
        tags: ['Incident Response', 'Simulation', 'Crisis Management']
      }
    ],
    villages: [
      {
        id: 1,
        title: 'IoT Hacking Village',
        speaker: 'Hardware Security Group',
        time: 'All Day',
        track: 'Village Area 1',
        description: 'Hands-on experience with IoT device security testing and vulnerability discovery.',
        difficulty: 'All Levels',
        tags: ['IoT', 'Hardware', 'Hacking']
      },
      {
        id: 2,
        title: 'Lockpicking Village',
        speaker: 'Physical Security Team',
        time: 'All Day',
        track: 'Village Area 2',
        description: 'Learn the art of lockpicking and physical security assessment.',
        difficulty: 'All Levels',
        tags: ['Physical Security', 'Lockpicking', 'Access Control']
      }
    ],
    ctf: [
      {
        id: 1,
        title: 'Capture The Flag Competition',
        speaker: 'BSides Agra CTF Team',
        time: '9:00 AM - 5:00 PM',
        track: 'CTF Arena',
        description: 'Test your skills in our jeopardy-style CTF with challenges ranging from beginner to expert.',
        difficulty: 'All Levels',
        tags: ['CTF', 'Competition', 'Challenges']
      }
    ]
  };

  return (
    <section id="events" className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6 text-gray-900">
            Conference <span className="gradient-text">Events</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Explore our diverse lineup of talks, workshops, hacking villages, and competitions designed to 
            challenge and inspire cybersecurity professionals at every level.
          </p>
        </motion.div>

        {/* Event Type Tabs */}
        <motion.div 
          className="flex justify-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
        >
          <div className="inline-flex bg-gray-100 rounded-lg p-1">
            {eventTypes.map((type, index) => (
              <motion.button
                key={type.id}
                onClick={() => setActiveTab(type.id)}
                className={`flex items-center space-x-2 px-6 py-3 text-sm font-semibold rounded-lg transition-all duration-300 ${
                  activeTab === type.id
                    ? 'bg-white text-primary shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <type.icon size={18} />
                <span>{type.label}</span>
                <span className="bg-gray-200 px-2 py-1 rounded-full text-xs">
                  {type.count}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Event Cards */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {eventsData[activeTab].map((event, index) => (
              <motion.div
                key={event.id}
                className="bg-white rounded-xl shadow-card hover-lift border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      event.difficulty === 'Advanced' ? 'bg-red-100 text-red-800' :
                      event.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {event.difficulty}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                    {event.title}
                  </h3>
                  
                  <div className="space-y-2 mb-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <User size={16} />
                      <span>{event.speaker}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock size={16} />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin size={16} />
                      <span>{event.track}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                    {event.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {event.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          <div className="bg-gray-50 rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Join Us?</h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Don't miss out on this unique opportunity to learn, network, and grow in the cybersecurity field.
            </p>
            <motion.button 
              className="btn-primary text-lg px-8 py-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Register Now
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Events;