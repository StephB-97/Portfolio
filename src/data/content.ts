// ─────────────────────────────────────────────
//  EDIT THIS FILE to personalize your portfolio
// ─────────────────────────────────────────────

export const personal = {
  initials: "SB",
  name: "Stephanie Bernades",
  role: "Software Engineer",
  location: "New York City",
  university: "Hunter College, CUNY",
  tagline: "Backend engineer focused on cloud infrastructure & distributed systems.",
bio1: "I build backend systems designed for environments where reliability isn't optional — serverless event-driven pipelines, cloud infrastructure automation, and data layers that handle real financial workloads. I placed 1st at a Deutsche Bank hackathon building a credit score POC with predictive analytics, and I care about systems that are correct, auditable, and built to scale beyond the prototype.",  bio2: "My focus is cloud-native backend engineering: AWS infrastructure, quantitative data pipelines, and turning raw market data into structured intelligence. I'm drawn to the intersection of software engineering and finance — where the cost of a bad system isn't just a bug ticket.",
  photo: "/profile.jpg",
  github: "https://github.com/StephB-97",        
  linkedin: "https://www.linkedin.com/in/stephanie-bernades/", // ← add your LinkedIn handle
  leetcode: "https://leetcode.com/progress/",  // ← add your LeetCode handle
  resume: "/Bernades_Stephanie_Resume_2026.pdf",
  email: "stephanie.bernades02@myhunter.cuny.edu",
  stats: [
    { value: "2+", label: "Years Coding" },
    { value: "3",  label: "Projects Shipped" },
    { value: "2",  label: "Internships" },
  ],
};

export const projects = [
  {
    title: "Portfolio Management Dashboard",
    desc: "Full-stack investment platform with real-time market data, AI-powered news sentiment analysis (VADER NLP), event-driven portfolio intelligence across 5 financial event categories, and Modern Portfolio Theory optimization. Persistent user data on AWS DynamoDB with Firebase auth.",
    tags: ["Python", "Streamlit", "AWS DynamoDB", "Firebase", "VADER NLP", "SciPy", "yFinance", "Plotly"],
    cta: "LIVE DEMO",
    href: "https://sb-portfolio-management.streamlit.app",
    github: "https://github.com/StephB-97/Portfolio-Management-Dashboard",
  },
  {
    title: "PawPals",
    desc: "Pet social discovery platform with swipe-based and map-based matching, AI-generated pet profiles, and community events. Built with a Next.js frontend, FastAPI AI microservice, PostgreSQL + PostGIS for geospatial queries, and Redis caching — containerized with Docker and deployed on Vercel + AWS.",
    tags: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "OpenAI API", "Docker", "Redis", "Mapbox"],
    cta: "VIEW ON GITHUB",
    href: "https://github.com/StephB-97/PawPals-App",
  },
  {
    title: "Rentals App",
    desc: "Full-stack rental property platform where users can browse, create, edit, and delete listings with image uploads. Features user authentication, session management, server-side form validation, and a RESTful MVC architecture built with Node.js and Express.",
    tags: ["Node.js", "Express", "MongoDB", "EJS", "Cloudinary", "Bootstrap"],
    cta: "LIVE DEMO",
    href: "https://rentals-app-tzkl.onrender.com/",
    github: "https://github.com/StephB-97/Rentals-App",
  },
];

export const skills = [
  {
    category: "Systems & Backend",
    items: "Python · Node.js · FastAPI · REST APIs · Event-Driven Architecture"
  },
  {
    category: "Cloud Infrastructure",
    items: "AWS (Lambda · DynamoDB · RDS · EventBridge) · Docker · Pulumi · GitHub Actions · Vercel"
  },
  {
    category: "Data & Intelligence",
    items: "PostgreSQL · PostGIS · Redis · MongoDB · Pandas · VADER NLP · SciPy (MPT)"
  },
  {
    category: "Frontend & Visualization",
    items: "React · Next.js · TypeScript · Tailwind CSS · Plotly · Streamlit"
  },
  {
    category: "Languages",
    items: "Python · TypeScript · JavaScript (ES6) · SQL · C++ · HTML/CSS"
  },
];
;
