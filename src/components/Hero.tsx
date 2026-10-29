import React from 'react';
import { ArrowRight, Mail, Sparkles, GraduationCap, Cpu, Cloud, Database } from 'lucide-react';

interface HeroProps {
  onOpenAcademicModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAcademicModal }) => {
  return (
    <section id="hero" className="pt-10 sm:pt-16 pb-12 sm:pb-16 flex flex-col items-center">
      <div className="w-full relative overflow-hidden bg-white/85 dark:bg-[#181622]/85 backdrop-blur-xl border border-[#FF007A]/20 dark:border-[#FF007A]/30 rounded-3xl p-6 sm:p-10 md:p-14 shadow-[0_20px_45px_-10px_rgba(255,0,122,0.14)] dark:shadow-[0_20px_45px_-10px_rgba(255,0,122,0.2)]">
        {/* Decorative soft ambient gradient */}
        <div
          aria-hidden="true"
          className="absolute -top-24 -right-24 w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-gradient-to-br from-[#FF007A]/15 to-[#9D4EDD]/10 blur-2xl pointer-events-none"
        />

        {/* Hero Meta Badges */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-5 sm:mb-6">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#FF007A] bg-gradient-to-r from-[#FFF0F7] to-[#FDF2F8] dark:from-[#FF007A]/15 dark:to-[#9D4EDD]/15 border border-[#FF007A]/30 px-3.5 py-1.5 rounded-full shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#FF007A] shadow-[0_0_8px_#FF007A] animate-ping" />
            <span>✨ Women in Tech &amp; Engineering</span>
          </div>

          <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#9D4EDD] dark:text-[#C77DFF] bg-[#9D4EDD]/10 border border-[#9D4EDD]/25 px-3 py-1.5 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-[#FF007A]" />
            <span>⚡ AI &amp; Cloud Pioneer</span>
          </div>

          <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#131218] dark:text-white bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 px-3 py-1.5 rounded-full">
            <GraduationCap className="w-3.5 h-3.5 text-[#FF007A]" />
            <span>2 Prepa TIC · EPI</span>
          </div>
        </div>

        {/* Hero Name with signature gradient */}
        <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl tracking-tight leading-[1.08] mb-3 text-[#131218] dark:text-white">
          Wiem{' '}
          <span className="bg-gradient-to-r from-[#FF007A] via-[#FF2E93] to-[#9D4EDD] bg-clip-text text-transparent">
            Saidi
          </span>
        </h1>

        {/* Specialization indicator */}
        <div className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#5E5B6A] dark:text-gray-300 tracking-tight mb-4 flex items-center gap-2 flex-wrap">
          <span>Specialization:</span>
          <span className="bg-gradient-to-r from-[#FF007A] to-[#9D4EDD] bg-clip-text text-transparent font-bold">
            AI and Cloud ✦
          </span>
        </div>

        {/* Bio statement */}
        <p className="text-base sm:text-lg text-[#5E5B6A] dark:text-gray-300 max-w-2xl font-normal leading-relaxed mb-8 flex items-start gap-2.5">
          <span className="text-xl text-[#FF007A] select-none shrink-0" aria-hidden="true">
            💖
          </span>
          <span>
            Building the future of Cloud &amp; Intelligent Systems with passion, mathematical precision,
            and bold technological innovation. Currently pursuing <strong>2 Prepa TIC at EPI</strong>.
          </span>
        </p>

        {/* Action buttons */}
        <div className="flex flex-wrap items-center gap-3.5">
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-[#FF007A] via-[#FF3399] to-[#9D4EDD] hover:from-[#E6006E] hover:to-[#8338EC] rounded-full shadow-[0_10px_25px_-3px_rgba(255,0,122,0.45)] hover:shadow-[0_16px_32px_-4px_rgba(255,0,122,0.6)] transform hover:-translate-y-0.5 transition-all cursor-pointer whitespace-nowrap"
          >
            <span>Explore Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm sm:text-base font-semibold text-[#131218] dark:text-white bg-white dark:bg-[#201D2E] hover:bg-[#FFF0F7] dark:hover:bg-[#FF007A]/15 border border-[#EBE8F0] dark:border-white/15 hover:border-[#FF007A]/50 rounded-full shadow-xs transform hover:-translate-y-0.5 transition-all whitespace-nowrap"
          >
            <Mail className="w-4 h-4 text-[#FF007A]" />
            <span>Contact Information</span>
          </a>

          <button
            type="button"
            onClick={onOpenAcademicModal}
            className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm sm:text-base font-semibold text-[#9D4EDD] dark:text-[#C77DFF] bg-[#9D4EDD]/10 hover:bg-[#9D4EDD]/20 border border-[#9D4EDD]/30 rounded-full shadow-xs transform hover:-translate-y-0.5 transition-all cursor-pointer whitespace-nowrap"
          >
            <GraduationCap className="w-4 h-4" />
            <span>Academic Track (EPI)</span>
          </button>
        </div>
      </div>

      {/* KPI / Foundation Strip */}
      <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-6">
        <div className="p-4 rounded-2xl bg-white/70 dark:bg-[#181622]/70 border border-[#FF007A]/15 dark:border-white/10 backdrop-blur-sm flex flex-col gap-1">
          <div className="flex items-center gap-2 text-[#FF007A]">
            <GraduationCap className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-wider">Studies</span>
          </div>
          <span className="font-display text-lg sm:text-xl font-bold text-[#131218] dark:text-white">
            2 Prepa TIC
          </span>
          <span className="text-xs text-[#5E5B6A] dark:text-gray-400">EPI International</span>
        </div>

        <div className="p-4 rounded-2xl bg-white/70 dark:bg-[#181622]/70 border border-[#FF007A]/15 dark:border-white/10 backdrop-blur-sm flex flex-col gap-1">
          <div className="flex items-center gap-2 text-[#FF007A]">
            <Cpu className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-wider">Specialty</span>
          </div>
          <span className="font-display text-lg sm:text-xl font-bold text-[#131218] dark:text-white">
            AI &amp; Cloud
          </span>
          <span className="text-xs text-[#5E5B6A] dark:text-gray-400">Systems &amp; Inference</span>
        </div>

        <div className="p-4 rounded-2xl bg-white/70 dark:bg-[#181622]/70 border border-[#FF007A]/15 dark:border-white/10 backdrop-blur-sm flex flex-col gap-1">
          <div className="flex items-center gap-2 text-[#9D4EDD]">
            <Cloud className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-wider">Architecture</span>
          </div>
          <span className="font-display text-lg sm:text-xl font-bold text-[#131218] dark:text-white">
            Cloud Native
          </span>
          <span className="text-xs text-[#5E5B6A] dark:text-gray-400">Containers &amp; APIs</span>
        </div>

        <div className="p-4 rounded-2xl bg-white/70 dark:bg-[#181622]/70 border border-[#FF007A]/15 dark:border-white/10 backdrop-blur-sm flex flex-col gap-1">
          <div className="flex items-center gap-2 text-[#9D4EDD]">
            <Database className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-wider">Rigor</span>
          </div>
          <span className="font-display text-lg sm:text-xl font-bold text-[#131218] dark:text-white">
            Math &amp; Code
          </span>
          <span className="text-xs text-[#5E5B6A] dark:text-gray-400">Algorithmic Base</span>
        </div>
      </div>
    </section>
  );
};
