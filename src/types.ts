export interface OfficeLocation {
  id: string;
  city: string;
  country: string;
  address: string;
  building: string;
  details?: string;
  coordinates: { x: number; y: number }; // Percentage coordinates on a custom stylized map
  timezone: string;
}

export interface ServiceDetail {
  title: string;
  description: string;
  locations?: string[]; // E.g. ["India HQ", "Kuwait Office", "Dubai Office", "New York Office"]
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  iconName: string;
  services: ServiceDetail[];
  faqs?: { q: string; a: string }[];
}

export interface IndustryItem {
  id: string;
  name: string;
  iconName: string;
  challenges: string[];
  solution: string;
  technologies: string[];
}

export interface MethodologyStage {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string;
  keyPoints: string[];
}

export interface DivisionInfo {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  iconName: string;
  points: string[];
  markets: string[];
}

export interface MetricHighlight {
  label: string;
  value: string;
  description: string;
}

export interface ClientTestimonial {
  clientName: string;
  industry: string;
  projectSummary: string;
  resultMetric: string;
  quote: string;
  company?: string;
  clientRole?: string;
  location?: string;
  technicalChallenge?: string;
  technicalSolution?: string;
  techStack?: string[];
  size?: "sm" | "md" | "lg";
}

export interface TeamMember {
  name: string;
  role: string;
  bio?: string;
  category?: "executive" | "engineering" | "consultant" | "development" | "all";
  department?: string;
}


