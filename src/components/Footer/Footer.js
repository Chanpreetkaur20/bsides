import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Instagram, Linkedin, Github, Mail, Phone, MapPin } from 'lucide-react';


const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Twitter, label: 'Twitter', url: 'https://twitter.com/bsidesagra' },
    { icon: Instagram, label: 'Instagram', url: 'https://instagram.com/bsidesagra' },
    { icon: Linkedin, label: 'LinkedIn', url: 'https://linkedin.com/company/bsidesagra' },
    { icon: Github, label: 'GitHub', url: 'https://github.com/bsidesagra' },
  ];

  // Footer link sections based on user image
  const quickLinks = [
    { name: 'Register Now', href: '#register' },
    { name: 'Call for Papers', href: '#cfp' },
    { name: 'Sponsors', href: '#sponsors' },
    { name: 'Speakers', href: '#speakers' },
    { name: 'Schedule', href: '#schedule' },
  ];
  const overviewLinks = [
    { name: 'About', href: '#about' },
    { name: 'Events', href: '#events' },
    { name: 'Contact', href: '#contact' },
    { name: 'Faq', href: '#faq' },
  ];

  return (
    <footer className="bg-[#10131a] text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-12">
          {/* Left: Logo, mail, socials */}
          <div className="flex-1 flex flex-col space-y-6 min-w-[220px]">
            <div className="flex-1 flex items-center min-w-[120px]">
            <img 
              src="/Agra 3.png" 
              alt="BSides Agra Logo" 
              className="h-[250px] object-contain"
            />
          </div>
            <div className="flex items-center space-x-2 text-gray-300 text-base">
              <Mail size={18} className="text-primary flex-shrink-0" />
              <span>info@bsidesagra.in</span>
            </div>
            <div className="flex space-x-3 mt-2">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-800 hover:bg-primary/80 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Right: 3 link sections */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-gray-300 hover:text-primary transition-colors text-base">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Overview */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Overview</h4>
              <ul className="space-y-2">
                {overviewLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-gray-300 hover:text-primary transition-colors text-base">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} BSides Agra — All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#conduct" className="text-gray-400 hover:text-primary transition-colors">Code of Conduct</a>
            <a href="#privacy" className="text-gray-400 hover:text-primary transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;