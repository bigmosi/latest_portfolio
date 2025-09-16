import client1 from "./assets/client-1.jpeg";
import client2 from "./assets/client-2.jpeg";
import client3 from "./assets/client-3.jpeg";
import client4 from "./assets/client-4.jpeg";
import client5 from "./assets/client-5.jpeg";
import ecommerce1 from "./assets/ecommerce1.jpg";
import rental from "./assets/rental.png";
import billing from "./assets/billing.png";
import rocket from "./assets/rocket.png";
import hrms from "./assets/hrms.png";
import crm from "./assets/crm.png";
import account from "./assets/account.png";
import payment from "./assets/payment.png";
import recipe from "./assets/recipe.png";
import { IoMdAnalytics } from "react-icons/io";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { GrUserExpert } from "react-icons/gr";
import { MdOutlineSupportAgent, MdOutlineAlternateEmail } from "react-icons/md";
import { RiExchange2Fill } from "react-icons/ri";
import {
  FaXTwitter,
  FaLaptopCode,
  FaNetworkWired,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa6";
import { DiReact } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
import { CgFigma } from "react-icons/cg";
import { TbBrandReactNative } from "react-icons/tb";
import { SiAdobexd } from "react-icons/si";

export const tabs = [
  { name: "About Me", id: "about" },
  { name: "Skill", id: "skill" },
  { name: "Services", id: "services" },
  { name: "Projects", id: "projects" },
  { name: "Testimonials", id: "testimonials" },
];

export const whyChooseMe = [
  {
    title: "Extensive Field Deployment Experience",
    icon: <GrUserExpert />,
    link: "",
  },
  {
    title: "Data-Driven Decision Making",
    icon: <IoMdAnalytics />,
    link: "",
  },
  {
    title: "Client-Centered Engineering Solutions",
    icon: <MdOutlineSupportAgent />,
    link: "",
  },
  {
    title: "Innovative Offline-First Architectures",
    icon: <RiExchange2Fill />,
    link: "",
  },
];
export const services = [
  {
    name: "Full Stack Web Development",
    icon: <FaLaptopCode />,
    description: `I build responsive, scalable, and efficient web applications using modern stacks including 
    React, Next.js, Node.js, Ruby on Rails, and MongoDB. From building APIs to crafting pixel-perfect UIs, 
    I deliver full-fledged solutions tailored to real business needs.`,
  },
  {
    name: "Enterprise Systems Implementation",
    icon: <FaNetworkWired />,
    description: `Experienced in deploying ERP systems for utility and government sectors, with a focus on 
    Accounting, CRM, Billing, and Asset Management. I ensure seamless setup, offline capability, and long-term 
    support for operations in remote or low-connectivity environments.`,
  },
  {
    name: "Mobile App Development",
    icon: <TbBrandReactNative />,
    description: `I develop intuitive and offline-capable mobile apps using React Native. These apps empower 
    field agents and end-users with real-time capabilities, from billing systems to HR self-service tools.`,
  },
];

export const skills = [
  {
    title: "UI/UX",
    data: [
      {
        skill: "Figma",
        level: "Experienced",
      },
      {
        skill: "Sketch",
        level: "Intermediate",
      },
      {
        skill: "XD",
        level: "Intermediate",
      },
    ],
  },
  {
    title: "Frontend Development",
    data: [
      {
        skill: "HTML",
        level: "Experienced",
      },
      {
        skill: "CSS",
        level: "Experienced",
      },
      {
        skill: "JavaScript",
        level: "Experienced",
      },
      {
        skill: "Tailwind",
        level: "Intermediate",
      },
      {
        skill: "Bootstrap",
        level: "Intermediate",
      },
      {
        skill: "React",
        level: "Experienced",
      },
      {
        skill: "React Native",
        level: "Experienced",
      },
    ],
  },
  {
    title: "Backend Development",
    data: [
      {
        skill: "Node JS",
        level: "Experienced",
      },
      {
        skill: "MongoDB",
        level: "Intermediate",
      },
      {
        skill: "Ruby on Rails",
        level: "Intermediate",
      },
      {
        skill: ".Net",
        level: "Intermediate",
      },
      {
        skill: "MySQL",
        level: "Experienced",
      },
      {
        skill: "Postgresql",
        level: "Experienced",
      },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "ECommerce Web Application",
    image: ecommerce1,
    category: "Web",
    description: `Enhance your online shopping experience with our E-Commerce Application 
      UI design project. Seamlessly blending aesthetics with functionality, our intuitive 
      interface offers easy navigation, personalized recommendations, and secure 
      transactions. Elevate your digital storefront and captivate customers with a visually 
      stunning design tailored to your brand`,
    demoLink: "http://localhost:5173/",
    stack: [
      {
        name: "NextJs",
        icon: <SiAdobexd />,
        iconColor: "skyblue",
      },
      {
        name: "NodeJs",
        icon: <FaNodeJs />,
        iconColor: "green",
      },
      {
        name: "ExpressJs",
        icon: <SiExpress />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
        iconColor: "limegreen",
      },
    ],
  },
  {
    id: 2,
    title: "Rental Management System",
    image: rental,
    category: "Web",
    description: `
    Developed a comprehensive Rental Management System designed to streamline the operations of landlords, property managers, and tenants. The platform enables efficient property listing, tenant onboarding, rent invoicing, and automated payment tracking.

    Key features include:
    - Property and unit management with status tracking
    - Tenant registration and lease agreement management
    - Automated rent billing and overdue notifications
    - Payment history and receipt generation
    - Admin dashboard with real-time analytics and reporting
    - Role-based access for landlords, agents, and tenants

    The system was built with scalability in mind and optimized for mobile responsiveness, ensuring a seamless experience across devices. It also supports offline-first functionality for field agents managing properties in low-connectivity areas.
  `,
    demoLink: "https://dangopay.dangotechconcepts.com/",
    stack: [
      {
        name: "ReactJs",
        icon: <DiReact />, 
        iconColor: "skyblue",
      },
      {
        name: "NodeJs",
        icon: <FaNodeJs />, 
        iconColor: "green",
      },
      {
        name: "ExpressJs",
        icon: <SiExpress />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />, 
        iconColor: "limegreen",
      },
    ],
  },
  {
    id: 3,
    title: "Water Billing System",
    image: billing,
    category: "Web",
    description: `
    Engineered a robust Water Billing System tailored for utility companies and municipal governments to automate the metering, billing, and payment tracking processes for water usage.

    Key features include:
    - Customer registration and meter assignment
    - Monthly meter readings and automatic bill generation
    - Tariff management with configurable rate slabs
    - SMS and email notifications for billing alerts
    - Secure payment gateway integration
    - Real-time usage tracking and billing analytics dashboard
    - Role-based access for administrators, field agents, and customers

    Designed to work efficiently in both online and offline modes, especially for field agents collecting data in remote areas. The system significantly reduced revenue leakage and improved operational transparency.
  `,
    stack: [
      {
        name: "ReactJs",
        icon: <DiReact />,
        iconColor: "skyblue",
      },
      {
        name: "NodeJs",
        icon: <FaNodeJs />,
        iconColor: "green",
      },
      {
        name: "ExpressJs",
        icon: <SiExpress />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
        iconColor: "limegreen",
      },
      {
        name: "MongoDBT",
        icon: <SiMongodb />,
      },
      {
        name: "MongoDBT",
        icon: <SiMongodb />,
      },
      {
        name: "MongoDBT",
        icon: <SiMongodb />,
      },
    ],
  },
  {
    id: 4,
    title: "Human Resource Management application(HRMS)",
    image: hrms,
    category: "Apps",
    description: `
    Built a comprehensive Human Resource Management System (HRMS) to streamline employee administration, improve HR workflows, and centralize personnel data for organizations.

    Key Features:
    - Employee onboarding and digital profile management
    - Attendance tracking and leave request approvals
    - Payroll processing with salary breakdowns and tax deductions
    - Performance appraisals and KPI tracking
    - Role-based user management (HR, Employee, Admin)
    - Document management (contracts, ID uploads, certificates)
    - Secure login with activity logs and audit trails

    The system supports integration with biometric devices for attendance and is optimized for both desktop and mobile use. It offers HR teams a scalable and intuitive platform to manage the full employee lifecycle, from recruitment to retirement.
  `,
    demoLink: "http://3.216.182.63:8067/",
    stack: [
      {
        name: "React Native",
        icon: <TbBrandReactNative />,
        iconColor: "skyblue",
      },
      {
        name: "NodeJs",
        icon: <FaNodeJs />,
        iconColor: "green",
      },
      {
        name: "ExpressJs",
        icon: <SiExpress />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
        iconColor: "limegreen",
      },
    ],
  },
  {
    id: 5,
    title: "Accounting Application",
    image: account,
    category: "app",
    description: `Developed a feature-rich Accounting Application tailored for small to medium-sized enterprises (SMEs) and government agencies to streamline financial management and ensure compliance.
Key Features:
- Multi-ledger support including General, Sales, and Purchase Ledgers
- Invoice generation and payment tracking
- Budget planning and expense categorization
- Bank reconciliation and audit trail logs
- Real-time financial reporting (P&L, Balance Sheet, Cash Flow)
- User role management with access controls
- Export functionality for reports in PDF and Excel formats

The app is optimized for both desktop and mobile usage, ensuring accessibility for finance teams and decision-makers on the go. Built with scalability in mind, it supports offline-first operations and secure cloud sync.`,
    demoLink: "http://3.216.182.63:8067/",
    stack: [
      {
        name: "Figma",
        icon: <CgFigma />,
        iconColor: "orangered",
      },
    ],
  },
  {
    id: 6,
    title: "Customer Relationship Management (CRM) Application",
    image: crm,
    category: "Apps",
    description: `
Designed and developed a comprehensive Customer Relationship Management (CRM) Application to help organizations streamline client interactions, boost sales performance, and enhance customer retention.

Key Features:
- Centralized customer database with detailed profiles
- Sales pipeline and opportunity tracking
- Lead management with status updates and notes
- Automated follow-up reminders and communication logs
- Task and activity scheduling for teams
- Customizable reporting dashboard for sales analytics
- Role-based access for managers, agents, and support staff
- Integration-ready APIs for third-party tools (email, SMS, etc.)

Built with an intuitive UI and optimized for mobile responsiveness, this CRM empowers sales and support teams to manage relationships efficiently—anytime, anywhere. Offline capability ensures seamless usage even in low-connectivity regions.`,
    demoLink: "http://3.216.182.63:8067/",
    stack: [
      {
        name: "React Native",
        icon: <TbBrandReactNative />,
        iconColor: "skyblue",
      },
      {
        name: "NodeJs",
        icon: <FaNodeJs />,
        iconColor: "green",
      },
      {
        name: "ExpressJs",
        icon: <SiExpress />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
        iconColor: "limegreen",
      },
    ],
  },
  {
    id: 7,
    title: "Utility Payments",
    image: payment,
    category: "Web",
    description: `Developed a comprehensive Utility Payments platform to streamline bill payment for users. The platform allows users to pay their utility bills (water) seamlessly and securely.

Key Features:
- User-friendly interface for easy navigation
- Secure payment gateway integration
- Real-time payment tracking and notifications
- Bill reminders and history
- Multi-language support
- Admin dashboard for managing utilities and users

Built with a focus on security and user experience, this platform ensures that users can manage their utility payments with confidence and ease.`,
    demoLink: "https://dangopay.dangotechconcepts.com/#/make-utility-payment",
    stack: [
      {
        name: "ReactJs",
        icon: <DiReact />,
        iconColor: "skyblue",
      },
      {
        name: "TailwindCSS",
        icon: <SiAdobexd />,
        iconColor: "skyblue",
      },
      {
        name: "ShadcnUI",
        icon: <SiAdobexd />,
        iconColor: "skyblue",
      },
    ],
  },
  {
    id: 8,
    title: "Recipe App",
    image: recipe,
    category: "Web",
    description: `Developed a feature-rich Recipe App that allows users to discover, save, and share their favorite recipes. The app provides a seamless experience for food enthusiasts to explore a wide variety of dishes and cooking techniques.
Key Features:
- Extensive recipe database with search and filter options
- User accounts for saving and sharing recipes
- Step-by-step cooking instructions with images
- Ingredient lists with nutritional information
- Social sharing capabilities
- Responsive design for mobile and desktop use

Built with a focus on user experience and community engagement, this app is perfect for anyone looking to enhance their culinary skills and connect with fellow food lovers.`,
    demoLink: "https://receipe-task-management.vercel.app",
    stack: [
      {
        name: "ReactJs",
        icon: <DiReact />,
        iconColor: "skyblue",
      },
      {
        name: "TailwindCSS",
        icon: <SiAdobexd />,
        iconColor: "skyblue",
      },
      {
        name: "ShadcnUI",
        icon: <SiAdobexd />,
        iconColor: "skyblue",
      },
    ],
  },
  {
    id: 9,
    title: "Rocket Launch",
    image: rocket,
    category: "Web",
    description: `Developed a visually stunning Rocket Launch website that provides users with real-time information about upcoming rocket launches, mission details, and launch history. The website offers an engaging experience for space enthusiasts and professionals alike.
Key Features:
- Real-time launch schedule with countdown timers
- Detailed mission profiles with objectives and payload information
- Interactive launch history with past missions and outcomes
- News and updates related to space exploration
- Responsive design for optimal viewing on all devices

Built with a focus on user engagement and accessibility, this website serves as a comprehensive resource for anyone interested in the exciting world of rocket launches and space exploration.`,
    demoLink: "https://amos-space-traver-hub.netlify.app/",
    stack: [
      {
        name: "NextJs",
        icon: <SiAdobexd />,
        iconColor: "skyblue",
      },
      {
        name: "TailwindCSS",
        icon: <SiAdobexd />,
        iconColor: "skyblue",
      },
      {
        name: "ShadcnUI",
        icon: <SiAdobexd />,
        iconColor: "skyblue",
      },
    ],
  },
];

export const clients = [
  {
    image: client1,
    name: "Samuel Eze",
    review: `You transformed our content into pure magic!`,
  },
  {
    image: client2,
    name: "Richael Linda",
    review: ` Our brand's success soared to new heights, thanks to Muhumuza's exceptional content creation abilities`,
  },
  {
    image: client3,
    name: "Gloria Chiwendu",
    review: ` Our collaboration with Muhumuza for content creation has been an absolute game-changer, delivering outstanding results that have left us thrilled and inspired.`,
  },
  {
    image: client4,
    name: "Precious Stone",
    review: ` Through the fusion of code and imagination, Muhumuza crafts digital wonders that transcend the boundaries of possibility.`,
  },
  {
    image: client5,
    name: "Ndubisi John",
    review: ` From seamless user experiences to cutting-edge functionality, Muhumuza is the architect of captivating web solutions that leave a lasting impression.`,
  },
];

export const contactOptions = [
  {
    title: "Email",
    value: "kinyeramo@gmail.com",
    icon: <MdOutlineAlternateEmail />,
  },
  {
    title: "Phone Number",
    value: "+256777349597",
    icon: <IoCallOutline />,
  },
  {
    title: "Address",
    value: "Kampala Uganda",
    icon: <IoLocationOutline />,
  },
];

export const socialHandles = [
  {
    name: "Linkedin",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/kinyera-amos/",
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    link: "https://github.com/bigmosi",
  },
  {
    name: "Twitter",
    icon: <FaXTwitter />,
    link: "https://x.com/@kinyera_amos",
  },
];

export const footer = [
  {
    title: "Explore",
    routes: [
      { name: "About Me", id: "about" },
      { name: "Skill", id: "skill" },
    ],
  },
  {
    title: "Trusted",
    routes: [
      { name: "Services", id: "services" },
      { name: "Projects", id: "projects" },
      { name: "Testimonials", id: "testimonials" },
    ],
  },
  {
    title: "Others",
    routes: [
      { name: "Privacy Policy" },
      { name: "Terms and Conditions" },
      { name: "Cookie Policy" },
    ],
  },
];
