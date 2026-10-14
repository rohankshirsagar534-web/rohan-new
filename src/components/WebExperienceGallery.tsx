import React, { useState, useRef } from 'react';
import { 
  Globe, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Eye, 
  Tag, 
  ExternalLink, 
  X, 
  Film, 
  Image as ImageIcon,
  Sparkles,
  Layers,
  Monitor
} from 'lucide-react';
import { WEB_EXPERIENCE_ITEMS } from '../data/webExperienceData';
import { resolveAsset } from '../utils/assets';
import { WebExperienceItem } from '../types';

export const WebExperienceGallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'video' | 'image'>('all');
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>('ALL');
  const [activeModalItem, setActiveModalItem] = useState<WebExperienceItem | null>(null);
  const [isModalMuted, setIsModalMuted] = useState<boolean>(true);
  const [isModalPlaying, setIsModalPlaying] = useState<boolean>(true);
  const modalVideoRef = useRef<HTMLVideoElement | null>(null);

  const subCategories = [
    'ALL',
    'Interaction Recording',
    'Visual Inspiration Reel',
    'Full UI Layout',
    'Desktop Experience',
    'Dashboard & Matrix',
    'Landing Architecture',
    'Component Flow',
    'Design System',
    'Responsive Wireframe'
  ];

  const filteredItems = WEB_EXPERIENCE_ITEMS.filter((item) => {
    if (activeTab !== 'all' && item.type !== activeTab) return false;
    if (selectedSubCategory !== 'ALL' && item.category !== selectedSubCategory) return false;
    return true;
  });

  const videoCount = WEB_EXPERIENCE_ITEMS.filter((i) => i.type === 'video').length;
  const imageCount = WEB_EXPERIENCE_ITEMS.filter((i) => i.type === 'image').length;

  const handleTogglePlay = () => {
    if (!modalVideoRef.current) return;
    if (modalVideoRef.current.paused) {
      modalVideoRef.current.play();
      setIsModalPlaying(true);
    } else {
      modalVideoRef.current.pause();
      setIsModalPlaying(false);
    }
  };

  const handleToggleMute = () => {
    if (!modalVideoRef.current) return;
    modalVideoRef.current.muted = !modalVideoRef.current.muted;
    setIsModalMuted(modalVideoRef.current.muted);
  };

  return (
    <div id="web-experience-gallery-space" className="mt-16 pt-14 border-t-2 border-black/15 animate-in fade-in duration-300">
      {/* Header Banner */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-black/15 mb-10">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#555555] uppercase mb-3">
            <span className="text-[#F7A928] font-bold">[ VAULT ]</span>
            <span>UI/UX &amp; INTERACTIVE WEB ARCHITECTURE</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-black text-[#F7A928] flex items-center justify-center shrink-0 shadow-sm">
              <Globe size={22} />
            </div>
            <div>
              <h3 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-black">
                WEB &amp; DIGITAL EXPERIENCES
              </h3>
              <p className="text-sm font-mono text-[#555555] mt-1">
                Live recorded interaction flows, interface prototypes, moodboard reels, and design system architectures.
              </p>
            </div>
          </div>
        </div>

        {/* Media Type Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <button
            type="button"
            onClick={() => { setActiveTab('all'); setSelectedSubCategory('ALL'); }}
            className={`text-xs sm:text-sm font-mono font-bold px-4 py-2 rounded-full transition-all duration-200 cursor-pointer uppercase tracking-wider ${
              activeTab === 'all'
                ? 'bg-black text-[#F7A928] shadow-xs ring-1 ring-black'
                : 'bg-white border border-black/15 text-black hover:border-black hover:bg-black/5'
            }`}
          >
            <span>ALL MEDIA ({WEB_EXPERIENCE_ITEMS.length})</span>
          </button>

          <button
            type="button"
            onClick={() => { setActiveTab('video'); setSelectedSubCategory('ALL'); }}
            className={`flex items-center gap-1.5 text-xs sm:text-sm font-mono font-bold px-4 py-2 rounded-full transition-all duration-200 cursor-pointer uppercase tracking-wider ${
              activeTab === 'video'
                ? 'bg-black text-[#F7A928] shadow-xs ring-1 ring-black'
                : 'bg-white border border-black/15 text-black hover:border-black hover:bg-black/5'
            }`}
          >
            <Film size={13} />
            <span>RECORDINGS &amp; REELS ({videoCount})</span>
          </button>

          <button
            type="button"
            onClick={() => { setActiveTab('image'); setSelectedSubCategory('ALL'); }}
            className={`flex items-center gap-1.5 text-xs sm:text-sm font-mono font-bold px-4 py-2 rounded-full transition-all duration-200 cursor-pointer uppercase tracking-wider ${
              activeTab === 'image'
                ? 'bg-black text-[#F7A928] shadow-xs ring-1 ring-black'
                : 'bg-white border border-black/15 text-black hover:border-black hover:bg-black/5'
            }`}
          >
            <ImageIcon size={13} />
            <span>UI SCREENS &amp; FLOWS ({imageCount})</span>
          </button>
        </div>
      </div>

      {/* Subcategory Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
        {subCategories.map((cat) => {
          const isActive = selectedSubCategory === cat;
          const count = cat === 'ALL'
            ? (activeTab === 'all' ? WEB_EXPERIENCE_ITEMS.length : WEB_EXPERIENCE_ITEMS.filter((i) => i.type === activeTab).length)
            : WEB_EXPERIENCE_ITEMS.filter((i) => (activeTab === 'all' || i.type === activeTab) && i.category === cat).length;

          if (count === 0 && cat !== 'ALL') return null;

          return (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedSubCategory(cat)}
              className={`text-xs font-mono font-bold px-3 py-1.5 rounded-full transition-all duration-200 shrink-0 uppercase tracking-wider cursor-pointer ${
                isActive
                  ? 'bg-black text-[#F7A928] shadow-xs'
                  : 'bg-white border border-black/15 text-black hover:border-black hover:bg-black/5'
              }`}
            >
              <span>{cat}</span>
              <span className={`ml-1 text-[11px] ${isActive ? 'text-[#F7A928]/90' : 'text-black/50'}`}>
                ({count})
              </span>
            </button>
          );
        })}
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            id={`web-experience-card-${item.id}`}
            onClick={() => {
              setActiveModalItem(item);
              setIsModalMuted(true);
              setIsModalPlaying(true);
            }}
            className="group bg-white border border-black/15 rounded-2xl overflow-hidden hover:border-black hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer hover:-translate-y-1"
          >
            {/* Visual Frame */}
            <div className={`relative w-full overflow-hidden bg-[#0a0a0a] ${
              item.aspect === 'portrait' ? 'aspect-[3/4]' : 'aspect-[16/10]'
            }`}>
              {item.type === 'video' ? (
                <div className="relative w-full h-full">
                  <video
                    src={resolveAsset(item.mediaUrl)}
                    poster={item.posterUrl ? resolveAsset(item.posterUrl) : undefined}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    onMouseEnter={(e) => {
                      const v = e.currentTarget;
                      v.play().catch(() => {});
                    }}
                    onMouseLeave={(e) => {
                      const v = e.currentTarget;
                      v.pause();
                      v.currentTime = 0;
                    }}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-black/80 backdrop-blur-md px-2 py-0.5 rounded-xs text-[10px] font-mono font-bold text-[#F7A928] border border-white/10">
                    <Play size={10} className="fill-[#F7A928]" />
                    <span>HOVER TO PREVIEW</span>
                  </div>
                </div>
              ) : (
                <img
                  src={resolveAsset(item.mediaUrl)}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                />
              )}

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-60 group-hover:opacity-30 transition-opacity pointer-events-none" />

              {/* Category Badge top-left */}
              <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-mono font-bold text-[#F7A928] uppercase border border-white/10">
                <Tag size={10} />
                <span>{item.category}</span>
              </div>

              {/* Inspect pill bottom-right */}
              <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <span className="flex items-center gap-1.5 bg-[#F7A928] text-black text-xs font-mono font-bold px-3 py-1.5 rounded-full shadow-md">
                  <Eye size={12} />
                  <span>{item.type === 'video' ? 'WATCH' : 'INSPECT'}</span>
                </span>
              </div>
            </div>

            {/* Card Content Details */}
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-[11px] font-mono text-[#666666] mb-1.5">
                  <span className="font-semibold text-black">{item.year}</span>
                  <div className="flex items-center gap-1">
                    {item.software.slice(0, 2).map((sw, sIdx) => (
                      <span key={sIdx} className="px-1.5 py-0.5 rounded-xs bg-black/5 text-black text-[9px] uppercase font-mono">
                        {sw}
                      </span>
                    ))}
                  </div>
                </div>
                <h4 className="font-display font-black text-base sm:text-lg text-black uppercase leading-tight line-clamp-2 group-hover:text-[#F7A928] transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs font-mono text-[#555555] mt-2 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-black/10 flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {item.tags.slice(0, 2).map((t, idx) => (
                    <span key={idx} className="text-[10px] font-mono uppercase px-2 py-0.5 bg-black/5 text-[#555555] rounded-xs">
                      #{t}
                    </span>
                  ))}
                </div>
                <a
                  href={item.savedlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-1 text-[11px] font-mono text-black/60 hover:text-[#F7A928] transition-colors"
                >
                  <span>SAVEDLY</span>
                  <ExternalLink size={11} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox / Video Modal */}
      {activeModalItem && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setActiveModalItem(null)}
        >
          <div 
            className="bg-[#141414] border border-white/15 rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto text-white shadow-2xl flex flex-col relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Bar */}
            <div className="flex items-center justify-between p-5 sm:p-6 border-b border-white/10 sticky top-0 bg-[#141414]/95 backdrop-blur-md z-10">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 rounded bg-[#F7A928] text-black font-mono font-bold text-xs uppercase">
                  {activeModalItem.category}
                </span>
                <span className="font-mono text-xs text-[#999999]">
                  {activeModalItem.year} ARCHIVE
                </span>
              </div>
              <button
                type="button"
                onClick={() => setActiveModalItem(null)}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Media Frame */}
            <div className="p-5 sm:p-8 flex flex-col items-center">
              <div className="relative max-h-[60vh] w-full rounded-xl overflow-hidden bg-black border border-white/10 shadow-2xl flex items-center justify-center">
                {activeModalItem.type === 'video' ? (
                  <div className="relative w-full aspect-[16/10] bg-black">
                    <video
                      ref={modalVideoRef}
                      src={resolveAsset(activeModalItem.mediaUrl)}
                      poster={activeModalItem.posterUrl ? resolveAsset(activeModalItem.posterUrl) : undefined}
                      controls
                      autoPlay
                      loop
                      playsInline
                      className="w-full h-full object-contain"
                    />
                  </div>
                ) : (
                  <img
                    src={resolveAsset(activeModalItem.mediaUrl)}
                    alt={activeModalItem.title}
                    referrerPolicy="no-referrer"
                    className="max-h-[60vh] w-auto object-contain rounded-xl"
                  />
                )}
              </div>

              {/* Text Meta Info */}
              <div className="w-full mt-6 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <h3 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight text-white">
                    {activeModalItem.title}
                  </h3>
                  <a
                    href={activeModalItem.savedlyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#F7A928] text-black font-mono font-bold text-xs uppercase tracking-wider hover:bg-white transition-colors shrink-0"
                  >
                    <span>OPEN ON SAVEDLY</span>
                    <ExternalLink size={13} />
                  </a>
                </div>

                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-white/70">
                  <span className="text-[#F7A928] font-bold">TOOLING &amp; STACK:</span>
                  {activeModalItem.software.map((sw, idx) => (
                    <span key={idx} className="bg-white/10 px-2.5 py-1 rounded-xs text-white">
                      {sw}
                    </span>
                  ))}
                </div>

                <p className="text-sm font-mono text-[#cccccc] leading-relaxed">
                  {activeModalItem.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-3 border-t border-white/10">
                  {activeModalItem.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono bg-white/10 px-3 py-1 rounded-full text-[#cccccc]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
