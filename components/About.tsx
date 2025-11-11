'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Rocket, Users } from 'lucide-react';

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <motion.div variants={itemVariants}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-600 to-pink-600 rounded-lg blur-xl opacity-30"></div>
              <div className="relative glass rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4 text-primary-400">
                  Hi there! 👋
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  I'm Jhesaya Giovani Andromeda, a passionate Full Stack Developer
                  with a love for creating beautiful and functional web applications.
                  I specialize in modern web technologies and always strive to
                  write clean, efficient code.
                </p>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  My journey in web development started with a curiosity about how
                  things work on the internet, and it has evolved into a passion
                  for building solutions that make a real impact.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  When I'm not coding, you can find me exploring new technologies,
                  contributing to open-source projects, or sharing knowledge with
                  the developer community.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, x: 10 }}
                className="glass rounded-lg p-6 flex items-start space-x-4 cursor-pointer transition-all duration-300 hover:border-primary-500"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-600/20 flex items-center justify-center text-primary-400">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-white">
                    {feature.title}
                  </h4>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;