'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Twitter, Heart, ArrowUp } from 'lucide-react';
import { SiDiscord } from 'react-icons/si';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github className="w-5 h-5" />,
      href: 'https://github.com/jhesayaa',
      color: 'hover:text-gray-400',
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5" />,
      href: 'https://linkedin.com/in/jhesayaa',
      color: 'hover:text-blue-400',
    },
    {
      name: 'Instagram',
      icon: <Instagram className="w-5 h-5" />,
      href: 'https://instagram.com/jhesayaa',
      color: 'hover:text-pink-400',
    },
    {
      name: 'Discord',
      icon: <SiDiscord className="w-5 h-5" />,
      href: 'https://discordapp.com/users/982243600874237952',
      color: 'hover:text-indigo-400',
    },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4">
              <span className="gradient-text">Jhesaya Giovani Andromeda</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Full Stack Developer & IT Student passionate about creating innovative web solutions and cutting-edge user experiences.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:ml-auto"
          >
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Get In Touch</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="mailto:jessa.andromeda@gmail.com"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  jessa.andromeda@gmail.com
                </a>
              </li>
              <li className="text-gray-400">Semarang, Indonesia</li>
              <li>
                <a
                  href="https://github.com/jhesayaa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  github.com/jhesayaa
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm text-center md:text-left"
            >
              © {currentYear} Jhesaya. Made with{' '}
              <Heart className="w-4 h-4 inline text-red-500 fill-red-500" /> using Next.js & Tailwind CSS
            </motion.p>

            {/* Back to Top Button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-primary-600 to-pink-600 text-white text-sm font-medium hover:shadow-lg hover:shadow-primary-600/50 transition-all duration-300"
            >
              <ArrowUp className="w-4 h-4" />
              Back to Top
            </motion.button>
          </div>
        </div>
      </div>

      {/* Decorative Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-50"></div>
    </footer>
  );
};

export default Footer;