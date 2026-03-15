import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ExternalLink, ChevronDown, FileText, User, Github, Linkedin, Instagram } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#work' },
    { name: 'Resume', href: 'https://drive.google.com/file/d/1Z2q0RRsfQU5vGyYW81WK1puEnCpGK-eD/view?usp=sharing' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#') && !href.includes('drive.google.com')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`glass-nav ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container-custom flex items-center justify-between h-20">
        <a href="#" className="border-2 border-blue-500 px-4 py-1 rounded-full bg-white font-medium text-sm md:text-base hover:bg-blue-50 transition-colors">
          alias dev / “let’s validate the idea” guy
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-medium text-text-muted hover:text-accent-primary transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-text-dark"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 w-full bg-white shadow-xl md:hidden py-8 px-6 flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-text-dark"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const Hero = () => {
  const words = ['Recruiters', 'Designers', 'Developers', 'Internet'];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-white dotted-grid">
      {/* Floating Elements - Replicating the image vibe */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          animate={{ y: [0, -10, 0] }} 
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-[15%] left-[10%] border-2 border-blue-500 p-2 rounded-lg bg-white shadow-sm"
        >
          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" className="w-16 h-16" alt="Avatar" />
        </motion.div>

        <motion.div 
          animate={{ x: [0, 10, 0] }} 
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-[10%] right-[20%] border-2 border-blue-500 px-4 py-1 rounded-full bg-white font-medium"
        >
          Kapish Verma
        </motion.div>

        <motion.div 
          animate={{ y: [0, 15, 0] }} 
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute bottom-[20%] left-[15%] border-2 border-blue-500 p-3 rounded-lg bg-white"
        >
          <Github className="text-black" size={24} />
        </motion.div>

        <motion.div 
          animate={{ x: [0, -15, 0] }} 
          transition={{ duration: 4.5, repeat: Infinity }}
          className="absolute top-[40%] left-[5%] border-2 border-blue-500 px-4 py-1 rounded-full bg-white font-medium"
        >
          Kapish Verma
        </motion.div>

        <motion.div 
          animate={{ y: [0, -20, 0] }} 
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute top-[20%] right-[10%] border-2 border-blue-500 p-2 rounded-lg bg-white"
        >
          <Instagram className="text-pink-500" size={24} />
        </motion.div>

        <motion.div 
          animate={{ x: [0, 20, 0] }} 
          transition={{ duration: 5.5, repeat: Infinity }}
          className="absolute bottom-[30%] right-[15%] border-2 border-blue-500 p-2 rounded-lg bg-white"
        >
          <Linkedin className="text-blue-600" size={24} />
        </motion.div>

        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute bottom-[15%] right-[5%] border-2 border-blue-500 px-4 py-1 rounded-full bg-white font-medium"
        >
          New Delhi
        </motion.div>
      </div>

      <div className="text-center z-10">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-light mb-2"
        >
          Hi there,
        </motion.p>
        <div className="h-24 md:h-32 flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.h1
              key={words[index]}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ duration: 0.5, ease: "circOut" }}
              className="text-6xl md:text-8xl font-bold tracking-tight"
            >
              {words[index]}
            </motion.h1>
          </AnimatePresence>
        </div>

        <div className="mt-16 flex items-center justify-center gap-4">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-widest text-text-muted">scroll</span>
            <button 
              onClick={scrollToAbout}
              className="w-12 h-12 border-2 border-purple-500 flex items-center justify-center rounded-lg hover:bg-purple-50 transition-colors"
            >
              <ChevronDown size={24} className="text-purple-600" />
            </button>
          </div>
          
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-widest text-text-muted">me</span>
            <button 
              onClick={scrollToAbout}
              className="w-12 h-12 border-2 border-purple-500 flex items-center justify-center rounded-lg hover:bg-purple-50 transition-colors"
            >
              <User size={24} className="text-purple-600" />
            </button>
          </div>

          <div className="flex flex-col items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-widest text-text-muted">cv</span>
            <a 
              href="https://drive.google.com/file/d/1Z2q0RRsfQU5vGyYW81WK1puEnCpGK-eD/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 border-2 border-purple-500 flex items-center justify-center rounded-lg hover:bg-purple-50 transition-colors"
            >
              <FileText size={24} className="text-purple-600" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
