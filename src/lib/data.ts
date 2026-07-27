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
    name: "ACMOne App",
    status: "Live",
    desc:
      "Official mobile app for ACM-VIT serving as a unified platform for event registrations, announcements, and member engagement. Features secure Firebase Authentication with role-based access (members, board, admins), token-based sessions, and 10+ fully cross-platform screens with production deployment on Play Store and App Store.",
    tech: ["React Native", "TypeScript", "NestJS", "Firebase"],
  },
  {
    id: 2,
    name: "Cryptic Hunt App",
    status: "Live Event",
    desc:
      "Real-time treasure hunt platform designed for 500+ participants featuring NFC-triggered puzzle unlocks, dynamic clue progression, and live leaderboards. Backend built with GoFiber to handle 1000+ concurrent requests with low latency, integrated with Firebase for real-time updates and notifications.",
    tech: [
      "React Native",
      "TypeScript",
      "Firebase",
      "Go",
      "GoFiber",
      "NFC",
    ],
  },
  {
    id: 3,
    name: "GitHub Open Source Parse",
    status: "Active",
    desc:
      "Developer tooling platform that parses public GitHub repositories into structured ASTs using Tree-sitter. Visualizes file hierarchies, dependencies, and symbol references with collaborative annotations. Includes OAuth 2.0 authentication and MongoDB-backed repository snapshots.",
    tech: [
      "Next.js",
      "GitHub API",
      "MongoDB",
      "Tree-sitter",
      "OAuth",
    ],
  },
  {
    id: 4,
    name: "Apex Market",
    status: "Production",
    desc:
      "Full-stack e-commerce platform with NestJS backend and Prisma over PostgreSQL. Features RBAC, JWT authentication, AWS S3 media storage, and SES email integration. Frontend built with Next.js using Server Actions and React Server Components.",
    tech: [
      "NestJS",
      "Next.js",
      "AWS",
      "Prisma",
      "PostgreSQL",
      "JWT",
    ],
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
    tags: [
      "React Native",
      "TypeScript",
      "CI/CD",
      "GitHub Actions",
    ],
    body:
      "Joined as one of the first engineering interns at an early-stage startup, taking end-to-end ownership of multiple core product features including real-time push notifications, in-app alert systems, and critical user flows built in React Native (TypeScript). " +
      "Improved app performance by reducing cold-start load time through component-level lazy loading and optimised asset bundling. " +
      "Designed and implemented CI/CD pipelines using GitHub Actions, automating build, lint, test, and deployment workflows, which reduced production crash rates and eliminated manual release overhead. " +
      "Worked closely with the founding team in a high-ownership environment, contributing to product roadmap discussions and adapting quickly to evolving priorities.",
  },

  aicore: {
    title: "AI Core Solutions",
    sub:
      "Software Development Engineer Intern · May 2025 – Aug 2025 · Remote",
    tags: [
      "React Native",
      "AWS Lambda",
      "Socket.IO",
      "AI APIs",
      "Real-time Systems",
    ],
    body:
      "Implemented a real-time AI transcript generation and agent system on AWS Lambda with a Socket.IO-based communication layer for low-latency updates. " +
      "Delivered a production-grade React Native application from the ground up, enabling users to access AI-powered transcript generation services through a unified interface. " +
      "Built asynchronous pipelines for AI backend services with request queuing, retry logic, and fault-tolerant error handling, reducing backend load by 30%.",
  },

  sapidblue: {
    title: "SapidBlue Technologies",
    sub: "SDE Intern · May 2026 – Jun 2026 · On-Site",
    tags: [
      "Flutter",
      "Node.js",
      "SQLite",
      "Vite",
      "REST APIs",
      "Veeam VSPC",
    ],
    body:
      "Architected an offline-first factory inspection application using Flutter and Node.js with SQLite persistence and automatic sync-on-reconnect, supporting 200+ users while maintaining reliable data capture in low-connectivity industrial environments. " +
      "Created and launched a Vite-based admin portal with RESTful APIs for centralized monitoring, configuration, and synchronization of inspection records across factory sites. " +
      "Automated VM and system-level backup operations across multiple operating systems using Veeam Service Provider Console (VSPC), working with agent-based and agentless backup strategies through the VSPC Console and REST APIs.",
  },
} satisfies Record<string, WarRoomInternshipModalData>;

export type WarRoomInternshipId =
  keyof typeof WAR_ROOM_INTERNSHIP_MODAL_DATA;

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
  {
    id: "sapidblue",
    company: "SapidBlue Technologies",
    role: "SDE Intern",
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
    url:
      "https://courses.vit.skillsnetwork.site/certificates/7554e7ae1701443eb8345968e50a1c31",
  },
  {
    id: "c2",
    name: "Technology Job Simulation",
    issuer: "Deloitte Australia · Forage",
    date: "Issued Oct 2025 · ID: 9hDhpQenLAM9miZ2h",
    badge: "Verified",
    url:
      "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/udmxiyHeqYQLkTPvf_9PBTqmSxAf6zZTseP_68fa050e8db112cab1b5c99c_1761283887014_completion_certificate.pdf",
  },
  {
    id: "c3",
    name: "React Native – The Practical Guide",
    issuer: "Udemy",
    date: "Issued Jan 2025",
    badge: "Credential",
    url:
      "https://www.udemy.com/certificate/UC-809fdb9a-190f-4895-9e77-02b60b635861/",
  },
  {
    id: "c4",
    name: "AWS Certified Solutions Architect – Associate (SAA-C03)",
    issuer: "Amazon Web Services",
    badge: "AWS Certified",
    url:
      "https://cp.certmetrics.com/amazon/en/public/verify/credential/e5592549ae934ab19ef8319327ac4a06",
  },
];
