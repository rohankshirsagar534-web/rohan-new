export type ProjectCategory = 
  | 'ALL'
  | 'VIDEO'
  | 'VFX'
  | 'MOTION'
  | '3D'
  | 'GRAPHIC DESIGN'
  | 'WEB';

export interface Project {
  id: string;
  number: string;
  title: string;
  category: ProjectCategory;
  categoryDisplay: string;
  year: string;
  description: string;
  role: string;
  clientOrContext: string;
  software: string[];
  thumbnail: string;
  heroImage: string;
  aspectRatio?: 'wide' | 'square' | 'portrait' | 'tall';
  featured?: boolean;
  videoUrl?: string;
  beforeAfter?: {
    labelBefore: string;
    labelAfter: string;
    imageBefore: string;
    imageAfter: string;
    description: string;
  };
  creativeProcess: string[];
  finalResultText: string;
  gallery: string[];
}

export interface SkillItem {
  name: string;
  note?: string;
}

export interface SkillCategory {
  id: string;
  number: string;
  title: string;
  tagline: string;
  tools: string[];
  competencies: string[];
  highlightColor?: string;
}

export interface JourneyMilestone {
  number: string;
  title: string;
  category: string;
  description: string;
  year: string;
  linkText?: string;
  linkUrl?: string;
  deliverable?: string;
}

export interface ProcessStage {
  number: string;
  phase: string;
  title: string;
  description: string;
  deliverables: string[];
  iconMarker: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  projectType: string;
  message: string;
}
