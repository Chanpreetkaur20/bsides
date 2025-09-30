import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState(new Set([0])); // First item open by default
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const faqs = [
    {
      question: "What makes BSides Agra different from other conferences?",
      answer: "BSides Agra isn’t about suits, sales pitches, or polished talks. It’s about raw infosec — workshops, CTF battles, hacker villages, and community-driven sessions. It’s where firewalls fall, payloads drop, and real stories of hacking unfold."
    },
    {
      question: "Who can attend BSides Agra?",
      answer: "Everyone with a spark for cybersecurity — students, SOC defenders, red team operators, CTI analysts, exploit developers, bug bounty hunters, researchers, and even curious beginners. If you breathe security, you belong here."
    },
    {
      question: "Will there be a Capture The Flag (CTF)?",
      answer: "Yes. Our CTF is designed to push boundaries, blending multiple disciplines into two intense rounds. It’s not just a game — it’s a battlefield where skills, strategy, and persistence decide the winners."
    },
    {
      question: "Why Agra?",
      answer: "Because hackers aren’t just born in metros. Agra is known for heritage, not tech — and we’re here to change that. BSides Agra is the rebellion that puts small-town hacker grit on the global map."
    },
    {
      question: "What types of sessions will be available?",
      answer: "We'll have keynote presentations, technical talks, hands-on workshops, hacking villages, capture-the-flag competitions, and networking sessions. Content ranges from beginner-friendly to advanced technical deep-dives."
    },
    {
      question: "Can I submit a talk or workshop proposal?",
      answer: "Absolutely! We encourage community participation. Our Call for Papers (CFP) is open for talk and workshop submissions. We welcome diverse perspectives and innovative ideas in cybersecurity."
    },
    {
      question: "How can I become a sponsor or partner?",
      answer: "We offer various sponsorship packages for organizations looking to support the cybersecurity community. Please contact us at sponsor@bsidesagra.in for detailed sponsorship information and opportunities."
    },
  ];

  return (
    <section id="faq" className="section-padding bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6 text-gray-900">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Got questions about BSides Agra 2025? We've got answers! Find everything you need to know about the conference.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-card overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-4 sm:px-6 py-4 sm:py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openItems.has(index) ? (
                      <Minus className="h-5 w-5 text-primary" />
                    ) : (
                      <Plus className="h-5 w-5 text-gray-400" />
                    )}
                  </div>
                </button>
                
                <AnimatePresence>
                  {openItems.has(index) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                        <div className="border-t border-gray-100 pt-4">
                          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Still have questions CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          <div className="bg-white rounded-2xl shadow-elegant p-6 sm:p-8 md:p-12">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Still have questions?</h3>
            <p className="text-sm sm:text-base text-gray-600 mb-6 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Our team is here to help you with any questions about BSides Agra 2025.
            </p>
            <motion.button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
