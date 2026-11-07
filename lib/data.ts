export type Role = "swe" | "ds";
export type ToneKey = "sa" | "em" | "am";

export const GITHUB = "https://github.com/Rishikanth-S007";
export const LINKEDIN = "https://www.linkedin.com/in/rishikanth-s-5460b6327";
export const LEETCODE = "https://leetcode.com/u/Rishikanth_S";
export const EMAIL = "rishikanthsenthilkumar@gmail.com";
export const RESUME = {
  swe: "/resume/Rishikanth_S_CV_2026_SWE.pdf",
  ds: "/resume/Rishikanth_S_CV_2026_DS.pdf",
  full: "/resume/Rishikanth_S_CV_2026_Full.pdf",
};

export const TONES: Record<ToneKey, { hex: string; glow: string }> = {
  sa: { hex: "#7BA4F4", glow: "rgba(123,164,244,0.10)" },
  em: { hex: "#46C49B", glow: "rgba(70,196,155,0.10)" },
  am: { hex: "#B39DF5", glow: "rgba(179,157,245,0.10)" },
};
export const NEUTRAL = "rgba(255,255,255,0.32)";
export const COPPER = "#D9966A";

export interface Project {
  id: string;
  tone: ToneKey;
  cat: string;
  title: string;
  kind: string;
  short: string;
  d1: string;
  d2: string;
  stack: string[];
  /** Set a real URL here to show the button; null hides it. */
  repo: string | null;
  demo: string | null;
}

export const PROJECTS: Record<string, Project> = {
  devpulse: { id: "devpulse", tone: "sa", cat: "Full-stack · Backend", title: "DevPulse",
    kind: "Developer productivity and repository management · Academic project",
    short: "Spring Boot and React platform with JWT auth, role-based access and pull request workflows.",
    d1: "React 19 and Ant Design dashboard on a Java 17 / Spring Boot 3.2 REST API for repositories, commits, issues and pull requests.",
    d2: "JWT authentication, role-based access, pull request workflows, productivity scoring and Swagger / OpenAPI docs.",
    stack: ["Spring Boot", "React", "MySQL"], repo: null, demo: null },
  codesync: { id: "codesync", tone: "sa", cat: "Full-stack · Real-time", title: "CodeSync",
    kind: "Real-time collaborative coding practice · Independent project",
    short: "Live multi-user editing with sandboxed code execution (Yjs, Monaco, WebSockets, Judge0).",
    d1: "Live multi-user editing with Yjs, Monaco and WebSockets, plus authentication, a 16-problem bank and submission history.",
    d2: "Sandboxed code execution through Judge0 with a per-language test harness, verified through browser-based testing.",
    stack: ["React", "TypeScript", "Spring Boot", "Supabase", "Judge0"], repo: null, demo: null },
  laws: { id: "laws", tone: "em", cat: "Machine learning · RAG", title: "Local Laws Teller",
    kind: "AI legal assistant · Independent project",
    short: "RAG assistant for Indian legal text on a FastAPI backend.",
    d1: "Natural language queries over Indian legal text through a retrieval-augmented generation pipeline.",
    d2: "ML inference, structured retrieval and vector search behind FastAPI REST APIs, designed for offline, low-resource devices.",
    stack: ["React.js", "FastAPI", "RAG"], repo: null, demo: null },
  dispute: { id: "dispute", tone: "em", cat: "Machine learning · Data", title: "DisputeGuard AI",
    kind: "Merchant chargeback defence · Razorpay AI Buildathon",
    short: "Evidence extraction and risk scoring behind a financial safety gate.",
    d1: "Prototype that generates synthetic dispute data for 100 historical cases, extracts evidence from customer chats and courier logs, and scores risk with logistic regression behind a financial safety gate.",
    d2: "Automated PDF dispute packets and a Streamlit review dashboard with manual override.",
    stack: ["Python", "FastAPI", "Streamlit", "scikit-learn"], repo: null, demo: null },
  attack: { id: "attack", tone: "em", cat: "Machine learning · Security", title: "Network Attack Forecasting",
    kind: "AI-based forecasting dashboard · Independent project",
    short: "Streamlit dashboard forecasting attacks from flow features with a trained world model.",
    d1: "Streamlit dashboard that forecasts network attacks from flow and packet-level features using a trained world model, with CSV upload.",
    d2: "Predictions mapped to MITRE ATT&CK stages, with response recommendations and explainability output.",
    stack: ["Python", "Streamlit", "Machine Learning"], repo: null, demo: null },
  medical: { id: "medical", tone: "am", cat: "UI · 3D", title: "Medical Visualization",
    kind: "Surgical imaging platform · Independent project",
    short: "Interactive 3D imaging with gesture and voice control.",
    d1: "DICOM and NIfTI imaging data converted into interactive 3D models with gesture and voice control.",
    d2: "Designed for real-world deployment constraints, including offline and low-resource device compatibility.",
    stack: ["Three.js", "WebGL", "MediaPipe"], repo: null, demo: null },
};

export const ORDER: Record<Role, string[]> = {
  swe: ["devpulse", "codesync", "laws", "dispute", "attack", "medical"],
  ds: ["dispute", "attack", "laws", "codesync", "devpulse", "medical"],
};

export const HERO: Record<Role, { tagline: string; chips: string[]; resumeLabel: string }> = {
  swe: {
    tagline: "I build full-stack applications with Java, Spring Boot and React: REST APIs, real-time systems and the interfaces on top.",
    chips: ["Java", "Spring Boot", "React", "FastAPI", "REST APIs", "MySQL"],
    resumeLabel: "Resume · SWE",
  },
  ds: {
    tagline: "I build machine learning systems in Python: risk scoring, attack forecasting and retrieval-augmented question answering, with dashboards people can use.",
    chips: ["Python", "scikit-learn", "RAG", "NLP", "Explainable AI", "FastAPI"],
    resumeLabel: "Resume · DS",
  },
};

export const STATS = [
  { v: "195+", l: "LeetCode solved · 20 Hard" },
  { v: "8.16", l: "CGPA · B.Tech AI & DS" },
  { v: "6", l: "Projects built" },
  { v: "2×", l: "NPTEL Elite" },
  { v: "2", l: "National hackathons" },
];

export const SKILLS: { label: string; cls: "sa" | "em" | "am" | "ne"; hex: string; chips: string[] }[] = [
  { label: "Backend & web services", cls: "sa", hex: "#7BA4F4", chips: ["Spring Boot", "FastAPI", "REST APIs", "Node.js"] },
  { label: "AI / ML", cls: "em", hex: "#46C49B", chips: ["Machine Learning", "NLP", "RAG", "LLMs", "Generative AI", "Explainable AI"] },
  { label: "Frontend & UI", cls: "am", hex: "#B39DF5", chips: ["React.js", "HTML5", "CSS3", "Three.js", "WebGL"] },
  { label: "Languages", cls: "ne", hex: NEUTRAL, chips: ["Java", "Python", "JavaScript", "TypeScript", "SQL", "C++"] },
  { label: "Databases", cls: "ne", hex: NEUTRAL, chips: ["MongoDB", "MySQL", "Supabase"] },
  { label: "Foundations & tools", cls: "ne", hex: NEUTRAL, chips: ["DSA", "OOP", "OS", "System Design", "Git", "GitHub", "Postman", "Streamlit"] },
];

export const JOURNEY = [
  { hex: "#46C49B", when: "2024 — 2028", title: "B.Tech, Artificial Intelligence & Data Science", org: "Sri Krishna College of Engineering and Technology, Coimbatore", meta: "CGPA 8.16 / 10" },
  { hex: NEUTRAL, when: "2023 — 2024", title: "Higher Secondary (12th)", org: "SSVM Vidhan Matric HSS", meta: "91.67%" },
  { hex: NEUTRAL, when: "May — Jun 2026", title: "Machine Learning virtual internship", org: "CodSoft · movie genre classification, credit card fraud detection, customer churn prediction", meta: "Virtual" },
];

export const RECOGNITION = [
  { tag: "Finalist · 2025", title: "Infinity AI Hackathon", meta: "Tredence & Databricks, Bangalore. A 24-hour live AI innovation challenge." },
  { tag: "National level · 2026", title: "Prince iSOLVE Hack'26", meta: "Chennai. A complete solution built in 12 hours across IoT, Smart Cities and Healthcare." },
  { tag: "NPTEL Elite", title: "Applied AI and Python", meta: "IIT Guwahati (78%) and IIT Madras, both Elite certificates." },
];

export const CERTS = [
  { name: "NPTEL Elite — Applied AI", meta: "IIT Guwahati · 2026" },
  { name: "NPTEL Elite — Python", meta: "IIT Madras · 2025" },
  { name: "Introduction to Deep Learning", meta: "Infosys Springboard · 2026" },
  { name: "Explainable AI", meta: "Infosys Springboard · 2026" },
  { name: "Python for Data Science and Machine Learning Bootcamp", meta: "Udemy · 2026" },
  { name: "Machine Learning Fundamentals", meta: "Infosys Springboard · 2025" },
  { name: "Generative AI: Prompt Engineering Basics", meta: "IBM / Coursera · 2025" },
  { name: "Data Structures and Algorithms", meta: "Infosys Springboard · 2025" },
  { name: "Java 11 Essentials", meta: "Infosys Springboard · 2025" },
  { name: "Python Programming Fundamentals", meta: "Microsoft / Coursera · 2025" },
];
