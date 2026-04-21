export type SectionId =
  | "home"
  | "about"
  | "skills"
  | "projects"
  | "experience"
  | "contact";

export interface NavLink {
  id: SectionId;
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  icon: string;
  category: "frontend" | "mobile" | "backend" | "tools";
  level: number; // 1-5
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  gradient: string;
  icon: string;
}

export interface Experience {
  role: string;
  type: string;
  period: string;
  description: string;
  highlights: string[];
}
