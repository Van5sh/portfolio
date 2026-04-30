export interface Project {
  id: number;
  name: string;
  status: string;
  desc: string;
  tech: string[];
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    name: "CricketStats",
    status: "Live",
    desc: "Real-time cricket analytics platform. Live match data, player heat-maps, Duckworth-Lewis projections and a predictive scoring engine built on historical IPL datasets.",
    tech: ["React", "Node.js", "WebSocket", "PostgreSQL", "D3.js"],
  },
  {
    id: 2,
    name: "DevConnect",
    status: "Beta",
    desc: "Networking platform for developers to find collaborators, post bounties, and ship side-projects together. Think LinkedIn but actually useful.",
    tech: ["Next.js", "MongoDB", "GraphQL", "AWS", "Tailwind"],
  },
  {
    id: 3,
    name: "ShopFlow",
    status: "Live",
    desc: "Full-stack e-commerce engine with real-time inventory sync, Stripe payments, abandoned-cart recovery and a merchant analytics dashboard.",
    tech: ["React", "Express", "Stripe", "Redis", "Docker"],
  },
  {
    id: 4,
    name: "AiChat",
    status: "In Dev",
    desc: "AI-powered customer support chatbot with multi-turn context, intent classification, and seamless human hand-off. Plugs into any product via a script tag.",
    tech: ["Python", "FastAPI", "OpenAI", "Docker", "React"],
  },
];

export const NAV_ITEMS = [
  { label: "* INTRO", scene: 0 },
  { label: "* WELCOME", scene: 1 },
  { label: "* THE HACKSTATION", scene: 2 },
  { label: "* TECH SHELF", scene: 3 },
  { label: "* WAR ROOM", scene: 4 },
  { label: "* TERMINAL", scene: 5 },
  { label: "* LATER", scene: 6 },
];

export const SCENE_NAMES = [
  "Hero",
  "Welcome",
  "Hackstation",
  "Tech Shelf",
  "War Room",
  "Terminal",
  "Final",
];

export interface WarRoomInternshipModalData {
  title: string;
  sub: string;
  tags: string[];
  body: string;
}

export const WAR_ROOM_INTERNSHIP_MODAL_DATA = {
  zeepty: {
    title: "Zeepty",
    sub: "App Developer Intern · May 2025 – Jul 2025 · Remote",
    tags: ["React Native", "TypeScript", "CI/CD", "GitHub Actions"],
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  aicore: {
    title: "AI Core Solutions",
    sub: "SDE Intern · May 2025 – Aug 2025 · Remote",
    tags: ["React Native", "Socket.IO", "AI APIs", "Real-time"],
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
} satisfies Record<string, WarRoomInternshipModalData>;

export type WarRoomInternshipId = keyof typeof WAR_ROOM_INTERNSHIP_MODAL_DATA;

export interface WarRoomInternshipEntry {
  id: WarRoomInternshipId;
  company: string;
  role: string;
}

export const WAR_ROOM_INTERNSHIPS: WarRoomInternshipEntry[] = [
  {
    id: "zeepty",
    company: "Zeepty",
    role: "App Developer Intern",
  },
  {
    id: "aicore",
    company: "AI Core Solutions",
    role: "Software Development Engineer Intern",
  },
];

export interface WarRoomCertData {
  id: string;
  name: string;
  issuer: string;
  date?: string;
  badge: string;
  url: string;
}

export const WAR_ROOM_CERTS: WarRoomCertData[] = [
  {
    id: "c1",
    name: "DevOps, Agile & Design Thinking",
    issuer: "IBM",
    badge: "Certified",
    url: "https://www.ibm.com/training",
  },
  {
    id: "c2",
    name: "Technology Job Simulation",
    issuer: "Deloitte Australia · Forage",
    date: "Issued Oct 2025 · ID: 9hDhpQenLAM9miZ2h",
    badge: "Verified",
    url: "https://www.theforage.com",
  },
  {
    id: "c3",
    name: "React Native – The Practical Guide",
    issuer: "Udemy",
    date: "Issued Jan 2025",
    badge: "Credential",
    url: "https://www.udemy.com",
  },
  // {
  //   id: "c4",
  //   name: "Full Stack Web Development",
  //   issuer: "freeCodeCamp",
  //   date: "Issued Mar 2024",
  //   badge: "Verified",
  //   url: "https://www.freecodecamp.org",
  // }
];
