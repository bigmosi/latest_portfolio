import nyumbanappMarket from "./assets/nyumbanapp-market.png";
import nyumbanappSaved from "./assets/nyumbanapp-saved.png";
import claritydesk from "./assets/claritydesk.jpg";
import rtvDashboard from "./assets/rtv-ims-dashboard.png";

// Case studies are drafted from commit history. `todo` items are only shown in
// development so the gaps can be filled before publishing.
export const caseStudies = [
  {
    slug: "rtv-ims",
    title: "RTV Implementation Management System",
    tagline: "Turning field visits in four countries into dashboards program teams can act on.",
    image: rtvDashboard,
    period: "Oct 2025 — Present",
    role: "Senior Front-End Developer",
    team: "Six-person engineering team · second-largest contributor (300+ commits in year one)",
    stack: ["React", "TypeScript", "Redux Toolkit Query", "TanStack Router", "TanStack Query", "TanStack Form", "Ant Design", "ApexCharts"],
    links: [{ label: "Raising The Village", url: "https://raisingthevillage.org" }],
    overview: `Raising The Village works with households in last-mile communities across Uganda, Rwanda, DRC and
    Tanzania. Its implementation management system is the internal tool field officers, coaches and program managers
    use to record that work — seed and livestock distribution, savings groups, trainings, community champions and
    household coaching visits — and to monitor how programs are doing.`,
    problem: `Every program records different things, but managers ask the same questions of all of them: which
    households were reached, what they adopted, and where coverage is falling behind. Answering that means reports
    that slice by region, district, cluster, village, cohort and cycle, dashboards whose numbers match the services
    behind them, and screens that work on the tablets and phones staff carry in the field.`,
    contributions: [
      {
        title: "Rebuilt the app shell and dashboards",
        body: `Moved the main dashboard and the per-program dashboards onto a new responsive layout, so the same screens
        work on a desktop in the office and a tablet in the field — including navigation that gets out of the way on
        small screens.`,
      },
      {
        title: "Program modules",
        body: `Built and maintained forms, tables, reports and exports for Agriculture, Livestock, VSLA and the Village
        Savings Fund, Trainings, Leadership (village, agriculture, WASH and coffee champions, committees, water
        sources) and household check-ins and coaching.`,
      },
      {
        title: "One way to filter every report",
        body: `Standardised filtering on a shared filter form used across report views — geography, cohort, cycle,
        review date ranges, and officer and visit filters for coaching — so a filter behaves the same wherever
        managers use it.`,
      },
      {
        title: "WorkMate chat widget",
        body: `Built the chat interface for WorkMate, an AI assistant backed by an external data-science API, including
        conversation history and persistence so staff can pick up where they left off.`,
      },
    ],
    decisions: [
      {
        title: "Treat wrong numbers as bugs, not cosmetics",
        body: `Several dashboards showed zeroed-out stats or empty charts because UI field names had drifted from the
        microservice responses. I traced and fixed those contract mismatches module by module (VSLA, Livestock,
        Leadership) — a dashboard that is quietly wrong is worse than one that is down.`,
      },
      {
        title: "Shared components over per-module copies",
        body: `Filters, export buttons and report layouts were consolidated into shared pieces with optional props, so
        a fix or new filter lands in every module at once instead of drifting between them.`,
      },
    ],
    outcome: `The system is in daily use by field officers, coaches and program managers across four countries, and
    is the source for program monitoring and adoption reporting.`,
    todo: [
      "Add scale: number of staff using it, households tracked, visits logged per month.",
      "Add one measurable win, e.g. reports that used to take days now take minutes.",
      "Confirm it's OK to describe this internal system publicly at this level of detail.",
    ],
  },
  {
    slug: "nyumbanapp",
    title: "NyumbanApp",
    tagline: "Making rent payments in Uganda traceable for landlords and tenants.",
    image: nyumbanappMarket,
    gallery: [{ src: nyumbanappSaved, alt: "NyumbanApp saved listings screen" }],
    period: "2025 — Present",
    role: "Full Stack Developer",
    team: "Product team of about six · I own payments, refunds and agreement flows, and I'm the largest contributor to the admin panel",
    stack: ["React Native", "React", "TypeScript", "Node.js", "Express", "Prisma", "PostgreSQL", "Flutterwave", "Puppeteer", "AWS S3"],
    links: [
      { label: "nyumbanapp.com", url: "https://nyumbanapp.com" },
      { label: "Web App", url: "https://web.nyumbanapp.com/app" },
      { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.londoncore.nyumbanapp" },
    ],
    overview: `NyumbanApp connects landlords and tenants across Uganda: verified listings, applications and tours,
    rental agreements, rent collection and in-app messaging, on web and on iOS and Android. It is built by a small
    team; my part is the money and the paperwork — payments, refunds, agreements — and the admin tools the team uses
    to run the platform.`,
    problem: `Rent is real money for both sides, and the edge cases are where trust is lost: partial payments, rent
    paid in advance, deposits that need refunding, and tenancies that end with credit or arrears still on the books.
    Every one of those has to reconcile on the backend and be explained clearly on a phone screen.`,
    contributions: [
      {
        title: "Payments, refunds and settlements",
        body: `Rent payments through Flutterwave and manual (recorded) payments, refunds and manual refunds, refunds of
        advance-rent credit against future partial payments, and settlement rules for terminating an agreement with
        credit or rent outstanding — backend logic plus the landlord and tenant screens on web and mobile.`,
      },
      {
        title: "Agreements and documents",
        body: `Agreement acceptance, termination and history flows, and branded documents: company logos on receipts,
        invoices and statements through the shared PDF/HTML pipeline, with a payment-facilitator disclaimer on every
        financial document.`,
      },
      {
        title: "Admin panel",
        body: `Largest contributor to the admin panel — content management, rental agreements, promotions, payments,
        verifications, companies and users — and made the panel usable on phones and tablets.`,
      },
      {
        title: "Mobile hardening",
        body: `Certificate pinning for the production API, Play Console readiness (R8, edge-to-edge, bitmap
        downsampling), a multi-company workspace switcher, and complaint and reporting flows for tenants.`,
      },
    ],
    decisions: [
      {
        title: "Enforce money rules on the server",
        body: `Terminating an agreement is blocked while credit is stranded or rent is owed, and payment actions are
        blocked until a payment gateway is configured. The UI explains the state, but the backend is what guarantees
        it.`,
      },
      {
        title: "Make people confirm the amount",
        body: `Both the rent and manual payment flows show a confirmation step with the amount before submitting —
        cheap to build, and it prevents the most expensive kind of support ticket.`,
      },
      {
        title: "Adopt the design system in slices",
        body: `Moved the admin panel onto the shared @nyumbanapp/ui package and design tokens one piece at a time
        (spinner, form atoms, DataTable), deleting each local copy as it was replaced, so the panel kept shipping
        throughout.`,
      },
    ],
    outcome: `NyumbanApp is live on the web and on Google Play, with landlords collecting rent and tenants paying
    through the platform.`,
    todo: [
      "Add scale: landlords, tenants, properties or monthly rent volume (even rough numbers help).",
      "Add a screenshot of a payment, refund or admin screen you built (the current image is the login page).",
      "Confirm team size (I wrote 'about six' from the commit history).",
      "Your CV says Jan 2025 but your first commits here are Nov 2025 — confirm the start date.",
    ],
  },
  {
    slug: "claritydesk",
    title: "ClarityDesk",
    tagline: "Getting verified election information to South Sudanese readers — even offline.",
    image: claritydesk,
    period: "2026",
    role: "Mobile Developer (contract, via Dango Tech)",
    team: "Three-person team · I owned push notifications and the iOS release",
    stack: ["React Native", "TypeScript", "Firebase Cloud Messaging", "WPGraphQL", "ASP.NET Core"],
    links: [
      { label: "claritydesk.org", url: "https://claritydesk.org" },
      { label: "App Store", url: "https://apps.apple.com/app/the-claritydesk/id6760489094" },
      { label: "Play Store", url: "https://play.google.com/store/apps/details?id=com.claritydesk" },
    ],
    overview: `The ClarityDesk is a fact-checking newsroom covering South Sudan's 2026 elections. The mobile app
    brings its fact-checks, explainers, election announcements and an official document repository to readers' phones,
    pulling content from the newsroom's WordPress site.`,
    problem: `Much of the audience has unreliable or expensive internet, and misinformation moves fastest exactly when
    something important happens. The app had to keep working offline and reach people the moment a new fact-check is
    published.`,
    contributions: [
      {
        title: "Push notifications, end to end",
        body: `Integrated Firebase Cloud Messaging in the app and connected it to the team's notifications service, so
        readers get alerted when new fact-checks and announcements are published — including the production setup for
        iOS.`,
      },
      {
        title: "iOS release",
        body: `Prepared the app for iOS production and took it through to the App Store.`,
      },
      {
        title: "Elections and Documents screens",
        body: `Built and refined the Elections and Documents views alongside the team, plus styling fixes across the
        app.`,
      },
    ],
    decisions: [
      {
        title: "Offline-first by default (team architecture)",
        body: `The app prefetches articles, announcements, candidates and documents on launch, caches them on the
        device, and lets readers save PDFs for offline reading — so it stays useful with no signal.`,
      },
    ],
    outcome: `Live on the App Store and Google Play ahead of the December 2026 elections.`,
    todo: [
      "Add downloads, active readers or notification reach if you have them.",
      "Describe one hard problem you solved on notifications or the iOS release (certificates, APNs, review rejections?).",
      "Known bug to mention or fix first: the Elections countdown shows 0 days.",
    ],
  },
];

export const getCaseStudy = (slug) => caseStudies.find((study) => study.slug === slug);
