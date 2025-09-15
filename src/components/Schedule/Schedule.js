import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Clock, MapPin, User, Calendar } from 'lucide-react';

const Schedule = () => {
  const [activeDay, setActiveDay] = useState('day1');
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const days = [
    { id: 'training1', label: 'Training Day 1', date: 'March 13, 2025' },
    { id: 'training2', label: 'Training Day 2', date: 'March 14, 2025' },
    { id: 'day1', label: 'Conference Day 1', date: 'March 15, 2025' },
    { id: 'day2', label: 'Conference Day 2', date: 'March 16, 2025' },
  ];

  const scheduleData = {
    training1: [
      {
        time: '8:00 AM - 9:00 AM',
        title: 'Registration & Welcome Coffee',
        type: 'break',
        location: 'Main Lobby'
      },
      {
        time: '9:00 AM - 12:00 PM',
        title: 'Hands-on Penetration Testing Workshop',
        speaker: 'Security Team Alpha',
        type: 'workshop',
        location: 'Workshop Room A',
        description: 'Learn practical penetration testing techniques and tools'
      },
      {
        time: '12:00 PM - 1:00 PM',
        title: 'Lunch Break',
        type: 'break',
        location: 'Dining Hall'
      },
      {
        time: '1:00 PM - 4:00 PM',
        title: 'Advanced Web Application Security',
        speaker: 'Dr. Sarah Johnson',
        type: 'workshop',
        location: 'Workshop Room A',
        description: 'Deep dive into modern web application vulnerabilities'
      },
      {
        time: '4:00 PM - 4:30 PM',
        title: 'Networking Break',
        type: 'break',
        location: 'Main Lobby'
      },
      {
        time: '4:30 PM - 6:00 PM',
        title: 'Q&A and Hands-on Practice',
        speaker: 'All Instructors',
        type: 'workshop',
        location: 'Workshop Room A',
        description: 'Practice what you learned and get expert guidance'
      }
    ],
    training2: [
      {
        time: '9:00 AM - 12:00 PM',
        title: 'Incident Response Simulation',
        speaker: 'IR Experts Team',
        type: 'workshop',
        location: 'Workshop Room B',
        description: 'Practice incident response in a simulated environment'
      },
      {
        time: '12:00 PM - 1:00 PM',
        title: 'Lunch Break',
        type: 'break',
        location: 'Dining Hall'
      },
      {
        time: '1:00 PM - 4:00 PM',
        title: 'Digital Forensics Workshop',
        speaker: 'Forensics Team',
        type: 'workshop',
        location: 'Workshop Room B',
        description: 'Learn digital forensics techniques and tools'
      },
      {
        time: '4:00 PM - 4:30 PM',
        title: 'Networking Break',
        type: 'break',
        location: 'Main Lobby'
      },
      {
        time: '4:30 PM - 6:00 PM',
        title: 'Certification Ceremony',
        speaker: 'BSides Agra Team',
        type: 'ceremony',
        location: 'Main Auditorium',
        description: 'Receive your training completion certificates'
      }
    ],
    day1: [
      {
        time: '8:00 AM - 9:00 AM',
        title: 'Registration & Welcome Coffee',
        type: 'break',
        location: 'Main Lobby'
      },
      {
        time: '9:00 AM - 9:30 AM',
        title: 'Opening Ceremony & Welcome',
        speaker: 'BSides Agra Organizing Team',
        type: 'keynote',
        location: 'Main Auditorium',
        description: 'Welcome to BSides Agra 2025'
      },
      {
        time: '9:30 AM - 10:30 AM',
        title: 'Keynote: The Future of Cybersecurity in India',
        speaker: 'Dr. Rajesh Kumar, CISO, Government of India',
        type: 'keynote',
        location: 'Main Auditorium',
        description: 'Exploring the evolving cybersecurity landscape in India'
      },
      {
        time: '10:30 AM - 11:00 AM',
        title: 'Networking Break',
        type: 'break',
        location: 'Main Lobby'
      },
      {
        time: '11:00 AM - 11:45 AM',
        title: 'Zero-Day Vulnerabilities in Modern Systems',
        speaker: 'Dr. Jane Smith',
        type: 'talk',
        location: 'Main Auditorium',
        description: 'Latest research on zero-day vulnerabilities'
      },
      {
        time: '11:45 AM - 12:30 PM',
        title: 'AI-Powered Cyber Attacks',
        speaker: 'Alex Johnson',
        type: 'talk',
        location: 'Track 2',
        description: 'How AI is changing the threat landscape'
      },
      {
        time: '12:30 PM - 1:30 PM',
        title: 'Lunch & Networking',
        type: 'break',
        location: 'Dining Hall'
      },
      {
        time: '1:30 PM - 2:15 PM',
        title: 'Supply Chain Security in 2025',
        speaker: 'Sarah Chen',
        type: 'talk',
        location: 'Main Auditorium',
        description: 'Securing modern software supply chains'
      },
      {
        time: '2:15 PM - 3:00 PM',
        title: 'Cloud Security Best Practices',
        speaker: 'Michael Rodriguez',
        type: 'talk',
        location: 'Track 2',
        description: 'Practical cloud security implementation'
      },
      {
        time: '3:00 PM - 3:30 PM',
        title: 'Afternoon Break',
        type: 'break',
        location: 'Main Lobby'
      },
      {
        time: '3:30 PM - 5:00 PM',
        title: 'Villages & CTF Open',
        type: 'village',
        location: 'Village Areas',
        description: 'Hands-on hacking villages and CTF competition'
      },
      {
        time: '5:00 PM - 6:00 PM',
        title: 'Day 1 Wrap-up & Networking',
        type: 'networking',
        location: 'Main Lobby',
        description: 'Connect with fellow attendees'
      }
    ],
    day2: [
      {
        time: '9:00 AM - 9:30 AM',
        title: 'Day 2 Welcome & Announcements',
        speaker: 'BSides Agra Team',
        type: 'opening',
        location: 'Main Auditorium'
      },
      {
        time: '9:30 AM - 10:30 AM',
        title: 'Keynote: Building Resilient Security Teams',
        speaker: 'Sarah Chen, VP Security Research, Microsoft',
        type: 'keynote',
        location: 'Main Auditorium',
        description: 'Leadership and team building in cybersecurity'
      },
      {
        time: '10:30 AM - 11:00 AM',
        title: 'Morning Break',
        type: 'break',
        location: 'Main Lobby'
      },
      {
        time: '11:00 AM - 11:45 AM',
        title: 'Advanced Threat Hunting',
        speaker: 'Threat Hunter Pro',
        type: 'talk',
        location: 'Main Auditorium',
        description: 'Proactive threat detection techniques'
      },
      {
        time: '11:45 AM - 12:30 PM',
        title: 'DevSecOps Implementation',
        speaker: 'DevOps Security Expert',
        type: 'talk',
        location: 'Track 2',
        description: 'Integrating security into DevOps pipelines'
      },
      {
        time: '12:30 PM - 1:30 PM',
        title: 'Lunch & Networking',
        type: 'break',
        location: 'Dining Hall'
      },
      {
        time: '1:30 PM - 2:15 PM',
        title: 'Mobile Security Challenges',
        speaker: 'Mobile Security Researcher',
        type: 'talk',
        location: 'Main Auditorium',
        description: 'Current state of mobile application security'
      },
      {
        time: '2:15 PM - 3:00 PM',
        title: 'Privacy by Design',
        speaker: 'Privacy Expert',
        type: 'talk',
        location: 'Track 2',
        description: 'Building privacy into systems from the ground up'
      },
      {
        time: '3:00 PM - 3:30 PM',
        title: 'Afternoon Break',
        type: 'break',
        location: 'Main Lobby'
      },
      {
        time: '3:30 PM - 4:30 PM',
        title: 'CTF Awards & Village Demos',
        type: 'ceremony',
        location: 'Main Auditorium',
        description: 'Celebrate CTF winners and village achievements'
      },
      {
        time: '4:30 PM - 5:00 PM',
        title: 'Closing Ceremony',
        speaker: 'BSides Agra Organizing Team',
        type: 'closing',
        location: 'Main Auditorium',
        description: 'Thank you and see you next year!'
      }
    ]
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'keynote': return 'bg-primary text-white';
      case 'talk': return 'bg-blue-100 text-blue-800';
      case 'workshop': return 'bg-green-100 text-green-800';
      case 'break': return 'bg-gray-100 text-gray-800';
      case 'village': return 'bg-purple-100 text-purple-800';
      case 'networking': return 'bg-orange-100 text-orange-800';
      case 'ceremony': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="schedule" className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6 text-gray-900">
            Event <span className="gradient-text">Schedule</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Four days packed with training, talks, workshops, and networking opportunities. 
            Plan your BSides Agra 2025 experience.
          </p>
        </motion.div>

        {/* Day Tabs */}
        <motion.div 
          className="flex justify-center mb-12 overflow-x-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
        >
          <div className="inline-flex bg-gray-100 rounded-lg p-1 min-w-max">
            {days.map((day) => (
              <button
                key={day.id}
                onClick={() => setActiveDay(day.id)}
                className={`px-4 py-3 rounded-lg font-medium transition-all duration-300 whitespace-nowrap ${
                  activeDay === day.id
                    ? 'bg-white text-primary shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <div className="text-sm font-semibold">{day.label}</div>
                <div className="text-xs text-gray-500">{day.date}</div>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Schedule Content */}
        <motion.div 
          key={activeDay}
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-4">
            {scheduleData[activeDay]?.map((session, index) => (
              <motion.div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-card transition-shadow"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex flex-col md:flex-row md:items-start space-y-4 md:space-y-0 md:space-x-6">
                  {/* Time */}
                  <div className="flex-shrink-0">
                    <div className="flex items-center space-x-2 text-primary font-semibold">
                      <Clock size={16} />
                      <span>{session.time}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                      <h3 className="text-lg font-bold text-gray-900 mb-2 sm:mb-0">
                        {session.title}
                      </h3>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(session.type)}`}>
                        {session.type.charAt(0).toUpperCase() + session.type.slice(1)}
                      </span>
                    </div>

                    {session.speaker && (
                      <div className="flex items-center space-x-2 text-gray-600 mb-2">
                        <User size={16} />
                        <span className="font-medium">{session.speaker}</span>
                      </div>
                    )}

                    <div className="flex items-center space-x-2 text-gray-600 mb-3">
                      <MapPin size={16} />
                      <span>{session.location}</span>
                    </div>

                    {session.description && (
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {session.description}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Download Schedule CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          <div className="bg-gray-50 rounded-2xl p-12">
            <Calendar className="h-16 w-16 text-primary mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Never Miss a Session</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Download the complete schedule and add it to your calendar. Stay updated with any changes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download PDF Schedule
              </motion.button>
              <motion.button 
                className="px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Add to Calendar
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Schedule;