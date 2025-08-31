'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type SkillBarProps = {
  skill: { name: string; level: number };
  index: number;
};
const CrossLines = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent top-1/4 -left-full animate-[slideRight_3s_linear_infinite]" />
    <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent top-3/4 -right-full animate-[slideLeft_3s_linear_infinite]" />
    <div className="absolute h-full w-[1px] bg-gradient-to-b from-transparent via-primary/20 to-transparent -top-full left-1/4 animate-[slideDown_3s_linear_infinite]" />
    <div className="absolute h-full w-[1px] bg-gradient-to-b from-transparent via-primary/20 to-transparent -bottom-full right-1/4 animate-[slideUp_3s_linear_infinite]" />
  </div>
);

const skills = [
  {
    category: 'Frontend',
    technologies: [
      { name: 'React.js', level: 95 },
      { name: 'Next.js', level: 90 },
      { name: 'React Native', level: 85 },
      { name: 'TypeScript', level: 90 },
      { name: 'JavaScript', level: 95 },
      { name: 'HTML5/CSS3', level: 90 },
      { name: 'PWAs', level: 80 },
    ],
  },
  {
    category: 'Backend & APIs',
    technologies: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 80 },
      { name: 'REST APIs', level: 90 },
      { name: 'WebSocket', level: 75 },
      { name: 'GraphQL', level: 70 },
    ],
  },
  {
    category: 'Databases & Cloud',
    technologies: [
      { name: 'PostgreSQL', level: 80 },
      { name: 'MongoDB', level: 75 },
      { name: 'AWS Lambda', level: 75 },
      { name: 'AWS S3/EC2', level: 70 },
      { name: 'Vercel', level: 80 },
    ],
  },
  {
    category: 'State Management & Tools',
    technologies: [
      { name: 'Redux', level: 85 },
      { name: 'Context API', level: 90 },
      { name: 'Recoil', level: 75 },
      { name: 'Module Federation', level: 80 },
      { name: 'Webpack/Vite', level: 75 },
    ],
  },
  {
    category: 'Testing & DevOps',
    technologies: [
      { name: 'Jest/Vitest', level: 80 },
      { name: 'React Testing Library', level: 75 },
      { name: 'GitHub Actions', level: 80 },
      { name: 'CI/CD', level: 85 },
      { name: 'Sentry', level: 70 },
    ],
  },
  {
    category: 'AI/ML & Emerging',
    technologies: [
      { name: 'Generative AI', level: 65 },
      { name: 'LLMs', level: 60 },
      { name: 'Prompt Design', level: 70 },
      { name: 'AI Integration', level: 65 },
    ],
  },
];

const SkillBar = ({ skill: { name, level }, index }: SkillBarProps) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
      animate={inView ? { x: 0, opacity: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mb-4"
    >
      <div className="flex justify-between mb-1">
        <span className="text-base-content/80">{name}</span>
        <span className="text-primary">{level}%</span>
      </div>
      <div className="h-2 bg-base-200 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
        />
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="relative min-h-screen py-20 bg-base-100">
      <CrossLines />

      <div className="container mx-auto  px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Photo and Introduction */}
          <motion.div
            className="lg:w-1/3 mt-16"
            initial={{ x: -100, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            ref={ref}
          >
            <div className="relative">
              {/* Placeholder for photo - replace src with your photo */}
              <div className="w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-primary/20 glow-effect">
                {/* eslint-disable-next-line @next/next/no-img-element
                 */}
                <img
                  src="/images/vignesh_photo.png" // Replace with your photo
                  alt="Vignesh Kumar"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating badges */}
              <motion.div
                className="absolute -top-4 -right-4 badge badge-primary"
                animate={{ y: [-5, 5] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              >
                Full-Stack
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 badge badge-secondary"
                animate={{ y: [5, -5] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              >
                React & Node.js
              </motion.div>
            </div>

            <div className="mt-8 text-center lg:text-left">
              <h2 className="text-2xl font-bold mb-4">Technical Expertise</h2>
              <p className="text-base-content max-w-2xl mx-auto">
                With ~6 years of experience, I&apos;ve developed expertise
                across the full-stack spectrum, from React ecosystem to backend
                services, cloud infrastructure, and emerging AI technologies.
              </p>
            </div>
          </motion.div>

          {/* Skills */}
          <div className="lg:w-2/3 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ y: 50, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                className="card bg-base-200 shadow-xl"
              >
                <div className="card-body">
                  <h3 className="card-title text-primary mb-4">
                    {category.category}
                  </h3>
                  {category.technologies.map((skill, index) => (
                    <SkillBar key={skill.name} skill={skill} index={index} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
