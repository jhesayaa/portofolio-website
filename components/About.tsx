'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { User, GraduationCap, Star, Github, Linkedin, Instagram, Mail } from 'lucide-react';
import TiltCard from './TiltCard';
import ParallaxSection from './ParallaxSection';
import ProfileCard from './ProfileCard';
import ScrollVelocityFramer from './ScrollVelocityFramer';
import ScrollReveal from './ScrollReveal';

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

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github className="w-5 h-5" />,
      href: 'https://github.com/jhesayaa',
      color: 'hover:border-gray-400'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5" />,
      href: 'https://www.linkedin.com/in/jhesaya-giovani-andromeda-25853a320?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      color: 'hover:border-blue-400'
    },
    {
      name: 'Instagram',
      icon: <Instagram className="w-5 h-5" />,
      href: 'https://instagram.com/jhesayaa',
      color: 'hover:border-pink-400'
    },
    {
      name: 'Email',
      icon: <Mail className="w-5 h-5" />,
      href: 'mailto:jessa.andromeda@gmail.com',
      color: 'hover:border-primary-400'
    },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden" ref={ref}>
      <ParallaxSection speed={0.2}>
        <div className="mb-16 w-full">
          <ScrollVelocityFramer
            text="ABOUT ME"
            velocity={5}
            className="gradient-text opacity-50"
          />
          <ScrollVelocityFramer
            text="ABOUT ME"
            velocity={-5}
            className="gradient-text opacity-40"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="grid md:grid-cols-2 gap-12 items-center mb-16"
          >
            <motion.div variants={itemVariants} className="space-y-6">
              <TiltCard>
                <div className="glass rounded-2xl p-6 border border-white/10 hover:border-primary-500 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-600 to-pink-600 flex items-center justify-center">
                      <User className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold gradient-text">Introduction</h3>
                  </div>
                  <ScrollReveal
                    baseOpacity={0}
                    enableBlur={true}
                    baseRotation={3}
                    blurStrength={6}
                    textClassName="text-gray-300 leading-relaxed"
                  >
                    I'm an Information Technology student at Dian Nuswantoro University with a passion for AI, full-stack development, and creating innovative digital solutions. Currently in my 1st semester with a focus on building modern web applications.
                  </ScrollReveal>
                </div>
              </TiltCard>
              <TiltCard>
                <div className="glass rounded-2xl p-6 border border-white/10 hover:border-primary-500 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-600 to-pink-600 flex items-center justify-center">
                      <GraduationCap className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold gradient-text">Education</h3> 
                  </div>
                  <div className="mb-4 p-4 bg-white/5 rounded-xl border border-white/5">
                    <div className="flex items-start gap-3 mb-2">
                      <GraduationCap className="w-5 h-5 text-primary-400 mt-1" />
                      <div className="flex-1">
                        <h4 className="text-lg font-bold gradient-text">Dian Nuswantoro University</h4>
                        <p className="text-sm text-gray-400">Bachelor's in Informatics Engineering</p>
                        <p className="text-xs text-gray-500">Aug 2025 – Present</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mt-3">
                      <Star className="w-4 h-4 text-primary-400" />
                      <span className="text-sm font-semibold text-white">GPA: - /4.0</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 bg-gradient-to-br from-primary-600/20 to-pink-600/20 rounded-xl border border-primary-500/30 text-center">
                      <div className="text-2xl font-bold gradient-text">1st</div>
                      <div className="text-xs text-gray-400">Current Semester</div>
                    </div>
                    <div className="p-3 bg-gradient-to-br from-primary-600/20 to-pink-600/20 rounded-xl border border-primary-500/30 text-center">
                      <div className="text-2xl font-bold gradient-text">-</div>
                      <div className="text-xs text-gray-400">Current GPA</div>
                    </div>
                  </div>
                </div>
              </TiltCard>
              <TiltCard>
                <div className="glass rounded-2xl p-6 border border-white/10 hover:border-primary-500 transition-all duration-300">
                  <h3 className="text-xl font-bold gradient-text mb-4">Connect With Me</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 ${social.color} transition-all duration-300 group`}
                      >
                        <div className="text-gray-400 group-hover:text-primary-400 transition-colors">
                          {social.icon}
                        </div>
                        <span className="text-sm font-medium text-white">{social.name}</span>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
            <motion.div variants={itemVariants} className="flex items-center justify-center md:justify-end">
              <ProfileCard />
            </motion.div>
          </motion.div>
        </div>
      </ParallaxSection>
    </section>
  );
};

export default About;