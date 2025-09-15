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
      question: "What is BSides Agra?",
      answer: "BSides Agra is a community-driven cybersecurity conference that brings together security professionals, researchers, and enthusiasts. It's part of the global BSides movement, focusing on providing an open environment for the next generation of security professionals to learn and share knowledge."
    },
    {
      question: "When and where is BSides Agra 2025?",
      answer: "BSides Agra 2025 will be held on March 15-16, 2025, in Agra, Uttar Pradesh, India. The training sessions will be conducted on March 13-14, 2025. The exact venue details will be announced soon."
    },
    {
      question: "Who should attend BSides Agra?",
      answer: "BSides Agra is perfect for cybersecurity professionals, IT administrators, developers, students, researchers, and anyone interested in information security. Whether you're a beginner or an expert, there's something for everyone."
    },
    {
      question: "How much does it cost to attend?",
      answer: "BSides events are known for being affordable and accessible. Registration fees are kept minimal to cover basic costs. Early bird pricing and student discounts are available. Detailed pricing information will be announced with registration opening."
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
      question: "Is there accommodation assistance?",
      answer: "Yes, we'll provide information about recommended hotels and accommodation options in Agra. We're also working on group booking discounts for attendees."
    },
    {
      question: "What COVID-19 safety measures will be in place?",
      answer: "We're committed to ensuring a safe event. We'll follow all local health guidelines and implement appropriate safety measures. Updates on health protocols will be communicated closer to the event date."
    },
    {
      question: "How can I become a sponsor or partner?",
      answer: "We offer various sponsorship packages for organizations looking to support the cybersecurity community. Please contact us at sponsors@bsidesagra.in for detailed sponsorship information and opportunities."
    },
    {
      question: "Will sessions be recorded?",
      answer: "Selected sessions may be recorded with speaker consent and made available to the community. We respect speaker preferences and will clearly indicate which sessions are being recorded."
    }
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
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
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
                      <div className="px-6 pb-6">
                        <div className="border-t border-gray-100 pt-4">
                          <p className="text-gray-700 leading-relaxed">
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
          <div className="bg-white rounded-2xl shadow-elegant p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Still have questions?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Our team is here to help you with any questions about BSides Agra 2025.
            </p>
            <motion.button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
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