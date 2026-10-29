import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#EBE8F0] dark:border-white/10 bg-white/80 dark:bg-[#12111A]/80 backdrop-blur-md py-8 px-4 sm:px-6 transition-colors duration-200">
      <div className="max-w-[1060px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-[#5E5B6A] dark:text-gray-400">
        <div>
          © {currentYear} <strong className="text-[#131218] dark:text-white font-bold">Wiem Saidi</strong> · 2 Prepa TIC at EPI · AI and Cloud
        </div>

        <div className="flex items-center gap-1.5">
          <span>Engineered with passion &amp;</span>
          <span className="font-semibold text-[#FF007A]">#FF007A Vibrant Magenta</span>
        </div>

        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/[0.03] dark:bg-white/[0.05] hover:bg-[#FF007A]/10 text-[#131218] dark:text-white hover:text-[#FF007A] transition-colors cursor-pointer"
        >
          <span>Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};
