import nyumbanapp from "./assets/nyumbanapp.jpg";
import claritydesk from "./assets/claritydesk.jpg";
import billing from "./assets/billing.png";
import { FaXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";
import { MdOutlineAlternateEmail } from "react-icons/md";

export const profile = {
  name: "Kinyera Amos",
  title: "Full Stack Developer",
  tagline: "I ship web and mobile apps that people actually use.",
  location: "Mbarara, Uganda · Open to remote",
  email: "kinyeramo@gmail.com",
  phone: "+256 777 349 597",
  resume: "/Kinyera_Amos_CV.pdf",
  // Formspree form ID — the part after formspree.io/f/ in your form's endpoint.
  formspreeId: "myekebqp",
};

export const sections = [
  { name: "About", id: "about" },
  { name: "Experience", id: "experience" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

export const skills = [
  { title: "Frontend", items: "React, Next.js, TypeScript, TanStack Router / Query / Form, Zod, Redux Toolkit, Tailwind CSS, Shadcn/UI, Ant Design" },
  { title: "Backend", items: "Node.js, Express, NestJS, REST, GraphQL, WebSocket, Python / FastAPI, JWT, OAuth2, RBAC" },
  { title: "Data", items: "PostgreSQL, MySQL, Prisma, TypeORM, MongoDB, SQLite, Redis" },
  { title: "Mobile", items: "React Native, Expo, EAS Build, Flutter / Dart, offline-first" },
  { title: "DevOps & quality", items: "Docker, GitHub Actions, AWS, NGINX, Vitest, Jest, Playwright, Cypress, Sentry" },
];

export const experience = [
  {
    period: "Oct 2025 — Present",
    role: "Senior Front-End Developer",
    company: "Raising The Village",
    url: "https://raisingthevillage.org",
    summary: `Build the implementation management system field officers, coaches and program managers use to track
    household-level development work across Uganda, Rwanda, DRC and Tanzania. Shipped the Agriculture, VSLA, Training,
    Leadership and Coaching modules, compliance and adoption dashboards, and WorkMate — an embedded AI assistant for
    querying program data.`,
    stack: ["React", "TypeScript", "RTK Query", "TanStack Router", "TanStack Query", "TanStack Form", "Ant Design", "ApexCharts"],
  },
  {
    period: "Jan 2025 — Present",
    role: "Full Stack Developer",
    company: "NyumbanApp",
    url: "https://nyumbanapp.com",
    summary: `Part of the team building a rental platform for landlords and tenants across Uganda. I own the money
    flows — rent payments through Flutterwave, refunds, advance-rent credit and termination settlements — across the
    Node.js backend, the web app and the React Native app, and I'm the largest contributor to the admin panel.`,
    stack: ["React Native", "React", "TypeScript", "Node.js", "Express", "Prisma", "PostgreSQL", "Flutterwave"],
  },
  {
    period: "Jan 2025 — Jan 2026",
    role: "Full Stack Developer (Contract)",
    company: "Dango Tech Concept",
    summary: `Shipped ClarityDesk, an offline-first civic app for the South Sudan 2026 elections, with a three-person
    team — I owned push notifications and the iOS App Store release. Also built Dangopay, a Flutter rent and water-bill payment app processing real mobile money; Nyumba Yo and Wellowe; and a
    Next.js platform with Docker, NGINX and CI/CD set up from zero, streaming OpenAI responses from FastAPI over
    WebSocket.`,
    stack: ["React Native", "Flutter", "Next.js", "TanStack", "FastAPI", "PostgreSQL", "Docker"],
  },
  {
    period: "May 2023 — Sep 2025",
    role: "Senior Front-End Developer",
    company: "Tracecorp Solutions",
    url: "https://tracecorpsolutions.com",
    summary: `Led the frontend across a full utility ERP — Accounting, Water Billing, CRM, HRMS and Asset Management —
    running at water utilities in Nigeria, Ethiopia and South Sudan, including Lagos Water Corporation. Built the
    shared component library used by all eight modules and led a zero-downtime JavaScript to TypeScript migration.`,
    stack: ["React", "TypeScript", "TanStack Query", "Zod", "Design system"],
  },
  {
    period: "Feb 2020 — Nov 2022",
    role: "Full Stack Developer",
    company: "Yookatale",
    summary: `Owned the web platform for Uganda's online grocery and food-delivery marketplace end to end: catalogue,
    multi-method checkout, order tracking, meal-plan subscriptions, loyalty and a vendor portal, plus Flutter apps.
    Cut load time by 20% through Next.js optimisation and code splitting.`,
    stack: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Flutter"],
  },
];

export const education = [
  { title: "BSc Information Technology", school: "Kyambogo University", period: "2015 — 2018" },
  { title: "Full-Stack Web Development", school: "Microverse (Remote)", period: "2022" },
];

export const featuredProjects = [
  {
    title: "NyumbanApp",
    caseStudy: "nyumbanapp",
    image: nyumbanapp,
    url: "https://nyumbanapp.com",
    description: `Rental platform for Uganda on web and mobile. Landlords list properties, manage units and track rent;
    tenants browse verified listings, book tours, pay rent with mobile money and message landlords in-app.`,
    links: [
      { label: "Web App", url: "https://web.nyumbanapp.com/app" },
      { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.londoncore.nyumbanapp" },
      { label: "Forum", url: "https://forum.nyumbanapp.com/trending/" },
    ],
    stack: ["React Native", "Next.js", "TypeScript", "TanStack", "PostgreSQL"],
  },
  {
    title: "ClarityDesk",
    caseStudy: "claritydesk",
    image: claritydesk,
    url: "https://claritydesk.org",
    description: `Civic fact-checking platform for the South Sudan 2026 elections — fact-checks, election updates and an
    official document repository. Built offline-first for areas without reliable internet.`,
    links: [
      { label: "App Store", url: "https://apps.apple.com/app/the-claritydesk/id6760489094" },
      { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.claritydesk" },
    ],
    stack: ["React Native", "TypeScript", "Offline-first"],
  },
  {
    title: "RTV Implementation Management System",
    caseStudy: "rtv-ims",
    description: `Internal platform for Raising The Village field teams in four countries: agriculture, savings groups,
    training, leadership and household coaching, with adoption dashboards and WorkMate, an embedded AI assistant.`,
    note: "Internal system · mobile app on both stores",
    stack: ["React", "TypeScript", "RTK Query", "TanStack", "ApexCharts"],
  },
  {
    title: "Utility ERP Suite",
    image: billing,
    url: "https://tracecorpsolutions.com",
    description: `Water Billing, Accounting, CRM, HRMS and Asset Management for utilities in Nigeria, Ethiopia and South
    Sudan — eight modules on one shared component library, migrated to strict TypeScript with zero downtime.`,
    stack: ["React", "TypeScript", "TanStack Query", "Zod"],
  },
];

export const archive = [
  { year: "2026", title: "NyumbanApp Community Forum", madeAt: "NyumbanApp", stack: ["React", "React Router", "Tailwind CSS"], url: "https://forum.nyumbanapp.com/trending/" },
  { year: "2025", title: "Dangopay — Utility Payments", madeAt: "Dango Tech", stack: ["Flutter", "React", "Tailwind CSS"], url: "https://play.google.com/store/apps/details?id=com.dangopay" },
  { year: "2025", title: "Nyumba Yo — Property Management", madeAt: "Dango Tech", stack: ["React", "Node.js", "PostgreSQL"], url: "https://dangopay.dangotechconcepts.com/" },
  { year: "2025", title: "Recipe & Task Manager", stack: ["React", "Tailwind CSS", "Shadcn/UI"], url: "https://receipe-task-management.vercel.app" },
  { year: "2022", title: "Yookatale — Grocery Marketplace", madeAt: "Yookatale", stack: ["Next.js", "Node.js", "MongoDB"] },
  { year: "2022", title: "Space Travelers' Hub", stack: ["Next.js", "Tailwind CSS", "Shadcn/UI"], url: "https://amos-space-traver-hub.netlify.app/" },
];

export const socialHandles = [
  { name: "GitHub", icon: <FaGithub />, link: "https://github.com/bigmosi" },
  { name: "LinkedIn", icon: <FaLinkedin />, link: "https://www.linkedin.com/in/kinyera-amos/" },
  { name: "X (Twitter)", icon: <FaXTwitter />, link: "https://x.com/kinyera_amos" },
  { name: "Email", icon: <MdOutlineAlternateEmail />, link: "mailto:kinyeramo@gmail.com" },
];
