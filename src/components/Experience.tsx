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
    period: 'December 2023 - Present',
    achievements: [
      'Collaborated with design teams to create visually appealing, accessible, and responsive user interfaces',
      'Reduced page load time by 40% through code splitting and lazy loading',
      'Developed mobile point-of-sale applications processing $50K+ daily transactions',
      'Mentored 5 junior developers, resulting in a 25% increase in team feature delivery speed',
    ],
  },
  {
    title: 'SDE-I',
    company: 'ShopUp',
    period: 'March 2022 - December 2023',
    achievements: [
      'Architected admin panels using Next.js and React Query, reducing data fetch times by 60%',
      'Implemented micro-frontend architecture with Module Federation',
      'Built a component library used by 6 teams, cutting development time by 35%',
      'Automated CI/CD pipelines, reducing deployment time from 2 hours to 30 minutes',
    ],
  },
  {
    title: 'Program Analyst',
    company: 'Cognizant Technology Solutions',
    period: 'May 2019 - March 2022',
    achievements: [
      'Optimized React components and implemented caching strategies, reducing API response times by 40%',
      'Improved page load time by 45% by reducing bundle size',
      'Maintained a 95% sprint completion rate across 8 consecutive quarters',
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
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
              <div className="flex flex-col">
                <h3 className="text-xl font-bold text-primary">
                  {experience.title}
                </h3>
                <p className="text-lg text-secondary">{experience.company}</p>
              </div>
              <span className="badge badge-primary badge-outline p-3">
                {experience.period}
              </span>
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
      return ['React.js', 'Next.js', 'TypeScript', 'AWS'];
    case 'ShopUp':
      return ['React.js', 'Module Federation', 'React Query', 'AWS'];
    case 'Cognizant Technology Solutions':
      return ['React.js', 'Redux', 'JavaScript', 'REST APIs'];
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
