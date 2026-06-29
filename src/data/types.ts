/**
 * Resume data — type definitions shared across languages.
 * Each language file (resume.en.ts, resume.zh.ts) exports a `ResumeData`
 * matching this shape.
 */

export type Lang = "en" | "zh";

export type Profile = {
  name: string;
  /** Optional alternate name (e.g. Chinese name). Falls back to `name`. */
  nameAlt?: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  /** GitHub profile URL. */
  github: string;
  linkedin?: string;
  summary: string;
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export type ExperienceSubsection = {
  title: string;
  bullets: string[];
};

export type Experience = {
  company: string;
  role: string;
  /** ISO 8601 month — `YYYY-MM`. Earlier-roles-style entries may use bare year `YYYY`. */
  start: string;
  /** ISO 8601 month — `YYYY-MM` or `"Present"`. */
  end: string;
  location: string;
  /** Optional one-liner context — e.g. "Key Industries: Internet, Gaming, ..." */
  description?: string;
  bullets: string[];
  subsections?: ExperienceSubsection[];
  tags?: string[];
};

export type Certificate = {
  name: string;
  code?: string;
};

export type Project = {
  name: string;
  period: string;
  description: string;
  bullets: string[];
  tags: string[];
  link?: { label: string; href: string };
};

export type Education = {
  school: string;
  schoolEn?: string;
  department: string;
  period: string;
  detail?: string;
};

export type Language = {
  name: string;
  level: string;
};

/** UI strings that vary by language — nav, section titles, buttons, labels. */
export type UIStrings = {
  nav: {
    about: string;
    experience: string;
    skills: string;
    certificates: string;
    education: string;
    publicSharing: string;
    contact: string;
  };
  hero: {
    greeting: string;
    cta: string;
    certsCta: string;
    githubCta: string;
    statBasedIn: string;
    statEmail: string;
    statFocus: string;
  };
  about: {
    eyebrow: string;
    title: string;
    atAGlance: string;
    glanceExperience: string;
    glanceCurrent: string;
    glanceFocus: string;
    glanceCerts: string;
    glanceLanguages: string;
  };
  experience: {
    eyebrow: string;
    title: string;
  };
  skills: {
    eyebrow: string;
    title: string;
    languagesHeading: string;
  };
  certificates: {
    eyebrow: string;
    title: string;
  };
  education: {
    eyebrow: string;
    title: string;
  };
  publicSharing: {
    eyebrow: string;
    title: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    blurb: string;
  };
  footer: {
    copyright: string;
    builtWith: string;
  };
  themeToggle: {
    toLight: string;
    toDark: string;
  };
  languageToggle: {
    /** Tooltip for the language switcher button. */
    label: string;
  };
};

export type ResumeData = {
  profile: Profile;
  skillGroups: SkillGroup[];
  experiences: Experience[];
  certificates: Certificate[];
  projects: Project[];
  education: Education[];
  languages: Language[];
  ui: UIStrings;
};
