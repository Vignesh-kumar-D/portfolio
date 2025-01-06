'use client';

import React, { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const navItems = [
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'GitHub', href: '#github' },
  { label: 'Contact', href: '#contact' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isOpen
          ? 'bg-base-100/80 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name */}
          <motion.button
            onClick={() => handleNavClick('#info')}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="text-xl font-bold text-primary">VK</span>
          </motion.button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item, index) => (
              <motion.button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="text-base-content/80 hover:text-primary transition-colors"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {item.label}
              </motion.button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.nav
          className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
          initial="closed"
          animate={isOpen ? 'open' : 'closed'}
          variants={{
            open: { opacity: 1, height: 'auto' },
            closed: { opacity: 0, height: 0 },
          }}
        >
          <div className="py-4">
            {navItems.map((item, index) => (
              <motion.button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="block w-full text-left px-4 py-2 text-base-content/80 hover:text-primary hover:bg-base-200/50 transition-colors"
                variants={{
                  open: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: index * 0.1 },
                  },
                  closed: {
                    opacity: 0,
                    y: 20,
                    transition: { delay: index * 0.1 },
                  },
                }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>
        </motion.nav>
      </div>
    </motion.header>
  );
};

export default Header;
