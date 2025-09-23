import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const navItems = [
    {
      name: "Overview",
      href: "#home",
      hasDropdown: true,
      dropdownItems: [
        { name: "Team", href: "#team" },
        { name: "Code of Conduct", href: "#conduct" },
        { name: "Venue", href: "#venue" },
      ],
    },
    {
      name: "Conference",
      href: "#conference",
      hasDropdown: true,
      dropdownItems: [
        { name: "Sponsors", href: "#sponsors" },
        { name: "Speakers", href: "#speakers" },
        { name: "Call for Papers", href: "/cfp" },
      ],
    },
    { name: "Schedule", href: "#schedule" },
    { name: "Events", href: "#events" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Dynamic Island Pill */}
      <motion.div
        className={`flex items-center justify-between rounded-full px-6 ${
          isScrolled ? "py-2" : "py-3"
        } shadow-xl border border-gray-800`}
        animate={{
          backgroundColor: isScrolled
            ? "rgba(17, 24, 39, 0.95)" // darker when scrolled
            : "rgba(17, 24, 39, 0.5)",
          width: isScrolled ? "800px" : "900px",
          marginTop: isScrolled ? "16px" : "20px",
        }}
        transition={{ duration: 0.4 }}
      >
        {/* Logo */}
        <motion.div
          className="flex items-center space-x-3 cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          <img
            src="/Agra.png"
            alt="Agra Logo"
            className="h-10 w-10 object-contain"
          />
          <span className="text-gray-100 font-bold text-lg">AGRA</span>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <div key={item.name} className="relative">
              {item.hasDropdown ? (
                <div
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(item.name)}
                  onMouseLeave={() => setDropdownOpen(null)}
                >
                  <button className="flex items-center space-x-1 text-gray-300 hover:text-[#7B2CBF] transition-colors font-medium py-2">
                    <span>{item.name}</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>

                  <AnimatePresence>
                    {dropdownOpen === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 mt-2 w-48 bg-gray-800 rounded-xl shadow-lg border border-gray-700 py-2 z-50"
                      >
                        {item.dropdownItems?.map((dropItem) => (
                          <a
                            key={dropItem.name}
                            href={dropItem.href}
                            className="block px-4 py-2 text-gray-300 hover:text-[#7B2CBF] hover:bg-gray-700/50 transition-colors"
                          >
                            {dropItem.name}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <a
                  href={item.href}
                  className="text-gray-300 hover:text-[#7B2CBF] transition-colors font-medium py-2"
                >
                  {item.name}
                </a>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-gray-300 p-2 rounded-lg hover:bg-gray-800 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </motion.div>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden absolute top-full mt-3 bg-gray-900/95 border border-gray-800 rounded-2xl shadow-xl w-full max-w-[900px]"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <div key={item.name}>
                  <a
                    href={item.href}
                    className="block text-gray-300 hover:text-[#7B2CBF] transition-colors font-medium py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                  {item.hasDropdown && item.dropdownItems && (
                    <div className="ml-4 space-y-2 mt-2">
                      {item.dropdownItems.map((dropItem) => (
                        <a
                          key={dropItem.name}
                          href={dropItem.href}
                          className="block text-gray-400 hover:text-[#7B2CBF] transition-colors text-sm py-1"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {dropItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;