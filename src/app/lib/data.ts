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
  { label: "* THE HACKSTATION", scene: 2 },
  { label: "* TECH SHELF", scene: 3 },
  { label: "* WAR ROOM", scene: 4 },
  { label: "* CRICKET CORNER", scene: 5 },
  { label: "* SIDE QUESTS", scene: 6 },
  { label: "* TERMINAL", scene: 7 },
  { label: "* LATER", scene: 8 },
];

export const SCENE_NAMES = [
  "Hero", "Welcome", "Hackstation", "Tech Shelf",
  "War Room", "Cricket Corner", "Side Quests", "Terminal", "Final",
];
