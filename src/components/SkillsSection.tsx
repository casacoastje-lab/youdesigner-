import React from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  Zap, 
  Layers
} from 'lucide-react';

interface SkillItem {
  id: string;
  name: string;
  percentage: number;
  emoji: string;
  subtitle: string;
  tools: string[];
}

export const SkillsSection: React.FC = () => {
  const SKILLS: SkillItem[] = [
    {
      id: 'logo-design',
      name: 'Logo Design',
      percentage: 95,
      emoji: '🎯',
      subtitle: 'Memorable, versatile & timeless vector marks crafted with mathematical precision.',
      tools: ['Adobe Illustrator', 'Vector Math', 'Grid Systems', 'Scalable Marks']
    },
    {
      id: 'brand-identity',
      name: 'Brand Identity Design',
      percentage: 92,
      emoji: '🏢',
      subtitle: 'Comprehensive visual systems, brand bibles, typography hierarchies & color strategy.',
      tools: ['Brand Strategy', 'Visual Identity', 'Typography', 'Brand Guidelines']
    },
    {
      id: 'social-media-kit',
      name: 'Social Media Kit Design',
      percentage: 88,
      emoji: '📱',
      subtitle: 'Engaging content templates, campaign banners & high-converting brand assets.',
      tools: ['Figma', 'Adobe Photoshop', 'Campaign Systems', 'Story/Post Kits']
    },
    {
      id: 'video-editing',
      name: 'Short & Long Video Editing',
      percentage: 85,
      emoji: '🎬',
      subtitle: 'Cinematic pacing, kinetic motion graphics, sound design & engaging visual storytelling.',
      tools: ['Premiere Pro', 'After Effects', 'Kinetic Type', 'Color Grading']
    }
  ];

  const CREATIVE_SOFTWARE = [
    { name: 'Adobe Illustrator', role: 'Vector & Logo Design' },
    { name: 'Adobe Photoshop', role: 'Visuals & Photo Compositing' },
    { name: 'Adobe Premiere Pro', role: 'Short & Long Video Editing' },
    { name: 'After Effects', role: 'Kinetic Motion & Animation' },
    { name: 'Figma', role: 'Design Systems & UI Layouts' }
  ];

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#27272a]/60">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff5500]/10 border border-[#ff5500]/30 text-[#ff5500] text-xs font-mono font-bold tracking-widest uppercase mb-3">
          <Zap className="w-3.5 h-3.5" />
          <span>CORE EXPERTISE</span>
        </div>
        <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight uppercase">
          My <span className="text-[#ff5500]">Skills</span>
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base mt-3 leading-relaxed">
          Mastered disciplines engineered to elevate your brand presence and captivate your audience across all touchpoints.
        </p>
      </div>

      {/* 4 Creative Skill Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {SKILLS.map((skill, idx) => (
          <motion.div
            key={skill.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group relative p-7 sm:p-8 rounded-3xl bg-[#121215] border border-[#27272a] hover:border-[#ff5500]/70 transition-all duration-300 flex flex-col justify-between space-y-6 shadow-xl hover:shadow-2xl hover:shadow-[#ff5500]/10"
          >
            {/* Ambient Corner Glow on Hover */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff5500]/5 rounded-full blur-2xl group-hover:bg-[#ff5500]/15 transition-all pointer-events-none"></div>

            {/* Top Row: Icon & Big Percentage */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="w-14 h-14 rounded-2xl bg-[#18181c] border border-[#27272a] group-hover:border-[#ff5500]/40 flex items-center justify-center text-2xl shadow-inner group-hover:scale-110 transition-transform">
                  <span role="img" aria-label={skill.name}>{skill.emoji}</span>
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white group-hover:text-[#ff5500] transition-colors">
                    {skill.name}
                  </h3>
                  <span className="text-xs font-mono text-zinc-400">
                    Specialized Craft
                  </span>
                </div>
              </div>

              {/* Radiant Percentage Number */}
              <div className="flex items-baseline gap-0.5">
                <span className="font-display font-black text-3xl sm:text-4xl text-[#ff5500] tracking-tight">
                  {skill.percentage}
                </span>
                <span className="font-mono text-sm sm:text-base text-zinc-500 font-bold">%</span>
              </div>
            </div>

            {/* Description Subtitle */}
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
              {skill.subtitle}
            </p>

            {/* Animated Progress Bar */}
            <div className="space-y-2">
              <div className="h-2.5 w-full rounded-full bg-[#18181c] border border-[#27272a] overflow-hidden p-0.5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percentage}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 + idx * 0.1, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-[#ff7733] to-[#ff5500] shadow-sm shadow-[#ff5500]/50 relative"
                >
                  <div className="absolute top-0 right-0 bottom-0 w-2 bg-white/40 rounded-full blur-[1px]"></div>
                </motion.div>
              </div>
            </div>

            {/* Micro Tags */}
            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#27272a]/60">
              {skill.tools.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-lg bg-[#18181c] text-zinc-300 text-[11px] font-mono border border-[#27272a] group-hover:border-[#ff5500]/20 transition-colors"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Software Stack Footer Pill Bar */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#101013] border border-[#27272a] space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#27272a]/60 pb-4">
          <div className="flex items-center gap-2 text-xs font-mono text-[#ff5500] font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Creative Software & Tool Stack</span>
          </div>
          <span className="text-xs font-mono text-zinc-500">
            Industry Standard Production
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 pt-1">
          {CREATIVE_SOFTWARE.map((tool, idx) => (
            <div
              key={idx}
              className="px-4 py-2.5 rounded-xl bg-[#141418] border border-[#27272a] hover:border-[#ff5500]/50 transition-all flex items-center gap-2.5 group cursor-default"
            >
              <span className="w-2 h-2 rounded-full bg-[#ff5500]"></span>
              <span className="font-display font-bold text-xs sm:text-sm text-white group-hover:text-[#ff5500] transition-colors">
                {tool.name}
              </span>
              <span className="text-[11px] text-zinc-500 font-mono hidden md:inline">
                • {tool.role}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
