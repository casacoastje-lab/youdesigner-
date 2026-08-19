export type ProjectCategory = 
  | 'All'
  | 'VIDEO EDITING'
  | 'BRAND DESIGNS'
  | string;

export interface ProjectDeliverable {
  id: string;
  name: string;
  type: 'vector' | 'raster' | 'guideline' | 'prototype' | '3d' | 'font';
  fileFormat: string;
  size: string;
  downloadUrl?: string;
  previewUrl?: string;
}

export interface CaseStudySection {
  title: string;
  content: string;
  image?: string;
  stats?: { label: string; value: string }[];
}

export interface PortfolioProject {
  id: string;
  title: string;
  client: string;
  category: 'VIDEO EDITING' | 'BRAND DESIGNS' | string;
  year: string;
  date?: string;
  tagline: string;
  description: string;
  coverImage: string;
  gallery: string[];
  colorPalette: { hex: string; name: string }[];
  typography: { fontName: string; usage: string }[];
  deliverablesCount: number;
  featured: boolean;
  liveUrl?: string;
  behanceUrl?: string;
  dribbbleUrl?: string;
  figmaUrl?: string;
  videoUrl?: string;
  pdfUrl?: string;
  pdfFileName?: string;
  role: string;
  challenge: string;
  solution: string;
  impactMetrics: { label: string; value: string; change?: string }[];
  deliverables: ProjectDeliverable[];
  tags: string[];
  caseStudySections?: CaseStudySection[];
  clientTestimonial?: {
    quote: string;
    author: string;
    title: string;
    avatar: string;
    company: string;
  };
}

export interface GoogleDriveImportItem {
  id: string;
  name: string;
  type: 'folder' | 'image' | 'video' | 'pdf' | 'figma' | 'archive';
  size: string;
  thumbnailUrl: string;
  selected: boolean;
  category: ProjectCategory;
}

export interface ClientPortalProject {
  clientCode: string;
  clientName: string;
  company: string;
  projectTitle: string;
  status: 'In Review' | 'Approved' | 'Final Hand-off' | 'Active Sprint';
  progress: number;
  lastUpdated: string;
  brandColors: string[];
  activeMilestones: {
    id: string;
    title: string;
    dueDate: string;
    completed: boolean;
  }[];
  deliverableAssets: ProjectDeliverable[];
  notes: string;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  company: string;
  role: string;
  location: string;
  avatar: string;
  quote: string;
  project: string;
  rating: number;
  year: string;
}

export interface ServiceItem {
  id: string;
  iconName: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  timeline: string;
  highlightTag: string;
}

export interface ProjectInquiry {
  name: string;
  email: string;
  company: string;
  projectType: string[];
  budgetRange: string;
  timeline: string;
  details: string;
  googleDriveLink?: string;
}
