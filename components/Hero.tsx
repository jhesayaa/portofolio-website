'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = 'Full Stack Developer';
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
      >
        <motion.div variants={itemVariants} className="mb-4">
          <span className="text-primary-400 text-lg font-medium">
            Hi, my name is
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4"
        >
          <span className="gradient-text">Jhesaya Giovani</span>
          <br />
          <span className="text-white">Andromeda</span>
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="text-2xl sm:text-3xl md:text-4xl text-gray-400 mb-8 h-12 flex items-center justify-center"
        >
          <span className="text-primary-300">{text}</span>
          <span className="animate-pulse ml-1">|</span>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-gray-400 text-lg max-w-2xl mx-auto mb-12"
        >
          I build exceptional digital experiences that combine beautiful design
          with powerful functionality. Passionate about creating solutions that
          make a difference.
        </motion.p>

       <motion.div
          variants={itemVariants}
          className="flex justify-center space-x-6 mb-12"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/5 hover:bg-primary-600/20 border border-white/10 hover:border-primary-500 transition-all duration-300 group"
          >
            <Github className="w-6 h-6 text-gray-400 group-hover:text-primary-400 transition-colors" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/5 hover:bg-primary-600/20 border border-white/10 hover:border-primary-500 transition-all duration-300 group"
          >
            <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-primary-400 transition-colors" />
          </a>
          <a
            href="mailto:your.email@example.com"
            className="p-3 rounded-full bg-white/5 hover:bg-primary-600/20 border border-white/10 hover:border-primary-500 transition-all duration-300 group"
          >
            <Mail className="w-6 h-6 text-gray-400 group-hover:text-primary-400 transition-colors" />
          </a>
        </motion.div>

        <motion.div variants={itemVariants}>
          <a
            href="#about"
            className="inline-flex items-center px-8 py-3 rounded-full bg-primary-600 hover:bg-primary-700 text-white font-medium transition-all duration-300 hover:scale-105"
          >
            View My Work
            <ArrowDown className="ml-2 w-5 h-5 animate-bounce" />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-500 rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;