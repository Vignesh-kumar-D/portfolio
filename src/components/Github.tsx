'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiStar, FiGitBranch, FiCode } from 'react-icons/fi';
import Image from 'next/image';
interface GitHubStats {
  commits: string;
  repositories: string;
  starsEarned: string;
  contributions?: string;
}

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  delay: number;
}

const StatCard: React.FC<StatCardProps> = ({ icon, value, label, delay }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : {}}
      transition={{
        type: 'spring',
        stiffness: 100,
        delay: delay,
        duration: 0.5,
      }}
      className="card bg-base-200 shadow-xl"
    >
      <div className="card-body items-center text-center">
        <div className="text-primary text-3xl mb-2">{icon}</div>
        <motion.h3
          className="text-4xl font-bold text-primary"
          initial={{ opacity: 0, y: 20 }}
          animate={
            inView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{ duration: 0.5, delay: delay + 0.2 }}
        >
          {value.toLocaleString()}
        </motion.h3>
        <p className="text-base-content/80">{label}</p>
      </div>
    </motion.div>
  );
};

const ParallaxSection: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <motion.div style={{ y }} className="relative z-10">
      {children}
    </motion.div>
  );
};

const CurrentWork = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="card bg-base-200/50 backdrop-blur-sm shadow-xl overflow-hidden"
    >
      <div className="card-body">
        <h3 className="card-title text-2xl text-primary mb-4">
          Currently Building
        </h3>
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <Image
              width={300}
              height={300}
              src="/images/good_game_theory.png"
              alt="TheGoodGameTheory"
              className="w-16 h-16 rounded-lg"
            />
            <div>
              <h4 className="text-xl font-semibold mb-2">TheGoodGameTheory</h4>
              <p className="text-base-content/80">
                Building an AI-powered game-based learning platform that
                revolutionizes education through interactive experiences.
                Combining cutting-edge AI technology with gamification to create
                engaging educational content.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            {[
              'AI/ML',
              'React',
              'TypeScript',
              'Node.js',
              'Game Development',
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ delay: index * 0.1 }}
                className="badge badge-primary"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const GitHub = () => {
  const stats: GitHubStats = {
    commits: '1200+',
    repositories: '80+',
    starsEarned: '150+',
  };
  // contributions: 450,add later
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="min-h-screen py-20 bg-base-100 overflow-hidden">
      <div className="container mx-auto px-4">
        <ParallaxSection>
          <motion.div
            ref={ref}
            initial={{ y: -50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Open Source Contributions
            </h2>
            <p className="text-base-content max-w-2xl mx-auto">
              Actively contributing to open source projects and building new
              technologies. Currently focused on educational technology and AI
              integration.
            </p>
          </motion.div>

          {/* Current Work Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <CurrentWork />
          </div>

          {/* GitHub Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <StatCard
              icon={<FiCode />}
              value={stats.commits}
              label="Total Commits"
              delay={0}
            />
            <StatCard
              icon={<FiGithub />}
              value={stats.repositories}
              label="Repositories"
              delay={0.1}
            />
            <StatCard
              icon={<FiStar />}
              value={stats.starsEarned}
              label="Stars Earned"
              delay={0.2}
            />
            {stats.contributions && (
              <StatCard
                icon={<FiGitBranch />}
                value={stats.contributions}
                label="Contributions"
                delay={0.3}
              />
            )}
          </div>

          {/* GitHub Activity Graph */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="card bg-base-200/50 backdrop-blur-sm p-6"
          >
            {/* eslint-disable-next-line @next/next/no-img-element
             */}
            <img
              width={100}
              height={100}
              src="https://github-readme-stats.vercel.app/api?username=Vignesh-kumar-D&show_icons=true&theme=radical"
              alt="GitHub Stats"
              className="w-full h-auto rounded-xl"
            />
          </motion.div>
        </ParallaxSection>
      </div>
    </section>
  );
};

export default GitHub;
