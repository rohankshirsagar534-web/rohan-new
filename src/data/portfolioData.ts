import { Project, SkillCategory, JourneyMilestone, ProcessStage, AnimationWorkItem } from '../types';

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
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/rohan-kshirsagar-64793b332/', label: 'linkedin.com/in/rohan-kshirsagar-64793b332' },
    { name: 'Instagram', url: 'https://instagram.com/rohan.visuals', label: '@rohan.visuals' },
    { name: 'GitHub', url: 'https://github.com/rohankshirsagar534-web', label: 'github.com/rohankshirsagar534-web' }
  ],
  stats: [
    { value: '05+', label: 'CREATIVE DISCIPLINES', detail: 'From editing to VFX, 3D & interface craft' },
    { value: '20+', label: 'VISUAL PROJECTS', detail: 'Completed edits, animations & digital pieces' },
    { value: '02+', label: 'YEARS OF CRAFT', detail: 'Focused practical experience and visual R&D' }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: 'short-ad-film-apex',
    number: '01',
    title: 'SHORT AD FILM // APEX SPEED',
    category: 'SHORT AD FILM',
    categoryDisplay: 'Short Ad Film / Performance Footwear TVC',
    year: '2025',
    description: 'High-octane 30-second commercial spot combining kinetic camera tracking, whip-pan match cuts, heart-thumping sub-bass sound design, and razor-sharp editorial rhythm for a performance footwear launch.',
    role: 'Commercial Director & Lead Editor',
    clientOrContext: 'Apex Performance Footwear TVC & Digital Ad Campaign',
    software: ['Premiere Pro', 'DaVinci Resolve', 'After Effects', 'Logic Pro'],
    thumbnail: 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?q=80&w=1200&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?q=80&w=1600&auto=format&fit=crop',
    videoUrl: 'https://cdn.jumpshare.com/preview/vw64keW9QzxrsAm74YyQs_Dthi5alxYlZnuvPy3tAEq_LRC3taoj7CFbgo0TT8e7HRm7REAjDOWkANdLVaXv2DS7jRJUAAIR48_-gQIBfyYGDPk1EGnE7-h4JX7jDLp9Jg6PfL_cIPtxNMFz_CBQaW6yjbN-I2pg_cnoHs_AmgI.mp4',
    aspectRatio: 'square',
    featured: true,
    creativeProcess: [
      'Engineered a 3-second rapid visual hook opening with macro lace-tightening Foley to stop user scrolling.',
      'Authored custom velocity curves syncing sprint footfalls to punchy sub-bass 808 transients.',
      'Conducted a DaVinci Resolve color grade emphasizing high-contrast warm asphalt tones and vibrant neon orange shoe accents.'
    ],
    beforeAfter: {
      labelBefore: 'Raw Flat LOG Footage',
      labelAfter: 'Final Commercial Color Grade',
      imageBefore: 'https://images.unsplash.com/photo-1518173946687-a4c8a383392e?q=80&w=1200&auto=format&fit=crop',
      imageAfter: 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?q=80&w=1200&auto=format&fit=crop',
      description: 'Color science transformation from desaturated flat sensor curve to high-impact broadcast commercial master.'
    },
    finalResultText: 'High-performing commercial ad film delivering a 3.2x lift in digital campaign click-through and full completion rate.',
    gallery: [
      'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1200&auto=format&fit=crop'
    ]
  },
  {
    id: 'graphic-designing',
    number: '02',
    title: 'GRAPHIC DESIGNING',
    category: 'GRAPHIC DESIGN',
    categoryDisplay: 'Graphic Design / Characters, Products & Props',
    year: '2024',
    description: 'Comprehensive graphic design suite spanning character design sheets, bespoke product packaging identities, and functional props design schematics with Swiss typographic discipline.',
    role: 'Graphic Designer, Character Concept Artist & Visual Stylist',
    clientOrContext: 'Commercial Brand, Entertainment & Character Design Commissions',
    software: ['Photoshop', 'Illustrator', 'Procreate', 'InDesign'],
    thumbnail: '/images/kara_poster.jpg',
    heroImage: '/images/kara_poster.jpg',
    videoUrl: '/videos/kara_by_rohan.mp4',
    externalUrl: 'https://savedly.net/f/3ta3rwsm',
    externalUrlLabel: 'SAVEDLY REEL',
    aspectRatio: 'wide',
    featured: true,
    creativeProcess: [
      'Developed expressive character silhouette studies and multi-angle turnarounds in Procreate and Photoshop.',
      'Constructed modular 3D product packaging die-lines and bespoke typographic logo lockups in Illustrator.',
      'Designed technical sci-fi prop sheets with exploded isometric callouts, materials notes, and functional HUD decals.'
    ],
    beforeAfter: {
      labelBefore: 'Initial Rough Thumbnail Sketch',
      labelAfter: 'Final Vector & Rendered Artwork',
      imageBefore: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1200&auto=format&fit=crop',
      imageAfter: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
      description: 'Progressive transformation from gestural thumbnailing to print-ready vector layout with tactile screenprint textures.'
    },
    finalResultText: 'A unified graphic design body of work covering character concept sheets, retail product packaging, and production-ready entertainment prop sheets.',
    gallery: [
      'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=1200&auto=format&fit=crop'
    ],
    designShowcase: [
      {
        type: 'CHARACTER DESIGN',
        title: 'Cyber Ronin Character Sheet',
        subtitle: 'Turnarounds & Costume Detailing',
        imageUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1200&auto=format&fit=crop',
        description: 'Complete visual development for an episodic protagonist, balancing angular cyberpunk armor plates with traditional flowing textiles.'
      },
      {
        type: 'PRODUCT DESIGN',
        title: 'Minimalist Modular Packaging',
        subtitle: 'Structural Box & Bottle Label System',
        imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&auto=format&fit=crop',
        description: 'Sustainable luxury cosmetics packaging system with custom typographic lockups, tactile emboss zones, and spot-UV foil varnish.'
      },
      {
        type: 'PROPS DESIGN',
        title: 'Sci-Fi Tactical Field Gear',
        subtitle: 'Hard-Surface Equipment Schematics',
        imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop',
        description: 'Function-first utility props featuring modular battery canisters, carbon-fiber grips, LED status HUD dials, and exploded assembly diagrams.'
      },
      {
        type: 'EDITORIAL',
        title: 'Swiss Grid Brand Poster Series',
        subtitle: 'Typographic Hierarchy & Print System',
        imageUrl: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=1200&auto=format&fit=crop',
        description: 'Brutalist print campaign crafted on a rigid 16-column grid with deliberate negative space breathing zones.'
      }
    ]
  },
  {
    id: 'vfx-experiment',
    number: '03',
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
    number: '04',
    title: '3D WORLD',
    category: '3D',
    categoryDisplay: '3D / Blender / Environment',
    year: '2024',
    description: 'Atmospheric hard-surface and organic environment design rendered in Blender Cycles, focusing on volumetric lighting, procedural PBR textures, and cinematic depth-of-field.',
    role: '3D Environment Artist',
    clientOrContext: 'Worldbuilding Exploration',
    software: ['Blender 4.0', 'Substance Painter', 'Photoshop'],
    thumbnail: '/assets/diorama_poster.jpg',
    heroImage: '/assets/diorama_poster.jpg',
    videoUrl: '/assets/diorama_render.mp4',
    aspectRatio: 'square',
    creativeProcess: [
      'Blocked out primary architectural silhouettes using brutalist monolithic forms.',
      'Scattered micro-debris and procedural weathering using geometry nodes.',
      'Crafted custom gobos to simulate harsh sunlight filtering through high-altitude haze.'
    ],
    finalResultText: 'Full 360-degree virtual environment capable of camera navigation and high-resolution still frame extraction for keyframe art.',
    gallery: [
      'https://i.ibb.co/x8szFNJL/Chat-GPT-Image-Sep-16-2026-11-26-26-PM.png',
      'https://i.ibb.co/nMjZD2kk/Screenshot-2026-05-01-220655.png'
    ]
  },
  {
    id: '3d-mecha-frame',
    number: '07',
    title: '3D CYBER MECHA FRAME',
    category: '3D',
    categoryDisplay: '3D Hard-Surface / Mechanical Concept',
    year: '2025',
    description: 'Complex hard-surface cybernetic mecha study exploring mechanical articulation, hydraulic joints, procedural carbon fiber & anodized titanium shaders, and cinematic macro depth-of-field passes.',
    role: '3D Hard-Surface Artist & LookDev',
    clientOrContext: 'Sci-Fi Concept & Mechanical Asset R&D',
    software: ['Blender 4.2', 'Substance Painter', 'ZBrush', 'Cycles'],
    thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1600&auto=format&fit=crop',
    aspectRatio: 'wide',
    featured: true,
    creativeProcess: [
      'Drafted 2D structural schematics before roughing primary polygonal silhouette blocks in Blender.',
      'Engineered articulated ball-joint pivots and hydraulic pistons with realistic mechanical clearance.',
      'Baked 8K normal and ambient occlusion maps; layered micro-scratches and edge-wear in Substance 3D Painter.'
    ],
    beforeAfter: {
      labelBefore: 'Clay Topology Pass',
      labelAfter: 'Final PBR Lit Render',
      imageBefore: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1200&auto=format&fit=crop',
      imageAfter: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
      description: 'Subdivision surface geometry inspection transitioning to multi-light raytraced metallic composition.'
    },
    finalResultText: 'Complete production-ready 3D mechanical asset with 4K texture sets, turnkey rigging, and cinematic turntable presentation.',
    gallery: [
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=1200&auto=format&fit=crop'
    ]
  },
  {
    id: '3d-procedural-monolith',
    number: '08',
    title: '3D PROCEDURAL SCULPTURE',
    category: '3D',
    categoryDisplay: '3D Generative Simulation & Lighting',
    year: '2025',
    description: 'Mathematical kinetic crystal sculpture built entirely through procedural geometry nodes, glass dispersion caustics, and volumetric light shafts rendered in Blender Cycles.',
    role: 'Technical 3D & Shader Artist',
    clientOrContext: 'Generative Art & Experimental LookDev',
    software: ['Blender 4.2', 'Geometry Nodes', 'Cycles', 'After Effects'],
    thumbnail: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1200&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1600&auto=format&fit=crop',
    aspectRatio: 'square',
    featured: true,
    creativeProcess: [
      'Constructed procedural vector fields to drive fractal surface displacement in real-time.',
      'Implemented spectral Cauchy dispersion shader reproducing authentic glass prism chromatic aberration.',
      'Animated camera orbital trajectory with custom focal blur mimicking a 50mm anamorphic prime lens.'
    ],
    beforeAfter: {
      labelBefore: 'Node Wireframe Matrix',
      labelAfter: 'Refractive Glass Caustics',
      imageBefore: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
      imageAfter: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1200&auto=format&fit=crop',
      description: 'Mathematical node network generating dynamic surface tessellation and spectral light dispersion.'
    },
    finalResultText: 'Looping procedural 3D sculpture showcasing advanced node workflows and physically based optical simulation.',
    gallery: [
      'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop'
    ]
  },
  {
    id: '3d-automotive-concept',
    number: '09',
    title: '3D AUTOMOTIVE STUDIO',
    category: '3D',
    categoryDisplay: '3D Automotive / Studio Raytracing',
    year: '2024',
    description: 'Sleek hypercar prototype visualization featuring carbon-fiber bodywork, physically accurate tire compound textures, and dark moody studio light reflection strips with ultra-crisp specular falloff.',
    role: '3D Automotive Modeler & Lighting Artist',
    clientOrContext: 'Automotive Design & Studio Lighting Study',
    software: ['Blender', 'Unreal Engine 5', 'Photoshop', 'DaVinci Resolve'],
    thumbnail: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=1200&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=1600&auto=format&fit=crop',
    aspectRatio: 'tall',
    creativeProcess: [
      'Mapped class-A aerodynamic surfaces ensuring uninterrupted reflection lines and zero pinch points.',
      'Configured custom studio softbox rigs with falloff gradients to sculpt body creases with precision.',
      'Designed clearcoat lacquer shaders with dual-layer normal maps for authentic orange-peel depth.'
    ],
    beforeAfter: {
      labelBefore: 'SubD Clay Topology',
      labelAfter: 'Studio Light Softbox Finish',
      imageBefore: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
      imageAfter: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=1200&auto=format&fit=crop',
      description: 'Curvature flow inspection confirming clean highlight reflections across aerodynamic panels.'
    },
    finalResultText: 'An editorial automotive series demonstrating precision studio lighting, high-gloss material science, and commercial render quality.',
    gallery: [
      'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop'
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
  },
  {
    id: 'short-ad-film-lumina',
    number: '10',
    title: 'SHORT AD FILM // FEVICOL MATRIMONY',
    category: 'SHORT AD FILM',
    categoryDisplay: 'Short Ad Film / Fevicol Matrimony TVC',
    year: '2025',
    description: 'Iconic, culturally resonant comedic commercial spot for Fevicol Matrimony, crafted with precision comedic timing, seamless editorial rhythm, dynamic audio mixing, and unforgettable visual storytelling.',
    role: 'Commercial Film Editor & Sound Designer',
    clientOrContext: 'Fevicol Matrimony Commercial Broadcast & Digital Campaign',
    software: ['Premiere Pro', 'DaVinci Resolve', 'Logic Pro', 'Audition'],
    thumbnail: 'https://cdn.jumpshare.com/preview/5zK6f_026DMjEXmVEh6lnFwdfPGvhy9uzJv3bynjX-KTCyWEJY6a5UHdpFwu-tnZg4I9jLgToZPqQgOoj-MErKmkjW0SmAQBilOGFV8AKEU',
    heroImage: 'https://cdn.jumpshare.com/preview/5zK6f_026DMjEXmVEh6lnFwdfPGvhy9uzJv3bynjX-KTCyWEJY6a5UHdpFwu-tnZg4I9jLgToZPqQgOoj-MErKmkjW0SmAQBilOGFV8AKEU',
    videoUrl: 'https://cdn.jumpshare.com/preview/JdAHGJn1Rjzh88X44h_7xLUFW4CcPtg1RoZRrOLHqhVIBXN9NcZ6VLN0JVA9HBLi1YUr8RM0srv1S8ZPaLb41JuZRTL0DnifoHfOG-h_t4uTRh6ItsRHy1rNBUrOBb5BQtkEVLt8vPsSAXmho7zmOm6yjbN-I2pg_cnoHs_AmgI.mp4',
    externalUrl: 'https://jumpshare.com/s/mjBoqoA6OHYKkuMvRXTb',
    externalUrlLabel: 'WATCH ON JUMPSHARE',
    aspectRatio: 'wide',
    featured: true,
    creativeProcess: [
      'Engineered comedic pauses and rhythmic beat timing to land every dialogue punchline with maximum audience impact.',
      'Sculpted organic Foley sound design and nuanced acoustic atmospheres to elevate authentic cultural realism.',
      'Conducted a DaVinci Resolve broadcast color pass preserving rich Indian festive attire hues and balanced skin tones.'
    ],
    beforeAfter: {
      labelBefore: 'Raw Studio Assembly',
      labelAfter: 'Final Master Commercial Grade',
      imageBefore: 'https://images.unsplash.com/photo-1518173946687-a4c8a383392e?q=80&w=1200&auto=format&fit=crop',
      imageAfter: 'https://cdn.jumpshare.com/preview/5zK6f_026DMjEXmVEh6lnFwdfPGvhy9uzJv3bynjX-KTCyWEJY6a5UHdpFwu-tnZg4I9jLgToZPqQgOoj-MErKmkjW0SmAQBilOGFV8AKEU',
      description: 'Broadcast commercial color grade with rich film contrast, warm highlight roll-off, and vibrant costume separation.'
    },
    finalResultText: 'A high-impact, award-winning comedic ad film that drives instantaneous brand recall across national broadcast and digital streaming.',
    gallery: [
      'https://cdn.jumpshare.com/preview/5zK6f_026DMjEXmVEh6lnFwdfPGvhy9uzJv3bynjX-KTCyWEJY6a5UHdpFwu-tnZg4I9jLgToZPqQgOoj-MErKmkjW0SmAQBilOGFV8AKEU',
      'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?q=80&w=1200&auto=format&fit=crop'
    ]
  },
  {
    id: 'short-ad-film-pulse',
    number: '11',
    title: 'RADIO SHOW // LIVE BROADCAST & AUDIO PRODUCTION',
    category: 'SHORT AD FILM',
    categoryDisplay: 'Radio Show / Audio & Live Visual Broadcast',
    year: '2025',
    description: 'Dynamic, high-energy live radio show broadcast featuring precision audio mixing, host vocal processing, rhythmic stingers, commercial station sound design, and live-streamed video capture.',
    role: 'Lead Sound Designer, Broadcast Audio Engineer & Video Editor',
    clientOrContext: 'Radio Show Live Broadcast & Production',
    software: ['Pro Tools', 'Adobe Audition', 'DaVinci Resolve', 'Premiere Pro'],
    thumbnail: '/videos/ay6khcyf_thumb.jpg',
    heroImage: '/videos/ay6khcyf_poster.jpg',
    videoUrl: '/videos/ay6khcyf_video.mp4',
    externalUrl: 'https://jumpshare.com/s/Ay6kHCYfGP2s3hW06wJQ',
    externalUrlLabel: 'WATCH ON JUMPSHARE',
    aspectRatio: 'portrait',
    featured: true,
    creativeProcess: [
      'Mastered real-time radio broadcast loudness and dynamic multiband compression for broadcast vocal clarity.',
      'Designed custom station sound IDs, sonic sweepers, and seamless segue transitions between segments.',
      'Edited and color-graded vertical video footage for digital multi-platform distribution and station reels.'
    ],
    beforeAfter: {
      labelBefore: 'Raw Studio Mic Feeds',
      labelAfter: 'Broadcast Master Radio Mix',
      imageBefore: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1200&auto=format&fit=crop',
      imageAfter: '/videos/ay6khcyf_poster.jpg',
      description: 'Dynamic range control, station acoustic room treatment, vocal de-essing, and broadcast color grade.'
    },
    finalResultText: 'Delivered a signature radio broadcast production with pristine audio clarity, energetic flow, and high-impact visual promotion.',
    gallery: [
      '/videos/ay6khcyf_poster.jpg',
      '/videos/ay6khcyf_thumb.jpg'
    ]
  },
  {
    id: 'short-ad-film-kinetic',
    number: '12',
    title: 'SHORT AD FILM // KINETIC ENERGY SPOT',
    category: 'SHORT AD FILM',
    categoryDisplay: 'Short Ad Film / Beverage Commercial',
    year: '2024',
    description: 'High-energy 15-second digital ad crafted for rapid audience retention, featuring ice-droplet macro slow motion, dynamic speed ramping, neon kinetic typography, and sub-bass drop impact.',
    role: 'Commercial Video Editor & Colorist',
    clientOrContext: 'Kinetic Fuel Zero-Sugar Energy Commercial',
    software: ['Premiere Pro', 'DaVinci Resolve', 'Logic Pro', 'Audition'],
    thumbnail: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=1200&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=1600&auto=format&fit=crop',
    videoUrl: 'https://cdn.jumpshare.com/preview/vw64keW9QzxrsAm74YyQs_Dthi5alxYlZnuvPy3tAEq_LRC3taoj7CFbgo0TT8e7HRm7REAjDOWkANdLVaXv2DS7jRJUAAIR48_-gQIBfyYGDPk1EGnE7-h4JX7jDLp9Jg6PfL_cIPtxNMFz_CBQaW6yjbN-I2pg_cnoHs_AmgI.mp4',
    aspectRatio: 'tall',
    creativeProcess: [
      'Crafted a high-retention 15-second storyboard maximizing immediate can crack Foley and sparkling carbonation.',
      'Speed ramped phantom 1000fps ice pour shots with rhythmic whip-pan camera transitions.',
      'Color graded vibrant citrus yellows and electric limes with saturated punch and clean whites.'
    ],
    beforeAfter: {
      labelBefore: 'Raw Flat B-Roll Plate',
      labelAfter: 'Final Dynamic Commercial Master',
      imageBefore: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
      imageAfter: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=1200&auto=format&fit=crop',
      description: 'Raw high-speed plate transformed into an electrifying, thirst-inducing beverage commercial.'
    },
    finalResultText: 'Commercial cut that drove a 2.8x increase in average watch completion rate across all major digital platforms.',
    gallery: [
      'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1546548970-71785318a17b?q=80&w=1200&auto=format&fit=crop'
    ]
  },
  {
    id: 'graphic-character-concept',
    number: '13',
    title: 'CHARACTER DESIGN // CYBER RONIN',
    category: 'GRAPHIC DESIGN',
    categoryDisplay: 'Graphic Design / Character Concept',
    year: '2025',
    description: 'Production character concept art and visual development sheet showcasing silhouette design, orthographic turnarounds, costume layer callouts, and expressive mood portraits.',
    role: 'Lead Character Concept Artist & Illustrator',
    clientOrContext: 'Animated Series Visual Development & Concept Art',
    software: ['Photoshop', 'Procreate', 'Illustrator'],
    thumbnail: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1200&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1600&auto=format&fit=crop',
    aspectRatio: 'tall',
    featured: true,
    creativeProcess: [
      'Executed 30+ miniature thumbnail silhouette iterations searching for an imposing yet agile warrior posture.',
      'Constructed detailed front, three-quarter, and back orthographic model sheets for animator hand-off.',
      'Specified technical costume layers, fabric weaving patterns, and modular cybernetic limbs with color callouts.'
    ],
    beforeAfter: {
      labelBefore: 'Raw Gestural Line Art',
      labelAfter: 'Final Painted Concept Sheet',
      imageBefore: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1200&auto=format&fit=crop',
      imageAfter: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1200&auto=format&fit=crop',
      description: 'Progressive refinement from expressive charcoal gesture sketching to full digital rendering with rim lighting.'
    },
    finalResultText: 'Comprehensive visual development package approved for animation production and teaser marketing assets.',
    gallery: [
      'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=1200&auto=format&fit=crop'
    ]
  },
  {
    id: 'graphic-product-packaging',
    number: '14',
    title: 'PRODUCT DESIGN // AURA BOTANICALS',
    category: 'GRAPHIC DESIGN',
    categoryDisplay: 'Graphic Design / Product & Packaging',
    year: '2024',
    description: 'Holistic product design and packaging system for an organic skincare line, featuring Swiss grid label typography, matte foil stamped boxes, and tactile amber glass vessels.',
    role: 'Packaging Graphic Designer & Identity Stylist',
    clientOrContext: 'Direct-to-Consumer Botanical Skincare Brand',
    software: ['Illustrator', 'Photoshop', 'Dimension', 'InDesign'],
    thumbnail: '/images/product_rohan_poster.jpg',
    heroImage: '/images/product_rohan_poster.jpg',
    videoUrl: '/videos/product_rohan.mp4',
    externalUrl: 'https://savedly.net/f/awhqe998',
    externalUrlLabel: 'SAVEDLY SOURCE',
    aspectRatio: 'tall',
    featured: true,
    creativeProcess: [
      'Established a minimalist Swiss typographic system balancing high-contrast serif headers with micro-grotesque ingredients.',
      'Engineered pre-press die-line schematics with custom embossed seal lines and zero-waste folding flaps.',
      'Created photo-realistic 3D staging renders for e-commerce launch catalogs and social advertisement banners.'
    ],
    beforeAfter: {
      labelBefore: 'Flat Technical Die-Line',
      labelAfter: 'Finished Product Package',
      imageBefore: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop',
      imageAfter: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&auto=format&fit=crop',
      description: 'Precision alignment between 2D vector die-cut measurements and tangible 3D shelf presence.'
    },
    finalResultText: 'Packaging design that achieved national retail shelf placement and a 40% uptick in customer unboxing shares.',
    gallery: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop'
    ]
  },
  {
    id: 'graphic-props-schematics',
    number: '15',
    title: 'PROPS DESIGN // RECON GEAR RIG',
    category: 'GRAPHIC DESIGN',
    categoryDisplay: 'Graphic Design / Props & Equipment',
    year: '2025',
    description: 'Technical production prop design sheets detailing high-tech recon headsets, cybernetic wrist comms, field utility modules, and exploded hardware component diagrams.',
    role: 'Concept Prop Designer & Schematic Illustrator',
    clientOrContext: 'Sci-Fi Video Game Entertainment Asset Bible',
    software: ['Illustrator', 'Photoshop', 'AutoCAD Principles'],
    thumbnail: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1600&auto=format&fit=crop',
    aspectRatio: 'wide',
    creativeProcess: [
      'Researched aerospace cockpit instrumentation, military field optics, and utilitarian tool ergonomics.',
      'Drafted isometric exploded views pinpointing component materials: matte polymer, CNC aluminum, and rubber seals.',
      'Designed vector HUD status icons, serial number stencil graphics, and hazard indicator badges.'
    ],
    beforeAfter: {
      labelBefore: 'Wireframe Vector Blueprint',
      labelAfter: 'Textured Production Prop Sheet',
      imageBefore: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
      imageAfter: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop',
      description: 'Technical schematic drafting translated into fully rendered industrial asset sheets for 3D modelers.'
    },
    finalResultText: 'Hero prop asset approved as the primary field equipment model for AAA game production pipeline.',
    gallery: [
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=1200&auto=format&fit=crop'
    ]
  },
  {
    id: 'graphic-editorial-posters',
    number: '16',
    title: 'EDITORIAL DESIGN // BRUTALIST POSTERS',
    category: 'GRAPHIC DESIGN',
    categoryDisplay: 'Graphic Design / Editorial & Typography',
    year: '2024',
    description: 'Brutalist print poster series exploring experimental typographic contrast, risograph halftone textures, asymmetric grid divisions, and high-impact chromatic color palettes.',
    role: 'Art Director & Editorial Typographer',
    clientOrContext: 'Contemporary Art Institute Exhibition Catalog & Street Posters',
    software: ['InDesign', 'Photoshop', 'Illustrator'],
    thumbnail: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=1200&auto=format&fit=crop',
    heroImage: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=1600&auto=format&fit=crop',
    aspectRatio: 'tall',
    creativeProcess: [
      'Composed high-density type hierarchies breaking and rebuilding classical Swiss typographic grid rules.',
      'Generated custom screen-print halftone screens and ink bleed passes in Photoshop for tactile warmth.',
      'Selected heavy archival cotton paper stock formulations with metallic Pantone spot inks.'
    ],
    beforeAfter: {
      labelBefore: 'Monochrome Grid Draft',
      labelAfter: 'Risograph Screenprint Edition',
      imageBefore: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
      imageAfter: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=1200&auto=format&fit=crop',
      description: 'Abstract editorial layout elevated through textured CMYK offset plates and heavy paper stock.'
    },
    finalResultText: 'Exhibition poster series printed in a limited run of 500 numbered copies and archived in design publications.',
    gallery: [
      'https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=1200&auto=format&fit=crop'
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'short-ad-film',
    number: '01',
    title: 'SHORT AD FILM',
    tagline: 'High-impact commercial spots, brand ad films, rapid visual hooks & broadcast TVC mastering.',
    tools: ['Premiere Pro', 'DaVinci Resolve', 'After Effects', 'Logic Pro'],
    competencies: ['Commercial Narrative Assembly', 'High-Retention Hook Pacing', 'Commercial Color Science', 'Dynamic Sound Design', 'Multi-Aspect Delivery (16:9 / 9:16)']
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

export const ANIMATION_2D_GALLERY: AnimationWorkItem[] = [
  {
    id: 'anim-2d-01',
    title: 'Character Walk & Fluid Motion Loop',
    type: 'video',
    mediaUrl: 'https://cdn.jumpshare.com/preview/vw64keW9QzxrsAm74YyQs_Dthi5alxYlZnuvPy3tAEq_LRC3taoj7CFbgo0TT8e7HRm7REAjDOWkANdLVaXv2DS7jRJUAAIR48_-gQIBfyYGDPk1EGnE7-h4JX7jDLp9Jg6PfL_cIPtxNMFz_CBQaW6yjbN-I2pg_cnoHs_AmgI.mp4',
    poster: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop',
    tag: 'Character Rigging',
    aspect: 'portrait',
    description: 'Frame-by-frame stylized 2D character cycle with secondary cloth simulation, expressive bounce easing, and hand-drawn line textures.',
    software: ['After Effects', 'Illustrator', 'RoughAnimator'],
    duration: '0:15'
  },
  {
    id: 'anim-2d-02',
    title: 'Cyberpunk Neon Street Keyframe & Concept Plate',
    type: 'photo',
    mediaUrl: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=1200&auto=format&fit=crop',
    tag: 'Background Art',
    aspect: 'landscape',
    description: 'Digital 2D layout illustration and environmental atmosphere plate painted for a dystopian neon anime short series.',
    software: ['Photoshop', 'Procreate'],
    duration: 'Still Artwork'
  },
  {
    id: 'anim-2d-03',
    title: 'Dynamic Kinetic Action & Impact Frame Blast',
    type: 'video',
    mediaUrl: '/assets/diorama_render.mp4',
    poster: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=1200&auto=format&fit=crop',
    tag: 'Action FX',
    aspect: 'square',
    description: 'High-speed 2D impact sequence featuring smearing lines, anime lightning sparks, smoke puff deformation, and camera shake punch.',
    software: ['After Effects', 'Photoshop', 'Clip Studio Paint'],
    duration: '0:10'
  },
  {
    id: 'anim-2d-04',
    title: 'Expressive Character Facial Morph & Emotion Transitions',
    type: 'photo',
    mediaUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1200&auto=format&fit=crop',
    tag: 'Model Sheet',
    aspect: 'landscape',
    description: 'Full 2D character model turnaround with 8-angle facial expression studies, eye shape phonemes, and silhouette turnaround sheet.',
    software: ['Illustrator', 'Clip Studio Paint'],
    duration: 'Character Sheet'
  },
  {
    id: 'anim-2d-05',
    title: 'Morphing Shape Geometry & Kinetic Transition Sequence',
    type: 'video',
    mediaUrl: 'https://cdn.jumpshare.com/preview/JdAHGJn1Rjzh88X44h_7xLUFW4CcPtg1RoZRrOLHqhVIBXN9NcZ6VLN0JVA9HBLi1YUr8RM0srv1S8ZPaLb41JuZRTL0DnifoHfOG-h_t4uTRh6ItsRHy1rNBUrOBb5BQtkEVLt8vPsSAXmho7zmOm6yjbN-I2pg_cnoHs_AmgI.mp4',
    poster: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=1200&auto=format&fit=crop',
    tag: 'Motion Graphics',
    aspect: 'landscape',
    description: 'Hypnotic geometric 2D vector morphing experiment combining strict mathematical spacing, elastic easing, and color theory palettes.',
    software: ['After Effects', 'Illustrator'],
    duration: '0:20'
  },
  {
    id: 'anim-2d-06',
    title: 'Atmospheric Isometric Cityscape & Cel-Shaded Storyboard',
    type: 'photo',
    mediaUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
    tag: 'Isometric Art',
    aspect: 'landscape',
    description: 'Isometric retro-futuristic city block blueprint featuring layered parallax buildings, color-blocked rooftop lighting, and signage.',
    software: ['Illustrator', 'Photoshop'],
    duration: 'Production Art'
  },
  {
    id: 'anim-2d-07',
    title: 'Fluid Organic Liquid Splashes & Smoke Physics Loop',
    type: 'video',
    mediaUrl: '/videos/ay6khcyf_video.mp4',
    poster: '/videos/ay6khcyf_poster.jpg',
    tag: 'Liquid Physics',
    aspect: 'portrait',
    description: 'Tradition-inspired cel animation study on liquid surface tension, teardrop droplet splash dynamics, and viscous fluid gravity.',
    software: ['TVPaint', 'After Effects'],
    duration: '0:12'
  },
  {
    id: 'anim-2d-08',
    title: 'Mecha Cockpit HUD & 2D Vector UI Overlay Sequence',
    type: 'photo',
    mediaUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    tag: 'FUI / HUD',
    aspect: 'landscape',
    description: 'Futuristic vector heads-up display graphics, targeting reticles, radar telemetry sweeps, and warning iconography for animation overlay.',
    software: ['Illustrator', 'After Effects'],
    duration: 'Vector HUD'
  },
  {
    id: 'anim-2d-09',
    title: 'Explosive Combat Sakuga Action Reel Cut',
    type: 'video',
    mediaUrl: 'https://cdn.jumpshare.com/preview/vw64keW9QzxrsAm74YyQs_Dthi5alxYlZnuvPy3tAEq_LRC3taoj7CFbgo0TT8e7HRm7REAjDOWkANdLVaXv2DS7jRJUAAIR48_-gQIBfyYGDPk1EGnE7-h4JX7jDLp9Jg6PfL_cIPtxNMFz_CBQaW6yjbN-I2pg_cnoHs_AmgI.mp4',
    poster: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=1200&auto=format&fit=crop',
    tag: 'Sakuga Reel',
    aspect: 'portrait',
    description: 'High-octane sakuga anime cut featuring sword slashes, smear arcs, camera perspective warping, and high frame-rate particle explosions.',
    software: ['Clip Studio Paint', 'Premiere Pro'],
    duration: '0:15'
  },
  {
    id: 'anim-2d-10',
    title: 'Fantasy Hero Visual Development & Color Keyframes',
    type: 'photo',
    mediaUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1200&auto=format&fit=crop',
    tag: 'Color Script',
    aspect: 'landscape',
    description: 'Color script and lighting moodboard for animated sequence transitioning from dawn golden hour to storm moonlight.',
    software: ['Photoshop', 'Procreate'],
    duration: 'Lighting Key'
  },
  {
    id: 'anim-2d-11',
    title: 'Retro Arcade Pixel & Cel Fusion Loop',
    type: 'video',
    mediaUrl: '/assets/diorama_render.mp4',
    poster: '/assets/diorama_poster.jpg',
    tag: 'Experimental',
    aspect: 'square',
    description: 'Charming blend of hand-drawn 2D vector animation with vintage CRT scanline distortion and 16-bit color dithering.',
    software: ['After Effects', 'Aseprite'],
    duration: '0:08'
  },
  {
    id: 'anim-2d-12',
    title: 'Mechanical Props & Weapon Turnaround Blueprints',
    type: 'photo',
    mediaUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop',
    tag: 'Prop Turnaround',
    aspect: 'landscape',
    description: 'Detailed animation prop schematics detailing mechanical breakaways, reload mechanisms, and energy core glow channels.',
    software: ['Illustrator', 'Photoshop'],
    duration: 'Prop Sheet'
  }
];

