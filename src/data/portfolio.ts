export interface ShowcaseSlide {
  imgUrl: string;
}

export interface ProjectSlide {
  url: string;
  imgSrc: string;
  authorName: string;
}

export interface CareerPoint {
  id: string;
  className: string;
  title: string;
  period: string;
  description: string;
}

export interface SkillPoint {
  id: string;
  className: string;
  title: string;
  skills: string[];
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
  {
    url: "https://www.datarails.com/",
    imgSrc: "/images/a/2.PNG",
    authorName: "chart diagrams demo",
  },
  {
    url: "https://globalbeautyrank.com/",
    imgSrc: "/images/a/3.png",
    authorName: "Integrated Stripe of global beauty ratings site",
  },
  {
    url: "http://www.lavalife.com/",
    imgSrc: "/images/a/4.png",
    authorName: "Lavalife dating app using React.js",
  },
  {
    url: "https://ubiops.com/",
    imgSrc: "/images/a/5.PNG",
    authorName: "UbiOps Web Interface Development",
  },
  {
    url: "https://www.optum.com/",
    imgSrc: "/images/a/6.PNG",
    authorName: "Healthcare Service Platform",
  },
  {
    url: "https://apps.apple.com/us/app/ezcater-business-catering/id1162865183",
    imgSrc: "/images/b/1.PNG",
    authorName: "ezCater-Business Catering(Mobile APP)",
  },
  {
    url: "https://apps.apple.com/us/app/the-good-pour/id6444543461?uo=2",
    imgSrc: "/images/b/2.PNG",
    authorName: "The Good Pour_React Native",
  },
  {
    url: "https://apps.apple.com/us/app/blapp-black-owned-businesses/id1573799218",
    imgSrc: "/images/b/3.PNG",
    authorName: "Blapp - Black-owned businesses",
  },
  {
    url: "https://thegrint.com/",
    imgSrc: "/images/b/4.PNG",
    authorName: "TheGrint_Golf APP",
  },
  {
    url: "https://www.arthurmurrayofficial.com/",
    imgSrc: "/images/b/5.PNG",
    authorName: "Arthur Murray Official",
  },
  {
    url: "https://www.meniudigital.ro/",
    imgSrc: "/images/b/6.PNG",
    authorName: "Digital Menu™",
  },
  {
    url: "https://cryptololis.lol/#/",
    imgSrc: "/images/c/1.PNG",
    authorName: "second presale phases Cryptololis",
  },
  {
    url: "https://en.cryptospells.jp/",
    imgSrc: "/images/c/2.PNG",
    authorName: "Vue.js and Ruby integration third-party services",
  },
  {
    url: "https://dear-ella.c2x.world/en?",
    imgSrc: "/images/c/3.PNG",
    authorName: "Dear-ella XPLA Blockchain Ecosystem",
  },
];

export const careerPoints: CareerPoint[] = [
  {
    id: "pnt1",
    className: "pnt1",
    title: "Front End Developer",
    period: "( 2017 - 2019 )",
    description:
      "-Achieved a substantial 40% growth in sales through the implementation of a scalable design.\n-Crafted SEO strategies to achieve prominent rankings across top browser platforms.\n-Developed an app that monitors the trading activity of automated trading systems.\n-Integrated WebSockets data sources with a React UI layer.\n-Introduced Scrum processes such as sprints, planning, retros, and demos.\n-Developed new features using TypeScript, Next.js, React, and Redux.\n-Maintained the existing code and deployed new features using Vercel.\n-Tested front-end features and UI/UX using Cypress.",
  },
  {
    id: "pnt2",
    className: "pnt2",
    title: "Back End Developer",
    period: "(2019)",
    description:
      "-Developed back-end microservices in Node.js and TypeScript. Integrated them with AWS products (SQS, SMS, ES, and so on).\n-Prepared MySQL database architecture and migrations.\n-Migrated the database from Firebase with NoSQL to SQL with PostgreSQL, reducing infrastructure costs and running real-time BI.\n-Imported numerous external data in the core database, some coming from structured sources and others from free-form sources.\n-Developed tools to support the data-management team activity by providing insights about data issues and business-related inconsistencies.",
  },
  {
    id: "pnt3",
    className: "pnt3",
    title: "Full Stack Developer",
    period: "( 2019 - 2023 )",
    description:
      "-Implemented new features for a veterinarian platform that make managing animal documentation easier using React and TypeScript.\n-Conducted small improvements and maintenance for a React Native application—iOS and Android versions—for the veterinary platform clients.\n- Improved and maintained a PDF documents generator based on React PDF library that allows veterinarians to print full animal health documentation.\n- Developed an app that allows users to speak to an AI avatar and, based on the scenario, produces feedback about their communication skills.\n- Prepared an analytics page with user record statistics in the app using AG Grid and AG Charts libraries.\n- Constructed a library that enables connections to back-end services and React applications via WebSockets.",
  },
  {
    id: "pnt4",
    className: "pnt4",
    title: "Senior Full Stack Developer",
    period: "( 2023 - Present )",
    description:
      "-Built multiple web apps using combinations of React, React Native, Next.js, the MERN stack, and several different APIs.\n-Fixed issues with the legacy application not supporting modern browsers while maintaining backward compatibility.\n- Allowed the client's business to operate uninterrupted by the rapidly changing technology and user habits.\n- Developed and maintained the internal portal for financial management for the client.\n- Collaborated with multiple stakeholders with various requirements to develop the best possible software solution.\n- Adapted the back end to switch from MySQL to MongoDB, enhancing the scalability and performance of the database system better to handle the increasing volume of user data and transactions.",
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

export const socialLinks = {
  email:
    "mailto:alicia0925martin@gmail.com?subject=Hello&body=Hi%20there! I saw your portfolio.",
  discord: "https://discordapp.com/users/1506318029984764036",
  telegram: "https://t.me/crystal_xxk2",
};

export const aboutText =
  "I am a highly skilled blockchain and full stack developer with extensive experience in designing and implementing complex decentralized applications and web solutions. My expertise spans various blockchain technologies, including Ethereum, Solidity and smart contract development, as well as full stack development using modern frameworks and languages such as React, React Native, Node.js and Python.";
