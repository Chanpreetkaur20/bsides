import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Mail } from 'lucide-react';
// import { MacbookScroll } from "../UI/macbook-scroll";

const Sponsors = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const sponsorTiers = [
    {
      tier: 'Platinum Sponsors',
      description: 'Our premier partners making BSides Agra possible',
      sponsors: [
        {
          name: 'CyberTech Solutions',
          logo: '/A1.png',
          website: 'https://cybertech.com',
          description: 'Leading cybersecurity solutions provider'
        },
        {
          name: 'SecureNet India',
          logo: '/sponsors/securenet.png',
          website: 'https://securenet.in',
          description: 'Enterprise security and compliance experts'
        }
      ]
    },
    {
      tier: 'Gold Sponsors',
      description: 'Valued partners supporting our mission',
      sponsors: [
        {
          name: 'InfoSec Academy',
          logo: '/sponsors/infosec-academy.png',
          website: 'https://infosecacademy.com',
          description: 'Cybersecurity training and certification'
        },
        {
          name: 'TechGuard Systems',
          logo: '/sponsors/techguard.png',
          website: 'https://techguard.com',
          description: 'Advanced threat detection solutions'
        },
        {
          name: 'DataShield Corp',
          logo: '/sponsors/datashield.png',
          website: 'https://datashield.com',
          description: 'Data protection and privacy solutions'
        }
      ]
    },
    {
      tier: 'Silver Sponsors',
      description: 'Supporting the cybersecurity community',
      sponsors: [
        {
          name: 'CloudSec Pro',
          logo: '/sponsors/cloudsec.png',
          website: 'https://cloudsec.pro',
          description: 'Cloud security specialists'
        },
        {
          name: 'PenTest Labs',
          logo: '/sponsors/pentest.png',
          website: 'https://pentestlabs.com',
          description: 'Penetration testing services'
        },
        {
          name: 'CyberEd Institute',
          logo: '/sponsors/cybered.png',
          website: 'https://cybered.edu',
          description: 'Cybersecurity education platform'
        },
        {
          name: 'SecureCode Inc',
          logo: '/sponsors/securecode.png',
          website: 'https://securecode.com',
          description: 'Application security solutions'
        }
      ]
    },
    {
      tier: 'Community Partners',
      description: 'Organizations supporting our community initiatives',
      sponsors: [
        {
          name: 'OWASP India',
          logo: '/sponsors/owasp.png',
          website: 'https://owasp.org/www-chapter-india',
          description: 'Open Web Application Security Project'
        },
        {
          name: 'ISACA Delhi',
          logo: '/sponsors/isaca.png',
          website: 'https://isaca.org/chapters/delhi',
          description: 'Information Systems Audit and Control Association'
        },
        {
          name: 'Null Security',
          logo: '/sponsors/null.png',
          website: 'https://null.community',
          description: 'Open security community'
        }
      ]
    }
  ];

  const sponsorshipPackages = [
    {
      name: 'Platinum',
      price: '₹5,00,000',
      color: 'from-gray-400 to-gray-600',
      benefits: [
        'Prime booth location',
        'Speaking slot (30 minutes)',
        'Logo on all materials',
        'Social media mentions',
        '10 conference passes',
        'Dedicated networking session'
      ]
    },
    {
      name: 'Gold',
      price: '₹3,00,000',
      color: 'from-yellow-400 to-yellow-600',
      benefits: [
        'Premium booth space',
        'Lightning talk (15 minutes)',
        'Logo on website & materials',
        'Social media mentions',
        '6 conference passes',
        'Networking opportunities'
      ]
    },
    {
      name: 'Silver',
      price: '₹1,50,000',
      color: 'from-gray-300 to-gray-500',
      benefits: [
        'Standard booth space',
        'Logo on website',
        'Social media mentions',
        '4 conference passes',
        'Networking access'
      ]
    }
  ];

  // Custom Macbook Scroll for Sponsors
  // const SponsorsMacbookScroll = () => {
  //   return (
  //     <div className="w-full overflow-hidden bg-white dark:bg-[#0B0B0F] py-20">
  //       <MacbookScroll
  //         title={
  //           <span>
  //             BSides Agra 2025 Sponsorship <br /> Premium Visibility & Impact
  //           </span>
  //         }
  //         badge={
  //           <div className="h-10 w-10 -rotate-12 transform bg-red-600 rounded-full flex items-center justify-center">
  //             <span className="text-white font-bold text-xs">BSA</span>
  //           </div>
  //         }
  //         src={`/sponsors/macbook-showcase.png`}
  //         showGradient={true}
  //       />
  //     </div>
  //   );
  // };

  return (
    <section id="sponsors" className="bg-gray-50">
      {/* Macbook Scroll Section */}
      {/* <SponsorsMacbookScroll /> */}
      
      <div className="container mx-auto px-6 py-20">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6 text-gray-900">
            Our <span className="gradient-text">Sponsors</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're grateful to our sponsors and partners who make BSides Agra possible and support 
            the cybersecurity community's growth and development.
          </p>
        </motion.div>

        {/* Sponsor Tiers */}
        <div className="space-y-16">
          {sponsorTiers.map((tier, tierIndex) => (
            <motion.div
              key={tier.tier}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: tierIndex * 0.2 }}
            >
              <div className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {tier.tier}
                </h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  {tier.description}
                </p>
              </div>

              <div className={`grid grid-cols-1 ${
                tier.sponsors.length <= 2 ? 'md:grid-cols-2' : 
                tier.sponsors.length <= 3 ? 'md:grid-cols-3' : 
                'md:grid-cols-2 lg:grid-cols-4'
              } gap-8 justify-items-center`}>
                {tier.sponsors.map((sponsor, index) => (
                  <motion.div
                    key={sponsor.name}
                    className="bg-white rounded-xl shadow-card hover-lift p-8 text-center w-full max-w-sm"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: tierIndex * 0.2 + index * 0.1 }}
                  >
                    <div className="w-32 h-32 mx-auto mb-6 bg-gray-100 rounded-lg flex items-center justify-center">
                      <img 
                        src={sponsor.logo}
                        alt={sponsor.name}
                        className="max-w-full max-h-full rounded-lg object-contain"
                      />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      {sponsor.name}
                    </h4>
                    <p className="text-gray-600 text-sm mb-4">
                      {sponsor.description}
                    </p>
                    <a
                      href={sponsor.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
                    >
                      <span>Visit Website</span>
                      <ExternalLink size={16} />
                    </a>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sponsorship Packages */}
        <motion.div
          className="mt-24"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Become a <span className="gradient-text">Sponsor</span>
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Partner with us to support the cybersecurity community and showcase your organization 
              to hundreds of security professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {sponsorshipPackages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                className="bg-white rounded-xl shadow-card hover-lift overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.9 + index * 0.1 }}
              >
                <div className={`h-2 bg-gradient-to-r ${pkg.color}`}></div>
                <div className="p-8">
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h4>
                  <div className="text-3xl font-bold text-primary mb-6">{pkg.price}</div>
                  <ul className="space-y-3">
                    {pkg.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start space-x-3">
                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        </div>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <motion.a
              href="mailto:sponsors@bsidesagra.in"
              className="inline-flex items-center space-x-2 btn-primary text-lg px-8 py-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={20} />
              <span>Contact Us for Sponsorship</span>
            </motion.a>
            <p className="text-gray-600 mt-4">
              Custom packages available. Let's discuss how we can work together!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Sponsors;