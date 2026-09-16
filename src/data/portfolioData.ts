import { Project, SkillCategory, JourneyMilestone, ProcessStage } from '../types';

export const PERSONAL_INFO = {
  name: 'Rohan Kshirsagar',
  monogram: 'RK',
  role: 'VFX Artist, Video Editor & Visual Designer',
  shortRole: 'VFX ARTIST / EDITOR / DESIGNER',
  email: 'rohankshirsagar534@gmail.com',
  availableForWork: true,
  availabilityText: 'AVAILABLE FOR WORK',
  location: 'Mumbai / Remote Worldwide',
  bio: "I'm Rohan Kshirsagar, a multidisciplinary visual creator focused on filmmaking, editing, VFX, motion graphics, design, 3D and digital experiences. Combining modern editorial structure with cinematic rhythm, I turn raw concepts into captivating visual pieces.",
  heroSubtext: "VFX artist, video editor and visual designer creating cinematic visuals, motion graphics, digital experiences and experimental artwork.",
  socials: [
    { name: 'Email', url: 'mailto:rohankshirsagar534@gmail.com', label: 'rohankshirsagar534@gmail.com' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/rohan-kshirsagar', label: 'linkedin.com/in/rohan-kshirsagar' },
    { name: 'Instagram', url: 'https://instagram.com/rohan.visuals', label: '@rohan.visuals' },
    { name: 'Behance', url: 'https://behance.net/rohankshirsagar', label: 'behance.net/rohankshirsagar' }
  ],
  stats: [
    { value: '05+', label: 'CREATIVE DISCIPLINES', detail: 'From editing to VFX, 3D & interface craft' },
    { value: '20+', label: 'VISUAL PROJECTS', detail: 'Completed edits, animations & digital pieces' },
    { value: '02+', label: 'YEARS OF CRAFT', detail: 'Focused practical experience and visual R&D' }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: 'title-animation',
    number: '01',
    title: 'TITLE ANIMATION',
    category: 'MOTION',
    categoryDisplay: 'Motion Graphics / Animation',
    year: '2025',
    description: 'Kinetic typography sequence and motion graphic identity exploring brutalist type hierarchy, film grain transitions, and syncopated audio-visual rhythm.',
    role: 'Art Director & Motion Designer',
    clientOrContext: 'Independent Film Title Sequence',
    software: ['After Effects', 'Illustrator', 'Cinema 4D'],
    thumbnail: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1600&auto=format&fit=crop',
    aspectRatio: 'wide',
    featured: true,
    creativeProcess: [
      'Deconstructed classical editorial magazine layouts into modular typography elements.',
      'Authored custom temporal easing curves in After Effects to deliver sudden impacts with organic settle times.',
      'Layered 35mm scan grain textures and lens aberration passes for analog warmth.'
    ],
    beforeAfter: {
      labelBefore: 'Raw Layout Sketch',
      labelAfter: 'Final Motion Composite',
      imageBefore: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
      imageAfter: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop',
      description: 'Side-by-side progression from typographic wireframe to textured cinematic motion render.'
    },
    finalResultText: 'Delivered an energetic 45-second modular motion pack including opening sequence, title cards, lower thirds, and animated social teaser cutdowns.',
    gallery: [
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=1200&auto=format&fit=crop'
    ]
  },
  {
    id: 'cinematic-edit',
    number: '02',
    title: 'CINEMATIC EDIT',
    category: 'VIDEO',
    categoryDisplay: 'Video Editing / Storytelling',
    year: '2024',
    description: 'Pacing-driven narrative short film cut featuring multi-cam timeline assembly, custom sound design landscapes, and documentary-style jump cuts with seamless match cuts.',
    role: 'Lead Video Editor & Colorist',
    clientOrContext: 'Narrative Short & Teaser Cut',
    software: ['Premiere Pro', 'DaVinci Resolve', 'Logic Pro'],
    thumbnail: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1200&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1600&auto=format&fit=crop',
    aspectRatio: 'square',
    creativeProcess: [
      'Ingested 6 hours of raw LOG footage and established a strict color-coded timeline structure.',
      'Created micro-rhythms aligned with sub-bass hits and environmental ambient field recordings.',
      'Conducted a tailored two-node DaVinci Resolve color grade emphasizing deep contrast and warm tungsten highlights.'
    ],
    beforeAfter: {
      labelBefore: 'Raw Flat LOG Footage',
      labelAfter: 'Final Film Emulation Grade',
      imageBefore: 'https://images.unsplash.com/photo-1518173946687-a4c8a383392e?q=80&w=1200&auto=format&fit=crop',
      imageAfter: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1200&auto=format&fit=crop',
      description: 'Color science transformation from desaturated flat sensor curve to rich Kodak 2383 cinematic response.'
    },
    finalResultText: 'A high-retention visual narrative that maintains dramatic tension from the first breath to the final blackout frame.',
    gallery: [
      'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=1200&auto=format&fit=crop'
    ]
  },
  {
    id: 'product-campaign',
    number: '03',
    title: 'PRODUCT CAMPAIGN',
    category: 'GRAPHIC DESIGN',
    categoryDisplay: 'Graphic Design / Advertising',
    year: '2024',
    description: 'High-contrast editorial advertising concept blending oversized Swiss grid typography, bold chromatic orange accents, and minimal product packaging visuals.',
    role: 'Visual Designer & Brand Stylist',
    clientOrContext: 'Conceptual Brand Identity & Poster Series',
    software: ['Photoshop', 'Illustrator', 'InDesign'],
    thumbnail: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=1200&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=1600&auto=format&fit=crop',
    aspectRatio: 'tall',
    creativeProcess: [
      'Researched mid-century International Typographic Style posters and modern streetwear branding.',
      'Constructed a rigid 16-column modular grid with deliberate negative space breathing zones.',
      'Crafted tactile paper grain displacement maps to simulate screen-printed ink textures.'
    ],
    finalResultText: 'A cohesive 6-part editorial campaign suitable for billboard displays, retail wheatpaste installations, and digital lookbooks.',
    gallery: [
      'https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop'
    ]
  },
  {
    id: 'vfx-experiment',
    number: '04',
    title: 'VFX EXPERIMENT',
    category: 'VFX',
    categoryDisplay: 'Visual Effects / Compositing',
    year: '2025',
    description: 'Clean plate reconstruction, planar motion tracking, green screen keying, and seamless CG element integration with realistic grain matching and optical flares.',
    role: 'Compositor & VFX Artist',
    clientOrContext: 'VFX Lab Study & Compositing Reel',
    software: ['After Effects', 'Nuke Principles', 'Mocha Pro', 'Blender'],
    thumbnail: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1200&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1600&auto=format&fit=crop',
    aspectRatio: 'wide',
    featured: true,
    creativeProcess: [
      'Multi-pass rotoscoping and hair edge preservation using advanced differential mattes.',
      'Camera solve in Mocha to extract accurate parallax motion and focal length parameters.',
      'Depth-map fog integration, light wrap simulation, and digital gate weave application.'
    ],
    beforeAfter: {
      labelBefore: 'Raw Chroma Studio Plate',
      labelAfter: 'Finished CGI Composite',
      imageBefore: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
      imageAfter: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1200&auto=format&fit=crop',
      description: 'Photorealistic integration of digital environment geometry behind live-action tracked talent.'
    },
    finalResultText: 'Achieved complete photorealistic suspension of disbelief with matched camera sensor grain and chromatic dispersion.',
    gallery: [
      'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1200&auto=format&fit=crop'
    ]
  },
  {
    id: '3d-world',
    number: '05',
    title: '3D WORLD',
    category: '3D',
    categoryDisplay: '3D / Blender / Environment',
    year: '2024',
    description: 'Atmospheric hard-surface and organic environment design rendered in Blender Cycles, focusing on volumetric lighting, procedural PBR textures, and cinematic depth-of-field.',
    role: '3D Environment Artist',
    clientOrContext: 'Worldbuilding Exploration',
    software: ['Blender 4.0', 'Substance Painter', 'Photoshop'],
    thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1600&auto=format&fit=crop',
    aspectRatio: 'square',
    creativeProcess: [
      'Blocked out primary architectural silhouettes using brutalist monolithic forms.',
      'Scattered micro-debris and procedural weathering using geometry nodes.',
      'Crafted custom gobos to simulate harsh sunlight filtering through high-altitude haze.'
    ],
    finalResultText: 'Full 360-degree virtual environment capable of camera navigation and high-resolution still frame extraction for keyframe art.',
    gallery: [
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop'
    ]
  },
  {
    id: 'digital-experience',
    number: '06',
    title: 'DIGITAL EXPERIENCE',
    category: 'WEB',
    categoryDisplay: 'UI/UX / Web Design',
    year: '2025',
    description: 'Immersive interactive visual web experience combining brutalist micro-interactions, responsive grid fluidity, and dark editorial aesthetic for digital creators.',
    role: 'UI/UX & Creative Frontend Designer',
    clientOrContext: 'Creative Studio Web Presence',
    software: ['Figma', 'React', 'Tailwind CSS', 'Motion'],
    thumbnail: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1600&auto=format&fit=crop',
    aspectRatio: 'wide',
    creativeProcess: [
      'Conducted user flow mapping focusing on seamless discovery of visual showreel clips.',
      'Designed a high-contrast black/off-white color system with cinematic warm orange accents.',
      'Engineered sub-60fps fluid transitions with zero layout shift.'
    ],
    finalResultText: 'A high-performance responsive interface built to showcase high-bitrate media smoothly across all mobile and desktop viewports.',
    gallery: [
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop'
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'video',
    number: '01',
    title: 'VIDEO',
    tagline: 'Editing, narrative pacing, multi-cam assembly & audio-visual synchronization.',
    tools: ['Premiere Pro', 'After Effects', 'DaVinci Resolve', 'CapCut'],
    competencies: ['Narrative Assembly', 'Pacing & Rhythm', 'Color Grading', 'Sound Design & Foley', 'Short-form & Long-form']
  },
  {
    id: 'vfx',
    number: '02',
    title: 'VFX',
    tagline: 'Compositing, rotoscoping, clean-plating & photorealistic CGI integration.',
    tools: ['Compositing', 'Motion Tracking', 'Rotoscoping', 'Green Screen', 'Visual Effects'],
    competencies: ['Planar & 3D Tracking', 'Chroma Keying', 'Object Removal / Clean Plates', 'Grain Matching', 'Atmosphere Simulation']
  },
  {
    id: 'design',
    number: '03',
    title: 'DESIGN',
    tagline: 'Brutalist & Swiss typography, editorial layouts, poster design & brand identity.',
    tools: ['Photoshop', 'Illustrator', 'Graphic Design', 'Poster Design', 'Branding'],
    competencies: ['Editorial Art Direction', 'Typography Systems', 'Poster Aesthetics', 'Print & Digital Layouts', 'Visual Identity']
  },
  {
    id: '3d',
    number: '04',
    title: '3D',
    tagline: 'Hard-surface modeling, procedural lighting, materials & camera animation.',
    tools: ['Blender', 'Maya', '3D Modeling', 'Texturing', 'Lighting'],
    competencies: ['Atmospheric Lighting', 'PBR Material Craft', 'Camera Movement', 'Geometry Nodes', 'Render Optimization']
  },
  {
    id: 'motion',
    number: '05',
    title: 'MOTION',
    tagline: 'Kinetic typography, brand packages, opening titles & dynamic 2D animation.',
    tools: ['Motion Graphics', 'Title Animation', '2D Animation', 'Kinetic Typography'],
    competencies: ['Keyframe Dynamics', 'Title Sequences', 'Audio-reactive Motion', 'Micro-interactions', 'Brand Reveal Systems']
  },
  {
    id: 'digital',
    number: '06',
    title: 'DIGITAL',
    tagline: 'Design systems, modern responsive interfaces, interactive prototypes & web craft.',
    tools: ['UI/UX', 'Web Design', 'HTML', 'CSS', 'JavaScript'],
    competencies: ['Responsive Grids', 'Design Systems', 'Modern Web Standards', 'Motion UI Interaction', 'Mobile Optimization']
  }
];

export const PROCESS_STAGES: ProcessStage[] = [
  {
    number: '01',
    phase: 'IDEATE',
    title: 'CONCEPT & STORY',
    description: 'Deconstructing the core idea, story beats, emotional tone, and target visual direction before touching software.',
    deliverables: ['Creative Brief', 'Narrative Arc', 'References & Vision Board'],
    iconMarker: 'REC'
  },
  {
    number: '02',
    phase: 'DESIGN',
    title: 'BOARDS & SYSTEMS',
    description: 'Developing moodboards, color palettes, typographic hierarchies, styleframes, and rough storyboard animatics.',
    deliverables: ['Styleframes', 'Grid Hierarchy', 'Typographic Specs', 'Audio Reference'],
    iconMarker: 'GRID'
  },
  {
    number: '03',
    phase: 'CREATE',
    title: 'PRODUCTION & EXECUTION',
    description: 'The core craft phase: timeline assembly, 3D modeling, camera tracking, VFX keying, and motion animation.',
    deliverables: ['Timeline Rough Cut', 'VFX Composites', 'Motion Elements', '3D Asset Passes'],
    iconMarker: 'RENDER'
  },
  {
    number: '04',
    phase: 'POLISH',
    title: 'COLOR & SOUND FINISH',
    description: 'Finalizing the piece with meticulous color timing, audio mastering, optical grain matching, and multi-format exports.',
    deliverables: ['Final Color Grade', 'Master Audio Mix', 'ProRes Master', 'Web & Social Deliveries'],
    iconMarker: 'MASTER'
  }
];

export const JOURNEY_ITEMS: JourneyMilestone[] = [
  {
    number: '01',
    title: 'Independent Filmmaking & Video Direction',
    category: 'Creative Project',
    description: 'Spearheaded complete visual post-production for independent short projects, overseeing editorial pacing, custom sound design, and color grading.',
    year: '2025',
    linkText: 'VIEW CASE STUDY ↗',
    deliverable: 'Shortfilm & Narrative Edit'
  },
  {
    number: '02',
    title: 'Motion Design & Title Identity Series',
    category: 'Design Commission',
    description: 'Explored experimental kinetic type treatments and audio-reactive title sequences blending Swiss modernist grid aesthetics with raw cinematic textures.',
    year: '2024',
    linkText: 'EXPLORE REEL ↗',
    deliverable: 'Animation & Title Sequences'
  },
  {
    number: '03',
    title: 'VFX Compositing & Clean Plate R&D',
    category: 'Freelance & Research',
    description: 'Executed planar camera tracking, green screen extractions, match-moving, and procedural particle integration across live-action test footage.',
    year: '2024',
    linkText: 'INSPECT BREAKDOWN ↗',
    deliverable: 'Compositing Passes'
  },
  {
    number: '04',
    title: '3D Worldbuilding & Visual Systems Experiment',
    category: 'Personal Experiment',
    description: 'Authored monolithic architectural environments in Blender, focusing on volumetric sunlight physics, photoreal surface micro-imperfections, and camera optics.',
    year: '2023',
    linkText: 'SEE ARTWORK ↗',
    deliverable: '3D Environments'
  }
];
