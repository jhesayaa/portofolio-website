'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Rocket, Users, Github, Linkedin, Mail } from 'lucide-react';
import TiltCard from './TiltCard';
import ParallaxSection from './ParallaxSection';
import ProfileCard from './ProfileCard';
import ScrollVelocity from './ScrollVelocity';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const features = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code that follows best practices',
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Fast Performance',
      description: 'Optimizing applications for speed and efficiency',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'User-Focused',
      description: 'Creating intuitive experiences that users love',
    },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden" ref={ref}>
      <ParallaxSection speed={0.2}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Scroll Velocity Title */}
          <div className="mb-16 overflow-hidden">
            <ScrollVelocity 
              text="ABOUT ME" 
              baseVelocity={-2}
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold opacity-10"
            />
          </div>

          {/* Traditional Title (Optional - bisa dihapus kalau mau Scroll Velocity aja) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="text-center mb-16"
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl sm:text-5xl font-bold mb-4"
            >
              About <span className="gradient-text">Me</span>
            </motion.h2>
            <motion.div
              variants={itemVariants}
              className="w-20 h-1 bg-gradient-to-r from-primary-600 to-pink-600 mx-auto"
            ></motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="grid md:grid-cols-2 gap-12 items-center mb-16"
          >
            {/* Info & Buttons - Sebelah KIRI */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Text Info */}
              <div>
                <h3 className="text-4xl font-bold mb-2 gradient-text">
                  Jhesaya Giovani Andromeda
                </h3>
                <p className="text-2xl text-primary-400 mb-4">Full Stack Developer</p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  I'm a passionate Full Stack Developer with a love for creating 
                  beautiful and functional web applications. I specialize in modern 
                  web technologies and always strive to write clean, efficient code.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  My journey in web development started with a curiosity about how
                  things work on the internet, and it has evolved into a passion
                  for building solutions that make a real impact.
                </p>
              </div>

              {/* Social Buttons */}
              <div className="flex gap-4">
                <motion.a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-primary-500 text-white transition-all duration-300"
                >
                  <Github className="w-5 h-5" />
                  <span>GitHub</span>
                </motion.a>
                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-primary-500 text-white transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </motion.a>
                <motion.a
                  href="mailto:jhesaya@example.com"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary-600 to-pink-600 text-white transition-all duration-300 hover:shadow-lg hover:shadow-primary-600/50"
                >
                  <Mail className="w-5 h-5" />
                  <span>Email</span>
                </motion.a>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 gap-4 mt-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 10 }}
                    className="glass rounded-lg p-4 flex items-center gap-4 cursor-pointer transition-all duration-300 hover:border-primary-500"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-600/20 flex items-center justify-center text-primary-400">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">
                        {feature.title}
                      </h4>
                      <p className="text-gray-400 text-sm">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Profile Card - Sebelah KANAN */}
            <motion.div variants={itemVariants} className="flex justify-center md:justify-end">
              <ProfileCard />
            </motion.div>
          </motion.div>
        </div>
      </ParallaxSection>
    </section>
  );
};

export default About;