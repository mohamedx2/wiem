import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, Send } from 'lucide-react';

interface NavbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
  onOpenContactModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  isDark,
  onToggleTheme,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'skills', 'contact'];
      const scrollPos = window.scrollY + 140;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-[#FAF9FB]/90 dark:bg-[#0F0E14]/90 backdrop-blur-md border-b border-[#EBE8F0] dark:border-white/10 transition-colors duration-200">
      <div className="max-w-[1060px] mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#hero"
          className="font-display font-bold text-lg sm:text-xl text-[#131218] dark:text-white inline-flex items-center gap-2.5 whitespace-nowrap shrink-0 hover:opacity-90 transition-opacity"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF007A] shadow-[0_0_10px_#FF007A] inline-block animate-pulse" />
          <span>Wiem Saidi</span>
        </a>

        {/* Zone 2: 4-5 single-line navigation links */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-6 text-sm font-medium text-[#5E5B6A] dark:text-gray-300"
        >
          <a
            href="#hero"
            className={`transition-colors whitespace-nowrap shrink-0 hover:text-[#FF007A] ${
              activeSection === 'hero' ? 'text-[#FF007A] font-semibold' : ''
            }`}
          >
            Home
          </a>
          <a
            href="#about"
            className={`transition-colors whitespace-nowrap shrink-0 hover:text-[#FF007A] ${
              activeSection === 'about' ? 'text-[#FF007A] font-semibold' : ''
            }`}
          >
            About
          </a>
          <a
            href="#projects"
            className={`transition-colors whitespace-nowrap shrink-0 hover:text-[#FF007A] ${
              activeSection === 'projects' ? 'text-[#FF007A] font-semibold' : ''
            }`}
          >
            Projects
          </a>
          <a
            href="#skills"
            className={`transition-colors whitespace-nowrap shrink-0 hover:text-[#FF007A] ${
              activeSection === 'skills' ? 'text-[#FF007A] font-semibold' : ''
            }`}
          >
            Skills
          </a>
          <a
            href="#contact"
            className={`transition-colors whitespace-nowrap shrink-0 hover:text-[#FF007A] ${
              activeSection === 'contact' ? 'text-[#FF007A] font-semibold' : ''
            }`}
          >
            Contact
          </a>
        </nav>

        {/* Zone 3: 1 primary action + theme toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="p-2 rounded-full text-[#5E5B6A] dark:text-gray-300 hover:text-[#FF007A] dark:hover:text-[#FF007A] hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#FF007A] to-[#FF2E93] hover:from-[#E6006E] hover:to-[#FF007A] rounded-full shadow-[0_4px_15px_rgba(255,0,122,0.35)] hover:shadow-[0_6px_20px_rgba(255,0,122,0.5)] transition-all transform hover:-translate-y-0.5 whitespace-nowrap shrink-0"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 rounded-lg text-[#131218] dark:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#EBE8F0] dark:border-white/10 bg-white/95 dark:bg-[#181622]/95 backdrop-blur-lg px-6 py-4 flex flex-col gap-3 shadow-lg">
          <a
            href="#hero"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium py-1.5 text-[#131218] dark:text-white hover:text-[#FF007A]"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium py-1.5 text-[#131218] dark:text-white hover:text-[#FF007A]"
          >
            About
          </a>
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium py-1.5 text-[#131218] dark:text-white hover:text-[#FF007A]"
          >
            Projects
          </a>
          <a
            href="#skills"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium py-1.5 text-[#131218] dark:text-white hover:text-[#FF007A]"
          >
            Skills
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium py-1.5 text-[#131218] dark:text-white hover:text-[#FF007A]"
          >
            Contact
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 text-center py-2.5 px-4 font-semibold text-white bg-gradient-to-r from-[#FF007A] to-[#FF2E93] rounded-full shadow-md"
          >
            Get in Touch
          </a>
        </div>
      )}
    </header>
  );
};
