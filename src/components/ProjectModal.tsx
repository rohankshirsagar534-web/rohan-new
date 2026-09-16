import React, { useState, useEffect } from 'react';
import { X, ArrowRight, ArrowLeft, ArrowUpRight, Film, CheckCircle, Sliders } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  projects: Project[];
  onClose: () => void;
  onSelectProject: (p: Project) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  projects,
  onClose,
  onSelectProject,
}) => {
  const [sliderPos, setSliderPos] = useState<number>(50);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && project) handleNext();
      if (e.key === 'ArrowLeft' && project) handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [project]);

  if (!project) return null;

  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];

  const handleNext = () => onSelectProject(nextProject);
  const handlePrev = () => onSelectProject(prevProject);

  return (
    <div
      id="project-detail-modal"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-xl flex justify-center p-0 sm:p-4 md:p-6 lg:p-8 animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div className="relative w-full max-w-5xl bg-[#0d0d0d] text-white rounded-none sm:rounded-3xl border border-white/15 overflow-hidden shadow-2xl my-auto flex flex-col max-h-[96vh]">
        
        {/* Modal Top Bar */}
        <div className="sticky top-0 z-30 bg-[#0d0d0d]/95 backdrop-blur-md px-6 py-4 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3 font-mono text-xs text-white/70">
            <span className="text-[#F7A928] font-bold">PROJECT {project.number}</span>
            <span>//</span>
            <span className="uppercase text-white">{project.categoryDisplay}</span>
            <span className="hidden sm:inline text-white/40">// {project.year}</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-1 font-mono text-xs text-white/50 mr-2">
              <button
                onClick={handlePrev}
                className="p-1.5 hover:text-white transition-colors"
                title="Previous Project (Left Arrow)"
              >
                <ArrowLeft size={16} />
              </button>
              <span>
                {currentIndex + 1} / {projects.length}
              </span>
              <button
                onClick={handleNext}
                className="p-1.5 hover:text-white transition-colors"
                title="Next Project (Right Arrow)"
              >
                <ArrowRight size={16} />
              </button>
            </div>

            <button
              id="close-project-modal-btn"
              onClick={onClose}
              className="p-2 rounded-full border border-white/20 text-white hover:bg-[#F7A928] hover:text-black hover:border-[#F7A928] transition-all"
              aria-label="Close project modal"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 md:p-10 space-y-10 film-grain-dark">
          
          {/* Header Title Section */}
          <div>
            <div className="flex items-center gap-3 mb-2 font-mono text-xs text-[#F7A928]">
              <span className="px-2 py-0.5 rounded-xs bg-[#F7A928]/10 border border-[#F7A928]/30">
                {project.category}
              </span>
              <span>{project.clientOrContext}</span>
            </div>

            <h2
              id="modal-project-title"
              className="font-display font-black text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white mb-4"
            >
              {project.title}
            </h2>

            <p className="text-base sm:text-lg text-white/80 font-normal leading-relaxed max-w-3xl">
              {project.description}
            </p>
          </div>

          {/* Hero Media Preview */}
          <div className="relative rounded-2xl overflow-hidden bg-zinc-950 border border-white/10 aspect-video group">
            <img
              src={project.heroImage}
              alt={project.title}
              className="w-full h-full object-cover grayscale contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none"></div>

            {/* Live Playback indicator badge */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-white/90">
              <div className="flex items-center gap-2 bg-black/70 backdrop-blur-xs px-3 py-1.5 rounded-full border border-white/15">
                <Film size={14} className="text-[#F7A928]" />
                <span>CINEMATIC SHOWCASE // 4K MASTER</span>
              </div>
              <span className="bg-black/70 backdrop-blur-xs px-3 py-1.5 rounded-full border border-white/15 text-[#F7A928]">
                {project.year}
              </span>
            </div>
          </div>

          {/* Project Specs: Role & Software */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 rounded-2xl bg-white/5 border border-white/10">
            <div>
              <span className="block font-mono text-xs text-[#F7A928] uppercase tracking-wider mb-1">
                MY ROLE
              </span>
              <span className="font-display font-bold text-base sm:text-lg text-white">
                {project.role}
              </span>
            </div>

            <div>
              <span className="block font-mono text-xs text-[#F7A928] uppercase tracking-wider mb-1">
                TIMELINE / YEAR
              </span>
              <span className="font-display font-bold text-base sm:text-lg text-white">
                {project.year}
              </span>
            </div>

            <div>
              <span className="block font-mono text-xs text-[#F7A928] uppercase tracking-wider mb-2">
                TOOLS &amp; SOFTWARE
              </span>
              <div className="flex flex-wrap gap-1.5">
                {project.software.map((sw, sIdx) => (
                  <span
                    key={sIdx}
                    className="font-mono text-xs px-2 py-0.5 rounded-xs bg-white/10 text-white/90 border border-white/15"
                  >
                    {sw}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Before & After Comparison Slider (if applicable) */}
          {project.beforeAfter && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sliders size={18} className="text-[#F7A928]" />
                  <h3 className="font-display font-bold text-lg uppercase tracking-wider text-white">
                    BEFORE / AFTER BREAKDOWN
                  </h3>
                </div>
                <span className="font-mono text-xs text-white/50">
                  DRAG SLIDER TO COMPARE
                </span>
              </div>

              <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/15 select-none bg-black">
                {/* After Image (Background) */}
                <img
                  src={project.beforeAfter.imageAfter}
                  alt={project.beforeAfter.labelAfter}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <span className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-mono text-[#F7A928] border border-white/20 z-10">
                  {project.beforeAfter.labelAfter}
                </span>

                {/* Before Image (Clipped by slider) */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: `${sliderPos}%` }}
                >
                  <img
                    src={project.beforeAfter.imageBefore}
                    alt={project.beforeAfter.labelBefore}
                    className="absolute inset-0 w-full h-full object-cover max-w-none"
                    style={{ width: '100%', minWidth: '100%' }}
                  />
                  <span className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-mono text-white border border-white/20 z-10">
                    {project.beforeAfter.labelBefore}
                  </span>
                </div>

                {/* Divider Line */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-[#F7A928] shadow-lg pointer-events-none z-20"
                  style={{ left: `${sliderPos}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#F7A928] text-black font-bold flex items-center justify-center text-xs shadow-md">
                    ⇄
                  </div>
                </div>

                {/* Range input for slider control */}
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPos}
                  onChange={(e) => setSliderPos(Number(e.target.value))}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                  aria-label="Comparison slider"
                />
              </div>

              <p className="text-xs font-mono text-white/60">
                {project.beforeAfter.description}
              </p>
            </div>
          )}

          {/* Creative Process Steps */}
          <div className="space-y-4">
            <h3 className="font-display font-bold text-lg uppercase tracking-wider text-white">
              CREATIVE PROCESS
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {project.creativeProcess.map((step, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-between gap-3"
                >
                  <span className="font-mono text-xs text-[#F7A928] font-bold">
                    STEP 0{idx + 1}
                  </span>
                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Final Result Statement */}
          <div className="p-6 rounded-2xl bg-[#F7A928]/10 border border-[#F7A928]/30 flex items-start gap-4">
            <CheckCircle size={22} className="text-[#F7A928] shrink-0 mt-0.5" />
            <div>
              <span className="block font-mono text-xs text-[#F7A928] uppercase tracking-wider mb-1 font-bold">
                FINAL OUTCOME
              </span>
              <p className="text-sm sm:text-base text-white/90 leading-relaxed">
                {project.finalResultText}
              </p>
            </div>
          </div>

          {/* Gallery Frames */}
          {project.gallery && project.gallery.length > 0 && (
            <div className="space-y-4">
              <h3 className="font-display font-bold text-lg uppercase tracking-wider text-white">
                PROJECT STILLS &amp; PASSES
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.gallery.map((imgUrl, gIdx) => (
                  <div
                    key={gIdx}
                    className="relative rounded-xl overflow-hidden aspect-video bg-zinc-900 border border-white/10 group"
                  >
                    <img
                      src={imgUrl}
                      alt={`${project.title} frame ${gIdx + 1}`}
                      className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 right-2 font-mono text-[10px] bg-black/70 px-2 py-0.5 rounded-xs text-white/70">
                      FRAME 0{gIdx + 1}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Bottom Bar: Next Project Navigation */}
        <div className="sticky bottom-0 z-30 bg-[#0d0d0d]/95 backdrop-blur-md px-6 py-4 border-t border-white/10 flex items-center justify-between">
          <div className="text-xs font-mono text-white/50">
            NEXT ENTRY: <span className="text-white font-bold">{nextProject.title}</span>
          </div>

          <button
            id="next-project-modal-btn"
            onClick={handleNext}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xs bg-[#F7A928] text-black font-semibold text-xs uppercase tracking-wider hover:bg-white transition-colors"
          >
            <span>NEXT PROJECT</span>
            <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </div>
  );
};
