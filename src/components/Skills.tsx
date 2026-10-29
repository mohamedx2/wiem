import React, { useState } from 'react';
import {
  Code,
  Cloud,
  Cpu,
  Binary,
  Brain,
  Layers,
  Terminal,
  GitBranch,
  Sparkles,
} from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData.ts';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredSkills = SKILLS_DATA.filter((skill) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'prepa') return skill.category === 'math' || skill.category === 'algorithms';
    if (activeCategory === 'ai') return skill.category === 'programming';
    if (activeCategory === 'cloud') return skill.category === 'cloud' || skill.category === 'tools';
    return true;
  });

  const renderIcon = (iconName: string) => {
    const props = { className: 'w-5 h-5 text-[#FF007A]' };
    switch (iconName) {
      case 'Code':
        return <Code {...props} />;
      case 'Cloud':
        return <Cloud {...props} />;
      case 'Cpu':
        return <Cpu {...props} />;
      case 'Binary':
        return <Binary {...props} />;
      case 'Brain':
        return <Brain {...props} />;
      case 'Layers':
        return <Layers {...props} />;
      case 'Terminal':
        return <Terminal {...props} />;
      case 'GitBranch':
        return <GitBranch {...props} />;
      default:
        return <Sparkles {...props} />;
    }
  };

  return (
    <section id="skills" className="py-12 sm:py-16">
      <div className="mb-8">
        <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FF007A] bg-[#FFF0F7] dark:bg-[#FF007A]/15 border border-[#FF007A]/25 px-3 py-1 rounded-full mb-2">
          Competencies
        </span>
        <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#131218] dark:text-white">
          Core Skills
        </h2>
        <p className="text-sm sm:text-base text-[#5E5B6A] dark:text-gray-300 mt-1">
          Key domains derived from Prepa TIC, AI, and Cloud engineering
        </p>
      </div>

      <div className="bg-white/85 dark:bg-[#181622]/85 backdrop-blur-xl border border-[#FF007A]/20 dark:border-[#FF007A]/30 rounded-3xl p-6 sm:p-10 shadow-[0_12px_30px_-4px_rgba(255,0,122,0.1)] dark:shadow-[0_12px_30px_-4px_rgba(255,0,122,0.2)]">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <p className="text-sm sm:text-base text-[#5E5B6A] dark:text-gray-300 max-w-2xl leading-relaxed">
            Essential technical pillars developed through intensive preparatory studies (Prepa TIC at EPI)
            and continuous practice in machine learning systems, distributed computing, and software architectures:
          </p>

          {/* Category Filter */}
          <div className="flex items-center gap-1.5 p-1 bg-black/[0.03] dark:bg-white/[0.05] rounded-xl self-start md:self-auto">
            {[
              { id: 'all', label: 'All' },
              { id: 'prepa', label: 'Prepa Foundations' },
              { id: 'ai', label: 'AI & Data' },
              { id: 'cloud', label: 'Cloud & DevOps' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveCategory(tab.id)}
                className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  activeCategory === tab.id
                    ? 'bg-[#FF007A] text-white shadow-xs'
                    : 'text-[#5E5B6A] dark:text-gray-300 hover:text-[#131218] dark:hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              className="group bg-[#FAF9FB] dark:bg-[#12111A] border border-[#EBE8F0] dark:border-white/10 rounded-2xl p-5 flex flex-col justify-between gap-3 hover:bg-white dark:hover:bg-[#1A1826] hover:border-[#FF007A] hover:shadow-[0_12px_24px_-2px_rgba(255,0,122,0.22)] transform hover:-translate-y-1 transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FFF0F7] dark:bg-[#FF007A]/15 border border-[#FF007A]/20 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {renderIcon(skill.iconName)}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#9D4EDD] dark:text-[#C77DFF] bg-[#9D4EDD]/10 px-2 py-0.5 rounded-md">
                    {skill.level}
                  </span>
                </div>

                <h3 className="font-display font-bold text-base sm:text-lg text-[#131218] dark:text-white mb-1 group-hover:text-[#FF007A] transition-colors">
                  {skill.name}
                </h3>
                <span className="text-xs font-medium text-[#FF007A] block mb-2">
                  {skill.categoryLabel}
                </span>

                <p className="text-xs text-[#5E5B6A] dark:text-gray-400 leading-relaxed">
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
