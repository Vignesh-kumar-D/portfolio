'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type Experience = (typeof experiences)[number];

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

const experiences = [
  {
    title: 'Frontend Development Engineer',
    company: "Victoria's Secret & Co",
    period: 'December 2023 - August 2025',
    achievements: [
      'Developed POS application from scratch with React, React Native, Node.js/Express, and PostgreSQL serving million+ customers daily',
      'Architected Context Provider-based state management reducing re-renders and streamlined common component conventions for scalability',
      'Implemented Node.js WebSocket service fetching product data on barcode scans, cutting lookup latency significantly',
      'Optimized cart operations from 7s → 2s via memoization and state restructuring; enhanced TypeScript strictness and CI testing (80%+ coverage)',
      'Identified and resolved critical performance and security gaps; raised PRs, documented improvements, and gained leadership approval',
      'Mentored 5 junior developers, established coding standards, and improved delivery speed by 25%',
    ],
  },
  {
    title: 'SDE-II',
    company: 'ShopUp',
    period: 'March 2022 - December 2023',
    achievements: [
      'Engineered component library used by 6+ teams, reducing development time by 35%',
      'Orchestrated micro-frontend architecture via Module Federation enabling 5+ teams to collaborate independently',
      'Automated CI/CD pipelines reducing release cycles from 2 hours → 30 minutes with zero downtime',
      'Redesigned real-time analytics dashboards and engineered role-based access control (5 tiers) improving reporting by 60%',
    ],
  },
  {
    title: 'Program Analyst',
    company: 'Cognizant Technology Solutions',
    period: 'May 2019 - March 2022',
    achievements: [
      'Reduced API latency by 30% via caching and React hook optimization',
      'Decreased JS bundle size by 60% using tree-shaking, minification, and code splitting, boosting initial rendering by 45%',
      'Delivered 95% of sprint goals consistently across 8 quarters maintaining code quality standards',
    ],
  },
] as const;

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  experience,
  index,
}) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
      animate={inView ? { x: 0, opacity: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="flex"
    >
      {/* Timeline Column */}
      <div className="flex flex-col items-center w-16">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: index * 0.2 }}
          className="w-4 h-4 rounded-full bg-primary border-4 border-base-100"
        />
        {index !== experiences.length - 1 && (
          <div className="w-0.5 h-full bg-gradient-to-b from-primary via-secondary to-primary" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pb-16">
        <div className="card bg-base-200/50 backdrop-blur-sm shadow-xl hover:shadow-primary/10 transition-all duration-300">
          <div className="card-body">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
              <div>
                <h3 className="card-title text-xl text-primary">
                  {experience.title}
                </h3>
                <p className="text-lg text-secondary">{experience.company}</p>
              </div>
              <div className="badge badge-primary badge-outline min-h-fit h-auto px-3 py-2 whitespace-normal text-center">
                {experience.period}
              </div>
            </div>

            <ul className="flex flex-col gap-3">
              {experience.achievements.map((achievement, idx) => (
                <motion.li
                  key={idx}
                  initial={{ x: -20, opacity: 0 }}
                  animate={inView ? { x: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.2 + idx * 0.1 }}
                  className="flex gap-2"
                >
                  <motion.span
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      repeatDelay: 2,
                    }}
                    className="text-primary flex-shrink-0 mt-1.5"
                  >
                    ▹
                  </motion.span>
                  <span className="text-base-content">{achievement}</span>
                </motion.li>
              ))}
            </ul>

            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              {getTechStack(experience.company).map((tech, idx) => (
                <motion.span
                  key={idx}
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.2 + idx * 0.05,
                  }}
                  className="badge badge-secondary badge-outline"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const getTechStack = (company: string): string[] => {
  switch (company) {
    case "Victoria's Secret & Co":
      return ['React.js', 'React Native', 'Node.js', 'Express.js', 'PostgreSQL', 'WebSocket'];
    case 'ShopUp':
      return ['React.js', 'Module Federation', 'Component Library', 'CI/CD', 'Analytics'];
    case 'Cognizant Technology Solutions':
      return ['React.js', 'JavaScript', 'Caching', 'Bundle Optimization', 'REST APIs'];
    default:
      return [];
  }
};

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="flex flex-col min-h-screen py-20 bg-base-100">
      {/* Background gradient */}
      <div className="flex flex-col flex-1">
        <div className="container mx-auto px-4">
          {/* Section Title */}
          <motion.div
            ref={ref}
            initial={{ y: -50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            className="flex flex-col items-center text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Professional Journey
            </h2>
            <p className="text-base-content max-w-2xl">
              A timeline of my professional experience and key achievements in
              building scalable web applications and leading development teams.
            </p>
          </motion.div>

          {/* Experience Timeline */}
          <div className="max-w-4xl mx-auto">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={experience.company}
                experience={experience}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
