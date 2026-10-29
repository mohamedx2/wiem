import React, { useState } from 'react';
import { GraduationCap, Sparkles, CheckCircle2, BookOpen, Layers, Award } from 'lucide-react';
import { ACADEMIC_CURRICULUM } from '../data/portfolioData.ts';

export const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <section id="about" className="py-12 sm:py-16">
      <div className="mb-8">
        <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FF007A] bg-[#FFF0F7] dark:bg-[#FF007A]/15 border border-[#FF007A]/25 px-3 py-1 rounded-full mb-2">
          About Me
        </span>
        <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#131218] dark:text-white">
          Background &amp; Studies
        </h2>
        <p className="text-sm sm:text-base text-[#5E5B6A] dark:text-gray-300 mt-1">
          Academic foundations at EPI and core specialization focus
        </p>
      </div>

      <div className="bg-white/85 dark:bg-[#181622]/85 backdrop-blur-xl border border-[#FF007A]/20 dark:border-[#FF007A]/30 rounded-3xl p-6 sm:p-10 shadow-[0_12px_30px_-4px_rgba(255,0,122,0.1)] dark:shadow-[0_12px_30px_-4px_rgba(255,0,122,0.2)] grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Lead Story */}
        <div className="lg:col-span-7 flex flex-col gap-5">
          <p className="text-base sm:text-lg text-[#131218] dark:text-gray-100 font-normal leading-relaxed">
            Welcome to my personal portfolio. I am currently pursuing my{' '}
            <strong className="text-[#FF007A] font-bold">2 Prepa TIC at EPI</strong> (École
            Pluridisciplinaire Internationale), dedicated to advancing rigorous theoretical foundations
            and practical engineering skills across{' '}
            <strong className="text-[#9D4EDD] dark:text-[#C77DFF] font-bold">
              AI and Cloud
            </strong>{' '}
            computing architectures.
          </p>

          <p className="text-sm sm:text-base text-[#5E5B6A] dark:text-gray-300 leading-relaxed">
            My academic training pairs intensive engineering mathematics (linear algebra, discrete logic,
            multivariate analysis) with modern systems software engineering—focusing on scalable
            microservices, cloud containerization, and data-driven artificial intelligence systems.
          </p>

          {/* Core Strengths Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/5 dark:border-white/10">
              <div className="w-8 h-8 rounded-lg bg-[#FF007A]/10 text-[#FF007A] flex items-center justify-center shrink-0">
                <BookOpen className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#131218] dark:text-white">Prepa Rigor</h4>
                <p className="text-xs text-[#5E5B6A] dark:text-gray-400">
                  Intensive scientific problem solving and algorithm design.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/5 dark:border-white/10">
              <div className="w-8 h-8 rounded-lg bg-[#9D4EDD]/10 text-[#9D4EDD] flex items-center justify-center shrink-0">
                <Layers className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#131218] dark:text-white">Cloud Architecture</h4>
                <p className="text-xs text-[#5E5B6A] dark:text-gray-400">
                  Containerized deployments, API design, and distributed nodes.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Focus Box & Academic Syllabus Tab */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="bg-gradient-to-br from-[#FFF0F7] to-[#FAF0FF] dark:from-[#FF007A]/10 dark:to-[#9D4EDD]/15 border border-[#FF007A]/25 rounded-2xl p-5 sm:p-6 shadow-[0_6px_20px_rgba(255,0,122,0.08)] flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <span className="text-[11px] font-bold tracking-wider uppercase text-[#FF007A]">
                Studies
              </span>
              <div className="text-lg sm:text-xl font-bold text-[#131218] dark:text-white flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-[#FF007A]" />
                <span>2 Prepa TIC</span>
              </div>
              <span className="text-xs text-[#5E5B6A] dark:text-gray-300">
                EPI (École Pluridisciplinaire Internationale)
              </span>
            </div>

            <div className="h-px bg-[#FF007A]/15 dark:bg-white/10" />

            <div className="flex flex-col gap-1">
              <span className="text-[11px] font-bold tracking-wider uppercase text-[#FF007A]">
                Description
              </span>
              <div className="text-lg sm:text-xl font-bold text-[#131218] dark:text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#FF007A]" />
                <span>AI and Cloud</span>
              </div>
              <span className="text-xs text-[#5E5B6A] dark:text-gray-300">
                Core technological domain &amp; specialization
              </span>
            </div>
          </div>

          {/* Interactive Syllabus Inspector */}
          <div className="p-4 rounded-2xl bg-white/70 dark:bg-[#181622]/70 border border-[#EBE8F0] dark:border-white/10">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#5E5B6A] dark:text-gray-300 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-[#FF007A]" />
                <span>Curriculum Modules</span>
              </span>
              <div className="flex gap-1">
                {ACADEMIC_CURRICULUM.map((track, idx) => (
                  <button
                    key={track.semester}
                    type="button"
                    onClick={() => setActiveTab(idx)}
                    className={`text-xs px-2.5 py-1 rounded-md transition-colors font-medium ${
                      activeTab === idx
                        ? 'bg-[#FF007A] text-white'
                        : 'text-[#5E5B6A] dark:text-gray-400 hover:text-[#131218] dark:hover:text-white'
                    }`}
                  >
                    Year {2 - idx}
                  </button>
                ))}
              </div>
            </div>

            <ul className="space-y-1.5 text-xs text-[#5E5B6A] dark:text-gray-300">
              {ACADEMIC_CURRICULUM[activeTab].modules.map((mod) => (
                <li key={mod} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FF007A] shrink-0" />
                  <span className="truncate">{mod}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
