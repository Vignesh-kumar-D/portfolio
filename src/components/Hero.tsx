'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Icons
const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const EmailIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const ArrowDownIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
  </svg>
);
const BackgroundBubbles = () => {
  const bubblePositions = [
    { left: '10%', top: '20%' },
    { left: '30%', top: '70%' },
    { left: '50%', top: '30%' },
    { left: '70%', top: '60%' },
    { left: '90%', top: '40%' },
  ];

  return (
    <>
      {bubblePositions.map((position, i) => (
        <motion.div
          key={i}
          className="absolute w-72 h-72 bg-primary/10 rounded-full"
          initial={position}
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            delay: i * 2,
          }}
          style={position}
        />
      ))}
    </>
  );
};
const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const floatingAnimation = {
    y: [-10, 10],
    transition: {
      y: {
        duration: 2,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
      },
    },
  };

  return (
    <div className="hero min-h-screen hero-gradient overflow-hidden">
      {/* Only render background animations on client side */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden">
          <BackgroundBubbles />
        </div>
      )}

      <div className="hero-content text-center z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl"
        >
          {/* Welcome Text */}
          <motion.div variants={item}>
            <div className="badge badge-primary badge-outline text-lg p-4 mb-8">
              Welcome to my portfolio
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            variants={item}
            className="text-5xl md:text-7xl font-bold mb-8"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span className="inline-block">Hello, I&apos;m </span>
            <AnimatePresence>
              <motion.span
                className="text-primary inline-block"
                animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
              >
                Vignesh Kumar
              </motion.span>
            </AnimatePresence>
          </motion.h1>

          {/* Role */}
          <motion.p
            variants={item}
            className="text-xl md:text-2xl mb-12 text-base-content/80"
          >
            Senior Frontend Engineer at Victoria&apos;s Secret & Co
          </motion.p>

          {/* Stats Cards */}
          <motion.div
            variants={item}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            {[
              { metric: '40%', desc: 'Reduced Page Load Time' },
              { metric: '60%', desc: 'Improved Data Fetch Speed' },
              { metric: '35%', desc: 'Dev Time Reduction' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="animated-border-card"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="card card-gradient w-full h-full p-6">
                  <motion.h3
                    className="text-4xl font-bold text-primary mb-2"
                    animate={mounted ? floatingAnimation : {}}
                  >
                    {stat.metric}
                  </motion.h3>
                  <p className="text-base-content/80">{stat.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={item}
            className="flex justify-center gap-6 mb-12"
          >
            {[
              { Icon: GitHubIcon, href: 'https://github.com/Vignesh-kumar-D' },
              {
                Icon: LinkedInIcon,
                href: 'https://linkedin.com/in/d-vignesh-kumar',
              },
              { Icon: EmailIcon, href: 'mailto:dvigneshkumar3@gmail.com' },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-circle btn-ghost text-primary"
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.Icon />
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={item}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.button
              className="btn btn-primary btn-lg gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work <ArrowDownIcon />
            </motion.button>
            <motion.button
              className="btn btn-outline btn-primary btn-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
