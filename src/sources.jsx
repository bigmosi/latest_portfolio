import ecommerce1 from "./assets/ecommerce1.jpg";
import nyumbanapp from "./assets/nyumbanapp.jpg";
import claritydesk from "./assets/claritydesk.jpg";
import nyumbanappForum from "./assets/nyumbanapp-forum.jpg";
import rental from "./assets/rental.png";
import billing from "./assets/billing.png";
import rocket from "./assets/rocket.jpg";
import payment from "./assets/payment.jpg";
import recipe from "./assets/recipe.jpg";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { MdOutlineAlternateEmail, MdOutlineDashboard } from "react-icons/md";
import { FaServer, FaLaptopCode } from "react-icons/fa";
import { RiExchange2Fill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import {
  FaXTwitter,
  FaLinkedin,
  FaGithub,
  FaLayerGroup,
  FaMobileScreen,
} from "react-icons/fa6";

export const tabs = [
  { name: "About", id: "about" },
  { name: "Experience", id: "experience" },
  { name: "Skills", id: "skill" },
  { name: "Services", id: "services" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

export const stats = [
  { value: 6, suffix: "+", label: "Years of experience" },
  { value: 7, suffix: "", label: "Countries with live deployments" },
  { value: 3, suffix: "+", label: "Apps live on App Store & Play Store" },
];

export const whyChooseMe = [
  {
    title: "End-to-end delivery: React frontends, Node.js APIs, PostgreSQL",
    icon: <FaLayerGroup />,
  },
  {
    title: "Strict TypeScript with Zod types shared across API, routes & forms",
    icon: <SiTypescript />,
  },
  {
    title: "Production mobile apps on the App Store & Play Store",
    icon: <FaMobileScreen />,
  },
  {
    title: "Offline-first apps for low-connectivity regions",
    icon: <RiExchange2Fill />,
  },
];

export const experience = [
  {
    role: "Senior Front-End Developer",
    company: "Raising The Village",
    period: "Oct 2025 – Present",
    location: "Mbarara, Uganda · On-site",
    points: [
      "Build the implementation management system that field officers, coaches and program managers use to track household-level development work across Uganda, Rwanda, DRC and Tanzania.",
      "Shipped the Agriculture, VSLA & Savings, Training, Leadership and Coaching modules — forms, tables, reporting views and compliance/adoption dashboards filterable by region, district, cluster, village, cohort and cycle.",
      "Built WorkMate, an embedded AI chat assistant that lets program staff query program data conversationally.",
    ],
    stack: ["React", "TypeScript", "RTK Query", "TanStack Router", "TanStack Query", "TanStack Form", "Ant Design", "ApexCharts"],
  },
  {
    role: "Full Stack Developer",
    company: "NyumbanApp",
    period: "Jan 2025 – Present",
    location: "Kampala, Uganda",
    points: [
      "Building nyumbanapp.com — a rental platform connecting landlords and tenants across Uganda — on web and React Native mobile.",
      "Landlord and tenant flows for listings, applications, tour scheduling, in-app messaging and payment history, with role-based access for landlords, tenants, agents and admins.",
      "Integrated Dusupay for mobile money (MTN, Airtel) and bank transfer rent payments with real-time status for both sides.",
      "Built the NyumbanApp community forum (forum.nyumbanapp.com) where landlords and tenants discuss rentals, share suggestions and report bugs.",
    ],
    stack: ["React Native", "Next.js", "TypeScript", "TanStack Query", "Tailwind CSS", "Shadcn/UI", "Node.js", "PostgreSQL"],
  },
  {
    role: "Full Stack Developer (Contract)",
    company: "Dango Tech Concept Limited",
    period: "Jan 2025 – Jan 2026",
    location: "Kampala, Uganda",
    points: [
      "Built ClarityDesk in React Native — an offline-first civic app for the South Sudan 2026 elections, live on the App Store and Play Store.",
      "Built Dangopay in Flutter — a rent and water bill payment app processing real mobile money transactions, live on Google Play.",
      "Delivered Nyumba Yo (property management), Wellowe (fashion e-commerce) and a Next.js platform with Docker, NGINX and CI/CD set up from zero; streamed OpenAI responses from FastAPI over WebSocket.",
    ],
    stack: ["React Native", "Flutter", "Next.js", "TanStack", "Zod", "FastAPI", "Docker"],
  },
  {
    role: "Senior Front-End Developer",
    company: "Tracecorp Solutions",
    period: "May 2023 – Sep 2025",
    location: "Kampala, Uganda",
    points: [
      "Led the frontend across a full utility ERP — Accounting, Water Billing, CRM, HRMS and Asset Management — running at water utilities in Nigeria, Ethiopia and South Sudan, including Lagos Water Corporation.",
      "Built the shared component library and design system used across all eight modules.",
      "Led a zero-downtime JavaScript → TypeScript migration on the live codebase, ran code reviews and set frontend standards for the team.",
    ],
    stack: ["React", "TypeScript (strict)", "TanStack Query", "Zod", "Design System"],
  },
  {
    role: "Full Stack Developer",
    company: "Yookatale",
    period: "Feb 2020 – Nov 2022",
    location: "Kampala, Uganda",
    points: [
      "Owned the web platform for Uganda's online grocery and food-delivery marketplace end to end.",
      "Built cart, search, checkout (mobile money, cards, cash on delivery, YooCard), order tracking, meal-plan subscriptions, loyalty points and a vendor portal.",
      "Cut load time by 20% through Next.js optimisation and code splitting; shipped Flutter apps for Android and iOS alongside the web.",
    ],
    stack: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Flutter"],
  },
];

export const education = [
  {
    title: "BSc Information Technology",
    school: "Kyambogo University, Uganda",
    period: "2015 – 2018",
  },
  {
    title: "Full-Stack Web Development Bootcamp",
    school: "Microverse (Remote)",
    period: "2022",
  },
];

export const services = [
  {
    name: "Full Stack Web Apps",
    icon: <FaLaptopCode />,
    description: `Product-ready web apps from first commit to production — React and the TanStack ecosystem on the
    frontend, Node.js and PostgreSQL behind it, Dockerised with CI/CD.`,
  },
  {
    name: "APIs & Backend Services",
    icon: <FaServer />,
    description: `REST and GraphQL APIs with Express or NestJS, auth (JWT, OAuth2, RBAC), webhooks, WebSockets and
    well-designed PostgreSQL schemas with Prisma or TypeORM.`,
  },
  {
    name: "Dashboards & Internal Tools",
    icon: <MdOutlineDashboard />,
    description: `Data-heavy admin panels with tables, filters, forms and charts — TanStack Query for caching,
    invalidation and optimistic updates, built on a shared component library.`,
  },
  {
    name: "Cross-Platform Mobile Apps",
    icon: <FaMobileScreen />,
    description: `React Native (Expo, EAS Build) and Flutter apps — including offline-first builds for areas with
    unreliable internet — shipped to the App Store and Play Store.`,
  },
];

export const skills = [
  {
    title: "Frontend",
    data: ["React", "Next.js", "TypeScript (strict)", "JavaScript (ES6+)", "Vite", "Webpack"],
  },
  {
    title: "TanStack & State",
    data: ["TanStack Router", "TanStack Query", "TanStack Form", "Zod", "Redux Toolkit / RTK Query", "Zustand"],
  },
  {
    title: "Styling & UI",
    data: ["Tailwind CSS", "Shadcn/UI", "Radix UI", "Ant Design", "SCSS", "ApexCharts", "Recharts"],
  },
  {
    title: "Backend",
    data: ["Node.js", "Express", "NestJS", "REST", "GraphQL", "WebSocket", "Python / FastAPI", "OpenAI API"],
  },
  {
    title: "Auth & APIs",
    data: ["JWT", "OAuth2 / OIDC", "2FA", "RBAC", "Webhooks", "Rate limiting"],
  },
  {
    title: "Databases",
    data: ["PostgreSQL", "MySQL", "Prisma", "TypeORM", "MongoDB", "SQLite", "Redis"],
  },
  {
    title: "Mobile",
    data: ["React Native", "Expo", "EAS Build", "Flutter / Dart", "Offline-first"],
  },
  {
    title: "DevOps & Quality",
    data: ["Docker", "GitHub Actions", "AWS", "NGINX", "Vitest", "Jest", "Playwright", "Cypress", "React Testing Library", "Sentry"],
  },
];

export const projects = [
  {
    id: 1,
    title: "NyumbanApp — Rental Platform",
    image: nyumbanapp,
    category: "Products",
    description: `A rental property platform connecting landlords and tenants across Uganda, on web and mobile.
    Landlords list properties, manage units, review applications and track rent; tenants browse verified listings,
    book tours, pay rent via mobile money and message landlords in-app.`,
    links: [
      { label: "Website", url: "https://nyumbanapp.com" },
      { label: "Web App", url: "https://web.nyumbanapp.com/app" },
      { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.londoncore.nyumbanapp" },
    ],
    stack: ["React Native", "Next.js", "TypeScript", "TanStack", "Tailwind", "PostgreSQL"],
  },
  {
    id: 10,
    title: "NyumbanApp Community Forum",
    image: nyumbanappForum,
    category: "Products",
    description: `A community forum where NyumbanApp landlords and tenants ask questions, share suggestions and report
    bugs. New, Best and Trending feeds, categories and tags, likes, view counts, sharing, search with a ⌘K shortcut,
    language switching and light/dark themes.`,
    links: [{ label: "Live", url: "https://forum.nyumbanapp.com/trending/" }],
    stack: ["React", "React Router", "Tailwind CSS", "Vite"],
  },
  {
    id: 2,
    title: "RTV Implementation Management System",
    category: "Enterprise",
    description: `Internal platform used by Raising The Village field officers and program managers across four
    countries. Agriculture, savings groups, training, leadership and household coaching modules, with compliance
    and adoption dashboards and WorkMate — an embedded AI assistant for querying program data.`,
    note: "Internal system · Mobile app on App Store & Play Store",
    stack: ["React", "TypeScript", "RTK Query", "TanStack Router", "Ant Design", "ApexCharts"],
  },
  {
    id: 3,
    title: "Utility ERP Suite",
    image: billing,
    category: "Enterprise",
    description: `Frontend lead on an ERP for water utilities in Nigeria, Ethiopia and South Sudan — Water Billing,
    Accounting, CRM, HRMS and Asset Management — built on a shared component library across eight modules, with a
    zero-downtime JavaScript to TypeScript migration.`,
    note: "Client deployments · Tracecorp Solutions",
    links: [{ label: "Tracecorp", url: "https://tracecorpsolutions.com" }],
    stack: ["React", "TypeScript", "TanStack Query", "Zod"],
  },
  {
    id: 4,
    title: "ClarityDesk",
    image: claritydesk,
    category: "Mobile",
    description: `A civic fact-checking platform for the South Sudan 2026 elections — mobile app plus claritydesk.org.
    Fact-checks, election updates and an official document repository, built offline-first for areas with no reliable
    internet and published on both the App Store and Play Store.`,
    links: [
      { label: "Website", url: "https://claritydesk.org" },
      { label: "App Store", url: "https://apps.apple.com/app/the-claritydesk/id6760489094" },
      { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.claritydesk" },
    ],
    stack: ["React Native", "TypeScript", "Offline-first"],
  },
  {
    id: 5,
    title: "Dangopay — Utility Payments",
    image: payment,
    category: "Mobile",
    description: `A payment app for rent and water bills in Uganda, processing real mobile money transactions.
    Flutter mobile app on Google Play plus a web payment portal.`,
    links: [
      { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.dangopay" },
      { label: "Web", url: "https://dangopay.dangotechconcepts.com/#/make-utility-payment" },
    ],
    stack: ["Flutter", "React", "Tailwind", "Shadcn/UI"],
  },
  {
    id: 6,
    title: "Nyumba Yo — Property Management",
    image: rental,
    category: "Products",
    description: `Property management system covering landlord listings, tenant management, rent invoicing and
    payment tracking, with role-based access for landlords, agents and tenants.`,
    links: [{ label: "Live", url: "https://dangopay.dangotechconcepts.com/" }],
    stack: ["React", "Node.js", "Express", "PostgreSQL"],
  },
  {
    id: 7,
    title: "Yookatale — Grocery Marketplace",
    image: ecommerce1,
    category: "Products",
    description: `Uganda's online grocery and food-delivery marketplace. Owned the web platform end to end: catalogue,
    search, multi-method checkout, order tracking, meal-plan subscriptions, loyalty and a vendor portal. Cut load time
    by 20% with Next.js optimisation and code splitting.`,
    stack: ["Next.js", "TypeScript", "Node.js", "MongoDB"],
  },
  {
    id: 8,
    title: "Recipe App",
    image: recipe,
    category: "Side Projects",
    description: `Discover, save and share recipes with search and filters, step-by-step instructions and ingredient
    lists, in a responsive interface.`,
    links: [{ label: "Live", url: "https://receipe-task-management.vercel.app" }],
    stack: ["React", "Tailwind", "Shadcn/UI"],
  },
  {
    id: 9,
    title: "Space Travelers' Hub",
    image: rocket,
    category: "Side Projects",
    description: `Rocket and mission explorer with launch details, mission profiles and launch history, built as a
    responsive single-page app.`,
    links: [{ label: "Live", url: "https://amos-space-traver-hub.netlify.app/" }],
    stack: ["Next.js", "Tailwind", "Shadcn/UI"],
  },
];

export const contactOptions = [
  {
    title: "Email",
    value: "kinyeramo@gmail.com",
    href: "mailto:kinyeramo@gmail.com",
    icon: <MdOutlineAlternateEmail />,
  },
  {
    title: "Phone",
    value: "+256 777 349 597",
    href: "tel:+256777349597",
    icon: <IoCallOutline />,
  },
  {
    title: "Location",
    value: "Uganda · Open to remote",
    icon: <IoLocationOutline />,
  },
];

export const socialHandles = [
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/kinyera-amos/",
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    link: "https://github.com/bigmosi",
  },
  {
    name: "X (Twitter)",
    icon: <FaXTwitter />,
    link: "https://x.com/kinyera_amos",
  },
];
