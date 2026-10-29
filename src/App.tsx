/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { About } from './components/About.tsx';
import { Projects } from './components/Projects.tsx';
import { Skills } from './components/Skills.tsx';
import { Contact } from './components/Contact.tsx';
import { Footer } from './components/Footer.tsx';
import { ProjectModal } from './components/ProjectModal.tsx';
import { AcademicModal } from './components/AcademicModal.tsx';
import { Project } from './utils/portfolio.ts';

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme_preference');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [academicModalOpen, setAcademicModalOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme_preference', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme_preference', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9FB] dark:bg-[#0F0E14] text-[#131218] dark:text-[#FAF9FB] transition-colors duration-200 selection:bg-[#FF007A]/25 selection:text-[#FF007A]">
      <Navbar
        isDark={isDark}
        onToggleTheme={toggleTheme}
      />

      <main className="flex-1 w-full max-w-[1060px] mx-auto px-4 sm:px-6">
        <Hero onOpenAcademicModal={() => setAcademicModalOpen(true)} />
        <About />
        <Projects onSelectProject={(project) => setSelectedProject(project)} />
        <Skills />
        <Contact />
      </main>

      <Footer />

      {/* Interactive Project Drawer / Simulator Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* EPI Academic Track / Prepa TIC Modal */}
      <AcademicModal
        isOpen={academicModalOpen}
        onClose={() => setAcademicModalOpen(false)}
      />
    </div>
  );
}
