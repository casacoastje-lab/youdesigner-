import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  ArrowUpRight, 
  Mail,
  Award,
  Layers,
  HeartHandshake
} from 'lucide-react';
import { DESIGNER_INFO } from '../data/portfolioData';

interface AboutSectionProps {
  onContactClick: () => void;
  onExploreProjects: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onContactClick, onExploreProjects }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#27272a]/60">
      {/* Section Header: WHO AM I? */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff5500]/10 border border-[#ff5500]/30 text-[#ff5500] text-xs font-mono font-bold tracking-widest uppercase mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>ABOUT ME</span>
        </div>
        <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase">
          WHO AM <span className="text-[#ff5500]">I?</span>
        </h2>
      </div>

      {/* Main Grid: Picture on Left + Narrative and Key Stats on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
        {/* Left Column: Designer Picture */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-3xl overflow-hidden bg-[#121215] border border-[#27272a] p-4 sm:p-6 shadow-2xl group hover:border-[#ff5500]/60 transition-all">
            {/* Ambient Background Glow */}
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-[#ff5500]/15 rounded-full blur-3xl pointer-events-none"></div>

            {/* Profile Image - Clean, Natural, 100% Unaltered */}
            <div className="relative aspect-[3/4] sm:aspect-[4/5] rounded-2xl overflow-hidden bg-[#18181c] border border-[#27272a]">
              <img
                src="/images/younes_about.jpg"
                alt="Younes Oubihi at his design studio in Taroudant"
                onError={(e) => {
                  // Fallback if needed
                  const target = e.currentTarget;
                  if (target.src.indexOf('younes_about.jpg.jpeg') === -1) {
                    target.src = '/images/younes_about.jpg.jpeg';
                  }
                }}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-102"
              />
              
              {/* Bottom Tag in Image */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-white text-xs font-mono">
                  {DESIGNER_INFO.location}
                </span>
                <span className="px-3 py-1 rounded-full bg-[#ff5500] text-white text-xs font-mono font-bold shadow-md shadow-[#ff5500]/40">
                  {DESIGNER_INFO.yearsExperience} Exp.
                </span>
              </div>
            </div>

            {/* Quick Profile Info Footer */}
            <div className="mt-4 pt-3 flex items-center justify-between">
              <div>
                <h3 className="font-display font-extrabold text-lg text-white">
                  {DESIGNER_INFO.name}
                </h3>
                <span className="text-xs font-mono text-[#ff5500]">
                  Owner @ Deflook
                </span>
              </div>

              <span className="px-2.5 py-1 rounded-full bg-[#18181c] border border-[#27272a] text-zinc-400 text-xs font-mono">
                Morocco 🇲🇦
              </span>
            </div>

            <p className="text-[11px] font-mono text-zinc-500 text-center mt-3 pt-2 border-t border-[#27272a]/40">
              Younes Oubihi at his design studio in Taroudant
            </p>
          </div>
        </div>

        {/* Right Column: Bio Narrative & Stats */}
        <div className="lg:col-span-7 space-y-8">
          {/* Main Narrative Text */}
          <div className="space-y-4">
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white leading-snug">
              Visual Identity Designer & Brand Identity Creator
            </h3>
            
            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
              Taroudant-based Visual Identity Designer and Brand Identity Creator with 4+ years of experience in the creative industry. I help businesses stand out with powerful brand identities — from professional logo design to full visual identity systems and brand strategy. Owner of Deflook design agency, based in Taroudant, Morocco.
            </p>
          </div>

          {/* Key Metric Stats: 24 Projects / 4+ Years Exp. / 20 Appreciations */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-2">
            {/* Stat 1: 24 Projects */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#121215] border border-[#27272a] hover:border-[#ff5500]/60 transition-all text-center group">
              <div className="font-display font-black text-3xl sm:text-4xl text-[#ff5500] group-hover:scale-105 transition-transform">
                24
              </div>
              <div className="text-xs sm:text-sm font-mono text-zinc-400 font-medium mt-1">
                Projects
              </div>
            </div>

            {/* Stat 2: 4+ Years Exp. */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#121215] border border-[#27272a] hover:border-[#ff5500]/60 transition-all text-center group">
              <div className="font-display font-black text-3xl sm:text-4xl text-white group-hover:scale-105 transition-transform">
                4+
              </div>
              <div className="text-xs sm:text-sm font-mono text-zinc-400 font-medium mt-1">
                Years Exp.
              </div>
            </div>

            {/* Stat 3: 20 Appreciations */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#121215] border border-[#27272a] hover:border-[#ff5500]/60 transition-all text-center group">
              <div className="font-display font-black text-3xl sm:text-4xl text-[#ff5500] group-hover:scale-105 transition-transform">
                20
              </div>
              <div className="text-xs sm:text-sm font-mono text-zinc-400 font-medium mt-1">
                Appreciations
              </div>
            </div>
          </div>

          {/* Quick CTA Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              onClick={onExploreProjects}
              className="px-6 py-3.5 rounded-xl bg-[#ff5500] hover:bg-[#ff6600] text-white font-bold text-xs sm:text-sm shadow-lg shadow-[#ff5500]/25 transition-all hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer"
            >
              <span>Explore My Works</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              onClick={onContactClick}
              className="px-6 py-3.5 rounded-xl bg-[#18181b] hover:bg-[#222227] text-white border border-[#27272a] hover:border-[#ff5500]/60 font-semibold text-xs sm:text-sm transition-all hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer"
            >
              <Mail className="w-4 h-4 text-[#ff5500]" />
              <span>Let's Talk</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
