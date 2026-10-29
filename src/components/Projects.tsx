import React, { useState } from 'react';
import { Cloud, Sparkles, Network, Eye, ExternalLink, ArrowUpRight, Search } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData.ts';
import { Project, filterProjects } from '../utils/portfolio.ts';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredProjects = filterProjects(PROJECTS_DATA, selectedCategory, searchQuery);

  const getIconForCategory = (cat: string) => {
    switch (cat) {
      case 'cloud':
        return <Cloud className="w-6 h-6 text-[#FF007A]" />;
      case 'ai':
        return <Sparkles className="w-6 h-6 text-[#FF007A]" />;
      case 'systems':
        return <Network className="w-6 h-6 text-[#FF007A]" />;
      default:
        return <Eye className="w-6 h-6 text-[#FF007A]" />;
    }
  };

  return (
    <section id="projects" className="py-12 sm:py-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FF007A] bg-[#FFF0F7] dark:bg-[#FF007A]/15 border border-[#FF007A]/25 px-3 py-1 rounded-full mb-2">
            Featured Work
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#131218] dark:text-white">
            Projects
          </h2>
          <p className="text-sm sm:text-base text-[#5E5B6A] dark:text-gray-300 mt-1">
            Practical applications in AI systems and cloud environments
          </p>
        </div>

        {/* Search input */}
        <div className="relative w-full md:w-64">
          <Search className="w-4 h-4 text-[#5E5B6A] dark:text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            placeholder="Search projects & stack..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-full bg-white dark:bg-[#181622] border border-[#EBE8F0] dark:border-white/10 text-[#131218] dark:text-white placeholder-[#5E5B6A]/60 dark:placeholder-gray-500 focus:outline-none focus:border-[#FF007A]"
          />
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-3 mb-6 no-scrollbar">
        {[
          { id: 'all', label: 'All Projects' },
          { id: 'cloud', label: 'Cloud Infrastructure' },
          { id: 'ai', label: 'Machine Learning & AI' },
          { id: 'systems', label: 'Distributed Systems' },
        ].map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setSelectedCategory(tab.id)}
            className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
              selectedCategory === tab.id
                ? 'bg-[#FF007A] text-white shadow-[0_4px_12px_rgba(255,0,122,0.35)]'
                : 'bg-white/80 dark:bg-[#181622]/80 text-[#5E5B6A] dark:text-gray-300 border border-[#EBE8F0] dark:border-white/10 hover:border-[#FF007A]/40'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <div className="text-center py-12 bg-white/50 dark:bg-[#181622]/50 border border-dashed border-[#EBE8F0] dark:border-white/10 rounded-3xl p-8">
          <p className="text-[#5E5B6A] dark:text-gray-400 text-sm">
            No projects found matching "{searchQuery}".
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedCategory('all');
              setSearchQuery('');
            }}
            className="mt-3 text-xs font-semibold text-[#FF007A] underline"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group relative bg-white/85 dark:bg-[#181622]/85 backdrop-blur-xl border border-[#FF007A]/18 dark:border-[#FF007A]/25 rounded-3xl p-6 sm:p-7 shadow-[0_10px_25px_-3px_rgba(26,18,42,0.05)] hover:shadow-[0_20px_40px_-6px_rgba(255,0,122,0.22)] hover:border-[#FF007A] transition-all duration-300 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Icon Wrap & Quick Indicator */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-13 h-13 rounded-2xl bg-[#FFF0F7] dark:bg-[#FF007A]/15 border border-[#FF007A]/20 flex items-center justify-center transition-transform group-hover:scale-110">
                    {getIconForCategory(project.category)}
                  </div>

                  <span className="text-xs font-bold text-[#FF007A] bg-[#FFF0F7] dark:bg-[#FF007A]/15 border border-[#FF007A]/20 px-2.5 py-1 rounded-full">
                    {index % 2 === 0 ? '✦' : '⚡'} Project 0{index + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display text-xl sm:text-2xl font-bold text-[#131218] dark:text-white tracking-tight mb-2 group-hover:text-[#FF007A] transition-colors flex items-center justify-between">
                  <span>{project.title}</span>
                  <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transform -translate-x-1 group-hover:translate-x-0 transition-all text-[#FF007A]" />
                </h3>

                {/* Description */}
                <p className="text-sm text-[#5E5B6A] dark:text-gray-300 leading-relaxed mb-4">
                  {project.shortDesc}
                </p>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-black/[0.03] dark:bg-white/[0.05] text-[#5E5B6A] dark:text-gray-300 border border-black/5 dark:border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="text-[11px] font-medium px-2 py-0.5 text-[#5E5B6A] dark:text-gray-400">
                      +{project.techStack.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              {/* Footer */}
              <div className="pt-4 border-t border-[#EBE8F0] dark:border-white/10 flex items-center justify-between text-xs font-semibold">
                <span className="text-[#FF007A] bg-[#FF007A]/10 px-2.5 py-1 rounded-full">
                  {project.tag}
                </span>

                <span className="inline-flex items-center gap-1 text-[#5E5B6A] dark:text-gray-300 group-hover:text-[#FF007A] transition-colors">
                  <span>Open Simulator</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
};
