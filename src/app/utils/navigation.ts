// Navigation and Routing Utility for Section Deep Linking

export const ROUTE_MAP: Record<string, string> = {
  // Projects
  project: "projects",
  projects: "projects",
  portfolio: "projects",
  work: "projects",

  // About
  about: "about",
  bio: "about",

  // Skills
  skill: "skills",
  skills: "skills",
  technologies: "skills",
  tech: "skills",

  // Experience
  experience: "experience",
  experiences: "experience",
  career: "experience",

  // Contact
  contact: "contact",
  hire: "contact",

  // Home
  home: "home",
  main: "home",
  "": "home",
};

export const SECTION_TO_PATH: Record<string, string> = {
  home: "/",
  about: "/about",
  skills: "/skills",
  projects: "/projects",
  experience: "/experience",
  contact: "/contact",
};

export function getTargetSectionFromUrl(): string | null {
  if (typeof window === "undefined") return null;

  // 1. Check Hash (#projects or #/projects)
  if (window.location.hash) {
    const rawHash = window.location.hash.replace(/^#\/?/, "").toLowerCase();
    if (ROUTE_MAP[rawHash]) return ROUTE_MAP[rawHash];
    if (document.getElementById(rawHash)) return rawHash;
  }

  // 2. Check Query Parameters (?section=projects)
  const params = new URLSearchParams(window.location.search);
  const sectionQuery = params.get("section")?.toLowerCase();
  if (sectionQuery && ROUTE_MAP[sectionQuery]) {
    return ROUTE_MAP[sectionQuery];
  }

  // 3. Check Pathname (/projects, /project, etc.)
  const rawPath = window.location.pathname.replace(/^\/+|\/+$/g, "").toLowerCase();
  if (rawPath && ROUTE_MAP[rawPath]) {
    return ROUTE_MAP[rawPath];
  }

  return null;
}

export function scrollToSection(sectionId: string, updateUrl: boolean = true) {
  if (typeof window === "undefined" || !sectionId) return;

  const targetId = ROUTE_MAP[sectionId.toLowerCase()] || sectionId;
  const element = document.getElementById(targetId);

  if (element) {
    const navbarHeight = 70;
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = Math.max(0, elementPosition - navbarHeight);

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

    if (updateUrl) {
      const targetPath = SECTION_TO_PATH[targetId] || `/${targetId}`;
      if (window.location.pathname !== targetPath) {
        window.history.pushState({ section: targetId }, "", targetPath);
      }
    }
  }
}
