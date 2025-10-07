import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, Calendar, Clock, Users, Award } from 'lucide-react';
import GlassCard from '../GlassCard/GlassCard';
import FloatingParticles from '../FloatingParticles/FloatingParticles';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    type: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: '', email: '', company: '', message: '', type: 'general' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // ✅ Fixed structure starts here
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'contact@bsidesagra.com',
      description: 'Get in touch for general inquiries'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+91 89584 87060',
      description: 'Speak directly with our team'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'Agra, Uttar Pradesh, India',
      description: 'City of the Taj Mahal'
    }
  ];

  const quickStats = [
    { icon: Calendar, label: 'Event Date', value: 'March 13-16, 2025' },
    { icon: Clock, label: 'Duration', value: '4 Days' },
    { icon: Users, label: 'Expected Attendees', value: '500+' },
    { icon: Award, label: 'Speakers', value: '50+' }
  ];
  // ✅ Fixed structure ends here

  return (
    <section id="contact" className="relative section-padding bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Background Elements */}
      <FloatingParticles count={25} className="opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6 text-gray-900">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Have questions about BSides Agra 2025? Want to become a sponsor or speaker? 
            We'd love to hear from you!
          </p>
        </motion.div>

        {/* Quick Stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
        >
          {quickStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4 + index * 0.1 }}
            >
              <GlassCard 
                className="text-center p-6 hover-lift"
                opacity="bg-white/40"
                blur="backdrop-blur-xl"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full mb-4">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{stat.value}</h3>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5 }}
          >
            <GlassCard 
              className="p-8"
              opacity="bg-white/50"
              blur="backdrop-blur-xl"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg 
                                focus:ring-2 focus:ring-primary focus:border-transparent 
                                transition-colors bg-white/70 backdrop-blur-sm text-gray-900 text-sm sm:text-base"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg 
                                focus:ring-2 focus:ring-primary focus:border-transparent 
                                transition-colors bg-white/70 backdrop-blur-sm text-gray-900 text-sm sm:text-base"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg 
                              focus:ring-2 focus:ring-primary focus:border-transparent 
                              transition-colors bg-white/70 backdrop-blur-sm text-gray-900 text-sm sm:text-base"
                    placeholder="Your company or organization"
                  />
                </div>

                <div>
                  <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">
                    Inquiry Type
                  </label>
                  <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg 
                              focus:ring-2 focus:ring-primary focus:border-transparent 
                              transition-colors bg-white/70 backdrop-blur-sm text-gray-900 text-sm sm:text-base"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="speaker">Speaker Application</option>
                    <option value="sponsor">Sponsorship</option>
                    <option value="media">Media & Press</option>
                    <option value="volunteer">Volunteer</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg 
                              focus:ring-2 focus:ring-primary focus:border-transparent 
                              transition-colors bg-white/70 backdrop-blur-sm resize-none text-gray-900 text-sm sm:text-base sm:rows-5"
                    placeholder="Tell us about your inquiry..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </GlassCard>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.7 }}
            className="space-y-8"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <GlassCard 
                  className="p-6 hover-lift"
                  opacity="bg-white/40"
                  blur="backdrop-blur-xl"
                  whileHover={{ scale: 1.02, y: -3 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{info.title}</h3>
                      <p className="text-primary font-semibold mb-1">{info.details}</p>
                      <p className="text-gray-600 text-sm">{info.description}</p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.1 }}
            >
              <GlassCard 
                className="p-6"
                opacity="bg-gradient-to-br from-primary/10 to-secondary/10"
                blur="backdrop-blur-xl"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-4">Follow Us</h3>
                <p className="text-gray-600 mb-4">
                  Stay updated with the latest news and announcements about BSides Agra 2025.
                </p>
                <div className="flex space-x-4">
                  {['T', 'L', 'D'].map((item, i) => (
                    <motion.a
                      key={i}
                      href="#"
                      className="inline-flex items-center justify-center w-10 h-10 bg-primary text-white rounded-full hover:bg-secondary transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <span className="text-sm font-bold">{item}</span>
                    </motion.a>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
