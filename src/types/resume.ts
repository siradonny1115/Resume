export interface Contact {
  email: string;
  phone: string;
  github: string;
}

export interface BasicInfo {
  name: string;
  title: string;
  contact: Contact;
}

export interface Skills {
  skills: string[];
}

export interface Career {
  company: string;
  position: string;
  period: string;
  duration: string;
  type: string;
  responsibilities: string[];
}

export interface ProjectResult {
  text?: string;
  highlight?: string;
  value?: string;
}

export interface TroubleShooting {
  problem: string;
  solution: string;
  result: string;
}

export interface ProjectImage {
  src: string;
  caption: string;
}

export interface MainProject {
  name: string;
  company: string;
  period: string;
  description: string;
  tasks: string[];
  results: ProjectResult[];
  troubleShooting?: TroubleShooting[];
  learnings?: string[];
  link?: string;
  images?: ProjectImage[];
}

export interface OtherProject {
  name: string;
  company: string;
  period: string;
  description: string;
  tasks: string[];
  results: ProjectResult[];
  troubleShooting?: TroubleShooting[];
  learnings?: string[];
  link?: string;
  images?: ProjectImage[];
}

export interface Contribution {
  description: string;
}

export interface PersonalProject {
  name: string;
  period: string;
  description: string;
  url?: string;
  github?: string;
}

export interface Education {
  school?: string;
  major?: string;
  status?: string;
  name?: string;
  period?: string;
}

export interface Certificate {
  name: string;
  issuer: string;
}

export interface ResumeData {
  basicInfo: BasicInfo;
  introduction: string;
  skills: Skills;
  career: Career;
  mainProjects: MainProject[];
  otherProjects: OtherProject[];
  contributions: string[];
  personalProjects: PersonalProject[];
  educationHistory?: Education;
  educationCourse?: Education;
  certificates?: Certificate[];
}
