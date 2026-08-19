import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Download, 
  Calendar, 
  Building2, 
  Tag, 
  Play, 
  FileText,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2
} from 'lucide-react';
import { PortfolioProject } from '../types';

interface ProjectDetailModalProps {
  project: PortfolioProject | null;
  allProjects: PortfolioProject[];
  onClose: () => void;
  onSelectProject: (proj: PortfolioProject) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  allProjects,
  onClose,
  onSelectProject
}) => {
  const [isFullscreenImage, setIsFullscreenImage] = useState(false);

  if (!project) return null;

  const currentIndex = allProjects.findIndex(p => p.id === project.id);
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : allProjects[allProjects.length - 1];
  const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : allProjects[0];

  return (
    <>
      {/* Main Project Modal */}
      <div 
        className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-5xl bg-[#111114] border border-[#27272a] rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-5 sm:px-8 py-4 bg-[#141418] border-b border-[#27272a] shrink-0">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-[#ff5500]/15 text-[#ff5500] border border-[#ff5500]/30 text-xs font-mono font-bold uppercase">
                {project.category}
              </span>
              <span className="text-zinc-500 hidden sm:inline">•</span>
              <span className="text-xs font-mono text-zinc-300 hidden sm:inline">
                {project.client}
              </span>
            </div>

            <div className="flex items-center gap-2">
              {/* Prev / Next navigation */}
              <div className="flex items-center gap-1 bg-[#18181c] border border-[#27272a] rounded-lg p-1">
                <button
                  onClick={() => onSelectProject(prevProject)}
                  className="p-1.5 rounded hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                  title={`Previous: ${prevProject.title}`}
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onSelectProject(nextProject)}
                  className="p-1.5 rounded hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                  title={`Next: ${nextProject.title}`}
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Close */}
              <button
                id="close-project-modal"
                onClick={onClose}
                className="p-2 rounded-lg bg-[#18181c] border border-[#27272a] hover:bg-[#ff5500] text-zinc-400 hover:text-white transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Scrollable Project Content */}
          <div className="p-5 sm:p-8 overflow-y-auto space-y-6">
            {/* Main Media Stage: Actual Local Project Video with preload="metadata" */}
            <div className="rounded-2xl overflow-hidden bg-black border border-[#27272a] shadow-xl relative group">
              {project.videoUrl ? (
                <div className="relative aspect-video bg-black flex items-center justify-center">
                  <video
                    key={project.id}
                    src={project.videoUrl}
                    poster={project.coverImage}
                    controls
                    preload="metadata"
                    playsInline
                    className="w-full h-full object-contain"
                  >
                    Your browser does not support HTML5 video.
                  </video>
                </div>
              ) : (
                /* Image / Presentation Banner Stage */
                <div className="relative bg-[#0d0d10] flex flex-col items-center justify-center min-h-[320px] max-h-[65vh] overflow-hidden">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-auto max-h-[60vh] object-contain cursor-zoom-in"
                    onClick={() => setIsFullscreenImage(true)}
                  />

                  {/* Expand Image overlay button */}
                  <button
                    onClick={() => setIsFullscreenImage(true)}
                    className="absolute top-4 right-4 p-2.5 rounded-xl bg-black/75 hover:bg-[#ff5500] text-white backdrop-blur-md border border-white/10 transition-all flex items-center gap-2 text-xs font-bold shadow-lg cursor-pointer opacity-90 group-hover:opacity-100"
                  >
                    <Maximize2 className="w-4 h-4" />
                    <span>View Fullscreen</span>
                  </button>
                </div>
              )}
            </div>

            {/* If project has a PDF deck, show presentation banner download box */}
            {project.pdfUrl && (
              <div className="p-4 sm:p-5 rounded-2xl bg-[#181820] border border-[#ff5500]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-[#ff5500]/15 text-[#ff5500]">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm sm:text-base">
                      {project.pdfFileName || `${project.title} Presentation Deck`}
                    </h4>
                    <p className="text-zinc-400 text-xs mt-0.5">
                      Full high-resolution branding & presentation deck
                    </p>
                  </div>
                </div>

                <a
                  href={project.pdfUrl}
                  download
                  className="px-5 py-2.5 rounded-xl bg-[#ff5500] hover:bg-[#ff6600] text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer shrink-0"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Presentation PDF</span>
                </a>
              </div>
            )}

            {/* Essential Project Information */}
            <div className="bg-[#15151a] border border-[#27272a] rounded-2xl p-6 space-y-4">
              <div>
                <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
                  {project.title}
                </h2>
                {project.description && (
                  <p className="text-zinc-300 text-sm sm:text-base mt-2 leading-relaxed">
                    {project.description}
                  </p>
                )}
              </div>

              {/* Meta Attributes */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-[#27272a]">
                {/* Client / Company */}
                <div>
                  <div className="text-[11px] font-mono uppercase text-zinc-500 flex items-center gap-1.5 mb-1">
                    <Building2 className="w-3.5 h-3.5 text-[#ff5500]" />
                    <span>Client / Company</span>
                  </div>
                  <div className="text-sm font-semibold text-white">
                    {project.client}
                  </div>
                </div>

                {/* Published Date */}
                <div>
                  <div className="text-[11px] font-mono uppercase text-zinc-500 flex items-center gap-1.5 mb-1">
                    <Calendar className="w-3.5 h-3.5 text-[#ff5500]" />
                    <span>Published</span>
                  </div>
                  <div className="text-sm font-semibold text-white">
                    {project.date || project.year}
                  </div>
                </div>

                {/* Category */}
                <div>
                  <div className="text-[11px] font-mono uppercase text-zinc-500 flex items-center gap-1.5 mb-1">
                    <Tag className="w-3.5 h-3.5 text-[#ff5500]" />
                    <span>Category</span>
                  </div>
                  <div className="text-sm font-semibold text-white">
                    {project.category}
                  </div>
                </div>

                {/* Role */}
                <div>
                  <div className="text-[11px] font-mono uppercase text-zinc-500 flex items-center gap-1.5 mb-1">
                    <Play className="w-3.5 h-3.5 text-[#ff5500]" />
                    <span>Deliverable</span>
                  </div>
                  <div className="text-sm font-semibold text-white">
                    {project.videoUrl ? 'Master Video' : project.pdfUrl ? 'Presentation PDF' : 'Brand System'}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap gap-3">
                {project.videoUrl && (
                  <a
                    href={project.videoUrl}
                    download
                    className="px-5 py-2.5 rounded-xl bg-[#ff5500] hover:bg-[#ff6600] text-white text-xs sm:text-sm font-bold flex items-center gap-2 shadow-lg shadow-[#ff5500]/20 transition-all cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Master Video (MP4)</span>
                  </a>
                )}

                {project.coverImage && !project.videoUrl && (
                  <button
                    onClick={() => setIsFullscreenImage(true)}
                    className="px-5 py-2.5 rounded-xl bg-[#1d1d24] hover:bg-[#252530] text-zinc-200 hover:text-white border border-[#27272a] text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer"
                  >
                    <Maximize2 className="w-4 h-4 text-[#ff5500]" />
                    <span>View Image in Fullscreen</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* In-App Fullscreen Image Lightbox */}
      <AnimatePresence>
        {isFullscreenImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsFullscreenImage(false)}
            className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-4 sm:p-8 cursor-zoom-out"
          >
            <div className="absolute top-4 right-4 flex items-center gap-3 z-10">
              <button
                onClick={() => setIsFullscreenImage(false)}
                className="p-3 rounded-full bg-zinc-900 border border-zinc-700 text-white hover:bg-[#ff5500] transition-colors cursor-pointer shadow-2xl"
              >
                <Minimize2 className="w-5 h-5" />
              </button>
            </div>

            <img
              src={project.coverImage}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl border border-zinc-800"
              onClick={(e) => e.stopPropagation()}
            />

            <div className="mt-4 text-center">
              <h3 className="text-white font-bold text-lg">{project.title}</h3>
              <p className="text-zinc-400 text-xs font-mono mt-1">{project.client} • {project.date || project.year}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
