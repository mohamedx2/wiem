import React, { useState, useEffect } from 'react';
import { X, ExternalLink, Cpu, Cloud, Gauge, Sliders, CheckCircle2, Activity } from 'lucide-react';
import { Project, calculateCloudMetrics, evaluateModelPerformance } from '../utils/portfolio.ts';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Cloud simulator state
  const [trafficLoad, setTrafficLoad] = useState<number>(65);
  const [instanceCount, setInstanceCount] = useState<number>(3);

  // AI simulator state
  const [decisionThreshold, setDecisionThreshold] = useState<number>(0.5);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const cloudMetrics = calculateCloudMetrics(trafficLoad, instanceCount);
  const aiMetrics = evaluateModelPerformance(decisionThreshold, 1000);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fade-in"
    >
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white dark:bg-[#181622] border border-[#FF007A]/30 rounded-3xl p-6 sm:p-8 shadow-2xl">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#EBE8F0] dark:border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FF007A] bg-[#FFF0F7] dark:bg-[#FF007A]/15 px-2.5 py-0.5 rounded-full">
                {project.categoryLabel}
              </span>
              <span className="text-xs text-[#5E5B6A] dark:text-gray-400">
                · {project.tag}
              </span>
            </div>
            <h3
              id="modal-project-title"
              className="font-display text-2xl sm:text-3xl font-bold text-[#131218] dark:text-white"
            >
              {project.title}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close project modal"
            className="p-2 rounded-full text-[#5E5B6A] dark:text-gray-300 hover:text-[#FF007A] hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Body */}
        <div className="py-5 space-y-6">
          <p className="text-base text-[#5E5B6A] dark:text-gray-200 leading-relaxed">
            {project.fullDesc}
          </p>

          {/* Metric Highlights */}
          <div className="grid grid-cols-3 gap-3">
            {project.metrics.map((m) => (
              <div
                key={m.label}
                className="p-3.5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/5 dark:border-white/10 text-center"
              >
                <div className="text-xs text-[#5E5B6A] dark:text-gray-400 mb-1">{m.label}</div>
                <div className="font-display text-lg sm:text-xl font-bold text-[#FF007A] tabular-nums">
                  {m.value}
                </div>
              </div>
            ))}
          </div>

          {/* Highlights List */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#131218] dark:text-white mb-2.5 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#FF007A]" />
              <span>Architectural Features &amp; Implementation</span>
            </h4>
            <ul className="space-y-2 text-sm text-[#5E5B6A] dark:text-gray-300">
              {project.highlights.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF007A] mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Interactive Live Playground / Simulator */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-[#FAF9FB] to-[#FFF0F7] dark:from-[#131218] dark:to-[#22172A] border border-[#FF007A]/20">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Sliders className="w-4 h-4 text-[#FF007A]" />
                <h4 className="text-sm font-bold text-[#131218] dark:text-white">
                  Interactive Simulator: {project.category === 'cloud' ? 'Cluster Auto-Scaling' : 'Inference Benchmark'}
                </h4>
              </div>
              <span className="text-[11px] font-semibold text-[#FF007A] bg-[#FF007A]/10 px-2 py-0.5 rounded-full">
                Live Prototype
              </span>
            </div>

            {project.category === 'cloud' ? (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <div className="flex justify-between text-xs font-medium text-[#5E5B6A] dark:text-gray-300 mb-1.5">
                      <span>Simulated Traffic Load</span>
                      <span className="font-bold text-[#FF007A]">{trafficLoad}%</span>
                    </div>
                    <input
                      type="range"
                      min="10"
                      max="100"
                      value={trafficLoad}
                      onChange={(e) => setTrafficLoad(Number(e.target.value))}
                      className="w-full accent-[#FF007A] cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-medium text-[#5E5B6A] dark:text-gray-300 mb-1.5">
                      <span>Active Instance Replicas</span>
                      <span className="font-bold text-[#FF007A]">{instanceCount} pods</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="8"
                      value={instanceCount}
                      onChange={(e) => setInstanceCount(Number(e.target.value))}
                      className="w-full accent-[#FF007A] cursor-pointer"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2.5 pt-2 text-center">
                  <div className="p-2.5 rounded-xl bg-white dark:bg-[#181622] border border-[#FF007A]/15">
                    <span className="text-[11px] text-[#5E5B6A] dark:text-gray-400 block">Avg CPU</span>
                    <span className="font-display font-bold text-sm sm:text-base text-[#131218] dark:text-white">
                      {cloudMetrics.cpuUtilization}%
                    </span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white dark:bg-[#181622] border border-[#FF007A]/15">
                    <span className="text-[11px] text-[#5E5B6A] dark:text-gray-400 block">Latency</span>
                    <span className="font-display font-bold text-sm sm:text-base text-[#131218] dark:text-white">
                      {cloudMetrics.latencyMs} ms
                    </span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white dark:bg-[#181622] border border-[#FF007A]/15">
                    <span className="text-[11px] text-[#5E5B6A] dark:text-gray-400 block">Throughput</span>
                    <span className="font-display font-bold text-sm sm:text-base text-[#FF007A]">
                      {cloudMetrics.throughputRps} rps
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-medium text-[#5E5B6A] dark:text-gray-300 mb-1.5">
                    <span>Classification Decision Threshold</span>
                    <span className="font-bold text-[#FF007A]">{decisionThreshold.toFixed(2)}</span>
                  </div>
                  <input
                    type="range"
                    min="0.1"
                    max="0.9"
                    step="0.05"
                    value={decisionThreshold}
                    onChange={(e) => setDecisionThreshold(Number(e.target.value))}
                    className="w-full accent-[#FF007A] cursor-pointer"
                  />
                </div>

                <div className="grid grid-cols-3 gap-2.5 pt-2 text-center">
                  <div className="p-2.5 rounded-xl bg-white dark:bg-[#181622] border border-[#FF007A]/15">
                    <span className="text-[11px] text-[#5E5B6A] dark:text-gray-400 block">Precision</span>
                    <span className="font-display font-bold text-sm sm:text-base text-[#131218] dark:text-white">
                      {(aiMetrics.precision * 100).toFixed(1)}%
                    </span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white dark:bg-[#181622] border border-[#FF007A]/15">
                    <span className="text-[11px] text-[#5E5B6A] dark:text-gray-400 block">Recall</span>
                    <span className="font-display font-bold text-sm sm:text-base text-[#131218] dark:text-white">
                      {(aiMetrics.recall * 100).toFixed(1)}%
                    </span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white dark:bg-[#181622] border border-[#FF007A]/15">
                    <span className="text-[11px] text-[#5E5B6A] dark:text-gray-400 block">F1 Score</span>
                    <span className="font-display font-bold text-sm sm:text-base text-[#FF007A]">
                      {aiMetrics.f1Score.toFixed(3)}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#5E5B6A] dark:text-gray-400 mb-2">
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-semibold px-3 py-1 rounded-lg bg-black/[0.04] dark:bg-white/[0.06] text-[#131218] dark:text-white border border-black/5 dark:border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-[#EBE8F0] dark:border-white/10 flex items-center justify-between gap-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#FF007A] hover:underline"
          >
            <span>View Source on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-[#FF007A] to-[#FF2E93] hover:from-[#E6006E] hover:to-[#FF007A] rounded-full shadow-md transition-all cursor-pointer"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
