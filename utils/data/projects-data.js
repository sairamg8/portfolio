// Source of truth: the résumé. The homepage shows the first four entries, in this order.
// code/demo: public links only. These are client projects, so they are left empty.
export const projectsData = [
  {
    id: 1,
    name: "Make a Payment – NatWest Group",
    description:
      "Refined the 'Make a Payment' journey on NatWest's consumer banking platform with fluid micro-transitions and real-time field validation that reduce payment form errors. Built accessible components to WCAG 2.1, with full keyboard navigation and screen reader support across the payment flow, while shipping through NatWest's Ways of Working (WoW) Agile process.",
    tools: ["React", "TypeScript", "Tailwind CSS", "Accessibility (WCAG 2.1)", "CI/CD"],
    role: "Software Engineer",
    code: "",
    demo: "",
  },
  {
    id: 2,
    name: "RFP Internal AI Tool – Philips Healthcare",
    description:
      "Led the architecture and end-to-end build of an AI-powered RFP management platform, modeled on enterprise tools like RFPIO and Loopio, that helps healthcare teams answer RFPs faster through content reuse and smart suggestions. Designed a recursive section and subsection editor with drag-and-drop reordering, improved perceived responsiveness by 70% with memoization, API batching and caching, and rendered 10,000+ row audit trails smoothly with list virtualization. Mentored two junior developers and set up CI/CD that cut deployment time by 20%.",
    tools: [
      "React 18",
      "Redux Toolkit",
      "Context API",
      "React Hook Form",
      "Yup",
      "Dnd Kit",
      "TanStack Virtual",
      "Filament (internal library)",
      "GitHub CI/CD",
    ],
    role: "Lead Developer",
    code: "",
    demo: "",
  },
  {
    id: 3,
    name: "Contentful Experience Website – Philips Healthcare",
    description:
      "Led the frontend revamp of Philips' customer-facing healthcare content platform on Next.js 14 and Contentful CMS, delivering 40% faster load times and better Core Web Vitals. Removed critical performance bottlenecks with code splitting, lazy loading, SSR and ISR caching.",
    tools: ["Next.js 14", "React 18", "Vanilla Extract CSS", "Context API", "Contentful CMS"],
    role: "Lead Developer",
    code: "",
    demo: "",
  },
  {
    id: 4,
    name: "Paywize – B2B Payment Ecosystem",
    description:
      "Architected a secure B2B payment platform for merchants and distributors across UPI QR, virtual account and wallet transfer channels. Built JWT authentication and role-based access control (RBAC) for multi-tier access policies, and tuned API responses and database schemas to sustain 1,000+ concurrent users at sub-500ms response times.",
    tools: [
      "React 18",
      "Redux Toolkit",
      "Material UI",
      "React Hook Form",
      "Yup",
      "Node.js",
      "Express.js",
      "PostgreSQL",
    ],
    role: "Developer",
    code: "",
    demo: "",
  },
  {
    id: 5,
    name: "FinEase – Stock Market Trading Platform",
    description:
      "Built a brokerage interface on Next.js SSR, improving SEO visibility and speeding up feature delivery across trading modules. Engineered real-time Chart.js visualizations, optimized with memoization and lazy loading, that handle high-frequency stock updates without UI degradation, and defined Redux Toolkit state patterns adopted team-wide.",
    tools: ["Next.js", "React 18", "Redux Toolkit", "Material UI", "Chart.js", "Sass", "CSS Modules"],
    role: "Developer",
    code: "",
    demo: "",
  },
  {
    id: 6,
    name: "Ingram Micro – B2B E-commerce Platform",
    description:
      "Modernized the legacy frontend of Ingram Micro's high-traffic B2B e-commerce platform for enterprise buyers worldwide, rebuilding product browsing and ordering in React and cutting initial load time by 25%. Reworked multi-step bulk order forms and state management with Zustand and Context API.",
    tools: ["React 17", "Zustand", "Context API", "Bootstrap", "Ant Design", "CSS-in-JS"],
    role: "Developer",
    code: "",
    demo: "",
  },
  {
    id: 7,
    name: "Pfizer – Healthcare Communication",
    description:
      "Developed responsive healthcare web apps and email templates for Pfizer's global communication campaigns, built to work across devices for pharmaceutical reps and healthcare professionals. Built internal tools and campaign microsites for Pfizer's marketing and medical affairs teams, and won the 'Best Sprinter' award three times in a row.",
    tools: ["React", "Bootstrap", "Tailwind CSS", "Veeva Vault", "Salesforce"],
    role: "Developer",
    code: "",
    demo: "",
  },
];
