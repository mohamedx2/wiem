import React, { useState } from 'react';
import { Mail, Check, Copy, ExternalLink, Send, MessageSquare } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const emailAddress = 'wiemsaidi28@gmail.com';

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setStatus('error');
      setErrorMsg('Please complete all required fields (Name, Email, Message).');
      return;
    }

    if (!formState.email.includes('@') || !formState.email.includes('.')) {
      setStatus('error');
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setFormState({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 6000);
    }, 600);
  };

  return (
    <section id="contact" className="py-12 sm:py-16">
      <div className="mb-8">
        <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FF007A] bg-[#FFF0F7] dark:bg-[#FF007A]/15 border border-[#FF007A]/25 px-3 py-1 rounded-full mb-2">
          Connect
        </span>
        <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#131218] dark:text-white">
          Contact
        </h2>
        <p className="text-sm sm:text-base text-[#5E5B6A] dark:text-gray-300 mt-1">
          Reach out for academic or professional collaboration
        </p>
      </div>

      <div className="bg-white/85 dark:bg-[#181622]/85 backdrop-blur-xl border border-[#FF007A]/20 dark:border-[#FF007A]/30 rounded-3xl p-6 sm:p-10 shadow-[0_12px_30px_-4px_rgba(255,0,122,0.1)] dark:shadow-[0_12px_30px_-4px_rgba(255,0,122,0.2)] grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Links & Info */}
        <div className="lg:col-span-5 flex flex-col justify-between h-full gap-6">
          <div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#131218] dark:text-white mb-2">
              Let's Connect
            </h3>
            <p className="text-sm sm:text-base text-[#5E5B6A] dark:text-gray-300 leading-relaxed mb-6">
              Feel free to get in touch directly via email, explore my GitHub repositories, or send a
              note below for academic inquiries, engineering internships, or AI &amp; Cloud projects.
            </p>

            <div className="flex flex-col gap-3.5">
              {/* Email direct button */}
              <div className="group flex items-center justify-between gap-3 p-3.5 rounded-2xl bg-[#FAF9FB] dark:bg-[#12111A] border border-[#EBE8F0] dark:border-white/10 hover:border-[#FF007A] hover:bg-[#FFF0F7]/40 dark:hover:bg-[#FF007A]/10 transition-all">
                <a
                  href={`mailto:${emailAddress}`}
                  className="flex items-center gap-3.5 min-w-0"
                >
                  <div className="w-11 h-11 rounded-xl bg-white dark:bg-[#1F1C2B] text-[#FF007A] flex items-center justify-center shadow-xs shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col truncate">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF007A]">
                      Email Address
                    </span>
                    <span className="text-sm font-semibold text-[#131218] dark:text-white truncate">
                      {emailAddress}
                    </span>
                  </div>
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  title="Copy email to clipboard"
                  className="p-2 rounded-lg text-[#5E5B6A] dark:text-gray-400 hover:text-[#FF007A] hover:bg-black/5 dark:hover:bg-white/10 transition-colors shrink-0 cursor-pointer"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                      <Check className="w-4 h-4" /> Copied
                    </span>
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* GitHub profile link */}
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-3 p-3.5 rounded-2xl bg-[#FAF9FB] dark:bg-[#12111A] border border-[#EBE8F0] dark:border-white/10 hover:border-[#FF007A] hover:bg-[#FFF0F7]/40 dark:hover:bg-[#FF007A]/10 transition-all cursor-pointer"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-11 h-11 rounded-xl bg-white dark:bg-[#1F1C2B] text-[#FF007A] flex items-center justify-center shadow-xs shrink-0">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                  </div>
                  <div className="flex flex-col truncate">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF007A]">
                      GitHub Profile
                    </span>
                    <span className="text-sm font-semibold text-[#131218] dark:text-white truncate">
                      github.com/wiemsaidi
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-[#5E5B6A] group-hover:text-[#FF007A] transition-colors shrink-0" />
              </a>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#FFF0F7]/60 dark:bg-[#FF007A]/10 border border-[#FF007A]/20 text-xs text-[#5E5B6A] dark:text-gray-300">
            <span className="font-bold text-[#FF007A] block mb-1">Response Commitment</span>
            I review all academic and technical outreach within 24–48 hours.
          </div>
        </div>

        {/* Right Column: Direct Message Form */}
        <div className="lg:col-span-7 bg-[#FAF9FB] dark:bg-[#12111A] border border-[#EBE8F0] dark:border-white/10 rounded-2xl p-5 sm:p-7">
          <h4 className="font-display text-lg font-bold text-[#131218] dark:text-white mb-1 flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-[#FF007A]" />
            <span>Send a Direct Note</span>
          </h4>
          <p className="text-xs text-[#5E5B6A] dark:text-gray-400 mb-5">
            Fill out the form below to initiate communication.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {status === 'error' && (
              <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-xs text-rose-700 dark:text-rose-300">
                {errorMsg}
              </div>
            )}

            {status === 'success' && (
              <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-xs text-emerald-700 dark:text-emerald-300 flex items-center gap-2">
                <Check className="w-4 h-4 shrink-0" />
                <span>Thank you! Your message has been prepared and sent successfully.</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#131218] dark:text-white mb-1.5">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dr. Sarah Chen"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-white dark:bg-[#181622] border border-[#EBE8F0] dark:border-white/10 text-[#131218] dark:text-white placeholder-[#5E5B6A]/50 focus:outline-none focus:border-[#FF007A]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#131218] dark:text-white mb-1.5">
                  Your Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. sarah.chen@university.org"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-white dark:bg-[#181622] border border-[#EBE8F0] dark:border-white/10 text-[#131218] dark:text-white placeholder-[#5E5B6A]/50 focus:outline-none focus:border-[#FF007A]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#131218] dark:text-white mb-1.5">
                Subject
              </label>
              <input
                type="text"
                placeholder="e.g. Research Collaboration in AI / Cloud"
                value={formState.subject}
                onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-white dark:bg-[#181622] border border-[#EBE8F0] dark:border-white/10 text-[#131218] dark:text-white placeholder-[#5E5B6A]/50 focus:outline-none focus:border-[#FF007A]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#131218] dark:text-white mb-1.5">
                Message *
              </label>
              <textarea
                required
                rows={4}
                placeholder="Write your note or project inquiry here..."
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-white dark:bg-[#181622] border border-[#EBE8F0] dark:border-white/10 text-[#131218] dark:text-white placeholder-[#5E5B6A]/50 focus:outline-none focus:border-[#FF007A] resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 text-sm font-semibold text-white bg-gradient-to-r from-[#FF007A] via-[#FF3399] to-[#9D4EDD] hover:from-[#E6006E] hover:to-[#8338EC] rounded-xl shadow-[0_10px_25px_-3px_rgba(255,0,122,0.45)] hover:shadow-[0_14px_28px_-4px_rgba(255,0,122,0.6)] transform hover:-translate-y-0.5 transition-all cursor-pointer disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
              <span>{status === 'sending' ? 'Sending...' : 'Send Message'}</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
