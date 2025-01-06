'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink, FiFolder, FiChrome } from 'react-icons/fi';

interface Technology {
  name: string;
  color: string;
}

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  liveLink?: string;
  githubLink: string;
  chromeLink?: string;
  technologies: Technology[];
  features: string[];
}

const projects: Project[] = [
  {
    id: 'homesquare',
    title: 'HomeSquare Expense',
    description:
      'Enterprise-grade project expense management system enabling organizations to efficiently track project budgets, allocate funds, and monitor expenses.',
    image:
      'https://github.com/user-attachments/assets/5ae84663-9bfc-4004-9623-006c742f3a96',
    liveLink: 'https://homesquareinternal.netlify.app/',
    githubLink: 'https://github.com/Vignesh-kumar-D/homesquare',
    technologies: [
      { name: 'React', color: 'text-blue-500' },
      { name: 'TypeScript', color: 'text-blue-600' },
      { name: 'Firebase', color: 'text-yellow-500' },
      { name: 'Recharts', color: 'text-green-500' },
    ],
    features: [
      'Real-time data synchronization',
      'Role-based access control',
      'Interactive analytics dashboard',
      'Receipt documentation upload',
    ],
  },
  {
    id: 'tierone',
    title: 'TierOne Microservices',
    description:
      'Micro-frontend architecture demonstration using Webpack 5&apos;s Module Federation, showcasing scalable enterprise application development.',
    image:
      'https://github.com/legendvi/module_fedration_tierOneSaas/assets/41253273/aa020476-7868-40de-98b5-fbcfc23c07bc',
    githubLink: 'https://github.com/Vignesh-kumar-D/tierone',
    technologies: [
      { name: 'React', color: 'text-blue-500' },
      { name: 'Vue.js', color: 'text-green-500' },
      { name: 'Webpack', color: 'text-blue-400' },
      { name: 'AWS', color: 'text-yellow-600' },
    ],
    features: [
      'Cross-framework compatibility',
      'Zero-coupling architecture',
      'Automated CI/CD pipeline',
      'CloudFront distribution',
    ],
  },
  {
    id: 'shorts-blocker',
    title: 'Shorts & Reels Blocker',
    description:
      'Chrome extension to combat short-form content addiction by blocking YouTube Shorts and Instagram Reels, helping users regain control of their attention.',
    image:
      'https://github.com/user-attachments/assets/6b2730c0-2323-4ca8-96fb-f5b7a45d3ad6',
    chromeLink:
      'https://chromewebstore.google.com/detail/shorts-reels-blocker/hddclpebfglijbmapdjminkkcafchkmb?utm_source=ext_app_menu',
    githubLink: 'https://github.com/Vignesh-kumar-D/shorts-blocker',
    technologies: [
      { name: 'JavaScript', color: 'text-yellow-400' },
      { name: 'Chrome API', color: 'text-blue-500' },
      { name: 'HTML', color: 'text-orange-500' },
      { name: 'CSS', color: 'text-blue-400' },
    ],
    features: [
      'Content filtering algorithm',
      'Real-time DOM manipulation',
      'Zero data collection',
      'Offline functionality',
    ],
  },
  {
    id: 'eat-chill',
    title: 'Eat & Chill Bot',
    description:
      'Slack bot that sparks food debates by collecting unpopular food opinions, utilizing serverless architecture and Notion integration.',
    image:
      'https://github.com/user-attachments/assets/adb3a4c6-ac1f-4326-b8c0-e9fb3a939442',
    githubLink: 'https://github.com/Vignesh-kumar-D/eat-chill',
    technologies: [
      { name: 'Node.js', color: 'text-green-600' },
      { name: 'Slack API', color: 'text-purple-500' },
      { name: 'Notion API', color: 'text-white-50' },
      { name: 'Netlify', color: 'text-teal-500' },
    ],
    features: [
      'Serverless architecture',
      'Real-time interactions',
      'Scheduled reminders',
      'Database integration',
    ],
  },
];

const ProjectCard: React.FC<{ project: Project; index: number }> = ({
  project,
  index,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 50, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div
        className="card bg-base-200/50 backdrop-blur-sm overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <figure className="relative h-48 overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full object-cover"
            animate={{
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="absolute inset-0 bg-primary/20 backdrop-blur-sm flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex gap-4">
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-circle btn-primary"
                >
                  <FiExternalLink className="w-5 h-5" />
                </a>
              )}
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-circle btn-primary"
              >
                <FiGithub className="w-5 h-5" />
              </a>
              {project.chromeLink && (
                <a
                  href={project.chromeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-circle btn-primary"
                >
                  <FiChrome className="w-5 h-5" />
                </a>
              )}
            </div>
          </motion.div>
        </figure>

        <div className="card-body">
          <h3 className="card-title text-primary flex items-center gap-2">
            <FiFolder className="w-5 h-5" />
            {project.title}
          </h3>
          <p className="text-base-content/80">{project.description}</p>

          <div className="flex flex-wrap gap-2 mt-4">
            {project.technologies.map((tech, idx) => (
              <motion.span
                key={tech.name}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className={`badge badge-outline ${tech.color}`}
              >
                {tech.name}
              </motion.span>
            ))}
          </div>

          <ul className="mt-4 space-y-2">
            {project.features.map((feature, idx) => (
              <motion.li
                key={idx}
                initial={{ x: -20, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : {}}
                transition={{ delay: 0.2 + idx * 0.1 }}
                className="flex items-center gap-2"
              >
                <span className="text-primary">▹</span>
                {feature}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="min-h-screen py-20 bg-base-100">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ y: -50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Featured Projects
          </h2>
          <p className="text-base-content max-w-2xl mx-auto">
            A showcase of my key projects, demonstrating expertise in frontend
            development, architecture design, and problem-solving.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
