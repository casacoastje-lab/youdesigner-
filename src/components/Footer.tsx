import React, { useState, useEffect } from 'react';
import { ArrowUp, Sparkles, ExternalLink, Instagram, Linkedin, Globe2 } from 'lucide-react';
import { DESIGNER_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const [localTime, setLocalTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      try {
        const timeStr = new Intl.DateTimeFormat('en-GB', {
          timeZone: 'Africa/Casablanca',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false
        }).format(new Date());
        setLocalTime(timeStr);
      } catch (e) {
        setLocalTime(new Date().toLocaleTimeString());
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#08080a] border-t border-[#27272a] pt-16 pb-12 px-4 sm:px-6 lg:px-8 text-zinc-400">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Top Tier */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#ff5500] flex items-center justify-center font-display font-black text-white text-xl shadow-lg shadow-[#ff5500]/25">
                YO
              </div>
              <div>
                <div className="font-display font-extrabold text-xl text-white">
                  {DESIGNER_INFO.name}
                </div>
                <div className="text-xs font-mono text-[#ff5500]">
                  Owner @ Deflook Agency • {DESIGNER_INFO.location}
                </div>
              </div>
            </div>
            <p className="text-xs text-zinc-400 max-w-sm">
              Visual Identity Designer & Brand Identity Creator helping businesses stand out with powerful brand systems.
            </p>
          </div>

          {/* Social Links & Channels */}
          <div className="flex flex-wrap items-center gap-2.5">
            <a
              href={DESIGNER_INFO.instagram}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#141418] border border-[#27272a] hover:border-[#ff5500] text-zinc-300 hover:text-white text-xs font-mono transition-all"
            >
              <Instagram className="w-3.5 h-3.5 text-[#ff5500]" />
              <span>Instagram</span>
            </a>

            <a
              href={DESIGNER_INFO.behance}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#141418] border border-[#27272a] hover:border-[#ff5500] text-zinc-300 hover:text-white text-xs font-mono transition-all"
            >
              <Globe2 className="w-3.5 h-3.5 text-[#ff5500]" />
              <span>Behance</span>
            </a>

            <a
              href={DESIGNER_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#141418] border border-[#27272a] hover:border-[#ff5500] text-zinc-300 hover:text-white text-xs font-mono transition-all"
            >
              <Linkedin className="w-3.5 h-3.5 text-[#ff5500]" />
              <span>LinkedIn</span>
            </a>

            <a
              href={DESIGNER_INFO.facebook}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#141418] border border-[#27272a] hover:border-[#ff5500] text-zinc-300 hover:text-white text-xs font-mono transition-all"
            >
              <Globe2 className="w-3.5 h-3.5 text-[#ff5500]" />
              <span>Facebook</span>
            </a>
          </div>
        </div>

        {/* Bottom Tier: Local Time, Back to top & Copyright */}
        <div className="pt-8 border-t border-[#27272a]/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-zinc-400">
              <span className="w-2 h-2 rounded-full bg-[#ff5500] animate-pulse"></span>
              Taroudant, Morocco: <strong className="text-white font-mono">{localTime || '12:00:00'} (GMT+1)</strong>
            </span>
          </div>

          <div className="text-zinc-500 text-center">
            © {new Date().getFullYear()} Younes Oubihi. All Rights Reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#141418] border border-[#27272a] hover:border-[#ff5500] text-zinc-300 hover:text-white transition-all cursor-pointer group"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform text-[#ff5500]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
