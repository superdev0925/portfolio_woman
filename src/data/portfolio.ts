export interface ShowcaseSlide {
  imgUrl: string;
}

export interface ProjectSlide {
  url: string;
  imgSrc: string;
  authorName: string;
}

export type CareerIcon = "clip" | "design" | "toonz" | "speed";
export type CareerMarker = "ring" | "glow" | "soft";

export interface CareerPoint {
  id: string;
  className: string;
  title: string;
  icon: CareerIcon;
  marker: CareerMarker;
  categoryId: string;
  period: string;
  description: string;
}

export interface SkillPoint {
  id: string;
  className: string;
  title: string;
  skills: string[];
}

export type ProjectCategoryIcon =
  | "clip"
  | "design"
  | "fanart"
  | "toonz"
  | "speed";

export type ProjectCategoryTheme = "rose" | "sky" | "pink" | "mint" | "lilac";

export type ProjectMediaKind = "video" | "image";

export interface ProjectCategory {
  id: string;
  title: string;
  subtitle: string;
  icon: ProjectCategoryIcon;
  theme: ProjectCategoryTheme;
  kind: ProjectMediaKind;
  items: string[];
}

export const showcaseSlides: ShowcaseSlide[] = [
  { imgUrl: "/images/e/s.jpg" },
];

export const projectSlides: ProjectSlide[] = [
  {
    url: "https://humans.ai/",
    imgSrc: "/images/a/1.PNG",
    authorName: "Humans.ai platform using Next.js and TailwindCSS",
  },
];

export const careerPoints: CareerPoint[] = [
  {
    id: "pnt1",
    className: "pnt1",
    title: "Character design",
    icon: "design",
    marker: "ring",
    categoryId: "character-design",
    period: "",
    description: "",
  },
  {
    id: "pnt2",
    className: "pnt2",
    title: "Clip Studio Paint",
    icon: "clip",
    marker: "glow",
    categoryId: "clip-studio",
    period: "",
    description: "",
  },
  {
    id: "pnt3",
    className: "pnt3",
    title: "OpenToonz",
    icon: "toonz",
    marker: "soft",
    categoryId: "opentoonz",
    period: "",
    description: "",
  },
  {
    id: "pnt4",
    className: "pnt4",
    title: "Other",
    icon: "speed",
    marker: "ring",
    categoryId: "other",
    period: "",
    description: "",
  },
];

export const skillPoints: SkillPoint[] = [
  {
    id: "pnt_five1",
    className: "pnt_five1",
    title: "Front-End Skills",
    skills: [
      "HTML5", "CSS3", "JavaScript", "TypeScript", "React.js", "Angular", "Vue.js",
      "SASS/SCSS", "Bootstrap", "Tailwind CSS", "Material-UI", "Styled Components",
      "Webpack", "Babel", "jQuery", "Next.js", "Nuxt.js", "Progressive Web Apps (PWAs)",
      "AJAX", "Responsive Web Design",
    ],
  },
  {
    id: "pnt_five2",
    className: "pnt_five2",
    title: "Back-End Skills",
    skills: [
      "Node.js", "Express.js", "Django (Python)", "Ruby on Rails", "PHP", "Laravel",
      "ASP.NET", "Spring Boot (Java)", "GraphQL", "RESTful APIs",
      "Authentication (OAuth, JWT)", "Server-Side Rendering (SSR)", "WebSockets",
      "Socket.io", "Session & Cookie Management", "Web Security (CORS, CSRF, XSS)",
    ],
  },
  {
    id: "pnt_five3",
    className: "pnt_five3",
    title: "Database",
    skills: [
      "MySQL", "PostgreSQL", "MongoDB", "Firebase Firestore", "SQLite", "Redis",
      "DynamoDB", "Oracle Database", "Cassandra", "Database Indexing",
      "ACID Transactions", "SQL Optimization", "Migrations (Flyway, Liquibase)",
      "ORM (Sequelize, TypeORM, Mongoose)",
    ],
  },
  {
    id: "pnt_five4",
    className: "pnt_five4",
    title: "Version Control",
    skills: [
      "Git", "GitHub", "GitLab", "Bitbucket", "Continuous Integration (CI/CD)",
      "Docker", "Kubernetes", "Jenkins", "Travis CI", "CircleCI",
      "Code Reviews", "GitFlow",
    ],
  },
  {
    id: "pnt_five5",
    className: "pnt_five5",
    title: "DevOps",
    skills: [
      "Amazon Web Services (AWS)", "Microsoft Azure", "Google Cloud Platform (GCP)",
      "Firebase Hosting", "Heroku", "Netlify", "Vercel", "Cloud Functions",
      "Docker Compose", "Terraform", "Serverless Architecture", "Load Balancing",
    ],
  },
];

export const projectCategories: ProjectCategory[] = [
  {
    id: "character-design",
    title: "Character design",
    subtitle: "Characters / Concepts",
    icon: "design",
    theme: "sky",
    kind: "video",
    items: [
      "/projects/Character design/1.mp4",
      "/projects/Character design/2.mp4",
      "/projects/Character design/3.mp4",
      "/projects/Character design/4.jpg",
    ],
  },
  {
    id: "clip-studio",
    title: "Clip Studio Paint",
    subtitle: "Illustration & Painting",
    icon: "clip",
    theme: "rose",
    kind: "video",
    items: [
      "/projects/Clip Studio Paint/1.mp4",
      "/projects/Clip Studio Paint/2.mp4",
      "/projects/Clip Studio Paint/csp (10).mp4",
      "/projects/Clip Studio Paint/csp (11).mp4",
      "/projects/Clip Studio Paint/csp (12).mp4",
      "/projects/Clip Studio Paint/csp (13).mp4",
      "/projects/Clip Studio Paint/csp (14).mp4",
      "/projects/Clip Studio Paint/csp (15).mp4",
      "/projects/Clip Studio Paint/csp (16).mp4",
    ],
  },
  {
    id: "opentoonz",
    title: "OpenToonz",
    subtitle: "Animation / Frame by Frame",
    icon: "toonz",
    theme: "mint",
    kind: "video",
    items: [
      "/projects/OpenToonz/0913.mp4",
      "/projects/OpenToonz/0913(1).mp4",
    ],
  },
  {
    id: "other",
    title: "Other",
    subtitle: "More work",
    icon: "speed",
    theme: "lilac",
    kind: "image",
    items: [
      "/projects/Other/1.png",
      "/projects/Other/1 (1).png",
      "/projects/Other/1 (2).jpg",
      "/projects/Other/1 (2).mp4",
      "/projects/Other/1 (3).jpg",
      "/projects/Other/2.jpg",
      "/projects/Other/3.png",
      "/projects/Other/4.jpg",
      "/projects/Other/5.jpg",
      "/projects/Other/6.jpg",
      "/projects/Other/7.mp4",
    ],
  },
];

export const introLetter = {
  lead: [
    "Creating captivating characters and",
    "breathing life into static objects—this is the work I love most.",
  ],
  thanks: ["Thank you sincerely", "for visiting my world."],
  close: [
    "I look forward to collaborating on exciting projects",
    "and creating truly wonderful results together.",
  ],
  name: "Mumei",
};

export const socialLinks = {
  email:
    "mailto:alicia0925martin@gmail.com?subject=Hello&body=Hi%20there! I saw your portfolio.",
  discord: "https://discord.com/users/1531638870578429994",
  whatsapp: "https://wa.me/79818795598",
};

export const aboutText =
  "I am a highly skilled blockchain and full stack developer with extensive experience in designing and implementing complex decentralized applications and web solutions. My expertise spans various blockchain technologies, including Ethereum, Solidity and smart contract development, as well as full stack development using modern frameworks and languages such as React, React Native, Node.js and Python.";
