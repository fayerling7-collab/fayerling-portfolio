export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  responsibilities: string[];
  achievements: string[];
  skills: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  major: string;
  period: string;
  description: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface ContactInfo {
  email: string;
  phone: string;
  github: string;
  linkedin: string;
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
}

export interface Award {
  title: string;
  description: string;
  period: string;
}

export interface Project {
  name: string;
  role: string;
  description: string;
  skills: string[];
}

export interface PersonalInfo {
  name: string;
  title: string;
  valueProposition: string;
  shortBio: string;
  target: string;
}