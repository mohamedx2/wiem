import React, { useEffect } from 'react';
import { X, GraduationCap, CheckCircle2, Download, BookOpen, School, Calendar } from 'lucide-react';
import { ACADEMIC_CURRICULUM } from '../data/portfolioData.ts';

interface AcademicModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AcademicModal: React.FC<AcademicModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-academic-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fade-in"
    >
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white dark:bg-[#181622] border border-[#FF007A]/30 rounded-3xl p-6 sm:p-8 shadow-2xl">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#EBE8F0] dark:border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#FFF0F7] dark:bg-[#FF007A]/15 border border-[#FF007A]/25 flex items-center justify-center text-[#FF007A] shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#FF007A]">
                Engineering Curriculum
              </span>
              <h3
                id="modal-academic-title"
                className="font-display text-2xl font-bold text-[#131218] dark:text-white"
              >
                2 Prepa TIC · EPI
              </h3>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close academic modal"
            className="p-2 rounded-full text-[#5E5B6A] dark:text-gray-300 hover:text-[#FF007A] hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="py-5 space-y-6">
          <div className="p-4 rounded-2xl bg-[#FFF0F7]/60 dark:bg-[#FF007A]/10 border border-[#FF007A]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
            <div>
              <div className="font-bold text-[#131218] dark:text-white text-sm flex items-center gap-1.5">
                <School className="w-4 h-4 text-[#FF007A]" />
                <span>École Pluridisciplinaire Internationale (EPI)</span>
              </div>
              <div className="text-[#5E5B6A] dark:text-gray-300 mt-0.5">
                Integrated Preparatory Cycle for Information and Communication Technologies
              </div>
            </div>
            <span className="inline-flex items-center gap-1 font-semibold text-[#FF007A] bg-white dark:bg-[#181622] px-2.5 py-1 rounded-full border border-[#FF007A]/30 whitespace-nowrap">
              <Calendar className="w-3.5 h-3.5" /> 2024 – Present
            </span>
          </div>

          {/* Curriculum breakdown */}
          <div className="space-y-4">
            {ACADEMIC_CURRICULUM.map((track) => (
              <div
                key={track.semester}
                className="p-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/5 dark:border-white/10"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-display font-bold text-base text-[#131218] dark:text-white flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-[#FF007A]" />
                    <span>{track.semester}</span>
                  </h4>
                  <span className="text-xs font-semibold text-[#9D4EDD] dark:text-[#C77DFF] bg-[#9D4EDD]/10 px-2 py-0.5 rounded-full">
                    {track.status}
                  </span>
                </div>
                <ul className="grid grid-cols-1 gap-2 mt-3 text-xs text-[#5E5B6A] dark:text-gray-300">
                  {track.modules.map((m) => (
                    <li key={m} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FF007A] shrink-0" />
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Core competencies acquired */}
          <div className="p-4 rounded-2xl bg-white dark:bg-[#12111A] border border-[#EBE8F0] dark:border-white/10">
            <h5 className="text-xs font-bold uppercase tracking-wider text-[#131218] dark:text-white mb-2">
              Integrated Technical Competencies
            </h5>
            <p className="text-xs text-[#5E5B6A] dark:text-gray-300 leading-relaxed">
              Preparation for cycle d'ingénieur with strong analytical modeling, rigorous algorithmic problem
              solving, microservice architecture design, and foundational research in modern artificial intelligence.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-[#EBE8F0] dark:border-white/10 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#5E5B6A] dark:text-gray-300 hover:text-[#FF007A] transition-colors cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Print / Save Curriculum</span>
          </button>

          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-[#FF007A] to-[#FF2E93] hover:from-[#E6006E] hover:to-[#FF007A] rounded-full shadow-md transition-all cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
