import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  ArrowUpRight, 
  Mail
} from 'lucide-react';
import { DESIGNER_INFO } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero', sectionKey: 'hero' },
    { label: 'About', href: '#about', sectionKey: 'about' },
    { label: 'Projects', href: '#projects', sectionKey: 'projects' },
    { label: 'Contact', href: '#contact', sectionKey: 'contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#09090b]/90 backdrop-blur-md border-b border-[#27272a]/80 py-3.5 shadow-2xl shadow-black/60' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* 1. LEFT: Logo */}
          <a 
            href="#hero"
            id="nav-brand-logo"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#hero');
            }}
            className="group flex items-center gap-3 text-left"
          >
            {/* Geometric Orange & Obsidian Logo Emblem */}
            <div className="relative w-10 h-10 rounded-xl bg-[#ff5500] flex items-center justify-center font-display font-extrabold text-white text-lg shadow-lg shadow-[#ff5500]/30 transition-transform group-hover:scale-105">
              <span className="tracking-tighter">YO</span>
              <div className="absolute -inset-0.5 rounded-xl bg-[#ff5500] opacity-30 blur-sm -z-10 group-hover:opacity-60 transition-opacity"></div>
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-lg sm:text-xl text-white tracking-tight group-hover:text-[#ff5500] transition-colors">
                  {DESIGNER_INFO.name}
                </span>
                <span className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#ff5500]/10 border border-[#ff5500]/30 text-[#ff5500] text-[11px] font-medium font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff5500] animate-pulse"></span>
                  Available
                </span>
              </div>
              <span className="text-[11px] text-zinc-400 font-mono tracking-wide hidden sm:block">
                Brand & Digital Designer
              </span>
            </div>
          </a>

          {/* 2. CENTER: Menu (home / about / projects / contact) */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-4 py-1.5 rounded-full bg-[#141418]/80 border border-[#27272a] backdrop-blur-md shadow-lg shadow-black/20">
            {navLinks.map((link) => {
              const isActive = activeSection === link.sectionKey;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#ff5500] text-white shadow-md shadow-[#ff5500]/30 font-semibold'
                      : 'text-zinc-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* 3. RIGHT: Button of "Contact Me" */}
          <div className="hidden md:flex items-center">
            <a
              id="nav-contact-me-btn"
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#ff5500] hover:bg-[#ff6600] text-white text-xs sm:text-sm font-bold shadow-lg shadow-[#ff5500]/30 hover:shadow-[#ff5500]/50 transition-all hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact Me</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              className="px-3.5 py-1.5 rounded-lg bg-[#ff5500] text-white text-xs font-bold shadow-md shadow-[#ff5500]/30"
            >
              Contact Me
            </a>

            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-[#141418] border border-[#27272a] text-zinc-300 hover:text-white"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0c0c0e]/95 backdrop-blur-xl border-b border-[#27272a] px-6 py-6 shadow-2xl"
          >
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => {
                const isActive = activeSection === link.sectionKey;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      isActive 
                        ? 'bg-[#ff5500] text-white font-bold' 
                        : 'text-zinc-300 hover:bg-[#18181c] hover:text-white'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}

              <div className="pt-4 border-t border-[#27272a] flex flex-col gap-2.5">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#contact');
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#ff5500] hover:bg-[#ff6600] text-white text-xs font-bold shadow-lg shadow-[#ff5500]/30"
                >
                  <Mail className="w-4 h-4" />
                  <span>Contact Me</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
