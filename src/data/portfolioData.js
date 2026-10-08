export const PROFILE = {
  name: "Saumya Keservani",
  email: "saumyakesarvani6475@gmail.com",
  phone: "+91 9621359631",
  location: "Gurgaon, Haryana, India",
  resume: `${process.env.PUBLIC_URL || ""}/Saumya_Keservani_Resume.pdf`,
};

export const SOCIALS = {
  linkedin: "https://www.linkedin.com/in/saumya-keservani-416136202/",
  github: "https://github.com/saumya123tp8",
  leetcode: "https://leetcode.com/tonyskuk/",
  codeforces: "https://codeforces.com/profile/strike123r",
  codechef: "https://codechef.com/users/jmstrike123r",
};

export const NAV_LINKS = ["About", "Experience", "Projects", "Skills", "Contact"];

export const TYPED_ROLES = [
  "Software Developer @ TCS",
  "Java & Spring Boot Engineer",
  "Kafka · Microservices · Payments",
  "Competitive Programmer",
];

export const HERO_STATS = [
  { value: 2, suffix: "+", label: "Year Of Experience" }, 
  { value: 20, suffix: "+", label: "Production features shipped" },
  { value: 10, suffix: "+", label: "Spring Boot microservices" },
  // { value: 100, suffix: "+", label: "ISO 20022 attributes introduced" },
  { value: 2000, suffix: "+", label: "DSA problems solved" },
];

export const ABOUT = [
  "I'm a backend-focused software developer at TCS, building high-value payment systems for distributed banking platforms with Java, Spring Boot and Kafka.",
  "Day to day that means migrating legacy SWIFT MT messages to ISO 20022 MX, designing event-driven microservices, and keeping critical transaction flows correct and stable.",
  "Outside work I build full-stack products end to end — my latest, JMSCommerce, is a live e-commerce platform on AWS — and I keep my problem-solving sharp on Codeforces, CodeChef and LeetCode.",
];

export const EXPERIENCE = [
  {
    company: "Tata Consultancy Services (TCS)",
    short: "TCS",
    role: "Software Developer",
    period: "Sep 2024 – Present",
    type: "In-Office",
    current: true,
    tags: ["Java", "Spring Boot", "Kafka", "Oracle/MySQL", "Microservices", "SOAP/REST","Swagger", "FinTech"],
    points: [
      "Engineered and deployed 20+ production features, resolving high-priority defects and improving system stability.",
      "Implemented the Master Settlement Account feature, reducing direct transactions by 40% and improving efficiency.",
      "Migrated 20+ MT messages to ISO 20022 MX format, introducing 100+ attributes for high-value transaction processing.",
      "Developed and maintained Spring MVC services, improving development efficiency by 20%.",
      "Designed and developed 10+ Spring Boot microservices using Kafka-based messaging for asynchronous high-value payment processing across distributed banking services.",
    ],
  },
  {
    company: "AgiledCoders",
    short: "AgiledCoders",
    role: "Software Developer Intern",
    period: "Jun 2024 – Aug 2024",
    type: "Remote",
    current: false,
    tags: ["React.js", "Node.js", "PL/SQL", "Docker", "Agile"],
    points: [
      "Delivered 30% of core website features and resolved critical bugs using React.js, Node.js, PL/SQL and Docker.",
      "Led a 3-member intern team, coordinating project execution and achieving 100% on-time delivery in an Agile environment.",
    ],
  },
];

export const PROJECTS = [
  {
    name: "JMSCommerce",
    kicker: "Full-stack E-commerce Platform · May 2026 – Present",
    featured: true,
    desc: "A production-ready e-commerce platform spanning 8+ business domains — Product, Variant, Cart, Order, Inventory, Review, Report, Customization and Payment — deployed live on AWS.",
    points: [
      "Concurrency-safe order and inventory workflows using atomic SQL updates, optimistic locking, transactional boundaries and inventory reservation/release to prevent overselling.",
      "Failure-resilient cart and payments: Redis-backed cart, inventory/pricing revalidation, Razorpay webhook verification, payment retries and explicit payment states to handle duplicate callbacks.",
      "Containerized with Docker and deployed on AWS (EC2 backend, S3 media storage) with JWT/OAuth authentication and environment-based production config.",
    ],
    tech: ["Spring Boot", "Spring Security", "React", "MySQL", "Redis", "Razorpay", "Docker", "AWS EC2", "AWS S3", "JWT / OAuth"],
    link: "https://jmscommerce.in/",
    linkLabel: "Live Demo",
    github: "https://github.com/saumya123tp8/JMSCommerce_dev",
  },
  {
    name: "Quora Backend",
    kicker: "Scalable Q&A Platform",
    featured: false,
    desc: "A reactive Q&A backend built for high read and engagement throughput.",
    points: [
      "Spring WebFlux + MongoDB with cursor-based pagination for question feeds and offset-based pagination for search.",
      "Kafka-driven asynchronous view and like-count processing to decouple high-frequency engagement events.",
      "Elasticsearch integration for question/answer search well beyond MongoDB's basic querying.",
    ],
    tech: ["Spring WebFlux", "MongoDB", "Kafka", "Elasticsearch", "Offset & Cursor Pagination", "Reactive Programming"],
    link: null,
    github: "https://github.com/saumya123tp8/quoraApp",
  },
];

export const SKILLS = {
  "Languages & CS": ["Java", "C++", "JavaScript", "System Design (HLD/LLD)", "OOP", "DBMS", "DSA"],
  Backend: ["Spring Boot", "Spring AI", "Node.js", "REST APIs", "Kafka", "Redis", "RAG", "MCP", "Prompting"],
  "Databases & Cloud": ["MySQL", "MongoDB", "AWS", "Docker"],
  "Frontend & Tools": ["React.js", "HTML/CSS", "Git", "Postman", "Swagger"],
};

export const CP_PROFILES = [
  {
    platform: "LeetCode",
    title: "Knight",
    value: "1942",
    note: "Contest rating",
    color: "#FFA116",
    href: SOCIALS.leetcode,
  },
  {
    platform: "CodeChef",
    title: "4★ Coder",
    value: "1835",
    note: "Peak rating",
    color: "#C9A27A",
    href: SOCIALS.codechef,
  },
  {
    platform: "Codeforces",
    title: "Specialist",
    value: "1470",
    note: "Rating",
    color: "#38BDF8",
    href: SOCIALS.codeforces,
  },
];

export const ACHIEVEMENTS = [
  {
    label: "TCS CodeVita Season 11",
    value: "Global Rank 251",
    note: "Round 2 · Top 1%",
    color: "#34D399",
    href: "https://drive.google.com/file/d/1RSNIJcSvmsn_Io3vCARc1g2JFon3EWZ3/view?usp=sharing",
  },
  {
    label: "CodeKaze Sept '23",
    value: "AIR 139",
    note: "Among 30K+ participants",
    color: "#FB923C",
    href: "https://drive.google.com/file/d/1Zgl2H7IkaergWKEw0RwTQEhXtXJmHjAH/view?usp=sharing",
  },
  {
    label: "Problems Solved",
    value: "2000+",
    note: "CodeChef, Codeforces, LeetCode, GFG",
    color: "#F472B6",
    href: null,
  },
];

export const EDUCATION = {
  school: "Harcourt Butler Technical University",
  location: "Kanpur, India",
  degree: "B.Tech in Computer Science and Engineering",
  period: "Nov 2020 – Jul 2024",
  score: "CGPA 8.27 / 10",
};

export const CONTACT_LINKS = [
  { label: "LinkedIn", icon: "linkedin", href: SOCIALS.linkedin },
  { label: "GitHub", icon: "github", href: SOCIALS.github },
  { label: "LeetCode", icon: "leetcode", href: SOCIALS.leetcode },
  { label: "Codeforces", icon: "codeforces", href: SOCIALS.codeforces },
  { label: "CodeChef", icon: "codechef", href: SOCIALS.codechef },
];
