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
    thumbnail: '/images/food_poster_design_poster.jpg',
    heroImage: '/images/food_poster_design_poster.jpg',
    videoUrl: '/videos/food_poster_design.mp4',
    externalUrl: 'https://savedly.net/f/2tg8mu6m',
    externalUrlLabel: 'SAVEDLY REEL',
    aspectRatio: 'tall',
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
      imageAfter: '/images/food_poster_design_poster.jpg',
      description: 'Progressive transformation from gestural thumbnailing to print-ready vector layout with tactile screenprint textures.'
    },
    finalResultText: 'A unified graphic design body of work covering character concept sheets, retail product packaging, and production-ready entertainment prop sheets.',
    gallery: [
      '/images/food_poster_design_poster.jpg',
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
      }
    ]
  },
  {
    id: 'vfx-experiment',
    number: '03',
    title: 'VFX COMPOSITING // NUKE ROTO & TRACKING',
    category: 'VFX',
    categoryDisplay: 'VFX / Nuke Compositing, Roto & Planar Tracking',
    year: '2025',
    description: 'Professional node-based visual effects compositing in The Foundry Nuke. Planar motion tracking, FrameHold clean plates, multi-layer rotoscoping, edge blur feathering, and grain-matched write outputs.',
    role: 'Nuke Compositor, Roto & Planar Tracking Artist',
    clientOrContext: 'VFX Production Pipeline & Feature Compositing Reel',
    software: ['Nuke', 'Mocha Pro', 'After Effects', 'Silhouette', 'Premiere Pro'],
    thumbnail: '/images/nuke_vfx_compositing_poster.jpg',
    heroImage: '/images/nuke_vfx_compositing_poster.jpg',
    videoUrl: '/videos/nuke_vfx_compositing.mp4',
    externalUrl: 'https://savedly.net/f/umye7g83',
    externalUrlLabel: 'WATCH SAVEDLY REEL',
    aspectRatio: 'wide',
    featured: true,
    creativeProcess: [
      'Constructed a multi-branch node graph in Nuke with dual FrameHold clean plates and planar tracker coordinates.',
      'Executed precision multi-layer rotoscoping and edge blur passes with custom alpha masks for seamless integration.',
      'Assembled multi-merge composites with realistic motion blur, grain synthesis, and high-bitrate write outputs.'
    ],
    beforeAfter: {
      labelBefore: 'Nuke Node Graph & Roto/Track Pipes',
      labelAfter: 'Final Composited Master',
      imageBefore: '/images/nuke_node_graph.png',
      imageAfter: '/images/nuke_vfx_compositing_poster.jpg',
      description: 'The Foundry Nuke node network connecting FrameHold clean plates, RotoPaint channels, Tracker transforms, and final output writes.'
    },
    finalResultText: 'Industry-standard VFX compositing shot featuring seamless roto, clean plate patching, robust planar tracking, and photorealistic optical integration.',
    gallery: [
      '/images/nuke_vfx_compositing_poster.jpg',
      '/images/nuke_node_graph.png',
      '/images/nuke_vfx_compositing_frame14.jpg'
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
    id: '3d-character-modeling',
    number: '05',
    title: '3D CHARACTER MODELING',
    category: '3D',
    categoryDisplay: '3D Character / Topology & Turntable',
    year: '2025',
    description: 'Stylized 3D character modeling study featuring clean subdivision surface quad topology, anatomical edge loops, deformation-ready joint geometry, and a 360-degree turntable viewport presentation.',
    role: '3D Character Modeler & Topology Artist',
    clientOrContext: 'Character Concept & 3D Modeling Study',
    software: ['Blender 4.2', 'ZBrush', 'Substance 3D Painter', 'Cycles'],
    thumbnail: '/images/3d_character_modeling_poster.jpg',
    heroImage: '/images/3d_character_modeling_poster.jpg',
    videoUrl: '/videos/3d_character_modeling.mp4',
    externalUrl: 'https://savedly.net/f/y86c6cz9',
    externalUrlLabel: 'WATCH SAVEDLY VIDEO',
    aspectRatio: 'wide',
    featured: true,
    creativeProcess: [
      'Sculpted base character proportions, gestural anatomy silhouettes, and head planes in Blender and ZBrush.',
      'Retopologized clean full-body quad topology with circular edge loops around joints and facial features for deformation readiness.',
      'Captured high-bitrate 360-degree viewport turntable presentation verifying silhouette stability, edge flow, and lighting response.'
    ],
    beforeAfter: {
      labelBefore: 'Topology & Wireframe Pass',
      labelAfter: '360° Turntable Render',
      imageBefore: '/images/3d_character_wireframe_before.jpg',
      imageAfter: '/images/3d_character_modeling_poster.jpg',
      description: 'Subdivision surface quad topology inspection transitioning to full 360-degree viewport character turnaround render.'
    },
    finalResultText: 'Complete production-ready 3D character model featuring clean quad topology, anatomical proportions, and 360-degree turntable presentation.',
    gallery: [
      '/images/3d_character_modeling_poster.jpg',
      '/images/3d_character_wireframe_before.jpg',
      '/images/3d_character_modeling_frame6.jpg',
      '/images/3d_character_modeling_frame10.jpg'
    ]
  },
  {
    id: '3d-procedural-monolith',
    number: '06',
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
    number: '07',
    title: '3D JEEP MODEL // OFF-ROAD RIG',
    category: '3D',
    categoryDisplay: '3D Hard-Surface / Jeep 4x4 Model',
    year: '2024',
    description: 'High-poly 3D Jeep off-road vehicle modeling study featuring complex quad topology, heavy-duty suspension mechanics, beadlock wheels, and real-time viewport lookdev turntable.',
    role: '3D Vehicle Modeler & Rigging Artist',
    clientOrContext: 'Off-Road Automotive & Hard-Surface 3D Study',
    software: ['Blender', 'Maya', 'Substance 3D Painter', 'Unreal Engine 5'],
    thumbnail: '/images/jeep_3d_model_poster.jpg',
    heroImage: '/images/jeep_3d_model_poster.jpg',
    videoUrl: '/videos/jeep_3d_model.mp4',
    aspectRatio: 'wide',
    externalUrl: 'https://savedly.net/f/y2dkzsgc',
    externalUrlLabel: 'WATCH SAVEDLY VIDEO',
    creativeProcess: [
      'Constructed clean SubD quad mesh topology for the Jeep body panels, roll cage, hood latches, and front grille.',
      'Accurately modeled mechanical chassis components including heavy-duty live axles, coilover shocks, and deep-tread off-road tires.',
      'Captured real-time viewport turntable presentation showcasing edge flow, wireframe bevels, and material lookdev.'
    ],
    beforeAfter: {
      labelBefore: 'SubD Wireframe Topology',
      labelAfter: 'Lookdev Turntable Render',
      imageBefore: '/images/jeep_3d_model_poster.jpg',
      imageAfter: '/images/jeep_3d_model_poster.jpg',
      description: 'Curvature flow and topology inspection demonstrating clean reflection lines and zero pinching across vehicle panels.'
    },
    finalResultText: 'A detailed hard-surface 3D vehicle project highlighting structural realism, precision edge bevels, and turntable viewport presentation.',
    gallery: [
      '/images/jeep_3d_model_poster.jpg',
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1200&auto=format&fit=crop'
    ]
  },
  {
    id: 'digital-experience',
    number: '08',
    title: 'DIGITAL EXPERIENCE // UI/UX DESIGN & WEB SUITE',
    category: 'WEB',
    categoryDisplay: 'UI/UX / Web Design & Interactive Prototype',
    year: '2025',
    description: 'Immersive interactive visual web experience combining brutalist micro-interactions, responsive grid fluidity, and dark editorial aesthetic for digital creators. Includes recorded user flows and design systems.',
    role: 'UI/UX & Creative Frontend Designer',
    clientOrContext: 'Creative Studio Web Presence & Interactive Architecture',
    software: ['Figma', 'React', 'Tailwind CSS', 'Motion'],
    thumbnail: '/images/web-experience/ui_screen_08_full_page.png',
    heroImage: '/images/web-experience/ui_screen_03_desktop_view.png',
    videoUrl: '/videos/web_interaction_recording_01.mp4',
    externalUrl: 'https://savedly.net/f/js22tabz',
    externalUrlLabel: 'WATCH WEB RECORDING',
    aspectRatio: 'wide',
    featured: true,
    creativeProcess: [
      'Conducted user flow mapping focusing on discovery of visual showreel clips and rapid interactive filtering.',
      'Designed a high-contrast black/off-white color system with cinematic warm orange accents and crisp typography.',
      'Recorded real-time interactive screen recordings validating 60fps responsive fluidity across viewport sizes.'
    ],
    beforeAfter: {
      labelBefore: 'Wireframe & Flow Mapping',
      labelAfter: 'Full Interactive Web Layout',
      imageBefore: '/images/web-experience/ui_screen_04_flow.png',
      imageAfter: '/images/web-experience/ui_screen_08_full_page.png',
      description: 'Progression from component state layouts to complete live responsive interface.'
    },
    finalResultText: 'A high-performance responsive interface built to showcase high-bitrate media smoothly across all mobile and desktop viewports.',
    gallery: [
      '/images/web-experience/ui_screen_08_full_page.png',
      '/images/web-experience/ui_screen_03_desktop_view.png',
      '/images/web-experience/ui_screen_01_dashboard.png',
      '/images/web-experience/ui_screen_02_landing.png',
      '/images/web-experience/ui_screen_04_flow.png',
      '/images/web-experience/ui_screen_05_interaction.png',
      '/images/web-experience/ui_screen_06_components.png',
      '/images/web-experience/ui_screen_07_layout.png'
    ]
  },
  {
    id: 'short-ad-film-lumina',
    number: '09',
    title: 'SHORT AD FILM // FEVICOL MATRIMONY',
    category: 'SHORT AD FILM',
    categoryDisplay: 'Short Ad Film / Fevicol Matrimony TVC',
    year: '2025',
    description: 'Iconic, culturally resonant comedic commercial spot for Fevicol Matrimony, crafted with precision comedic timing, seamless editorial rhythm, dynamic audio mixing, and unforgettable visual storytelling.',
    role: 'Commercial Film Editor & Sound Designer',
    clientOrContext: 'Fevicol Matrimony Commercial Broadcast & Digital Campaign',
    software: ['Premiere Pro', 'DaVinci Resolve', 'Logic Pro', 'Audition'],
    thumbnail: '/videos/fevicol_matrimony_thumb.jpg',
    heroImage: '/videos/fevicol_matrimony_poster.jpg',
    videoUrl: '/videos/fevicol_matrimony.mp4',
    externalUrl: 'https://savedly.net/f/thuvzfwu',
    externalUrlLabel: 'WATCH ON SAVEDLY',
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
      imageAfter: '/videos/fevicol_matrimony_poster.jpg',
      description: 'Broadcast commercial color grade with rich film contrast, warm highlight roll-off, and vibrant costume separation.'
    },
    finalResultText: 'A high-impact, award-winning comedic ad film that drives instantaneous brand recall across national broadcast and digital streaming.',
    gallery: [
      '/videos/fevicol_matrimony_poster.jpg',
      '/videos/fevicol_matrimony_thumb.jpg'
    ]
  },
  {
    id: 'short-ad-film-pulse',
    number: '10',
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
    number: '11',
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
    id: 'graphic-product-packaging',
    number: '12',
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
    number: '13',
    title: '@DIETCOKE X CHRISTMAS 🌲',
    category: 'GRAPHIC DESIGN',
    categoryDisplay: 'Graphic Design / Holiday Visuals',
    year: '2025',
    description: 'tried making visuals for diet coke in the christmas theme for this season :) #dietcoke #explore #fyp #graphic #christmas explorepage fypシ cokepaglu',
    role: 'Visual & Motion Graphic Designer',
    clientOrContext: '@dietcoke X Christmas Seasonal Exploration',
    software: ['Photoshop', 'After Effects', 'Illustrator', 'Premiere Pro'],
    thumbnail: '/images/dietcoke_christmas_poster.jpg',
    heroImage: '/images/dietcoke_christmas_poster.jpg',
    videoUrl: '/videos/dietcoke_christmas.mp4',
    externalUrl: 'https://savedly.net/f/qh3puax8',
    aspectRatio: 'tall',
    creativeProcess: [
      'Visual development exploring Diet Coke branding reimagined with frosty pine needles, iced condensation, and holiday lighting.',
      'Composed vertical 9:16 social reel format with dynamic camera motion, rhythmic cuts, and atmospheric holiday soundtrack.',
      'Crafted typography and seasonal iconography optimized for Instagram explore feed engagement.'
    ],
    beforeAfter: {
      labelBefore: 'Raw Can Mockup',
      labelAfter: 'Final Christmas Visual',
      imageBefore: '/images/dietcoke_christmas_frame4.jpg',
      imageAfter: '/images/dietcoke_christmas_poster.jpg',
      description: 'Holiday visual styling transforming commercial packshot into a cinematic winter celebration.'
    },
    finalResultText: 'High-engagement viral social visual exploration celebrating Diet Coke in festive Christmas aesthetics.',
    gallery: [
      '/images/dietcoke_christmas_poster.jpg',
      '/images/dietcoke_christmas_frame4.jpg'
    ]
  },
  {
    id: 'sketch-gallery-character-concept',
    number: '14',
    title: 'SKETCH VAULT // DYNAMIC GESTURE & CHARACTER ART',
    category: 'SKETCH GALLERY',
    categoryDisplay: 'Sketch Gallery / Gestural Studies & Concept Ink',
    year: '2025',
    description: 'Raw exploratory sketchbook studies, gestural anatomy figures, pencil weight explorations, and stylized character silhouettes bridging traditional sketching with digital refinement.',
    role: 'Concept Artist & Traditional Sketcher',
    clientOrContext: 'Personal Sketchbook & Visual Development R&D',
    software: ['Graphite 2B', 'Charcoal', 'Micron Fine-liners', 'Procreate'],
    thumbnail: '/images/sketches/character_turnaround_model.png',
    heroImage: '/images/sketches/character_turnaround_model.png',
    aspectRatio: 'square',
    featured: true,
    creativeProcess: [
      'Authored rapid gestural studies examining line of action, spinal compression, and natural silhouette tension.',
      'Constructed rigorous head and cap perspective studies across left, below, and eye-level angles.',
      'Refined character model turnarounds with jacket detailing, cargo folds, and streetwear posture.'
    ],
    beforeAfter: {
      labelBefore: 'Loomis Cranium & Cap Angles',
      labelAfter: 'Finished 3-Pose Model Sheet',
      imageBefore: '/images/sketches/cap_head_perspective.png',
      imageAfter: '/images/sketches/character_turnaround_model.png',
      description: 'Progression from exploratory cranial volume armature to tight character fashion model sheet.'
    },
    finalResultText: 'Comprehensive traditional sketchbook archive serving as the anatomical bedrock for 2D animation and 3D character modeling.',
    gallery: [
      '/images/sketches/character_turnaround_model.png',
      '/images/sketches/postman_bicycle_rain.png',
      '/images/sketches/flower_vendor_market.png',
      '/images/sketches/fisherwoman_portrait.png',
      '/images/sketches/cap_head_perspective.png',
      '/images/sketches/sketch_analog_study_01.jpg',
      '/images/sketches/sketch_analog_study_05.jpg'
    ]
  },
  {
    id: 'sketch-gallery-storyboards',
    number: '15',
    title: 'SKETCH VAULT // TVC STORYBOARD & CAMERA THUMBNAILS',
    category: 'SKETCH GALLERY',
    categoryDisplay: 'Sketch Gallery / Commercial Storyboard & Camera Blocking',
    year: '2025',
    description: 'Rapid thumbnail sketch sequences capturing camera blocking, dramatic chiaroscuro framing, lens focal length choices, and kinetic action cuts for commercials and motion pieces.',
    role: 'Storyboard Artist & Visual Storyteller',
    clientOrContext: 'Commercial Pre-Production & Visual Direction Bible',
    software: ['Indian Ink', 'Copic Warm Gray Markers', 'Photoshop'],
    thumbnail: '/images/sketches/postman_bicycle_rain.png',
    heroImage: '/images/sketches/food_exploration_thali.png',
    aspectRatio: 'wide',
    featured: true,
    creativeProcess: [
      'Executed architectural and street observational studies analyzing values, timber textures, and cast shadows.',
      'Developed authentic visual development spreads across culinary plating, tea stalls, and packaging typography.',
      'Illustrated freehand FMCG packaging breakdowns and cultural character figures with fine-liner ink.'
    ],
    beforeAfter: {
      labelBefore: 'Street Kiosk Observational Study',
      labelAfter: 'Culinary Spread & Packaging Exploration',
      imageBefore: '/images/sketches/roadside_kiosk_vendor.png',
      imageAfter: '/images/sketches/food_exploration_thali.png',
      description: 'Observational street studies translated into finished conceptual culinary spreads and packaging breakdowns.'
    },
    finalResultText: 'Comprehensive environment, food, and product packaging sketchbook archive grounding commercial visual projects.',
    gallery: [
      '/images/sketches/food_exploration_thali.png',
      '/images/sketches/postman_bicycle_rain.png',
      '/images/sketches/flower_vendor_market.png',
      '/images/sketches/roadside_kiosk_vendor.png',
      '/images/sketches/fmcg_goodday_parleg.png',
      '/images/sketches/fmcg_bourbon_chaas.png',
      '/images/sketches/south_indian_tiffin.png',
      '/images/sketches/sketch_analog_study_02.jpg',
      '/images/sketches/sketch_analog_study_06.jpg'
    ]
  },
  {
    id: 'digital-art-suite',
    number: '16',
    title: 'DIGITAL ART // CONCEPT ART & 2D VECTOR SUITE',
    category: 'DIGITAL ART',
    categoryDisplay: 'Digital Art / Concept Painting & Vector Illustrations',
    year: '2025',
    description: 'A curated suite of digital paintings, character concepts, environmental keyframes, and vector illustrations crafted in Photoshop, Procreate, and Illustrator.',
    role: 'Digital Illustrator & Concept Artist',
    clientOrContext: 'Personal Visual Development & Concept Art Series',
    software: ['Photoshop', 'Procreate', 'Illustrator', 'Wacom'],
    thumbnail: '/images/digital-art/digital_illustration_07.png',
    heroImage: '/images/digital-art/digital_illustration_06.png',
    externalUrl: 'https://savedly.net/f/wzjtuv63',
    externalUrlLabel: 'VIEW SAVEDLY GALLERY',
    aspectRatio: 'wide',
    featured: true,
    creativeProcess: [
      'Blocked out high-contrast tonal values and thumbnail silhouettes to establish strong compositional reads.',
      'Refined color harmonies and directional lighting passes defining metallic sheens and soft skin speculars.',
      'Applied custom texture brushes and cinematic film grain overlays for rich tactile depth.'
    ],
    beforeAfter: {
      labelBefore: 'Raw Silhouette Block-in',
      labelAfter: 'Finished Digital Render',
      imageBefore: '/images/digital-art/digital_illustration_01.png',
      imageAfter: '/images/digital-art/digital_illustration_07.png',
      description: 'Progression from exploratory digital brush block-in to full-fidelity color keyframe illustration.'
    },
    finalResultText: 'Expressive digital art collection showcasing color theory, character design, and environment concept painting.',
    gallery: [
      '/images/digital-art/digital_illustration_07.png',
      '/images/digital-art/digital_illustration_06.png',
      '/images/digital-art/digital_illustration_02.png',
      '/images/digital-art/digital_illustration_03.png',
      '/images/digital-art/digital_illustration_04.png',
      '/images/digital-art/digital_illustration_05.png',
      '/images/digital-art/digital_illustration_01.png'
    ]
  },
  {
    id: 'animation-2d-vault-project',
    number: '17',
    title: '2D ANIMATION // HAND-DRAWN PRINCIPLES & NARRATIVE SHORTS',
    category: '2D ANIMATION',
    categoryDisplay: '2D Animation / Classical Keyframing & Character Acting',
    year: '2025',
    description: 'A comprehensive traditional and digital 2D animation portfolio spanning the 12 principles of animation: walk cycles, squash & stretch, wave dynamics, shape-shifting metamorphosis, and narrative character storytelling.',
    role: '2D Animator, Character Rigger & Director',
    clientOrContext: '2D Animation Studio Works & Classical Studies',
    software: ['Toon Boom Harmony', 'Adobe Animate', 'After Effects', 'Photoshop'],
    thumbnail: '/images/digital-art/digital_illustration_07.png',
    heroImage: '/images/digital-art/digital_illustration_06.png',
    videoUrl: '/videos/animation-2d/anim2d_01_g5k58uqy.mp4',
    externalUrl: 'https://savedly.net/f/g5k58uqy',
    externalUrlLabel: 'WATCH STREAMING STORY ON SAVEDLY',
    aspectRatio: 'wide',
    featured: true,
    creativeProcess: [
      'Mastered the classical 12 animation principles with squash & stretch ball bounces, pendulum arcs, and weight distribution.',
      'Constructed fluid 8-frame human walk cycles with secondary hair and cloth drag physics.',
      'Directed complete narrative character short films with lip-sync, expressive acting beats, and dynamic camera staging.'
    ],
    beforeAfter: {
      labelBefore: 'Squash & Stretch Foundation',
      labelAfter: 'Full Character Narrative Short',
      imageBefore: '/images/web-experience/ui_screen_04_flow.png',
      imageAfter: '/images/digital-art/digital_illustration_07.png',
      description: 'Progression from mechanical physics exercises to complete character acting and story execution.'
    },
    finalResultText: 'A high-fidelity 2D animation showcase proving classical draftsmanship, timing sensitivity, and emotional acting craft.',
    gallery: [
      '/images/digital-art/digital_illustration_07.png',
      '/images/digital-art/digital_illustration_06.png',
      '/images/digital-art/digital_illustration_02.png'
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
    tagline: 'Node-based Nuke compositing, rotoscoping, planar tracking, clean-plating & CGI integration.',
    tools: ['Nuke', 'Mocha Pro', 'Compositing', 'Roto Tracking', 'Clean Plates'],
    competencies: ['Nuke Node Compositing', 'Planar & Point Tracking', 'Multi-Layer Rotoscoping', 'Object Removal & Clean Plates', 'Grain Matching & Integration']
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
    title: 'Streaming Story // Full 2D Character Short Film',
    type: 'video',
    mediaUrl: '/videos/animation-2d/anim2d_01_g5k58uqy.mp4',
    tag: 'Narrative Short',
    aspect: 'landscape',
    description: 'Complete character narrative short film featuring hand-keyed character acting, lip-sync, dynamic transitions, and background staging.',
    software: ['Toon Boom Harmony', 'After Effects', 'Premiere Pro'],
    duration: 'Full Cut',
    savedlyUrl: 'https://savedly.net/f/g5k58uqy'
  },
  {
    id: 'anim-2d-02',
    title: 'Ocean Voyage // Boat Rig & Wave Dynamics #02',
    type: 'video',
    mediaUrl: '/videos/animation-2d/anim2d_02_uyurzts2.mp4',
    tag: 'Wave Physics',
    aspect: 'landscape',
    description: 'Secondary wave buoyancy, secondary action, and water crest interaction on a stylized floating vessel.',
    software: ['Adobe Animate', 'After Effects'],
    duration: 'Physics Study',
    savedlyUrl: 'https://savedly.net/f/uyurzts2'
  },
  {
    id: 'anim-2d-03',
    title: 'Nautical Drift // Boat Wave Buoyancy #01',
    type: 'video',
    mediaUrl: '/videos/animation-2d/anim2d_03_2zqhnxyj.mp4',
    tag: 'Buoyancy & Waves',
    aspect: 'landscape',
    description: 'Primary ocean wave physics and floating vessel keyframe study with rhythmic crest easing and hull rotation.',
    software: ['Adobe Animate', 'After Effects'],
    duration: 'Fluid Motion',
    savedlyUrl: 'https://savedly.net/f/2zqhnxyj'
  },
  {
    id: 'anim-2d-04',
    title: 'Pendulum Arcs // Gravitational Timing & Easing #01',
    type: 'video',
    mediaUrl: '/videos/animation-2d/anim2d_04_7zw7f7cx.mp4',
    tag: 'Arcs & Timing',
    aspect: 'landscape',
    description: 'Foundational mechanical timing exercise demonstrating gravitational acceleration, pendulum overshoot, and natural decay arcs.',
    software: ['Adobe Animate', 'TVPaint'],
    duration: 'Arc Study',
    savedlyUrl: 'https://savedly.net/f/7zw7f7cx'
  },
  {
    id: 'anim-2d-05',
    title: 'Animated Self-Intro // "Hi! I am Rohan"',
    type: 'video',
    mediaUrl: '/videos/animation-2d/anim2d_05_48qytahx.mp4',
    tag: 'Character Acting',
    aspect: 'landscape',
    description: 'Charming hand-drawn animated persona self-introduction showcasing friendly character appeal, wave gesture, and personality keying.',
    software: ['Toon Boom Harmony', 'After Effects'],
    duration: 'Self Intro',
    savedlyUrl: 'https://savedly.net/f/48qytahx'
  },
  {
    id: 'anim-2d-06',
    title: 'Rohan Walk Cycle // Full 8-Frame Kinetic Stride',
    type: 'video',
    mediaUrl: '/videos/animation-2d/anim2d_06_r5zsf6p9.mp4',
    tag: 'Walk Cycle',
    aspect: 'landscape',
    description: 'Complete 2D character walk cycle breaking down contact, down, passing, and up poses with fluid spine and hair secondary motion.',
    software: ['Adobe Animate', 'Photoshop'],
    duration: 'Cycle Loop',
    savedlyUrl: 'https://savedly.net/f/r5zsf6p9'
  },
  {
    id: 'anim-2d-07',
    title: 'Bouncing Ball Dynamics // Squash & Stretch #01',
    type: 'video',
    mediaUrl: '/videos/animation-2d/anim2d_07_krh7cxgv.mp4',
    tag: 'Squash & Stretch',
    aspect: 'landscape',
    description: 'Classical 12 animation principles breakdown demonstrating mass preservation, vertical squashing, and apex hang-time.',
    software: ['Traditional Keyframing', 'Adobe Animate'],
    duration: 'Physics Keying',
    savedlyUrl: 'https://savedly.net/f/krh7cxgv'
  },
  {
    id: 'anim-2d-08',
    title: 'Metamorphosis // Fluid Organic Shape-Shift',
    type: 'video',
    mediaUrl: '/videos/animation-2d/anim2d_08_p7em968m.mp4',
    tag: 'Morphing',
    aspect: 'landscape',
    description: 'Seamless fluid morphing transformation between organic silhouettes, studying volume conservation and graphic path transitions.',
    software: ['Toon Boom Harmony', 'After Effects'],
    duration: 'Morph Study',
    savedlyUrl: 'https://savedly.net/f/p7em968m'
  },
  {
    id: 'anim-2d-09',
    title: 'Kinetic Name ID // "ROHAN" Title Animation',
    type: 'video',
    mediaUrl: '/videos/animation-2d/anim2d_09_mxrra26b.mp4',
    tag: 'Title Animation',
    aspect: 'landscape',
    description: 'High-impact kinetic typography and logo reveal animating the creator name with fluid strokes and energetic camera pushes.',
    software: ['After Effects', 'Illustrator'],
    duration: 'Title Reveal',
    savedlyUrl: 'https://savedly.net/f/mxrra26b'
  }
];

