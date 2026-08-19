import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  LayoutGrid, 
  Sparkles, 
  ArrowUpRight, 
  Eye, 
  Layers,
  Play,
  FileText
} from 'lucide-react';
import { PortfolioProject, ProjectCategory } from '../types';

interface ProjectGridProps {
  projects: PortfolioProject[];
  onSelectProject: (project: PortfolioProject) => void;
}

const CATEGORIES: ProjectCategory[] = [
  'All',
  'VIDEO EDITING',
  'BRAND DESIGNS'
];

export const ProjectGrid: React.FC<ProjectGridProps> = ({
  projects,
  onSelectProject
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'compact'>('grid');

  const filteredProjects = useMemo(() => {
    return projects.filter((proj) => {
      const matchesCategory = selectedCategory === 'All' || proj.category === selectedCategory;
      const matchesSearch = 
        proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        proj.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
        proj.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (proj.date && proj.date.toLowerCase().includes(searchQuery.toLowerCase())) ||
        proj.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [projects, selectedCategory, searchQuery]);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#27272a]/60">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-[#27272a] pb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff5500]/10 border border-[#ff5500]/30 text-[#ff5500] text-xs font-mono font-bold tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PORTFOLIO FEED</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase">
            MY <span className="text-[#ff5500]">PROJECTS</span>
          </h2>
          <p className="text-zinc-300 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed font-sans">
            A showcase of client projects, commercial video editing, and full brand identities hosted natively on our website storage.
          </p>
        </div>

        {/* View Mode Switcher */}
        <div className="flex items-center gap-2">
          <div className="flex items-center p-1 rounded-xl bg-[#141418] border border-[#27272a]">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg text-xs transition-colors cursor-pointer ${
                viewMode === 'grid' ? 'bg-[#ff5500] text-white shadow-sm' : 'text-zinc-400 hover:text-white'
              }`}
              title="Grid View"
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('compact')}
              className={`p-2 rounded-lg text-xs transition-colors cursor-pointer ${
                viewMode === 'compact' ? 'bg-[#ff5500] text-white shadow-sm' : 'text-zinc-400 hover:text-white'
              }`}
              title="Compact View"
            >
              <Layers className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Filter and Search Controls */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-10">
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const count = cat === 'All' 
              ? projects.length 
              : projects.filter(p => p.category === cat).length;
            const isSelected = selectedCategory === cat;

            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2.5 cursor-pointer uppercase ${
                  isSelected
                    ? 'bg-[#ff5500] text-white shadow-lg shadow-[#ff5500]/25'
                    : 'bg-[#18181b] hover:bg-[#222227] text-zinc-400 hover:text-white border border-[#27272a]'
                }`}
              >
                <span>{cat}</span>
                <span className={`text-[11px] px-2 py-0.5 rounded-md font-mono ${
                  isSelected ? 'bg-black/30 text-white' : 'bg-[#121215] text-zinc-500'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative w-full lg:w-72">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search projects or dates..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#18181b] border border-[#27272a] focus:border-[#ff5500] text-xs sm:text-sm text-white placeholder-zinc-500 outline-none transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-400 hover:text-white"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Grid View of Works */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.03 }}
                onClick={() => onSelectProject(project)}
                className="group relative rounded-3xl bg-[#121215] border border-[#27272a] overflow-hidden hover:border-[#ff5500]/70 transition-all duration-300 flex flex-col cursor-pointer shadow-xl hover:shadow-2xl hover:shadow-[#ff5500]/10"
              >
                {/* Project Image Stage */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#18181c] flex items-center justify-center">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback background color banner if image fails
                      const target = e.target as HTMLElement;
                      target.style.display = 'none';
                    }}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Fallback gradient banner if image hidden */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1e1e24] via-[#121215] to-[#ff5500]/20 flex flex-col items-center justify-center p-6 text-center -z-0">
                    <span className="text-[10px] font-mono text-[#ff5500] uppercase font-bold tracking-widest">{project.client}</span>
                    <span className="font-display font-black text-lg text-white mt-1 uppercase">{project.title}</span>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e11] via-transparent to-transparent opacity-85 group-hover:opacity-65 transition-opacity z-10"></div>

                  {/* Top Category Badge & Date */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none z-20">
                    <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-[11px] font-mono font-bold text-[#ff5500] uppercase tracking-wider">
                      {project.category}
                    </span>

                    <div className="flex items-center gap-1.5">
                      {project.videoUrl && (
                        <span className="px-2 py-1 rounded-full bg-[#ff5500] text-white text-[10px] font-mono font-bold flex items-center gap-1">
                          <Play className="w-3 h-3 fill-current" />
                          <span>VIDEO</span>
                        </span>
                      )}
                      {project.pdfUrl && (
                        <span className="px-2 py-1 rounded-full bg-black/80 border border-white/20 text-[#ff5500] text-[10px] font-mono font-bold flex items-center gap-1">
                          <FileText className="w-3 h-3" />
                          <span>PDF DECK</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Quick View Hover State */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <span className="px-5 py-2.5 rounded-full bg-[#ff5500] text-white text-xs font-bold flex items-center gap-2 shadow-2xl scale-95 group-hover:scale-100 transition-transform">
                      {project.videoUrl ? <Play className="w-3.5 h-3.5 fill-current" /> : <Eye className="w-3.5 h-3.5" />}
                      <span>{project.videoUrl ? 'Watch Video' : 'View Project'}</span>
                    </span>
                  </div>
                </div>

                {/* Card Content & Action Button */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wide">
                      {project.date || project.year} • {project.category}
                    </div>

                    <h3 className="font-display font-black text-xl text-white group-hover:text-[#ff5500] transition-colors leading-tight uppercase">
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-zinc-400 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Bottom Action Footer with "View Project" CTA */}
                  <div className="pt-4 border-t border-[#27272a]/60 flex items-center justify-between">
                    <span className="text-xs font-bold text-zinc-400 group-hover:text-white transition-colors">
                      {project.client}
                    </span>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectProject(project);
                      }}
                      className="px-4 py-2 rounded-xl bg-[#18181c] group-hover:bg-[#ff5500] text-zinc-200 group-hover:text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm cursor-pointer"
                    >
                      <span>{project.videoUrl ? 'Watch Video' : 'View Project'}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      ) : (
        /* Compact List View */
        <div className="space-y-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.03 }}
                onClick={() => onSelectProject(project)}
                className="p-4 sm:p-5 rounded-2xl bg-[#121215] border border-[#27272a] hover:border-[#ff5500]/60 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer group hover:bg-[#15151a]"
              >
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden bg-[#18181c] flex items-center justify-center shrink-0">
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        const target = e.target as HTMLElement;
                        target.style.display = 'none';
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1e1e24] to-[#ff5500]/20 flex items-center justify-center text-[10px] font-bold text-white text-center p-1 -z-0">
                      {project.title.substring(0, 8)}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-[#ff5500] font-bold uppercase">{project.category}</span>
                      <span className="text-zinc-600">•</span>
                      <span className="text-xs font-mono text-zinc-400">{project.date || project.year}</span>
                    </div>
                    <h3 className="font-display font-bold text-lg text-white group-hover:text-[#ff5500] transition-colors uppercase">
                      {project.title}
                    </h3>
                    <p className="text-xs text-zinc-400 mt-0.5">{project.client}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 self-end sm:self-center">
                  <div className="px-4 py-2 rounded-xl bg-[#18181c] border border-[#27272a] group-hover:bg-[#ff5500] group-hover:text-white text-xs font-bold text-zinc-300 transition-colors flex items-center gap-1.5">
                    <span>{project.videoUrl ? 'Watch Video' : 'View Project'}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-20 bg-[#121215] rounded-3xl border border-[#27272a] space-y-4">
          <p className="text-base text-zinc-300 font-medium">No projects found matching "{searchQuery}"</p>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSearchQuery('');
            }}
            className="px-5 py-2.5 rounded-xl bg-[#ff5500] text-white text-xs font-bold cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      )}
    </section>
  );
};
