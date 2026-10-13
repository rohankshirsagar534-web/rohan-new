import { GraphicDesignReel, GraphicDesignGalleryItem, GraphicDesignProcessItem } from '../types';

/**
 * ============================================================================
 * GRAPHIC DESIGN SHOWREEL DATA SOURCE
 * ----------------------------------------------------------------------------
 * HOW TO CUSTOMIZE:
 * 1. REELS: Replace `videoUrl` and `poster` with your own 9:16 vertical video links.
 * 2. GALLERY: Replace `imageUrl` with links to your posters, banners, and thumbnails.
 * 3. BEFORE & AFTER: Replace `beforeImage` and `afterImage` for any project.
 * ============================================================================
 */

// PART 1 — GRAPHIC DESIGN REELS (Exactly 4 cards in a responsive 2x2 grid)
export const GRAPHIC_DESIGN_REELS: GraphicDesignReel[] = [
  {
    id: 'reel-01',
    number: '01',
    title: 'Kinetic Poster & Brand Motion Reel',
    tagline: 'Typographic hierarchy, temporal easing & editorial grid transitions',
    // Replaceable video URL (vertical 9:16 format supported)
    videoUrl: 'https://cdn.jumpshare.com/preview/vw64keW9QzxrsAm74YyQs_Dthi5alxYlZnuvPy3tAEq_LRC3taoj7CFbgo0TT8e7HRm7REAjDOWkANdLVaXv2DS7jRJUAAIR48_-gQIBfyYGDPk1EGnE7-h4JX7jDLp9Jg6PfL_cIPtxNMFz_CBQaW6yjbN-I2pg_cnoHs_AmgI.mp4',
    poster: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop',
    software: ['Photoshop', 'Illustrator', 'After Effects'],
    duration: '0:18',
    year: '2025'
  },
  {
    id: 'reel-02',
    number: '02',
    title: 'High-Impact YouTube Thumbnails & Art',
    tagline: 'CTR-optimized focal contrast, depth slicing & cinematic lighting',
    videoUrl: '/videos/ay6khcyf_video.mp4',
    poster: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=1200&auto=format&fit=crop',
    software: ['Photoshop', 'Blender', 'Lightroom'],
    duration: '0:15',
    year: '2025'
  },
  {
    id: 'reel-03',
    number: '03',
    title: 'Editorial Music & Event Cover Systems',
    tagline: 'Analog texture blending, brutalist type, and metallic chrome shaders',
    videoUrl: 'https://cdn.jumpshare.com/preview/JdAHGJn1Rjzh88X44h_7xLUFW4CcPtg1RoZRrOLHqhVIBXN9NcZ6VLN0JVA9HBLi1YUr8RM0srv1S8ZPaLb41JuZRTL0DnifoHfOG-h_t4uTRh6ItsRHy1rNBUrOBb5BQtkEVLt8vPsSAXmho7zmOm6yjbN-I2pg_cnoHs_AmgI.mp4',
    poster: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=1200&auto=format&fit=crop',
    software: ['Photoshop', 'Cinema 4D', 'Illustrator'],
    duration: '0:22',
    year: '2025'
  },
  {
    id: 'reel-04',
    number: '04',
    title: 'Advertising Campaign & Social Deck',
    tagline: 'Multi-platform social rollouts, billboard renders & promotional cards',
    videoUrl: '/assets/diorama_render.mp4',
    poster: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=1200&auto=format&fit=crop',
    software: ['Figma', 'Photoshop', 'After Effects'],
    duration: '0:14',
    year: '2024'
  }
];

// PART 2 — SELECTED GRAPHIC WORK GALLERY (Preserves natural aspect ratios)
export const GRAPHIC_DESIGN_GALLERY: GraphicDesignGalleryItem[] = [
  {
    id: 'work-poster-01',
    title: 'Brutalist Soundwave Music Festival Poster',
    category: 'Posters',
    imageUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1200&auto=format&fit=crop',
    aspectRatio: 'poster',
    description: 'Experimental A1 print series featuring distorted typography, Swiss grid alignment, and duotone spot color separations.',
    software: ['Photoshop', 'Illustrator'],
    year: '2025',
    client: 'Subterranean Audio Festival'
  },
  {
    id: 'work-banner-01',
    title: 'Cyberpunk Esports Championship Hero Banner',
    category: 'Banners',
    imageUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1600&auto=format&fit=crop',
    aspectRatio: 'banner',
    description: 'Ultra-wide tournament display banner with custom 3D metallic typography, atmospheric fog, and vibrant neon accents.',
    software: ['Photoshop', 'Blender', 'Cinema 4D'],
    year: '2025',
    client: 'Apex Arena Major'
  },
  {
    id: 'work-thumb-01',
    title: 'Cinematic Documentary YouTube Thumbnail',
    category: 'Thumbnails',
    imageUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1600&auto=format&fit=crop',
    aspectRatio: 'thumbnail',
    description: 'Designed for high click-through rate with dramatic split-light grading, focal subject rim glow, and punchy typography.',
    software: ['Photoshop', 'Lightroom'],
    year: '2025',
    client: 'Visual Essay Channel (250K+ Subs)'
  },
  {
    id: 'work-ad-01',
    title: 'Monochrome Tech Apparel Campaign Ad',
    category: 'Advertisements',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
    aspectRatio: 'square',
    description: 'High-contrast square social advertisement exploring negative space, minimal geometric framing, and bold callouts.',
    software: ['Figma', 'Photoshop'],
    year: '2024',
    client: 'KINETIC Brand Lab'
  },
  {
    id: 'work-poster-02',
    title: 'Retro-Futuristic Sci-Fi Film Teaser One-Sheet',
    category: 'Posters',
    imageUrl: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=1200&auto=format&fit=crop',
    aspectRatio: 'poster',
    description: 'Screenprint aesthetic movie poster utilizing analog halftones, paper fold textures, and custom display lettering.',
    software: ['Illustrator', 'Photoshop'],
    year: '2025',
    client: 'Orbit Independent Cinema'
  },
  {
    id: 'work-thumb-02',
    title: 'VFX Breakdown Masterclass Thumbnail',
    category: 'Thumbnails',
    imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1600&auto=format&fit=crop',
    aspectRatio: 'thumbnail',
    description: 'Color-graded visual thumbnail with dynamic energy streaks, custom interface HUD elements, and high visual hierarchy.',
    software: ['Photoshop', 'After Effects'],
    year: '2025',
    client: 'Creator Academy'
  },
  {
    id: 'work-brand-01',
    title: 'Visual Identity & Modular Asset Suite',
    category: 'Branding',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    aspectRatio: 'square',
    description: 'Comprehensive design system including typographic badges, vector iconography, and dynamic packaging mockups.',
    software: ['Illustrator', 'Photoshop', 'Figma'],
    year: '2024',
    client: 'Vanguard Media Group'
  },
  {
    id: 'work-banner-02',
    title: 'Editorial Podcast Season Header Billboard',
    category: 'Banners',
    imageUrl: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=1600&auto=format&fit=crop',
    aspectRatio: 'banner',
    description: 'Panoramic Spotify and YouTube banner with textured film grain, warm orange accent gradients, and custom logotype.',
    software: ['Photoshop', 'Illustrator'],
    year: '2025',
    client: 'The Creative Frequency'
  }
];

// PART 3 — BEHIND THE PROCESS (Before & After Comparison Projects)
export const GRAPHIC_DESIGN_PROCESS: GraphicDesignProcessItem[] = [
  {
    id: 'process-01',
    title: 'Cyberpunk Kinetic Poster Grade',
    subtitle: 'From Raw 3D Clay Render to Finished Atmospheric Artwork',
    beforeLabel: 'RAW CLAY / 3D WIREFRAME',
    afterLabel: 'FINAL COLOR & POST COMPOSITE',
    beforeImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1400&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1400&auto=format&fit=crop',
    description: 'Step-by-step transformation taking flat geometries into a rich cinematic key visual through multi-pass lighting, custom LUT color grading, depth hazing, and 35mm film grain overlay.',
    software: ['Cinema 4D', 'Photoshop', 'Camera Raw']
  },
  {
    id: 'process-02',
    title: 'Viral Video Keyframe Composite',
    subtitle: 'Flat Studio Cutout to High-CTR Cinematic Storytelling',
    beforeLabel: 'UNEDITED FLAT PLATE',
    afterLabel: 'RETOUCHED & COMPOSITED MASTER',
    beforeImage: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1400&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=1400&auto=format&fit=crop',
    description: 'Isolating the subject with custom pen tool masking, adding directional rim highlights in orange/cyan, painting environmental light wrap, and injecting volumetric smoke passes.',
    software: ['Photoshop', 'Lightroom']
  },
  {
    id: 'process-03',
    title: 'Album Art Typographic System',
    subtitle: 'Initial Vector Layout to Textured Screenprinted Vinyl Cover',
    beforeLabel: 'ROUGH VECTOR PROTOTYPE',
    afterLabel: 'FINAL TEXTURED VINYL SLEEVE',
    beforeImage: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1400&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1400&auto=format&fit=crop',
    description: 'Refining kerning and negative space balance, adding risograph ink bleed emulation, custom distressed textures, and holographic foil accents for physical print run.',
    software: ['Illustrator', 'Photoshop']
  }
];
