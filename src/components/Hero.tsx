import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowDown, 
  Sparkles, 
  ArrowUpRight, 
  Mail,
  CheckCircle2
} from 'lucide-react';

interface HeroProps {
  onExploreWork: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreWork,
  onContactClick
}) => {
  return (
    <section 
      id="hero" 
      className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none"></div>
      
      {/* Radiant Orange Ambient Glow Behind Content */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#ff5500]/12 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-[#ff5500]/8 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Centered Top-to-Bottom Flow */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center space-y-7 sm:space-y-8">
        
        {/* 1. Hello There! */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#18181c] border border-[#27272a] shadow-lg hover:border-[#ff5500]/50 transition-colors"
        >
          <span className="text-base sm:text-lg">👋</span>
          <span className="text-xs sm:text-sm font-mono font-medium text-zinc-300 tracking-wide uppercase">
            Hello There!
          </span>
        </motion.div>

        {/* 2. I'm Younes Oubihi */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-2"
        >
          <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white uppercase leading-[1.05]">
            I'M <span className="text-[#ff5500] relative inline-block">
              YOUNES OUBIHI
              {/* Artistic vector underline */}
              <svg className="absolute -bottom-2 sm:-bottom-3 left-0 w-full text-[#ff5500]/40 h-2.5 sm:h-3" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0,5 Q50,0 100,5" stroke="currentColor" strokeWidth="4" fill="none" />
              </svg>
            </span>
          </h1>
        </motion.div>

        {/* 3. Welcome to my portfolio. */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-display font-medium text-xl sm:text-2xl md:text-3xl text-zinc-300 tracking-tight"
        >
          Welcome to my portfolio.
        </motion.p>

        {/* 4. I am a Visual Identity Designer and Brand Identity Creator. */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-2xl px-4 py-3 rounded-2xl bg-[#141418]/80 border border-[#27272a] backdrop-blur-sm"
        >
          <p className="text-base sm:text-lg md:text-xl font-normal text-zinc-300 leading-relaxed">
            I am a <span className="text-white font-semibold">Visual Identity Designer</span> and <span className="text-[#ff5500] font-semibold">Brand Identity Creator</span>.
          </p>
        </motion.div>

        {/* 5. View My Work & Contact Me Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-2 flex flex-wrap items-center justify-center gap-4"
        >
          {/* View My Work */}
          <button
            id="hero-view-work-btn"
            onClick={onExploreWork}
            className="px-8 py-4 rounded-xl bg-[#ff5500] hover:bg-[#ff6600] text-white font-bold text-sm sm:text-base shadow-xl shadow-[#ff5500]/30 hover:shadow-[#ff5500]/50 transition-all hover:scale-105 active:scale-95 flex items-center gap-2.5 cursor-pointer"
          >
            <span>View My Work</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </button>

          {/* Contact Me */}
          <button
            id="hero-contact-me-btn"
            onClick={onContactClick}
            className="px-8 py-4 rounded-xl bg-[#18181b] hover:bg-[#222227] text-white border border-[#27272a] hover:border-[#ff5500]/60 font-semibold text-sm sm:text-base transition-all hover:scale-105 active:scale-95 flex items-center gap-2.5 cursor-pointer group"
          >
            <Mail className="w-4 h-4 text-[#ff5500]" />
            <span>Contact Me</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </motion.div>

        {/* 6. Available for Freelance & Full-Time */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="pt-2 inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#121215] border border-[#27272a]/80 shadow-md"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff5500] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#ff5500]"></span>
          </span>
          <span className="text-xs sm:text-sm font-mono text-zinc-300 font-medium">
            Available for Freelance & Full-Time
          </span>
        </motion.div>

      </div>
    </section>
  );
};
