'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiHeart, FiCoffee } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-base-200 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-2">
          <motion.div
            className="flex items-center gap-2 text-sm text-base-content/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span>Made with</span>
            <motion.span
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            >
              <FiHeart className="text-red-500" />
            </motion.span>
            <span>and</span>
            <motion.span
              animate={{
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            >
              <FiCoffee className="text-amber-600" />
            </motion.span>
            <span>by Vignesh Kumar</span>
          </motion.div>
          <motion.p
            className="text-xs text-base-content/60"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            © {new Date().getFullYear()} All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
