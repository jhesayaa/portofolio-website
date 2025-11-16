'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Github, Send, Linkedin, Instagram, Twitter } from 'lucide-react';
import { SiDiscord } from 'react-icons/si';
import emailjs from '@emailjs/browser';
import ParallaxSection from './ParallaxSection';
import ScrambleText from './ScrambleText';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    console.log('Sending email with data:', {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
    });
    
    try {
        const result = await emailjs.send(
        'service_lt5xdp9', 
        'template_exil2mv',
        {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
        },
        'OQOFlVp-oI1NoVHm8'
        );

        console.log('SUCCESS:', result);
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error: any) {
        console.error('FULL ERROR:', error);
        console.error('Error text:', error.text);
        console.error('Error status:', error.status);
        setSubmitStatus('error');
        
        setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
        setIsSubmitting(false);
    }
    };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'jessa.andromeda@gmail.com',
      href: 'mailto:jessa.andromeda@gmail.com?subject=Project%20Inquiry&body=Hi%20Jhesaya,%0A%0AI%20would%20like%20to%20discuss...',
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: 'GitHub',
      value: 'github.com/jhesayaa',
      href: 'https://github.com/jhesayaa',
    },
    {
      icon: <SiDiscord className="w-5 h-5" />,
      label: 'Discord',
      value: '@auraxxfn',
      href: 'https://discordapp.com/users/982243600874237952',
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      label: 'Instagram',
      value: '@jhesayaa',
      href: 'https://instagram.com/jhesayaa',
    },
  ];

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
      href: 'https://www.linkedin.com/in/jhesaya-giovani-andromeda-25853a320?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden" ref={ref}>
      <ParallaxSection speed={0.1}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="relative inline-block mb-4">
              <div className="absolute inset-0 border-2 border-primary-500/40 rounded-xl blur-sm" />
              <div className="absolute inset-0 border border-primary-500/60 rounded-xl" />
              <h2 className="relative text-4xl sm:text-5xl font-bold px-8 py-4">
                Get In <ScrambleText className="gradient-text">Touch</ScrambleText>
              </h2>
            </div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Have a project in mind or want to collaborate? Feel free to reach out!
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="grid lg:grid-cols-2 gap-12"
          >
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-3 p-4 glass rounded-xl hover:border-primary-500 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-600 to-pink-600 flex items-center justify-center text-white group-hover:scale-110 transition-transform flex-shrink-0">
                      {info.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-gray-400">{info.label}</p>
                      <p className="text-white font-medium text-sm truncate">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
              <div className="glass rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Follow Me</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300`}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
              <div className="glass rounded-xl p-6 border-l-4 border-primary-500">
                <p className="text-gray-300 italic">
                  "Let's build something amazing together. Every great project starts with a conversation."
                </p>
              </div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-6">
                <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-primary-600 to-pink-600 text-white font-medium flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary-600/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-lg bg-green-500/20 border border-green-500/30 text-green-400 text-center"
                  >
                    ✓ Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-lg bg-red-500/20 border border-red-500/30 text-red-400 text-center"
                  >
                    ✗ Failed to send message. Please try again or email me directly.
                  </motion.div>
                )}
              </form>
            </motion.div>
          </motion.div>

          <div className="absolute top-20 left-10 w-32 h-32 bg-primary-500/10 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-pink-500/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </ParallaxSection>
    </section>
  );
};

export default Contact;